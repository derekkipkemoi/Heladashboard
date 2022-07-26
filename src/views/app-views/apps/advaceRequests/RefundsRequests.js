import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Avatar,
} from "antd";
import { RefundsData } from "./RefundsData";
const { Meta } = Card;

class RefundsRequests extends Component {
  state = {};
  render() {
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
        <Row gutter={16}>
          {RefundsData.map((elm, i) => (
            <Col xs={24} sm={12} md={12} lg={6} xl={6} key={i}>
              <Card type="flex" align="middle">
                <p>
                  <Avatar
                    size={54}
                    style={{
                      backgroundColor: "#fff",
                      boxShadow: "1px 6px 5px 0px rgba(208, 216, 243, 0.6)",
                    }}
                    icon={<elm.icon style={{color: generateHSL(elm.title)}} />}
                  />
                </p>
                <Meta description={elm.title}/>
                <Meta title={"Count " + "("+ elm.value + ")"} />
                <Meta title={"Ksh " + elm.amount}/>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default RefundsRequests;
