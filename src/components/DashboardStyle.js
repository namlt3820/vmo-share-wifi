import styled from 'styled-components';
import { Button, Table, Menu } from 'antd';

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

export const DashBoardTable = styled.div`
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

export const DashBoardButton = styled.div`
  display: flex;
`;

export const DashBoardButtonStyle = styled(Button)`
  align-items: center;
  margin-left: 1em;
  width: 9em;
  color: ${props => (props.background === '#747474' ? '#ffffff' : '')};
  font-weight: 700;
  background: ${props =>
    props.background === '#747474'
      ? 'linear-gradient(to bottom, #e44688 0%, #ba3cbd 100%)'
      : ''};
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
`;

export const HeaderProfile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

export const HeaderProfileName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;