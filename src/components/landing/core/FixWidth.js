import styled from 'styled-components';

const FixWidth = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    max-width: 540px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: 720px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    max-width: 960px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    max-width: 1140px;
  }

  @media only screen and (min-width: ${props => props.theme.breakpoints.xxl}) {
    max-width: 1400px;
  }
`;

export default FixWidth;
