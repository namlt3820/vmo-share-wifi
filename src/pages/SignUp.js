import React, { Component } from 'react';
import { Checkbox } from 'antd';
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
import LayoutMain from '../layout/LayoutMain';
import Validator, { EMAIL_REGEX } from '../utils/validator';

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
    } else if (name === 'name' && value.length > 4) {
      this.handleValidateUsername();
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
    const validatePassword = Validator.isValidPassword(name);
    const valied = { ...errors };
    if (!validatePassword && name.length === 0) {
      valied.name = 'Require Name';
      this.setState({ errors: valied });
    } else if (!validatePassword && name.length > 0) {
      valied.name = 'Invalid Name';
      this.setState({ errors: valied });
    } else {
      valied.name = '';
      this.setState({ errors: valied });
    }
  };

  render() {
    const { name, email, password, errors } = this.state;
    return (
      <LayoutMain>
        <WrapperComponent>
          <WrapperForm>
            <Logo>
              <img src="assets/logo.png" alt="Italian Trulli" />
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
                <Checkbox defaultChecked={false} />
                <div>I have read, understand, and agree </div>
              </CheckBoxAccess>
              <ButtonStyle>SignUp</ButtonStyle>
            </WrapperAction>
          </WrapperForm>
        </WrapperComponent>
      </LayoutMain>
    );
  }
}
