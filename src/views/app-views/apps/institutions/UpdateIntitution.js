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

import { ROW_GUTTER } from "constants/ThemeConstant";
import moment from "moment";
import { connect } from "react-redux";
import monthsList from "assets/data/months.json";
import { getInstitute, updateInstitute } from "redux/actions/Institutions";
const { Option } = Select;

class UpdateInstitution extends Component {
  state = {
    data: {},
    message: "",
    loading: false,
  };
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.getInstitute(id);

    this.setState({
      data: this.props.institutionDetails,
      message: this.props.message,
      // loading: this.props.loading,
    });
  };
  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      this.setState({
        data: this.props.institutionDetails,
        message: this.props.message,
        // loading: this.props.loading,
      });
    }
  };

  back() {
    this.props.history.goBack();
  }

  onFinish = (values) => {
    console.log("Values", values);

    const key = "updatable";
    message.loading({ content: "Updating...", key });

    this.props.updateInstitute(values);

    if (this.state.message.length > 1) {
      message.success("This is a success message");
    }
  };
  render() {
    let institute = {};
    let userObject = {};

    if (this.state.data) {
      institute = this.state.data;
    }
    console.log("Institute", institute);

    return (
      <Card>
        <PageHeader
          onBack={() => {
            this.back();
          }}
          title="Update"
          subTitle={institute.name}
        />
        {this.state.loading ? (
          <Spin tip="Loading...">
            <Alert
              message="Loading permissions"
              description="Please wait.... Permissions loading"
              type="info"
            />
          </Spin>
        ) : (
          <div>
            <div className="mt-4">
              <Form
                name="basicInformation"
                layout="vertical"
                fields={[
                  { name: "id", value: institute.id },
                  { name: "name", value: institute.name },
                  { name: "reporting_date", value: institute.reporting_date },
                  { name: "approved", value: institute.approved },
                  { name: "postal_address", value: institute.postal_address },
                  { name: "s_a_percentage", value: institute.s_a_percentage },
                  { name: "loan_interest", value: institute.loan_interest },
                  { name: "national_id", value: userObject.national_id },

                  {
                    name: "date_of_agreement",
                    value: institute.date_of_agreement,
                  },
                  { name: "phone", value: institute.phone },
                  { name: "email", value: institute.email },
                  { name: "company_code", value: institute.company_code },
                  { name: "location", value: institute.location },
                  { name: "contact_person", value: institute.contact_person },
                  { name: "status", value: institute.status },
                  { name: "typed_id", value: institute.type_id },
                  {
                    name: "four_to_six_interest",
                    value: institute.four_to_six_interest,
                  },
                  {
                    name: "seven_to_nine_interest",
                    value: institute.seven_to_nine_interest,
                  },
                  {
                    name: "ten_to_twelve_interest",
                    value: institute.ten_to_twelve_interest,
                  },

                  {
                    name: "thirteen_to_fifteen_interest",
                    value: institute.thirteen_to_fifteen_interest,
                  },
                  {
                    name: "sixteen_to_eighteen_interest",
                    value: institute.sixteen_to_eighteen_interest,
                  },
                  {
                    name: "nineteen_to_twentyone_interest",
                    value: institute.nineteen_to_twentyone_interest,
                  },
                  {
                    name: "twentytwo_to_twentyfour_interest",
                    value: institute.twentytwo_to_twentyfour_interest,
                  },
                  {
                    name: "min_month",
                    value: institute.min_month,
                  },
                  {
                    name: "max_month",
                    value: institute.max_month,
                  },
                ]}
                onFinish={this.onFinish}
                onFinishFailed={"onFinishFailed"}
              >
                <Row>
                  <Col xs={24} sm={24} md={24} lg={16}>
                    <Row gutter={ROW_GUTTER}>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="Company ID"
                          name="id"
                          rules={[
                            {
                              required: true,
                              message: "Please enter company id",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="Name"
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: "Please enter company name",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Reporting Date" name="reporting_date">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Aproval" name="approved">
                          <Radio.Group size="small">
                            <Radio.Button value={1}>Approved</Radio.Button>
                            <Radio.Button value={0}>Not Approved</Radio.Button>
                          </Radio.Group>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Postal Address" name="postal_address">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="Limit (%)"
                          name="s_a_percentage"
                          rules={[
                            {
                              required: false,
                              message: "Please enter a Limit (%)!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="Interest (%)"
                          name="loan_interest"
                          rules={[
                            {
                              required: false,
                              message: "Please enter a Limit (%)!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="Date of Agreement"
                          name="date_of_agreement"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Phone Number" name="phone">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Email" name="email">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="Code"
                          name="company_code"
                          rules={[
                            {
                              required: true,
                              message: "Please enter code",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Location" name="location">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Contact" name="contact_person">
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Status" name="status">
                          <Select
                            placeholder="Select"
                            style={{ width: "100%" }}
                            // onChange={""}
                          >
                            <Option key="active" value={1}>
                              Active
                            </Option>
                            <Option key="suspended" value={0}>
                              Suspended
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Type" name="type_id">
                          <Select
                            placeholder={institute.type_id}
                            style={{ width: "100%" }}
                            // onChange={""}
                          >
                            <Option key="tsc">
                              Teachers Service Commission
                            </Option>
                            <Option key="forces" value={1}>
                              Forces/Police
                            </Option>
                            <Option key="civil-servants" value={2}>
                              Civil Servants
                            </Option>
                            <Option key="county-staff" value={3}>
                              County Staff
                            </Option>
                            <Option key="parastatals" value={4}>
                              Parastatals
                            </Option>
                            <Option key="private-companies" value={5}>
                              Private Companies
                            </Option>
                          </Select>
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="4 To 6 Months' Interest"
                          name="four_to_six_interest"
                        >
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="7 To 9 Months' Interest"
                          name="seven_to_nine_interest"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="10 To 12 Months' Interest"
                          name="ten_to_twelve_interest"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="13 To 15 Months' Interest"
                          name="thirteen_to_fifteen_interest"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="16 To 18 Months' Interest"
                          name="sixteen_to_eighteen_interest"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="19 To 21 Months' Interest"
                          name="nineteen_to_twentyone_interest"
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item
                          label="22 To 24 Months' Interest"
                          name="twentytwo_to_twentyfour_interest"
                        >
                          <Input />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Minimum Months" name="min_month">
                          <Select
                            placeholder="Select"
                            style={{ width: "100%" }}
                            // onChange={""}
                          >
                            {monthsList.map((month) => {
                              return (
                                <Option key={month.value} value={month.value}>
                                  {month.label}
                                </Option>
                              );
                            })}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={24} md={12} xl={8} xxl={8}>
                        <Form.Item label="Maximum Months" name="max_month">
                          <Select
                            placeholder="Select"
                            style={{ width: "100%" }}
                            // onChange={""}
                          >
                            {monthsList.map((month) => {
                              return (
                                <Option key={month.value} value={month.value}>
                                  {month.label}
                                </Option>
                              );
                            })}
                          </Select>
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

const mapStateToProps = ({ institutions }) => {
  let { institutionDetails, message, loading } = institutions;

  console.log("Message", message);
  return {
    institutionDetails,
    message,
    loading,
  };
};

const mapDispatchToProps = {
  getInstitute,
  updateInstitute,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateInstitution);
