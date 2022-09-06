import React from "react";
import { Table, Typography, Card } from "antd";
const { Text } = Typography;

export default function LoanInformationCard(props) {
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

  if (props.loanDetails !== undefined) {
    data = [
      {
        key: "2",
        name: "Principal",
        detail: props.loanDetails.amount,
      },
      {
        key: "3",
        name: "Installments",
        detail: props.loanDetails.ability,
      },
      {
        key: "4",
        name: "Period",
        detail: props.loanDetails.period,
      },
      {
        key: "5",
        name: "Interest",
        detail: props.loanDetails.interest,
      },
      {
        key: "6",
        name: "Type",
        detail: props.loanDetails.type,
      },
      {
        key: "7",
        name: "Fee",
        detail: props.loanDetails.fee,
      },
      {
        key: "8",
        name: "Status",
        detail: props.loanDetails.advance_status,
      },
      {
        key: "9",
        name: "Booked By",
        detail: props.loanDetails.booked_by,
      },
      {
        key: "10",
        name: "Booking Date",
        detail: props.loanDetails.booking_date,
      },
    ];
  }

  return (
    <Card type="inner" title="Loan Details" bodyStyle={{ padding: "0" }}>
      <Table columns={columns} dataSource={data} pagination={false} bordered />
    </Card>
  );
}
