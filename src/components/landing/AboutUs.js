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
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate.
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

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
      margin-top: 10rem;
    }

    @media only screen and (min-width: ${props =>
        props.theme.breakpoints.xxl}) {
      margin-top: 10rem;
    }
  }

  p:nth-child(2) {
    line-height: 1.5rem;
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

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    background-image: url(${bg1}), url(${bg2});
    min-height: 800px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    background-image: url(${bg1}), url(${bg2});
    min-height: 600px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.ul}) {
    background-size: cover, cover;
    min-height: 1000px;
    margin-bottom: 5rem;
  }
`;

export { StyledAboutUs as AboutUs };
