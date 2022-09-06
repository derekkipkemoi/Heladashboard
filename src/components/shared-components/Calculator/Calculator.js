import React, { Component } from "react";

import {
  Form,
  InputNumber,
  Radio,
  Button,
  Card,
  Space,
  Typography,
  Table,
  Tooltip,
} from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { calculator } from "redux/actions/AdvanceRequests";
const { Text } = Typography;

class Calculator extends Component {
  state = {
    incrementPeriod: 0,
    incrementAmount: 0,
    loading: false,
  };

  reset = () => {
    this.setState({
      loading: false,
    });
  };

  onFinish = (values) => {
    this.props.calculator(values);
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  onNumberPeriod = (value) => {
    this.setState({
      incrementPeriod: value,
    });
  };

  onNumberAmount = (value) => {
    this.setState({
      incrementAmount: value,
    });
  };
  render() {
    const { loading } = this.state;
    let data = {};
    const groupDisplay = {
      display: "flex",
      flexDirection: "row",
      display: " inline-grid",
      display: "grid",
      margin: "15px 0",
    };

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Detail",
        dataIndex: "detail",
      },
    ];

    const { responseValues } = this.props;
    console.log("Data response", responseValues);

    if (responseValues) {
      data = [
        {
          key: "1",
          name: "Amount",
          detail: responseValues.amount,
        },
        {
          key: "2",
          name: "Fee",
          detail: responseValues.fee,
        },
        {
          key: "6",
          name: "Interest Amount",
          detail: responseValues.interest_amount,
        },
        {
          key: "8",
          name: "Interest Rate",
          detail: responseValues.interest_rate,
        },

        {
          key: "3",
          name: "Monthly Installments",
          detail: responseValues.monthly_installment,
        },
        {
          key: "5",
          name: "Period",
          detail: responseValues.period,
        },

        {
          key: "7",
          name: "Total Payable",
          detail: responseValues.total_payable,
        },
      ];
    }

    return (
      <div>
        <Form name="validate_other" onFinish={this.onFinish}>
          <Card type="inner" title="Calculator">
            <Form.Item name="amount_type">
              <Radio.Group>
                <Radio value="principle_amount">Using Principle Amount</Radio>
                <Radio value="loan_balance">Using Loan Balance</Radio>
                <Radio value="payslip_ability">Using Payslip Ability</Radio>
              </Radio.Group>
            </Form.Item>

            <div style={groupDisplay}>
              <Space>
                <Form.Item label="Amount" name="amount">
                  <InputNumber
                    min={0}
                    max={10000000}
                    defaultValue={0}
                    onChange={this.onNumberAmount}
                    style={{ width: "100%" }}
                  />
                </Form.Item>

                <Form.Item label="Period" name="period">
                  <InputNumber
                    min={0}
                    max={24}
                    defaultValue={0}
                    onChange={this.onNumberPeriod}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Space>
            </div>

            {Object.keys(responseValues).length > 0 ? (
              <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
                style={{ marginBottom: "10px" }}
              />
            ) : null}

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Calculate
              </Button>
            </Form.Item>
          </Card>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ advanceRequest }) => {
  const { responseValues } = advanceRequest;
  console.log("Calculator Response", responseValues);
  return {
    responseValues,
  };
};

const mapDispatchToProps = {
  calculator,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
