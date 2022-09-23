import React, { Component } from "react";

import { Form, Input, Button, Select, Radio, notification, Modal } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { sendMessage } from "redux/actions/Messaging";
import { connect } from "react-redux";
const { TextArea } = Input;

class NewMessageModal extends Component {
  state = {
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
      message: e.target.value,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (phone) => {
    this.setState({
      loading: true,
    });
    const messageObject = {
      phone: phone,
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
    console.log(messageObject);
    this.props.sendMessage(messageObject);
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  phoneNumberInput = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  render() {
    const { phone } = this.props.details;
    return (
      <div>
        <Button type="primary" onClick={this.showModal} block>
          Send Message
        </Button>
        <Modal
          title="New Message"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Close
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={this.state.loading}
              onClick={(e) => this.handleOk(phone)}
            >
              Send
            </Button>,
          ]}
        >
          <Form initialValues={this.props.details}>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                placeholder="To:"
                style={{ width: "100%" }}
                onChange={this.phoneNumberInput}
              />
            </Form.Item>

            <TextArea
              rows={4}
              placeholder="Type message"
              onChange={this.onChange}
            />
          </Form>
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewMessageModal);
