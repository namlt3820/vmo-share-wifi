import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import styled from 'styled-components';
import FixWidth from './core/FixWidth';

const Container = styled.div`
  width: 95%;
  margin: auto;
  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    max-width: 1140px;
    width: 50%;
  }
`;

const styleForm = `
margin-top: .5rem!important;
font-family: 'utm_avo';
border: none!important;
border-radius: 0px;
background-color: rgba(235, 237, 250);
outline-style: none;
display: block;
width: 100%;
padding: .375rem .75rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
// color: #495057;
/* background-color: #fff; */
background-clip: padding-box;
border: 1px solid #ced4da;
transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
&:focus {
  border: none!important;
  borderRadius: 0!important;
  backgroundRolor: rgba(235, 237, 250);
  outlineStyle: none;
  boxShadow: 0 0 0 0rem rgba(0, 123, 255, .25)!important;
}
`;

const GetInTouch = styled.p`
  font-size: 20pt;
  text-align: center;
  color: #626e78;
  span {
    color: #73b9fe;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 35pt;
    text-align: center;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 37pt;
    text-align: center;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    font-size: 50pt;
    text-align: center;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xxl}) {
    font-size: 50pt;
    text-align: center;
  }
`;
const WeSaid = styled.p`
  font-family: 'utm_avo';
  font-weight: 600;
  color: #6e6f70;
  font-size: 9pt;
  text-align: center;
  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    color: #6e6f70;
    font-size: 15pt;
    text-align: center;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.md}) {
    color: #6e6f70;
    font-size: 19pt;
    text-align: center;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    color: #6e6f70;
    font-size: 20pt;
    text-align: center;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xxl}) {
    color: #6e6f70;
    font-size: 20pt;
    text-align: center;
  }
`;
const InputStyle = styled.input([styleForm]);

const TextareaStyle = styled.textarea([styleForm]);

const ButtonStyle = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-color: aqua;
  margin: auto;
  max-width: 200px;
  max-height: 60px;
  color: #ffff;
  background-image: linear-gradient(
    to bottom right,
    rgba(57, 150, 255),
    rgba(80, 94, 222)
  );
  border: none !important;
  box-shadow: 0 0 0 0rem rgba(0, 123, 255, 0.25) !important;
  display: block;
  margin: auto;
  margin-top: 2rem !important;
  &:focus {
    outline: 0px auto -webkit-focus-ring-color;
    box-shadow: 0 0 0 0rem rgba(0, 123, 255, 0.25) !important;
    color: #ffff;
  }
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    background-color: aqua;
    margin: auto;
    width: 90px;
    height: 45px;
    color: #ffff;
    background-image: linear-gradient(
      to bottom right,
      rgba(57, 150, 255),
      rgba(80, 94, 222)
    );
    border: none !important;
    box-shadow: 0 0 0 0rem rgba(0, 123, 255, 0.25) !important;
    display: block;
    margin: auto;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.md}) {
    background-color: aqua;
    margin: auto;
    width: 100px;
    height: 50px;
    color: #ffff;
    background-image: linear-gradient(
      to bottom right,
      rgba(57, 150, 255),
      rgba(80, 94, 222)
    );
    border: none !important;
    box-shadow: 0 0 0 0rem rgba(0, 123, 255, 0.25) !important;
    display: block;
    margin: auto;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    background-color: aqua;
    margin: auto;
    width: 100px;
    height: 40px;
    color: #ffff;
    background-image: linear-gradient(
      to bottom right,
      rgba(57, 150, 255),
      rgba(80, 94, 222)
    );
    border: none !important;
    box-shadow: 0 0 0 0rem rgba(0, 123, 255, 0.25) !important;
    display: block;
    margin: auto;
  }
  @media only screen and (min-width: ${props => props.theme.breakpoints.xxl}) {
    max-width: 1400px;
    background-color: aqua;
    margin: auto;
    width: 130px;
    height: 50px;
    color: #ffff;
    background-image: linear-gradient(
      to bottom right,
      rgba(57, 150, 255),
      rgba(80, 94, 222)
    );
    border: none !important;
    box-shadow: 0 0 0 0rem rgba(0, 123, 255, 0.25) !important;
    display: block;
    margin: auto;
  }
`;
export class Contact extends Component {
  render() {
    return (
      <FixWidth>
        <Container>
          <GetInTouch>
            Get in
            <span>&nbsp;touch!</span>
          </GetInTouch>
          <WeSaid>
            We&apos;d love to hear from you. Drop us a note and we&apos;ll get
            back to you ASAP
          </WeSaid>
          <InputStyle
            className="input-name mt-2"
            type="text"
            placeholder="Name"
          />
          <InputStyle
            className="input-email mt-2"
            type="text"
            placeholder="Email"
          />
          <TextareaStyle
            className="mt-2"
            name="yourMessage"
            rows={3}
            placeholder="Your Message"
          />
          <ButtonStyle type="button" name="send" className=" mt-4">
            Send
          </ButtonStyle>
        </Container>
      </FixWidth>
    );
  }
}
