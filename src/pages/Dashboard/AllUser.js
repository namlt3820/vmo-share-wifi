import React, { Component } from 'react';
import { Breadcrumb, Input, Table, Icon, Dropdown, Menu } from 'antd';
import {
  DashBoardTittle,
  DashBoardContent,
  DashBoardTab,
  DashBoardTabItems,
  DashBoardTable,
  DashBoardTableButton,
  DashBoardButton,
  DashBoardButtonStyle
} from '../../components/DashboardStyle';

const { Search } = Input;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#3">Edit</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a href="#3">Profile</a>
    </Menu.Item>
  </Menu>
);

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="#1">{text}</a>
  },
  {
    title: 'Email',
    dataIndex: 'email'
  },
  {
    title: 'Role',
    dataIndex: 'role'
  },
  {
    title: 'Status',
    dataIndex: 'status'
  },
  {
    title: 'Active',
    dataIndex: 'active',
    render: text => {
      return (
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#2">
            <Icon
              type="more"
              name={text}
              style={{
                display: 'flex',
                position: 'relative',
                left: '11px'
              }}
            />
          </a>
        </Dropdown>
      );
    }
  }
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    email: 'johnbrown@gmail.com',
    role: 'Admin',
    status: 'Online',
    active: ''
  },
  {
    key: '2',
    name: 'Jim Green',
    email: 'johnbrown@gmail.com',
    role: 'Admin',
    status: 'Online',
    active: ''
  },
  {
    key: '3',
    name: 'Joe Black',
    email: 'johnbrown@gmail.com',
    role: 'Admin',
    status: 'Online',
    active: ''
  },
  {
    key: '4',
    name: 'Disabled User',
    email: 'johnbrown@gmail.com',
    role: 'Admin',
    status: 'Online',
    active: ''
  }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  // onChange: (selectedRowKeys, selectedRows) => {
  //   console.log(
  //     `selectedRowKeys: ${selectedRowKeys}`,
  //     'selectedRows: ',
  //     selectedRows
  //   );
  // },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
};

export default class AllUser extends Component {
  render() {
    return (
      <>
        <DashBoardTittle>
          <h3>ALL USER</h3>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Account Management</Breadcrumb.Item>
            <Breadcrumb.Item href="">All User</Breadcrumb.Item>
          </Breadcrumb>
        </DashBoardTittle>
        <DashBoardContent>
          <DashBoardTab>
            <DashBoardTabItems active="active">
              <a href="#1" type="button">
                All (06)
              </a>
            </DashBoardTabItems>
            <DashBoardTabItems>
              <a href="#1" type="button">
                Admin (06)
              </a>
            </DashBoardTabItems>
            <DashBoardTabItems>
              <a href="#1" type="button">
                User (06)
              </a>
            </DashBoardTabItems>
          </DashBoardTab>
          <DashBoardTable>
            <DashBoardTableButton name="user">
              <Search
                // onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
              <DashBoardButton>
                <DashBoardButtonStyle background="#747474">
                  Add
                </DashBoardButtonStyle>
                <DashBoardButtonStyle>Delete</DashBoardButtonStyle>
              </DashBoardButton>
            </DashBoardTableButton>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
            />
          </DashBoardTable>
        </DashBoardContent>
      </>
    );
  }
}
