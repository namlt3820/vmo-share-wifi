import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;

// const { SubMenu } = Menu;

const Wrapper = styled.div`
  // height: 100vh;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;

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
          <Sider trigger={null} theme="light" collapsible collapsed={collapsed}>
            <div className="logo">
              {/* <img src="assets/logo.png" alt="Share Wifi" /> */}
            </div>
            <Menu defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>Account Management</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>Wifi Management</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>Data Management</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="upload" />
                <span>Payment Management</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: '10px 3px' }}>
              <Icon
                style={{ display: 'flex', fontSize: 30 }}
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
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
