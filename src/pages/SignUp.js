import React, { Component } from 'react';
import { Checkbox } from 'antd';
import { Redirect } from 'react-router-dom';
import {
  WrapperComponent,
  WrapperForm,
  Logo,
  WrapperInput,
  WrapperAction,
  CheckBoxAccess,
  ButtonStyle
} from '../components/Authentication';
import FormInput from '../components/core/FormInput';
import Validator, { EMAIL_REGEX } from '../utils/validator';
import httpStatus from '../config/httpStatus';
import User from '../services/user.service';

const user = new User();
export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      redirect: false,
      checked: false,
      errors: {}
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
    const valied = { ...errors };
    if (!validateEmail && email.length === 0) {
      valied.email = 'Require Email';
      this.setState({ errors: valied });
    } else if (!validateEmail && email.length > 0) {
      valied.email = 'Invalid Email';
      this.setState({ errors: valied });
    } else {
      valied.email = '';
      this.setState({ errors: valied });
    }
  };

  handleValidatePassword = () => {
    const { password, errors } = this.state;
    const validatePassword = Validator.isValidPassword(password);
    const valied = { ...errors };
    if (!validatePassword && password.length === 0) {
      valied.password = 'Require Password';
      this.setState({ errors: valied });
    } else if (!validatePassword && password.length > 0) {
      valied.password = 'Invalid Password';
      this.setState({ errors: valied });
    } else {
      valied.password = '';
      this.setState({ errors: valied });
    }
  };

  handleValidateUsername = () => {
    const { name, errors } = this.state;
    const validateUsername = Validator.isValidUsername(name);
    const valied = { ...errors };
    if (!validateUsername && name.length === 0) {
      valied.name = 'Require Name';
      this.setState({ errors: valied });
    } else if (!validateUsername && name.length > 0) {
      valied.name = 'Invalid Name';
      this.setState({ errors: valied });
    } else {
      valied.name = '';
      this.setState({ errors: valied });
    }
  };

  signUp = () => {
    const { name, email, password, errors } = this.state;
    const params = {
      name,
      email,
      password
    };
    user.signUp(params).then(res => {
      if (res.status === httpStatus.StatusBadRequest) {
        this.setState({ redirect: false });
      } else if (res.status === httpStatus.StatusConflict) {
        const valied = { ...errors };
        valied.email = 'This email is already existed.';
        this.setState({ redirect: false, errors: valied });
      } else {
        this.setState({ redirect: true });
      }
    });
  };

  handleCheckbox = () => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  render() {
    const { name, email, password, errors, redirect, checked } = this.state;
    const result = redirect ? (
      <Redirect
        to={{
          pathname: '/login'
        }}
      />
    ) : (
      <WrapperComponent>
        <WrapperForm form="login">
          <Logo>
            <img src="assets/logo.png" alt="Share Wifi" />
            <div>Create your account.</div>
          </Logo>
          <WrapperInput>
            <FormInput
              placeholder="Enter Username"
              label="Username"
              name="name"
              type="text"
              error={errors.name}
              value={name}
              handleChange={this.handleChange}
              handleBlur={this.handleValidateUsername}
            />
            <FormInput
              placeholder="Enter Email"
              label="Email"
              name="email"
              type="email"
              error={!errors.name ? errors.email : ''}
              value={email}
              handleChange={this.handleChange}
              handleBlur={this.handleValidateEmail}
            />
            <FormInput
              placeholder="Enter Password"
              label="Password"
              name="password"
              type="password"
              error={!errors.name && !errors.email ? errors.password : ''}
              value={password}
              handleChange={this.handleChange}
              handleBlur={this.handleValidatePassword}
            />
          </WrapperInput>
          <WrapperAction type="signup">
            <CheckBoxAccess type="signup">
              <Checkbox checked={checked} onChange={this.handleCheckbox} />
              <div>I accept the Terms and Conditions</div>
            </CheckBoxAccess>
            <ButtonStyle onClick={this.signUp} disabled={!checked}>
              SignUp
            </ButtonStyle>
          </WrapperAction>
        </WrapperForm>
      </WrapperComponent>
    );
    return result;
  }
}
