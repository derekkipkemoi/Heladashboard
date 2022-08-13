import React, { Component } from "react";
import { Card, Table, Input, Row, Menu, Tag, Typography } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import Flex from "components/shared-components/Flex";
import EllipsisDropdown from "components/shared-components/EllipsisDropdown";
import InstitutionsMenu from "./InstitutionsMenu";
import { connect } from "react-redux";
import { getInstitutions } from "redux/actions/Institutions";
const { Text } = Typography;

class Institutions extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.props.getInstitutions();
    console.log("Institutions", this.props.institutionsList);
    this.setState({
      data: this.props.institutionsList,
    });
  }

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      this.setState({
        data: this.props.institutionsList,
      });
    }
  };

  filterData(inputValue) {
    const data = this.state.data;
    console.log("Institutions", data);
    const filtered = data.filter(
      (item) =>
        item.name.toLowerCase().includes(inputValue) ||
        item.company_code.toLowerCase().includes(inputValue)
      // item.approved.includes(inputValue) ||
      // item.email.includes(inputValue) ||
      // item.phone.includes(inputValue) ||
      // item.postal_address.includes(inputValue) ||
      // item.created_at.includes(inputValue)
    );

    console.log("Filtered", filtered);

    this.setState({
      data: filtered,
    });
  }

  onSearch = (event) => {
    const inputValue = event.target.value;
    console.log("Search", inputValue);
    this.filterData(inputValue);
    if (inputValue.length <= 0) {
      this.setState({
        data: this.props.institutionsList,
      });
    }
  };
  render() {
    let { data } = this.state;

    const viewDetails = (row) => {
      this.props.history.push(
        `/app/apps/institutions/viewinstitution/${row.id}`
      );
    };

    const updateDetails = (row) => {
      console.log(row);
      this.props.history.push(
        `/app/apps/institutions/updateinstitution/${row.id}`
      );
    };

    const addInstitute = () => {
      this.props.history.push(`/app/apps/institutions/addinstitution`);
    };

    const dropdownMenu = (row) => (
      <Menu>
        <Menu.Item onClick={(e) => viewDetails(row)}>
          <Flex alignItems="center">
            <EyeOutlined />
            <span className="ml-2">View Institution</span>
          </Flex>
        </Menu.Item>

        <Menu.Item onClick={(e) => updateDetails(row)}>
          <Flex alignItems="center">
            <EditOutlined />
            <span className="ml-2">Update Institution</span>
          </Flex>
        </Menu.Item>
      </Menu>
    );
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        // ellipsis: true,
      },
      {
        title: "Code",
        dataIndex: "company_code",
        key: "company_code",
      },
      {
        title: "Account Status",
        dataIndex: "approved",
        key: "approved",
        render: (approved) => (
          <div>
            {approved !== 1 ? (
              <Tag className="text-capitalize" color="cyan">
                Approved
              </Tag>
            ) : (
              <Tag className="text-capitalize" color="yellow">
                Not Approved
              </Tag>
            )}
          </div>
        ),
      },
      // {
      //   title: "Limit (%)",
      //   dataIndex: "s_a_percentage",
      //   key: "s_a_percentage",
      // },
      // {
      //   title: "Int. (%)",
      //   dataIndex: "loan_interest",
      //   key: "loan_interest",
      // },
      {
        title: "Address",
        dataIndex: "postal_address",
        key: "postal_address",
        render: (postal_address) => (
          <div>
            {postal_address.length < 1 ? (
              <Tag className="text-capitalize" color="yellow">
                Not Set
              </Tag>
            ) : (
              <Text>{postal_address}</Text>
            )}
          </div>
        ),
      },
      // {
      //   title: "Max Month",
      //   dataIndex: "max_month",
      //   key: "max_month",
      // },
      // {
      //   title: "4 To 6 Months Interest",
      //   dataIndex: "four_to_six_interest",
      //   key: "four_to_six_interest",
      // },
      // {
      //   title: "7 To 9 Months Interest",
      //   dataIndex: "seven_to_nine_interest",
      //   key: "seven_to_nine_interest",
      // },

      // {
      //   title: "10 To 12 Months Interest",
      //   dataIndex: "ten_to_twelve_interest",
      //   key: "ten_to_twelve_interest",
      // },
      // {
      //   title: "13 To 15 Months Interest",
      //   dataIndex: "thirteen_to_fifteen_interest",
      //   key: "thirteen_to_fifteen_interest",
      // },
      // {
      //   title: "16 To 18 Months Interest",
      //   dataIndex: "sixteen_to_eighteen_interest",
      //   key: "sixteen_to_eighteen_interest",
      // },
      // {
      //   title: "19 To 21 Months Interest",
      //   dataIndex: "nineteen_to_twentyone_interest",
      //   key: "nineteen_to_twentyone_interest",
      // },

      // {
      //   title: "22 To 24 Months Interest",
      //   dataIndex: "twentytwo_to_twentyfour_interest",
      //   key: "twentytwo_to_twentyfour_interest",
      // },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
        render: (phone) => (
          <div>
            {phone.length < 1 ? (
              <Tag className="text-capitalize" color="yellow">
                Not Set
              </Tag>
            ) : (
              <Text>{phone}</Text>
            )}
          </div>
        ),
      },

      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        render: (email) => (
          <div>
            {email.length < 1 ? (
              <Tag className="text-capitalize" color="yellow">
                Not Set
              </Tag>
            ) : (
              <Text>{email}</Text>
            )}
          </div>
        ),
      },
      // {
      //   title: "Type",
      //   dataIndex: "type_id",
      //   key: "type_id",
      // },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
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
      <Card bodyStyle={{ padding: "0" }}>
        <InstitutionsMenu {...this.props} printPdf={this.printPdf} />
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
            <Table columns={columns} dataSource={data} />
          </div>
        </Card>
      </Card>
    );
  }
}

const mapStateToProps = ({ institutions }) => {
  let { institutionsList } = institutions;
  return {
    institutionsList,
  };
};

const mapDispatchToProps = {
  getInstitutions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Institutions);
