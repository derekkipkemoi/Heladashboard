import React, { Component } from "react";
import { Col, Row, Card, Form, Input, Button, Typography } from "antd";

import { connect } from "react-redux";
const { Text } = Typography;

class GenerateStopOrderTransactionForLaon extends Component {
  state = {};
  onFinish = (values) => {
    console.log("Success:", values);
    this.props.searchLoanByRefNo(values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    const textStyle = {
      //   border: "1px solid #D3D3D3",
      padding: "10px",
      borderRadius: "10px",
      width: "100px",
    };
    return (
      <div>
        {Object.keys(this.props.loanSearchData).length > 0 ? (
          <Card
            style={{ marginTop: 0 }}
            type="inner"
            title="Generate Stop Order Transaction For loan"
          >
            <Form
              name="basic"
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            >
              <Form.Item label="Account">
                <Text style={textStyle}>
                  {this.props.loanSearchData.loan_no}
                </Text>
              </Form.Item>
              <Form.Item
                label="Amount Off"
                name="amount_off"
                rules={[
                  { required: true, message: "Please Input Amount Off!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Amount On"
                name="amount_on"
                rules={[{ required: true, message: "Please Input Amount On!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Balance"
                name="balance"
                rules={[{ required: true, message: "Please Input Balance!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Generate
                </Button>
              </Form.Item>
            </Form>
          </Card>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ advanceRequest }) => {
  const { loanSearchData } = advanceRequest;
  console.log("Response", loanSearchData);
  return {
    loanSearchData,
  };
};

export default connect(mapStateToProps)(GenerateStopOrderTransactionForLaon);
