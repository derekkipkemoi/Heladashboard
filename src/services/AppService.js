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
    data: data
  });
};

appService.updateUser = function (payload) {
  const {id, user} = payload
  return fetch({
    url: "/update-client?id=" + id,
    method: "put",
    data: user
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
  const { id, data } = payload
  console.log("Update data", data)
  return fetch({
    url: "/deactivate-staff?id=" + id,
    method: "post",
    data: data
  });
};

appService.activateUser = function (id) {
  return fetch({
    url: "/deactivate-staff?id=" + id,
    method: "get",
  });
};

appService.declineUser = function (payload) {
  const id = payload
  console.log("Update data", id)
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
  const { data } = payload
  console.log("Update settings service", payload)
  return fetch({
    url: "/update-setting?id=1",
    method: "post",
    data: data
  });
};
export default appService;
