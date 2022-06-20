import fetch from 'interceptors/AppInterceptor'

const appService = {}

appService.getMessages = function () {
  return fetch({
    url: '/filter-messages',
    method: 'get'
  })
}


export default appService