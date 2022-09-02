import { Button, Card, Col, Row, Modal } from "antd";
import React, { Component } from "react";

import { actionButtonsData } from "./ActionButtonsData";
import { connect } from "react-redux";
import { postAdvanceRequestsAction } from "redux/actions/AdvanceRequests";

class ActionButton extends Component {
  state = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false,
    actionPath: "",
    headerColor: "#000"
  };
  showModal = (textTitle, actionPath, headerColor) => {
    this.setState({
      ModalText: textTitle,
      visible: true,
      actionPath,
      headerColor
    });
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.actionResponseMessage !== prevProps.actionResponseMessage) {
      console.log("Message updated", this.props.actionResponseMessage);
    }
  };

  handleOk = (userId) => {
    console.log("User Id on ok", userId, this.state.actionPath);
    this.props.postAdvanceRequestsAction(userId, this.state.actionPath);
    this.setState({
      ModalText: "Doing update for" + this.state.ModalText,
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        ModalText: this.props.actionResponseMessage,
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false,
    });
  };
  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    const { userId } = this.props;
    return (
      <Card type="inner" title="Actions">
        <Row justify="space-between">
          {actionButtonsData.map((dataItem, index) => {
            return (
              <Col
                xs={24}
                sm={12}
                md={8}
                xl={6}
                xxl={6}
                style={{ padding: "10px" }}
              >
                <Button
                  type="danger"
                  style={{
                    backgroundColor: `${dataItem.color}`,
                    borderColor: `${dataItem.color}`,
                    color: "#fff",
                  }}
                  block
                  onClick={(e) => this.showModal(dataItem.title, dataItem.path, dataItem.color)}
                >
                  {dataItem.title}
                </Button>
              </Col>
            );
          })}
        </Row>
        <Modal
          title={<span style={{color:`${this.state.headerColor}`}}>{ModalText}</span>}
          visible={visible}
          onOk={(e) => this.handleOk(userId)}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </Card>
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
  postAdvanceRequestsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);
