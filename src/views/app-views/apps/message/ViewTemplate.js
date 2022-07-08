import React, { Component } from "react";
import { connect } from "react-redux";
import { LeftCircleOutlined } from "@ant-design/icons";

import { getTemplate } from "redux/actions/Messaging";

import { Typography, Tag, Spin, Alert } from "antd";
import UpdateTemplate from "./TemplateFunctions/UpdateTemplate";
const { Text } = Typography;

export class ViewTemplate extends Component {
  state = {
    data: {},
    loading: false,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({
      loading: true,
    });
    this.props.getTemplate(id);
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      if (this.props.template) {
        this.setState({
          loading: false,
        });
      }
    }
  };

  back() {
    this.props.history.goBack();
  }

  render() {
    const { id } = this.props.match.params;
    let messageItem = {};

    const idTString = (id) => {
      return "" + id;
    };

    if (this.props.template) {
      messageItem = this.props.template;
    }

    return (
      <div>
        {this.state.loading ? (
          <Spin tip="Loading...">
            <Alert
              message="Loading permissions"
              description="Please wait.... Permissions loading"
              type="info"
            />
          </Spin>
        ) : (
          <div className="mail-detail">
            <div className="d-lg-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center mb-3">
                <a
                  className="font-size-md mr-3"
                  onClick={() => {
                    this.back();
                  }}
                >
                  <LeftCircleOutlined className="mail-detail-action-icon font-size-md ml-0" />
                </a>
                <Text>Reminder ID: {id}</Text>
              </div>
              <div className="mail-detail-action mb-3">
                <span className="mr-2 font-size-md">
                  <Text strong underline>
                    Category: {messageItem.main_category}
                  </Text>
                </span>
                <span className="mr-2 font-size-md">
                  <UpdateTemplate />
                </span>
              </div>
            </div>
            <div className="mail-detail-content">
              <h5 className="mb-4">
                <Tag color="green" className="ml-3">
                  {" "}
                  {messageItem.sub_category}
                </Tag>
              </h5>
              <p>{messageItem.message}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ messaging }) => {
  const { template } = messaging;
  console.log("Template Item in component", template);

  return { template };
};

const mapDispatchToProps = {
  getTemplate,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewTemplate);
