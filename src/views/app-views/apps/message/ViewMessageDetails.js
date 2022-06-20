import React, { Component } from "react";
import { connect } from "react-redux";
import { LeftCircleOutlined, DeleteOutlined } from "@ant-design/icons";

import AvatarStatus from "components/shared-components/AvatarStatus";

import { getMessagesList } from "redux/actions/Messaging";

import { Typography, Tooltip } from "antd";
const { Text, Link } = Typography;

export class ViewMessageDetails extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    let data = [];
    this.props.getMessagesList();
    data = this.props.messages;
    this.setState({
      data: data,
    });
  }

  back() {
    this.props.history.goBack();
  }

  render() {
    const { id } = this.props.match.params;
    let messageItem = {};

    for (let index = 0; index < this.state.data.length; index++) {
      const element = this.state.data[index];

      if (element.id === id) {
        messageItem = element;
      }
    }

    return (
      <div className="mail-detail">
        <div className="d-lg-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center mb-3">
            <div
              className="font-size-md mr-3"
              onClick={() => {
                this.back();
              }}
            >
              <LeftCircleOutlined className="mail-detail-action-icon font-size-md ml-0" />
            </div>
            <AvatarStatus
              src="avatar"
              name={messageItem.id}
              subTitle={`To: ${messageItem.contacts}`}
            />
          </div>
          <div className="mail-detail-action mb-3">
            <span className="mr-2 font-size-md">
              <Text strong underline>
                Target: {messageItem.target}
              </Text>
            </span>
            <span className="mr-2 font-size-md">
              <Text strong>Date Sent: </Text>
              {messageItem.created_at}
            </span>
          </div>
        </div>
        <div className="mail-detail-content">
          <h3 className="mb-4">{messageItem.name}</h3>
          <p>{messageItem.message}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ messaging }) => {
  const { messages } = messaging;

  return { messages };
};

const mapDispatchToProps = {
  getMessagesList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewMessageDetails);
