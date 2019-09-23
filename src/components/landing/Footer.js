import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import styled from 'styled-components';
import FixWidth from './core/FixWidth';
import bg from './assets/images/footer-bg.png';
import logo from './assets/images/logo-white.png';

const Bg = ({ className }) => <Col xs={24} sm={12} className={className} />;

const StyledBg = styled(Bg)`
  min-height: 200px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: contain;

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    min-height: 300px;
  }
`;

const Content = ({ className }) => (
  <Col xs={24} sm={12} className={className}>
    <p>Useful Links</p>
    <ul>
      <li>
        <a href="/landing">Demo</a>
      </li>
      <li>
        <a href="/landing">Pricing</a>
      </li>
      <li>
        <a href="/landing">About Us</a>
      </li>
      <li>
        <a href="/landing">Contact</a>
      </li>
    </ul>
  </Col>
);

const StyledContent = styled(Content)`
  padding-left: 1rem;
  padding-bottom: 5rem;

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 3rem;
    padding-left: 0;
    padding-bottom: 0;
  }

  p {
    font-family: 'utm_avo_bold';
    font-size: 1.5rem;
  }

  ul {
    padding-left: 0rem;

    li {
      list-style-type: none;
    }

    a {
      color: #808080;
      line-height: 1.5rem;
    }

    a:hover {
      color: #72b4fd;
    }
  }
`;

class Footer extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Row>
          <StyledBg />
          <StyledContent />
        </Row>
        <div className="logo">
          <FixWidth>
            <img src={logo} alt="logo" />
          </FixWidth>
        </div>
        <div className="copyright">
          <FixWidth>
            <p>
              <Icon type="copyright" /> Copyrights 2019 Shared Wifi. All rights
              reserved.
            </p>
          </FixWidth>
        </div>
      </div>
    );
  }
}

const StyledFooter = styled(Footer)`
  background-color: #f3f3f3;
  position: relative;

  .logo {
    position: absolute;
    top: 0;

    img {
      max-height: 3.5rem;
      margin-top: 2.5rem;
      margin-left: 1rem;

      @media only screen and (min-width: 360px) {
        margin-left: 3rem;
        margin-top: 3rem;
      }

      @media only screen and (min-width: ${props =>
          props.theme.breakpoints.sm}) {
        max-height: 4rem;
        margin-top: 4rem;
        margin-left: 13rem;
      }
    }
  }

  .copyright {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem 0;
    background-color: white;
    opacity: 0.6;

    p {
      margin-bottom: 0;
      margin-left: 0;

      @media only screen and (min-width: ${props =>
          props.theme.breakpoints.sm}) {
        margin-left: 4rem;
      }
    }
  }
`;

export { StyledFooter as Footer };
