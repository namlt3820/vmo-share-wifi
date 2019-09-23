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
import Router from '../../services/router.service';
import httpStatus from '../../config/httpStatus';

const router = new Router();
export default class AddRouter extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      macAddress: '',
      description: '',
      location: '',
      errors: {}
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value, errors: {} });
  };

  addRouter = () => {
    const { name, macAddress, description, location } = this.state;
    const { history } = this.props;
    const valied = {};
    const params = {
      name,
      macAddress,
      description,
      location
    };
    router.addRouter(params).then(res => {
      if (res.status === httpStatus.StatusBadRequest) {
        res.data.errors.forEach(error => {
          if (error.location === 'macAddress') {
            valied.macAddress = error.message;
          } else {
            valied.location = error.message;
          }
        });
        this.setState({ errors: valied });
      } else if (res.status === httpStatus.StatusConflict) {
        valied.macAddress = res.data.errors[0].message;
        this.setState({ errors: valied });
      } else {
        history.push('/routers');
      }
    });
  };

  cancel = () => {};

  render() {
    const { macAddress, errors, location, description, name } = this.state;
    return (
      <>
        <DashBoardTittle>
          <h3>Router</h3>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Wifi</Breadcrumb.Item>
            <Breadcrumb.Item href="">Add Router</Breadcrumb.Item>
          </Breadcrumb>
        </DashBoardTittle>
        <DashBoardContent>
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
                placeholder="Enter Mac-Address"
                label="Mac-Address"
                name="macAddress"
                type="text"
                error={errors.macAddress}
                handleChange={this.handleChange}
                value={macAddress}
                icon="*"
              />

              <FormInput
                placeholder="Location"
                label="Location"
                name="location"
                type="text"
                error={errors.location}
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
            <WrapperAction type="login">
              <ButtonStyle onClick={this.addRouter}>Save</ButtonStyle>
              <ButtonStyle background="none" onClick={this.cancel}>
                Cancel
              </ButtonStyle>
            </WrapperAction>
          </WrapperForm>
        </DashBoardContent>
      </>
    );
  }
}
