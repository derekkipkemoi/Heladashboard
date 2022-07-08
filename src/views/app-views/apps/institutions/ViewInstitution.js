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
  MailOutlined,
  CalendarOutlined,
  PhoneOutlined,
  IdcardOutlined,
  EditOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import moment from "moment";
import { UserProfileAvatar } from "components/shared-components/UserProfileAvatar";
import Flex from "components/shared-components/Flex";
import { getInstitute } from "redux/actions/Institutions";
import TopBarAvatar from "components/shared-components/TopBarAvatar";

const { Text, Title } = Typography;
const { Column, ColumnGroup } = Table;

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
  updateDetails = () => {
    const { id } = this.props.match.params;
    this.props.history.push(`/app/apps/institutions/updateinstitution/${id}`);
  };
  messageCompany = () => {
    this.props.history.push(`/app/apps/message/compose`);
  };
  render() {
    let { data } = this.state;
    let companyData = [];
    if (data) {
      companyData[0] = data;
    }
    const avatarSize = 150;

    const ProfileInfo = (props) => (
      <div>
        <Row>
          <Col xs={24} sm={24} md={12} xl={8}>
            <h2 className="mb-0 mt-md-0 mt-2">{data.name}</h2>
          </Col>
          <Space>
            <Col xs={12} sm={12} md={6} xl={4}>
              <Button type="primary" onClick={(e) => this.updateDetails()}>
                <EditOutlined /> Update Company
              </Button>
            </Col>
            <Col xs={12} sm={12} md={6} xl={4}>
              <Button type="primary" onClick={(e) => this.messageCompany()}>
                <MessageOutlined /> Message Company
              </Button>
            </Col>
          </Space>
        </Row>
        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          Info
        </Divider>
        <Row>
          <Col xs={24} sm={12} md={8} xl={6}>
            <span className="text-muted">Code:</span>
            <span className="ml-2">{data.company_code}</span>
          </Col>
          <Col xs={24} sm={12} md={8} xl={6}>
            <span className="text-muted">Email:</span>
            <span className="ml-2">
              {data.email === "" ? (
                <Tag color="yellow">Not Set</Tag>
              ) : (
                data.email
              )}
            </span>
          </Col>
          <Col xs={24} sm={12} md={8} xl={6}>
            <span className="text-muted">Phone:</span>
            <span className="ml-2">
              {data.phone === "" ? (
                <Tag color="yellow">Not Set</Tag>
              ) : (
                data.phone
              )}
            </span>
          </Col>
          <Col xs={24} sm={12} md={8} xl={6}>
            <span className="text-muted">Address:</span>
            <span className="ml-2">
              {data.postal_address === "" ? (
                <Tag color="yellow">Not Set</Tag>
              ) : (
                data.postal_address
              )}
            </span>
          </Col>
          <Col xs={24} sm={12} md={8} xl={6}>
            <span className="text-muted">ID:</span>
            <span className="ml-2">
              {data.id === "" ? <Tag color="yellow">Not Set</Tag> : data.id}
            </span>
          </Col>
          <Col xs={24} sm={12} md={8} xl={6}>
            <span className="text-muted">Status:</span>
            <span className="ml-2">
              {data.status === 0 ? (
                <Tag color="green">Approved</Tag>
              ) : (
                <Tag color="yellow">Not Approved</Tag>
              )}
            </span>
          </Col>
          <Col xs={24} sm={12} md={8} xl={6}>
            <span className="text-muted">Contact:</span>
            <span className="ml-2">
              {data.contact_person === "" ? (
                <Tag color="yellow">Not Set</Tag>
              ) : (
                data.contact_person
              )}
            </span>
          </Col>
          <Col xs={24} sm={12} md={8} xl={6}>
            <span className="text-muted">Location:</span>
            <span className="ml-2">
              {data.location === "" ? (
                <Tag color="yellow">Not Set</Tag>
              ) : (
                data.location
              )}
            </span>
          </Col>
          <Col xs={24} sm={12} md={8} xl={6}>
            <span className="text-muted">Created Date:</span>
            <span className="ml-2">
              {moment(data.created_at).format("MM/DD/YYYY")}
            </span>
          </Col>
          <Col xs={24} sm={12} md={8} xl={6}>
            <span className="text-muted">Agreement Date:</span>
            <span className="ml-2">
              {moment(data.date_of_agreement).format("MM/DD/YYYY")}
            </span>
          </Col>
          <Col xs={24} sm={12} md={8} xl={6}>
            <span className="text-muted">Type ID:</span>
            <span className="ml-2">
              {data.type_id === "" ? (
                <Tag color="yellow">Not Set</Tag>
              ) : (
                data.type_id
              )}
            </span>
          </Col>
          <Col xs={24} sm={12} md={8} xl={6}>
            <span className="text-muted">Loan Interest:</span>
            <span className="ml-2">
              {data.loan_interest === "" ? (
                <Tag color="yellow">Not Set</Tag>
              ) : (
                data.loan_interest
              )}
            </span>
          </Col>
          <Col xs={24} sm={12} md={8} xl={6}>
            <span className="text-muted">Min Month:</span>
            <span className="ml-2">
              {data.min_month === "" ? (
                <Tag color="yellow">Not Set</Tag>
              ) : (
                data.min_month
              )}
            </span>
          </Col>
          <Col xs={24} sm={12} md={8} xl={6}>
            <span className="text-muted">Max Month:</span>
            <span className="ml-2">
              {data.max_month === "" ? (
                <Tag color="yellow">Not Set</Tag>
              ) : (
                data.max_month
              )}
            </span>
          </Col>
        </Row>
      </div>
    );

    return (
      <Card>
        <Col xs={24} sm={24} md={16} xl={24} xxl={24}>
          <ProfileInfo avatarSize={avatarSize} />
        </Col>

        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        />
        <Table dataSource={companyData}>
          <Column
            title="Limit (%)"
            dataIndex="s_a_percentage"
            key="s_a_percentage"
          />
          <Column
            title="Int. (%)"
            dataIndex="loan_interest"
            key="loan_interest"
          />
          <ColumnGroup title="Months Interest">
            <Column
              title="4 To 6"
              dataIndex="four_to_six_interest"
              key="four_to_six_interest"
            />
            <Column
              title="7 To 9"
              dataIndex="seven_to_nine_interest"
              key="seven_to_nine_interest"
            />
            <Column
              title="10 To 12"
              dataIndex="ten_to_twelve_interest"
              key="ten_to_twelve_interest"
            />
            <Column
              title="13 To 15"
              dataIndex="thirteen_to_fifteen_interest"
              key="thirteen_to_fifteen_interest"
            />

            <Column
              title="16 To 18"
              dataIndex="sixteen_to_eighteen_interest"
              key="sixteen_to_eighteen_interest"
            />
            <Column
              title="19 To 21"
              dataIndex="nineteen_to_twentyone_interest"
              key="nineteen_to_twentyone_interest"
            />
            <Column
              title="22 To 24"
              dataIndex="twentytwo_to_twentyfour_interest"
              key="twentytwo_to_twentyfour_interest"
            />
          </ColumnGroup>
        </Table>
      </Card>
    );
  }
}

const mapStateToProps = ({ institutions }) => {
  let { institutionDetails } = institutions;
  return {
    institutionDetails,
  };
};

const mapDispatchToProps = {
  getInstitute,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewInstitution);
