import {
  CALCULATOR_RESPONSE_DATA,
  DOWNLOADED_APPLICATION,
  GET_ADVANCE_REQUEST_ACTION_MESSAGE,
  SAVEMAINMENUDATA,
  SAVENORMALREQUESTSMENU,
  SAVEREQUESTSDATA,
  SAVETSCREQUESTSMENU,
  SAVE_USER_REQUESTS_DATA,
} from "../constants/AdvanceRequests";

const initState = {
  advanceRequestMainMenu: {},
  normalRequestMainMenu: {},
  tscRequestMainMenu: {},
  requestsData: [],
  userRequestData: {},
  actionResponseMessage: "",
  responseValues: {},
  downloadedApplication: {}
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

    case SAVE_USER_REQUESTS_DATA:
      return {
        ...state,
        userRequestData: action.userRequestData,
      };

    case GET_ADVANCE_REQUEST_ACTION_MESSAGE:
      return {
        ...state,
        actionResponseMessage: action.message,
      };

    case CALCULATOR_RESPONSE_DATA:
      return {
        ...state,
        responseValues: action.responseValues,
      };

      case DOWNLOADED_APPLICATION:
      return {
        ...state,
        downloadedApplication: action.data,
      };


    default:
      return state;
  }
};

export default advanceRequest;
