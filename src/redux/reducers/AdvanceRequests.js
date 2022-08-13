import {
  SAVEMAINMENUDATA,
  SAVENORMALREQUESTSMENU,
  SAVETSCREQUESTSMENU,
} from "../constants/AdvanceRequests";

const initState = {
  advanceRequestMainMenu: {},
  normalRequestMainMenu: {},
  tscRequestMainMenu: {},
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

    default:
      return state;
  }
};

export default advanceRequest;
