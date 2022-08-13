import { all } from "redux-saga/effects";
import Auth from "./Auth";
import Messaging from "./Messaging";
import RolesPermissions from "./RolesPermissions";
import Users from "./Users";
import Institutions from "./Institutions";
import Settings from "./Settings"
import  Payroll from "./Payroll";
import AdvanceRequests from "./AdvanceRequests";

export default function* rootSaga(getState) {
  yield all([
    Auth(), 
    Messaging(), 
    RolesPermissions(), 
    Users(), 
    Institutions(), 
    Settings(), 
    Payroll(), 
    AdvanceRequests() 
  ]);
}
