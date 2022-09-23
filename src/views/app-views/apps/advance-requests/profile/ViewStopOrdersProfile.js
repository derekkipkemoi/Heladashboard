import React, { Component } from "react";

import { Col, Row, Card, Spin, Alert } from "antd";
import ActionButtons from "./ActionButtons";
import { connect } from "react-redux";
import { getStopOrdersUserData } from "redux/actions/AdvanceRequests";
import CommentsTable from "./CommentsTable";
import UserRequestsFiles from "./UserRequestsFiles";
import StopOrdersPersonalInformationCard from "./StopOrdersPersonaInformationCard";
import StopOrdersCommentsAndFilesMenu from "./CommentsAndFiles/StopOrdersCommentsAndFilesMenu";
import StopOrdersHeaderCard from "./StopOrdersHeaderCard";
import ActionButtonsStopOrders from "./ActionButtonsStopOrders";

class ViewStopOrdersProfile extends Component {
  state = {
    id: "",
    user: {},
    name: "",
    company: "",
    content: "comments",
  };
  componentDidMount() {
    const { id, content } = this.props.match.params;
    this.props.getStopOrdersUserData(id);

    this.setState({
      id: id,
      content,
      user: this.props.user,
    });
  }

  menuChange = (path) => {
    this.setState({
      content: path,
    });
  };
  render() {
    const { id } = this.state;

    return (
      <Card>
        {this.props.personalDetails === undefined ? (
          <Spin tip="Loading...">
            <Alert
              message="Loading Data"
              description="Please wait..."
              type="info"
            />
          </Spin>
        ) : (
          <div>
            <Row gutter={16} style={{ marginTop: "50px" }}>
              <Col xs={24} sm={24} md={24} xl={24} xxl={24}>
                <StopOrdersHeaderCard
                  personalDetails={this.props.personalDetails}
                  companyDatasheets={this.props.companyDatasheets}
                />
              </Col>
            </Row>
            <Row gutter={16} style={{ marginTop: "10px" }}>
              <Col
                className="gutter-row"
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                xxl={24}
              >
                <StopOrdersPersonalInformationCard
                  personalDetails={this.props.personalDetails}
                  companyDatasheets={this.props.companyDatasheets}
                />
              </Col>
              {/* <Col
            className="gutter-row"
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
          >
            <LoanInformationCard personalDetails={this.props.personalDetails} />
          </Col> */}
            </Row>

            <Row gutter={16} style={{ marginTop: "20px" }}>
              {/* <Col xs={24} sm={24} md={24} xl={12} xxl={12}>
            <GeneralButtons />
          </Col> */}
              <Col xs={24} sm={24} md={24} xl={24} xxl={24}>
                <ActionButtonsStopOrders userId={id} />
              </Col>
            </Row>

            <Card type="inner" title="Comments and Files">
              <StopOrdersCommentsAndFilesMenu
                {...this.props}
                menuChange={(value) => this.menuChange(value)}
              />
              {this.state.content === "comments" ? (
                <CommentsTable
                  data={this.props.userComments}
                  personalDetails={this.props.personalDetails}
                />
              ) : null}
              {/* {this.state.content === "registration-files" ? (
            <RegistrationFilesTables
              data={this.props.userRegistrationFiles}
              personalDetails={this.props.personalDetails}
            />
          ) : null} */}

              {this.state.content === "request-files" ? (
                <UserRequestsFiles
                  data={this.props.userRequestFiles}
                  personalDetails={this.props.personalDetails}
                />
              ) : null}
            </Card>
          </div>
        )}
      </Card>
    );
  }
}

const mapStateToProps = ({ advanceRequest }) => {
  const { stopOrdersUserData } = advanceRequest;

  const personalDetails = stopOrdersUserData.request;
  const userComments = stopOrdersUserData.comments;
  const companyDatasheets = stopOrdersUserData.companyDatasheets;
  // const userRegistrationFiles = userRequestData.userRegistrationFiles;
  const userRequestFiles = stopOrdersUserData.uploadedFiles;
  console.log("Data in stop orders");
  return {
    personalDetails,
    userComments,
    companyDatasheets,
    userRequestFiles,
  };
};

const mapDispatchToProps = {
  getStopOrdersUserData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewStopOrdersProfile);
