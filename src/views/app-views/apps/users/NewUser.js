import React, { Component } from "react";
import {
  Form,
  Spin,
  Button,
  Input,
  DatePicker,
  Row,
  Col,
  message,
  Upload,
  Select,
  Radio,
  Alert,
  Card,
  PageHeader,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { ROW_GUTTER } from "constants/ThemeConstant";
import Flex from "components/shared-components/Flex";
import UserProfileAvatar from "components/shared-components/UserProfileAvatar";
import CompaniesData from "assets/data/companies.json";
import { connect } from "react-redux";
import { getUserDetails, updateUser } from "redux/actions/Users";
import moment from "moment";
const { Option } = Select;

export class NewUser extends Component {
  avatarEndpoint = "https://www.mocky.io/v2/5cc8019d300000980a055e76";

  state = {
    first_name: null,
    middle_name: "",
    surname: "",
    email: "",
    dob: null,
    phone: "",
    national_id: "",
    gender: 0,
    employed: 0,
    payroll_no: "",
    advance_request_status: 2,
    loan_status: 0,
    s_a_status: 1,
    verified: 0,
    credit_score: 400,
    loan_limit: 0,
    gross_salary: 500,
    advance_limit: 500,
    loan_request_status: 0,
    net_salary: 4000,
    loading: false,
    user: {},
  };

  //   componentDidMount() {
  //     const { id } = this.props.match.params;
  //     this.props.getUserDetails(id);
  //     if (this.props.user.user) {
  //       console.log("User Details", this.props.user);
  //       this.setState({
  //         id: id
  //       });
  //     }
  //   }

  //   componentDidUpdate = (prevProps) => {
  //     const { id } = this.props.match.params;
  //     if (this.props !== prevProps) {
  //       this.setState({
  //         user: this.props.user,
  //         loading: this.props.loadingUser,
  //         id: id
  //       });
  //     }
  //   };

  back() {
    this.props.history.goBack();
  }

  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  onFinish = (values) => {
    console.log("User update", values);
    // this.props.updateUser(this.state.id, values)
  };

  render() {
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const onUploadAavater = (info) => {
      const key = "updatable";
      if (info.file.status === "uploading") {
        message.loading({ content: "Uploading...", key, duration: 1000 });
        return;
      }
      if (info.file.status === "done") {
        this.getBase64(info.file.originFileObj, (imageUrl) =>
          this.setState({
            avatarUrl: imageUrl,
          })
        );
        message.success({ content: "Uploaded!", key, duration: 1.5 });
      }
    };

    const onRemoveAvater = () => {
      this.setState({
        avatarUrl: "",
      });
    };

    let { user } = this.state;

    let userObject = {};
    let dateOfBirth = "";

    if (user.user) {
      userObject = user.user;
      dateOfBirth = userObject.dob;
    }

    return (
      <Card>
        <PageHeader
          onBack={() => {
            this.back();
          }}
          title="Add New User"
        />
        {this.state.loading ? (
          <Spin tip="Loading...">
            <Alert
              message="Adding New User"
              description="Please wait...."
              type="info"
            />
          </Spin>
        ) : (
          <div>
            <Flex
              alignItems="center"
              mobileFlex={false}
              className="text-center text-md-left"
            >
              <UserProfileAvatar
                shape="circl"
                size={90}
                name={"record.first_name" + " " + "record.surname"}
                icon={<UserOutlined />}
              />
              <div className="ml-3 mt-md-0 mt-3">
                <Upload
                  onChange={onUploadAavater}
                  showUploadList={false}
                  action={this.avatarEndpoint}
                >
                  <Button type="primary">Change Avatar</Button>
                </Upload>
                <Button className="ml-2" onClick={onRemoveAvater}>
                  Remove
                </Button>
              </div>
            </Flex>
            <div className="mt-4">
              <Form
                name="basicInformation"
                layout="vertical"
                onFinish={this.onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row>
                  <Col xs={24} sm={24} md={24} lg={16}>
                    <Row gutter={ROW_GUTTER}>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="First Name"
                          name="first_name"
                          // rules={[
                          //   {
                          //     required: true,
                          //     message: "Please input your firstname!",
                          //   },
                          // ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="Middle Name"
                          name="middle_name"
                          rules={[
                            {
                              required: true,
                              message: "Please input your middlename!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="Surname"
                          name="surname"
                          rules={[
                            {
                              required: true,
                              message: "Please input your middlename!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="Email"
                          name="email"
                          rules={[
                            {
                              required: true,
                              type: "email",
                              message: "Please enter a valid email!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Date of Birth">
                          <DatePicker format="YYYY-MM-DD" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="National ID" name="national_id">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Gender" name="gender">
                          <Select
                            placeholder="Select"
                            style={{ width: "100%" }}
                            // onChange={""}
                          >
                            <Option key="male">Male</Option>
                            <Option key="female">Female</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Phone Number" name="phone">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Employed" name="employed">
                          <Select
                            placeholder="Select"
                            style={{ width: "100%" }}
                            // onChange={""}
                          >
                            <Option key="Employed">Employed</Option>
                            <Option key="Self-Employed">Self-Employed</Option>
                          </Select>
                        </Form.Item>
                      </Col>
                      {/* <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Company" name="company">
                          <Select
                            className="mb-4"
                            placeholder="Select company"
                            onChange={this.handleCompanyChange}
                            style={{ width: "100%" }}
                          >
                            {CompaniesData.map((company) => (
                              <Option key={company.value}>
                                {company.label}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col> */}

                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Payroll Number" name="payroll_no">
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="Advance Request Status"
                          name="advance_request_status"
                        >
                          <Radio.Group defaultValue="a" size="small">
                            <Radio.Button value={0}>Inactive</Radio.Button>
                            <Radio.Button value={1}>Active</Radio.Button>
                          </Radio.Group>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Loan Status" name="loan_status">
                          <Radio.Group defaultValue="a" size="small">
                            <Radio.Button value={1}>
                              Automatic Request
                            </Radio.Button>
                            <Radio.Button value={0}>
                              Manual Request
                            </Radio.Button>
                          </Radio.Group>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Advance Status" name="s_a_status">
                          <Radio.Group
                            defaultValue="automatic request"
                            size="small"
                          >
                            <Radio.Button value={"1"}>
                              Automatic Request
                            </Radio.Button>
                            <Radio.Button value={"2"}>
                              Manual Request
                            </Radio.Button>
                          </Radio.Group>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Verified" name="verified">
                          <Radio.Group defaultValue="verified" size="small">
                            <Radio.Button value={1}>Verified</Radio.Button>
                            <Radio.Button value={0}>Unverified</Radio.Button>
                          </Radio.Group>
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Credit Score" name="credit_score">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Loan Limit" name="loan_limit">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Gross Salary" name="gross_salary">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Advance Limit" name="advance_limit">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="Loan Request Status"
                          name="loan_request_status"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Net Salary" name="net_salary">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                      Save Change
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        )}
      </Card>
    );
  }
}

const mapStateToProps = ({ usersList }) => {
  const { user, loadingUser } = usersList;
  console.log("User in map", user, loadingUser);

  return {
    user,
    loadingUser,
  };
};

const mapDispatchToProps = {
  getUserDetails,
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
