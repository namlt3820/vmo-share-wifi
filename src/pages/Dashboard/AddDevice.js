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

export default class AddDevice extends Component {
  render() {
    return (
      <>
        <DashBoardTittle>
          <h3>ADD DEVICE</h3>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Wifi Management</Breadcrumb.Item>
            <Breadcrumb.Item href="">Add Device</Breadcrumb.Item>
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
                placeholder="Enter Device Name"
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
      </>
    );
  }
}
