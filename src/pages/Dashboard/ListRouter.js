import React, { Component } from 'react';
import { Breadcrumb, Input, Icon, Menu, Select, Dropdown, Modal } from 'antd';
import { Link } from 'react-router-dom';
import {
  DashBoardTittle,
  DashBoardContent,
  DashBoardTable,
  DashBoardTableButton,
  Label,
  TableStyle,
  MenuStyle,
  DashBoardButton,
  DashBoardButtonStyle
} from '../../components/DashboardStyle';
import Router from '../../services/router.service';

import { WrapperForm, WrapperInput } from '../../components/Authentication';
import FormInput from '../../components/core/FormInput';
import httpStatus from '../../config/httpStatus';

const PER_PAGE = 10;
const router = new Router();
const InputGroup = Input.Group;
const { Option } = Select;
export default class ListRouter extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      location: '',
      description: '',
      routers: [],
      router: {},
      loading: false,
      isVisibleEditRouter: false
    };
  }

  componentDidMount() {
    this.getRoutes();
  }

  getRoutes = () => {
    const params = {
      limit: PER_PAGE,
      offset: 0
    };
    this.setState({ loading: true });
    router.getRouter(params).then(res => {
      this.setState({ routers: res.data.data.items, loading: false });
    });
  };

  deleteRouter = () => {
    const { _id } = this.state.router;
    router.deleteRouter(_id).then(res => {
      if (res.status === httpStatus.StatusNoContent) {
        this.getRoutes();
      }
    });
  };

  openEdit = () => {
    const { router } = this.state;
    this.setState({ isVisibleEditRouter: true });
    this.setState({
      name: router.name,
      location: router.location,
      description: router.description
    });
  };

  getRouterId = id => {
    const { routers } = this.state;
    routers.forEach(router => {
      if (router._id === id) {
        this.setState({ router });
      }
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleCancel = () => {
    this.setState({ isVisibleEditRouter: false });
  };

  handleOk = () => {
    const { name, location, description } = this.state;
    const { _id } = this.state.router;
    this.setState({ isVisibleEditRouter: false });
    const params = {
      name,
      location,
      description
    };
    router.updateRouter(_id, params).then(() => {
      this.getRoutes();
    });
  };

  render() {
    const menu = (
      <MenuStyle>
        <Menu.Item key="0">
          <a href="#3" onClick={this.openEdit}>
            Edit
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <a href="#3" onClick={this.deleteRouter}>
            Delete
          </a>
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
        render: (text, record) => {
          return (
            <Dropdown overlay={menu} trigger={['click']}>
              <a
                className="ant-dropdown-link"
                href="#2"
                onClick={() => {
                  this.getRouterId(record._id);
                }}
              >
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
    const {
      routers,
      loading,
      isVisibleEditRouter,
      description,
      location,
      name
    } = this.state;

    return (
      <>
        <DashBoardTittle>
          <h3>LIST ROUTER</h3>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Wifi</Breadcrumb.Item>
            <Breadcrumb.Item href="">List Routers</Breadcrumb.Item>
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

              <DashBoardButton>
                <DashBoardButtonStyle background="#747474">
                  <Link to="/addRouter">Add</Link>
                </DashBoardButtonStyle>
              </DashBoardButton>
            </DashBoardTableButton>
            <div>
              <TableStyle
                columns={columns}
                dataSource={routers}
                rowKey="_id"
                loading={loading}
              />
            </div>
          </DashBoardTable>
          {isVisibleEditRouter ? (
            <Modal
              title="Edit Routers"
              visible={isVisibleEditRouter}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <WrapperForm>
                <WrapperInput>
                  <FormInput
                    placeholder="Enter Router Name"
                    label="Name"
                    name="name"
                    value={name}
                    handleChange={this.handleChange}
                    type="text"
                  />
                  <FormInput
                    placeholder="Location"
                    label="Location"
                    name="location"
                    type="text"
                    handleChange={this.handleChange}
                    value={location}
                    icon="*"
                  />
                  <FormInput
                    placeholder="Description"
                    label="Description"
                    name="description"
                    value={description}
                    handleChange={this.handleChange}
                    type="text"
                  />
                </WrapperInput>
              </WrapperForm>
            </Modal>
          ) : (
            ''
          )}
        </DashBoardContent>
      </>
    );
  }
}
