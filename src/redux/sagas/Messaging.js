import { all, takeEvery, put, fork, call } from "redux-saga/effects";
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
  MESSAGE_UPDATE,
  SEND_MESSAGE,
  UPDATE_REMINDER,
  UPDATE_TEMPLATE,
} from "redux/constants/Messaging";
import {
  messageSent,
  messageUpdate,
  saveMessagesList,
  saveReminder,
  saveReminderList,
  saveTemplate,
  saveTemplateList,
} from "redux/actions/Messaging";

import AppService from "services/AppService";

export function* getMessages() {
  yield takeEvery(GET_MESSAGES, function* ({ payload }) {
    try {
      const response = yield call(AppService.getMessages);
      if (response.message.message) {
        yield put(saveMessagesList(response.message.allMessages.messages_sent));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* resetUpdateMessage() {
  yield takeEvery(MESSAGE_UPDATE, function* ({}) {
    yield put(saveMessagesList("Empty"));
  });
}

export function* getTemplateList() {
  yield takeEvery(GET_TEMPLATE_LIST, function* ({ payload }) {
    try {
      const response = yield call(AppService.getTemplateList);
      console.log(
        "Template list",
        response.message.templateMessages.templateMessages
      );
      if (response.message) {
        yield put(
          saveTemplateList(response.message.templateMessages.templateMessages)
        );
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getTemplate() {
  yield takeEvery(GET_TEMPLATE, function* ({ payload }) {
    try {
      const response = yield call(AppService.getTemplate, payload);
      console.log("Template item", response.model);
      if (response.model) {
        yield put(saveTemplate(response.model));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* createTemplate() {
  yield takeEvery(CREATE_TEMPLATE, function* ({ payload }) {
    console.log("Template payload", payload);
    try {
      const response = yield call(AppService.createTemplate, payload);
      console.log("Template", response);
      if (response.message) {
        yield put(messageUpdate(response.message));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* deleteTemplate() {
  yield takeEvery(DELETE_TEMPLATE, function* ({ payload }) {
    try {
      const response = yield call(AppService.deleteTemplate, payload);
      if (response.message) {
        yield put(messageUpdate(response.message));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* updateTemplate() {
  yield takeEvery(UPDATE_TEMPLATE, function* ({ payload }) {
    try {
      const response = yield call(AppService.updateTemplate, payload);
      if (response.message) {
        yield put(messageUpdate(response.message));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getReminderList() {
  yield takeEvery(GET_REMINDER_LIST, function* ({ payload }) {
    try {
      const response = yield call(AppService.getReminderList);
      if (response.message) {
        yield put(
          saveReminderList(response.message.reminderMessages.reminderMessages)
        );
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getReminder() {
  yield takeEvery(GET_REMINDER, function* ({ payload }) {
    try {
      const response = yield call(AppService.getReminder, payload);
      if (response.message) {
        yield put(saveReminder(response.message));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* createReminder() {
  yield takeEvery(CREATE_REMINDER, function* ({ payload }) {
    try {
      const response = yield call(AppService.createReminder, payload);
      console.log("Reminder create", response);
      if (response.message) {
        yield put(messageUpdate(response.message));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* deleteReminder() {
  yield takeEvery(DELETE_REMINDER, function* ({ payload }) {
    try {
      const response = yield call(AppService.deleteReminder, payload);
      console.log("reminder delete", response);
      if (response.message) {
        yield put(messageUpdate(response.message));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* updateReminder() {
  yield takeEvery(UPDATE_REMINDER, function* ({ payload }) {
    try {
      const response = yield call(AppService.updateReminder, payload);
      console.log("Reminder update", response.model);
      if (response.message) {
        yield put(messageUpdate(response.message));
        yield put(saveReminder(response.model));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* sendMessage() {
  yield takeEvery(SEND_MESSAGE, function* ({ payload }) {
    try {
      const response = yield call(AppService.sendMessage, payload);
      if (response.message) {
        yield put(messageSent(response.message));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getMessages),
    fork(getTemplateList),
    fork(getTemplate),
    fork(deleteTemplate),
    fork(updateTemplate),
    fork(createTemplate),
    fork(getReminderList),
    fork(getReminder),
    fork(deleteReminder),
    fork(updateReminder),
    fork(createReminder),
    fork(resetUpdateMessage),
    fork(sendMessage),
  ]);
}
