import React, { Component } from 'react';
import styled from 'styled-components';
import { Button, Checkbox } from 'antd';
import { sizeDevices } from '../layout/sizeDevices';

export const WrapperComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props =>
    props.type === 'forgot' ? 'calc(100vh - 250px);' : '100vh'};
  padding: 3em 1.5em 4em;
  margin: 0 auto;
  @media only screen and ${sizeDevices.mobileL} {
    max-width: 540px;
  }

  @media only screen and ${sizeDevices.tablet} {
    max-width: 720px;
    width: 450px;
  }

  @media only screen and ${sizeDevices.laptop} {
    max-width: 960px;
    padding-bottom: 10em;
    padding-top: 3em;
  }

  @media only screen and ${sizeDevices.laptopL} {
    max-width: 1440px;
  }
`;

export const WrapperForm = styled.div`
  height: 100vh;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;

  @media only screen and ${sizeDevices.tablet} {
    background: #fff;
    padding: 2em 2em;
    margin-bottom: 2em;
    border-radius: 10px;
  }

  // @media only screen and ${sizeDevices.laptop} {
  //   margin-top: 12em;
  //   height: 52vh;
  // }

  @media only screen and ${sizeDevices.laptopL} {
    margin-top: 9em;
    height: 57vh;
  }

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
  margin-bottom: 1.5em;
  img {
    width: 150px;
    margin-bottom: 0.5em;
  }
  p {
    color: gray;
    font-size: 18px;
    font-weight: 400;
  }

  @media only screen and ${sizeDevices.tablet} {
    img {
      width: 185px
    }
    div {
      font-size: 20px;
    }
  }

  // @media only screen and ${sizeDevices.laptopL} {
  //   img {
  //     width: 300px
  //   }
  //   div {
  //     font-size: 26px;
  //   }
  // }

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
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  @media only screen and ${sizeDevices.tablet} {
    font-size: 20px;
  }

  // @media only screen and ${sizeDevices.laptopL} {
  //   font-size: 27px;
  // }

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
  margin: 0.75em 0;
`;

export const CheckboxStyle = styled(Checkbox)`
  padding: 0 5px;
`;

export const ButtonStyle = styled(Button)`
  font-size: 16px;
  margin: 0.5em 0 1.5em;
  width: 100%;
  height: 2.5em;
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
    font-size: 17px;
  }

  // @media only screen and ${sizeDevices.laptopL} {
  //   font-size: 27px;
  // }

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
    font-size: 17px;
  }
`;

export const OutSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  a {
    color: ##007ed9;
  }

  @media only screen and ${sizeDevices.tablet} {
    // margin-top: 3em;
    font-size: 17px;
  }

  // @media only screen and ${sizeDevices.laptopL} {
  //   font-size: 27px;
  // }

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
