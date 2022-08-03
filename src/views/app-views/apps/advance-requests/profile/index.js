import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  Tag,
  Button,
  Table,
  Divider,
  Typography,
  Space,
  Tooltip,
} from "antd";
import { Icon } from "components/util-components/Icon";
import {
  AuditOutlined,
  MailOutlined,
  CalendarOutlined,
  PhoneOutlined,
  IdcardOutlined,
  DownloadOutlined,
  DeleteOutlined,
  DollarOutlined,
  SearchOutlined,
  CheckOutlined,
  BankOutlined,
  EnvironmentOutlined,
  DislikeOutlined,
  VerticalAlignTopOutlined,
  FileOutlined,
  ClockCircleOutlined,
  CommentOutlined,
  StopOutlined,
  FieldNumberOutlined,
  BookOutlined
} from "@ant-design/icons";
import PageHeaderAlt from "components/layout-components/PageHeaderAlt";
import Flex from "components/shared-components/Flex";
import ProfileMenu from "./ProfileMenu";
import { UserProfileAvatar } from "components/shared-components/UserProfileAvatar";
import { connect } from "react-redux";
import { getUserDetails } from "redux/actions/Users";
import moment from "moment";
import ChangeUserRole from "./ChangeUserRole";
import ChangeUserType from "./ChangeUserType";
import DeactivateUser from "./DeactivateUser";

const { Text } = Typography;

export class Profile extends Component {
  state = {
    id: "",
    content: "",
    user: {},
  };

