import React, { Component } from 'react';
import { Breadcrumb, Button, Tabs, Divider } from 'antd';
import { connect } from 'react-redux';
import {
  DashBoardTittle,
  DashBoardContentLayout,
  DashboardTop,
  DashboardTopText,
  DashboardBottomText,
  UnderLine
} from '../../../components/DashboardStyle';

const { TabPane } = Tabs;

class UserInfomation extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      role: ''
    };
  }

  componentDidMount() {
    this.takeUserInfo();
  }

  takeUserInfo = () => {
    setTimeout(() => {
      if (
        this.props.location.state.type === 'myprofile' ||
        this.props.location.state.type === 'userInfo'
      ) {
        const { name, email, role } = this.props.userInfo.user;
        this.setState({
          name,
          email,
          role
        });
      } else if (this.props.location.state.type === 'userDetail') {
        const { name, email } = this.props.location.state.userInfo;
        this.setState({
          name,
          email
        });
      }
    }, 3000);
  };

  render() {
    const { name, email, role } = this.state;
    return (
      <>
        <DashBoardTittle>
          <h4>USER INFOMATION</h4>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Account Management</Breadcrumb.Item>
            <Breadcrumb.Item href="">User Infomation</Breadcrumb.Item>
          </Breadcrumb>
        </DashBoardTittle>
        <DashBoardContentLayout>
          <DashboardTop>
            <img alt="" src="assets/logo.png" />
            <DashboardTopText>
              <h3>{name}</h3>
              <h5>{role === 0 ? 'Admin' : 'User'}</h5>
              <Button>Update infomation</Button>
            </DashboardTopText>
          </DashboardTop>
          <div>
            <Tabs defaultActiveKey="1">
              <TabPane tab="About" key="1" style={{ padding: '0 4em' }}>
                <DashboardBottomText>
                  <h4>Email:</h4>
                  <p>{email}</p>
                </DashboardBottomText>
                <Divider />
                <div>
                  <h4>Payment</h4>
                  <div>
                    <DashboardBottomText>
                      <h4>Type:</h4>
                      <p>Credit Card</p>
                    </DashboardBottomText>
                    <DashboardBottomText>
                      <h4>Number:</h4>
                      <p>09238982983</p>
                    </DashboardBottomText>

                    <DashboardBottomText>
                      <h4>Expiry Date:</h4>
                      <p>2019/08/10</p>
                    </DashboardBottomText>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Devices" key="2" style={{ padding: '0 4em' }}>
                <div>
                  <DashboardBottomText>
                    <UnderLine>SW Devices</UnderLine>
                  </DashboardBottomText>
                  <div>
                    <DashboardBottomText>
                      <h4>Name</h4>
                      <p>SW-101</p>
                    </DashboardBottomText>
                    <DashboardBottomText>
                      <h4>Mac-Address:</h4>
                      <p>09238982983</p>
                    </DashboardBottomText>
                    <Divider />
                    <DashboardBottomText>
                      <h4>Name</h4>
                      <p>SW-101</p>
                    </DashboardBottomText>
                    <DashboardBottomText>
                      <h4>Mac-Address:</h4>
                      <p>09238982983</p>
                    </DashboardBottomText>
                  </div>
                  <DashboardBottomText>
                    <UnderLine>SW Routers</UnderLine>
                  </DashboardBottomText>
                  <div>
                    <DashboardBottomText>
                      <h4>Name</h4>
                      <p>SW-104</p>
                    </DashboardBottomText>
                    <DashboardBottomText>
                      <h4>Mac-Address:</h4>
                      <p>09238982983</p>
                    </DashboardBottomText>
                    <Divider />
                    <DashboardBottomText>
                      <h4>Name</h4>
                      <p>SW-105</p>
                    </DashboardBottomText>
                    <DashboardBottomText>
                      <h4>Mac-Address:</h4>
                      <p>09238982983</p>
                    </DashboardBottomText>
                  </div>
                </div>
              </TabPane>
            </Tabs>
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
