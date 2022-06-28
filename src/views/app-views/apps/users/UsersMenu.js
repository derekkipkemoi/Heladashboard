import React from "react";
import { Menu, Button, message } from "antd";
import {
  UserAddOutlined,
  FileOutlined,
  FilterOutlined,
  FileExcelOutlined,
  FileWordOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CSVLink } from "react-csv";

const { SubMenu } = Menu;

class UserMenu extends React.Component {
  state = {
    printPdf: 0,
  };

  handleClick = (e) => {
    this.setState({
      printPdf: this.state.printPdf + 1,
    });
  };

  componentDidMount() {
    this.setState({
      printPdf: this.state.printPdf + 1,
    });
  }

  render() {
    let users = this.props.users;
    const { match, location } = this.props;
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="pb-3 pl-3 pt-3"
      >
        <Link to={`${match.url}/compose`}>
          <Button type="primary" block>
            <UserAddOutlined />
            <span>Add New User</span>
          </Button>
        </Link>
        <SubMenu key="SubMenu" icon={<FileOutlined />} title="Generate File">
          <Menu.ItemGroup title="Generate By File Type">
            <Menu.Item key="excel">
              <FileExcelOutlined
                style={{ paddingRight: "10px", color: "#389e0d" }}
              />{" "}
              <CSVLink
                filename={"Users.csv"}
                data={users}
                onClick={() => {
                  message.success("Excel file generated successfuly");
                }}
              >
                Generate Excel File
              </CSVLink>
            </Menu.Item>
            {/* <Menu.Item key="word">
              <FileWordOutlined
                style={{ paddingRight: "10px", color: "#4E89FF" }}
              />{" "}
              Generate Word File
            </Menu.Item> */}
            <Menu.Item
              key="pdf"
              onClick={(e) => {
                this.props.printPdf(this.state.printPdf);
              }}
            >
              <FilePdfOutlined
                style={{ paddingRight: "10px", color: "#f5222d" }}
              />{" "}
              Generate Pdf File
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="alipay"
          icon={<FilterOutlined />}
          title="Filter By Status"
        >
          <Menu.ItemGroup title="Filter By Status">
            <Menu.Item key="active-users">
              <Link
                to={{
                  pathname: `active`,
                }}
                style={{ color: "#389e0d" }}
              >
                Active Users
              </Link>
            </Menu.Item>
            <Menu.Item key="new-users">
              <Link
                to={{
                  pathname: `new`,
                }}
                style={{ color: "#fadb14" }}
              >
                New Users
              </Link>
            </Menu.Item>
            <Menu.Item key="declined-users">
              <Link
                to={{
                  pathname: `declined`,
                }}
                style={{ color: "#f5222d" }}
              >
                Declined Users
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}

const mapStateToProps = ({ usersList }) => {
  const { users } = usersList;
  return {
    users,
  };
};

export default connect(mapStateToProps)(UserMenu);
