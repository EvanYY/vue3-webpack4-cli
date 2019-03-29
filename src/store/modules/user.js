const dealError = (message)=> {
  throw new Error(message)
}
export default {
  namespaced: true,
  state: {
    userInfo: {},
    userMeanuRoute:[],
  },
  mutations: {
    userInfoUpdate(state, value) {
      if ((typeof value === 'object')) {
        for (let key in value) {
          if(key) {
            state.userInfo[key] = value[key]
          }else {
            dealError('userInfo 更新 key值 错误')
          }
        }
      }
    },
    userMeanuRouteUpdate(state, value) {
      if ((typeof value === 'object')) {
        for (let key in value) {
          if (key) {
            state.userMeanuRoute[key] = value[key]
          } else {
            dealError('userMeanuRoute 更新 key值 错误')
          }
        }
      }
    },
  }
}
