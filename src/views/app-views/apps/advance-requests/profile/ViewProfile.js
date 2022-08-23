import React, { Component } from "react";

import { Col, Row, Card } from "antd";
import PersonalInformationCard from "./PersonalInformationCard";
import LoanInformationCard from "./LoanInformationCard";
import ActionButtons from "./ActionButtons";
import GeneralButtons from "./GeneralButtons";
import ProfileMenu from "./ProfileMenu";

class ViewProfile extends Component {
  state = {};
  render() {
    return (
      <Card>
        <Card>
          <Row gutter={16} style={{ marginTop: "10px" }}>
            <Col
              className="gutter-row"
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
            >
              <PersonalInformationCard />
            </Col>
            <Col
              className="gutter-row"
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
            >
              <LoanInformationCard />
            </Col>
          </Row>
        </Card>
        <Card>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} xl={12} xxl={12}>
              <GeneralButtons />
            </Col>
            <Col xs={24} sm={24} md={24} xl={12} xxl={12}>
              <ActionButtons />
            </Col>
          </Row>
        </Card>

        <Card>
          <ProfileMenu {...this.props} />
        </Card>
      </Card>
    );
  }
}

export default ViewProfile;
