import { Button, Card, Col, Row, Tooltip } from "antd";
import React, { Component } from "react";

import {
  DislikeOutlined,
  VerticalAlignTopOutlined,
  FileOutlined,
  ClockCircleOutlined,
  CommentOutlined,
  StopOutlined,
  BookOutlined,
} from "@ant-design/icons";

class ActionButton extends Component {
  state = {};
  render() {
    return (
      <Card type="inner" title="Action Buttons">
        <Row>
        <Col xs={4} sm={4} md={2} xl={2} xxl={2} style={{padding:"2px"}}>
            <Tooltip title="Decline Request">
              <Button type="danger" shape="circle" icon={<DislikeOutlined />} />
            </Tooltip>
          </Col>
          <Col xs={4} sm={4} md={2} xl={2} xxl={2} style={{padding:"2px"}}>
            <Tooltip title="Update Status to Pending @Payroll">
              <Button
                type="primary"
                style={{ backgroundColor: "gold", borderColor: "gold" }}
                shape="circle"
                icon={<ClockCircleOutlined />}
              />
            </Tooltip>
          </Col>
          <Col xs={4} sm={4} md={2} xl={2} xxl={2} style={{padding:"2px"}}>
            <Tooltip title="Comment">
              <Button
                type="primary"
                shape="circle"
                icon={<CommentOutlined />}
              />
            </Tooltip>
          </Col>
          <Col xs={4} sm={4} md={2} xl={2} xxl={2} style={{padding:"2px"}}>
            <Tooltip title="Request has file">
              <Button type="primary" shape="circle" icon={<FileOutlined />} />
            </Tooltip>
          </Col>
          <Col xs={4} sm={4} md={2} xl={2} xxl={2} style={{padding:"2px"}}>
            <Tooltip title="Update Status to @Payroll - DD Pending">
              <Button
                type="primary"
                style={{ backgroundColor: "gold", borderColor: "gold" }}
                shape="circle"
                icon={<ClockCircleOutlined />}
              />
            </Tooltip>
          </Col>
          <Col xs={4} sm={4} md={2} xl={2} xxl={2} style={{padding:"2px"}}>
            <Tooltip title="Update Status to - DD Pending">
              <Button
                type="primary"
                style={{ backgroundColor: "gold", borderColor: "gold" }}
                shape="circle"
                icon={<ClockCircleOutlined />}
              />
            </Tooltip>
          </Col>
          <Col xs={4} sm={4} md={2} xl={2} xxl={2} style={{padding:"2px"}}>
            <Tooltip title="Update Status to Pending Payslip Share">
              <Button
                type="primary"
                style={{ backgroundColor: "gold", borderColor: "gold" }}
                shape="circle"
                icon={<BookOutlined />}
              />
            </Tooltip>
          </Col>
          <Col xs={4} sm={4} md={2} xl={2} xxl={2} style={{padding:"2px"}}>
            <Tooltip title="Confirm Decline">
              <Button type="danger" shape="circle" icon={<StopOutlined />} />
            </Tooltip>
          </Col>
          <Col xs={4} sm={4} md={2} xl={2} xxl={2} style={{padding:"2px"}}>
            <Tooltip title="Update Status to Top Ups">
              <Button
                type="primary"
                shape="circle"
                icon={<VerticalAlignTopOutlined />}
              />
            </Tooltip>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default ActionButton;
