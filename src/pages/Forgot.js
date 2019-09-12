import React, { Component } from 'react';
import {
  WrapperComponent,
  WrapperForm,
  Logo,
  WrapperInput,
  Label,
  InputStyle,
  WrapperAction,
  ButtonStyle
} from '../components/Authentication';
import LayoutMain from '../layout/LayoutMain';

export default class Forgot extends Component {
  render() {
    return (
      <LayoutMain>
        <WrapperComponent>
          <WrapperForm>
            <Logo>
              <img src="../../public/assets/logo.png" alt="Italian Trulli" />
              <div>Forgot Password</div>
            </Logo>
            <WrapperInput>
              <Label>Email</Label>
              <InputStyle placeholder="Enter Email" />
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
