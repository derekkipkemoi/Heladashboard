import React, { Component } from "react";
import { Form, Input, Button, Select, Radio, notification } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import CompaniesData from "assets/data/companies.json";
import { sendMessage } from "redux/actions/Messaging";
import { connect } from "react-redux";
const { Option } = Select;
const { TextArea } = Input;

class MessageCompose extends Component {
  state = {
    checked: "a",
    phone: "",
    message: "",
    loading: false,
  };
  openNotification = (message) => {
    notification.open({
      message: "Notification",
      description: message,
      icon: <CheckCircleOutlined style={{ color: "#04d182" }} />,
    });
  };
  onChange = (e) => {
    this.setState({
      checked: e.target.value,
      message: e.target.value,
    });
  };

  phoneNumberInput = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  onFinish = () => {
    this.setState({
      loading: true,
    });
    const messageObject = {
      phone: this.state.phone,
      message: this.state.message,
    };
    setTimeout(() => {
      if (this.props.sentResponse) {
        this.openNotification(this.props.sentResponse);
      }
      this.setState({
        loading: false,
      });
    }, 1500);
    this.props.sendMessage(messageObject);
  };
  render() {
    return (
      <div className="mail-compose">
        <h4 className="mb-4">New Message</h4>

        <Radio.Group
          defaultValue="a"
          buttonStyle="solid"
          className="mb-4"
          onChange={this.onChange}
        >
          <Radio.Button value="a">Single / Multiple</Radio.Button>
          <Radio.Button value="b">Company</Radio.Button>
        </Radio.Group>
        {this.state.checked === "b" ? (
          <Select
            className="mb-4"
            mode="multiple"
            placeholder="Select company to send message"
            onChange={this.handleCompanyChange}
            style={{ width: "100%" }}
          >
            {CompaniesData.map((company) => (
              <Option key={company.value}>{company.label}</Option>
            ))}
          </Select>
        ) : null}

        <Form name="nest-messages" onFinish={this.onFinish}>
          {this.state.checked === "a" ? (
            <div>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
                placeholder="Hallo"
              >
                <Input
                  placeholder="To:"
                  style={{ width: "100%" }}
                  onChange={this.phoneNumberInput}
                />
              </Form.Item>
            </div>
          ) : null}
          <TextArea
            rows={4}
            placeholder="Type message"
            onChange={this.onChange}
          />
          <Form.Item>
            <div className="mt-5 text-right">
              {/* <Button type="link" className="mr-2">
                Save Darft
              </Button>
              <Button className="mr-2" onClick={this.back}>
                Discard
              </Button> */}
              <Button
                type="primary"
                htmlType="submit"
                loading={this.state.loading}
              >
                Send
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ messaging }) => {
  const { sentResponse } = messaging;

  return {
    sentResponse,
  };
};

const mapDispatchToProps = {
  sendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageCompose);
