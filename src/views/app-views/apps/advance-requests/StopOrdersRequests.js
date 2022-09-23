import React, { Component } from "react";
import { Row, Col, Card, Avatar, Breadcrumb, Spin, Alert } from "antd";
import { Link } from "react-router-dom";
import { menuData } from "./StopOrdersData";
import { connect } from "react-redux";
import { stopOrdersData, stopOrdersMenu } from "redux/actions/AdvanceRequests";
import { FileOutlined } from "@ant-design/icons";
const { Meta } = Card;

class StopOrdersRequests extends Component {
  state = {};
  componentDidMount = () => {
    this.props.stopOrdersMenu();
  };
  render() {
    const { name, path } = this.props.location.state;
    const hRange = [150, 30];
    const sRange = [50, 200];
    const lRange = [0, 65];
    const getHashOfString = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      hash = Math.abs(hash);
      return hash;
    };

    const normalizeHash = (hash, min, max) => {
      return Math.floor((hash % (max - min)) + min);
    };
    const generateHSL = (name) => {
      const hash = getHashOfString(name);
      const h = normalizeHash(hash, hRange[0], hRange[1]);
      const s = normalizeHash(hash, sRange[0], sRange[1]);
      const l = normalizeHash(hash, lRange[0], lRange[1]);

      return `hsl(${h}, ${s}%, ${l}%)`;
    };

    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link
              to={{
                pathname: `/app/apps/advance-requests/advance-requests-menu`,
              }}
            >
              Advance Requests
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{name}</Breadcrumb.Item>
        </Breadcrumb>
        {this.props.menuDataList.length < 1 ? (
          <Spin tip="Loading...">
            <Alert
              message="Loading Data"
              description="Please wait..."
              type="info"
            />
          </Spin>
        ) : (
          <Row gutter={16}>
            {this.props.menuDataList.map((elm, i) => (
              <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={4} key={i}>
                <Link
                  to={{
                    pathname: `/app/apps/advance-requests/view-stop-orders/${elm.path}`,
                    state: { name: name, subname: elm.title, path: elm.path },
                  }}
                >
                  <Card type="flex" align="middle">
                    <p>
                      <Avatar
                        size={54}
                        style={{
                          backgroundColor: "#fff",
                          boxShadow: `0.5px 5px 5px 0px ${elm.color}`,
                        }}
                        icon={
                          <elm.icon style={{ color:elm.color}} />
                        }
                      />
                    </p>
                    <p style={{ margin: "0", marginBottom: "10px" }}>
                      {elm.title}
                    </p>
                    <Meta title={"Count " + ": " + elm.value} />
                    <p
                      style={{
                        fontWeight: "bold",
                        margin: "0",
                        marginTop: "10px",
                        fontSize: "18px",
                      }}
                    >
                      Ksh : {elm.amount}
                    </p>
                  </Card>
                </Link>
              </Col>
            ))}
            <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={4}>
              <Link
                to={{
                  pathname: `/app/apps/advance-requests/generate-stop-order`,
                }}
              >
                <Card type="flex" align="middle">
                  <p>
                    <Avatar
                      size={54}
                      style={{
                        backgroundColor: "#fff",
                        boxShadow: "0.5px 5px 5px 0px #3e79f7",
                      }}
                      icon={
                        <FileOutlined
                          style={{ color: "#3e79f7" }}
                        />
                      }
                    />
                  </p>
                  <p style={{ margin: "0", marginBottom: "10px" }}>
                    {"Generate"}
                  </p>
                  <Meta title="Generate Stop Order" />
                  <p
                    style={{
                      fontWeight: "bold",
                      margin: "0",
                      marginTop: "10px",
                      fontSize: "18px",
                    }}
                  >
                    <span></span>
                  </p>
                </Card>
              </Link>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ advanceRequest }) => {
  let { stopOrdersMenuData } = advanceRequest;
  let listedMenuList = Object.entries(stopOrdersMenuData);
  let menuDataList = [];

  function createData(title, path, value, amount, icon, color) {
    return {
      title,
      path,
      value,
      amount,
      icon,
      color
    };
  }

  for (let index = 0; index < listedMenuList.length; index++) {
    const element = listedMenuList[index];
    let firstList = createData(
      element[0],
      menuData[index].path,
      element[1].count,
      element[1].totals,
      menuData[index].icon,
      menuData[index].color
    );
    menuDataList.push(firstList);
  }
  return {
    menuDataList,
  };
};

const mapDispatchToProps = {
  stopOrdersMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(StopOrdersRequests);
