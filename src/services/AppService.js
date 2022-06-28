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

export default appService;
