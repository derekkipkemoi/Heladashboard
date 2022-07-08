import React, { Component } from "react";
import { Menu, Button, Badge } from "antd";
import {
  OrderedListOutlined,
  ScheduleOutlined,
  StarOutlined,
  ProfileOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export class MailMenu extends Component {
  render() {
    const { match, location } = this.props;
    return (
      <div className="w-100">
        <div className="p-4">
          <Link to={`${match.url}/compose`}>
            <Button type="primary" block>
              <EditOutlined />
              <span>Compose</span>
            </Button>
          </Link>
        </div>
        <Menu
          defaultSelectedKeys={`${match.url}/all-messages/1`}
          mode="inline"
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key={`${match.url}/all-messages`}>
            <OrderedListOutlined />
            <span>All Messages</span>
            <Link to={`${match.url}/all-messages`} />
          </Menu.Item>
          {/* <Menu.Item key={`${match.url}/system-messages`}>
            <ProfileOutlined />
            <span>System Messages</span>
            <Link to={`${match.url}/system-messages`} />
          </Menu.Item>
          <Menu.Item key={`${match.url}/scheduled-messages`}>
            <ScheduleOutlined />
            <span>Scheduled Messages</span>
            <Link to={`${match.url}/scheduled-messages`} />
          </Menu.Item> */}

          <Menu.Item key={`${match.url}/template-messages`}>
            <ScheduleOutlined />
            <span>Template Messages</span>
            <Link to={`${match.url}/template-messages`} />
          </Menu.Item>

          <Menu.Item key={`${match.url}/reminder-messages`}>
            <ScheduleOutlined />
            <span>Reminder Messages</span>
            <Link to={`${match.url}/reminder-messages`} />
          </Menu.Item>

          {/* <Menu.Item key={`${match.url}/starred`}>
            <StarOutlined />
            <span>Starred</span>
            <Link to={`${match.url}/starred`} />
          </Menu.Item> */}
        </Menu>
      </div>
    );
  }
}

export default MailMenu;
