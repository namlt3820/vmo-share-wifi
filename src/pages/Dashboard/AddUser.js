import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import {
  DashBoardTittle,
  DashBoardContent
} from '../../components/DashboardStyle';
import {
  WrapperForm,
  WrapperInput,
  WrapperAction,
  ButtonStyle
} from '../../components/Authentication';
import FormInput from '../../components/core/FormInput';
import Validator, { EMAIL_REGEX } from '../../utils/validator';
import UserManager from '../../services/mngtUser.service';
import httpStatus from '../../config/httpStatus';

const userManager = new UserManager();

export default class AddDevice extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      file: '',
      // loading: false,
      errors: {}
    };
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    if (name === 'email' && EMAIL_REGEX.test(value)) {
      this.handleValidateEmail();
    } else if (name === 'password' && value.length > 6) {
      this.handleValidatePassword();
    }
  };

  handleValidateName = () => {
    const { name } = this.state;
    const validateName = Validator.isValidName(name);
    const valied = {};
    if (!validateName && name.length === 0) {
      valied.name = 'Require Email';
      this.setState({ errors: valied });
    } else if (!validateName && name.length > 0) {
      valied.name = 'Invalid Email';
      this.setState({ errors: valied });
    } else {
      valied.name = '';
      this.setState({ errors: valied });
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
    } else if (!validatePassword && password.length > 0) {
      valied.password = 'Invalid Password';
      this.setState({ errors: valied });
    } else {
      valied.password = '';
      this.setState({ errors: valied });
    }
  };

  addUser = () => {
    const { name, email, password, file } = this.state;
    // const { history } = this.props;
    const params = {
      name,
      email,
      password,
      file
    };
    userManager
      .addUser(params)
      .then(res => {
        if (res.status === httpStatus.StatusOK) {
          // history.push('/');
          // console.log(res.data);
        } else if (res.status === httpStatus.StatusUnauthorized) {
          // sdlalskd
        }
      })
      .catch(error => {
        throw error;
      });
  };

  render() {
    // const { name, password, errors, email, files, loading } = this.state;

    return (
      <>
        <DashBoardTittle>
          <h3>Add User</h3>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Account</Breadcrumb.Item>
            <Breadcrumb.Item href="">Add User</Breadcrumb.Item>
          </Breadcrumb>
        </DashBoardTittle>
        <DashBoardContent>
          <WrapperForm>
            <WrapperInput>
              <FormInput
                placeholder="Enter name"
                label="Name"
                name="name"
                type="text"
                handleChange={this.handleChange}
                handleBlur={this.handleValidateEmail}
              />
              <FormInput
                placeholder="Enter Email"
                label="Email"
                name="email"
                type="text"
                icon="*"
                handleChange={this.handleChange}
                handleBlur={this.handleValidateEmail}
              />
              <FormInput
                placeholder="Enter Password"
                label="Password"
                name="password"
                type="password"
                icon="*"
                handleChange={this.handleChange}
                handleBlur={this.handleValidatePassword}
              />
              <FormInput label="Image" name="file" type="file" icon="*" />
            </WrapperInput>
            <WrapperAction type="login">
              <ButtonStyle onClick={this.addUser}>Save</ButtonStyle>
              <ButtonStyle background="none">Cancel</ButtonStyle>
            </WrapperAction>
          </WrapperForm>
        </DashBoardContent>
      </>
    );
  }
}
