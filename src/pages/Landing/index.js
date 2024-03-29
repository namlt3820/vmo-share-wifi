import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';

import {
  AboutUs,
  Contact,
  Navbar,
  Features,
  Footer,
  Pricing
} from '../../components/landing';

import './index.css';

const theme = {
  breakpoints: {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
    ul: '1900px'
  }
};

const Landing = ({ className }) => (
  <div className={className}>
    <Navbar />
    <div>
      <Features />
      <AboutUs />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  </div>
);

const StyledLanding = styled(Landing)`
  font-family: 'utm_avo';
`;

const withTheme = Component => () => (
  <ThemeProvider theme={theme}>
    <Component />
  </ThemeProvider>
);

export default withTheme(StyledLanding);
