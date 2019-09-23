import React, { Component } from 'react';
import { Select } from 'antd';
import { DashBoardContent } from '../../../components/DashboardStyle';
import {
  WrapperForm,
  WrapperInput,
  WrapperAction,
  ButtonStyle
} from '../../../components/Authentication';
import FormInput from '../../../components/core/FormInput';
import Validator, { EMAIL_REGEX } from '../../../utils/validator';
import Errors from '../../../commons/error_validate';

const { Option } = Select;

export default class AddDevice extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      role: '',
      file: '',
      // loading: false,
      errors: {}
    };
  }

  handleChange = value => {
    this.setState({
      role: value
    });
  };

  handleChangeForm = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    if (name === 'email' && EMAIL_REGEX.test(value)) {
      this.handleValidateEmail();
    } else if (name === 'password' && value.length > 6) {
      this.handleValidatePassword();
    }
  };

  handleValidateName = () => {
    const { name, errors } = this.state;
    const validateName = Validator.isValidName(name);
    errors.name = Errors.handleValidate(validateName, name, 'name');
    this.setState({ errors });
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

  addUser = () => {
    const { name, email, password, role, file } = this.state;
    const params = {
      name,
      email,
      password,
      role,
      file
    };
    this.props.addUser(params);
  };

  handleCancel = () => {
    this.props.handleCancel();
  };

  render() {
    const { name, errors, email } = this.state;
    return (
      <>
        <DashBoardContent>
          <WrapperForm>
            <WrapperInput>
              <FormInput
                placeholder="Enter name"
                label="Name"
                name="name"
                type="text"
                error={errors.name}
                value={name}
                handleChange={this.handleChangeForm}
                handleBlur={this.handleValidateName}
              />
              <FormInput
                placeholder="Enter Email"
                label="Email"
                name="email"
                type="text"
                icon="*"
                error={errors.email}
                value={email}
                handleChange={this.handleChangeForm}
                handleBlur={this.handleValidateEmail}
              />
              <FormInput
                placeholder="Enter Password"
                label="Password"
                name="password"
                type="password"
                icon="*"
                error={errors.password}
                handleChange={this.handleChangeForm}
                handleBlur={this.handleValidatePassword}
              />
              <div>
                <p>Role</p>
                <Select
                  defaultValue="Admin"
                  style={{ width: 120 }}
                  onChange={this.handleChange}
                >
                  <Option value={0}>Admin</Option>
                  <Option value={1}>User</Option>
                </Select>
              </div>
              {/* <FormInput label="Image" name="file" type="file" icon="*" /> */}
            </WrapperInput>
            <WrapperAction type="login">
              <ButtonStyle onClick={this.addUser}>Save</ButtonStyle>
              <ButtonStyle onClick={this.handleCancel} background="none">
                Cancel
              </ButtonStyle>
            </WrapperAction>
          </WrapperForm>
        </DashBoardContent>
      </>
    );
  }
}
