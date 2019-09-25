import React, { Component } from 'react';
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

export default class AddDevice extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      errors: {},
      loading: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { _id, name } = props.userInfo;
    if (name !== state.name && _id !== state.id) {
      return {
        id: _id,
        name
      };
    }

    return null;
  }

  // componentDidUpdate(prevProps, prevState) {}
  // componentWillReceiveProps(props) {
  //   const { _id, name } = props.userInfo;
  //   console.log(name);
  //   this.setState({
  //     id: _id,
  //     name
  //   });
  // }

  // componentDidMount() {
  //   const { _id, name } = this.props.userInfo;
  //   console.log(name);
  //   this.setState({
  //     id: _id,
  //     name
  //   });
  // }

  handleChangeForm = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
    if (name === 'name' && EMAIL_REGEX.test(value)) {
      this.handleValidateName();
    }
  };

  handleValidateName = () => {
    const { name, errors } = this.state;
    const validateName = Validator.isValidName(name);
    errors.name = Errors.handleValidate(validateName, name, 'name');
    this.setState({ errors });
  };

  editUser = () => {
    const { id, name } = this.state;
    this.setState({ loading: true });
    const params = {
      name
    };
    this.props.editUser(id, params);
    this.setState({ loading: false });
  };

  handleCancelEdit = () => {
    this.props.handleCancelEdit();
  };

  render() {
    const { name, errors, loading } = this.state;
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
            </WrapperInput>
            <WrapperAction type="login">
              <ButtonStyle
                onClick={this.editUser}
                disabled={!name}
                loading={loading}
              >
                Edit
              </ButtonStyle>
              <ButtonStyle onClick={this.handleCancelEdit} background="none">
                Cancel
              </ButtonStyle>
            </WrapperAction>
          </WrapperForm>
        </DashBoardContent>
      </>
    );
  }
}
