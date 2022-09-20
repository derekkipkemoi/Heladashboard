import React, { Component } from "react";
import { Form, Button, Card, Space, Typography, notification } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { updateAdvanceRequest } from "redux/actions/AdvanceRequests";
const { Text } = Typography;

class UpdateRequestCard extends Component {
  state = {
    period: 0,
    amount: 0,
    disabled: true,
    message: "",
  };
  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      const { responseValues } = this.props;
      if (responseValues) {
        this.setState({
          amount: responseValues.amount,
          period: responseValues.period,
          disabled: false,
          loading: false,
        });
      }
    }
  };

  openNotification = (message) => {
    notification.open({
      message: "Notification",
      description: message,
      icon: <CheckCircleOutlined style={{ color: "#04d182" }} />,
    });

    this.setState({
      disabled: true,
      message: "",
      loading: false,
    });
  };

  submitChanges = () => {
    this.setState({ loading: true });
    const { personalDetails } = this.props;
    const values = {
      id: personalDetails.id,
      period: this.state.period,
      advance_amount: this.state.amount,
    };
    console.log("Props", personalDetails);
    this.props.updateAdvanceRequest(values);

    setTimeout(() => {
      const { actionResponseMessage } = this.props;
      if (actionResponseMessage) {
        this.openNotification(actionResponseMessage.message);
      }
    }, 1500);
  };

  render() {
    const { period, amount, disabled, loading } = this.state;

    const groupDisplay = {
      display: "flex",
      flexDirection: "row",
      display: " inline-grid",
      display: "grid",
      margin: "15px 0",
    };
    const textStyle = {
      border: "1px solid",
      padding: "10px",
      borderRadius: "10px",
    };
    return (
      <Card type="inner" title="Changes">
        <Form
          name="basic"
          initialValues={{
            period: this.state.period,
            advanceAmount: this.state.amount,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <div style={groupDisplay}>
            <Space>
              <Form.Item label="Period" name="period">
                <Text style={textStyle}>{period}</Text>
              </Form.Item>

              <Form.Item label="Advance Amount" name="advanceAmount">
                <Text style={textStyle}>{amount}</Text>
              </Form.Item>
            </Space>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={disabled}
              onClick={this.submitChanges}
              loading={loading}
            >
              Submit Changes
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

const mapStateToProps = ({ advanceRequest }) => {
  const { responseValues, actionResponseMessage } = advanceRequest;
  return {
    responseValues,
    actionResponseMessage,
  };
};

const mapDispatchToProps = {
  updateAdvanceRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRequestCard);
