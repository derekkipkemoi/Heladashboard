import React, { Component } from "react";
import { Menu, Button, Modal, Form, Input, Upload } from "antd";
import {
  InboxOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { data } from "./ComentsAndFileData";

class CommentsAndFilesMenu extends Component {
  state = {
    addComment: false,
    addFile: false,
    modalName: "",
  };
  componentDidMount = () => {
    const { content } = this.props.match.params;
  };

  showModal = (modalKey, modalName) => {
    if (modalKey === 4) {
      this.setState({
        addComment: true,
        modalName,
      });
    }

    if (modalKey === 5 || modalKey === 6) {
      this.setState({
        addFile: true,
        modalName
      });
    }
  };

  handleCancel = (e) => {
    this.setState({
      addComment: false,
      addFile: false,
    });
  };

  normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { content } = this.props.match.params;
    const { modalName } = this.state;
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
          title="Add Comment"
          visible={this.state.addComment}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <Form.Item label="Message" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
          </Form>
        </Modal>

        <Modal
          title={<span>Add {modalName}</span>}
          visible={this.state.addFile}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form.Item>
            <Form.Item
              name="dragger"
              valuePropName="fileList"
              getValueFromEvent={this.normFile}
              noStyle
            >
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item>
        </Modal>
      </div>
    );
  }
}

export default CommentsAndFilesMenu;
