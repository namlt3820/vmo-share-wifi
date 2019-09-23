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
import Validator from '../utils/validator';
import ChangePassword from '../services/changePwd.service';
import httpStatus from '../config/httpStatus';

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
    const valied = { ...errors };
    if (!validatePassword && currentPassword.length === 0) {
      valied.currentPassword = 'Require Password';
      this.setState({ errors: valied });
    } else if (!validatePassword && currentPassword.length > 0) {
      valied.currentPassword = 'Invalid Password';
      this.setState({ errors: valied });
    } else {
      valied.currentPassword = '';
      this.setState({ errors: valied });
    }
  };

  handleValidateNewPassword = () => {
    const { newPassword, errors } = this.state;
    const validatePassword = Validator.isValidPassword(newPassword);
    const valied = { ...errors };
    if (!validatePassword && newPassword.length === 0) {
      valied.newPassword = 'Require Password';
      this.setState({ errors: valied });
    } else if (!validatePassword && newPassword.length > 0) {
      valied.newPassword = 'Invalid Password';
      this.setState({ errors: valied });
    } else {
      valied.newPassword = '';
      this.setState({ errors: valied });
    }
  };

  changePwd = () => {
    const { currentPassword, newPassword, errors } = this.state;
    const valied = { ...errors };
    const params = {
      currentPassword,
      newPassword
    };
    changePw.changePwd(params).then(res => {
      if (
        res.status === httpStatus.StatusBadRequest ||
        httpStatus.StatusNotFound
      ) {
        res.data.errors.map(error => {
          if (error.location === 'currentPassword') {
            valied.currentPassword = error.message;
          } else {
            valied.newPassword = error.message;
          }
          return valied;
        });
        this.setState({ errors: valied });
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
              placeholder="Enter Current Password"
              label="Current Password"
              name="currentPassword"
              type="password"
              error={errors.currentPassword}
              value={currentPassword}
              handleChange={this.handleChange}
              handleBlur={this.handleValidateCurrentPassword}
            />
            <FormInput
              placeholder="Enter New Password"
              label="New Password"
              name="newPassword"
              type="password"
              error={errors.newPassword}
              value={newPassword}
              handleChange={this.handleChange}
              handleBlur={this.handleValidateNewPassword}
            />
          </WrapperInput>
          <WrapperAction type="login">
            <ButtonStyle loading={loading} onClick={this.changePwd}>
              Change Password
            </ButtonStyle>
          </WrapperAction>
        </WrapperForm>
        <OutSide>
          Don&apos;t have an account? <a href="#1">Signup Now</a>
        </OutSide>
      </WrapperComponent>
    );
  }
}
export default ChangePwd;
