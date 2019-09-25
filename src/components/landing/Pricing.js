import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import styled from 'styled-components';
import FixWidth from './core/FixWidth';

const Conainer = styled.div`
  margin-bottom: 70px;
`;

const Pricingg = styled.p`
  text-align: center;
  font-size: 2rem;
  font-family: 'utm_avo_bold';
  color: #6c747c;
  margin-bottom: 30px;
  text-transform: uppercase;

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    margin-bottom: 50px;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-bottom: 80px;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    margin-bottom: 45px;
  }
`;

const CardText = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
  padding-top: 30px;
  padding-bottom: 50px;
  text-align: center;
  -webkit-box-shadow: 0px 0px 73px -34px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 73px -34px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 73px -34px rgba(0, 0, 0, 0.75);
  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 540px;
    width: 98%;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    max-width: 1140px;
    width: 75%;
  }
`;
const Personal = styled.p`
  font-family: 'roboto-bold';
  text-transform: uppercase;
  font-size: 15pt;
  letter-spacing: 3px;
  margin-bottom: 0px;
  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: 14pt;
    -webkit-letter-spacing: 3px;
    -moz-letter-spacing: 3px;
    -ms-letter-spacing: 3px;
    letter-spacing: 3px;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    max-width: 1140px;
    font-size: 20pt;
    -webkit-letter-spacing: 3px;
    -moz-letter-spacing: 3px;
    -ms-letter-spacing: 3px;
    letter-spacing: 3px;
  }
`;
const Free = styled.p`
  font-family: 'roboto-bold';
  font-size: 25pt;
  color: #7f868e;
  margin-bottom: 0px;
  span {
    font-size: 15px;
    font-weight: 100;
    font-family: 'roboto-regular';
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: 30pt;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    max-width: 1140px;
    font-size: 40pt;
    span {
      font-size: 15px;
      font-weight: 100;
    }
  }
`;
const StartGreat = styled.p`
  font-family: 'roboto-regular';
  color: #a3a9ae;
  font-size: 12pt;
  padding-left: 20px;
  padding-right: 20px;
  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: 15pt;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    max-width: 1140px;
    font-size: 12pt;
  }
`;
const Service = styled.div`
  font-size: 13pt;
  padding-top: 30px;
  padding-bottom: 20px;
  color: #737475;
  font-family: 'roboto-regular';
  span {
    font-weight: bold;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: 15pt;
    padding-top: 30px;
    padding-bottom: 20px;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    max-width: 1140px;
    font-size: 13pt;
    padding-top: 30px;
    padding-bottom: 20px;
  }
`;
const ButtonStyle = styled.button`
  border-radius: 5px;
  width: 120px;
  height: 40px;
  font-size: 13pt;
  background-color: #feffff;
  font-family: 'roboto-bold';
  border: 1px solid #b3b4b5;
  color: #747576;
  &:focus {
    outline: 0px auto -webkit-focus-ring-color;
  }
  &:hover {
    color: #ffff;
    cursor: pointer;
    background-image: linear-gradient(
      to bottom right,
      rgba(57, 150, 255),
      rgba(80, 94, 222)
    );
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 150px;
    height: 50px;
    font-size: 15pt;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    max-width: 1140px;
    width: 120px;
    height: 50px;
    font-size: 12pt;
  }
`;

export class Pricing extends Component {
  render() {
    return (
      <FixWidth>
        <Conainer>
          <div className="container" id="pricing">
            <Pricingg>Pricing</Pricingg>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <CardText>
                  <Personal>personal</Personal>
                  <Free>Free</Free>
                  <StartGreat>
                    Start today and create something great!
                  </StartGreat>
                  <Service>
                    <p>
                      <span>ML&nbsp;</span>250 hours
                    </p>
                    <p className="card-text">
                      <span>Robotics&nbsp;</span> 25 SU-hours
                    </p>
                    <p className="card-text">
                      <span>Compute&nbsp;</span> 750 hours
                    </p>
                    <p className="card-text">
                      <span>Storage&nbsp;</span> 5Gb
                    </p>
                    <p className="card-text">
                      <span>Database&nbsp;</span> 25Gb
                    </p>
                  </Service>
                  <ButtonStyle type="button" name="send">
                    Sign Up
                  </ButtonStyle>
                </CardText>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <CardText>
                  <Personal>business</Personal>
                  <Free>
                    $10 <span>/ Month</span>
                  </Free>
                  <StartGreat>Build a production-quanlity service!</StartGreat>
                  <Service>
                    <p>
                      <span>ML&nbsp;</span>250 hours
                    </p>
                    <p className="card-text">
                      <span>Robotics&nbsp;</span> 25 SU-hours
                    </p>
                    <p className="card-text">
                      <span>Compute&nbsp;</span> 750 hours
                    </p>
                    <p className="card-text">
                      <span>Storage&nbsp;</span> 5Gb
                    </p>
                    <p className="card-text">
                      <span>Database&nbsp;</span> 25Gb
                    </p>
                  </Service>
                  <ButtonStyle type="button" name="send">
                    Sign Up
                  </ButtonStyle>
                </CardText>
              </div>
            </div>
          </div>
        </Conainer>
      </FixWidth>
    );
  }
}
