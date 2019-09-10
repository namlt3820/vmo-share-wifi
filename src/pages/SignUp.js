import React, { Component } from 'react';
import styled from 'styled-components';
import { Input, Button, Checkbox } from 'antd';
import LayoutMain from '../layout/LayoutMain';

const WrapperComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f3f3f3;
`;

const WrapperAvatar = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 450px;
  background: #ffffff;
`;

const WrapperInput = styled.div`
  width: 300px;
`;

const InputStyle = styled(Input)`
  margin: 5px 0;
  border-color: #ccd3d9;
`;

const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #747474;
  border-radius: 5px;
`;

const WrapperAction = styled.div`
  width: 300px;
`;

const ButtonStyle = styled(Button)`
  display: flex;
  justify-content: flex-start;
  font-size: 14px;
  padding: 0.25em 1em;
  background: linear-gradient(to bottom, #e44688 0%, #ba3cbd 100%);
  :hover {
    background: linear-gradient(to bottom, #e44688 0%, #ba3cbd 100%);
  }
  color: #ffffff;
  :hover {
    color: #ffffff;
  }
`;

const CheckBoxAccess = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-around;
  margin: 10px 0;
`;
export default class SignUp extends Component {
  render() {
    return (
      <LayoutMain>
        <WrapperComponent>
          <Wrapper>
            <WrapperAvatar>
              <img src="../../public/assets/logo.png" alt="Italian Trulli" />
              <div>Create your account.</div>
            </WrapperAvatar>
            <WrapperInput>
              <Label>Username</Label>
              <InputStyle placeholder="Enter Username" />
              <Label>Email</Label>
              <InputStyle placeholder="Enter Email" />
              <Label>Password</Label>
              <InputStyle placeholder="Enter Password" />
            </WrapperInput>
            <WrapperAction>
              <CheckBoxAccess>
                <Checkbox defaultChecked={false} />
                <div>I have read, understand, and agree </div>
              </CheckBoxAccess>
              <ButtonStyle>SignUp</ButtonStyle>
            </WrapperAction>
          </Wrapper>
        </WrapperComponent>
      </LayoutMain>
    );
  }
}
