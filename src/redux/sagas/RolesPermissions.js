import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  GET_ROLES,
  GET_ROLE_PERMISSIONS,
  GET_PERMISSIONS,
} from "redux/constants/RolesPermissions";
import {
  saveRolesList,
  saveRolesAssignedPermissions,
  savePermissionsList,
} from "redux/actions/RolesPermissions";

import AppService from "services/AppService";

export function* getRoles() {
  yield takeEvery(GET_ROLES, function* ({ payload }) {
    try {
      const response = yield call(AppService.getRoles);
      if (response.message) {
        yield put(saveRolesList(response.user_permissions));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getRoleAssignedPermissions() {
  yield takeEvery(GET_ROLE_PERMISSIONS, function* ({ payload }) {
    try {
      const response = yield call(
        AppService.getRolesAssignedPermissions,
        payload
      );
      if (response.message) {
        yield put(saveRolesAssignedPermissions(response.assigned_permissions));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export function* getPermissions() {
  yield takeEvery(GET_PERMISSIONS, function* ({ payload }) {
    try {
      const response = yield call(AppService.getPermissions);
      if (response.message) {
        yield put(savePermissionsList(response.user_permissions));
      }
    } catch (err) {
      console.log("Messages listing error in sagas", err);
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getRoles),
    fork(getRoleAssignedPermissions),
    fork(getPermissions),
  ]);
}
