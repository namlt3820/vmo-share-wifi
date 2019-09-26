import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import Validator from '../utils/validator';
import ChangePassword from '../services/changePwd.service';
import httpStatus from '../config/httpStatus';
import Errors from '../commons/error_validate';
import { logout } from '../store/actions/logout';

const changePw = new ChangePassword();
class ChangePwd extends Component {
  constructor() {
    super();
    this.state = {
      currentPassword: '',
      newPassword: '',
      errors: {},
      loading: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleValidateCurrentPassword = () => {
    const { currentPassword, errors } = this.state;
    const validatePassword = Validator.isValidPassword(currentPassword);
    errors.currentPassword = Errors.handleValidate(
      validatePassword,
      currentPassword,
      'Password'
    );
    this.setState({ errors });
  };

  handleValidateNewPassword = () => {
    const { newPassword, errors } = this.state;
    const validatePassword = Validator.isValidPassword(newPassword);
    errors.newPassword = Errors.handleValidate(
      validatePassword,
      newPassword,
      'Password'
    );
    this.setState({ errors });
  };

  changePwd = () => {
    const { currentPassword, newPassword, errors } = this.state;
    this.setState({ loading: true });
    const valied = { ...errors };
    const params = {
      currentPassword,
      newPassword
    };
    changePw.changePwd(params).then(res => {
      if (
        res.status === httpStatus.StatusBadRequest ||
        res.status === httpStatus.StatusNotFound
      ) {
        if (res.data) {
          res.data.errors.map(error => {
            if (error.location === 'currentPassword') {
              valied.currentPassword = error.message;
            } else {
              valied.newPassword = error.message;
            }
            return valied;
          });
        }
        this.setState({ errors: valied, loading: false });
      } else if (res.status === httpStatus.StatusNoContent) {
        this.setState({ loading: false });
        this.props.history.push('/dashboard');
      }
    });
  };

  render() {
    const { currentPassword, newPassword, errors, loading } = this.state;
    return (
      <WrapperComponent>
        <WrapperForm form="login">
          <Logo>
            <img src="assets/logo.png" alt="Share Wifi" />
            <div>Change Password</div>
          </Logo>
          <WrapperInput>
            <FormInput
              placeholder="Current Password"
              name="currentPassword"
              type="password"
              error={errors.currentPassword}
              value={currentPassword}
              handleChange={this.handleChange}
              handleBlur={this.handleValidateCurrentPassword}
            />
            <FormInput
              placeholder="New Password"
              name="newPassword"
              type="password"
              error={errors.newPassword}
              value={newPassword}
              handleChange={this.handleChange}
              handleBlur={this.handleValidateNewPassword}
            />
          </WrapperInput>
          <WrapperAction type="change">
            <ButtonStyle loading={loading} onClick={this.changePwd}>
              Change Password
            </ButtonStyle>
          </WrapperAction>
        </WrapperForm>
        <OutSide>
          Don&apos;t have an account?&nbsp;<a href="#1">Signup Now</a>
        </OutSide>
      </WrapperComponent>
    );
  }
}
export default connect(
  null,
  { logout }
)(ChangePwd);
