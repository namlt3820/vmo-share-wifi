import React, { Component } from 'react';
import { Breadcrumb, Button, Tabs, Divider, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  DashBoardTittle,
  DashBoardContentLayout,
  DashboardTop,
  DashboardTopText,
  DashboardBottomText
} from '../../../components/DashboardStyle';

const { TabPane } = Tabs;
let timeOut;

const Devices = [
  {
    id: '1',
    name: 'SW-101',
    mac_address: '09238982983'
  },
  {
    id: '2',
    name: 'SW-102',
    mac_address: '09238982983'
  }
];

const Routers = [
  {
    id: '1',
    name: 'SW-101',
    mac_address: '09238982983'
  },
  {
    id: '2',
    name: 'SW-102',
    mac_address: '09238982983'
  }
];

class UserInfomation extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      name: '',
      email: '',
      role: '',
      loading: true
    };
  }

  componentDidMount() {
    timeOut = setTimeout(() => {
      this.takeUserInfo();
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(timeOut);
  }

  takeUserInfo = async () => {
    const { type } = this.props.location.state;
    if (type === 'myprofile' || type === 'userInfo') {
      const { _id, name, email, role } = this.props.userInfo.user;
      this.setState({
        id: _id,
        name,
        email,
        role,
        loading: false
      });
    } else if (type === 'userDetail') {
      const { _id, name, email } = this.props.location.state.userInfo;
      this.setState({
        id: _id,
        name,
        email,
        loading: false
      });
    }
  };

  render() {
    const { id, name, email, role, loading } = this.state;
    const userInfoEdit = {
      id,
      name,
      email
    };
    return (
      <>
        <DashBoardTittle>
          <h4>USER INFOMATION</h4>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Account</Breadcrumb.Item>
            <Breadcrumb.Item href="">User Infomation</Breadcrumb.Item>
          </Breadcrumb>
        </DashBoardTittle>
        <DashBoardContentLayout>
          <DashboardTop>
            <Skeleton loading={loading} active>
              <img alt="" src="assets/logo.png" />
              <DashboardTopText>
                <h4>{name}</h4>
                <h6>{role === 0 ? 'Admin' : 'User'}</h6>
                <Button>
                  <Link
                    to={{
                      pathname: '/updateUserInfo',
                      state: {
                        userInfoEdit
                      }
                    }}
                  >
                    Update infomation
                  </Link>
                </Button>
              </DashboardTopText>
            </Skeleton>
          </DashboardTop>
          <div>
            <Skeleton loading={loading} active>
              <Tabs defaultActiveKey="1">
                <TabPane tab="About" key="1" style={{ padding: '0 4em' }}>
                  <DashboardBottomText>
                    <h6>Email:</h6>
                    <p>{email}</p>
                  </DashboardBottomText>
                  <Divider />

                  <div>
                    <h5>Payment</h5>
                    <div>
                      <DashboardBottomText>
                        <h6>Type:</h6>
                        <p>Credit Card</p>
                      </DashboardBottomText>
                      <DashboardBottomText>
                        <h6>Number:</h6>
                        <p>09238982983</p>
                      </DashboardBottomText>
                      <DashboardBottomText>
                        <h6>Expiry Date:</h6>
                        <p>2019/08/10</p>
                      </DashboardBottomText>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Devices" key="2" style={{ padding: '0 4em' }}>
                  <div>
                    <DashboardBottomText>
                      <h5>SW Devices</h5>
                    </DashboardBottomText>
                    {Devices.map(dv => {
                      return (
                        <div key={dv.id}>
                          <DashboardBottomText>
                            <h6>Name</h6>
                            <p>{dv.name}</p>
                          </DashboardBottomText>
                          <DashboardBottomText>
                            <h6>Mac-Address:</h6>
                            <p>{dv.mac_address}</p>
                          </DashboardBottomText>
                        </div>
                      );
                    })}
                    <Divider />
                    <DashboardBottomText>
                      <h5>SW Routers</h5>
                    </DashboardBottomText>
                    {Routers.map(rt => {
                      return (
                        <div key={rt.id}>
                          <DashboardBottomText>
                            <h6>Name</h6>
                            <p>{rt.name}</p>
                          </DashboardBottomText>
                          <DashboardBottomText>
                            <h6>Mac-Address:</h6>
                            <p>{rt.mac_address}</p>
                          </DashboardBottomText>
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
              </Tabs>
            </Skeleton>
          </div>
        </DashBoardContentLayout>
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
)(UserInfomation);
