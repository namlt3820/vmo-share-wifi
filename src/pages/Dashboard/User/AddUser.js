import React, { Component } from 'react';
import { Select } from 'antd';
import { DashBoardContent } from '../../../components/DashboardStyle';
import {
  WrapperInput,
  ButtonStyle,
  WrapperButton
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
      password: '',
      role: '',
      file: '',
      loading: false,
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
    const validateName = Validator.isValidUsername(name);
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
    this.setState({ loading: true });
    const params = {
      name,
      email,
      password,
      role,
      file
    };
    this.props.addUser(params);
    this.setState({
      name: '',
      email: '',
      password: '',
      loading: false
    });
  };

  handleCancel = () => {
    this.props.handleCancel();
  };

  render() {
    const { name, errors, email, password, loading } = this.state;
    return (
      <>
        <DashBoardContent>
          <WrapperInput>
            <FormInput
              popup="popup"
              placeholder="Enter name"
              name="name"
              type="text"
              error={errors.name}
              value={name}
              handleChange={this.handleChangeForm}
              handleBlur={this.handleValidateName}
            />
            <FormInput
              popup="popup"
              placeholder="Enter Email"
              name="email"
              type="text"
              icon="*"
              error={errors.email}
              value={email}
              handleChange={this.handleChangeForm}
              handleBlur={this.handleValidateEmail}
            />
            <FormInput
              popup="popup"
              placeholder="Password"
              name="password"
              type="password"
              icon="*"
              error={errors.password}
              value={password}
              handleChange={this.handleChangeForm}
              handleBlur={this.handleValidatePassword}
            />
            <div>
              <Select
                defaultValue="Select role"
                style={{ width: 120, margin: '0.5em 0' }}
                onChange={this.handleChange}
              >
                <Option value={0}>Admin</Option>
                <Option value={1}>User</Option>
              </Select>
            </div>
            {/* <FormInput label="Image" name="file" type="file" icon="*" /> */}
          </WrapperInput>
          <WrapperButton type="login">
            <ButtonStyle
              adduser="adduser"
              onClick={this.addUser}
              disabled={!email || !password || !name}
              loading={loading}
            >
              Save
            </ButtonStyle>
            <ButtonStyle onClick={this.handleCancel} adduser="adduser">
              Cancel
            </ButtonStyle>
          </WrapperButton>
        </DashBoardContent>
      </>
    );
  }
}
