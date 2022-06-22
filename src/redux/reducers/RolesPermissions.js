import { GET_ROLES, GET_USER_ROLES, GET_PERMISSIONS, SAVE_ROLES, ROLE_DETAILS, SAVE_PERMISSIONS } from "redux/constants/RolesPermissions";
  
  const initState = {
    loading: false,
    message: "",
    showMessage: false,
    roles: [],
    permissions: [],
    roleAssignedPermissions: {}
  };
  
  const rolesPermissions = (state = initState, action) => {
    switch (action.type) {
      case SAVE_ROLES:
        return {
          ...state,
          loading: false,
          roles: action.roles,
        };

        case ROLE_DETAILS:
        return {
          ...state,
          loading: false,
          roleAssignedPermissions: action.roleAssignedPermissions,
        };

        case SAVE_PERMISSIONS:
        return {
          ...state,
          loading: false,
          permissions: action.permissions,
        };
      default:
        return state;
    }
  };
  
  export default rolesPermissions;
  