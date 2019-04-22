import Vue from 'vue'
import axios from 'axios'
// import router from '@/router'
import qs from 'qs'
import store from '../store'
const http = axios.create({
  timeout: 1000 * 600,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
})
 // 截取url token参数
const GetQueryString = name => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}
let CancelToken = axios.CancelToken
let pending = [] // 临时数组
function removePending(config) {
  if (pending.length > 0) {
    pending.forEach(v => {
      if (config.url === v.url) {
        v.fun('user Cancel in Routes')
        pending.splice(v, 1)
      }
    })
  }
}
/**
 * 请求拦截
 */
http.interceptors.request.use(
  config => {
    removePending(config)
    config.cancelToken = new CancelToken(c => {
      pending.push({
        url: config.url,
        fun: c,
      })
      store.commit('common/updateAllAjax', {
        url: config.url,
        fun: c,
      })
    })
    config.headers[`token`] = store.userInfo.token
      ? store.userInfo.token
      : GetQueryString('token') // 请求头带上token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
/**
 * 响应拦截
 */
http.interceptors.response.use(
  res => {
    if (res.data && res.data.code === 500) {
      // Vue.prototype.$message({
      //   showClose: true,
      //   message: res.data.msg,
      //   type: 'error'
      // })
    }
    if (res.data && res.data.code === 401) {
      // 401, token失效
      // Vue.cookie.deleteAll()
      // router.push({
      //   name: 'login'
      // }, () => {
      //   location.reload() // 刷新页面, 清空整站临时存储数据
      // })
    }
    // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    removePending(res.config)
    return res
  },
  error => {
    return Promise.reject(error)
  }
)
/**
 * 请求地址处理
 * @param {*} actionName action方法名称
 */
http.adornUrl = actionName => {
  // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
  return window.API_ROOT + actionName
}

http.adornUrlWs = actionName => {
  // 非生产环境 && 开启代理, 接口前缀统一使用[/proxyApi/]前缀做代理拦截!
  let token = Vue.cookie.get('token')
  return window.API_ROOT_WS + actionName + token
}

/**
 * get请求参数处理
 * @param {*} params 参数对象
 * @param {*} openDefultParams 是否开启默认参数?
 */
http.adornParams = (params = {}, openDefultParams = true) => {
  var defaults = {
    t: new Date().getTime(),
  }
  return openDefultParams ? Object.assign(defaults, params) : params
}

/**
 * post请求数据处理
 * @param {*} data 数据对象
 * @param {*} openDefultdata 是否开启默认数据?
 * @param {*} contentType 数据格式
 *  json: 'application/json; charset=utf-8'
 *  form: 'application/x-www-form-urlencoded; charset=utf-8'
 */
http.adornData = (data = {}, openDefultdata = false, contentType = 'json') => {
  var defaults = {
    t: new Date().getTime(),
  }
  data = openDefultdata ? Object.assign(defaults, data) : data
  return contentType === 'json' ? JSON.stringify(data) : qs.stringify(data)
}

export default http
