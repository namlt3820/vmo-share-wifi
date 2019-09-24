import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';
import Chart from 'react-apexcharts';
import {
  DashBoardTittle,
  DashBoardContent,
  DashBoardContentLayout,
  DataTop,
  DataCard,
  DataCardTop,
  DataCardBottom,
  DataChart
} from '../../components/DashboardStyle';
import DashboardManagerment from '../../services/dashboard.service';

const dashboardManagerment = new DashboardManagerment();

export default class AddDevice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routers: '',
      devices: '',
      users: '',
      usedData: '',
      options: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: ['10/11/2019', 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 200]
        }
      ]
    };
  }

  componentDidMount() {
    dashboardManagerment.getAllData().then(res => {
      console.log(res);
      const { users, routers, devices, dataUsed } = res.data.data;
      this.setState({
        users,
        routers,
        devices,
        usedData: dataUsed
      });
    });
  }

  render() {
    const { routers, users, devices, usedData } = this.state;
    return (
      <>
        <DashBoardTittle>
          <h3>DASHBOARD</h3>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">DashBoard</Breadcrumb.Item>
          </Breadcrumb>
        </DashBoardTittle>
        <DashBoardContent>
          <DashBoardContentLayout>
            <DataTop>
              <DataCard>
                <DataCardTop>
                  <Icon type="wifi" />
                  <h1>{routers}</h1>
                </DataCardTop>
                <DataCardBottom>Wifi Routers</DataCardBottom>
              </DataCard>
              <DataCard>
                <DataCardTop>
                  <Icon type="user" />
                  <h1>{users}</h1>
                </DataCardTop>
                <DataCardBottom>Users</DataCardBottom>
              </DataCard>
              <DataCard>
                <DataCardTop>
                  <Icon type="database" />
                  <h1>{devices}</h1>
                </DataCardTop>
                <DataCardBottom>Devices</DataCardBottom>
              </DataCard>
              <DataCard>
                <DataCardTop>
                  <Icon type="database" />
                  <h1>{usedData ? `${usedData}` : ''}</h1>
                </DataCardTop>
                <DataCardBottom>Used Data</DataCardBottom>
              </DataCard>
            </DataTop>

            <DataChart>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="500"
              />
            </DataChart>
          </DashBoardContentLayout>
        </DashBoardContent>
      </>
    );
  }
}
