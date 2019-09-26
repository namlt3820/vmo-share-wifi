import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon, Badge, Dropdown } from 'antd';
import { logout } from '../store/actions/logout';
import {
  Wrapper,
  HeaderIcon,
  HeaderProfile,
  HeaderProfileName,
  LinkStyle,
  StyleMenuItem
} from '../components/DashboardStyle';
import Sidebar from './Sidebar';

const { Header, Content } = Layout;

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
          {/* <Sider
            collapsible
            onCollapse={this.onCollapse}
            trigger={collapsed}
            theme="light"
            style={{ minWidth: '220px' }}
            collapsed={collapsed}
          > */}
          {/* <LogoDashBoard>
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
            </LogoDashBoard> */}
          <Sidebar collapsed={collapsed} onCollapse={this.onCollapse} />
          {/* </Sider> */}
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
