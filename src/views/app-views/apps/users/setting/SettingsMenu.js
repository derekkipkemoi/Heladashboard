import { Menu } from "antd";
import React, { Component } from "react";

import {UserOutlined, LockOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";

class SettingsMenu extends Component {
  state = {};
  render() {
    const { match, location } = this.props;

    console.log("Match url", match.url)
    return (
      <Menu
        defaultSelectedKeys={`${match.url}/updateuser`}
        mode="inline"
        selectedKeys={[location.pathname]}
      >
        <Menu.Item key={`updateprofile`}>
          <UserOutlined />
          <span>Edit Profile</span>
          <Link
            to={{
              pathname: `updateprofile`,
            }}
          ></Link>
        </Menu.Item>
        <Menu.Item key={`change-password`}>
          <LockOutlined />
          <span>Change Password</span>
          <Link
            to={{
              pathname: `change-password`,
            }}
          ></Link>
        </Menu.Item>
        {/* <Menu.Item key={`${match.url}/billing`}>
				<CreditCardOutlined />
				<span>Billing</span>
				<Link to={`${match.url}?id=billing`} />
			</Menu.Item>
			<Menu.Item key={`${match.url}/notification`}>
				<BellOutlined />
				<span>Notification</span>
				<Link to={`${match.url}?id=notification`} />
			</Menu.Item> */}
      </Menu>
    );
  }
}

export default SettingsMenu;
