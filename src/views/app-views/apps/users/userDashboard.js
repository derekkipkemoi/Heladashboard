import React, { Component } from "react";
import DataDisplayWidget from "components/shared-components/DataDisplayWidget";
import { useSelector } from "react-redux";
import { Row, Col, Button, Card, message } from "antd";
import { CloudDownloadOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import Flex from "components/shared-components/Flex";
import ChartWidget from "components/shared-components/ChartWidget";
import { COLORS } from "constants/ChartConstant";
import { connect } from "react-redux";
import { getWeeklyData } from "redux/actions/Users";
import moment from "moment";
import { CSVLink } from "react-csv";

function createDate(name, data) {
  return { name, data };
}

class UserDashboard extends Component {
  state = {
    data: {},
  };
  componentDidMount() {
    this.props.getWeeklyData();
    let data = this.props.weekLyData;
    this.setState({
      data: data,
    });
  }
  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      let data = this.props.weekLyData;
      this.setState({
        data: data,
      });
    }
  };
  render() {
    let { data } = this.state;
    let dates = [];
    let weeklYRegistration = [];
    let weekly = [];
    let latestRegistrations = [];
    let lastDateIndex = "";

    if (data.weeks_dates) {
      for (let x = 0; x < data.weeks_dates.length; x++) {
        var check = moment(data.weeks_dates[x], "YYYY/MM/DD");
        var month = check.format("MMM");
        var day = check.format("D");
        dates[x] = day + " " + month;
      }
    }

    lastDateIndex = dates.length - 1;

    if (data.latest_registrations) {
      latestRegistrations = data.latest_registrations;
    }

    if (data.total_daily_registrations) {
      for (let x = 0; x < data.total_daily_registrations.length; x++) {
        weeklYRegistration[x] = data.total_daily_registrations[x];
      }
      weekly[0] = createDate("Registration", weeklYRegistration);
    }
    const WeeklyRevenue = () => {
      const { direction } = useSelector((state) => state.theme);
      return (
        <Card>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={8}>
              <Flex
                className="h-100"
                flexDirection="column"
                justifyContent="between"
              >
                <div>
                  <h4 className="mb-0">Weekly Registration</h4>
                  <span className="text-muted">
                    {dates[0]} - {dates[lastDateIndex]}
                  </span>
                </div>
                <div className="mb-4">
                  <h1 className="font-weight-bold">
                    {data.total_week_registration}
                  </h1>
                  {/* <p className="text-success">
                    <span>
                      <ArrowUpOutlined />
                      <span> 17% </span>
                    </span>
                    <span>growth from last week</span>
                  </p> */}
                  <p>
                    Total registered users based from the date range given
                    above.
                  </p>
                </div>
              </Flex>
            </Col>
            <Col xs={24} sm={24} md={24} lg={16}>
              <div className="mb-3 text-right">
                <CSVLink
                  filename={"Weeklyreport.csv"}
                  data={latestRegistrations}
                  onClick={() => {
                    message.success("Excel file generated successfuly");
                  }}
                >
                  <Button icon={<CloudDownloadOutlined />}>
                    Download Report
                  </Button>
                </CSVLink>
              </div>
              <ChartWidget
                card={false}
                series={weekly}
                xAxis={dates}
                title="Weekly Registration"
                height={250}
                type="bar"
                customOptions={{ colors: COLORS }}
                direction={direction}
              />
            </Col>
          </Row>
        </Card>
      );
    };

    const DisplayDataSet = () => (
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <DataDisplayWidget
            icon={<UsergroupAddOutlined />}
            value={data.total_approved}
            title="Total Approved"
            color="blue"
            vertical={true}
            avatarSize={55}
          />
          <DataDisplayWidget
            icon={<UsergroupAddOutlined />}
            value={data.total_pending}
            title="Total Pending"
            color="gold"
            vertical={true}
            avatarSize={55}
          />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <DataDisplayWidget
            icon={<UsergroupAddOutlined />}
            value={data.total_verified}
            title="Total Verified"
            color="cyan"
            vertical={true}
            avatarSize={55}
          />

          <DataDisplayWidget
            icon={<UsergroupAddOutlined />}
            value={data.total_declined}
            title="Total Declined"
            color="volcano"
            vertical={true}
            avatarSize={55}
          />
        </Col>
      </Row>
    );
    return (
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={16} xl={15} xxl={14}>
          <WeeklyRevenue />
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={9} xxl={10}>
          <DisplayDataSet />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ usersList }) => {
  const { weekLyData } = usersList;

  return {
    weekLyData: weekLyData,
  };
};

const mapDispatchToProps = {
  getWeeklyData,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
