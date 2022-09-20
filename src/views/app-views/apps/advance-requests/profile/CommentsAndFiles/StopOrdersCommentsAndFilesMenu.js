import React, { Component } from "react";
import { Menu } from "antd";

import { data } from "./StopOrdersCommentsAndFilesData";

class StopOrdersCommentsAndFilesMenu extends Component {
  changeMenu = (path) => {
    this.setState({
      path,
    });
    this.props.menuChange(path);
  };

  state = {
    path: "comments",
  };

  render() {
    const { path } = this.state;
    return (
      <div>
        <Menu selectedKeys={path} mode="horizontal">
          {data.map((dataItem, i) => {
            return (
              <Menu.Item
                key={dataItem.pathname}
                icon={dataItem.icon}
                onClick={(e) => this.changeMenu(dataItem.pathname)}
              >
                {dataItem.name}
              </Menu.Item>
            );
          })}
        </Menu>
      </div>
    );
  }
}

export default StopOrdersCommentsAndFilesMenu;
