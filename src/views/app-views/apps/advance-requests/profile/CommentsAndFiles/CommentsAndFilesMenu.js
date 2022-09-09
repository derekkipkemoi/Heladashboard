import React, { Component } from "react";
import { Menu, Button, Modal, Form, Input, Upload, notification } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { data } from "./ComentsAndFileData";
import { addFile, addComment } from "redux/actions/AdvanceRequests";
import { USER_ID } from "redux/constants/Auth";

class CommentsAndFilesMenu extends Component {
  state = {
    addComment: false,
    addFile: false,
    modalName: "",
    message: "",
    loading: false,
    file: null,
    fileName: ""
  };

  showModal = (modalKey, modalName) => {
    if (modalKey === 4) {
      this.setState({
        addComment: true,
        modalName,
      });
    }

    if (modalKey >= 5) {
      this.setState({
        addFile: true,
        modalName,
      });
    }
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

  onMessageChange = (e) => {
    console.log("Message", e.target.value);
    this.setState({
      message: e.target.value,
    });
  };

  onFileNameChange =(e)=> {
    console.log("Filename", e.target.value);
    this.setState({
      fileName: e.target.value,
    });
  }

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
      if (actionResponseMessage) {
        this.openNotification(actionResponseMessage.message);
      }
    }, 1500);
  };

  handleCancel = (e) => {
    this.setState({
      addComment: false,
      addFile: false,
    });
  };

  submitFile = () => {
    this.setState({ loading: true });
    const { personalDetails } = this.props;

    const values = {
      request_id: personalDetails.id,
      file_name: this.state.fileName,
      file_location: this.state.file,
    };

    console.log("Upload file", values);
  };

  normFile = (e) => {
    console.log("Upload event:", e.file);
    this.setState({
      file: e.file,
    });
    // if (Array.isArray(e)) {
    //   return e;
    // }
    // return e && e.fileList;
  };

  render() {
    const { content } = this.props.match.params;
    const { modalName, loading } = this.state;
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 4, span: 16 },
    };

    const tailLayout1 = {
      wrapperCol: { offset: 20, span: 2 },
    };

    return (
      <div>
        <Menu selectedKeys={[content]} mode="horizontal">
          {data.map((dataItem, i) => {
            return (
              <>
                {dataItem.key < 4 ? (
                  <Menu.Item key={dataItem.pathname} icon={dataItem.icon}>
                    <Link
                      to={{
                        pathname: `${dataItem.pathname}`,
                      }}
                    />
                    {dataItem.name}
                  </Menu.Item>
                ) : null}
                {dataItem.key >= 4 ? (
                  <Menu.Item key={dataItem.pathname}>
                    <Button
                      type="primary"
                      style={{ background: "#00ab6f", borderColor: "white" }}
                      icon={dataItem.icon}
                      onClick={(e) =>
                        this.showModal(dataItem.key, dataItem.name)
                      }
                    >
                      {dataItem.name}
                    </Button>
                  </Menu.Item>
                ) : null}
              </>
            );
          })}
        </Menu>
        <Modal
          title={<span>{modalName.toUpperCase()}</span>}
          visible={this.state.addComment}
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
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title={<span>{modalName.toUpperCase()}</span>}
          visible={this.state.addFile}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="submit" type="primary" onClick={this.handleCancel}>
              Close
            </Button>,
          ]}
        >
          <Form onFinish={this.submitFile}>
            <Form.Item
              name="dragger"
              label="File Upload"
              valuePropName="fileList"
              getValueFromEvent={this.normFile}
              noStyle
            >
              <Upload.Dragger name="files">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </Upload.Dragger>
            </Form.Item>
            <Form.Item
              label="File Name"
              name="file_name"
              onChange={this.onFileNameChange}
              rules={[{ required: true, message: "file name required!" }]}
              style={{ marginTop: "10px" }}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
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
  addFile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsAndFilesMenu);
