import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import styled from 'styled-components';
import FixWidth from './core/FixWidth';
import bg from './assets/images/footer-bg.png';
import logo from './assets/images/logo-white.png';

const Bg = ({ className }) => <Col xs={24} sm={10} className={className} />;

const StyledBg = styled(Bg)`
  height: 150px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (min-width: ${props => props.theme.breakpoints.xs}) {
    height: 220px;
  }
`;

const Content = ({ className }) => (
  <Col xs={24} sm={14} className={className}>
    <Row>
      <Col xs={24} sm={12} xxl={6}>
        <p>Useful Links</p>
        <ul className="section">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#aboutus">About Us</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Col>
      <Col xs={24} sm={12} xxl={18}>
        <ul className="social">
          <li>
            <a href="/">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fa fa-google-plus" />
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  </Col>
);

const StyledContent = styled(Content)`
  padding-left: 4rem;
  padding-bottom: 5rem;
  padding-top: 1rem;

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    padding-left: 0;
    padding-bottom: 0;
    margin-top: 1rem;
    padding-top: 0;
  }

  p {
    font-family: 'utm_avo_bold';
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  ul.section {
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

  ul.social {
    display: flex;
    margin-top: 0.5rem;
    padding-left: 0;

    li {
      list-style-type: none;
      width: 3rem;
      height: 3rem;
      display: inline-block;
      border: 0.5px solid #4677ed;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-right: 1rem;

      &:hover {
        border-color: #d5429b;
        cursor: pointer;
        i {
          color: #d5429b;
        }
      }
    }

    i {
      font-size: 1.5rem;
      color: #4677ed;
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
  margin-top: 6rem;

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
        margin-left: 9rem;
      }

      @media only screen and (min-width: ${props =>
          props.theme.breakpoints.ul}) {
        margin-left: 35rem;
      }
    }
  }

  .copyright {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem 0;
    background-color: white;
    opacity: 0.6;

    > div {
      @media only screen and (min-width: ${props =>
          props.theme.breakpoints.ul}) {
        max-width: 1450px;
      }
    }

    p {
      margin-bottom: 0;
      margin-left: 0;

      i {
        vertical-align: text-bottom;
      }
    }
  }
`;

export { StyledFooter as Footer };
