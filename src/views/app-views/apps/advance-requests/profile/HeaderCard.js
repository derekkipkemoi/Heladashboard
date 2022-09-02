import React from "react";
import { Card, Avatar, Typography } from "antd";
import GeneralButtons from "./GeneralButtons";
const { Text } = Typography;

const avatarStyle = {
  top: "-55px",
  left: "0%",
  backgroundColor: "#7c992c"
};
const detailsStyle = {
  display: "flex",
  height: "80px",
};
export default function HeaderCard(props) {
  let name = "";
  let company = "";
  let nameLetter = "";
  if (props.personalDetails !== undefined) {
    name = props.personalDetails.borrower;
    company = props.personalDetails.institution;
    let namel = name.replace(/ +(?= )/g, "");
    nameLetter =
      namel.split(" ")[0].charAt(0).toUpperCase() +
      namel.split(" ")[1].charAt(0).toUpperCase();
  }

  return (
    <div>
      <Card>
        <div style={detailsStyle}>
          <Avatar style={avatarStyle} shape="square" size={120}>
            <span style={{ fontSize: "30px" }}>{nameLetter}</span>
          </Avatar>
          <div style={{ marginLeft: "10px" }}>
            <Text style={{ fontSize: "20px" }} strong>
              {name}
            </Text>
            <br />
            <Text strong>Company: {company}</Text>
          </div>
        </div>

        <GeneralButtons />
      </Card>
    </div>
  );
}
