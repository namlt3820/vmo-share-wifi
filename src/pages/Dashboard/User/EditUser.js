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

export default class AddDevice extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      // loading: false,
      errors: {}
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
    const valied = { ...errors };
    if (!validateName && name.length === 0) {
      valied.name = 'Require Name';
      this.setState({ errors: valied });
    } else if (!validateName && name.length > 0) {
      valied.name = 'Invalid Name';
      this.setState({ errors: valied });
    } else {
      valied.name = '';
      this.setState({ errors: valied });
    }
  };

  editUser = () => {
    const { id, name } = this.state;
    const params = {
      name
    };
    this.props.editUser(id, params);
  };

  handleCancelEdit = () => {
    this.props.handleCancelEdit();
  };

  render() {
    const { name, errors } = this.state;
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
              <ButtonStyle onClick={this.editUser}>Edit</ButtonStyle>
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
