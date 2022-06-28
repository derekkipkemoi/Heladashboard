import React, { Component } from "react";
import { Table, Divider, Tooltip } from "antd";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { getRolesList } from "redux/actions/RolesPermissions";
import { Link } from "react-router-dom";

export class Roles extends Component {
  state = {
    data: [],
  };
  componentDidMount = () => {
    this.props.getRolesList();
    this.setState({
      data: this.props.roles,
    });
  };

  componentDidUpdate = (prevProps)=>{
    if (this.props !== prevProps) {
      this.setState({
        data: this.props.roles,
      });
    }
  }

  viewMessageDetails = (id) => {
    const { match, history } = this.props;
    history.push(`${match.url}/${id}`);
  };
  render() {
    const { match, history } = this.props;
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Description",
        key: "description",
        dataIndex: "description",
        ellipsis: true,
      },
      {
        title: "Action",
        key: "name",
        render: (text, record) => (
          <span>
            <Link
              to={{
                pathname: `viewrole/${record.name}`,
                state: {
                  role: record.name,
                  description: record.description,
                },
              }}
            >
              <Tooltip title={`View ${record.name} role`}>
                <EyeOutlined style={{ fontSize: "20px" }} />
              </Tooltip>
            </Link>

            <Divider type="vertical" />
            <Link
              to={{
                pathname: `updaterole/${record.name}`,
                state: {
                  role: record.name,
                  description: record.description,
                },
              }}
            >
              <Tooltip title={`Update ${record.name} role`}>
                <EditOutlined style={{ fontSize: "20px" }} />
              </Tooltip>
            </Link>
          </span>
        ),
      },
    ];
    return (
      <Table columns={columns} dataSource={this.state.data} rowKey="name" />
    );
  }
}

const mapStateToProps = ({ rolesPermissions }) => {
  let rolesList = [];
  function createData(roleNumber, name, description) {
    return { roleNumber, name, description };
  }

  for (let x = 0; x < rolesPermissions.roles.length; x++) {
    rolesList[x] = createData(
      x + 1,
      rolesPermissions.roles[x].name,
      rolesPermissions.roles[x].description
    );
  }

  return {
    roles: rolesList,
  };
};

const mapDispatchToProps = {
  getRolesList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Roles);
