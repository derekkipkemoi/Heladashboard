import React from "react";
import LoginForm from "../../components/LoginForm";
import { Row, Col, Card } from "antd";
import { useSelector } from "react-redux";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

const backgroundURL = "/img/others/bg2.png";
const backgroundStyle = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const backgroundCardOne = {
  backgroundColor: "#fff",
  borderRadius: "15px 0px 0px 15px",
  padding: "20px",
};

const backgroundCardTwo = {
  backgroundColor: "#fff",
  borderRadius: "0px 15px 15px 0px",
  borderColor: "#7b8f2c",
  padding: "20px",
  borderStyle: "solid",
  borderWidth: "0px 0px 0px 10px"
};

const LoginTwo = (props) => {
  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    // <div className={`h-100 ${theme === "light" ? "bg-white" : ""}`}>
    <div className={`h-100`} style={{ backgroundColor: "#f3d88c" }}>
      <div className="container d-flex flex-column justify-content-center h-100">
        <Row justify="center">
          <Col xs={24} sm={24} md={20} lg={12} xl={8} style={backgroundCardOne}>
            <div className="text-center">
              <img
                src="/img/others/logo.png"
                alt=""
                style={{ width: "100px", height: "100px" }}
              />
            </div>

            <h1 className="text-center">Sign In</h1>
            {/* <p>Don't have an account yet? <a href="/auth/register-2">Sign Up</a></p> */}

            <LoginForm {...props} />
          </Col>

          <Col xs={0} sm={0} md={0} lg={8} style={backgroundCardTwo}>
            <img
              className="img-fluid mb-5"
              src="/img/others/artwork.png"
              alt=""
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginTwo;
