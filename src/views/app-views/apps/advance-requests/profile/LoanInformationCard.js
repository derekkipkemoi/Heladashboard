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
  DollarOutlined
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
                <span style={{ marginLeft: "10px" }}>userObject.phone</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={BankOutlined} className="text-primary" />
                <span className="text-muted ml-2">Company: </span>
                <span style={{ marginLeft: "10px" }}>Company</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={AuditOutlined} className="text-primary" />
                <span className="text-muted ml-2">Age: </span>
                <span style={{ marginLeft: "10px" }}>Age</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={IdcardOutlined} className="text-primary" />
                <span className="text-muted ml-2">ID Number: </span>
                <span style={{ marginLeft: "10px" }}>ID Number</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={EnvironmentOutlined} className="text-primary" />
                <span className="text-muted ml-2">Location: </span>
                <span style={{ marginLeft: "10px" }}>Location</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={FieldNumberOutlined} className="text-primary" />
                <span className="text-muted ml-2">Payroll Number: </span>
                <span style={{ marginLeft: "10px" }}>Number</span>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={12} xl={12} xxl={12}>
            <Row type="flex" align="middle">
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={PhoneOutlined} className="text-primary" />
                <span className="text-muted ml-2">Phone: </span>
                <span style={{ marginLeft: "10px" }}>userObject.phone</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={BankOutlined} className="text-primary" />
                <span className="text-muted ml-2">Company: </span>
                <span style={{ marginLeft: "10px" }}>Company</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={AuditOutlined} className="text-primary" />
                <span className="text-muted ml-2">Age: </span>
                <span style={{ marginLeft: "10px" }}>Age</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={IdcardOutlined} className="text-primary" />
                <span className="text-muted ml-2">ID Number: </span>
                <span style={{ marginLeft: "10px" }}>ID Number</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={EnvironmentOutlined} className="text-primary" />
                <span className="text-muted ml-2">Location: </span>
                <span style={{ marginLeft: "10px" }}>Location</span>
              </Col>
              <Col span={24} style={{ padding: "5px" }}>
                <Icon type={FieldNumberOutlined} className="text-primary" />
                <span className="text-muted ml-2">Payroll Number: </span>
                <span style={{ marginLeft: "10px" }}>Number</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
