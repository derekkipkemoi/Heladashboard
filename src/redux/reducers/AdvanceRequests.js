import {
  CALCULATOR_RESPONSE_DATA,
  DOWNLOADED_APPLICATION,
  GET_ADVANCE_REQUEST_ACTION_MESSAGE,
  SAVEMAINMENUDATA,
  SAVENORMALREQUESTSMENU,
  SAVEREQUESTSDATA,
  SAVETSCREQUESTSMENU,
  SAVE_USER_REQUESTS_DATA,
  SEARCH_LOAN_BY_REFNO_RESPONSE,
  STOP_ORDERS_DATA,
  STOP_ORDERS_MENU_DATA,
  STOP_ORDERS_USER_DATA,
  STOP_ORDER_DATASHEET_NUMBER,
} from "../constants/AdvanceRequests";

const initState = {
  advanceRequestMainMenu: {},
  normalRequestMainMenu: {},
  tscRequestMainMenu: {},
  requestsData: [],
  userRequestData: {},
  actionResponseMessage: "",
  responseValues: {},
  downloadedApplication: {},
  stopOrdersMenuData: {},
  stopOrders: [],
  stopOrdersUserData: {},
  datasheet: "",
  loanSearchData: {}
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

      case STOP_ORDERS_MENU_DATA:
        return {
          ...state,
          stopOrdersMenuData: action.stopOrdersMenuData,
        };

        case STOP_ORDERS_DATA:
        return {
          ...state,
          stopOrders: action.stopOrders,
        };

        case STOP_ORDERS_USER_DATA:
          return {
            ...state,
            stopOrdersUserData: action.stopOrdersUserData,
          };

          case STOP_ORDER_DATASHEET_NUMBER:
          return {
            ...state,
            datasheet: action.datasheet,
          };

          case SEARCH_LOAN_BY_REFNO_RESPONSE:
          return {
            ...state,
            loanSearchData: action.loanSearchData,
          };




    default:
      return state;
  }
};

export default advanceRequest;
