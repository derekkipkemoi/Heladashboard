import fetch from 'interceptors/AppInterceptor'

const appService = {}

appService.getMessages = function () {
  return fetch({
    url: '/filter-messages',
    method: 'get'
  })
}

appService.getRoles = function () {
  return fetch({
    url: '/get-roles-and-permissions?type=1',
    method: 'get'
  })
}

appService.getRolesAssignedPermissions = function (role) {
  return fetch({
    url:'/get-role-permissions?role_name=' + role,
    method: 'get'
  })
}

appService.getPermissions = function () {
  return fetch({
    url: '/get-roles-and-permissions',
    method: 'get'
  })
}


export default appService