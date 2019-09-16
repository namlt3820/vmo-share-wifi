import React, { Component } from 'react';
import FormInput from '../components/core/FormInput';
import {
  WrapperComponent,
  WrapperForm,
  Logo,
  WrapperInput,
  WrapperAction,
  ButtonStyle
} from '../components/Authentication';
import LayoutMain from '../layout/LayoutMain';
import Validator from '../utils/validator';

export default class Forgot extends Component {
  constructor() {
    super();
    this.state = { email: '', error: '' };
  }

  handleValidateForm = () => {
    const { email } = this.state;
    const validateEmail = Validator.isValidEmailAddress(email);
    if (!validateEmail) {
      this.setState({ error: 'Invalid Email' });
    } else {
      this.setState({ error: '' });
    }
  };

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    const { email, error } = this.state;
    return (
      <LayoutMain>
        <WrapperComponent>
          <WrapperForm>
            <Logo>
              <img src="assets/logo.png" alt="Italian Trulli" />
              <div>Forgot Password</div>
            </Logo>
            <WrapperInput>
              <FormInput
                placeholder="Enter Email"
                label="Email"
                name="email"
                type="email"
                error={error}
                value={email}
                handleChange={this.handleChange}
                handleBlur={this.handleValidateForm}
              />
            </WrapperInput>
            <WrapperAction type="forgot">
              <ButtonStyle>Send recovery email</ButtonStyle>
            </WrapperAction>
          </WrapperForm>
        </WrapperComponent>
      </LayoutMain>
    );
  }
}
