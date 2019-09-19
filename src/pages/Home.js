import React, { Component } from 'react';
import LayoutDashboard from '../layout/LayoutDashboard';
// import AllUser from './Dashboard/AllUser';
// import ListDevice from './Dashboard/ListDevice';
// import AddDevice from './Dashboard/AddDevice';
import AddUser from './Dashboard/AddUser';

export default class Home extends Component {
  render() {
    return (
      <LayoutDashboard>
        {/* <AllUser /> */}
        <AddUser />
        {/* <ListDevice /> */}
        {/* <AddDevice /> */}
      </LayoutDashboard>
    );
  }
}
