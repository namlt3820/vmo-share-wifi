import React, { Component } from 'react';
import { Layout, Menu, Icon, Button, Badge, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  LogoDashBoard,
  HeaderIcon,
  HeaderProfile,
  HeaderProfileName
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

const HeaderStyle = styled(Header)`
  .ant-layout-header {
    line-height: 21px;
  }
`;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">
        <Icon type="profile" /> My Profile
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">
        <Icon type="setting" /> Setting
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Change Password</Menu.Item>
  </Menu>
);

export default class LayoutDashboard extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  };

  render() {
    const { collapsed } = this.state;
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
              </Menu.Item>
              <Menu.Divider />
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />

                    <span>Account</span>
                  </span>
                }
              >
                <Menu.Item key="2">
                  <Icon type="user" />
                  <span>All User</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="info-circle" />
                  <span>User Infomation</span>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="user-add" />
                  <span>Add User</span>
                </Menu.Item>
              </SubMenu>
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
              <Menu.Item key="7">
                <Icon type="database" />
                <span>Data Management</span>
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item key="8">
                <Icon type="dollar" />
                <span>Payment Management </span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <HeaderStyle style={{ background: '#fff' }}>
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
                        marginRight: '3em'
                      }}
                    />
                  </a>
                </Dropdown>
                <HeaderProfile>
                  <HeaderProfileName>
                    <h3>John Thomasasas</h3>
                    <h3>Admin</h3>
                  </HeaderProfileName>
                </HeaderProfile>
              </HeaderIcon>
            </HeaderStyle>
            <Content
              style={{
                padding: 24,
                minHeight: 280,
                height: '100vh'
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
