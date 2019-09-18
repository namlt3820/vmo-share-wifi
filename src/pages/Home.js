import React, { Component } from 'react';
import LayoutDashboard from '../layout/LayoutDashboard';
import AllUser from './Dashboard/AllUser';
// import ListDevice from './Dashboard/ListDevice';
// import AddDevice from './Dashboard/AddDevice';

export default class Home extends Component {
  render() {
    return (
      <LayoutDashboard>
        <AllUser />
        {/* <ListDevice /> */}
        {/* <AddDevice /> */}
      </LayoutDashboard>
    );
  }
}
