import {
  GET_MESSAGES,
  GET_REMINDER,
  GET_REMINDER_LIST,
  GET_TEMPLATE,
  GET_TEMPLATE_LIST,
  MESSAGE_UPDATE,
  SAVE_MESSAGES,
  SAVE_REMINDER,
  SAVE_REMINDER_LIST,
  SAVE_TEMPLATE,
  SAVE_TEMPLATE_LIST,
  SEND_MESSAGE,
} from "redux/constants/Messaging";

const initState = {
  loading: true,
  message: "",
  showMessage: false,
  messages: [],
  templateList: [],
  reminderList: [],
  template: {},
  reminder: {},
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

      case SAVE_TEMPLATE_LIST:
      return {
        ...state,
        templateList: action.templateList,
      };

      case SAVE_REMINDER_LIST:
      return {
        ...state,
        reminderList: action.reminderList,
      };

      case SAVE_TEMPLATE:
      return {
        ...state,
        template: action.template,
      };

      case SAVE_REMINDER:
      return {
        ...state,
        reminder: action.reminder,
      };


      case GET_TEMPLATE:
      return {
        ...state,
        template: action.template,
      };

      case GET_REMINDER_LIST:
      return {
        ...state,
        reminderList: action.reminderList,
      };

      case GET_REMINDER:
      return {
        ...state,
        reminder: action.reminder,
      };

      case MESSAGE_UPDATE:
      return {
        ...state,
        message: action.message,
        loading: false
      };
    default:
      return state;
  }
};

export default messaging;
