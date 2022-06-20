import {
  GET_MESSAGES,
  SAVE_MESSAGES,
  SEND_MESSAGE,
} from "redux/constants/Messaging";

const initState = {
  loading: false,
  message: "",
  showMessage: false,
  messages: [],
};

const messaging = (state = initState, action) => {
  switch (action.type) {
    case SAVE_MESSAGES:
      return {
        ...state,
        loading: false,
        messages: action.messages,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        message: action.message,
        showMessage: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default messaging;
