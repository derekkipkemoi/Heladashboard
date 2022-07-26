import React from "react";
import { Menu, message } from "antd";
import {
  FileOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import { CSVLink } from "react-csv";

const { SubMenu } = Menu;

class RequestMenu extends React.Component {
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
    let data = this.props.data;
    const { match, location } = this.props;
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="pb-3 pl-3 pt-3"
      >
        
        <SubMenu key="SubMenu" icon={<FileOutlined />} title="Generate File">
          <Menu.ItemGroup title="Generate By File Type">
            <Menu.Item key="excel">
              <FileExcelOutlined
                style={{ paddingRight: "10px", color: "#389e0d" }}
              />{" "}
              <CSVLink
                filename={"data.csv"}
                data={data}
                onClick={() => {
                  message.success("Excel file generated successfuly");
                }}
              >
                Generate Excel File
              </CSVLink>
            </Menu.Item>
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
      </Menu>
    );
  }
}

const mapStateToProps = ({  }) => {
  const { data } = [];
  return {
    data,
  };
};

export default connect(mapStateToProps)(RequestMenu);
