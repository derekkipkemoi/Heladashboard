import { Card, Col, Row } from "antd";
import React, { Component } from "react";
import ChangeUserRole from "./ChangeUserRole";
import ChangeUserType from "./ChangeUserType";
import DeactivateUser from "./DeactivateUser";

class GeneralButtons extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col xs={24} sm={12} md={8} xl={8} xxl={8} style={{ paddingRight: "25px" }}>
          <ChangeUserType />
        </Col>
        <Col xs={24} sm={12} md={8} xl={8} xxl={8} style={{ paddingRight: "25px" }}>
          <ChangeUserRole />
        </Col>
        <Col xs={24} sm={12} md={8} xl={8} xxl={8} style={{ paddingRight: "25px" }}>
          <DeactivateUser />
        </Col>
      </Row>
    );
  }
}

export default GeneralButtons;
