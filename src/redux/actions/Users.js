import {
  GET_USERS,
  SAVE_USERS,
  SAVE_WEEKLY_DATA,
  GET_WEEKLY_DATA,
  GET_USER_DETAILS,
  SAVE_USER,
  USER_UPDATED,
  UPDATE_USER,
  CHANGE_USER_ROLE,
  CHANGE_USER_TYPE,
  DEACTIVATE_USER,
  ACTIVATE_USER,
  DECLINE_USER,
  APPROVE_USER,
  CHANGE_PASSWORD,
} from "redux/constants/Users";

export const getUsers = () => {
  return {
    type: GET_USERS,
  };
};

export const saveUsers = (users) => {
  return {
    type: SAVE_USERS,
    users,
  };
};

export const getWeeklyData = () => {
  return {
    type: GET_WEEKLY_DATA,
  };
};

export const saveWeeklyData = (data) => {
  return {
    type: SAVE_WEEKLY_DATA,
    data,
  };
};

export const getUserDetails = (id) => {
  console.log("Id in action", id);
  return {
    type: GET_USER_DETAILS,
    payload: id,
  };
};

export const saveUser = (user) => {
  return {
    type: SAVE_USER,
    user,
  };
};

export const updateUser = (id, user) => {
  return {
    type: UPDATE_USER,
    payload: { id, user },
  };
};

export const userUpdated = (message) => {
  return {
    type: USER_UPDATED,
    message,
  };
};

export const changeUserRole = (id) => {
  return {
    type: CHANGE_USER_ROLE,
    payload: id,
  };
};

export const changeUserType = (id) => {
  return {
    type: CHANGE_USER_TYPE,
    payload: id,
  };
};

export const deactivateUser = (id, data) => {
  return {
    type: DEACTIVATE_USER,
    payload: { id, data },
  };
};

export const activateUser = (id) => {
  return {
    type: ACTIVATE_USER,
    payload: id,
  };
};

export const declineUser = (id) => {
  return {
    type: DECLINE_USER,
    payload: id,
  };
};

export const approveUser = (id) => {
  return {
    type: APPROVE_USER,
    payload: id,
  };
};

export const changePassword = (id) => {
  return {
    type: CHANGE_PASSWORD,
    payload: id,
  };
};
