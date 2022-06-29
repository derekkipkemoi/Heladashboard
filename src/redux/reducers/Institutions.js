import { message } from "antd";
import { INSTITUTE_UPDATED, SAVE_INSTITUTE, SAVE_INSTITUTIONS } from "redux/constants/Institutions";

const initState = {
  institutionsList: [],
  institutionDetails: {},
  loading: true,
  message: ""
};

const Institutions = (state = initState, action) => {
  switch (action.type) {
    case SAVE_INSTITUTIONS:
      return {
        ...state,
        institutionsList: action.institutions,
      };

      case SAVE_INSTITUTE:
      return {
        ...state,
        institutionDetails: action.instituteDetails,
      };

      case INSTITUTE_UPDATED:
      return {
        ...state,
        message: action.message,
        loading: false
      };

    default:
      return state;
  }
};

export default Institutions;