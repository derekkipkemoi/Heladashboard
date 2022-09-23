import React, { Component } from "react";
import { Modal, Form, Input, Button, Checkbox, Select, Typography, notification } from "antd";
import { connect } from "react-redux";
import { CheckCircleOutlined } from "@ant-design/icons";
import {
  stopOrderGenerateDatasheetNumber,
  stopOrderGenerateDatasheet,
} from "redux/actions/AdvanceRequests";
const { Option } = Select;
const { Text } = Typography;

class GenerateDataSheetStopOrders extends Component {
  state = {
    loading: false,
    visible: false,
    checked: false,
  };

  openNotification = (message) => {
    notification.open({
      message: "Notification",
      description: message,
      icon: <CheckCircleOutlined style={{ color: "#04d182" }} />,
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  onFinish = (values) => {
    this.setState({
      loading: true,
    });
    const formInput = {
      datasheet_type: values.datasheet_type,
      id: parseInt(this.props.details.company_id),
      advance_request_id: parseInt(this.props.details.advance_request_id),
      custom_sheet_no: values.custom_sheet_no,
      datasheet: this.props.datasheet,
    };

    console.log("Form data", formInput);

    this.props.stopOrderGenerateDatasheet(formInput);
    setTimeout(() => {
      const { actionResponseMessage } = this.props;
      if (actionResponseMessage) {
        this.openNotification(actionResponseMessage.message);
      }
      this.setState({
        loading: false,
      });
    }, 1500);
  };

  // "datasheet_type":"STOP ORDER",
  // "id":94,
  // "advance_request_id":6743,
  // "custom_sheet_no":"",
  // "datasheet":""

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  onChange = (e) => {
    this.setState({
      checked: e.target.checked,
    });

    if (e.target.checked) {
      this.props.stopOrderGenerateDatasheetNumber();
    }
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { datasheet } = this.props;
    const { visible, loading } = this.state;
    const { personalDetails, companyDatasheets } = this.props;
    let companyDatasheetNumberData = [];
    if (companyDatasheets !== undefined) {
      companyDatasheetNumberData = companyDatasheets;
    }

    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 0, span: 16 },
    };
    const buttonLayout = {
      wrapperCol: { offset: 6, span: 16 },
    };
    return (
      <div>
        <Button
          type="primary"
          onClick={this.showModal}
          style={{
            backgroundColor: "#3e79f7",
            borderColor: "#fff",
            color: "#fff",
          }}
          block
        >
          Generate e DataSheet Number
        </Button>
        <Modal
          visible={visible}
          title={
            <span style={{ color: "#3e79f7" }}>
              GENERATE E DATASHEET NUMBER
            </span>
          }
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Close
            </Button>,
          ]}
        >
          <Form
            name="basic"
            initialValues={{ datasheet: datasheet }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Datasheet Type"
              name="datasheet_type"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select type">
                <Option value="STOP ORDER">STOP ORDER</Option>
              </Select>
            </Form.Item>

            <Form.Item label="Recent Datasheet" name="custom_sheet_no">
              <Select placeholder="Select type">
                {companyDatasheetNumberData.map((dataItem, index) => {
                  return (
                    <Option value={dataItem.sheet_no} key={index}>
                      {dataItem.sheet_no}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item name="remember" label="Generate New">
              <Checkbox checked={this.state.checked} onChange={this.onChange} />
            </Form.Item>

            <Form.Item label="Datasheet Number" name="datasheet">
              {datasheet}
            </Form.Item>

            <Form.Item {...buttonLayout}>
              <Button
                type="primary"
                htmlType="submit"
                loading={this.state.loading}
              >
                Generate
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ advanceRequest }) => {
  const { datasheet, actionResponseMessage } = advanceRequest;
  return {
    datasheet,
    actionResponseMessage,
  };
};

const mapDispatchToProps = {
  stopOrderGenerateDatasheetNumber,
  stopOrderGenerateDatasheet,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateDataSheetStopOrders);
