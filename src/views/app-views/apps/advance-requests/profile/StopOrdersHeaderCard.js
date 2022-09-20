import React from "react";
import { Card, Avatar, Typography, Col, Row } from "antd";
import GeneralButtons from "./GeneralButtons";
import AdvanceRequestAvatar from "components/shared-components/AdvanceRequestAvatar";
import DownloadStopOrders from "./StopOrdersGeneralActions/DownloadStopOrders";
import GenerateDataSheetStopOrders from "./StopOrdersGeneralActions/GenerateDataSheetStopOrders";
import UpdateStopOrder from "./StopOrdersGeneralActions/UpdateStopOrder";
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
export default function StopOrdersHeaderCard(props) {
  let name = "";
  let company = "";
  let nameLetter = "";
  if (props.personalDetails !== undefined) {
    name =
      props.personalDetails.first_name + " " + props.personalDetails.surname;
    company = props.personalDetails.company;
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
        <Row>
        <Col
            xs={24}
            sm={12}
            md={8}
            xl={8}
            xxl={8}
            style={{ paddingRight: "25px" }}
          >
            <UpdateStopOrder details={props.personalDetails}/>
          </Col>
        <Col
            xs={24}
            sm={12}
            md={8}
            xl={8}
            xxl={8}
            style={{ paddingRight: "25px" }}
          >
            <GenerateDataSheetStopOrders details={props.personalDetails} />
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            xl={8}
            xxl={8}
            style={{ paddingRight: "25px" }}
          >
            <DownloadStopOrders {...props.personalDetails} />
          </Col>
        </Row>
      </Card>
    </div>
  );
}
