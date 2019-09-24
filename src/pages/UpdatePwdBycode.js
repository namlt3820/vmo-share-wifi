import React, { Component } from 'react';
import FormInput from '../components/core/FormInput';
import {
  WrapperComponent,
  WrapperForm,
  Logo,
  WrapperInput,
  WrapperAction,
  ButtonStyle,
  OutSide
} from '../components/Authentication';
import UpdatePwd from '../services/updatePwdBycode.service';
import httpStatus from '../config/httpStatus';
import Validator, { EMAIL_REGEX } from '../utils/validator';
import Errors from '../commons/error_validate';

const updatePwd = new UpdatePwd();
class UpdatePwdBycode extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      code: '',
      errors: {},
      loading: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    if (name === 'email' && EMAIL_REGEX.test(value)) {
      this.handleValidateEmail();
    }
  };

  handleValidateEmail = () => {
    const { email, errors } = this.state;
    const validateEmail = Validator.isValidEmailAddress(email);
    errors.email = Errors.handleValidate(validateEmail, email, 'Email');
    this.setState({ errors });
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

  updatePwd = () => {
    const { email, password, code, errors } = this.state;
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
          if (error.location === 'email') {
            valied.email = error.message;
          } else if (error.location === 'password') {
            valied.password = error.message;
          } else {
            valied.code = error.message;
          }
          return valied;
        });
        this.setState({ errors: valied, loading: false });
      }
    });
  };

  render() {
    const { email, password, errors, loading, code } = this.state;
    return (
      <WrapperComponent>
        <WrapperForm form="login">
          <Logo>
            <img src="assets/logo.png" alt="Share Wifi" />
            <div>Change Password</div>
          </Logo>
          <WrapperInput>
            <FormInput
              placeholder="Email"
              name="email"
              type="email"
              error={errors.email}
              value={email}
              handleChange={this.handleChange}
              handleBlur={this.handleValidateEmail}
            />
            <FormInput
              placeholder="Password"
              name="password"
              type="password"
              error={errors.password}
              value={password}
              handleChange={this.handleChange}
              handleBlur={this.handleValidatePassword}
            />
            <FormInput
              placeholder="Active Code"
              name="code"
              type="text"
              error={errors.code}
              value={code}
              handleChange={this.handleChange}
            />
          </WrapperInput>
          <WrapperAction type="change">
            <ButtonStyle loading={loading} onClick={this.updatePwd}>
              Change Password
            </ButtonStyle>
          </WrapperAction>
        </WrapperForm>
        <OutSide>
          Don&apos;t have an account? <a href="#1">Signup Now</a>
        </OutSide>
      </WrapperComponent>
    );
  }
}
export default UpdatePwdBycode;
