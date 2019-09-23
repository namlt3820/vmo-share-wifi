import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

export const WrapperComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f3f3f3;
`;

export const WrapperForm = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: ${props => (props.form === 'login' ? '400px' : '')};
  background: #ffffff;
  padding: 2.5em;
  margin-bottom: 3em;
  line-height: 2em;
`;

export const Logo = styled.div`
  margin-bottom: 0.75em;
  text-align: center;
  img {
    width: 130px;
    margin-bottom: 2.3em;
  }
  h3 {
    margin-bottom: 0;
  }
`;

export const WrapperInput = styled.div`
  width: 300px;
`;

export const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${props => (props.type === 'error' ? '#D95A44' : '#747474')};
  border-radius: 5px;
  .icon {
    color: red;
  }
`;

export const InputStyle = styled.input`
  margin: 5px 0;
  border-color: #ccd3d9;
  height: 32px;
  width: 300px;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

export const WrapperAction = styled.div`
  width: 300px;
  display: ${props => (props.type === 'login' ? 'flex' : '')};
  justify-content: ${props => (props.type === 'login' ? 'space-between' : '')};
  margin: ${props => (props.type === 'signup' ? '' : '10px 0')};
  align-items: center;
`;

export const CheckBoxAccess = styled.div`
  display: flex;
  width: ${props => (props.type === 'login' ? '115px' : '250px')};
  justify-content: ${props =>
    props.type === 'login' ? ' space-around;' : 'space-between'};
  margin: 0.5em 0;
`;

export const ButtonStyle = styled(Button)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
  font-size: 14px;
  background: ${props =>
    props.background !== 'none'
      ? 'linear-gradient(to bottom, #e44688 0%, #ba3cbd 100%);'
      : ''};
  :hover {
    background: linear-gradient(to bottom, #e44688 0%, #ba3cbd 100%);
  }
  color: ${props => (props.background !== 'none' ? '#fff' : '#333')};
  :hover {
    color: #ffffff;
  }
  :focus {
    background: linear-gradient(to bottom, #e44688 0%, #ba3cbd 100%);
    color: #ffffff;
  }
  font-weight: 700;
`;

export const Bottom = styled.p`
  margin: 1.5em 0 0 10em;
`;

export const OutSide = styled.div`
  a {
    color: #e80069;
  }
`;

export const Forgot = styled.div`
  a {
    color: #333;
  }
`;

export default class Authentication extends Component {
  render() {
    return <div />;
  }
}
