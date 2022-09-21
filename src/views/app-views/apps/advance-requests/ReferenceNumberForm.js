import React, { Component } from "react";
import { Col, Row, Card, Form, Input, Button } from "antd";
import { searchLoanByRefNo } from "redux/actions/AdvanceRequests";
import {connect} from "react-redux"

class ReferenceNumberForm extends Component {
  state = {
    loading: false
  };
  onFinish = (values) => {
    this.setState({
      loading: true
    })
    this.props.searchLoanByRefNo(values.ref_no)
    setTimeout(()=>{
      this.setState({
        loading: false
      })

    }, 1500)
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    
  };
  render() {
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
          <Button type="primary" htmlType="submit" loading={this.state.loading}>
            Search Loan Request
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = ({ advanceRequest }) => {
  const { loanSearchData } = advanceRequest;
  return {
    loanSearchData,
  };
};

const mapDispatchToProps = {
  searchLoanByRefNo
}

export default connect(mapStateToProps, mapDispatchToProps) (ReferenceNumberForm);
