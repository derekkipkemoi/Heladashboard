import React, { Component } from "react";
import {
  Card,
  Table,
  Tag,
  Input,
  message,
  Row,
  Menu,
  Typography,
  Select,
  Button,
  DatePicker,
  Breadcrumb,
} from "antd";
import { EyeOutlined, CheckOutlined, EditOutlined } from "@ant-design/icons";
import moment from "moment";
import UserAvatar from "components/shared-components/UserAvatar";
import Flex from "components/shared-components/Flex";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import { connect } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { getUsers } from "redux/actions/Users";

import RequestMenu from "./RequestMenu";
import CompaniesData from "assets/data/companies.json";
import { Link } from "react-router-dom";
import { getRequestsData } from "redux/actions/AdvanceRequests";
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Text } = Typography;
const dateFormat = "YYYY/MM/DD";
export class RequestsDataTables extends Component {
  state = {
    users: [],
    userProfileVisible: false,
    selectedUser: null,
    printPdf: this.props.printPdf,
    dataPath: "",
  };

  deleteUser = (userId) => {
    this.setState({
      users: this.state.users.filter((item) => item.id !== userId),
    });
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  showUserProfile = (userInfo) => {
    this.setState({
      userProfileVisible: true,
      selectedUser: userInfo,
    });
  };

  closeUserProfile = () => {
    this.setState({
      userProfileVisible: false,
      selectedUser: null,
    });
  };

  printPdf = () => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
    message.success("Pdf file generated successfuly");
  };

  componentDidMount() {
    const { dataPath } = this.props.location.state;
    let data = [];
    this.props.getRequestsData(dataPath);
    data = this.props.users;
    this.setState({
      users: data,
      dataPath: dataPath,
    });
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      let data = [];
      const { dataPath } = this.props.location.state;
      this.props.getRequestsData(dataPath);
      data = this.props.users;
      this.setState({
        users: data,
        dataPath: dataPath,
      });
    }
  };

  viewDetails = (row) => {
    const { match } = this.props;
    this.props.history.push(
      `/app/apps/advance-requests/view-user-data/${row.id}/comments`
    );
  };

  render() {
    let { users } = this.state;
    const { name, subname, path } = this.props.location.state;
    const dropdownMenu = (row) => (
      <Menu>
        <Menu.Item onClick={() => this.viewDetails(row)}>
          <Flex alignItems="center">
            <EyeOutlined />
            <span className="ml-2">View User</span>
          </Flex>
        </Menu.Item>
      </Menu>
    );

    const tableColumns = [
      {
        title: "Ref No",
        dataIndex: "loan_no",
        width: 150,
      },
      {
        title: "Borrower",
        dataIndex: "first_name",
        width: 300,
        render: (_, record) => (
          <div className="d-flex">
            <UserAvatar
              src={""}
              name={record.first_name + " " + record.surname}
            />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.first_name.toLowerCase();
            b = b.first_name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },

      {
        title: "Institution",
        dataIndex: "company",
        width: 200,
      },

      {
        title: "Payroll No",
        dataIndex: "payroll_no",
        width: 150,
        sorter: (a, b) => parseInt(a.payroll_no) - parseInt(b.payroll_no),
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Amount",
        dataIndex: "amount",
        width: 150,
      },
      {
        title: "Period",
        dataIndex: "period",
        width: 150,
      },

      {
        title: "Status",
        dataIndex: "status",
        width: 100,
        render: (status) => (
          <Tag
            className="text-capitalize"
            color={status !== "0" ? "cyan" : "red"}
          >
            {status}
          </Tag>
        ),
      },
      {
        title: "Date Created",
        dataIndex: "created_at",
        width: 150,
        render: (date) => <span>{moment(date).format("MM/DD/YYYY")} </span>,
        sorter: (a, b) =>
          moment(a.created_at).unix() - moment(b.created_at).unix(),
      },

      // {
      //   title: "Updated At",
      //   dataIndex: "created_at",
      //   width: 150,
      //   render: (date) => <span>{moment(date).format("MM/DD/YYYY")} </span>,
      //   sorter: (a, b) =>
      //     moment(a.created_at).unix() - moment(b.created_at).unix(),
      // },

      {
        title: "",
        dataIndex: "actions",
        fixed: "right",
        width: 50,
        render: (_, elm) => (
          <div className="text-right">
            <EllipsisDropdown menu={dropdownMenu(elm)} />
          </div>
        ),
      },
    ];
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link
              to={{
                pathname: `/app/apps/advance-requests/advance-requests-menu`,
              }}
            >
              Advance Requests
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link
              to={{
                pathname: `/app/apps/advance-requests/${path}`,
                state: { name: name, path: path },
              }}
            >
              {name}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{subname}</Breadcrumb.Item>
        </Breadcrumb>
        <Card>
          <Row>
            {/* <div>
              <Select
                className="mb-4"
                placeholder="Select company to send message"
                onChange={this.handleCompanyChange}
              >
                {CompaniesData.map((company) => (
                  <Option key={company.value}>{company.label}</Option>
                ))}
              </Select>
              <Button type="primary" style={{ marginLeft: "20px" }}>
                Assume Client Role
              </Button>
            </div> */}

            <div style={{ marginLeft: "20px" }}>
              <RangePicker
                defaultValue={[
                  moment("2015/01/01", dateFormat),
                  moment("2015/01/01", dateFormat),
                ]}
                format={dateFormat}
              />
              <Button type="primary" style={{ marginLeft: "20px" }}>
                Smart Query
              </Button>
            </div>
          </Row>

          <Card
            id="capture"
            bodyStyle={{ padding: "0" }}
            style={{
              margin: 0,
              borderRadius: 0,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
            bordered={false}
          >
            <Row
              justify="start"
              style={{
                paddingRight: "20px",
                paddingLeft: "20px",
                paddingTop: "15px",
              }}
            >
              <div>
                <Input
                  size="small"
                  placeholder="Search"
                  onChange={(e) => {
                    this.onSearch(e);
                  }}
                />
              </div>
              <Button
                type="primary"
                style={{
                  marginLeft: "20px",
                  height: "35px",
                  padding: "0",
                  backgroundColor: "#fff",
                  borderColor: "#e6ebf1",
                  width: "180px",
                }}
              >
                <RequestMenu {...this.props} printPdf={this.printPdf} />
              </Button>
            </Row>
            <div className="table-responsive">
              <Table
                columns={tableColumns}
                dataSource={users}
                rowKey="id"
                scroll={{ x: 1200 }}
              />
            </div>
          </Card>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ advanceRequest }) => {
  const { requestsData } = advanceRequest;
  return {
    users: requestsData,
  };
};

const mapDispatchToProps = {
  getRequestsData,
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestsDataTables);
