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
  state = {};
  render() {
    return (
      <Menu onClick={this.handleClick} mode="horizontal">
        <Menu.Item key="user-details" icon={<UserOutlined />}>
          <Link
            to={{
              pathname: `details`,
            }}
          >
            User Details
          </Link>
        </Menu.Item>
        <Menu.Item key="registration-files" icon={<FileSyncOutlined />}>
          <Link
            to={{
              pathname: `registration-files`,
            }}
          >
            User Registration Files
          </Link>
        </Menu.Item>
        <Menu.Item key="request-files" icon={<FileSyncOutlined />}>
          <Link
            to={{
              pathname: `request-files`,
            }}
          >
            User Request Files
          </Link>
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
        <Menu.Item key="crb-report" icon={<DollarOutlined />}>
          <Link
            to={{
              pathname: `crb`,
            }}
          >
            CRB Report
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default ProfileMenu;
