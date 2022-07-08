import { SAVE_PAYROLL_REGISTRATION } from "redux/constants/Payroll";

const initState = {
  payRollRegistration: [],
};

const payRollRegistration = (state = initState, action) => {
  switch (action.type) {
    case SAVE_PAYROLL_REGISTRATION:
      return {
        ...state,
        payRollRegistration: action.payRollRegistration,
      };

    default:
      return state;
  }
};

export default payRollRegistration;
