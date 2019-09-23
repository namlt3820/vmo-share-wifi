import React, { Component } from 'react';
import { Checkbox, Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
  OutSide,
  Forgot
} from '../components/Authentication';
import Validator, { EMAIL_REGEX } from '../utils/validator';
import { login } from '../store/actions/authenticate';
import Errors from '../commons/error_validate';

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
    const { email, errors } = this.state;
    const validateEmail = Validator.isValidEmailAddress(email);
    errors.email = Errors.handleValidate(validateEmail, email, 'email');
    this.setState({ errors });
  };

  handleValidatePassword = () => {
    const { password, errors } = this.state;
    const validatePassword = Validator.isValidPassword(password);
    errors.password = Errors.handleValidate(
      validatePassword,
      password,
      'password'
    );
    this.setState({ errors });
  };

  login = () => {
    const { email, password, errors } = this.state;
    this.setState({ loading: true });
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
      this.setState({ errors: valied, loading: false });
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
        <WrapperForm form="login">
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
              disabled={!email || !password}
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
            <Forgot>
              <Icon type="lock" />
              &nbsp;&nbsp; <Link to="/forgotPwd">Forgot your password</Link>
            </Forgot>
          </Bottom>
        </WrapperForm>
        <OutSide>
          Don&apos;t have an account? <Link to="/signup">Signup Now</Link>
        </OutSide>
      </WrapperComponent>
    );
  }
}
export default connect(
  null,
  { login }
)(Login);
