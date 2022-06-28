import { SAVE_INSTITUTE, SAVE_INSTITUTIONS } from "redux/constants/Institutions";

const initState = {
  institutionsList: [],
  institutionDetails: {}
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

    default:
      return state;
  }
};

export default Institutions;