import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import FixWidth from './core/FixWidth';
import bg1 from './assets/images/header-bg-1.png';
import bg2 from './assets/images/header-bg-2.png';
import icon1 from './assets/images/icon-1.png';
import icon2 from './assets/images/icon-2.png';
import icon3 from './assets/images/icon-3.png';

const Introduction = ({ className }) => (
  <div className={className}>
    <FixWidth>
      <Row type="flex">
        <Col xs={24} sm={8}>
          <p>Duis aute irure dolor in voluptate velit esse cillum</p>
        </Col>
        <Col xs={24} sm={16}>
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

  p {
    font-family: 'utm_avo_bold';
    font-size: 1.75rem;
    line-height: 2.5rem;
    color: #4d5761;
    text-transform: uppercase;
    margin-top: 3rem;

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
      font-size: 2rem;
      line-height: 3rem;
    }
  }

  img {
    max-height: 600px;
    width: 100%;

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
      margin-left: 4rem;
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
      title: 'Easy to connect',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris commodo'
    },
    {
      icon: icon2,
      title: 'High speed',
      content:
        'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolores'
    },
    {
      icon: icon3,
      title: 'Wide coverage',
      content:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'
    },
    {
      icon: icon3,
      title: 'Get money from your wifi',
      content:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit'
    }
  ];

  return (
    <div className={className} id="features">
      <FixWidth>
        <Row type="flex" justify="space-between" gutter={40}>
          {cardData.map(item => (
            <Col xs={24} sm={12} key={item.title}>
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
      <div className={this.props.className}>
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
