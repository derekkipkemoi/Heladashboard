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
  updateDetails = (id) => {
    this.props.history.push(
      `/app/apps/institutions/updateinstitution/${id}`
    );
  };
  messageCompany = () => {
    this.props.history.push(
      `/app/apps/message/compose`
    );
  };
  render() {
    let { data } = this.state;
    let companyData = [];
    if (data) {
      companyData[0] = data;
    }
    console.log("Object", data);
    const avatarSize = 150;

    const ProfileInfo = (props) => (
      
        <Row justify="center">
          <Col sm={24} md={23}>
            <div className="d-md-flex">
              <div
                className="rounded p-2 bg-white shadow-sm mx-auto"
                style={{
                  marginTop: "0.5rem",
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
                      <Button size="small" type="primary" onClick={()=>this.updateDetails(data.id)}>
                        Update Company
                      </Button>
                      <Button size="small" type="primary" onClick={()=>this.messageCompany()}>
                        Message Company
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
                          {data.email === "" ? (
                            <Tag color="yellow">Not Set</Tag>
                          ) : (
                            data.email
                          )}
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
                          {data.phone === "" ? (
                            <Tag color="yellow">Not Set</Tag>
                          ) : (
                            data.phone
                          )}
                        </span>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} sm={24} md={8}>
                    <Row className="mb-2 mt-2 mt-md-0 ">
                      <Col xs={12} sm={12} md={9}>
                        <Icon
                          type={IdcardOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">Company Code:</span>
                      </Col>
                      <Col xs={12} sm={12} md={15}>
                        <span className="font-weight-semibold">
                          {data.company_code}
                        </span>
                      </Col>
                    </Row>
                    <Row className="mb-2">
                      <Col xs={12} sm={12} md={9}>
                        <Icon
                          type={CalendarOutlined}
                          className="text-primary font-size-md"
                        />
                        <span className="text-muted ml-2">
                          Date of Agreement:
                        </span>
                      </Col>
                      <Col xs={12} sm={12} md={15}>
                        <span className="font-weight-semibold">
                          {data.date_of_agreement}
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
     
    );
    // const ProfileInfo = (props) => (
    //   <Card>
    //     <Row justify="center">
    //       <Col sm={24} md={23}>
    //         <div className="d-md-flex">
    //           <div
    //             className="rounded p-2 bg-white shadow-sm mx-auto"
    //             style={{
    //               maxWidth: `${props.avatarSize + 16}px`,
    //             }}
    //           >
    //             <UserProfileAvatar
    //               shape="square"
    //               name={data.name + " " + data.name}
    //               size={props.avatarSize}
    //             />
    //           </div>
    //           <div className="ml-md-4 w-100">
    //             <Flex
    //               alignItems="center"
    //               mobileFlex={false}
    //               className="mb-3 text-md-left text-center"
    //             >
    //               <h2 className="mb-0 mt-md-0 mt-2">{data.name}</h2>
    //               <div className="ml-md-3 mt-3 mt-md-0">
    //                 <Space>
    //                   <Button size="small" type="primary">
    //                     Update Institution
    //                   </Button>
    //                 </Space>
    //               </div>
    //             </Flex>
    //             <Row>
    //               <Col xs={24} sm={24} md={8}>
    //                 <Row className="mb-2">
    //                   <Col xs={12} sm={12} md={12}>
    //                     <Icon
    //                       type={MailOutlined}
    //                       className="text-primary font-size-md"
    //                     />
    //                     <span className="text-muted ml-2">Email:</span>
    //                   </Col>
    //                   <Col xs={12} sm={12} md={12}>
    //                     <span className="font-weight-semibold">
    //                       {data.email === "" ? (
    //                         <Tag className="text-capitalize" color="yellow">
    //                           Not Set
    //                         </Tag>
    //                       ) : (
    //                         data.email
    //                       )}
    //                     </span>
    //                   </Col>
    //                 </Row>
    //                 <Row>
    //                   <Col xs={12} sm={12} md={12}>
    //                     <Icon
    //                       type={PhoneOutlined}
    //                       className="text-primary font-size-md"
    //                     />
    //                     <span className="text-muted ml-2">Phone:</span>
    //                   </Col>
    //                   <Col xs={12} sm={12} md={12}>
    //                     <span className="font-weight-semibold">
    //                       {data.phone === "" ? (
    //                         <Tag className="text-capitalize" color="yellow">
    //                           Not Set
    //                         </Tag>
    //                       ) : (
    //                         data.phone
    //                       )}
    //                     </span>
    //                   </Col>
    //                 </Row>
    //               </Col>
    //             </Row>
    //           </div>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Card>
    // );

    const columns = [
      // {
      //   title: "Name",
      //   dataIndex: "name",
      //   key: "name",
      //   // ellipsis: true,
      // },
      // {
      //   title: "Code",
      //   dataIndex: "company_code",
      //   key: "company_code",
      // },
      // {
      //   title: "Account Status",
      //   dataIndex: "approved",
      //   key: "approved",
      //   render: (approved) => (
      //     <div>
      //       {approved === 1 ? (
      //         <Tag className="text-capitalize" color="cyan">
      //           Approved
      //         </Tag>
      //       ) : (
      //         <Tag className="text-capitalize" color="yellow">
      //           Not Approved
      //         </Tag>
      //       )}
      //     </div>
      //   ),
      // },
      {
        title: "Limit (%)",
        dataIndex: "s_a_percentage",
        key: "s_a_percentage",
      },
      {
        title: "Int. (%)",
        dataIndex: "loan_interest",
        key: "loan_interest",
      },
      // {
      //   title: "Min Month",
      //   dataIndex: "min_month",
      //   key: "min_month",
      // },
      // {
      //   title: "Max Month",
      //   dataIndex: "max_month",
      //   key: "max_month",
      // },
      {
        title: "4 To 6 Months Interest",
        dataIndex: "four_to_six_interest",
        key: "four_to_six_interest",
      },
      {
        title: "7 To 9 Months Interest",
        dataIndex: "seven_to_nine_interest",
        key: "seven_to_nine_interest",
      },

      {
        title: "10 To 12 Months Interest",
        dataIndex: "ten_to_twelve_interest",
        key: "ten_to_twelve_interest",
      },
      {
        title: "13 To 15 Months Interest",
        dataIndex: "thirteen_to_fifteen_interest",
        key: "thirteen_to_fifteen_interest",
      },
      {
        title: "16 To 18 Months Interest",
        dataIndex: "sixteen_to_eighteen_interest",
        key: "sixteen_to_eighteen_interest",
      },
      {
        title: "19 To 21 Months Interest",
        dataIndex: "nineteen_to_twentyone_interest",
        key: "nineteen_to_twentyone_interest",
      },

      {
        title: "22 To 24 Months Interest",
        dataIndex: "twentytwo_to_twentyfour_interest",
        key: "twentytwo_to_twentyfour_interest",
      },
      // {
      //   title: "Phone",
      //   dataIndex: "phone",
      //   key: "phone",
      //   render: (phone) => (
      //     <div>
      //       {phone.length < 1 ? (
      //         <Tag className="text-capitalize" color="yellow">
      //           Not Set
      //         </Tag>
      //       ) : (
      //         <Text>{phone}</Text>
      //       )}
      //     </div>
      //   ),
      // },

      // {
      //   title: "Email",
      //   dataIndex: "email",
      //   key: "email",
      //   render: (email) => (
      //     <div>
      //       {email.length < 1 ? (
      //         <Tag className="text-capitalize" color="yellow">
      //           Not Set
      //         </Tag>
      //       ) : (
      //         <Text>{email}</Text>
      //       )}
      //     </div>
      //   ),
      // },
      // {
      //   title: "Type",
      //   dataIndex: "type_id",
      //   key: "type_id",
      // },
      // {
      //   title: "Status",
      //   dataIndex: "status",
      //   key: "status",
      // },
    ];
    // const Experiences = () => (
    //   <Card bordered={false}>
    //     <div className="mb-3">
    //       <Row>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Name : </Text>{" "}
    //             {data.name !== "" ? (
    //               <Text className="font-weight-semibold pl-3">{data.name}</Text>
    //             ) : (
    //               <Tag color="gold">Not Set</Tag>
    //             )}
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Phone : </Text>
    //             {data.phone !== "" ? (
    //               <Text className="font-weight-semibold pl-3">
    //                 {data.phone}
    //               </Text>
    //             ) : (
    //               <Tag color="gold">Not Set</Tag>
    //             )}
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Code : </Text>
    //             {data.company_code !== "" ? (
    //               <Text className="font-weight-semibold pl-3">
    //                 {data.company_code}
    //               </Text>
    //             ) : (
    //               <Tag color="gold">Not Set</Tag>
    //             )}
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Account Status : </Text>
    //             {data.approved === 0 ? (
    //               <Text className="font-weight-semibold pl-3">
    //                 Not approved
    //               </Text>
    //             ) : (
    //               <Text className="font-weight-semibold pl-3">Approved</Text>
    //             )}
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Limit % : </Text>
    //             {data.s_a_percentage !== null ? (
    //               <Text className="font-weight-semibold pl-3">
    //                 {data.s_a_percentage}
    //               </Text>
    //             ) : (
    //               <Tag color="gold">Not Set</Tag>
    //             )}
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Loan Interest : </Text>
    //             <Text className="font-weight-semibold pl-3">
    //               {data.loan_interest}
    //             </Text>
    //           </div>
    //         </Col>

    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Minimum Month : </Text>
    //             <Text className="font-weight-semibold pl-3">
    //               {data.min_month}
    //             </Text>
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Max Month : </Text>
    //             <Text className="font-weight-semibold pl-3">
    //               {data.max_month}
    //             </Text>
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">4 To 6 Months' Interest : </Text>
    //             <Text className="font-weight-semibold pl-3">
    //               {data.four_to_six_interest}
    //             </Text>
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">7 To 9 Months' Interest : </Text>
    //             <Text className="font-weight-semibold pl-3">
    //               {data.seven_to_nine_interest}
    //             </Text>
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">10 To 12 Months' Interest : </Text>
    //             <Text className="font-weight-semibold pl-3">
    //               {data.ten_to_twelve_interest}
    //             </Text>
    //           </div>
    //         </Col>

    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">13 to 15 Months' Interest : </Text>
    //             <Text className="font-weight-semibold pl-3">
    //               {data.thirteen_to_fifteen_interest}
    //             </Text>
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">16 to 18 Months' Interest : </Text>
    //             <Text className="font-weight-semibold pl-3">
    //               {data.sixteen_to_eighteen_interest}
    //             </Text>
    //           </div>
    //         </Col>

    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">19 to 21 Months' Interest : </Text>
    //             <Text className="font-weight-semibold pl-3">
    //               {data.nineteen_to_twentyone_interest}
    //             </Text>
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Loan Limit : </Text>
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">22 to 24 Months' Interest : </Text>
    //             <Text className="font-weight-semibold pl-3">
    //               {data.twentytwo_to_twentyfour_interest}
    //             </Text>
    //           </div>
    //         </Col>

    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Agreemt Date : </Text>
    //             {data.date_of_agreement !== null ? (
    //               <Text className="font-weight-semibold pl-3">
    //                 {data.date_of_agreement}
    //               </Text>
    //             ) : (
    //               <Tag color="gold">Not Set</Tag>
    //             )}
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Location : </Text>
    //             {data.location !== "" ? (
    //               <Text className="font-weight-semibold pl-3">
    //                 {data.location}
    //               </Text>
    //             ) : (
    //               <Tag color="gold">Not Set</Tag>
    //             )}
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Reporting Date: </Text>
    //             {data.reporting_date !== null ? (
    //               <Text className="font-weight-semibold pl-3">
    //                 {data.reporting_date}
    //               </Text>
    //             ) : (
    //               <Tag color="gold">Not Set</Tag>
    //             )}
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Type: </Text>
    //             <Text className="font-weight-semibold pl-3">
    //               {data.type_id}
    //             </Text>
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Status : </Text>
    //             {data.status === 1 ? (
    //               <Tag color="cyan">Active</Tag>
    //             ) : (
    //               <Tag color="gold">Inactive</Tag>
    //             )}
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Created At : </Text>
    //             <Text className="font-weight-semibold pl-3">
    //               {data.created_at}
    //             </Text>
    //           </div>
    //         </Col>
    //         <Col sm={24} md={12} xl={8} xxl={8} xs={24}>
    //           <div>
    //             <Text className="text-muted">Updated At : </Text>
    //             <Text className="font-weight-semibold pl-3">
    //               {data.updated_at}
    //             </Text>
    //           </div>
    //         </Col>
    //       </Row>
    //     </div>
    //   </Card>
    // );
    return (
      <Card>
        <Col xs={24} sm={24} md={16} xl={24} xxl={24}>
          <ProfileInfo avatarSize={avatarSize} />
        </Col>

        <Row gutter="16">
          <Col xs={24} sm={24} md={16} xl={24} xxl={24}>
            <Table columns={columns} dataSource={companyData} />
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
