import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FormInput from '../components/core/FormInput';
import {
  WrapperComponent,
  WrapperForm,
  WrapperFormContent,
  Logo,
  WrapperInput,
  WrapperAction,
  ButtonStyle,
  Bottom,
  OutSide,
  Forgot
} from '../components/Authentication';
import Validator, { EMAIL_REGEX } from '../utils/validator';
import { login } from '../store/actions/authenticate';
import Errors from '../commons/error_validate';
import { getToken } from '../utils/getToken';

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

  componentDidMount() {
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

  login = () => {
    const { email, password, errors } = this.state;
    this.setState({ loading: true });
    const valied = { ...errors };
    const { login, history } = this.props;
    const params = {
      email,
      password
    };
    login(params, history).then(() => {
      valied.email = 'The email or password is incorrect';
      this.setState({ errors: valied, loading: false });
    });
  };

  handleCheckbox = () => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  keyPressed = e => {
    const { email, password } = this.state;
    if (e.keyCode === 13) {
      if (email && password) {
        this.login();
      }
    }
  };

  render() {
    const { email, password, errors, loading } = this.state;
    return (
      <WrapperComponent>
        <WrapperForm form="login">
          <WrapperFormContent>
            <Logo>
              <img src="assets/logo.png" alt="Share Wifi" />
              <div>Welcome Back</div>
              <p>Sign in to continue to Shared Wifi</p>
            </Logo>
            <WrapperInput>
              <FormInput
                placeholder="Email"
                name="email"
                type="email"
                error={errors.email}
                value={email}
                handleChange={this.handleChange}
                handleBlur={this.handleValidateEmail}
                keyPressed={this.keyPressed}
              />
              <FormInput
                placeholder="Password"
                name="password"
                type="password"
                error={errors.password}
                value={password}
                handleChange={this.handleChange}
                handleBlur={this.handleValidatePassword}
                keyPressed={this.keyPressed}
              />
            </WrapperInput>
            <WrapperAction type="login">
              <ButtonStyle
                loading={loading}
                onClick={this.login}
                disabled={!email || !password}
              >
                Login
              </ButtonStyle>
            </WrapperAction>
            <Bottom>
              <Forgot>
                <Icon type="lock" />
                &nbsp;&nbsp; <Link to="/forgotPwd">Forgot your password</Link>
              </Forgot>
            </Bottom>
          </WrapperFormContent>
        </WrapperForm>
        <OutSide>
          Don&apos;t have an account?&nbsp;<Link to="/signup">Signup Now</Link>
        </OutSide>
      </WrapperComponent>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
