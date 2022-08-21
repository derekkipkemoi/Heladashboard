import {
  SAVEMAINMENUDATA,
  SAVENORMALREQUESTSMENU,
  SAVEREQUESTSDATA,
  SAVETSCREQUESTSMENU,
} from "../constants/AdvanceRequests";

const initState = {
  advanceRequestMainMenu: {},
  normalRequestMainMenu: {},
  tscRequestMainMenu: {},
  requestsData: []
};

const advanceRequest = (state = initState, action) => {
  switch (action.type) {
    case SAVEMAINMENUDATA:
      return {
        ...state,
        advanceRequestMainMenu: action.advanceRequestMainMenu,
      };

    case SAVENORMALREQUESTSMENU:
      return {
        ...state,
        normalRequestMainMenu: action.normalRequestMainMenu,
      };

      case SAVETSCREQUESTSMENU:
      return {
        ...state,
        tscRequestMainMenu: action.tscRequestMainMenu,
      };

      case SAVEREQUESTSDATA:
      return {
        ...state,
        requestsData: action.requestsData,
      };

    default:
      return state;
  }
};

export default advanceRequest;
