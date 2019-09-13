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
import Validator from '../utils/validator';

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
  };

  handleValidateForm = () => {
    const { email, password } = this.state;
    const validateEmail = Validator.isValidEmailAddress(email);
    const validatePassword = Validator.isValidPassword(password);
    const errors = {};
    if (!validateEmail) {
      errors.email = 'Invalid Email';
      this.setState({ errors });
    } else if (!validatePassword) {
      errors.password = 'Invalid Password';
      this.setState({ errors });
    } else {
      this.setState({ errors: '' });
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
                error={errors.email}
                value={email}
                handleChange={this.handleChange}
                handleBlur={this.handleValidateForm}
              />
              <FormInput
                placeholder="Enter Password"
                label="Password"
                name="password"
                error={errors.password}
                value={password}
                handleChange={this.handleChange}
                handleBlur={this.handleValidateForm}
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
