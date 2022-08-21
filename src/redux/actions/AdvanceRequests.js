import {
  GETREQUESTSDATA,
  MAINMENUDATA,
  NORMALREQUESTSMENU,
  SAVEMAINMENUDATA,
  SAVENORMALREQUESTSMENU,
  SAVEREQUESTSDATA,
  SAVETSCREQUESTSMENU,
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
    payload: path
  };
};

export const saveRequestsData = (requestsData) => {
  return {
    type: SAVEREQUESTSDATA,
    requestsData
  };
};

export const saveTSCMainMenu = (tscRequestMainMenu) => {
  return {
    type: SAVETSCREQUESTSMENU,
    tscRequestMainMenu,
  };
};
