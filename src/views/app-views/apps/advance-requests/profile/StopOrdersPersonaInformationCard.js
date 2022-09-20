import React from "react";
import { Col, Row, Card, Table, Typography } from "antd";
import { Icon } from "components/util-components/Icon";

const { Text } = Typography;

export default function StopOrdersPersonalInformationCard(props) {
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
        key: "1",
        name: "Ref No",
        detail: props.personalDetails.account,
      },
      {
        key: "1",
        name: "Name",
        detail:
          props.personalDetails.first_name +
          " " +
          props.personalDetails.middle_name +
          " " +
          props.personalDetails.surname,
      },
      {
        key: "3",
        name: "Phone",
        detail: props.personalDetails.phone,
      },
      {
        key: "4",
        name: "Company",
        detail: props.personalDetails.company,
      },
      {
        key: "6",
        name: "ID Number",
        detail: props.personalDetails.national_id,
      },
      {
        key: "1",
        name: "Amount Off",
        detail: props.personalDetails.amount_off,
      },
      {
        key: "1",
        name: "Amount On",
        detail: props.personalDetails.amount_on,
      },
      {
        key: "1",
        name: "Balance",
        detail: props.personalDetails.balance,
      },
      {
        key: "7",
        name: "Payroll Number",
        detail: props.personalDetails.payroll_no,
      },
      {
        key: "8",
        name: "Status",
        detail: props.personalDetails.status,
      },
      {
        key: "9",
        name: "Creation Date",
        detail: props.personalDetails.created_at,
      },
    ];
  }

  return (
    <Card
      type="inner"
      title="Details"
      bodyStyle={{ padding: "0", borderRadius: "0px 0" }}
    >
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
