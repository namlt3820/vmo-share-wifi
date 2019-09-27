import styled from 'styled-components';
import { Button, Table, Menu, Modal } from 'antd';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';

const { SubMenu } = Menu;

export const Wrapper = styled.div``;

export const DashBoardTittle = styled.div`
  h3 {
    font-weight: 700;
    margin-bottom: 0;
  }
  margin-bottom: 1.5em;
`;

export const DashBoardContent = styled.div``;

export const DashBoardTab = styled.div`
  display: flex;
`;

export const DashBoardTabItems = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 3em;
  width: 7em;
  background: ${props => (props.active === 'active' ? '#ffffff' : '#d0c8c845')};
  a {
    color: #333;
  }
  box-shadow: ${props => (props.active === 'active' ? 'none' : '2px 0px 3px;')};
`;

export const DashBoardContentLayout = styled.div`
  padding: 2.7em;
  background: #ffffff;
`;

export const DashBoardTableButton = styled.div`
  display: flex;
  justify-content: ${props =>
    props.name === 'user' ? 'space-between;' : 'flex-start'};
  margin-bottom: 1.5em;
  align-items: center;
`;

export const DashBoardTableButtonSelect = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const DashBoardTable = styled.div`
  // display: flex;
`;

export const DashBoardButton = styled.div`
  display: flex;
`;

export const DashBoardButtonStyle = styled(Button)`
  align-items: center;
  margin-left: 1em;
  width: 9em;
  color: #fff;
  font-weight: 700;
  background: #007ed9;
  :hover {
    background: #007ed9;
    color: #fff;
    box-shadow: 1px 0px 6px #40a9ff;
  }
  :focus {
    background: #007ed9;
    color: #fff;
  }
  :active {
    background: #007ed9;
    color: #fff;
  }
  :disabled {
    background: #007ed9;
    color: #fff;
    :hover {
      background: #007ed9;
      color: #fff;
    }
  }
`;

export const Label = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #747474;
  border-radius: 5px;
  font-weight: 700;
  margin-right: 1em;
`;

export const TableStyle = styled(Table)`
  .ant-table-column-title {
    font-weight: 700;
  }
  .ant-pagination-item-link {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuStyle = styled(Menu)`
  .ant-dropdown-menu-item-divider {
    margin: 0px 12px;
  }
`;

export const DividerStyle = styled.div`
  display: block;
  clear: both;
  width: ${props => (props.name === 'full' ? '100%' : '87%')};
  min-width: ${props => (props.name === 'full' ? '100%' : '87%')};
  height: 1px;
  background: #e8e8e8;
  margin: ${props => (props.name === 'full' ? '' : '12px 12px')};
`;

export const LogoDashBoard = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 100px;
    height: 25px;
  }
`;

export const HeaderIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5em;
`;

export const HeaderProfile = styled.div`
  width: 10em;
  height: 50px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  h3:first-child {
    margin: 2px 0;
  }
`;

export const HeaderProfileName = styled.div`
  p {
    margin: 3px 0;
    font-size: 18px;
    :last-child {
      font-size: 12px;
    }
  }
`;

export const DashboardTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3em;
  margin-right: 15em;
  img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    border: 1px solid;
  }
`;

export const DashboardTopText = styled.div`
  h6 {
    margin-bottom: 2em;
  }
  a {
    :hover {
      text-decoration: none;
    }
  }
`;

export const DashboardBottomText = styled.div`
  display: flex;
  margin: 2em 0 0 0;
  h6 {
    margin-right: 1em;
    margin-bottom: 0;
    position: relative;
  }
`;

// export const UnderLine = styled.h4`
//   position: relative;
//   ::after {
//     content: '';
//     height: 1px;
//     background: #333;
//     position: absolute;
//     width: 18%;
//     top: 1.75em;
//     left: 0;
//   }
// `;

export const ModalStyle = styled(Modal)`
  .ant-modal-footer {
    padding: 0;
  }
  .ant-modal-footer button {
    display: none;
  }

  .ant-modal-title {
    font-size: 20px;
  }
`;

// DATA

export const DataTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DataCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  color: #ffffff;
  box-shadow: 1px 1px 10px 0px rgba(50, 50, 50, 0.22);
  padding: 1em;
  border-radius: 5px;
  background: linear-gradient(141deg, #49a1fc 0%, #49a1fc 51%, #49a1fc 75%);
  h1 {
    color: #ffffff;
  }
`;

export const DataCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  h1 {
    margin: 0;
  }
`;

export const DataCardBottom = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-top: 2em;
  margin-bottom: 0;
  font-weight: 700;
`;

export const DateRangePicker = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 2em 0;
  p {
    margin: 0 1em;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const LinkStyle = styled(Link)`
  color: #333;
  :hover {
    text-decoration: none;
  }
`;

export const DataChart = styled.div`
  margin-top: 5em;
`;

export const StyleMenuItem = styled(Menu.Item)`
  display: flex;
  align-items: center;
  a {
    :hover {
      text-decoration: none;
    }
  }
`;

export const StyleSubMenu = styled(SubMenu)`
  span {
    display: flex;
    align-items: center;
  }
`;

export const ChartStyle = styled(Chart)`
  .apexcharts-menu-icon {
    display: none;
  }
`;
