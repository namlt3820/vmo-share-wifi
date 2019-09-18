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
import LayoutMain from '../layout/LayoutMain';
import UpdatePwd from '../services/updatePwdBycode.service';
import httpStatus from '../config/httpStatus';
import Validator, { EMAIL_REGEX } from '../utils/validator';

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
    const { email } = this.state;
    const validateEmail = Validator.isValidEmailAddress(email);
    const valied = {};
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
    } else if (!validatePassword) {
      valied.password = 'Invalid Password';
      this.setState({ errors: valied });
    } else {
      valied.password = '';
      this.setState({ errors: valied });
    }
  };

  updatePwd = () => {
    const { email, password, code, errors } = this.state;
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
        this.setState({ errors: valied });
      }
      // else if (res.status === httpStatus.StatusBadRequest) {

      // }
      console.log('resss', res);
    });
  };

  render() {
    const { email, password, errors, loading, code } = this.state;
    return (
      <LayoutMain>
        <WrapperComponent>
          <WrapperForm>
            <Logo>
              <img src="assets/logo.png" alt="Share Wifi" />
              <div>Change Password</div>
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
              <FormInput
                placeholder="Enter Active Code"
                label="Active Code"
                name="code"
                type="text"
                error={errors.code}
                value={code}
                handleChange={this.handleChange}
              />
            </WrapperInput>
            <WrapperAction type="login">
              <ButtonStyle loading={loading} onClick={this.updatePwd}>
                Change Password
              </ButtonStyle>
            </WrapperAction>
          </WrapperForm>
          <OutSide>
            Don&apos;t have an account? <a href="#1">Signup Now</a>
          </OutSide>
        </WrapperComponent>
      </LayoutMain>
    );
  }
}
export default UpdatePwdBycode;
