import React, { Component } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Upload,
  notification,
  Table,
  Space,
} from "antd";
import {
  DownloadOutlined,
  DeleteOutlined,
  PlusOutlined,
  InboxOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";
import { USER_ID } from "redux/constants/Auth";
import { addFile } from "redux/actions/AdvanceRequests";
import { connect } from "react-redux";

const columns = [
  {
    title: "File Name",
    dataIndex: "file_name",
    key: "1",
  },
  {
    title: "Time Uploaded",
    dataIndex: "updated_at",
    key: "2",
  },
  {
    title: "Uploader ID",
    dataIndex: "uploader_id",
    key: "3",
  },
  {
    title: "Action",
    dataIndex: "file_location",
    key: "file_location",
    render: (text, record) => (
      <Space>
        <a>
          <DownloadOutlined />
        </a>
        <a>
          <DeleteOutlined style={{ color: "#ff0000" }} />
        </a>
      </Space>
    ),
  },
];

class RegistrationFilesTables extends Component {
  state = {
    addFiles: false,
    file: null,
    loading: false,
    fileName: ""
  };
  showModal = () => {
    this.setState({
      addFiles: true,
    });
  };
  handleCancel = () => {
    this.setState({
      addFiles: false,
    });
  };
  normFile = (e) => {
    this.setState({
      file: e.file,
    });
  };
  onFileNameChange = (e) => {
    console.log("Filename", e.target.value);
    this.setState({
      fileName: e.target.value,
    });
  };

  submitFile = () => {
    this.setState({ loading: true });
    const { personalDetails } = this.props;

    const values = {
      user_id: personalDetails.id,
      file_name: this.state.fileName,
      file_location: this.state.file,
      postPath: "upload-registration-files?id=",
    };

    this.props.addFile(values);
    setTimeout(() => {
      const { actionResponseMessage } = this.props;
      if (actionResponseMessage.message === "File was uploaded successfully") {
        this.openNotification(actionResponseMessage.message);
      }
    }, 2000);
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
    return (
      <div>
        <Table columns={columns} dataSource={this.props.data} scroll={{ y: 240 }} />
        <Button
          type="primary"
          style={{ background: "#00ab6f", borderColor: "white" }}
          icon={<PlusOutlined />}
          onClick={(e) => this.showModal()}
        >
          Add Registration File
        </Button>

        <Modal
          title={"Add Registration File"}
          visible={this.state.addFiles}
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
  addFile,
};

export default connect(mapStateToProps, mapDispatchToProps) (RegistrationFilesTables);