  componentDidMount() {
    const { id, content } = this.props.match.params;
    this.props.getUserDetails(id);

    this.setState({
      id: id,
      content: content,
      user: this.props.user,
    });
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      const { id, content } = this.props.match.params;
      this.setState({
        id: id,
        content: content,
        user: this.props.user,
      });
    }
  };

  // updateUser = () => {
  //   this.props.history.push(
  //     `/app/apps/users/updateuser/${this.state.id}/${"updateprofile"}`
  //   );
  // };

  render() {
    let { id, content, user } = this.state;

    let userObject = {};
    let userData = [];
    let userCRB = [];
    let userRegistrationFiles = [];
    let userRequestFiles = [];
    if (user.user) {
      userObject = user.user;
      userData[0] = user.user;
    }
    if (user.crbreport) {
      userCRB[0] = user.crbreport;
    }

    if (user.userRegistrationFiles || user.userRequestFiles) {
      userRegistrationFiles = user.userRegistrationFiles;
      userRequestFiles = user.userRequestFiles;
    }

    const ProfileInfo = (props) => (
      <Card bodyStyle={{ padding: 10, margin: 10 }}>
        <Row justify="left">
          <Col sm={24} md={24}>
            <div className="d-md-flex">
              <div
                className="rounded p-1 "
                style={{
                  marginTop: "-0.5rem",
                  maxWidth: `${props.avatarSize}px`,
                }}
              >
                <UserProfileAvatar
                  shape="square"
                  name={userObject.first_name + " " + userObject.surname}
                  size={props.avatarSize}
                />
              </div>
              <div className="w-100">
                <Flex
                  alignItems="center"
                  mobileFlex={false}
                  className="mb-3 text-md-left text-center"
                >
                  <h2 className="mb-0 mt-md-0 mt-2">
                    {userObject.first_name +
                      " " +
                      userObject.middle_name +
                      " " +
                      userObject.surname}
                  </h2>
                  <div className="ml-4 mt-md-0">
                    <Space>
                      <ChangeUserRole />
                      <ChangeUserType />
                      <DeactivateUser />
                    </Space>
                  </div>
                </Flex>
                <Row>
                  
                  <Col xs={24} sm={24} md={8}>
                    <Row className="mb-2">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={MailOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">EMail: </span>
                        <span className="font-weight-semibold">
                          {userObject.email}
                        </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={PhoneOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Phone: </span>
                        <span className="font-weight-semibold">
                          {userObject.phone}
                        </span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} sm={24} md={8}>
                    <Row className="mb-2 mt-2 mt-md-0 ">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={DollarOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Loan Amount: </span>
                        <span className="font-weight-semibold">
                          Loan Amount
                        </span>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={DollarOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Principal: </span>
                        <span className="font-weight-semibold">
                          Principal
                        </span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} sm={24} md={8}>
                  <Row className="mb-2 mt-2 mt-md-0 ">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={DollarOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Installments: </span>
                        <span className="font-weight-semibold">
                          Installments
                        </span>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={CalendarOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Date Created: </span>
                        <span className="font-weight-semibold">
                          date
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} sm={24} md={8}>
                    <Row className="mb-2">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={BankOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Comapny: </span>
                        <span className="font-weight-semibold">
                          Company
                        </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={AuditOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Age: </span>
                        <span className="font-weight-semibold">Age</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} sm={24} md={8}>
                    <Row className="mb-2 mt-2 mt-md-0 ">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={CalendarOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Period: </span>
                        <span className="font-weight-semibold">
                          Period
                        </span>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={DollarOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Interest: </span>
                        <span className="font-weight-semibold">
                          Interest
                        </span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} sm={24} md={8}>
                    <Row className="mb-2 mt-2 mt-md-0 ">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={CalendarOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Date Updated: </span>
                        <span className="font-weight-semibold">
                          date
                        </span>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={CheckOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Type: </span>
                        <span className="font-weight-semibold">
                         Type
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} sm={24} md={8}>
                    <Row className="mb-2">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={IdcardOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">National ID: </span>
                        <span className="font-weight-semibold">
                          {userObject.national_id}
                        </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={EnvironmentOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Location: </span>
                        <span className="font-weight-semibold">Location</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} sm={24} md={8}>
                    <Row className="mb-2 mt-2 mt-md-0 ">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={DollarOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Fee: </span>
                        <span className="font-weight-semibold">
                          Fee
                        </span>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={ClockCircleOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Loan Status: </span>
                        <span className="font-weight-semibold">
                          Loan Status
                        </span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} sm={24} md={8}>
                    <Row className="mb-2 mt-2 mt-md-0 ">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={BookOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Booked By: </span>
                        <span className="font-weight-semibold">
                          name
                        </span>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={CalendarOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Booking Date: </span>
                        <span className="font-weight-semibold">
                          date
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                


                <Row>
                  <Col xs={24} sm={24} md={8}>
                    <Row className="mb-2">
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={FieldNumberOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Payroll No: </span>
                        <span className="font-weight-semibold">
                          {userObject.national_id}
                        </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={24} sm={24} md={24}>
                        <Icon
                          type={ClockCircleOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Status: </span>
                        <span className="font-weight-semibold">{userObject.status}</span>
                      </Col>
                    </Row>
                  </Col>
                  
                </Row>
              </div>
            </div>
          </Col>
          <Card bodyStyle={{ padding: 0, marginTop: 20 }} bordered={false}>
            <Row className="mb-2 mt-2 mt-md-0 " style={{marginLeft:"80px"}}>
              <Col xs={24} sm={24} md={24}>
                <Space>
                  <Tooltip title="Decline Request">
                    <Button
                      type="danger"
                      shape="circle"
                      icon={<DislikeOutlined />}
                    />
                  </Tooltip>

                  <Tooltip title="Update Status to Pending @Payroll">
                    <Button
                      type="primary"
                      style={{backgroundColor:"gold", borderColor:"gold"}}
                      shape="circle"
                      icon={<ClockCircleOutlined />}
                    />
                  </Tooltip>

                  <Tooltip title="Comment">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<CommentOutlined />}
                    />
                  </Tooltip>

                  <Tooltip title="Request has file">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<FileOutlined />}
                    />
                  </Tooltip>

                  <Tooltip title="Update Status to @Payroll - DD Pending">
                    <Button
                      type="primary"
                      style={{backgroundColor:"gold", borderColor:"gold"}}
                      shape="circle"
                      icon={<ClockCircleOutlined />}
                    />
                  </Tooltip>

                  <Tooltip title="Update Status to - DD Pending">
                    <Button
                      type="primary"
                      style={{backgroundColor:"gold", borderColor:"gold"}}
                      shape="circle"
                      icon={<ClockCircleOutlined />}
                    />
                  </Tooltip>

                  <Tooltip title="Update Status to Pending Payslip Share">
                    <Button
                      type="primary"
                      style={{backgroundColor:"gold", borderColor:"gold"}}
                      shape="circle"
                      icon={<BookOutlined />}
                    />
                  </Tooltip>

                  <Tooltip title="Confirm Decline">
                    <Button
                      type="danger"
                      shape="circle"
                      icon={<StopOutlined />}
                    />
                  </Tooltip>

                  <Tooltip title="Update Status to Top Ups">
                    <Button
                      type="primary"
                      shape="circle"
                      icon={<VerticalAlignTopOutlined />}
                    />
                  </Tooltip>
                </Space>
              </Col>
            </Row>
          </Card>
        </Row>
      </Card>
    );

    const UserRequestFilescolumns = [
      {
        title: "Agent",
        dataIndex: "uploader_id",
        key: "uploader_id",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "File Name",
        dataIndex: "file_name",
        key: "file_name",
      },
      {
        title: "Time Uploaded",
        dataIndex: "created_at",
        key: "time",
      },
      {
        title: "Download",
        dataIndex: "file_location",
        key: "file_location",
        render: (text, record) => (
          <Space>
            <a>
              <DownloadOutlined />
            </a>
            <a>
              <DeleteOutlined style={{ color: "#ff0000" }} />
            </a>
          </Space>
        ),
      },
    ];

    const UserCRBColumns = [
      {
        title: "Recomedation Decision",
        dataIndex: "recommendeddecision",
        key: "recommendeddecision",
      },
      {
        title: "Credit Limit",
        dataIndex: "creditlimit",
        key: "creditlimit",
      },
      {
        title: "CIP Score",
        dataIndex: "cipscore",
        key: "cipscore",
      },
      {
        title: "CIP Risk Grade",
        dataIndex: "cipriskgrade",
        key: "cipriskgrade",
      },
      {
        title: "Mobile Score",
        dataIndex: "mobilescore",
        key: "mobilescore",
      },
      {
        title: "Broken Rules",
        dataIndex: "brokenrules",
        key: "brokenrules",
      },
    ];

    const UserInformation = [
      // {
      //   title: "Payroll No",
      //   dataIndex: "payroll_no",
      //   render: (payroll_no) => (
      //     <div>
      //       {payroll_no === null ? (
      //         <Tag className="text-capitalize" color="yellow">
      //           Not Set
      //         </Tag>
      //       ) : (
      //         <span>{payroll_no} </span>
      //       )}
      //     </div>
      //   ),
      // },
      // {
      //   title: "Gender",
      //   key: "gender",
      //   dataIndex: "gender",
      //   render: (gender) => (
      //     <div>{gender === 0 ? <span> Male </span> : <span>Female </span>}</div>
      //   ),
      // },
      // {
      //   title: "Employment",
      //   key: "employed",
      //   dataIndex: "employed",
      //   render: (employed) => (
      //     <div>
      //       {employed === 0 ? (
      //         <span>Self Employed </span>
      //       ) : (
      //         <span>Employed </span>
      //       )}
      //     </div>
      //   ),
      // },
      {
        title: "Advance Balance",
        key: "s_a_balance",
        dataIndex: "s_a_balance",
        render: (s_a_balance) => (
          <div>
            {s_a_balance === null ? (
              <Tag className="text-capitalize" color="yellow">
                Not Set
              </Tag>
            ) : (
              <span>{s_a_balance} </span>
            )}
          </div>
        ),
      },
      {
        title: "Advance Limit",
        key: "advance_limit",
        dataIndex: "advance_limit",
        render: (advance_limit) => (
          <div>
            {advance_limit === null ? (
              <Tag className="text-capitalize" color="yellow">
                Not Set
              </Tag>
            ) : (
              <span>{advance_limit} </span>
            )}
          </div>
        ),
      },
      {
        title: "Advance Status",
        key: "s_a_status",
        dataIndex: "s_a_status",
        render: (s_a_status) => (
          <div>
            {s_a_status === null ? (
              <Tag className="text-capitalize" color="yellow">
                Not Set
              </Tag>
            ) : (
              <span>{s_a_status} </span>
            )}
          </div>
        ),
      },
      {
        title: "Loan Balance",
        key: "loan_balance",
        dataIndex: "loan_balance",
        render: (loan_balance) => (
          <div>
            {loan_balance === null ? (
              <Tag className="text-capitalize" color="yellow">
                Not Set
              </Tag>
            ) : (
              <span>{loan_balance} </span>
            )}
          </div>
        ),
      },
      {
        title: "Refund Status",
        key: "refund_status",
        dataIndex: "refund_status",
        render: (refund_status) => (
          <div>
            {refund_status === null ? (
              <Tag className="text-capitalize" color="yellow">
                Not Set
              </Tag>
            ) : (
              <span>{refund_status} </span>
            )}
          </div>
        ),
      },
      {
        title: "Loan Limit",
        key: "loan_limit",
        dataIndex: "loan_limit",
        render: (loan_limit) => (
          <div>
            {loan_limit === null ? (
              <Tag className="text-capitalize" color="yellow">
                Not Set
              </Tag>
            ) : (
              <span>{loan_limit} </span>
            )}
          </div>
        ),
      },
      {
        title: "Gross Salary",
        key: "gross_salary",
        dataIndex: "gross_salary",
        render: (gross_salary) => (
          <div>
            {gross_salary === null ? (
              <Tag className="text-capitalize" color="yellow">
                Not Set
              </Tag>
            ) : (
              <span>{gross_salary} </span>
            )}
          </div>
        ),
      },
      {
        title: "Net Salary",
        key: "net_salary",
        dataIndex: "net_salary",
        render: (net_salary) => (
          <div>
            {net_salary === null ? (
              <Tag className="text-capitalize" color="yellow">
                Not Set
              </Tag>
            ) : (
              <span>{net_salary} </span>
            )}
          </div>
        ),
      },
    ];

    const UserAdvanceRequests = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
      },
      {
        title: "Payroll No.",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "Phone",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "Period",
        key: "period",
        dataIndex: "period",
      },
      {
        title: "Company",
        key: "company",
        dataIndex: "company",
      },
      {
        title: "Amount",
        key: "amount",
        dataIndex: "amount",
      },
      {
        title: "Interest",
        key: "interest",
        dataIndex: "interest",
      },
      {
        title: "Fee",
        key: "fee",
        dataIndex: "fee",
      },
      {
        title: "Payable",
        key: "payable",
        dataIndex: "payable",
      },
      {
        title: "Type",
        key: "type",
        dataIndex: "type",
      },
      {
        title: "Status",
        key: "status",
        dataIndex: "status",
      },
      {
        title: "Created At",
        key: "created-at",
        dataIndex: "created-at",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <a>Invite {record.name}</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        ),
      },
    ];

    const UserAdvancesData = [];

    const avatarSize = 90;
    return (
      <>
        <PageHeaderAlt cssClass="bg-primary" overlap>
          <div className="container text-center">
            <div className="py-3 my-4"></div>
          </div>
        </PageHeaderAlt>
        <div>
          <ProfileInfo avatarSize={avatarSize} />
          <Card>
            <ProfileMenu {...this.props} />

            {content === "details" ? (
              <Table columns={UserInformation} dataSource={userData} />
            ) : null}
            {content === "registration-files" ? (
              <Table
                columns={UserRequestFilescolumns}
                dataSource={userRegistrationFiles}
              />
            ) : null}
            {content === "request-files" ? (
              <Table
                columns={UserRequestFilescolumns}
                dataSource={userRequestFiles}
              />
            ) : null}

            {content === "crb" ? (
              <Table columns={UserCRBColumns} dataSource={userCRB} />
            ) : null}
          </Card>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ usersList }) => {
  const { user } = usersList;
  console.log("user", user);
  return {
    user,
  };
};

const mapDispatchToProps = {
  getUserDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
