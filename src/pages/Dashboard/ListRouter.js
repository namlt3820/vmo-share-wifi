import React, { Component } from 'react';
import { Breadcrumb, Input, Icon, Menu, Select, Dropdown } from 'antd';
import {
  DashBoardTittle,
  DashBoardContent,
  DashBoardTable,
  DashBoardTableButton,
  Label,
  TableStyle,
  MenuStyle
} from '../../components/DashboardStyle';

const InputGroup = Input.Group;
const { Option } = Select;

const menu = (
  <MenuStyle>
    <Menu.Item key="0">
      <a href="#3">Edit</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a href="#3">Profile</a>
    </Menu.Item>
  </MenuStyle>
);

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="#1">{text}</a>
  },
  {
    title: 'Mac-Address',
    dataIndex: 'macAddress'
  },
  {
    title: 'Location',
    dataIndex: 'location'
  },
  {
    title: 'Router Name',
    dataIndex: 'routerName'
  },
  {
    title: 'Traffic Used',
    dataIndex: 'trafficUsed'
  },
  {
    title: 'Active',
    dataIndex: 'active',
    render: text => <a href="#1">{text}</a>
  },
  {
    title: 'More',
    dataIndex: 'more',
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
                left: '16px'
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
    macAddress: '90-90-90-90-90',
    location: 'Duy Tan',
    routerName: 'SW-DT01',
    trafficUsed: '50MB',
    active: 'Enable',
    more: ''
  },
  {
    key: '2',
    name: 'Jim Green',
    macAddress: '90-90-90-90-90',
    location: 'Duy Tan',
    routerName: 'SW-DT01',
    trafficUsed: '50MB',
    active: 'Enable',
    more: ''
  },
  {
    key: '3',
    name: 'Joe Black',
    macAddress: '90-90-90-90-90',
    location: 'Duy Tan',
    routerName: 'SW-DT01',
    trafficUsed: '50MB',
    active: 'Disable',
    more: ''
  },
  {
    key: '4',
    name: 'Disabled User',
    macAddress: '90-90-90-90-90',
    location: 'Duy Tan',
    routerName: 'SW-DT01',
    trafficUsed: '50MB',
    active: 'Enable',
    more: ''
  }
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  // onChange: (selectedRowKeys, selectedRows) => {
  //   // console.log(
  //   //   `selectedRowKeys: ${selectedRowKeys}`,
  //   //   'selectedRows: ',
  //   //   selectedRows
  //   // );
  // },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
};

export default class ListRouter extends Component {
  render() {
    return (
      <>
        <DashBoardTittle>
          <h3>LIST Router</h3>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Wifi Management</Breadcrumb.Item>
            <Breadcrumb.Item href="">List</Breadcrumb.Item>
          </Breadcrumb>
        </DashBoardTittle>
        <DashBoardContent>
          <DashBoardTable>
            <DashBoardTableButton>
              <Label>Address</Label>
              <InputGroup compact>
                <Select defaultValue="Duy Tan Street" style={{ width: '20%' }}>
                  <Option value="Duy Tan Street">Duy Tan Street</Option>
                  <Option value="Pham Hung Street">Pham Hung Street</Option>
                </Select>
              </InputGroup>
            </DashBoardTableButton>
            <div>
              <TableStyle
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
              />
            </div>
          </DashBoardTable>
        </DashBoardContent>
      </>
    );
  }
}
