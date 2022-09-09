import React from "react";
import { Table, Card } from "antd";

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

  if (props.personalDetails !== undefined) {
    data = [
      {
        key: "2",
        name: "Principal",
        detail: props.personalDetails.amount,
      },
      {
        key: "3",
        name: "Installments",
        detail: props.personalDetails.ability,
      },
      {
        key: "4",
        name: "Period",
        detail: props.personalDetails.period,
      },
      {
        key: "5",
        name: "Interest",
        detail: props.personalDetails.interest,
      },
      {
        key: "6",
        name: "Type",
        detail: props.personalDetails.type,
      },
      {
        key: "7",
        name: "Fee",
        detail: props.personalDetails.fee,
      },
      {
        key: "8",
        name: "Status",
        detail: props.personalDetails.advance_status,
      },
      // {
      //   key: "9",
      //   name: "Booked By",
      //   detail: props.personalDetails.booked_by,
      // },
      {
        key: "10",
        name: "Booking Date",
        detail: props.personalDetails.booking_date,
      },
    ];
  }


  return (
    <Card type="inner" title="Loan Details" bodyStyle={{ padding:"0px"}} >
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
