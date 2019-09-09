import React from 'react';
import Header from './Header';

const LayoutMain = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
);

export default LayoutMain;
