import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import {
  DashBoardTittle,
  DashBoardContent
} from '../../components/DashboardStyle';
import {
  WrapperForm,
  WrapperInput,
  WrapperAction,
  ButtonStyle
} from '../../components/Authentication';
import FormInput from '../../components/core/FormInput';
import LayoutDashboard from '../../layout/LayoutDashboard';

export default class AddRouter extends Component {
  render() {
    return (
      <LayoutDashboard>
        <DashBoardTittle>
          <h3>Router</h3>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Wifi Management</Breadcrumb.Item>
            <Breadcrumb.Item href="">Add</Breadcrumb.Item>
          </Breadcrumb>
        </DashBoardTittle>
        <DashBoardContent>
          <WrapperForm>
            <WrapperInput>
              <FormInput
                placeholder="Enter router"
                label="Router"
                name="routerName"
                type="text"
                icon="*"
              />
              <FormInput
                placeholder="Enter Router Name"
                label="Name"
                name="name"
                type="text"
              />
              <FormInput
                placeholder="Enter Mac-Address"
                label="Mac-Address"
                name="macAddress"
                type="text"
                icon="*"
              />
            </WrapperInput>
            <WrapperAction type="login">
              <ButtonStyle>Save</ButtonStyle>
              <ButtonStyle background="none">Cancel</ButtonStyle>
            </WrapperAction>
          </WrapperForm>
        </DashBoardContent>
      </LayoutDashboard>
    );
  }
}
