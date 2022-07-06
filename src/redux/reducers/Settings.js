import { SAVE_SETTINGS, SETTINGS_UPDATED, UPDATE_SETTINGS } from "redux/constants/Settings";

const initState = {
  loading: null,
  setting: {},
  message: ""
};

const settings = (state = initState, action) => {
  switch (action.type) {
    case SAVE_SETTINGS:
      return {
        ...state,
        setting: action.setting
      };
      case UPDATE_SETTINGS:
      return {
        ...state,
        loading: true,
      };
    case SETTINGS_UPDATED:
      return {
        ...state,
        message: action.message,
        loading: false,
      };
    default:
      return state;
  }
};

export default settings;
