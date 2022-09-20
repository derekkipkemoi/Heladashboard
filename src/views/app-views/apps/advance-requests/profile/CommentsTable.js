import React, { Component } from "react";
import {
  Menu,
  Button,
  Modal,
  Form,
  Input,
  Upload,
  notification,
  Table,
} from "antd";
import { connect } from "react-redux";
import { addComment } from "redux/actions/AdvanceRequests";
import { PlusOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { USER_ID } from "redux/constants/Auth";

const columns = [
  {
    title: "Commenter",
    dataIndex: "first_name",
    key: "4",
    render: (_, record) => (
      <div className="d-flex">
        {record.first_name + " " + record.middle_name}
      </div>
    ),
  },
  {
    title: "Message",
    dataIndex: "message",
    key: "4",
  },
  {
    title: "Date Created",
    dataIndex: "created_at",
    key: "6",
  },
];

class CommentTables extends Component {
  state = {
    addComments: false,
    loading: false,
    message: "",
  };
  submitComment = () => {
    this.setState({ loading: true });
    const id = localStorage.getItem(USER_ID);
    const { personalDetails } = this.props;

    const values = {
      request_id: personalDetails.id,
      commenter_id: parseInt(id),
      message: this.state.message,
    };

    this.props.addComment(values);

    setTimeout(() => {
      const { actionResponseMessage } = this.props;
      if (
        actionResponseMessage.message ===
        "comment added to the request successfully"
      ) {
        this.openNotification(actionResponseMessage.message);
      }
    }, 1500);
  };

  showModal = () => {
    this.setState({
      addComments: true,
    });
  };

  onMessageChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleCancel = (e) => {
    this.setState({
      addComments: false,
    });
  };

  openNotification = (message) => {
    notification.open({
      message: "Notification",
      description: message,
      icon: <CheckCircleOutlined style={{ color: "#04d182" }} />,
    });

    this.setState({
      loading: false,
    });
  };

  render() {
    const tailLayout = {
      wrapperCol: { offset: 4, span: 16 },
    };

    return (
      <div>
        <Table columns={columns} dataSource={this.props.data} scroll={{ y: 240 }} />
        <Button
          type="primary"
          style={{ background: "#00ab6f", borderColor: "white" }}
          icon={<PlusOutlined />}
          onClick={(e) => this.showModal()}
        >
          Add Comment
        </Button>

        <Modal
          title={"Add Comment"}
          visible={this.state.addComments}
          onCancel={this.handleCancel}
          footer={[
            <Button key="submit" type="primary" onClick={this.handleCancel}>
              Close
            </Button>,
          ]}
        >
          <Form onFinish={this.submitComment}>
            <Form.Item
              label="Message"
              onChange={this.onMessageChange}
              rules={[{ required: true, message: "Message required!" }]}
              name="message"
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                htmlType="submit"
                loading={this.state.loading}
              >
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
  const { actionResponseMessage } = advanceRequest;
  return {
    actionResponseMessage,
  };
};

const mapDispatchToProps = {
  addComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentTables);
