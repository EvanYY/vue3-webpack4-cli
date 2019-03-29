import VueCookie from 'vue-cookie' // api: https://github.com/alfhen/vue-cookie
import store from '../store'

function getObj(arr, key, val) {
  //  根据value 找到arr里面对应的对象
  let obj
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'object') {
      for (var k in arr[i]) {
        if (k === key) {
          if (arr[i][k] === val) {
            obj = arr[i]
          }
        }
      }
    }
  }
  return obj
}

function deleteAll() {
  var keys = document.cookie.match(/[^ =;]+(?=\=)/g)
  if (keys) {
    for (let i = 0; i < keys.length; i++) {
      VueCookie.delete(keys[i])
    }
  }
}

function num2(value) {
  return value.toFiexd(2)
}

function getTheme() {
  return store.state.common.theme
}

function add(arr, key) {
  let res = 0;
  arr.forEach(v => {
    res += Number(v[key]) * 100000000
  });
  return Number((res / 100000000).toFixed(2))
}

function filterNumber(n) {
  let num = +n
  let minN = Math.floor(n)
  let res = 0
  if (num - minN > 0.5) {
    res = minN + 0.5
  } else {
    res = minN
  }
  return res
}

function compare(property) {
  return function (obj1, obj2) {
    var value1 = obj1[property];
    var value2 = obj2[property];
    return value1 - value2; // 降序
  }
}
const two = (v = 0) => {
  return v > 9 ? v : '0' + v
}
const chance = (x, u, σ) => {
  let z = (x - u) / σ;
  return Math.pow(Math.E, z * z / (-2)) / (Math.sqrt(2 * Math.PI) * σ)
}
const checkSize = (n1 = 1, n2 = 1) => {
  if (Number(n1) > Number(n2)) {
    [n1, n2] = [n2, n1]
  }
  return [n1, n2]
}
const objReduce = (obj = {}) => {
  let res = {}
  let _res = {}
  for (const key in obj) {
    if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
      _res = objReduce(obj[key])
    } else {
      res[key] = obj[key]
    }
  }
  return Object.assign({}, res, _res)
}
const toUrl = (url = '', params) => {
  let paramsArr = [];
  if (params) {
    for (const key in objReduce(params)) {
      paramsArr.push(key + '=' + encodeURIComponent(objReduce(params)[key]))
    }
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArr.join('&');
    } else {
      url += '&' + paramsArr.join('&');
    }
  }
  return url
}
const filterUnit = (v = 0, dw = null, num = 2) => {
  let val = +v
  let res = ''
  if (val < 10000) {
    res = Number(val.toFixed(num)) + ' ' + dw
  } else if (val >= 10000 && val < 100000000) {
    res = Number((val / 10000).toFixed(num)) + '万' + dw
  } else if (val >= 100000000) {
    res = Number((val / 100000000).toFixed(num)) + '亿' + dw
  }
  return res
}

function sum(arr = []) {
  var s = 0;
  for (var i = 0; i < arr.length; i++) {
    s += arr[i];
  }
  return s;
}

const getBeforeTime = (time = '2018-05-20', n = 31) => {
  let oneDayLong = 24 * 60 * 60 * 1000;
  let now = new Date(time).getTime();
  return now - n * oneDayLong
}
const getBeforeMonth = () => {
  return new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
}
const getLastDayOfMonth = (date = '1970-01-01') => {
  new Date('2019', '02', 0).getDate()
  let year = date.split('-')[0]
  let month = date.split('-')[1]
  return year + '-' + month + '-' + new Date(year, month, 0).getDate()
}
export default {
  getObj,
  deleteAll,
  num2,
  getTheme,
  add,
  filterNumber,
  objReduce,
  compare,
  two,
  chance,
  checkSize,
  toUrl,
  filterUnit,
  sum,
  getBeforeTime,
  getBeforeMonth,
  getLastDayOfMonth
}
