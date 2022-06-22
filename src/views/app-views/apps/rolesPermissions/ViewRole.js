import React, { Component } from "react";
import { Card, Result, Spin, Alert } from "antd";
import { connect } from "react-redux";
import { LeftCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import AvatarStatus from "components/shared-components/AvatarStatus";
import { getRolesAssignedPermissions } from "redux/actions/RolesPermissions";
class ViewRole extends Component {
  state = {
    role: "",
    description: "",
    loading: false,
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
    console.log("Roles name", role, description);
    this.props.getRolesAssignedPermissions(role);  
  };

  componentDidUpdate =(prevProps)=>{
    if(this.props !== prevProps){
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const gridStyle = {
      width: "25%",
      textAlign: "center",
    };

    const toTitleCase = (str) =>
      str.replace(
        /(^\w|\s\w)(\S*)/g,
        (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
      );

    let assignedPermissions = Object.entries(this.props.assigned_permissions);
    let permissionsNames = [];
    let permissionsDescriptions = [];
    for (
      let assign_permission = 0;
      assign_permission < assignedPermissions.length;
      assign_permission++
    ) {
      permissionsNames.push(assignedPermissions[assign_permission][0]);
      const output = Object.entries(
        assignedPermissions[assign_permission][1]
      ).map(([key, value]) => ({
        key,
        value,
      }));
      permissionsDescriptions.push(output);
    }
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
            {assignedPermissions.length > 0 ? (
              <div>
                <h5>Roles permission</h5>
                {assignedPermissions.map((permission, index) => {
                  return (
                    <Card
                      title={toTitleCase(
                        permissionsNames[index].replace(/_/g, " ")
                      )}
                    >
                      {permissionsDescriptions[index].map(
                        (permissionDescription, index1) => {
                          return (
                            <Card.Grid>
                              {permissionDescription.value
                                .replace(/-/g, " ")
                                .replace(/_/g, " ")
                                .charAt(0)
                                .toUpperCase() +
                                permissionDescription.value
                                  .replace(/-/g, " ")
                                  .replace(/_/g, " ")
                                  .slice(1)}
                            </Card.Grid>
                          );
                        }
                      )}
                    </Card>
                  );
                })}
              </div>
            ) : (
              <Result title="No assigned permissions" />
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ rolesPermissions }) => {
  return {
    assigned_permissions: rolesPermissions.roleAssignedPermissions,
  };
};

const mapDispatchToProps = {
  getRolesAssignedPermissions,
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewRole);
