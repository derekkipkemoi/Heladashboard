import {
  CREATE_REMINDER,
  CREATE_TEMPLATE,
  DELETE_REMINDER,
  DELETE_TEMPLATE,
  GET_MESSAGES,
  GET_REMINDER,
  GET_REMINDER_LIST,
  GET_TEMPLATE,
  GET_TEMPLATE_LIST,
  MESSAGE_SENT,
  MESSAGE_UPDATE,
  SAVE_MESSAGES,
  SAVE_REMINDER,
  SAVE_REMINDER_LIST,
  SAVE_TEMPLATE,
  SAVE_TEMPLATE_LIST,
  SEND_MESSAGE,
  UPDATE_REMINDER,
  UPDATE_TEMPLATE,
} from "../constants/Messaging";

export const saveMessagesList = (messages) => {
  return {
    type: SAVE_MESSAGES,
    messages,
  };
};

export const getMessagesList = () => {
  return {
    type: GET_MESSAGES,
  };
};

export const getTemplateList = () => {
  return {
    type: GET_TEMPLATE_LIST,
  };
};

export const saveTemplateList = (templateList) => {
  return {
    type: SAVE_TEMPLATE_LIST,
    templateList,
  };
};

export const getTemplate = (id) => {
  return {
    type: GET_TEMPLATE,
    payload: id,
  };
};

export const saveTemplate = (template) => {
  return {
    type: SAVE_TEMPLATE,
    template,
  };
};

export const updateTemplate = (id, template) => {
  return {
    type: UPDATE_TEMPLATE,
    payload: { id, template },
  };
};

export const deleteTemplate = (id) => {
  return {
    type: DELETE_TEMPLATE,
    payload: id,
  };
};

export const createTemplate = (payload) => {
  return {
    type: CREATE_TEMPLATE,
    payload,
  };
};

export const getReminderList = () => {
  return {
    type: GET_REMINDER_LIST,
  };
};

export const saveReminderList = (reminderList) => {
  return {
    type: SAVE_REMINDER_LIST,
    reminderList,
  };
};

export const getReminder = (id) => {
  return {
    type: GET_REMINDER,
    payload: id,
  };
};

export const saveReminder = (reminder) => {
  return {
    type: SAVE_REMINDER,
    reminder,
  };
};

export const updateReminder = (id, reminder) => {
  return {
    type: UPDATE_REMINDER,
    payload: { id, reminder },
  };
};

export const deleteReminder = (id) => {
  return {
    type: DELETE_REMINDER,
    payload: id,
  };
};

export const createReminder = (payload) => {
  return {
    type: CREATE_REMINDER,
    payload,
  };
};

export const messageUpdate = (message) => {
  return {
    type: MESSAGE_UPDATE,
    message,
  };
};

export const sendMessage = (messageObject) => {
  return {
    type: SEND_MESSAGE,
    payload: messageObject
  };
};

export const messageSent = (sentResponse) => {
  return {
    type: MESSAGE_SENT,
    sentResponse,
  };
};
