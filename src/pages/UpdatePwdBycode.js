import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FormInput from '../components/core/FormInput';
import {
  WrapperComponent,
  WrapperForm,
  WrapperFormContent,
  Logo,
  WrapperInput,
  WrapperAction,
  ButtonStyle,
  OutSide
} from '../components/Authentication';
import UpdatePwd from '../services/updatePwdBycode.service';
import httpStatus from '../config/httpStatus';
import Validator from '../utils/validator';
import Errors from '../commons/error_validate';

const updatePwd = new UpdatePwd();
class UpdatePwdBycode extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      code: '',
      errors: {},
      loading: false,
      redirect: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleValidatePassword = () => {
    const { password, errors } = this.state;
    const validatePassword = Validator.isValidPassword(password);
    errors.password = Errors.handleValidate(
      validatePassword,
      password,
      'Password'
    );
    this.setState({ errors });
  };

  handleValidateCode = () => {
    const { code, errors } = this.state;
    const validateCode = Validator.isValidCode(code);
    errors.code = Errors.handleValidate(validateCode, code, 'Code');
    this.setState({ errors });
  };

  updatePwd = () => {
    const { password, code, errors } = this.state;
    const { email } = this.props.location;
    this.setState({ loading: true });
    const valied = { ...errors };
    const params = {
      email,
      password,
      code
    };
    updatePwd.updatePwdBycode(params).then(res => {
      if (
        res.status === httpStatus.StatusBadRequest ||
        res.status === httpStatus.StatusNotFound
      ) {
        res.data.errors.map(error => {
          if (error.location === 'password') {
            valied.password = error.message;
          } else if (error.location === 'code') {
            valied.code = error.message;
          }
          return valied;
        });
        this.setState({ errors: valied, loading: false, redirect: false });
      } else if (res.status === httpStatus.StatusNoContent) {
        this.setState({ loading: true, redirect: true });
      }
    });
  };

  keyPressed = e => {
    const { password, code } = this.state;
    if (e.keyCode === 13) {
      if (code && password) {
        this.updatePwd();
      }
    }
  };

  render() {
    const { password, errors, loading, code, redirect } = this.state;
    const result = redirect ? (
      <Redirect
        to={{
          pathname: '/dashboard'
        }}
      />
    ) : (
      <WrapperComponent>
        <WrapperForm form="login">
          <WrapperFormContent>
            <Logo>
              <img src="assets/logo.png" alt="Share Wifi" />
              <div>Change Password</div>
            </Logo>
            <WrapperInput>
              <FormInput
                placeholder="New Password"
                name="password"
                type="password"
                error={errors.password}
                value={password}
                handleChange={this.handleChange}
                handleBlur={this.handleValidatePassword}
                keyPressed={this.keyPressed}
              />
              <FormInput
                placeholder="Active Code"
                name="code"
                type="text"
                error={errors.code}
                value={code}
                handleChange={this.handleChange}
                handleBlur={this.handleValidateCode}
                keyPressed={this.keyPressed}
              />
            </WrapperInput>
            <WrapperAction type="change">
              <ButtonStyle loading={loading} onClick={this.updatePwd}>
                Change Password
              </ButtonStyle>
            </WrapperAction>
          </WrapperFormContent>
        </WrapperForm>
        <OutSide>
          Don&apos;t have an account?&nbsp;<a href="#1">Signup Now</a>
        </OutSide>
      </WrapperComponent>
    );
    return result;
  }
}
export default UpdatePwdBycode;
