import {
  GET_INSTITUTE,
  GET_INSTITUTIONS,
  SAVE_INSTITUTE,
  SAVE_INSTITUTIONS,
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

export const saveInstitute = (instituteDetails) => {
  return {
    type: SAVE_INSTITUTE,
    instituteDetails,
  };
};