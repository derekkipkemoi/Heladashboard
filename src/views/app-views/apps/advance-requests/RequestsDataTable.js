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

import RequestMenu from "./RequestMenu";
import CompaniesData from "assets/data/companies.json";
import { Link } from "react-router-dom";
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
    let data = [];
    // this.props.getUsers();
    data = this.props.users;
    this.setState({
      users: data,
    });
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      let data = [];
      data = this.props.users;
      this.setState({
        users: data,
      });
    }
  };

  filterData(inputValue) {
    const data = this.state.users;
    const filtered = data.filter(
      (item) =>
        item.first_name.includes(inputValue) ||
        item.middle_name.includes(inputValue) ||
        item.surname.includes(inputValue) ||
        item.email.includes(inputValue) ||
        item.phone.includes(inputValue) ||
        item.dob.includes(inputValue) ||
        item.created_at.includes(inputValue) ||
        item.national_id.includes(inputValue)
    );

    this.setState({
      users: filtered,
    });
  }

  onSearch = (event) => {
    const inputValue = event.target.value;
    this.filterData(inputValue);

    if (inputValue.length <= 0) {
      this.setState({
        users: this.props.users,
      });
    }
  };

  viewDetails = () => {
    const { match } = this.props;
    // this.props.history.push(
    //   `/app/apps/users/viewuser/${row.id}/${"details"}`
    // );
  };

  updateUser = () => {
    // this.props.history.push(
    //   `/app/apps/users/updateuser/${row.id}/${"updateprofile"}`
    // );
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
        <Menu.Item onClick={() => this.updateUser(row)}>
          <Flex alignItems="center">
            <EditOutlined />
            <span className="ml-2">Edit User</span>
          </Flex>
        </Menu.Item>
      </Menu>
    );

    const tableColumns = [
      {
        title: "#",
        dataIndex: "#",
      },
      {
        title: "Type",
        dataIndex: "type",
      },
      {
        title: "Borrower",
        dataIndex: "first_name",
        width: 150,
        render: (_, record) => (
          <div className="d-flex">
            <UserAvatar
              src={""}
              name={record.first_name + " " + record.surname}
              subTitle={record.email}
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
        title: "Datasheet No",
        dataIndex: "datasheet_no",
        width: 150,
      },
      {
        title: "National ID",
        dataIndex: "national_id",
        width: 150,
        sorter: (a, b) => parseInt(a.national_id) - parseInt(b.national_id),
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Payroll No",
        dataIndex: "payroll_no",
        width: 150,
      },
      {
        title: "Company",
        dataIndex: "company",
        width: 150,
      },
      {
        title: "Phone",
        dataIndex: "phone",
        width: 150,
        sorter: (a, b) => parseInt(a.phone) - parseInt(b.phone),
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Period",
        dataIndex: "period",
        width: 150,
        sorter: (a, b) => parseInt(a.period) - parseInt(b.period),
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Principal",
        dataIndex: "principal",
        width: 150,
        sorter: (a, b) => parseInt(a.principal) - parseInt(b.principal),
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Interest",
        dataIndex: "interest",
        width: 150,
        sorter: (a, b) => parseInt(a.interest) - parseInt(b.interest),
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Fee",
        dataIndex: "interest",
        width: 150,
        sorter: (a, b) => parseInt(a.interest) - parseInt(b.interest),
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Payable",
        dataIndex: "interest",
        width: 150,
        sorter: (a, b) => parseInt(a.interest) - parseInt(b.interest),
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Status",
        dataIndex: "user_status",
        width: 150,
        render: (status) => (
          <Tag
            className="text-capitalize"
            color={status === "active" ? "cyan" : "red"}
          >
            {status}
          </Tag>
        ),
      },
      {
        title: "Created At",
        dataIndex: "created_at",
        width: 150,
        render: (date) => <span>{moment(date).format("MM/DD/YYYY")} </span>,
        sorter: (a, b) =>
          moment(a.created_at).unix() - moment(b.created_at).unix(),
      },

      {
        title: "Updated At",
        dataIndex: "created_at",
        width: 150,
        render: (date) => <span>{moment(date).format("MM/DD/YYYY")} </span>,
        sorter: (a, b) =>
          moment(a.created_at).unix() - moment(b.created_at).unix(),
      },

      {
        title: "",
        dataIndex: "actions",
        fixed: "right",
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
            <Link to={{pathname:`/app/apps/advance-requests/advance-requests-menu`}}>Advance Requests</Link>
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
            <div>
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
            </div>

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

          <RequestMenu {...this.props} printPdf={this.printPdf} />
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

const mapStateToProps = ({}) => {
  const { users } = [];
  return {
    users,
  };
};

// const mapDispatchToProps = {
//   getUsers,
// };

export default connect(mapStateToProps, null)(RequestsDataTables);