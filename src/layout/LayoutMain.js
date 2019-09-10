import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Wrapper = styled.div`
  // height: 100vh;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;

const LayoutMain = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
);

export default LayoutMain;
