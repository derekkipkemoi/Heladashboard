import { GET_USER_DETAILS, SAVE_USER, SAVE_USERS, SAVE_WEEKLY_DATA, UPDATE_USER, USER_UPDATED } from "redux/constants/Users";

const initState = {
  users: [],
  weekLyData: {},
  loadingUser: true,
  user: {},
  message: ""
};

const Users = (state = initState, action) => {
  switch (action.type) {
    case SAVE_USERS:
      return {
        ...state,
        users: action.users,
      };

      case SAVE_WEEKLY_DATA:
      return {
        ...state,
        weekLyData: action.data,
      };
      case GET_USER_DETAILS:
        return{
          ...state,
          loadingUser: true
        }
      case SAVE_USER:
      return {
        ...state,
        user: action.user,
        loadingUser: false
      };
      case USER_UPDATED:
      return {
        ...state,
        message: action.message,
        loadingUser: false
      };
      case UPDATE_USER:
      return {
        ...state,
        loadingUser: true
      };
    default:
      return state;
  }
};

export default Users;
