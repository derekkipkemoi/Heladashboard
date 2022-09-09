import React from "react";
import { Card, Avatar, Typography } from "antd";
import GeneralButtons from "./GeneralButtons";
import AdvanceRequestAvatar from "components/shared-components/AdvanceRequestAvatar";
const { Text } = Typography;

const avatarStyle = {
  top: "-55px",
  left: "0%",
  backgroundColor: "#7c992c",
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
          <AdvanceRequestAvatar name={nameLetter} size={120} />

          <div style={{ marginLeft: "10px" }}>
            <Text style={{ fontSize: "20px" }} strong>
              {name.toUpperCase()}
            </Text>
            <br />
            <Text>
              <Text strong>COMPANY</Text>: {company}
            </Text>
          </div>
        </div>

        <GeneralButtons {...props}/>
      </Card>
    </div>
  );
}
