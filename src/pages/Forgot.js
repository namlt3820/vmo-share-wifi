import React, { Component } from 'react';
import FormInput from '../components/core/FormInput';
import {
  WrapperComponent,
  WrapperForm,
  Logo,
  WrapperInput,
  WrapperAction,
  ButtonStyle
} from '../components/Authentication';
import LayoutMain from '../layout/LayoutMain';

export default class Forgot extends Component {
  constructor() {
    super();
    this.state = { value: '' };
  }

  handleBlur = () => {
    const { value } = this.state;
    if (value.length < 6) {
      console.log('error');
    }
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <LayoutMain>
        <WrapperComponent>
          <WrapperForm>
            <Logo>
              <img src="assets/logo.png" alt="Italian Trulli" />
              <div>Forgot Password</div>
            </Logo>
            <WrapperInput>
              <FormInput
                placeholder="Enter Username"
                label="Username"
                name="name"
                value={value}
                handleChange={this.handleChange}
                handleBlur={this.handleBlur}
              />
            </WrapperInput>
            <WrapperAction type="forgot">
              <ButtonStyle> Send recovery email</ButtonStyle>
            </WrapperAction>
          </WrapperForm>
        </WrapperComponent>
      </LayoutMain>
    );
  }
}
