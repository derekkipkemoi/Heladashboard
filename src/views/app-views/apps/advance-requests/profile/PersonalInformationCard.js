import React from "react";
import { Col, Row, Card, Table, Typography } from "antd";
import { Icon } from "components/util-components/Icon";

const { Text } = Typography;

export default function PersonalInformationCard(props) {
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
        name: "Name",
        detail: props.personalDetails.borrower,
      },
      {
        key: "3",
        name: "Phone",
        detail: props.personalDetails.phone,
      },
      {
        key: "4",
        name: "Company",
        detail: props.personalDetails.institution,
      },
      {
        key: "5",
        name: "Age",
        detail: props.personalDetails.age,
      },
      {
        key: "6",
        name: "ID Number",
        detail: props.personalDetails.national_id,
      },
      {
        key: "7",
        name: "Payroll Number",
        detail: props.personalDetails.payroll,
      },
      {
        key: "8",
        name: "Status",
        detail: props.personalDetails.status,
      },
      {
        key: "9",
        name: "Location",
        detail: props.personalDetails.location,
      },
    ];
  }

  return (
    <Card type="inner" title="Personal Details" bodyStyle={{ padding: "0"}}>
      <Table columns={columns} dataSource={data} pagination={false} bordered />
    </Card>
  );
}
