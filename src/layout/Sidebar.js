import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon, Button } from 'antd';
import { sidebarData, sidebarDataOne, groupKey } from '../routers/routerData';
import { StyleMenuItem, LogoDashBoard } from '../components/DashboardStyle';

const { Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openKeys: [''],
      selectedKeys: [''],
      rootSubmenuKeys: groupKey
    };
  }

  componentDidMount = () => {
    this.setDefaultActiveItem(this.props);
    this.setDefaultActiveItemOne(this.props);
  };

  setDefaultActiveItem = ({ location }) => {
    const { pathname } = location;
    sidebarData.map(item => {
      if (item.children && item.children.length > 0) {
        return item.children.map(childitem => {
          if (pathname.match(childitem.path)) {
            this.setState({
              openKeys: [item.key],
              selectedKeys: [childitem.key]
            });
            document.title = childitem.text;
          }
          return null;
        });
      }
      return null;
    });
  };

  setDefaultActiveItemOne = ({ location }) => {
    const { pathname } = location;
    sidebarDataOne.map(item => {
      if (pathname.match(item.title.path)) {
        this.setState({
          openKeys: [item.key],
          selectedKeys: [item.key]
        });
        document.title = item.title.text;
      }
      return null;
    });
  };

  OpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );

    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [...openKeys]
      });
    }
  };

  toggle = () => {
    this.setState({
      openKeys: [''],
      selectedKeys: ['']
    });
    this.props.toggle();
  };

  render() {
    const { openKeys, selectedKeys } = this.state;
    const { collapsed, onCollapse } = this.props;
    const SideTreeOne = sidebarDataOne.map(item => (
      <StyleMenuItem
        key={item.key}
        onClick={() => {
          this.setState({ selectedKeys: [item.key] });

          document.title = item.title.text;
        }}
      >
        <Icon type={item.title.icon} />
        <Link
          to={item.title.path}
          style={{ display: !collapsed ? 'contents' : 'none' }}
        >
          <span>{item.title.text}</span>
        </Link>
      </StyleMenuItem>
    ));
    const SideTree = sidebarData.map(item => (
      <SubMenu
        key={item.key}
        title={
          <span>
            <Icon type={item.title.icon} />
            <span>{item.title.text}</span>
          </span>
        }
      >
        {item.children &&
          item.children.map(menuItem => (
            <StyleMenuItem
              key={menuItem.key}
              onClick={() => {
                this.setState({ selectedKeys: [menuItem.key] });

                document.title = menuItem.text;
              }}
            >
              <Link to={menuItem.path} style={{ display: 'contents' }}>
                <Icon type={menuItem.icon} />
                <span>{menuItem.text}</span>
              </Link>
            </StyleMenuItem>
          ))}
      </SubMenu>
    ));
    return (
      <Sider
        collapsible
        breakpoint="lg"
        collapsed={collapsed}
        onCollapse={onCollapse}
        trigger={collapsed}
        width={250}
        theme="light"
      >
        <LogoDashBoard>
          <Button onClick={this.toggle} style={{ margin: 17, border: 'none' }}>
            <Icon type={collapsed ? 'menu' : 'close'} />
          </Button>
          <Link to="/dashboard">
            <img
              src="assets/logo.png"
              alt="Share Wifi"
              style={{
                display: `${!collapsed ? 'block' : 'none'}`,
                transition: 'display 2s 2s 2s'
              }}
            />
          </Link>
        </LogoDashBoard>
        <Menu
          subMenuOpenDelay={0.3}
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          mode="inline"
          onOpenChange={this.OpenChange}
        >
          {SideTreeOne}
          {SideTree}
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(Sidebar);
