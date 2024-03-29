import { Row, Col } from 'antd';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FixWidth from './core/FixWidth';
import bg1 from './assets/images/header-bg-1.png';
import bg2 from './assets/images/header-bg-2.png';
import icon1 from './assets/images/icon-1.png';
import icon2 from './assets/images/icon-2.png';
import icon3 from './assets/images/icon-3.png';
import icon4 from './assets/images/icon-4.png';

const Introduction = ({ className }) => (
  <div className={className}>
    <FixWidth>
      <Row type="flex">
        <Col xs={24} sm={12}>
          <p>
            Connect high speed internet <br />
            Earn money from your wifi device <br />
            All on Shared Wifi network
          </p>
          <Link to="/signup" className="explore">
            Explore
          </Link>
        </Col>
        <Col xs={24} sm={12}>
          <img src={bg2} alt="header-bg-2" />
        </Col>
      </Row>
    </FixWidth>
  </div>
);

const StyledIntroduction = styled(Introduction)`
  padding-top: 4rem;

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    padding-top: 10rem;
  }

  .explore {
    background-color: #49a1fc;
    color: white;
    border-radius: 0.25rem;
    padding: 0.4rem 3rem 0.6rem 3rem;
    font-size: 1.25rem;
    margin-top: 2rem;
    text-decoration: none;
  }

  p {
    font-family: 'utm_avo_bold';
    font-size: 0.9rem;
    line-height: 1.6rem;
    color: #6c747c;
    text-transform: uppercase;
    margin: 3rem 0 2rem 0;

    @media only screen and (min-width: 380px) {
      font-size: 1.1rem;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.xs}) {
      font-size: 1.75rem;
      line-height: 2.5rem;
      margin: 3rem 0;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.ul}) {
      margin-top: 15rem;
    }

    @media only screen and (min-width: ${props =>
        props.theme.breakpoints.xxl}) {
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  img {
    max-height: 600px;
    width: 100%;
    margin-top: 2rem;

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
      margin-left: 4rem;
      margin-top: 0;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.ul}) {
      max-height: 800px;
    }
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
    top: -60px;
    transform: translateX(-50%);
  }

  .title {
    text-align: center;
    font-size: 1.5rem;
  }

  .content {
    padding: 0 1rem;

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
      padding: 0 2rem;
    }
  }
`;

const Cards = ({ className }) => {
  const cardData = [
    {
      icon: icon1,
      title: 'Easy to connect',
      content: 'Just register and then you can connect internet easily.'
    },
    {
      icon: icon2,
      title: 'High speed',
      content:
        'Connect a high speed internet verified by our monitoring system.'
    },
    {
      icon: icon3,
      title: 'Wide coverage',
      content: 'We are providing our service to many countries in the world.'
    },
    {
      icon: icon4,
      title: 'Get money from wifi device',
      content:
        'You can earn money by connection your wifi devices to shared wifi network.'
    }
  ];

  return (
    <div className={className} id="features">
      <FixWidth>
        <Row type="flex" justify="space-between" gutter={40}>
          {cardData.map(item => (
            <Col xs={24} sm={12} xll={6} key={item.title}>
              <StyledCard {...item} />
            </Col>
          ))}
        </Row>
      </FixWidth>
    </div>
  );
};

const StyledCards = styled(Cards)`
  margin: 3rem 0 4rem 0;

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 6rem;
  }

  .ant-row {
    margin-top: -6rem;
  }

  .ant-col {
    margin-top: 6rem;
  }
`;

class Features extends Component {
  render() {
    return (
      <div className={this.props.className} id="home">
        <StyledIntroduction />
        <StyledCards />
      </div>
    );
  }
}

const StyledFeatures = styled(Features)`
  background-image: url(${bg1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 500px;

  @media only screen and (min-width: ${props => props.theme.breakpoints.ul}) {
    background-position-x: 800px;
  }
`;

export { StyledFeatures as Features };
