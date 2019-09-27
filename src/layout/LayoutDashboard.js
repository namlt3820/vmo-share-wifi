import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Button, Badge, Dropdown } from 'antd';
import styled from 'styled-components';
import { logout } from '../store/actions/logout';
import {
  LogoDashBoard,
  HeaderIcon,
  HeaderProfile,
  HeaderProfileName,
  LinkStyle,
  StyleMenuItem,
  StyleSubMenu
} from '../components/DashboardStyle';

const { Header, Sider, Content } = Layout;
const Wrapper = styled.div``;

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

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

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
        <StyleMenuItem key="0">
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
        </StyleMenuItem>
        <Menu.Divider />
        <StyleMenuItem key="1">
          <LinkStyle
            to={{
              pathname: '/changePwd'
            }}
          >
            Change Password
          </LinkStyle>
        </StyleMenuItem>
        <Menu.Divider />

        <StyleMenuItem key="2">
          <Icon type="logout" />
          <a href="#3" onClick={this.logout}>
            Logout
          </a>
        </StyleMenuItem>
      </Menu>
    );

    const { collapsed, user } = this.state;
    const { children } = this.props;
    return (
      <Wrapper>
        <Layout>
          <Sider
            collapsible
            onCollapse={this.onCollapse}
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
                <LinkStyle to="/dashboard">
                  <span>Dashboard</span>
                </LinkStyle>
              </StyleMenuItem>
              <Menu.Divider />
              <StyleMenuItem key="2">
                <Icon type="user" />
                <LinkStyle to="/allUser">
                  <span>Accounts</span>
                </LinkStyle>
              </StyleMenuItem>
              <Menu.Divider />
              <StyleMenuItem key="3">
                <Icon type="wifi" />
                <LinkStyle to="/routers">
                  <span>Routers</span>
                </LinkStyle>
              </StyleMenuItem>
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
                  <LinkStyle to="/userData">
                    <span>User Data</span>
                  </LinkStyle>
                </StyleMenuItem>
                <StyleMenuItem key="6">
                  <Icon type="wifi" />
                  <LinkStyle to="/wifiData">
                    <span>Wifi Data</span>
                  </LinkStyle>
                </StyleMenuItem>
              </StyleSubMenu>
              <Menu.Divider />
              <StyleMenuItem key="7">
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
