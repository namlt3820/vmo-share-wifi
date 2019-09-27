import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Checkbox } from 'antd';
import { sizeDevices } from '../layout/sizeDevices';

export const WrapperComponent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  @media only screen and ${sizeDevices.tablet} {
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    ::before {
      flex-grow: 1;
      content: '';
      display: block;
      height: 24px;
    }

    ::after {
      flex-grow: 1;
      content: '';
      display: block;
      height: 24px;
    }
  }
`;

export const WrapperForm = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  background: #fff;
  max-width: 100%;
  position: relative;
  z-index: 2;

  @media only screen and ${sizeDevices.tablet} {
    // background: #fff;
    // padding: 2em 2em;
    // margin-bottom: 2em;
    // border-radius: 10px;
    width: 450px;
    min-height: 0;
    flex-shrink: 0;
    border: 1px solid #dadce0;
    border-radius: 8px;
    display: block;
    margin: 0 auto;
    transition: 0.2s;
  }
`;

export const WrapperFormContent = styled.div`
  flex-grow: 1;
  overflow: hidden;
  padding: 24px 24px 36px;

  @media only screen and ${sizeDevices.mobileL} {
    padding: 48px 40px 36px;
  }

  @media only screen and ${sizeDevices.tablet} {
    height: auto;
    min-height: 500px;
    overflow-y: auto;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5em;
  img {
    width: 150px;
    margin-bottom: 0.5em;
  }
  p {
    color: gray;
    font-size: 16px;
    font-weight: 400;
  }
  div {
    font-size: 24px;
  }
`;

export const WrapperInput = styled.div`
  // width: 100%;
`;

export const Label = styled.div`
  // display: flex;
  // justify-content: flex-start;
  color: ${props => (props.type === 'error' ? '#D95A44' : '#747474')};
  // border-radius: 5px;
  // .icon {
  //   color: red;
  // }
  // @media only screen and ${sizeDevices.laptopL} {
  //   font-size: 27px;
  // }
`;

export const InputStyle = styled.input`
  margin: 0.5em 0;
  border-color: #ccd3d9;
  // height: 32px;
  width: 100%;
  padding: 4px 11px;
  font-size: ${props => (props.popup === 'popup' ? '17px' : '20px')};
  line-height: 1.5;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

export const WrapperAction = styled.div`
  // width: 100%;
  // display: ${props => (props.type === 'login' ? 'flex' : '')};
  // justify-content: ${props => (props.type === 'login' ? 'flex-end' : '')};
  // flex-direction: column;
`;

export const CheckBoxAccess = styled.div`
  display: flex;
  align-items: center;
  justify-contentn: flex-start;
  margin: 0.75em 0;
`;

export const CheckboxStyle = styled(Checkbox)`
  padding-right: 5px;
`;

export const ButtonStyle = styled(Button)`
  font-size: 16px;
  margin: 0.5em 0 1.5em;
  width: ${props => (props.adduser !== 'adduser' ? '100%' : '40%')};
  height: 2.5em;
  background: #007ed9;
  color: #fff;
  font-weight: 700;
  :hover {
    background: #007ed9;
    color: #fff;
  }
  :focus {
    background: #007ed9;
    color: #fff;
  }
  :active {
    background: #007ed9;
    color: #fff;
  }
  :disabled {
    background: #007ed9;
    color: #fff;
    :hover {
      background: #007ed9;
      color: #fff;
    }
  }
`;

export const Bottom = styled.div`
  width: 100%;
  font-size: 15px;
  span {
    align-items: center;
    display: flex;
    font-size: 16px;
  }
`;

export const OutSide = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  font-size: 16px;
  a {
    color: ##007ed9;
  }
`;

export const Forgot = styled.span`
  // a {
  //   color: #333;
  // }
`;

export const WrapperButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default class Authentication extends Component {
  render() {
    return <div />;
  }
}
