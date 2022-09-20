import {
  ADD_COMMENT,
  ADD_DATASHEET_NUMBER,
  ADD_FILE,
  CALCULATOR,
  CALCULATOR_RESPONSE_DATA,
  DOWNLOADED_APPLICATION,
  DOWNLOAD_APPLICATION,
  GETREQUESTSDATA,
  GET_ADVANCE_REQUEST_ACTION_MESSAGE,
  GET_STOP_ORDERS_DATA,
  GET_STOP_ORDERS_USER_DATA,
  GET_USER_REQUESTS_DATA,
  MAINMENUDATA,
  MESSAGE_ADVANCE_REQUEST,
  NORMALREQUESTSMENU,
  POST_ADVANCE_REQUEST_ACTION,
  SAVEMAINMENUDATA,
  SAVENORMALREQUESTSMENU,
  SAVEREQUESTSDATA,
  SAVETSCREQUESTSMENU,
  SAVE_USER_REQUESTS_DATA,
  SEARCH_LOAN_BY_REFNO,
  SEARCH_LOAN_BY_REFNO_RESPONSE,
  STOP_ORDERS_DATA,
  STOP_ORDERS_MENU,
  STOP_ORDERS_MENU_DATA,
  STOP_ORDERS_USER_DATA,
  STOP_ORDER_DATASHEET_NUMBER,
  STOP_ORDER_GENERATE_DATASHEET,
  TSCREQUESTSMENU,
  UPDATE_ADVANCE_REQUEST,
  UPDATE_STOP_ORDER,
} from "../constants/AdvanceRequests";

export const getAdvanceRequestMainMenu = () => {
  return {
    type: MAINMENUDATA,
  };
};

export const saveAdvanceRequestMainMenu = (advanceRequestMainMenu) => {
  return {
    type: SAVEMAINMENUDATA,
    advanceRequestMainMenu,
  };
};

export const getNormalRequestsMainMenu = () => {
  return {
    type: NORMALREQUESTSMENU,
  };
};

export const saveNormalRequestsMainMenu = (normalRequestMainMenu) => {
  return {
    type: SAVENORMALREQUESTSMENU,
    normalRequestMainMenu,
  };
};

export const getTscMainMenu = () => {
  return {
    type: TSCREQUESTSMENU,
  };
};

export const getRequestsData = (path) => {
  return {
    type: GETREQUESTSDATA,
    payload: path,
  };
};

export const getUserRequestsData = (id) => {
  return {
    type: GET_USER_REQUESTS_DATA,
    payload: id,
  };
};

export const saveUserRequestsData = (userRequestData) => {
  return {
    type: SAVE_USER_REQUESTS_DATA,
    userRequestData,
  };
};

export const saveRequestsData = (requestsData) => {
  return {
    type: SAVEREQUESTSDATA,
    requestsData,
  };
};

export const saveTSCMainMenu = (tscRequestMainMenu) => {
  return {
    type: SAVETSCREQUESTSMENU,
    tscRequestMainMenu,
  };
};

export const postAdvanceRequestsAction = (id, actionPath) => {
  return {
    type: POST_ADVANCE_REQUEST_ACTION,
    payload: { id, actionPath },
  };
};

export const getAdvanceRequestActionMessage = (message) => {
  return {
    type: GET_ADVANCE_REQUEST_ACTION_MESSAGE,
    message,
  };
};

export const calculator = (inputValues) => {
  return {
    type: CALCULATOR,
    payload: inputValues,
  };
};

export const calculatorResponseData = (responseValues) => {
  return {
    type: CALCULATOR_RESPONSE_DATA,
    responseValues,
  };
};

export const updateAdvanceRequest = (values) => {
  return {
    type: UPDATE_ADVANCE_REQUEST,
    payload: values,
  };
};

export const addDatasheetNumber = (values) => {
  return {
    type: ADD_DATASHEET_NUMBER,
    payload: values,
  };
};

export const downloadApplication = (id) => {
  return {
    type: DOWNLOAD_APPLICATION,
    payload: { id },
  };
};

export const downloadedApplication = (data) => {
  
  return {
    type: DOWNLOADED_APPLICATION,
    data,
  };
};

export const addComment = (values) => {
  return {
    type: ADD_COMMENT,
    payload: values
  };
};

export const addFile = (values) => {
  return {
    type: ADD_FILE,
    payload: values
  };
};

export const stopOrdersMenu = () => {
  return {
    type: STOP_ORDERS_MENU
  };
};

export const stopOrdersMenuData = (stopOrdersMenuData) => {
  return {
    type: STOP_ORDERS_MENU_DATA,
    stopOrdersMenuData
  };
};

export const getStopOrdersData = (path) => {
  return {
    type: GET_STOP_ORDERS_DATA,
    payload: path,
  };
};

export const stopOrdersData = (stopOrders) => {
  return {
    type: STOP_ORDERS_DATA,
    stopOrders,
  };
};

export const getStopOrdersUserData = (id) => {
  return {
    type: GET_STOP_ORDERS_USER_DATA,
    payload: id,
  };
};

export const stopOrdersUserData = (stopOrdersUserData) => {
  return {
    type: STOP_ORDERS_USER_DATA,
    stopOrdersUserData,
  };
};

export const UpdateStopOrder = (payload) => {
  return {
    type: UPDATE_STOP_ORDER,
    payload
  };
};

export const stopOrderGenerateDatasheet = () => {
  return {
    type: STOP_ORDER_GENERATE_DATASHEET,
  };
};

export const stopOrderDatasheetNumber = (datasheet) => {
  return {
    type: STOP_ORDER_DATASHEET_NUMBER,
    datasheet
  };
};

export const searchLoanByRefNo = (ref_no) => {
  return {
    type: SEARCH_LOAN_BY_REFNO,
    payload: ref_no
  };
};

export const searchLoanByRefNoResponse = (loanSearchData) => {
  return {
    type: SEARCH_LOAN_BY_REFNO_RESPONSE,
    loanSearchData
  };
};

