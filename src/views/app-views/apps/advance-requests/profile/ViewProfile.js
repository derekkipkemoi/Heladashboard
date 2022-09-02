import React, { Component } from "react";

import { Col, Row, Card, Typography } from "antd";
import PersonalInformationCard from "./PersonalInformationCard";
import LoanInformationCard from "./LoanInformationCard";
import ActionButtons from "./ActionButtons";
import ProfileMenu from "./ProfileMenu";
import { connect } from "react-redux";
import { getUserRequestsData } from "redux/actions/AdvanceRequests";
import HeaderCard from "./HeaderCard";


class ViewProfile extends Component {
  state = {
    id: "",
    user: {},
    name: "",
    company: "",
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getUserRequestsData(id);

    this.setState({
      id: id,
      user: this.props.user,
    });
  }
  render() {
    const {id} = this.state

    return (
      <Card>
        <Row gutter={16} style={{ marginTop: "50px" }}>
          <Col xs={24} sm={24} md={24} xl={24} xxl={24}>
            <HeaderCard personalDetails={this.props.personalDetails}/>
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
            <ActionButtons userId={id}/>
          </Col>
        </Row>

        <ProfileMenu {...this.props} />
      </Card>
    );
  }
}

const mapStateToProps = ({ advanceRequest }) => {
  const { userRequestData } = advanceRequest;
  const user = userRequestData;
  const personalDetails = userRequestData.request;
  return {
    user,
    personalDetails,

  };
};

const mapDispatchToProps = {
  getUserRequestsData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile);
