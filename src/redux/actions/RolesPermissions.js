import {
  GET_ROLES,
  GET_USER_ROLES,
  GET_PERMISSIONS,
  SAVE_ROLES,
  ROLE_DETAILS,
  GET_ROLE_PERMISSIONS,
  SAVE_PERMISSIONS,
} from "redux/constants/RolesPermissions";

export const saveRolesList = (roles) => {
  return {
    type: SAVE_ROLES,
    roles,
  };
};

export const getRolesList = () => {
  return {
    type: GET_ROLES,
  };
};

export const getPermissionsList = () => {
  return {
    type: GET_PERMISSIONS,
  };
};

export const savePermissionsList = (permissions) => {
  return {
    type: SAVE_PERMISSIONS,
    permissions,
  };
};

export const getRolesAssignedPermissions = (role) => {
  return {
    type: GET_ROLE_PERMISSIONS,
    payload: role,
  };
};

export const saveRolesAssignedPermissions = (roleAssignedPermissions) => {
  return {
    type: ROLE_DETAILS,
    roleAssignedPermissions,
  };
};
