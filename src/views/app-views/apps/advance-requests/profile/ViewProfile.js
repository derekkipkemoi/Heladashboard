import React, { Component } from "react";

import { Col, Row, Card, Typography } from "antd";
import PersonalInformationCard from "./PersonalInformationCard";
import LoanInformationCard from "./LoanInformationCard";
import ActionButtons from "./ActionButtons";
import { connect } from "react-redux";
import { getUserRequestsData } from "redux/actions/AdvanceRequests";
import HeaderCard from "./HeaderCard";
import CommentsTable from "./CommentsTable";
import RegistrationFilesTables from "./RegistrationFilesTables";
import UserRequestsFiles from "./UserRequestsFiles";
import CommentsAndFilesMenu from "./CommentsAndFiles/CommentsAndFilesMenu";

class ViewProfile extends Component {
  state = {
    id: "",
    user: {},
    name: "",
    company: "",
    content: "comments",
  };
  componentDidMount() {
    const { id, content } = this.props.match.params;
    console.log("Id and content", id, content);
    this.props.getUserRequestsData(id);

    this.setState({
      id: id,
      content,
      user: this.props.user,
    });
  }
  render() {
    const { id } = this.state;

    return (
      <Card>
        <Row gutter={16} style={{ marginTop: "50px" }}>
          <Col xs={24} sm={24} md={24} xl={24} xxl={24}>
            <HeaderCard personalDetails={this.props.personalDetails} />
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: "10px" }}>
          <Col
            className="gutter-row"
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
          >
            <PersonalInformationCard
              personalDetails={this.props.personalDetails}
            />
          </Col>
          <Col
            className="gutter-row"
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
          >
            <LoanInformationCard loanDetails={this.props.personalDetails} />
          </Col>
        </Row>

        <Row gutter={16} style={{ marginTop: "20px" }}>
          {/* <Col xs={24} sm={24} md={24} xl={12} xxl={12}>
            <GeneralButtons />
          </Col> */}
          <Col xs={24} sm={24} md={24} xl={24} xxl={24}>
            <ActionButtons userId={id} />
          </Col>
        </Row>

        <Card type="inner" title="Comments and Files">
          <CommentsAndFilesMenu {...this.props} />
          {this.state.content === "comments" ? (
            <CommentsTable data={this.props.userComments} />
          ) : null}
          {this.state.content === "registration-files" ? (
            <RegistrationFilesTables data={this.props.userRegistrationFiles} />
          ) : null}

          {this.state.content === "request-files" ? (
            <UserRequestsFiles data={this.props.userRegistrationFiles} />
          ) : null}
        </Card>
      </Card>
    );
  }
}

const mapStateToProps = ({ advanceRequest }) => {
  const { userRequestData } = advanceRequest;
  const user = userRequestData;
  const personalDetails = userRequestData.request;
  const userComments = userRequestData.comments;
  const userRegistrationFiles = userRequestData.userRegistrationFiles;
  return {
    user,
    personalDetails,
    userComments,
    userRegistrationFiles,
  };
};

const mapDispatchToProps = {
  getUserRequestsData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
