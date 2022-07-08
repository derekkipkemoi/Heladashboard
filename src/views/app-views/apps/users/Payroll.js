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
  Button,
} from "antd";
import {
  EyeOutlined,
  StopOutlined,
  CheckOutlined,
  EditOutlined,
} from "@ant-design/icons";
import moment from "moment";
import UserView from "./UserView";
import UserAvatar from "components/shared-components/UserAvatar";
import Flex from "components/shared-components/Flex";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import { connect } from "react-redux";
import { getUsers } from "redux/actions/Users";
import { payRollRegistration } from "redux/actions/Payroll";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import UsersMenu from "./UsersMenu";
import UsersDashboard from "./userDashboard";
import DeclineUser from "./profile/DeclineUser";
const { Text } = Typography;
export class Payroll extends Component {
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

  printPdf = (value) => {
    // html2canvas(document.querySelector("#capture")).then((canvas) => {
    //   document.body.appendChild(canvas); // if you want see your screenshot in body.
    //   const imgData = canvas.toDataURL("image/png");
    //   const pdf =  new jsPDF('p', 'mm', 'a4', true);
    //   pdf.addImage(imgData, "PNG", 0, 0);
    //   pdf.save("download.pdf");
    // });
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

  // componentDidUpdate = (prevProps) => {
  //   if (this.props !== prevProps) {
  //     let data = [];
  //     this.props.getUsers();
  //     data = this.props.users;
  //     this.setState({
  //       users: data,
  //     });
  //   }
  // };
  componentDidMount() {
    let data = [];
    this.props.getUsers();
    this.props.payRollRegistration();
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

  render() {
    const { id } = this.props.match.params;
    let { users, userProfileVisible, selectedUser } = this.state;

    if (id === "active") {
      users = users.filter((item) => item.user_status === id);
    }

    const viewDetails = (row) => {
      this.props.history.push(
        `/app/apps/users/viewuser/${row.id}/${"details"}`
      );
    };

    const updateUser = (row) => {
      this.props.history.push(
        `/app/apps/users/updateuser/${row.id}/${"updateprofile"}`
      );
    };

    const dropdownMenu = (row) => (
      <Menu>
        <Menu.Item onClick={(e) => viewDetails(row)}>
          <Flex alignItems="center">
            <EyeOutlined />
            <span className="ml-2">View User</span>
          </Flex>
        </Menu.Item>
        {row.user_status === "active" ? null : (
          <Menu.Item>
            <Flex alignItems="center">
              <CheckOutlined />
              <span className="ml-2">Approve User</span>
            </Flex>
          </Menu.Item>
        )}
        <Menu.Item onClick={(e) => updateUser(row)}>
          <Flex alignItems="center">
            <EditOutlined />
            <span className="ml-2">Edit User</span>
          </Flex>
        </Menu.Item>
        <DeclineUser userDetails={row} />
      </Menu>
    );

    const tableColumns = [
      {
        title: "User",
        dataIndex: "first_name",
        width: 300,
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
        title: "User Phone",
        dataIndex: "phone",
        // width: 140,
      },
      {
        title: "National ID",
        dataIndex: "national_id",
        // width: 120,
        sorter: (a, b) => parseInt(a.national_id) - parseInt(b.national_id),
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "DOB",
        dataIndex: "dob",
        // width: 110,
        render: (dob) => <span>{moment(dob).format("MM/DD/YYYY")} </span>,
        sorter: (a, b) => moment(a.dob).unix() - moment(b.dob).unix(),
      },
      {
        title: "Registered Date",
        dataIndex: "created_at",
        // width: 150,
        render: (date) => <span>{moment(date).format("MM/DD/YYYY")} </span>,
        sorter: (a, b) =>
          moment(a.created_at).unix() - moment(b.created_at).unix(),
      },
      // {
      //   title: "Loan Bal.",
      //   dataIndex: "loan_balance",
      //   render: (loan_balance) => (
      //     <div>
      //       {loan_balance === null ? (
      //         <Tag className="text-capitalize" color="yellow">
      //           Not Set
      //         </Tag>
      //       ) : (
      //         <Text>{loan_balance}</Text>
      //       )}
      //     </div>
      //   ),
      //   sorter: (a, b) => parseInt(a.loan_balance) - parseInt(b.loan_balance),
      //   sortDirections: ["descend", "ascend"],
      // },
      // {
      //   title: "Advance Bal.",
      //   dataIndex: "advance_limit",
      //   render: (advance_limit) => (
      //     <div>
      //       {advance_limit === null ? (
      //         <Tag className="text-capitalize" color="yellow">
      //           Not Set
      //         </Tag>
      //       ) : (
      //         <Text>{advance_limit}</Text>
      //       )}
      //     </div>
      //   ),
      //   sorter: (a, b) => parseInt(a.advance_limit) - parseInt(b.advance_limit),
      //   sortDirections: ["descend", "ascend"],
      // },
      // {
      //   title: "Gross Sal.",
      //   dataIndex: "gross_salary",
      //   render: (gross_salary) => (
      //     <div>
      //       {gross_salary === null ? (
      //         <Tag className="text-capitalize" color="yellow">
      //           Not Set
      //         </Tag>
      //       ) : (
      //         <Text>{gross_salary}</Text>
      //       )}
      //     </div>
      //   ),
      //   sorter: (a, b) => parseInt(a.gross_salary) - parseInt(b.gross_salary),
      //   sortDirections: ["descend", "ascend"],
      // },
      {
        title: "Comapany",
        dataIndex: "company_name",
        key: "company_name"
      },
      {
        title: "Status",
        dataIndex: "user_status",
        render: (status) => (
            status === "1" ?
          <Tag className="text-capitalize" color="cyan">
            Active
          </Tag> : <Tag className="text-capitalize" color="cyan">
            Inactive
          </Tag>
        ),
      },
    //   {
    //     title: "",
    //     dataIndex: "actions",
    //     fixed: "right",
    //     render: (_, elm) => (
    //       <div className="text-right">
    //         <EllipsisDropdown menu={dropdownMenu(elm)} />
    //       </div>
    //     ),
    //   },
    ];
    return (
      <div>
        {/* <UsersDashboard /> */}
        <Card
          bodyStyle={{ padding: "0" }}
          //   style={{
          //     margin: 0,
          //     // borderTopLeftRadius: 50,
          //     // borderTopRightRadius: 50,
          //     // borderBottomLeftRadius: 10,
          //     // borderBottomRightRadius: 10,
          //   }}
          //   bordered={true}
        >
          <UsersMenu {...this.props} printPdf={this.printPdf} />
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
            <UserView
              data={selectedUser}
              visible={userProfileVisible}
              close={() => {
                this.closeUserProfile();
              }}
            />
          </Card>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ usersList, payRollRegistration }) => {
  //   const { users } = usersList;
  function user(
    first_name,
    middle_name,
    national_id,
    phone,
    surname,
    email,
    dob,
    status,
    company_name
  ) {
    return {
      first_name,
      middle_name,
      national_id,
      phone,
      surname,
      email,
      dob,
      status,
      company_name,
    };
  }
  let usersInPayroll = [];
  usersInPayroll = payRollRegistration.payRollRegistration;
  let users = [];

  for (let x = 0; x < usersInPayroll.length; x++) {
    users[x] = user(
      usersInPayroll[x].user.first_name,
      usersInPayroll[x].user.middle_name,
      usersInPayroll[x].user.national_id,
      usersInPayroll[x].user.phone,
      usersInPayroll[x].user.surname,
      usersInPayroll[x].user.email,
      usersInPayroll[x].user.dob,
      usersInPayroll[x].status,
      usersInPayroll[x].company.name
    );
  }
  return {
    users,
  };
};

const mapDispatchToProps = {
  getUsers,
  payRollRegistration,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payroll);
