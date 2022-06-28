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
import { connect } from "react-redux";
import { UserProfileAvatar } from "components/shared-components/UserProfileAvatar";
import Flex from "components/shared-components/Flex";
import { getInstitute } from "redux/actions/Institutions";

const { Text } = Typography;

class ViewInstitution extends Component {
  state = {
    data: {},
  };
  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.getInstitute(id);

    this.setState({
      data: this.props.institutionDetails,
    });
  };

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      this.setState({
        data: this.props.institutionDetails,
      });
    }
  };
  render() {
    let { data } = this.state;
    console.log("Object", data);
    const avatarSize = 150;
    const ProfileInfo = (props) => (
      <Card>
        <Row justify="center">
          <Col sm={24} md={23}>
            <div className="d-md-flex">
              <div
                className="rounded p-2 bg-white shadow-sm mx-auto"
                style={{
                  maxWidth: `${props.avatarSize + 16}px`,
                }}
              >
                <UserProfileAvatar
                  shape="square"
                  name={data.name + " " + data.name}
                  size={props.avatarSize}
                />
              </div>
              <div className="ml-md-4 w-100">
                <Flex
                  alignItems="center"
                  mobileFlex={false}
                  className="mb-3 text-md-left text-center"
                >
                  <h2 className="mb-0 mt-md-0 mt-2">{data.name}</h2>
                  <div className="ml-md-3 mt-3 mt-md-0">
                    <Space>
                      <Button size="small" type="primary">
                        Update Institution
                      </Button>
                    </Space>
                  </div>
                </Flex>
                <Row>
                  <Col xs={24} sm={24} md={8}>
                    <Row className="mb-2">
                      <Col xs={12} sm={12} md={12}>
                        <Icon
                          type={MailOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Email:</span>
                      </Col>
                      <Col xs={12} sm={12} md={12}>
                        <span className="font-weight-semibold">
                          {data.email === "" ? (
                            <Tag className="text-capitalize" color="yellow">
                              Not Set
                            </Tag>
                          ) : (
                            data.email
                          )}
                        </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} sm={12} md={12}>
                        <Icon
                          type={PhoneOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Phone:</span>
                      </Col>
                      <Col xs={12} sm={12} md={12}>
                        <span className="font-weight-semibold">
                          {data.phone === "" ? (
                            <Tag className="text-capitalize" color="yellow">
                              Not Set
                            </Tag>
                          ) : (
                            data.phone
                          )}
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
    const Experiences = () => (
      <Card bordered={false}>
        <div className="mb-3">
          <Row>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Name : </Text>{" "}
                {data.name !== "" ? data.name : <Tag color="gold">Not Set</Tag>}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Phone : </Text>
                {data.phone !== "" ? (
                  data.phone
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Code : </Text>
                {data.company_code !== "" ? (
                  data.company_code
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Account Status : </Text>
                {data.approved === 0 ? "Not approved" : "Approved"}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Limit % : </Text>
                {data.s_a_percentage !== null ? (
                  data.s_a_percentage
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Loan Interest : </Text>
                {data.loan_interest}
              </div>
            </Col>

            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Minimum Month : </Text>
                {data.min_month}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Max Month : </Text>
                {data.max_month}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>4 To 6 Months' Interest : </Text>
                {data.four_to_six_interest}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>7 To 9 Months' Interest : </Text>
                {data.seven_to_nine_interest}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>10 To 12 Months' Interest : </Text>
                {data.ten_to_twelve_interest}
              </div>
            </Col>

            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>13 to 15 Months' Interest : </Text>
                {data.thirteen_to_fifteen_interest}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>16 to 18 Months' Interest : </Text>
                {data.sixteen_to_eighteen_interest}
              </div>
            </Col>

            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>19 to 21 Months' Interest : </Text>
                {data.nineteen_to_twentyone_interest}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Loan Limit : </Text>
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>22 to 24 Months' Interest : </Text>
                {data.twentytwo_to_twentyfour_interest}
              </div>
            </Col>

            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Agreemt Date : </Text>
                {data.date_of_agreement !== null ? (
                  data.date_of_agreement
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Location : </Text>
                {data.location !== "" ? (
                  data.location
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Reporting Date: </Text>
                {data.reporting_date !== null ? (
                  data.reporting_date
                ) : (
                  <Tag color="gold">Not Set</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Type: </Text>
                {data.type_id}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Status : </Text>
                {data.status === 1 ? (
                  <Tag color="cyan">Active</Tag>
                ) : (
                  <Tag color="gold">Inactive</Tag>
                )}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Created At : </Text>
                {data.created_at}
              </div>
            </Col>
            <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
              <div>
                <Text strong>Updated At : </Text>
                {data.updated_at}
              </div>
            </Col>
          </Row>
        </div>
      </Card>
    );
    return (
      <Card>
        <Col xs={24} sm={24} md={16} xl={24} xxl={24}>
          <ProfileInfo avatarSize={avatarSize} />
        </Col>

        <Row gutter="16">
          <Col xs={24} sm={24} md={16} xl={24} xxl={24}>
            <Experiences />
          </Col>
        </Row>
      </Card>
    );
  }
}

const mapStateToProps = ({ institutions }) => {
  let { institutionDetails } = institutions;

  console.log("Institution in component", institutionDetails);
  return {
    institutionDetails,
  };
};

const mapDispatchToProps = {
  getInstitute,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewInstitution);
