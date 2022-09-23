import { Modal, Button, Form, Typography, Input } from "antd";

import React, { Component } from "react";
const { Text } = Typography;

class DownloadStopOrders extends Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  // componentDidMount = () => {
  //   console.log("Properties", this.props);
  // };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    const layout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 0, span: 16 },
    };
    return (
      <div>
        <Button
          onClick={this.showModal}
          style={{
            backgroundColor: "#fba615",
            borderColor: "#fff",
            color: "#fff",
          }}
          block
        >
          Download
        </Button>
        <Modal
          visible={visible}
          title={<span style={{ color: "#fba615" }}>DOWNLOAD</span>}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Close
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Download
            </Button>,
          ]}
        >
          <Form {...layout}  name="basic" initialValues={this.props.details}>
            <Form.Item {...tailLayout} label="Datasheet Number" name="account">
              <Input disabled={true} />
            </Form.Item>
            <Form.Item {...tailLayout} label="Status" name="status">
              <Input disabled={true} />
            </Form.Item>
            <Form.Item {...tailLayout} label="Date Modified" name="created_at">
              <Input disabled={true} />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default DownloadStopOrders;
