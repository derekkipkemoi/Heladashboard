import React, { Component } from "react";
import { Menu, Button} from "antd";
import {
  SafetyCertificateOutlined,
  UserSwitchOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export class RolesPermissionsMenu extends Component {
  render() {
    const { match, location } = this.props;
    return (
      <div className="w-100">
        <div className="p-3">
          <Link to={`${match.url}/newrole`}>
            <Button type="primary" block>
              <PlusOutlined />
              <span>Add Role</span>
            </Button>
          </Link>
        </div>
        <Menu
          defaultSelectedKeys={`${match.url}/roles/1`}
          mode="inline"
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key={`${match.url}/roles`}>
            <UserSwitchOutlined />
            <span>Roles</span>
            <Link to={`${match.url}/roles`} />
          </Menu.Item>
          <Menu.Item key={`${match.url}/permissions`}>
            <SafetyCertificateOutlined />
            <span>Permissions</span>
            <Link to={`${match.url}/permissions`} />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default RolesPermissionsMenu;
