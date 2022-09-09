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
  TSCREQUESTSMENU,
  UPDATE_ADVANCE_REQUEST,
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
