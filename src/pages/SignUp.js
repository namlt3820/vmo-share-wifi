import React, { Component } from 'react';
// import styled from 'styled-components';
import { Checkbox } from 'antd';
import {
  WrapperComponent,
  WrapperForm,
  Logo,
  WrapperInput,
  Label,
  InputStyle,
  WrapperAction,
  CheckBoxAccess,
  ButtonStyle
} from '../components/Authentication';
import LayoutMain from '../layout/LayoutMain';

export default class SignUp extends Component {
  render() {
    return (
      <LayoutMain>
        <WrapperComponent>
          <WrapperForm>
            <Logo>
              <img src="assets/logo.png" alt="Italian Trulli" />
              <div>Create your account.</div>
            </Logo>
            <WrapperInput>
              <Label>Username</Label>
              <InputStyle placeholder="Enter Username" />
              <Label>Email</Label>
              <InputStyle placeholder="Enter Email" />
              <Label>Password</Label>
              <InputStyle placeholder="Enter Password" />
            </WrapperInput>
            <WrapperAction type="signup">
              <CheckBoxAccess type="signup">
                <Checkbox defaultChecked={false} />
                <div>I have read, understand, and agree </div>
              </CheckBoxAccess>
              <ButtonStyle>SignUp</ButtonStyle>
            </WrapperAction>
          </WrapperForm>
        </WrapperComponent>
      </LayoutMain>
    );
  }
}
