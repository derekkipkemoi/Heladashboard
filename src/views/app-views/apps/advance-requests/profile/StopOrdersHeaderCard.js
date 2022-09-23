import React from "react";
import { Card, Avatar, Typography, Col, Row } from "antd";
import GeneralButtons from "./GeneralButtons";
import AdvanceRequestAvatar from "components/shared-components/AdvanceRequestAvatar";
import DownloadStopOrders from "./StopOrdersGeneralActions/DownloadStopOrders";
import GenerateDataSheetStopOrders from "./StopOrdersGeneralActions/GenerateDataSheetStopOrders";
import UpdateStopOrder from "./StopOrdersGeneralActions/UpdateStopOrder";
import NewMessageModal from "../../message/NewMessageModal";
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
  let status = "";
  if (props.personalDetails !== undefined) {
    status = props.personalDetails.status;
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
          {status === "pending" ? (
            <Col
              xs={24}
              sm={12}
              md={8}
              xl={6}
              xxl={6}
              style={{ paddingRight: "25px" }}
            >
              <UpdateStopOrder details={props.personalDetails} />
            </Col>
          ) : null}
          {status === "pending" || status === "declined" ? (
            <Col
              xs={24}
              sm={12}
              md={8}
              xl={6}
              xxl={6}
              style={{ paddingRight: "25px" }}
            >
              <GenerateDataSheetStopOrders
                details={props.personalDetails}
                companyDatasheets={props.companyDatasheets}
              />
            </Col>
          ) : null}

          {status === "pending" ? null : (
            <Col
              xs={24}
              sm={12}
              md={8}
              xl={6}
              xxl={6}
              style={{ paddingRight: "25px" }}
            >
              <DownloadStopOrders details={props.personalDetails} />
            </Col>
          )}
          <Col
            xs={24}
            sm={12}
            md={8}
            xl={6}
            xxl={6}
            style={{ paddingRight: "25px" }}
          >
            <NewMessageModal details={props.personalDetails} />
          </Col>
        </Row>
      </Card>
    </div>
  );
}
