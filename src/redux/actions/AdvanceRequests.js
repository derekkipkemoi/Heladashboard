import {
  GETREQUESTSDATA,
  GET_ADVANCE_REQUEST_ACTION_MESSAGE,
  GET_USER_REQUESTS_DATA,
  MAINMENUDATA,
  NORMALREQUESTSMENU,
  POST_ADVANCE_REQUEST_ACTION,
  SAVEMAINMENUDATA,
  SAVENORMALREQUESTSMENU,
  SAVEREQUESTSDATA,
  SAVETSCREQUESTSMENU,
  SAVE_USER_REQUESTS_DATA,
  TSCREQUESTSMENU,
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
