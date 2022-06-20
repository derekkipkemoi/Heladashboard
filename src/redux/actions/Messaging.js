import {
    GET_MESSAGES, SAVE_MESSAGES, SEND_MESSAGE
} from '../constants/Messaging'

export const saveMessagesList = (messages) => {
    return {
      type: SAVE_MESSAGES,
      messages
    }
  };

  export const getMessagesList = () => {
    return {
      type: GET_MESSAGES,
    }
  };
