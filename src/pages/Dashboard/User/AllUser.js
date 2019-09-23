import React, { Component } from 'react';
import { Breadcrumb, Input, Table, Icon, Dropdown, Menu } from 'antd';
// import { Link } from 'react-router-dom';
import {
  DashBoardTittle,
  DashBoardContent,
  // DashBoardTab,
  // DashBoardTabItems,
  DashBoardContentLayout,
  DashBoardTableButton,
  DashBoardButton,
  DashBoardButtonStyle,
  ModalStyle,
  LinkStyle
} from '../../../components/DashboardStyle';
import UserManager from '../../../services/mngtUser.service';
import AddUser from './AddUser';
import EditUser from './EditUser';
import httpStatus from '../../../config/httpStatus';

const { Search } = Input;
const PER_PAGE = 20;
const OFF_SET = 0;
const PAGE_SIZE = 5;
const userManager = new UserManager();

export default class AllUser extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: false,
      visible: false,
      visibleEdit: false,
      userInfo: {}
    };
  }

  componentDidMount() {
    this.getListUser();
  }

  getListUser = () => {
    const params = {
      limit: PER_PAGE,
      offset: OFF_SET
    };
    this.setState({
      loading: true
    });
    userManager
      .getListUser(params)
      .then(res => {
        if (res.status === httpStatus.StatusOK) {
          this.setState({
            loading: false,
            users: res.data.data.items
          });
        }
      })
      .catch(error => {
        throw error;
      });
  };

  addUser = params => {
    userManager
      .addUser(params)
      .then(() => {
        this.setState({ visible: false });
        this.getListUser();
      })
      .catch(error => {
        throw error;
      });
  };

  editUser = (id, params) => {
    userManager.editUser(id, params).then(() => {
      this.setState({
        visibleEdit: false
      });
      this.getListUser();
    });
  };

  deleteUser = () => {
    const { _id } = this.state.userInfo;
    const id = _id;
    userManager.deleteUser(id).then(() => {
      this.getListUser();
    });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  showModalEdit = () => {
    this.setState({
      visibleEdit: true
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  handleCancelEdit = () => {
    this.setState({
      visibleEdit: false
    });
  };

  getInfo = id => {
    const { users } = this.state;
    users.forEach(dt => {
      if (dt._id === id) {
        this.setState({
          userInfo: dt
        });
      }
    });
  };

  render() {
    const { users, loading, userInfo } = this.state;
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="#3" onClick={this.showModalEdit}>
            Edit
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <LinkStyle
            to={{
              pathname: '/userInfomation',
              state: {
                type: 'userDetail',
                userInfo
              }
            }}
          >
            View Profile
          </LinkStyle>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2" onClick={this.deleteUser}>
          <a href="#3">Delete</a>
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
        render: (text, record) => {
          return (
            <Dropdown overlay={menu} trigger={['click']}>
              <a
                className="ant-dropdown-link"
                href="#2"
                onClick={() => this.getInfo(record._id)}
              >
                {record.key}
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
    return (
      <>
        <DashBoardTittle>
          <h3>ALL USER</h3>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Account</Breadcrumb.Item>
            <Breadcrumb.Item href="">All User</Breadcrumb.Item>
          </Breadcrumb>
        </DashBoardTittle>
        <DashBoardContent>
          {/* <DashBoardTab>
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
          </DashBoardTab> */}
          <DashBoardContentLayout>
            <DashBoardTableButton name="user">
              <Search
                // onSearch={value => console.log(value)}
                style={{ width: 200 }}
              />
              <DashBoardButton>
                <DashBoardButtonStyle
                  background="#747474"
                  onClick={this.showModal}
                >
                  Add
                </DashBoardButtonStyle>
              </DashBoardButton>
            </DashBoardTableButton>
            <Table
              columns={columns}
              dataSource={users}
              loading={loading}
              rowKey={record => record._id}
              pagination={{ pageSize: PAGE_SIZE }}
            />
          </DashBoardContentLayout>
        </DashBoardContent>
        {/* ADD */}
        <ModalStyle
          title="Add User"
          visible={this.state.visible}
          onCancel={this.handleCancel}
        >
          <AddUser addUser={this.addUser} handleCancel={this.handleCancel} />
        </ModalStyle>
        {/* EDIT */}
        <ModalStyle
          title="Edit User"
          visible={this.state.visibleEdit}
          onCancel={this.handleCancelEdit}
        >
          <EditUser
            editUser={this.editUser}
            handleCancelEdit={this.handleCancelEdit}
            userInfo={userInfo}
          />
        </ModalStyle>
      </>
    );
  }
}
