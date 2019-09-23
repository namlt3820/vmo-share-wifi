import React, { Component } from 'react';
import { Breadcrumb, Icon, DatePicker } from 'antd';
import Chart from 'react-apexcharts';
import {
  DashBoardTittle,
  DashBoardContent,
  DashBoardContentLayout,
  DataTop,
  DataCard,
  DataCardTop,
  DataCardBottom,
  DateRangePicker,
  DataChart
} from '../../../components/DashboardStyle';
import UserData from '../../../services/userdata.service';

const dataManagerment = new UserData();

const { RangePicker } = DatePicker;

export default class UserDataDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalDataToday: '',
      totalDataThisWeek: '',
      totalDataThisMonth: '',
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

  onChange = (date, dateString) => {
    const startDate = dateString[0];
    const endDate = dateString[1];
    const params = {
      startDate,
      endDate
    };
    dataManagerment.getDataByDate(params).then(res => {
      const {
        totalDataToday,
        totalDataThisWeek,
        totalDataThisMonth
      } = res.data.data;
      this.setState({
        totalDataToday,
        totalDataThisWeek,
        totalDataThisMonth
      });
    });
  };

  render() {
    const {
      totalDataToday,
      totalDataThisWeek,
      totalDataThisMonth
    } = this.state;
    return (
      <>
        <DashBoardTittle>
          <h3>USER DATA</h3>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Data</Breadcrumb.Item>
            <Breadcrumb.Item href="">User Data</Breadcrumb.Item>
          </Breadcrumb>
        </DashBoardTittle>
        <DashBoardContent>
          <DashBoardContentLayout>
            <DataTop>
              <DataCard>
                <DataCardTop>
                  <Icon type="database" />
                  <h1>{totalDataToday} MB</h1>
                </DataCardTop>
                <DataCardBottom>Today</DataCardBottom>
              </DataCard>
              <DataCard>
                <DataCardTop>
                  <Icon type="database" />
                  <h1>{totalDataThisWeek} GB</h1>
                </DataCardTop>
                <DataCardBottom>This week</DataCardBottom>
              </DataCard>
              <DataCard>
                <DataCardTop>
                  <Icon type="database" />
                  <h1>{totalDataThisMonth} GB</h1>
                </DataCardTop>
                <DataCardBottom>This month</DataCardBottom>
              </DataCard>
            </DataTop>
            <DateRangePicker>
              <p>Date</p>
              <RangePicker onChange={this.onChange} />
            </DateRangePicker>
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
