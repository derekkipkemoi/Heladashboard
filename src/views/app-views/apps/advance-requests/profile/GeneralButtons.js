import { Card, Col, Row } from "antd";
import React, { Component } from "react";
import ChangeUserRole from "./ChangeUserRole";
import ChangeUserType from "./ChangeUserType";
import DeactivateUser from "./DeactivateUser";

class GeneralButtons extends Component {
  state = {};
  render() {
    return (
      <Card type="inner" title="General Buttons">
        <Row>
          <Col xs={24} sm={12} md={8} xl={12} xxl={8} style={{padding:"4px"}}>
            <ChangeUserType />
          </Col>
          <Col xs={24} sm={12} md={8} xl={8} xxl={8} style={{padding:"4px"}}>
            <ChangeUserRole />
          </Col>
          <Col xs={24} sm={12} md={8} xl={8} xxl={8} style={{padding:"4px"}}>
            <DeactivateUser />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default GeneralButtons;
