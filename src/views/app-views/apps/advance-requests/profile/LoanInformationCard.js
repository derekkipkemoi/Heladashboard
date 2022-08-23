import React from "react";
import { Col, Row, Card } from "antd";
import { Icon } from "components/util-components/Icon";
import {
  AuditOutlined,
  PhoneOutlined,
  IdcardOutlined,
  BankOutlined,
  EnvironmentOutlined,
  FieldNumberOutlined,
  DollarOutlined,
  PercentageOutlined,
  CalendarOutlined,
  UserOutlined,
  ClockCircleOutlined,
  BookOutlined,
} from "@ant-design/icons";

export default function LoanInformationCard() {
  return (
    <div>
      <Card type="inner" title="Loan Details">
        <Row>
          <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
            <Row type="flex" align="middle">
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={DollarOutlined} className="text-primary" />
                <span className="text-muted ml-2">Loan Amount: </span>
                <span style={{ marginLeft: "10px" }}>123,888</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={DollarOutlined} className="text-primary" />
                <span className="text-muted ml-2">Principal: </span>
                <span style={{ marginLeft: "10px" }}>10,000</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={DollarOutlined} className="text-primary" />
                <span className="text-muted ml-2">Installments:: </span>
                <span style={{ marginLeft: "10px" }}>12000</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={DollarOutlined} className="text-primary" />
                <span className="text-muted ml-2">Period: </span>
                <span style={{ marginLeft: "10px" }}>12 months</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={PercentageOutlined} className="text-primary" />
                <span className="text-muted ml-2">Interest: </span>
                <span style={{ marginLeft: "10px" }}>12 %</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={UserOutlined} className="text-primary" />
                <span className="text-muted ml-2">Type: </span>
                <span style={{ marginLeft: "10px" }}>Lorem</span>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
            <Row type="flex" align="middle">
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={DollarOutlined} className="text-primary" />
                <span className="text-muted ml-2">Fee: </span>
                <span style={{ marginLeft: "10px" }}>500</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={ClockCircleOutlined} className="text-primary" />
                <span className="text-muted ml-2">Status: </span>
                <span style={{ marginLeft: "10px" }}>Pending</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={BookOutlined} className="text-primary" />
                <span className="text-muted ml-2">Booked By: </span>
                <span style={{ marginLeft: "10px" }}>John Doe</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={CalendarOutlined} className="text-primary" />
                <span className="text-muted ml-2">Booking Date:: </span>
                <span style={{ marginLeft: "10px" }}>12/12/2022</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
