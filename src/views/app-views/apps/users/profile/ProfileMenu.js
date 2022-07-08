import React, { Component } from "react";
import { Menu } from "antd";
import {
  FileSyncOutlined,
  DollarOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
class ProfileMenu extends Component {
  // state = {
  //   current: "user-details",
  // };
  // handleClick = (e) => {
  //   console.log("click ", e.key);
  //   this.setState({ current: e.key });
  // };

  componentDidMount = () => {
    const { content } = this.props.match.params;
    console.log("content", content);
  };

  render() {
    const { content } = this.props.match.params;
    return (
      <Menu selectedKeys={[content]} mode="horizontal">
        <Menu.Item key="details" icon={<UserOutlined />}>
          <Link
            to={{
              pathname: `details`,
            }}
          ></Link>
          User Details
        </Menu.Item>
        <Menu.Item key="registration-files" icon={<FileSyncOutlined />}>
          <Link
            to={{
              pathname: `registration-files`,
            }}
          ></Link>
          User Registration Files
        </Menu.Item>
        <Menu.Item key="request-files" icon={<FileSyncOutlined />}>
          <Link
            to={{
              pathname: `request-files`,
            }}
          ></Link>
          User Request Files
        </Menu.Item>
        {/* <Menu.Item key="user-salary-advances" icon={<DollarOutlined />}>
          <Link
            to={{
              pathname: `advances`,
            }}
          >
            User Salary Advances
          </Link>
        </Menu.Item> */}
        <Menu.Item key="crb" icon={<DollarOutlined />}>
          <Link
            to={{
              pathname: `crb`,
            }}
          ></Link>
          CRB Report
        </Menu.Item>
      </Menu>
    );
  }
}

export default ProfileMenu;
