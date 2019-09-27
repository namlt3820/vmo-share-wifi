import React, { Component } from 'react';
import { Breadcrumb, Icon, DatePicker } from 'antd';
import moment from 'moment';
import {
  DashBoardTittle,
  DashBoardContent,
  DashBoardContentLayout,
  DataTop,
  DataCard,
  DataCardTop,
  DataCardBottom,
  DateRangePicker,
  DataChart,
  ChartStyle
} from '../../../components/DashboardStyle';
import WifiData from '../../../services/wifidata.service';
import httpStatus from '../../../config/httpStatus';

const wifiDataManager = new WifiData();
const dateFormat = 'YYYY-MM-DD';

export default class AddDevice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateFrom: '',
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
    const startDate = dateString;
    const dateFrom = moment(dateString, dateFormat).add(7, 'd');
    this.setState({
      dateFrom
    });
    const endDate = dateFrom.format(dateFormat);
    const params = {
      startDate,
      endDate
    };
    wifiDataManager.getDataWifiByDate(params).then(res => {
      if (res.status === httpStatus.StatusOK) {
        const {
          totalDataToday,
          totalDataThisWeek,
          totalDataThisMonth,
          dataPerDay
        } = res.data.data;
        this.setState(
          {
            dataPerDay,
            totalDataToday,
            totalDataThisWeek,
            totalDataThisMonth
          },
          () => {
            this.dataChart();
          }
        );
      }
    });
  };

  tranferDate = date => {
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
    const params = [year, month, day];
    return params.join('-');
  };

  dataChart = () => {
    const { dataPerDay } = this.state;
    const dataUsed = dataPerDay.map(dt => {
      return dt.dataUsed;
    });
    const date = dataPerDay.map(dt => {
      return this.tranferDate(dt.createdAt);
    });
    this.setState(prevState => ({
      options: {
        ...prevState.options,
        xaxis: {
          ...prevState.options.xaxis,
          categories: date
        }
      },
      series: [
        {
          ...prevState.series,
          data: dataUsed
        }
      ]
    }));
  };

  render() {
    const {
      totalDataToday,
      totalDataThisWeek,
      totalDataThisMonth,
      dateFrom
    } = this.state;
    return (
      <>
        <DashBoardTittle>
          <h3>WIFI DATA</h3>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="">Data</Breadcrumb.Item>
            <Breadcrumb.Item href="">Wifi Data</Breadcrumb.Item>
          </Breadcrumb>
        </DashBoardTittle>
        <DashBoardContent>
          <DashBoardContentLayout>
            <DataTop>
              <DataCard type="data">
                <DataCardTop>
                  <Icon type="database" />
                  <h1>{totalDataToday} MB</h1>
                </DataCardTop>
                <DataCardBottom>Today</DataCardBottom>
              </DataCard>
              <DataCard type="data">
                <DataCardTop>
                  <Icon type="database" />
                  <h1>{totalDataThisWeek} GB</h1>
                </DataCardTop>
                <DataCardBottom>This week</DataCardBottom>
              </DataCard>
              <DataCard type="data">
                <DataCardTop>
                  <Icon type="database" />
                  <h1>{totalDataThisMonth} GB</h1>
                </DataCardTop>
                <DataCardBottom>This month</DataCardBottom>
              </DataCard>
            </DataTop>
            <DateRangePicker>
              <p>Date</p>
              <DatePicker onChange={this.onChange} />
              <p>-</p>
              <DatePicker
                onChange={this.onChange}
                value={
                  dateFrom ? moment(dateFrom, dateFormat) : moment(new Date())
                }
                format={dateFormat}
              />
            </DateRangePicker>
            <DataChart>
              <h4>Used Data Per Day</h4>
              <ChartStyle
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
