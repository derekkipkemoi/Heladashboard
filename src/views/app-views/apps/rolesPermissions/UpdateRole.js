import React, { Component } from "react";
import { Card, Checkbox, Space, Button, Spin, Alert } from "antd";
import { connect } from "react-redux";
import { LeftCircleOutlined } from "@ant-design/icons";
import AvatarStatus from "components/shared-components/AvatarStatus";
import {
  getRolesAssignedPermissions,
  getPermissionsList,
} from "redux/actions/RolesPermissions";

function createData(permissionName, exist) {
  return { permissionName, exist };
}

function createAllData(permissionGroup, permissionsList) {
  return { permissionGroup, permissionsList };
}

class UpdateRole extends Component {
  state = {
    loading: false,
    data: [],
    role: "",
    description: "",
  };
  back() {
    this.props.history.goBack();
  }
  componentDidMount = () => {
    const { role, description } = this.props.location.state;
    this.setState({
      loading: true,
      role: role,
      description: description,
    });

    this.props.getRolesAssignedPermissions(role);
    this.props.getPermissionsList();
  };

  componentDidUpdate = (prevProps) => {
    if (this.props !== prevProps) {
      this.setState({
        data: this.props.allPermissionsList,
        loading: false
      });
    }
  };

  handleCheckBoxChange = (permissionName) => {
    let permissionList = [];
    for (let x = 0; x < this.state.data.length; x++) {
      let permissionsInGroupList = [];
      const element = this.state.data[x];
      const permissions = element.permissionsList;
      const permissionGroupName = element.permissionGroup;
      for (let y = 0; y < permissions.length; y++) {
        if (permissionName === permissions[y].permissionName) {
          if (permissions[y].exist) {
            permissionsInGroupList[y] = createData(
              permissions[y].permissionName,
              false
            );
          } else {
            permissionsInGroupList[y] = createData(
              permissions[y].permissionName,
              true
            );
          }
        } else {
          permissionsInGroupList[y] = createData(
            permissions[y].permissionName,
            permissions[y].exist
          );
        }
      }
      permissionList[x] = createAllData(
        permissionGroupName,
        permissionsInGroupList
      );
    }
    this.setState({
      data: permissionList,
    });
  };

  render() {
    const gridStyle = {
      width: "25%",
      textAlign: "center",
    };

    let permissions = this.state.data;

    const toTitleCase = (str) =>
      str.replace(
        /(^\w|\s\w)(\S*)/g,
        (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
      );

    const spinStyle = {
      textAlign: "center",
      background: "rgba(0, 0, 0, 0.05)",
      borderRadius: " 4px",
      marginBottom: "20px",
      padding: "30px 50px",
      margin: "20px 0",
    };

    return (
      <div>
        <div className="d-flex align-items-center mb-3">
          <a
            className="font-size-md mr-3"
            onClick={() => {
              this.back();
            }}
          >
            <LeftCircleOutlined className="font-size-md ml-0" />
          </a>
          <AvatarStatus
            src="avatar"
            name={this.state.role}
            subTitle={`Description: ${this.state.description}`}
          />
        </div>

        <h5>Roles permission</h5>
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
            {permissions.map((permission, index) => {
              return (
                <Card
                  title={toTitleCase(
                    permission.permissionGroup.replace(/_/g, " ")
                  )}
                >
                  {permission.permissionsList.map(
                    (permisionsListNames, index1) => {
                      return (
                        <Card.Grid>
                          <Space>
                            <Checkbox
                              checked={permisionsListNames.exist}
                              onChange={(e) =>
                                this.handleCheckBoxChange(
                                  permisionsListNames.permissionName
                                )
                              }
                            />
                            <span>{permisionsListNames.permissionName}</span>
                          </Space>
                        </Card.Grid>
                      );
                    }
                  )}
                </Card>
              );
            })}
          </div>
        )}

        <div className="mt-5 text-right">
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ rolesPermissions }) => {
  let permissionList = [];
  let userAssignedPermissionsList = [];
  let permissionsArrayed = Object.entries(rolesPermissions.permissions);

  let userPermissionsArrayed = Object.entries(
    rolesPermissions.roleAssignedPermissions
  );

  for (let y = 0; y < userPermissionsArrayed.length; y++) {
    let arrayedSub = Object.entries(userPermissionsArrayed[y][1]);
    for (let q = 0; q < arrayedSub.length; q++) {
      userAssignedPermissionsList.push(arrayedSub[q][0]);
    }
  }

  for (let x = 0; x < permissionsArrayed.length; x++) {
    let permissionsInGroupList = [];
    let permissionGroupName = permissionsArrayed[x][0];
    let arrayedSub = Object.entries(permissionsArrayed[x][1]);
    for (let y = 0; y < arrayedSub.length; y++) {
      let permissionName = arrayedSub[y][0];

      if (userAssignedPermissionsList.indexOf(permissionName) > -1) {
        permissionsInGroupList[y] = createData(permissionName, true);
      } else {
        permissionsInGroupList[y] = createData(permissionName, false);
      }
    }

    permissionList[x] = createAllData(
      permissionGroupName,
      permissionsInGroupList
    );
  }
  return {
    allPermissionsList: permissionList,
  };
};

const mapDispatchToProps = {
  getPermissionsList,
  getRolesAssignedPermissions,
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateRole);
