import React, { Component } from "react";
import { Row, Col, Card, Button, Space, Tag } from "antd";
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
  <Card>
    <Row>
      <Col sm={24} md={23}>
        <div className="d-md-flex">
          <div className="w-100">
            <Flex
              alignItems="center"
              mobileFlex={false}
              className="mb-3 text-md-left text-center"
            >
              <h2 className="mb-0 mt-md-0 mt-2">Settings</h2>
              <div className="ml-md-3 mt-3 mt-md-0">
                <Link
                  to={{
                    pathname: `updatesettings`,
                  }}
                >
                  <Button size="small" type="primary">
                    Update Settings
                  </Button>
                </Link>
              </div>
            </Flex>
            <Row gutter="16">
              <Col sm={24} md={24} xl={24} xxl={24}>
                <h4 className="mb-0 mt-md-0 mt-2">About</h4>
                <p className="mt-0 mr-3 text-muted text-md-left text-center">
                  {props.profileSettings.about_us}
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Col>
    </Row>
  </Card>
);

const Experiences = (props) => (
  <Card title="Conatct Info">
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
  </Card>
);

const Interested = (props) => (
  <Card>
    <Row gutter={30}>
      <Col sm={24} md={8}>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Interest Rate</h4>
          <p>{props.profileSettings.interest_rate}</p>
        </div>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Rollover Rate</h4>
          <p>{props.profileSettings.rollover_rate}</p>
        </div>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Disbursements Orientation</h4>
          <p>{props.profileSettings.automatic}</p>
        </div>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Minimum Amount</h4>
          <p>{props.profileSettings.min_amount}</p>
        </div>
      </Col>
      <Col sm={24} md={8}>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Commission Rate</h4>
          <p>{props.profileSettings.commission_rate}</p>
        </div>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Available Funds</h4>
          <p>KES {props.profileSettings.available_funds}</p>
        </div>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Minimum Commission Amount</h4>
          <p>KES {props.profileSettings.min_commission_amount}</p>
        </div>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Minimum Redeem Points</h4>
          <p>{props.profileSettings.min_redeem_points}</p>
        </div>
      </Col>
      <Col sm={24} md={8}>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Points Rate</h4>
          <p>{props.profileSettings.points_rate}</p>
        </div>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Amount Per Point</h4>
          <p>{props.profileSettings.amount_per_point}</p>
        </div>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Limit Amount</h4>
          <p>KES {props.profileSettings.limit_amount}</p>
        </div>
        <div className="mb-3">
          <h4 className="font-weight-semibold">Flag</h4>
          <p>{props.profileSettings.flag}</p>
        </div>
      </Col>
    </Row>
  </Card>
);

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
  render() {
    let { setting } = this.state;
    return (
      <div className="container my-4">
        <ProfileInfo profileSettings={setting} />
        <Row gutter="24">
          <Col xs={24} sm={24} md={24} xl={24} xxl={24}>
            <Interested profileSettings={setting} />
            <Experiences profileSettings={setting} />
          </Col>
        </Row>
      </div>
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
