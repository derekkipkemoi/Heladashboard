import React, { Component } from "react";

import {
  Button,
  Modal,
  Form,
  Select,
  Radio,
  Typography,
  Input,
  notification,
} from "antd";
import { connect } from "react-redux";
import { addDatasheetNumber } from "redux/actions/AdvanceRequests";
import { CheckCircleOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Text } = Typography;

class AddDatasheetNumber extends Component {
  state = {
    visible: false,
    customDataSheet: 0,
    datasheetType: "default",
    customDataSheet: true,
    companyDatasheetNumber: [],
    loading: false,
  };
  componentDidMount = () => {
    const { companyDatasheets } = this.props;

    this.setState({
      companyDatasheetNumber: companyDatasheets,
    });

    console.log("data", companyDatasheets);
  };
  onSelectType = (e) => {
    this.setState({
      customDataSheet: e.target.value,
    });
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
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
  submitDataSheetNumber = () => {
    this.setState({ loading: true });
    const { personalDetails } = this.props;
    const values = {
      datasheet_type: this.state.datasheetType,
      id: personalDetails.id,
      new_sheet_no: this.state.customDataSheet,
    };
    console.log("Values", values);
    this.props.addDatasheetNumber(values);
    setTimeout(() => {
      const { actionResponseMessage } = this.props;
      this.setState({
        loading: false,
      });
      if (actionResponseMessage) {
        this.openNotification(actionResponseMessage.message);
      }
    }, 2000);
  };
  onChange = (value) => {
    this.setState({
      datasheetType: value,
    });
  };

  render() {
    const { visible, customDataSheet, loading, companyDatasheetNumber } =
      this.state;

    return (
      <div>
        <Button
          block
          onClick={this.showModal}
          style={{
            background: "#3e79f7",
            color: "white",
          }}
        >
          Add Datasheet Number
        </Button>
        <Modal
          title={<Text style={{ color: "#3e79f7" }}>ADD DATASHEET NUMBER</Text>}
          visible={visible}
          onOk={this.showModal}
          onCancel={this.handleCancel}
          footer={[
            <diV>
              <Button key="submit" onClick={this.handleCancel}>
                Cancel
              </Button>
            </diV>,
          ]}
        >
          <Form>
            <Form.Item name="dataSheetType" label="Datasheet Type">
              <Select
                onChange={this.onChange}
                allowClear
                defaultValue={"default"}
              >
                <Option value="default">DEFAULT</Option>
                <Option value="topup">TOPUP</Option>
              </Select>
            </Form.Item>

            {companyDatasheetNumber?.length > 0 ? (
              <Form.Item name="recent" label="recent">
                <Select onChange={this.onGenderChange} allowClear>
                  {companyDatasheetNumber.map((item, index) => {
                    return <Option value="female">{item.sheet_no}</Option>;
                  })}
                </Select>
              </Form.Item>
            ) : null}

            <Form.Item name="radio-group">
              <Radio.Group onChange={this.onSelectType} defaultValue={true}>
                <Radio value={true}>Generate New (Optional)</Radio>

                <Radio value={false}>
                  Custom Datasheet (Optional)
                  {!customDataSheet ? (
                    <Input
                      style={{ width: 100, marginLeft: 10 }}
                      onChange={this.enterCustomSheet}
                    />
                  ) : null}
                </Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            loading={loading}
            onClick={this.submitDataSheetNumber}
          >
            Submit
          </Button>
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
  addDatasheetNumber,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDatasheetNumber);
