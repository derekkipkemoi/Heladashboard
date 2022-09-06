import { useState, useEffect } from "react";
import { Button, Modal, Form, Input, Space, Typography } from "antd";
import { CheckCircleOutlined, DownloadOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { deactivateUser } from "redux/actions/Users";

function DeactivateUser() {
  return (
    <div>
      <Button
        block
        style={{
          backgroundColor: "#fba615",
          color: "white",
        }}
      >
        Download Application
      </Button>
    </div>
  );
}

const mapStateToProps = ({ usersList }) => {
  const { loadingUser, message } = usersList;
  return {
    loadingUser,
    message,
  };
};

const mapDispatchToProps = {
  deactivateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeactivateUser);
