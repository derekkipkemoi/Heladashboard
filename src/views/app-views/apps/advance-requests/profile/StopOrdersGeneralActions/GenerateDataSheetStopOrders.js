import React, { Component } from "react";
import { Modal, Form, Input, Button, Checkbox, Select, Typography } from "antd";
import { connect } from "react-redux";
import { stopOrderGenerateDatasheet } from "redux/actions/AdvanceRequests";
const { Option } = Select;
const { Text } = Typography;

class GenerateDataSheetStopOrders extends Component {
  state = {
    loading: false,
    visible: false,
    checked: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  onFinish = (values) => {
    this.setState({
      loading: true
    })
    const formInput = {
      datasheet_type: values.datasheet_type,
      id: parseInt(this.props.details.company_id),
      advance_request_id: this.props.advance_request_id,
      custom_sheet_no: values.custom_sheet_no,
      datasheet: this.props.datasheet

    };

    console.log("Success:", formInput);
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
      console.log("checked = ", e.target.checked);
      this.props.stopOrderGenerateDatasheet();
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

    const textStyle = {
      border: "1px solid #D3D3D3",
      padding: "10px",
      borderRadius: "10px",
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
          title={<span style={{color:"#3e79f7"}}>GENERATE E DATASHEET NUMBER</span>}
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

            <Form.Item name="remember">
              <Checkbox checked={this.state.checked} onChange={this.onChange}>
                Generate New
              </Checkbox>
            </Form.Item>

            <Form.Item label="Datasheet Number">
              <Text style={textStyle}>{datasheet}</Text>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={this.state.loading}>
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
  const { datasheet } = advanceRequest;
  console.log("Datasheet number", datasheet);

  return {
    datasheet,
  };
};

const mapDispatchToProps = {
  stopOrderGenerateDatasheet,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenerateDataSheetStopOrders);
