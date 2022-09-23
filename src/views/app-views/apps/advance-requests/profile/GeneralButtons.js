import { Col, Row } from "antd";
import React, { Component } from "react";
import UpdateAdvanceRequest from "./UpdateAdvanceRequest";
import AddDatasheetNumber from "./AddDatasheetNumber";
import DownloadApplication from "./DownloadApplication";
import NewMessageModal from "../../message/NewMessageModal";

class GeneralButtons extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col
          xs={24}
          sm={12}
          md={8}
          xl={6}
          xxl={6}
          style={{ paddingRight: "25px", paddingTop: "10px" }}
        >
          <UpdateAdvanceRequest {...this.props} />
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          xl={6}
          xxl={6}
          style={{ paddingRight: "25px", paddingTop: "10px" }}
        >
          <AddDatasheetNumber {...this.props} />
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          xl={6}
          xxl={6}
          style={{ paddingRight: "25px", paddingTop: "10px" }}
        >
          <DownloadApplication {...this.props} />
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          xl={6}
          xxl={6}
          style={{ paddingRight: "25px", paddingTop: "10px" }}
        >
          <NewMessageModal details={this.props.personalDetails} />
        </Col>
      </Row>
    );
  }
}

export default GeneralButtons;
