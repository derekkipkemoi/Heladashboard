import React, { Component } from "react";
import { Modal, Button, Form, Input, notification } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { UpdateStopOrder } from "redux/actions/AdvanceRequests";

class UpdateStopOrderComponent extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
      loading: false
    });
  };

  handleOk = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  openNotification = (message) => {
    notification.open({
      message: "Notification",
      description: message,
      icon: <CheckCircleOutlined style={{ color: "#04d182" }} />,
    });
  }

  onFinish = (values) => {
    this.setState({
      loading: true
    })
    const formInput = {
      id: values.company_id,
      amount_on: values.amount_on,
      amount_off: values.amount_off,
      balance: values.balance,
      account: values.account,
    };
   
   

    this.props.UpdateStopOrder(formInput);
    setTimeout(() => {
      const { actionResponseMessage } = this.props;
      if (actionResponseMessage) {
        this.openNotification(actionResponseMessage.message);
      }
      this.setState({
        loading: false,
      });
    }, 1500);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={this.showModal}
          style={{
            backgroundColor: "#00AB6F",
            borderColor: "#fff",
            color: "#fff",
          }}
          block
        >
          Update Stop Order
        </Button>
        <Modal
          title={<span style={{color:"#00AB6F"}}>UPDATE STOP ORDER</span>}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Close
            </Button>,
          ]}
        >
          <Form
            name="basic"
            initialValues={this.props.details}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="ID"
              name="company_id"
              rules={[{ required: true, message: "Please input ID!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Amount On"
              name="amount_on"
              rules={[{ required: true, message: "Please input amount_on!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Amount Off"
              name="amount_off"
              rules={[{ required: true, message: "Please input amount_off!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Balance"
              name="balance"
              rules={[{ required: true, message: "Please input balance" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Account"
              name="account"
              value={this.props.account}
              rules={[{ required: true, message: "Please input account!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={this.state.loading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = ({ advanceRequest }) => {
  const {actionResponseMessage } = advanceRequest;
  return {
    actionResponseMessage,
  };
};

const mapDispatchToProps = {
  UpdateStopOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStopOrderComponent);
