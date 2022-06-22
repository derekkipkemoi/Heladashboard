import React, { Component } from "react";
import { Form, Input, Button, Card, Space, Checkbox } from "antd";
import { connect } from "react-redux";
import { getPermissionsList } from "redux/actions/RolesPermissions";
const { TextArea } = Input;

function createData(permissionName) {
  return { permissionName };
}

function createAllData(permissionGroup, permissionsList) {
  return { permissionGroup, permissionsList };
}

class NewRole extends Component {
  state = {};
  componentDidMount = () => {
    this.props.getPermissionsList();
  };
  render() {
    const toTitleCase = (str) =>
      str.replace(
        /(^\w|\s\w)(\S*)/g,
        (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
      );
    return (
      <div>
        <h4 className="mb-4">New Role</h4>

        <Form name="nest-messages" onFinish={this.onFinish}>
          <div>
            <Form.Item>
              <Input placeholder="Role name" />
            </Form.Item>
          </div>

          <TextArea rows={4} placeholder="Type role description" />
          <div>
            <h4 className="mt-4">Roles permission</h4>
            {this.props.allPermissionsList.map((permission, index) => {
              return (
                <Card
                  title={toTitleCase(
                    permission.permissionGroup.replace(/_/g, " ")
                  )}
                >
                  {permission.permissionsList.map(
                    (permissionDescription, index1) => {
                      return (
                        <Card.Grid>
                          <Space>
                            <Checkbox />
                            <span>{permissionDescription.permissionName}</span>
                          </Space>
                        </Card.Grid>
                      );
                    }
                  )}
                </Card>
              );
            })}
          </div>
          <Form.Item>
            <div className="mt-5 text-right">
              <Button type="primary" htmlType="submit">
                Create Role
              </Button>
            </div>
          </Form.Item>
        </Form>
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
      permissionsInGroupList[y] = createData(permissionName);
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
};
export default connect(mapStateToProps, mapDispatchToProps)(NewRole);
