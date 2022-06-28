import {
  GET_USERS,
  SAVE_USERS,
  SAVE_WEEKLY_DATA,
  GET_WEEKLY_DATA,
  GET_USER_DETAILS,
  SAVE_USER
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
    data
  };
};

export const getUserDetails = (id) => {
  console.log("Id in action", id)
  return {
    type: GET_USER_DETAILS,
    payload: id
  };
};

export const saveUser = (user) => {
  return {
    type: SAVE_USER,
    user
  };
};
