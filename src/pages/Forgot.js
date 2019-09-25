import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FormInput from '../components/core/FormInput';

import {
  WrapperComponent,
  WrapperForm,
  Logo,
  WrapperInput,
  WrapperAction,
  ButtonStyle
} from '../components/Authentication';
import Validator, { EMAIL_REGEX } from '../utils/validator';
import ForgotPwd from '../services/forgotPwd.service';
import httpStatus from '../config/httpStatus';
import Errors from '../commons/error_validate';

const forgot = new ForgotPwd();
export default class Forgot extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      errors: {},
      loading: false,
      redirect: false
    };
  }

  handleChange = event => {
    const { email } = this.state;
    this.setState({ email: event.target.value });
    if (EMAIL_REGEX.test(email)) {
      this.handleValidateEmail();
    }
  };

  handleValidateEmail = () => {
    const { email, errors } = this.state;
    const validateEmail = Validator.isValidEmailAddress(email);
    errors.email = Errors.handleValidate(validateEmail, email, 'Email');
    this.setState({ errors });
  };

  forgotPwd = () => {
    const { email, errors } = this.state;
    const valied = { ...errors };
    this.setState({ loading: true });
    forgot.forgotPwd({ email }).then(res => {
      this.setState({ loading: false });
      if (res.status === httpStatus.StatusNotFound) {
        valied.email = Errors.handleValidate(null, email, 'Email');
        this.setState({ redirect: false, errors: valied });
      } else if (res.status === httpStatus.StatusBadRequest) {
        valied.email = Errors.handleValidate(null, email, 'Email');
        this.setState({ redirect: false, errors: valied });
      } else {
        this.setState({ redirect: true });
      }
    });
  };

  keyPressed = event => {
    if (event.key === 'Enter') {
      this.forgotPwd();
    }
  };

  render() {
    const { email, errors, loading, redirect } = this.state;
    const result = redirect ? (
      <Redirect
        to={{
          pathname: '/updatePwdBycode',
          email
        }}
      />
    ) : (
      <WrapperComponent type="forgot">
        <WrapperForm form="forgot">
          <Logo>
            <img src="assets/logo.png" alt="Share Wifi" />
            <div>Forgot Password</div>
          </Logo>
          <WrapperInput>
            <FormInput
              placeholder="Email"
              name="email"
              type="email"
              error={errors.email}
              value={email}
              keyPressed={this.keyPressed}
              handleChange={this.handleChange}
              handleBlur={this.handleValidateEmail}
            />
          </WrapperInput>
          <WrapperAction type="forgot">
            <ButtonStyle onClick={this.forgotPwd} loading={loading}>
              Send recovery email
            </ButtonStyle>
          </WrapperAction>
        </WrapperForm>
      </WrapperComponent>
    );
    return result;
  }
}
