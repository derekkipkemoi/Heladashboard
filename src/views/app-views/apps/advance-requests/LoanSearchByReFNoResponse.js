import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Card } from "antd";

class LoanSearchByRefNoResponse extends Component {
  state = {
    
  };
  render() {
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

    let data = [];
    if (this.props.loanSearchData !== undefined) {
      data = [
        {
          key: "2",
          name: "Loan Number",
          detail: this.props.loanSearchData.loan_no,
        },
        {
          key: "3",
          name: "Amount",
          detail: this.props.loanSearchData.amount,
        },
        {
          key: "4",
          name: "Period",
          detail: this.props.loanSearchData.period,
        },
        {
          key: "6",
          name: "Name",
          detail: this.props.name,
        },
        {
          key: "7",
          name: "Phone",
          detail: this.props.loanSearchData.phone,
        },
        {
          key: "8",
          name: "National ID",
          detail: this.props.loanSearchData.national_id,
        },
        {
          key: "8",
          name: "Employee No",
          detail: this.props.loanSearchData.payroll_no,
        },
        {
          key: "10",
          name: "Company",
          detail: this.props.loanSearchData.company_name,
        },
      ];
    }
    return (
      <Card type="inner" title="Search Response" bodyStyle={{ padding: "0px" }}>
        <Table
          showHeader={false}
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          size="small"
        />
      </Card>
    );
  }
}

const mapStateToProps = ({ advanceRequest }) => {
  const { loanSearchData } = advanceRequest;
  const name =
    loanSearchData.first_name +
    " " +
    loanSearchData.middle_name +
    " " +
    loanSearchData.surname;
  return {
    loanSearchData,
    name,
  };
};

export default connect(mapStateToProps)(LoanSearchByRefNoResponse);
