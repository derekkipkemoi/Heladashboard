import React, { Component } from "react";
import { connect } from "react-redux";
import { LeftCircleOutlined } from "@ant-design/icons";

import { getReminder } from "redux/actions/Messaging";

import { Typography, Tag, Spin, Alert } from "antd";
import UpdateReminder from "./ReminderFunctions/UpdateReminder";
const { Text } = Typography;

export class ViewReminder extends Component {
  state = {
    data: {},
    loading: false,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.setState({
      loading: true,
    });
    this.props.getReminder(id);
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      if (this.props.reminder) {
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

    if (this.props.reminder) {
      messageItem = this.props.reminder;
    }

    return (
      <div>
        {this.state.loading ? (
          <Spin tip="Loading...">
            <Alert
              message="Loading reminder"
              description="Please wait...."
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
                    Days: {messageItem.days}
                  </Text>
                </span>
                <span className="mr-2 font-size-md">
                  <UpdateReminder />
                </span>
              </div>
            </div>
            <div className="mail-detail-content">
              <h5 className="mb-4">
                Status:{" "}
                {messageItem.status === "active" ? (
                  <Tag color="green" className="ml-3">
                    {" "}
                    Active
                  </Tag>
                ) : (
                  <Tag color="yellow" className="ml-3">
                    {" "}
                    Inactive
                  </Tag>
                )}
              </h5>
              <p>{messageItem.text}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ messaging }) => {
  const { reminder } = messaging;

  return { reminder };
};

const mapDispatchToProps = {
  getReminder,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewReminder);
