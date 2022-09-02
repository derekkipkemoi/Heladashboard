import fetch from "interceptors/AppInterceptor";

const appService = {};

appService.getMessages = function () {
  return fetch({
    url: "/filter-messages",
    method: "get",
  });
};

appService.getRoles = function () {
  return fetch({
    url: "/get-roles-and-permissions?type=1",
    method: "get",
  });
};

appService.getRolesAssignedPermissions = function (role) {
  return fetch({
    url: "/get-role-permissions?role_name=" + role,
    method: "get",
  });
};

appService.getPermissions = function () {
  return fetch({
    url: "/get-roles-and-permissions",
    method: "get",
  });
};

appService.getUsers = function () {
  return fetch({
    url: "/filter-users",
    method: "get",
  });
};

appService.getUsersWeeklyRegistration = function () {
  return fetch({
    url: "/client-dashboard",
    method: "get",
  });
};

appService.getUserDetails = function (id) {
  return fetch({
    url: "/get-staff?id=" + id,
    method: "get",
  });
};

appService.getInstitutions = function () {
  return fetch({
    url: "/filter-companies",
    method: "get",
  });
};

appService.getInstitute = function (id) {
  return fetch({
    url: "/get-institution?id=" + id,
    method: "get",
  });
};

appService.updateInstitute = function (data) {
  return fetch({
    url: "/update-company",
    method: "put",
    data: data,
  });
};

appService.updateUser = function (payload) {
  const { id, user } = payload;
  return fetch({
    url: "/update-client?id=" + id,
    method: "put",
    data: user,
  });
};

appService.changeUserRole = function (id) {
  return fetch({
    url: "/change-staff-role?user_id=" + id,
    method: "put",
  });
};

appService.changeUserType = function (id) {
  return fetch({
    url: "/change-staff-type?id=" + id,
    method: "put",
  });
};

appService.deactivateUser = function (payload) {
  const { id, data } = payload;
  console.log("Update data", data);
  return fetch({
    url: "/deactivate-staff?id=" + id,
    method: "post",
    data: data,
  });
};

appService.activateUser = function (id) {
  return fetch({
    url: "/deactivate-staff?id=" + id,
    method: "get",
  });
};

appService.declineUser = function (payload) {
  const id = payload;
  console.log("Update data", id);
  return fetch({
    url: "/decline-client-registration?id=" + id,
    method: "post",
  });
};

appService.approveUser = function (id) {
  return fetch({
    url: "/approve-client-registration?id=" + id,
    method: "get",
  });
};

appService.changePassword = function (id) {
  return fetch({
    url: "/change-admin-password?id=" + id,
    method: "get",
  });
};

appService.getSettings = function () {
  return fetch({
    url: "/settings",
    method: "get",
  });
};

appService.updateSettings = function (payload) {
  return fetch({
    url: "/update-setting?id=1",
    method: "post",
    data: payload,
  });
};

appService.getPayRollRegistration = function () {
  return fetch({
    url: "/payroll-registration",
    method: "get",
  });
};

appService.getTemplateList = function () {
  return fetch({
    url: "/filter-template-messages",
    method: "get",
  });
};

appService.getTemplate = function (payload) {
  const id = payload;
  return fetch({
    url: "/view-template-message?id=" + id,
    method: "get",
  });
};

appService.createTemplate = function (payload) {
  console.log("create template", payload);
  return fetch({
    url: "/create-template-message",
    method: "post",
    data: payload,
  });
};

appService.deleteTemplate = function (payload) {
  const id = payload;
  console.log("Id", id);
  return fetch({
    url: "/delete-template-message?id=" + id,
    method: "delete",
  });
};

appService.updateTemplate = function (payload) {
  const { id, template } = payload;
  return fetch({
    url: "/update-template-message?id=" + id,
    method: "patch",
    data: template,
  });
};

appService.getReminderList = function () {
  return fetch({
    url: "/filter-reminders",
    method: "get",
  });
};

appService.getReminder = function (payload) {
  const id = payload;
  return fetch({
    url: "/view-reminder?id=" + id,
    method: "get",
  });
};

appService.createReminder = function (payload) {
  return fetch({
    url: "/create-reminder-message",
    method: "post",
    data: payload,
  });
};

appService.deleteReminder = function (payload) {
  const id = payload;
  return fetch({
    url: "/delete-reminder?id=" + id,
    method: "delete",
  });
};

appService.updateReminder = function (payload) {
  const { id, reminder } = payload;
  return fetch({
    url: "/update-reminder?id=" + id,
    method: "patch",
    data: reminder,
  });
};

appService.getAdvanceRequestMainMenu = function () {
  return fetch({
    url: "/advance-request-dashboard",
    method: "get",
  });
};

appService.getNormalRequestMainMenu = function () {
  return fetch({
    url: "/normal-request-dashboard",
    method: "get",
  });
};

appService.getTSCMainMenu = function () {
  return fetch({
    url: "/tsc-dashboard",
    method: "get",
  });
};

appService.getRequestsData = function (payload) {
  return fetch({
    url: "/" + payload,
    method: "get",
  });
};

appService.getUserRequestsData = function (payload) {
  return fetch({
    url: "view-advance-salary-request?id=" + payload,
    method: "get",
  });
};

appService.postAdvanceRequestsAction = function (payload) {
  const { id, actionPath } = payload;
  return fetch({
    url: actionPath + id,
    method: "post",
  });
};

// appService.getStopOrdersMainMenu = function (payload) {
//   return fetch({
//     // url: "/advance-request-dashboard",
//     method: "get",
//   });
// };

// appService.getTopUpsMainMenu = function (payload) {
//   return fetch({
//     // url: "/advance-request-dashboard",
//     method: "get",
//   });
// };

// appService.getRefundsMainMenu = function (payload) {
//   return fetch({
//     // url: "/advance-request-dashboard",
//     method: "get",
//   });
// };
export default appService;
