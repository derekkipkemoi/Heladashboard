import React, { Component } from "react";
import { Col, Row, Card, Form, Input, Button } from "antd";
import ReferenceNumberForm from "./ReferenceNumberForm";
import PhoneNumberForm from "./PhoneNumberForm";
import LoanSearchByReFNoResponse from "./LoanSearchByReFNoResponse";
import GenerateStopOrderTransactionForLaon from "./GenerateStopOrderTransactionForLoan";

class GenerateStopOrder extends Component {
  state = {};
  render() {
    return (
      <div>
        <Card style={{ width: "100%" }} title="Generate Stop Order">
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
              <Card
                style={{ marginTop: 0 }}
                type="inner"
                title="By Reference Number"
              >
                <ReferenceNumberForm />
              </Card>
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
              <Card
                style={{ marginTop: 0 }}
                type="inner"
                title="By Phone Number"
              >
                <PhoneNumberForm />
              </Card>
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
              <LoanSearchByReFNoResponse />
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
              <Card
                style={{ marginTop: 0 }}
                type="inner"
                title="Generate Stop Order Transaction For loan"
              >
                <GenerateStopOrderTransactionForLaon />
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default GenerateStopOrder;
