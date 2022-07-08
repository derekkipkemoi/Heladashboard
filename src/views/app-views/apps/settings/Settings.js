import React, { Component } from "react";
import { Row, Col, Card, Button, Space, Tag, Table, Divider } from "antd";
import {
  WhatsAppOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import { getSettings } from "redux/actions/Settings";

import Flex from "components/shared-components/Flex";
import { Link } from "react-router-dom";

const ProfileInfo = (props) => (
  <div>
    <div className="ml-md-3 mt-3 mt-md-0"></div>

    <Row>
      <Col flex="1 1 200px">
        <h2 className="mb-0 mt-md-0 mt-2">Settings</h2>
      </Col>
      <Col flex="0 1 300px">
        <Link
          to={{
            pathname: `updatesettings`,
          }}
        >
          <Button size="small" type="primary">
            Update Settings
          </Button>
        </Link>
      </Col>
    </Row>
    <Divider orientation="left">About</Divider>
    <Row gutter="16">
      <Col sm={24} md={24} xl={24} xxl={24}>
        <p className="mt-0 mr-3 text-muted text-md-left text-center">
          {props.profileSettings.about_us}
        </p>
      </Col>
    </Row>
  </div>
);

const Experiences = (props) => (
  <div className="mb-3">
    <Row>
      <Space>
        <div>
          <WhatsAppOutlined style={{ fontSize: "150%", color: "#25D366" }} />{" "}
          {props.profileSettings.whatsapp === null ? (
            <Tag className="text-capitalize" color="yellow">
              Not Set
            </Tag>
          ) : (
            props.profileSettings.whatsapp
          )}
        </div>
        <div>
          <MailOutlined style={{ fontSize: "150%", color: "#EA4335" }} />{" "}
          {props.profileSettings.email === null ? (
            <Tag className="text-capitalize" color="yellow">
              Not Set
            </Tag>
          ) : (
            props.profileSettings.email
          )}
        </div>
        <div>
          <PhoneOutlined style={{ fontSize: "150%", color: "#FBBC05" }} />{" "}
          {props.profileSettings.call_phone === null ? (
            <Tag className="text-capitalize" color="yellow">
              Not Set
            </Tag>
          ) : (
            props.profileSettings.call_phone
          )}
        </div>
      </Space>
    </Row>
  </div>
);

const columns = [
  {
    title: "interest Rate",
    dataIndex: "interest_rate",
    key: "interest_rate",
  },
  {
    title: "Rollover Rate",
    dataIndex: "rollover_rate",
    key: "rollover_rate",
  },
  {
    title: "Disbursements Orientation",
    dataIndex: "automatic",
    key: "automatic",
  },
  {
    title: "Minimum Amount",
    dataIndex: "min_amount",
    key: "min_amount",
  },
  {
    title: "Commission Rate",
    dataIndex: "commission_rate",
    key: "commission_rate",
  },
  {
    title: "Available Funds",
    dataIndex: "available_funds",
    key: "available_funds",
  },

  {
    title: "Minimum Commission Amount",
    dataIndex: "min_commission_amount",
    key: "min_commission_amount",
  },
  {
    title: "Minimum Redeem Points",
    dataIndex: "min_redeem_points",
    key: "min_redeem_points",
  },
  {
    title: "Points Rate",
    dataIndex: "points_rate",
    key: "points_rate",
  },
  {
    title: "Amount Per Point",
    dataIndex: "amount_per_point",
    key: "amount_per_point",
  },
  {
    title: "Limit Amount",
    dataIndex: "limit_amount",
    key: "limit_amount",
  },
  {
    title: "Flag",
    dataIndex: "flag",
    key: "flag",
  },
];

export class settings extends Component {
  state = {
    setting: {},
  };
  componentDidMount = () => {
    let setting = {};
    this.props.getSettings();
    setting = this.props.setting;
    this.setState({
      setting: setting,
    });
  };

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      let setting = {};
      setting = this.props.setting;
      this.setState({
        setting: setting,
      });
    }
  };
  render() {
    let { setting } = this.state;
    let companyFinance = [];
    companyFinance[0] = setting;
    return (
      <Card>
        <ProfileInfo profileSettings={setting} />

        <Divider orientation="left">Finance Info</Divider>
        <Table columns={columns} dataSource={companyFinance} />

        <Divider orientation="left">Contact Info</Divider>
        <Row gutter="24">
          <Col xs={24} sm={24} md={24} xl={24} xxl={24}>
            <Experiences profileSettings={setting} />
          </Col>
        </Row>
      </Card>
    );
  }
}

const mapStateToProps = ({ systemSettings }) => {
  const { setting } = systemSettings;
  console.log("Settings in component", setting);
  return {
    setting: setting,
  };
};

const mapDispatchToProps = {
  getSettings,
};

export default connect(mapStateToProps, mapDispatchToProps)(settings);
