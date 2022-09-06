import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Card, InputNumber, Space } from "antd";

class UpdateRequestCard extends Component {
  state = {};
  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    const groupDisplay = {
      display: "flex",
      flexDirection: "row",
      display: " inline-grid",
      display: "grid",
      margin: "15px 0",
    };
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    return (
      <Card type="inner" title="Changes">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <div style={groupDisplay}>
            <Space>
              <Form.Item label="Period" name="period">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item label="Advance Amount" name="advanceAmount">
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </Space>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit Changes
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default UpdateRequestCard;
