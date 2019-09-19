import React, { Component } from 'react';
import { Checkbox, Icon } from 'antd';
import { connect } from 'react-redux';
import FormInput from '../components/core/FormInput';
import {
  WrapperComponent,
  WrapperForm,
  Logo,
  WrapperInput,
  WrapperAction,
  CheckBoxAccess,
  ButtonStyle,
  Bottom,
  OutSide
} from '../components/Authentication';
import Validator, { EMAIL_REGEX } from '../utils/validator';
import { login } from '../store/actions/authenticate';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
      checked: false,
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

  login = () => {
    const { email, password, errors } = this.state;
    this.setState({ loading: false });
    const valied = { ...errors };
    const { login, history } = this.props;
    const params = {
      email,
      password
    };
    login(params, history).then(res => {
      if (res.code === 'password_incorrect') {
        valied.password = res.message;
      } else {
        valied.email = res.message;
      }
      this.setState({ errors: valied });
    });
  };

  handleCheckbox = () => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  render() {
    const { email, password, errors, checked, loading } = this.state;
    return (
      <WrapperComponent>
        <WrapperForm>
          <Logo>
            <img src="assets/logo.png" alt="Share Wifi" />
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
            <ButtonStyle
              loading={loading}
              disabled={!checked || !email || !password}
              onClick={this.login}
            >
              Login
            </ButtonStyle>
            <CheckBoxAccess type="login">
              <Checkbox checked={checked} onChange={this.handleCheckbox} />
              <div>Remember me</div>
            </CheckBoxAccess>
          </WrapperAction>
          <Bottom>
            <Icon type="lock" />
            &nbsp;&nbsp;Forgot your password
          </Bottom>
        </WrapperForm>
        <OutSide>
          Don&apos;t have an account? <a href="#1">Signup Now</a>
        </OutSide>
      </WrapperComponent>
    );
  }
}
export default connect(
  null,
  { login }
)(Login);
