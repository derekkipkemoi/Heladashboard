import { Col, Row } from "antd";
import React, { Component } from "react";
import UpdateAdvanceRequest from "./UpdateAdvanceRequest";
import AddDatasheetNumber from "./AddDatasheetNumber";
import DownloadApplication from "./DownloadApplication";

class GeneralButtons extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col xs={24} sm={12} md={8} xl={8} xxl={8} style={{ paddingRight: "25px" }}>
          <UpdateAdvanceRequest {...this.props} />
        </Col>
        <Col xs={24} sm={12} md={8} xl={8} xxl={8} style={{ paddingRight: "25px" }}>
          <AddDatasheetNumber {...this.props}/>
        </Col>
        <Col xs={24} sm={12} md={8} xl={8} xxl={8} style={{ paddingRight: "25px" }}>
          <DownloadApplication {...this.props}/>
        </Col>
      </Row>
    );
  }
}

export default GeneralButtons;
