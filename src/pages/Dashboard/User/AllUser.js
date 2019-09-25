import React, { Component } from 'react';
import { Breadcrumb, Input, Icon, Dropdown, Menu, Popconfirm } from 'antd';
import { connect } from 'react-redux';
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
  TableStyle,
  LinkStyle
} from '../../../components/DashboardStyle';
import UserManager from '../../../services/mngtUser.service';
import AddUser from './AddUser';
import EditUser from './EditUser';
import httpStatus from '../../../config/httpStatus';

const { Search } = Input;
const PER_PAGE = 500;
const OFF_SET = 0;
const PAGE_SIZE = 5;
const userManager = new UserManager();
let dataUser = [];

class AllUser extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      users: [],
      loading: false,
      visible: false,
      userInfo: {},
      searchText: ''
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
          dataUser = res.data.data.items;
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

  searchOnChange = e => {
    this.setState({ searchText: e.target.value });
  };

  onSearch = () => {
    const { searchText } = this.state;
    const reg = new RegExp(searchText, 'gi');
    this.setState({
      searchText: '',
      users: dataUser
        .map(record => {
          const match = record.name.match(reg);
          if (!match) {
            return null;
          }
          return record;
        })
        .filter(record => !!record)
    });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
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

  changeData = (user, users) => {
    return users.filter(dt => {
      return dt._id !== user._id;
    });
  };

  render() {
    const { users, loading, userInfo, searchText, user } = this.state;

    const menu = (
      <Menu>
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
            Edit
          </LinkStyle>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2">
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => this.deleteUser()}
          >
            <a href="#3">Delete</a>
          </Popconfirm>
        </Menu.Item>
      </Menu>
    );

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        onFilter: (value, record) => record.name.indexOf(value) === 0
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: 'Role',
        dataIndex: 'role',
        key: 'role'
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
          <h3>ALL USERS</h3>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Account</Breadcrumb.Item>
            <Breadcrumb.Item href="">All Users</Breadcrumb.Item>
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
                value={searchText}
                onSearch={this.onSearch}
                style={{ width: 200 }}
                onChange={this.searchOnChange}
                onPressEnter={this.onSearch}
              />
              <DashBoardButton>
                <DashBoardButtonStyle
                  background="#1890ff"
                  onClick={this.showModal}
                >
                  Add
                </DashBoardButtonStyle>
              </DashBoardButton>
            </DashBoardTableButton>
            {user ? (
              <TableStyle
                columns={columns}
                dataSource={this.changeData(user, users)}
                loading={loading}
                rowKey={record => record._id}
                pagination={{ pageSize: PAGE_SIZE }}
              />
            ) : (
              ''
            )}
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

const mapStateToProps = state => ({
  userInfo: state.users
});

export default connect(
  mapStateToProps,
  null
)(AllUser);
