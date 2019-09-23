import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Button, Badge, Dropdown } from 'antd';
import styled from 'styled-components';
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
    <Menu.Item key="1">Change Password</Menu.Item>
  </Menu>
);

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

  render() {
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
            <Menu defaultSelectedKeys={['1']} mode="inline" theme="light">
              <Menu.Divider />
              <Menu.Item key="1">
                <Icon type="dashboard" />
                <span>Dashboard</span>
                <Link to="/dashboard" />
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="2">
                <Icon type="user" />
                <span>Accounts</span>
                <Link to="/allUser" />
              </Menu.Item>
              <Menu.Divider />
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="wifi" />
                    <span>Wifi</span>
                  </span>
                }
              >
                <Menu.Item key="5">
                  <Icon type="wifi" />
                  <span>All Router</span>
                  <Link to="/routers" />
                </Menu.Item>
                <Menu.Item key="6">
                  <Icon type="wifi" />
                  <span>Add Router</span>
                  <Link to="/addRouter" />
                </Menu.Item>
              </SubMenu>
              <Menu.Divider />
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="database" />
                    <span>Data</span>
                  </span>
                }
              >
                <Menu.Item key="5">
                  <Icon type="user" />
                  <span>User Data</span>
                  <Link to="/userData" />
                </Menu.Item>
                <Menu.Item key="6">
                  <Icon type="wifi" />
                  <span>Wifi Data</span>
                  <Link to="/wifiData" />
                </Menu.Item>
              </SubMenu>
              <Menu.Divider />
              <Menu.Item key="8">
                <Icon type="dollar" />
                <span>Payment </span>
              </Menu.Item>
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
                      <h3>{user.name}</h3>
                      <h5>{user.role === 0 ? 'Admin' : 'User'}</h5>
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
