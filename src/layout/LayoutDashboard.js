import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Button, Badge, Dropdown } from 'antd';
import styled from 'styled-components';
import { logout } from '../store/actions/logout';
import {
  LogoDashBoard,
  HeaderIcon,
  HeaderProfile,
  HeaderProfileName,
  LinkStyle
} from '../components/DashboardStyle';

const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu;

const Wrapper = styled.div`
  // height: 100vh;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;

const StyleMenuItem = styled(Menu.Item)`
  display: flex;
  align-items: center;
`;

const StyleSubMenu = styled(SubMenu)`
  span {
    display: flex;
    align-items: center;
  }
`;

// const menu = (
//   <Menu>
//     <Menu.Item key="0">
//       <Icon type="profile" />
//       <span>
//         <LinkStyle
//           to={{
//             pathname: '/userInfomation',
//             state: {
//               type: 'myprofile'
//             }
//           }}
//         >
//           My Profile
//         </LinkStyle>
//       </span>
//     </Menu.Item>
//     <Menu.Divider />
//     <Menu.Item key="1">
//       <LinkStyle
//         to={{
//           pathname: '/changePwd'
//         }}
//       >
//         Change Password
//       </LinkStyle>
//     </Menu.Item>
//   </Menu>
// );

class LayoutDashboard extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      user: {}
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { user } = props.userInfo;
    if (user !== state.user) {
      return {
        user
      };
    }
    return null;
  }

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  };

  logout = () => {
    logout();
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Icon type="profile" />
          <span>
            <LinkStyle
              to={{
                pathname: '/userInfomation',
                state: {
                  type: 'myprofile'
                }
              }}
            >
              My Profile
            </LinkStyle>
          </span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <LinkStyle
            to={{
              pathname: '/changePwd'
            }}
          >
            Change Password
          </LinkStyle>
        </Menu.Item>
        <Menu.Item key="2">
          <a href="#3" onClick={this.logout}>
            Logout
          </a>
        </Menu.Item>
      </Menu>
    );

    const { collapsed, user } = this.state;
    const { children } = this.props;
    return (
      <Wrapper>
        <Layout>
          <Sider
            trigger={null}
            theme="light"
            style={{ minWidth: '220px' }}
            collapsed={collapsed}
          >
            <LogoDashBoard>
              <Button
                onClick={this.toggle}
                style={{ margin: 17, border: 'none' }}
              >
                <Icon type={collapsed ? 'menu' : 'close'} />
              </Button>
              <img
                src="assets/logo.png"
                alt="Share Wifi"
                style={{
                  display: `${!collapsed ? 'block' : 'none'}`,
                  transition: 'display 2s 2s 2s'
                }}
              />
            </LogoDashBoard>
            <Menu
              defaultSelectedKeys={['1']}
              mode="inline"
              theme="light"
              // inlineCollapsed={collapsed}
            >
              <Menu.Divider />
              <StyleMenuItem key="1">
                <Icon type="dashboard" />
                <span>Dashboard</span>
                <Link to="/dashboard" />
              </StyleMenuItem>
              <Menu.Divider />
              <StyleMenuItem key="2">
                <Icon type="user" />
                <span>Accounts</span>
                <Link to="/allUser" />
              </StyleMenuItem>
              <Menu.Divider />
              <StyleSubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="wifi" />
                    <span>Wifi</span>
                  </span>
                }
              >
                <StyleMenuItem key="5">
                  <Icon type="wifi" />
                  <span>All Router</span>
                  {/* <Link to="/routers" /> */}
                </StyleMenuItem>
                <StyleMenuItem key="6">
                  <Icon type="wifi" />
                  <span>Add Router</span>
                  <Link to="/addRouter" />
                </StyleMenuItem>
              </StyleSubMenu>
              <Menu.Divider />
              <StyleSubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="database" />
                    <span>Data</span>
                  </span>
                }
              >
                <StyleMenuItem key="5">
                  <Icon type="user" />
                  <span>User Data</span>
                  <Link to="/userData" />
                </StyleMenuItem>
                <StyleMenuItem key="6">
                  <Icon type="wifi" />
                  <span>Wifi Data</span>
                  <Link to="/wifiData" />
                </StyleMenuItem>
              </StyleSubMenu>
              <Menu.Divider />
              <StyleMenuItem key="8">
                <Icon type="dollar" />
                <span>Payment </span>
              </StyleMenuItem>
            </Menu>
          </Sider>
          <Layout>
            <Header
              style={{
                background: '#fff',
                lineHeight: '21px',
                height: '66px',
                padding: '0'
              }}
            >
              <HeaderIcon>
                <Badge count={5}>
                  <Icon type="bell" style={{ fontSize: 25 }} />
                </Badge>
                <Dropdown overlay={menu} trigger={['click']}>
                  <a className="ant-dropdown-link" href="#3">
                    <img
                      alt=""
                      style={{
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        background: '#333',
                        marginLeft: '2em',
                        marginRight: '1em',
                        backgroundSize: 'cover'
                      }}
                    />
                  </a>
                </Dropdown>
                <HeaderProfile>
                  {user ? (
                    <HeaderProfileName>
                      <p>{user.name}</p>
                      <p>{user.role === 0 ? 'Admin' : 'User'}</p>
                    </HeaderProfileName>
                  ) : (
                    ''
                  )}
                </HeaderProfile>
              </HeaderIcon>
            </Header>
            <Content
              style={{
                padding: 24,
                minHeight: 280
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.users
});

export default connect(
  mapStateToProps,
  null
)(LayoutDashboard);
