import React, { Component } from "react";
import { Table, Tag } from "antd";
import { connect } from "react-redux";
import { getPermissionsList } from "redux/actions/RolesPermissions";

export class Permissions extends Component {
  state = {
    data: [],
  };
  componentDidMount = () => {
    this.props.getPermissionsList();
    this.setState({
      data: this.props.permissions,
    });
  };

  render() {
    let color = 'geekblue';
    const columns = [
      {
        title: "Name",
        dataIndex: "permissionName",
        key: "permissionName"
      },
      {
        title: "Description",
        key: "permissionDescription",
        dataIndex: "permissionDescription",
        ellipsis: true,
      },
      {
        title: "Permissions Group",
        key: "permissionGroup",
        dataIndex: "permissionGroup",
        render: (permissionGroup) => (
          <Tag color={color}>
            {permissionGroup}
          </Tag>
        ),
      },
    ];
    return <Table columns={columns} dataSource={this.state.data} rowKey='permissionName'/>;
  }
}

const mapStateToProps = ({ rolesPermissions }) => {
  let permissionList = [];
  let permissionsArrayed = Object.entries(rolesPermissions.permissions);

  function createData(
    permissionNumber,
    permissionName,
    permissionDescription,
    permissionGroup
  ) {
    return {
      permissionNumber,
      permissionName,
      permissionDescription,
      permissionGroup,
    };
  }

  for (let x = 0; x < permissionsArrayed.length; x++) {
    let permissionGroupName = permissionsArrayed[x][0];
    let arrayedSub = Object.entries(permissionsArrayed[x][1]);
    for (let y = 0; y < arrayedSub.length; y++) {
      let permissionName = arrayedSub[y][0].replace(/-/g, " ")
      let permissionDescription = arrayedSub[y][1];
      permissionList[y] = createData(
        y + 1,
        permissionName,
        permissionDescription,
        permissionGroupName
      );
    }
  }

  return {
    permissions: permissionList,
  };
};

const mapDispatchToProps = {
  getPermissionsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Permissions);
