import React, { Component } from "react";
import { Menu, Button, Card } from "antd";
import {
  FileSyncOutlined,
  DollarOutlined,
  UserOutlined,
  PlusOutlined,
  UploadOutlined,
  CommentOutlined,
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
      <Card type="inner" title="Comments and Files">
      <Menu selectedKeys={[content]} mode="horizontal">
        <Menu.Item key="details" icon={<CommentOutlined />}>
          <Link
            to={{
              pathname: `comments`,
            }}
          ></Link>
          Comments
        </Menu.Item>
        <Menu.Item key="registration-files" icon={<FileSyncOutlined />}>
          <Link
            to={{
              pathname: `registration-files`,
            }}
          ></Link>
          Registration Files
        </Menu.Item>
        <Menu.Item key="request-files" icon={<FileSyncOutlined />}>
          <Link
            to={{
              pathname: `request-files`,
            }}
          ></Link>
          Request Files
        </Menu.Item>
        <Menu.Item key="add-comment">
          <Button type="primary" style={{ background: "#00ab6f", borderColor: "white" }} icon={<PlusOutlined />}>Comment</Button>
        </Menu.Item>
        <Menu.Item key="add-request-files">
        <Button type="primary" style={{ background: "#00ab6f", borderColor: "white" }} icon={<PlusOutlined />}>Request File</Button>
        </Menu.Item>
        <Menu.Item key="add-registration-files">
        <Button type="primary" style={{ background: "#00ab6f", borderColor: "white" }} icon={<PlusOutlined />}>Registration File</Button>
        </Menu.Item>
      </Menu>
      </Card>
    );
  }
}

export default ProfileMenu;
