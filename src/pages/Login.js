import React, { Component } from 'react';
import { Checkbox } from 'antd';
import FormInput from '../components/core/FormInput';
import {
  WrapperComponent,
  WrapperForm,
  Logo,
  WrapperInput,
  WrapperAction,
  CheckBoxAccess,
  ButtonStyle
} from '../components/Authentication';
import LayoutMain from '../layout/LayoutMain';
import Validator, { EMAIL_REGEX } from '../utils/validator';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    if (name === 'email' && EMAIL_REGEX.test(value)) {
      this.handleValidateEmail();
    } else if (name === 'password' && value.length > 6) {
      this.handleValidatePassword();
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

  render() {
    const { email, password, errors } = this.state;
    return (
      <LayoutMain>
        <WrapperComponent>
          <WrapperForm>
            <Logo>
              <img src="assets/logo.png" alt="Italian Trulli" />
              <div>Welcome Back</div>
            </Logo>
            <WrapperInput>
              <FormInput
                placeholder="Enter Email"
                label="Email"
                name="email"
                type="email"
                error={errors.email}
                value={email}
                handleChange={this.handleChange}
                handleBlur={this.handleValidateEmail}
              />
              <FormInput
                placeholder="Enter Password"
                label="Password"
                name="password"
                type="password"
                error={errors.password}
                value={password}
                handleChange={this.handleChange}
                handleBlur={this.handleValidatePassword}
              />
            </WrapperInput>
            <WrapperAction type="login">
              <ButtonStyle>Login</ButtonStyle>
              <CheckBoxAccess type="login">
                <Checkbox defaultChecked={false} />
                <div>Remember me</div>
              </CheckBoxAccess>
            </WrapperAction>
          </WrapperForm>
        </WrapperComponent>
      </LayoutMain>
    );
  }
}
