import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Checkbox } from 'antd';
import { sizeDevices } from '../layout/sizeDevices';

export const WrapperComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2em 1.5em 4em;
  margin: 0 auto;
  @media only screen and ${sizeDevices.mobileL} {
    max-width: 540px;
  }

  @media only screen and ${sizeDevices.tablet} {
    max-width: 720px;
    width: 500px;
  }

  @media only screen and ${sizeDevices.laptop} {
    max-width: 960px;
  }

  @media only screen and ${sizeDevices.laptopL} {
    max-width: 1440px;
    width: 700px;
  }

  // @media only screen and ${sizeDevices.xl} {
  //   padding: 4em 0 6em;
  // }
`;

export const WrapperForm = styled.div`
  height: 100vh;

  @media only screen and ${sizeDevices.tablet} {
    background: #fff;
    padding: 3em 2em;
    margin-bottom: 3em;
    border-radius: 10px;
  }

  @media only screen and ${sizeDevices.laptopL} {
    padding: 4em 4em;
  }

  // @media only screen and ${sizeDevices.lg} {
  //   width: 600px;
  //   margin: 0 auto;
  //   padding: 5em 3em;
  //   font-size: 20px;
  // }

  // @media only screen and ${sizeDevices.xl} {
  //   width: 700px;
  //   margin: 0 auto;
  //   padding: 2.5em 3em 1em;
  //   font-size: 22px;
  // }

  // display: flex;
  // position: relative;
  // flex-direction: column;
  // align-items: center;
  // width: 450px;
  // background: #ffffff;
  // padding: 2.5em;
  // margin-bottom: 3em;
  // line-height: 2em;
  // width: 34%;
  // height: 80%;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2.75em;
  img {
    width: 150px;
    margin-bottom: 0.5em;
  }

  @media only screen and ${sizeDevices.tablet} {
    img {
      width: 200px
    }
    div {
      font-size: 20px;
    }
  }

  @media only screen and ${sizeDevices.laptopL} {
    img {
      width: 300px
    }
    div {
      font-size: 26px;
    }
  }

  // @media only screen and ${sizeDevices.xl} {
  //   margin-bottom: 3em;
  //   img {
  //       height: 2.5em
  //       margin-bottom: 0.5em;
  //     }
  // }
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
  @media only screen and ${sizeDevices.laptopL} {
    font-size: 27px;
  }
`;

export const InputStyle = styled.input`
  margin: 0.5em 0;
  border-color: #ccd3d9;
  height: 32px;
  width: 100%;
  height: 2.5em;
  padding: 4px 11px;
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  @media only screen and ${sizeDevices.tablet} {
    font-size: 20px;
  }

  @media only screen and ${sizeDevices.laptopL} {
    font-size: 27px;
  }

//   @media only screen and ${sizeDevices.xl} {
//     font-size: 20px;
//   }
// `;

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
`;

export const CheckboxStyle = styled(Checkbox)`
  padding: 0 5px;
`;

export const ButtonStyle = styled(Button)`
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // margin: 2em 0 4em;
  // padding: 0 30px;
  font-size: 14px;
  margin: 0.5em 0 1.5em;
  width: 100%;
  height: 2.75em;
  background: #007ed9;
  color: ${props => (props.background !== 'none' ? '#fff' : '#333')};
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

  @media only screen and ${sizeDevices.tablet} {
    // height: 3.75em;
    // margin: 2em 0;
    font-size: 20px;
  }

  @media only screen and ${sizeDevices.laptopL} {
    font-size: 27px;
  }

  // @media only screen and ${sizeDevices.xl} {
  //   font-size: 20px;
  // }
`;

export const Bottom = styled.div`
  width: 100%;
  font-size: 15px;
  span {
    align-items: center;
    display: flex;
  }

  @media only screen and ${sizeDevices.tablet} {
    // height: 3.75em;
    // margin: 2em 0;
    font-size: 20px;
  }
`;

export const OutSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  a {
    color: #e80069;
  }

  @media only screen and ${sizeDevices.tablet} {
    // margin-top: 3em;
    font-size: 20px;
  }

  @media only screen and ${sizeDevices.laptopL} {
    font-size: 27px;
  }

  // @media only screen and ${sizeDevices.xl} {
  //   font-size: 22px;
  // }
`;

export const Forgot = styled.span`
  // a {
  //   color: #333;
  // }
`;

export default class Authentication extends Component {
  render() {
    return <div />;
  }
}
