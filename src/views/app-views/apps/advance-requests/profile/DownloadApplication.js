import { Button, message } from "antd";
import { connect } from "react-redux";
import { downloadApplication } from "redux/actions/AdvanceRequests";
import React, { Component } from "react";
import { CSVLink } from "react-csv";

class DowmloadApplication extends Component {
  state = {
    data: [],
  };

  applicationDownload = () => {
    const { personalDetails } = this.props;
    this.props.downloadApplication(personalDetails.id);
    <CSVLink
      filename={"Weeklyreport.csv"}
      data={Object.entries(this.props.downloadedApplication)}
    />;
    message.success("Application downloaded successfuly");
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <Button
          block
          style={{
            backgroundColor: "#fba615",
            color: "white",
          }}
          onClick={this.applicationDownload}
        >
          Download Application
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ advanceRequest }) => {
  const { downloadedApplication } = advanceRequest;
  return {
    downloadedApplication,
  };
};

const mapDispatchToProps = {
  downloadApplication,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DowmloadApplication);
