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
import Validator from '../utils/validator';

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
  };

  handleValidateForm = () => {
    const { name, email, password } = this.state;
    const validateEmail = Validator.isValidEmailAddress(email);
    const validatePassword = Validator.isValidPassword(password);
    const validateName = Validator.isValidUsername(name);
    const errors = {};
    if (!validateName) {
      errors.name = 'Invalid Name';
      this.setState({ errors });
    } else if (!validateEmail) {
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
                handleBlur={this.handleValidateForm}
              />
              <FormInput
                placeholder="Enter Email"
                label="Email"
                name="email"
                type="email"
                error={!errors.name ? errors.email : ''}
                value={email}
                handleChange={this.handleChange}
                handleBlur={this.handleValidateForm}
              />
              <FormInput
                placeholder="Enter Password"
                label="Password"
                name="password"
                type="password"
                error={!errors.name && !errors.email ? errors.password : ''}
                value={password}
                handleChange={this.handleChange}
                handleBlur={this.handleValidateForm}
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
