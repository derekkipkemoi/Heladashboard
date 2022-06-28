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
} from "antd";
import { Icon } from "components/util-components/Icon";
import {
  GlobalOutlined,
  MailOutlined,
  HomeOutlined,
  PhoneOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import PageHeaderAlt from "components/layout-components/PageHeaderAlt";
import Flex from "components/shared-components/Flex";
import ProfileMenu from "./ProfileMenu";
import { UserProfileAvatar } from "components/shared-components/UserProfileAvatar";
import { connect } from "react-redux";
import { getUserDetails } from "redux/actions/Users";

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
  render() {
    let { id, content, user } = this.state;

    let userObject = {};
    let userRegistrationFiles = [];
    let userRequestFiles = [];
    if (user.user) {
      userObject = user.user;
    }

    if (user.userRegistrationFiles || user.userRequestFiles) {
      userRegistrationFiles = user.userRegistrationFiles;
      userRequestFiles = user.userRequestFiles;
    }

    const ProfileInfo = (props) => (
      <Card>
        <Row justify="center">
          <Col sm={24} md={23}>
            <div className="d-md-flex">
              <div
                className="rounded p-2 bg-white shadow-sm mx-auto"
                style={{
                  marginTop: "-3.5rem",
                  maxWidth: `${props.avatarSize + 16}px`,
                }}
              >
                <UserProfileAvatar
                  shape="square"
                  name={userObject.first_name + " " + userObject.surname}
                  size={props.avatarSize}
                />
              </div>
              <div className="ml-md-4 w-100">
                <Flex
                  alignItems="center"
                  mobileFlex={false}
                  className="mb-3 text-md-left text-center"
                >
                  <h2 className="mb-0 mt-md-0 mt-2">
                    {userObject.first_name + " " + userObject.surname}
                  </h2>
                  <div className="ml-md-3 mt-3 mt-md-0">
                    <Space>
                      <Button size="small" type="primary">
                        Update User
                      </Button>
                      <Button size="small" type="primary">
                        Change Role
                      </Button>
                      <Button size="small" type="primary">
                        Change User Type
                      </Button>
                      <Button size="small" type="danger">
                        Deactivate User
                      </Button>
                    </Space>
                  </div>
                </Flex>
                <Row gutter="16">
                  <Col xs={24} sm={24} md={8}>
                    <Row className="mb-2">
                      <Col xs={12} sm={12} md={9}>
                        <Icon
                          type={MailOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Email:</span>
                      </Col>
                      <Col xs={12} sm={12} md={15}>
                        <span className="font-weight-semibold">
                          {userObject.email}
                        </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} sm={12} md={9}>
                        <Icon
                          type={PhoneOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Phone:</span>
                      </Col>
                      <Col xs={12} sm={12} md={15}>
                        <span className="font-weight-semibold">
                          {userObject.phone}
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
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
          <span>
            <a>
              <DownloadOutlined />
            </a>
          </span>
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

    const Experiences = () => (
      <Card bordered={false}>
        <div className="mb-3">
          <Row>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>First Name : </Text>{" "}
                {userObject.first_name !== null ? (
                  userObject.first_name
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Middle Name : </Text>
                {userObject.middle_name !== null ? (
                  userObject.middle_name
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Surname : </Text>
                {userObject.surname !== null ? (
                  userObject.surname
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Natiobal ID : </Text>
                {userObject.national_id !== null ? (
                  userObject.national_id
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Payroll No : </Text>
                {userObject.payroll_no !== null ? (
                  userObject.payroll_no
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Phone : </Text>
                {userObject.phone !== null ? (
                  userObject.phone
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>

            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Date of Birth : </Text>
                {userObject.dob !== null ? (
                  userObject.dob
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Employed : </Text>
                {userObject.employed !== null ? (
                  userObject.employed
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Gender : </Text>
                {userObject.gender !== null ? (
                  userObject.gender === 0 ? (
                    "Male"
                  ) : (
                    "Female"
                  )
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Loan Balance : </Text>
                {userObject.loan_balance !== null ? (
                  userObject.loan_balance
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Advance Balance : </Text>
                {userObject.s_a_balance !== null ? (
                  userObject.s_a_balance
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>

            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Advance Request Status : </Text>
                {userObject.s_a_status !== null ? (
                  userObject.s_a_status
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Advance Status : </Text>
                {userObject.s_a_status !== null ? (
                  userObject.s_a_status
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>

            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Credit Score : </Text>
                {userObject.credit_score !== null ? (
                  userObject.credit_score
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Loan Limit : </Text>
                {userObject.loan_limit !== null ? (
                  userObject.loan_limit
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Advance Limit : </Text>
                {userObject.advance_limit !== null ? (
                  userObject.advance_limit
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>

            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Gross Salary : </Text>
                {userObject.gross_salary !== null ? (
                  userObject.gross_salary
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Net Salary : </Text>
                {userObject.net_salary !== null ? (
                  userObject.net_salary
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Referer Code : </Text>
                {userObject.refer_code !== null ? (
                  userObject.refer_code
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Referer ID : </Text>
                {userObject.referer_user_id !== null ? (
                  userObject.referer_user_id
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Created At : </Text>
                {userObject.created_at !== null ? (
                  userObject.created_at
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    );
    const avatarSize = 150;
    return (
      <>
        <PageHeaderAlt
          background="/img/others/img-12.jpg"
          cssClass="bg-primary"
          overlap
        >
          <div className="container text-center">
            <div className="py-3 my-4"></div>
          </div>
        </PageHeaderAlt>
        <div className="container my-4">
          <ProfileInfo avatarSize={avatarSize} />
          <Card>
            <Col xs={24} sm={24} md={24} xl={24} xxl={24}>
              <ProfileMenu {...this.props} />
            </Col>
            <Row gutter="16">
              {content === "details" ? (
                <Col xs={24} sm={24} md={16} xl={24} xxl={24}>
                  <Experiences />
                </Col>
              ) : null}
              {content === "registration-files" ? (
                <Col xs={24} sm={24} md={16} xl={24} xxl={24}>
                  <Table
                    columns={UserRequestFilescolumns}
                    dataSource={userRegistrationFiles}
                  />
                </Col>
              ) : null}
              {content === "request-files" ? (
                <Col xs={24} sm={24} md={16} xl={24} xxl={24}>
                  <Table
                    columns={UserRequestFilescolumns}
                    dataSource={userRequestFiles}
                  />
                </Col>
              ) : null}
              {content === "advances" ? (
                <Col xs={24} sm={24} md={16} xl={24} xxl={24}>
                  <Table
                    columns={UserAdvanceRequests}
                    dataSource={UserAdvancesData}
                  />
                </Col>
              ) : null}
            </Row>
          </Card>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ usersList }) => {
  const { user } = usersList;

  return {
    user,
  };
};

const mapDispatchToProps = {
  getUserDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
