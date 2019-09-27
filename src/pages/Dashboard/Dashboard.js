import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';
import {
  DashBoardTittle,
  DashBoardContent,
  DashBoardContentLayout,
  DataTop,
  DataCard,
  DataCardTop,
  DataCardBottom,
  DataChart,
  ChartStyle
} from '../../components/DashboardStyle';
import DashboardManagerment from '../../services/dashboard.service';

const dashboardManagerment = new DashboardManagerment();

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routers: '',
      devices: '',
      users: '',
      usedData: '',
      dataDevices: [],
      dataRouters: [],
      dataTraffics: [],
      dataUsers: [],
      optionsDevices: {
        chart: {
          id: 'basic-bar-1'
        },
        xaxis: {
          categories: []
        }
      },
      seriesDevices: [
        {
          name: 'device',
          data: []
        }
      ],
      optionsUsers: {
        chart: {
          id: 'basic-bar-2'
        },
        xaxis: {
          categories: []
        }
      },
      seriesUsers: [
        {
          name: 'user',
          data: []
        }
      ],
      optionsRouters: {
        chart: {
          id: 'basic-bar-3'
        },
        xaxis: {
          categories: []
        }
      },
      seriesRouters: [
        {
          name: 'router',
          data: []
        }
      ],
      optionsTraffics: {
        chart: {
          id: 'basic-bar-3'
        },
        xaxis: {
          categories: []
        }
      },
      seriesTraffics: [
        {
          name: 'router',
          data: []
        }
      ]
    };
  }

  componentDidMount() {
    dashboardManagerment.getAllData().then(res => {
      const {
        users,
        routers,
        devices,
        dataUsed,
        dataDevices,
        dataRouters,
        dataUsers
      } = res.data.data;
      this.setState(
        {
          users,
          routers,
          devices,
          usedData: dataUsed,
          dataDevices,
          dataRouters,
          dataUsers
        },
        () => {
          this.getDataCharts();
        }
      );
    });
  }

  getDataCharts = async () => {
    const { dataDevices, dataRouters, dataUsers, dataTraffics } = this.state;
    await this.getDataChartDevice(dataDevices);
    await this.getDataChartUser(dataUsers);
    await this.getDataChartRouter(dataRouters);
    await this.getDataChartTraffics(dataTraffics);
  };

  getDataChartDevice = async data => {
    const cate = [];
    const dataChart = [];
    data.forEach(device => {
      dataChart.push(device.count);
      cate.push(device.createdAt);
    });
    const time = cate.map(t => {
      return this.convertTime(t);
    });
    await this.setState(prevState => ({
      optionsDevices: {
        ...prevState.optionsDevices,
        xaxis: {
          ...prevState.optionsDevices.xaxis,
          categories: time
        }
      },
      seriesDevices: [
        {
          ...prevState.seriesDevices,
          data: dataChart
        }
      ]
    }));
  };

  getDataChartUser = async data => {
    const cate = [];
    const dataChart = [];
    data.forEach(device => {
      dataChart.push(device.count);
      cate.push(device.createdAt);
    });
    const time = cate.map(t => {
      return this.convertTime(t);
    });
    await this.setState(prevState => ({
      optionsUsers: {
        ...prevState.optionsUsers,
        xaxis: {
          ...prevState.optionsUsers.xaxis,
          categories: time
        }
      },
      seriesUsers: [
        {
          ...prevState.seriesUsers,
          data: dataChart
        }
      ]
    }));
  };

  getDataChartRouter = async data => {
    const cate = [];
    const dataChart = [];
    data.forEach(device => {
      dataChart.push(device.count);
      cate.push(device.createdAt);
    });
    const time = cate.map(t => {
      return this.convertTime(t);
    });
    await this.setState(prevState => ({
      optionsRouters: {
        ...prevState.optionsRouters,
        xaxis: {
          ...prevState.optionsRouters.xaxis,
          categories: time
        }
      },
      seriesRouters: [
        {
          ...prevState.seriesRouters,
          data: dataChart
        }
      ]
    }));
  };

  getDataChartTraffics = async data => {
    const cate = [];
    const dataChart = [];
    data.forEach(device => {
      dataChart.push(device.count);
      cate.push(device.createdAt);
    });
    const time = cate.map(t => {
      return this.convertTime(t);
    });
    await this.setState(prevState => ({
      optionsTraffics: {
        ...prevState.optionsTraffics,
        xaxis: {
          ...prevState.optionsTraffics.xaxis,
          categories: time
        }
      },
      seriesTraffics: [
        {
          ...prevState.seriesTraffics,
          data: dataChart
        }
      ]
    }));
  };

  convertTime = date => {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth();
    const params = [month, day];
    return params.join('-');
  };

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
              <ChartStyle
                options={this.state.optionsDevices}
                series={this.state.seriesDevices}
                type="bar"
                width="500"
              />
            </DataChart>
            <DataChart>
              <ChartStyle
                options={this.state.optionsUsers}
                series={this.state.seriesUsers}
                type="bar"
                width="500"
              />
            </DataChart>
            <DataChart>
              <ChartStyle
                options={this.state.optionsRouters}
                series={this.state.seriesRouters}
                type="bar"
                width="500"
              />
            </DataChart>
            <ChartStyle
              options={this.state.optionsTraffics}
              series={this.state.seriesTraffics}
              type="bar"
              width="500"
            />
          </DashBoardContentLayout>
        </DashBoardContent>
      </>
    );
  }
}
