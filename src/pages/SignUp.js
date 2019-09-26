import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {
  WrapperComponent,
  WrapperForm,
  Logo,
  WrapperInput,
  WrapperAction,
  CheckBoxAccess,
  ButtonStyle,
  CheckboxStyle,
  OutSide
} from '../components/Authentication';
import FormInput from '../components/core/FormInput';
import Validator, { EMAIL_REGEX } from '../utils/validator';
import httpStatus from '../config/httpStatus';
import User from '../services/user.service';
import Errors from '../commons/error_validate';
import getToken from '../utils/getToken';

const user = new User();
export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      redirect: false,
      loading: false,
      checked: false,
      errors: {}
    };
  }

  componentDidUpdate() {
    getToken(this.props.history);
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

  handleValidateUsername = () => {
    const { name, errors } = this.state;
    const validateUsername = Validator.isValidUsername(name);
    errors.name = Errors.handleValidate(validateUsername, name, 'Name');
    this.setState({ errors });
  };

  signUp = () => {
    const { name, email, password, errors } = this.state;
    this.setState({ loading: true });
    const params = {
      name,
      email,
      password
    };
    user.signUp(params).then(res => {
      const { message } = res.data;
      const valied = { ...errors };
      if (res.status === httpStatus.StatusBadRequest) {
        message.forEach(m => {
          if (m.location === 'email') {
            valied.email = m.message;
          } else if (m.location === 'password') {
            valied.password = m.message;
          } else {
            valied.name = m.message;
          }
        });
        this.setState({ redirect: false, loading: false, errors: valied });
      } else if (res.status === httpStatus.StatusConflict) {
        valied.email = 'Email is already exists';
        this.setState({ redirect: false, errors: valied, loading: false });
      } else {
        this.setState({ redirect: true, loading: false });
      }
    });
  };

  handleCheckbox = () => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  render() {
    const {
      name,
      email,
      password,
      errors,
      redirect,
      checked,
      loading
    } = this.state;
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
            <div>Create your account</div>
          </Logo>
          <WrapperInput>
            <FormInput
              placeholder="Name"
              name="name"
              type="text"
              error={errors.name}
              value={name}
              handleChange={this.handleChange}
              handleBlur={this.handleValidateUsername}
            />
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
          </WrapperInput>
          <WrapperAction type="signup">
            <CheckBoxAccess type="signup">
              <CheckboxStyle checked={checked} onChange={this.handleCheckbox} />
              <div>I accept the Terms and Conditions</div>
            </CheckBoxAccess>
            <ButtonStyle
              onClick={this.signUp}
              loading={loading}
              disabled={!checked || !name || !email || !password}
            >
              SignUp
            </ButtonStyle>
          </WrapperAction>
        </WrapperForm>
        <OutSide>
          Already have an account?&nbsp;
          <Link to="/login">Login</Link>
        </OutSide>
      </WrapperComponent>
    );
    return result;
  }
}
