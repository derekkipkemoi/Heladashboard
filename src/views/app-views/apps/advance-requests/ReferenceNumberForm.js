import React, { Component } from "react";
import { Col, Row, Card, Form, Input, Button } from "antd";
import { searchLoanByRefNo } from "redux/actions/AdvanceRequests";
import {connect} from "react-redux"

class ReferenceNumberForm extends Component {
  state = {};
  onFinish = (values) => {
    console.log("Success:", values.ref_no);
    this.props.searchLoanByRefNo(values.ref_no)
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    
  };
  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    return (
      <Form
        name="basic"
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
      >
        <Form.Item
          label="Enter Loan Reference Number"
          name="ref_no"
          rules={[
            { required: true, message: "Please Input Loan Reference Number!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search Loan Request
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = ({ advanceRequest }) => {
  const { loanSearchData } = advanceRequest;
  console.log("Response", loanSearchData)
  return {
    loanSearchData,
  };
};

const mapDispatchToProps = {
  searchLoanByRefNo
}

export default connect(mapStateToProps, mapDispatchToProps) (ReferenceNumberForm);
