import React from 'react';
import styled from 'styled-components';
import { sizeDevices } from './sizeDevices';

const Wrapper = styled.div`
  min-height: 100vh;
  // display: flex;
  // flex-direction: column;
  // background: #fff;
  // max-width: 100%;
  // justify-content: center;
  // align-items: center;
  // @media only screen and ${sizeDevices.xs} {
  //   background: #f3f3f3;
  // }
  @media only screen and ${sizeDevices.tablet} {
    background: #f3f3f3;
  }
`;

const LayoutMain = ({ children }) => <Wrapper>{children}</Wrapper>;

export default LayoutMain;
