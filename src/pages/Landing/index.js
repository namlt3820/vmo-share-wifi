import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  AboutUs,
  Contact,
  Header,
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
    <Header />
    <AboutUs />
    <Pricing />
    <Contact />
    <Footer />
  </div>
);

const StyledLanding = styled(Landing)`
<<<<<<< HEAD
  font-family: 'utm_avo_bold';
=======
  font-family: 'utm_avo';
>>>>>>> 7a9b738bc02631b11c47e1486aa1f6d4ec2f41b0
`;

const withTheme = Component => () => (
  <ThemeProvider theme={theme}>
    <Component />
  </ThemeProvider>
);

export default withTheme(StyledLanding);
