import {
  GET_INSTITUTE,
  GET_INSTITUTIONS,
  SAVE_INSTITUTE,
  SAVE_INSTITUTIONS,
  UPDATE_INSTITUTE,
  INSTITUTE_UPDATED
} from "redux/constants/Institutions";

export const getInstitutions = () => {
  return {
    type: GET_INSTITUTIONS,
  };
};

export const saveInstitutions = (institutions) => {
  return {
    type: SAVE_INSTITUTIONS,
    institutions,
  };
};

export const getInstitute = (id) => {
  return {
    type: GET_INSTITUTE,
    payload: id,
  };
};

export const updateInstitute = (data) => {
  return {
    type: UPDATE_INSTITUTE,
    payload: data
  };
};

export const instituteUpdated = (message) => {
  return {
    type: INSTITUTE_UPDATED,
    message
  };
};

export const saveInstitute = (instituteDetails) => {
  return {
    type: SAVE_INSTITUTE,
    instituteDetails,
  };
};