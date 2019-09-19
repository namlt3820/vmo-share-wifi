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
import Validator, { EMAIL_REGEX } from '../utils/validator';
import ForgotPwd from '../services/forgotPwd.service';
import httpStatus from '../config/httpStatus';

const forgot = new ForgotPwd();
export default class Forgot extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      errors: {}
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

  forgotPwd = () => {
    const { email, errors } = this.state;
    const valied = { ...errors };
    forgot.forgotPwd({ email }).then(res => {
      if (res.status === httpStatus.StatusNotFound) {
        valied.email = res.data.errors[0].message;
      } else {
        valied.email = res.data.errors[0].message;
      }
      this.setState({ errors: valied });
    });
  };

  render() {
    const { email, errors } = this.state;
    return (
      <WrapperComponent>
        <WrapperForm>
          <Logo>
            <img src="assets/logo.png" alt="Share Wifi" />
            <div>Forgot Password</div>
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
          </WrapperInput>
          <WrapperAction type="forgot">
            <ButtonStyle onClick={this.forgotPwd}>
              Send recovery email
            </ButtonStyle>
          </WrapperAction>
        </WrapperForm>
      </WrapperComponent>
    );
  }
}
