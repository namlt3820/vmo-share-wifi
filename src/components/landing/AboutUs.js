import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import FixWidth from './core/FixWidth';
import bg1 from './assets/images/aboutus-bg-1.png';
import bg1Mobile from './assets/images/aboutus-bg-1-mobile.png';
import bg2 from './assets/images/aboutus-bg-2.png';

const Content = ({ className }) => (
  <div className={className}>
    <FixWidth>
      <Row type="flex" justify="end">
        <Col xs={24} sm={11} xxl={9}>
          <p>About us</p>
          <p>
            Shared Wifi network is online sharing platform which helps people
            can find and connect a wireless access point easily. It also allows
            Wifi owner can earn money by sharing their Wifi device to a Shared
            Wifi Network.
          </p>
        </Col>
      </Row>
    </FixWidth>
  </div>
);

const StyledContent = styled(Content)`
  margin-top: 3rem;

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 8rem;
  }

  .ant-col {
    @media only screen and (min-width: ${props => props.theme.breakpoints.ul}) {
      margin-top: 20rem;
    }
  }

  p:first-child {
    font-family: 'utm_avo_bold';
    font-size: 2rem;
    text-transform: uppercase;
    margin-top: 18rem;
    color: #6c747c;
    text-align: center;

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
      text-align: left;
      margin-top: 10rem;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.ul}) {
      margin-top: 0;
    }
  }

  p:nth-child(2) {
    line-height: 1.5rem;
    padding-left: 1rem;
  }
`;

class AboutUs extends Component {
  render() {
    return (
      <div className={this.props.className} id="aboutus">
        <StyledContent />
      </div>
    );
  }
}

const StyledAboutUs = styled(AboutUs)`
  background-image: url(${bg1Mobile}), url(${bg2});
  background-repeat: no-repeat;
  background-size: contain, cover;
  min-height: 500px;
  margin-bottom: 1rem;

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    background-image: url(${bg1}), url(${bg2});
    min-height: 800px;
    margin-bottom: 0;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    background-image: url(${bg1}), url(${bg2});
    min-height: 600px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.ul}) {
    min-height: 800px;
    margin-bottom: 5rem;
  }
`;

export { StyledAboutUs as AboutUs };
