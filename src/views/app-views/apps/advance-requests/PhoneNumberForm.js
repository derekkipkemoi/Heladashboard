import React, { Component } from "react";
import { Col, Row, Card, Form, Input, Button } from "antd";

class PhoneNumberForm extends Component {
  state = {};
  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    return (
      <Form
        name="basic"
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          label="Enter Phone Number"
          name="phone_no"
          rules={[{ required: true, message: "Please Input Phone Number!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit">
            Search Loan Request
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default PhoneNumberForm;
