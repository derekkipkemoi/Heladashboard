import React, { Component } from "react";
import { Row, Col, Card, Avatar } from "antd";
import { MenuData } from "./MenuData";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAdvanceRequestMainMenu } from "redux/actions/AdvanceRequests";
import {
  ArrowUpOutlined,
  CheckOutlined,
  StopOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

class MainMenu extends Component {
  state = {};

  componentDidMount = () => {
    this.props.getAdvanceRequestMainMenu();
  };
  render() {
    const hRange = [150, 30];
    const sRange = [50, 200];
    const lRange = [0, 65];
    const getHashOfString = (str) => {
      let hash = 0;
      for (let i = 3; i < str.length; i++) {
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
        <Row gutter={16}>
          {this.props.menuDataList.map((elm, i) => (
            <Col xs={24} sm={12} md={12} lg={6} xl={6} xxl={4} key={i}>
              <Link
                to={{
                  pathname: elm.path,
                  state: { name: elm.title, path: elm.path },
                }}
              >
                <Card type="flex" align="middle">
                  <p>
                    <Avatar
                      size={54}
                      style={{
                        backgroundColor: "#fff",
                        boxShadow: `0.5px 5px 5px 0px ${generateHSL(
                          elm.title
                        )}`,
                      }}
                      icon={
                        <elm.icon style={{ color: generateHSL(elm.title) }} />
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
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ advanceRequest }) => {
  let { advanceRequestMainMenu } = advanceRequest;
  let listedMenuList = Object.entries(advanceRequestMainMenu);
  let menuDataList = []
  function createData(title, path, value, amount, icon) {
    return {
      title,
      path,
      value,
      amount,
      icon,
    };
  }

  const menuData = [
    {
      title: "Normal Requests",
      path: "normal-requests",
      icon: CheckOutlined,
    },
    {
      title: "Stop Orders",
      path: "stop-orders-requests",
      icon: StopOutlined,
    },
    {
      title: "TSC Requests",
      path: "tsc-requests",
      icon: CheckOutlined,
    },
    {
      title: "Top Ups",
      path: "topups-requests",
      icon: ArrowUpOutlined,
    },
    {
      title: "Refunds",
      path: "refunds-requests",
      icon: ArrowDownOutlined,
    },
  ];

  for (let index = 0; index < listedMenuList.length; index++) {
    const element = listedMenuList[index];
    let firstList = createData(
      element[0],
      menuData[index].path,
      element[1].count,
      element[1].total,
      menuData[index].icon
    );

    menuDataList.push(firstList)
    
  }
  return {
    menuDataList,
  };
};

const mapDispatchToProps = {
  getAdvanceRequestMainMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
