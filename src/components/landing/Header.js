import { Row, Col } from 'antd';
import React, { Component } from 'react';
import styled from 'styled-components';

import FixWidth from './core/FixWidth';
import logo from './assets/images/logo.png';
import bg1 from './assets/images/header-bg-1.png';
import bg2 from './assets/images/header-bg-2.png';
import icon1 from './assets/images/icon-1.png';
import icon2 from './assets/images/icon-2.png';
import icon3 from './assets/images/icon-3.png';

const Logo = ({ className }) => (
  <div className={className}>
    <FixWidth>
      <img src={logo} alt="logo" />
    </FixWidth>
  </div>
);

const StyledLogo = styled(Logo)`
  img {
    max-height: 60px;
    padding-top: 15px;
  }
`;

const Introduction = ({ className }) => (
  <div className={className}>
    <FixWidth>
      <Row>
        <Col xs={24} sm={10}>
          <p>Duis aute irure dolor in voluptate velit esse cillum</p>
        </Col>
      </Row>
    </FixWidth>
  </div>
);

const StyledIntroduction = styled(Introduction)`
  p {
    font-family: 'utm_avo_bold';
    font-size: 1.75rem;
    line-height: 2.5rem;
    margin-right: -15px;
    margin-left: -15px;
    text-transform: uppercase;

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
      font-size: 2.5rem;
      margin-right: 0;
      margin-left: 0;
      line-height: 3.5rem;
    }
  }

  margin-top: 2rem;
  margin-right: 1rem;
  margin-left: 1rem;
  background-image: url(${bg2});
  background-repeat: no-repeat;
  min-height: 460px;
  background-size: contain;
  background-position: 90% 100%;

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 10rem;
    padding-top: 5rem;
    min-height: 500px;
    margin-right: 0;
    margin-left: 0;
  }
`;

const Card = ({ className, icon, title, content }) => (
  <div className={className}>
    <img src={icon} alt={title} />
    <p className="title">{title}</p>
    <p className="content">{content}</p>
  </div>
);

const StyledCard = styled(Card)`
  padding: 1rem;
  border: none;
  position: relative;
  padding-top: 3rem;
  height: 100%;
  -webkit-box-shadow: 1px 1px 29px 0px rgba(50, 50, 50, 0.22);
  -moz-box-shadow: 1px 1px 29px 0px rgba(50, 50, 50, 0.22);
  box-shadow: 1px 1px 29px 0px rgba(50, 50, 50, 0.22);

  img {
    position: absolute;
    left: 50%;
    top: -30%;
    transform: translateX(-50%);
  }

  .title {
    text-align: center;
    font-size: 1.5rem;
  }

  .content {
    padding: 0 2rem;
  }
`;

const Cards = ({ className }) => {
  const cardData = [
    {
      icon: icon1,
      title: 'Data Manager',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo'
    },
    {
      icon: icon2,
      title: 'Convenient Payment',
      content:
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolores'
    },
    {
      icon: icon3,
      title: 'Dashboard',
      content:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'
    }
  ];

  return (
    <div className={className}>
      <FixWidth>
        <Row type="flex" justify="space-between">
          {cardData.map(item => (
            <Col xs={24} sm={7}>
              <StyledCard {...item} />
            </Col>
          ))}
        </Row>
      </FixWidth>
    </div>
  );
};

const StyledCards = styled(Cards)`
  margin: 8rem 0 4rem 0;

  .ant-row-flex {
    margin-top: -5rem;
  }

  .ant-col {
    margin-top: 5rem;
  }
`;

class Header extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <StyledLogo />
        <StyledIntroduction />
        <StyledCards />
      </div>
    );
  }
}

const StyledHeader = styled(Header)`
  background-image: url(${bg1});
  background-repeat: no-repeat;
  min-height: 00px;
  background-size: cover;
  background-position-x: 400px;

  @media only screen and (min-width: ${props => props.theme.breakpoints.ul}) {
    background-position-x: 800px;
  }
`;

export { StyledHeader as Header };
