import React, { Component } from 'react';
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

export default class Login extends Component {
  render() {
    return (
      <LayoutMain>
        <WrapperComponent>
          <WrapperForm>
            <Logo>
              <img src="../../public/assets/logo.png" alt="Italian Trulli" />
              <div>Welcome Back</div>
            </Logo>
            <WrapperInput>
              <Label>Email</Label>
              <InputStyle placeholder="Enter Email" />
              <Label>Password</Label>
              <InputStyle placeholder="Enter Password" />
            </WrapperInput>
            <WrapperAction type="login">
              <ButtonStyle>Login</ButtonStyle>
              <CheckBoxAccess type="login">
                <Checkbox defaultChecked={false} />
                <div>Remember me</div>
              </CheckBoxAccess>
            </WrapperAction>
          </WrapperForm>
        </WrapperComponent>
      </LayoutMain>
    );
  }
}
