/**
 * 全站路由配置
 *
 * 建议:
 * 1. 代码中路由统一使用name属性跳转(不使用path属性)
 * http://11.11.190.185/
 */
import Vue from "vue"
import Router from "vue-router"
import http from "@/utils/httpRequest"
// import axios from "axios"
// import {
//   isURL
// } from "@/utils/validate"
import testArr from "./mode"
import store from "@/store"
// import s from "storejs"
// import NProgress from "nprogress"
// NProgress.configure({
//   showSpinner: false
// }) // NProgress Configuration
// import "nprogress/nprogress.css"
console.log(store)
Vue.use(Router)
// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有生产环境使用懒加载
const _import = require("./import-" + process.env.NODE_ENV)
// 全局路由(无需嵌套上左右整体布局)
const globalRoutes = [{
    path: "/",
    redirect: {
      path: '/nav'
    },
    meta: {
      title: "@运维项目入口"
    },
  },
  {
    path: "/404",
    name: "404",
    component: _import("common/404"),
    meta: {
      title: "404未找到",
    }
  },
  {
    path: "/nav",
    name: "headerNav",
    component: _import("common/nav"),
    meta: {}
  },
  {
    path: "/error",
    name: "errorPage",
    component: _import("common/errorMsg"),
    meta: {}
  },
]

// 主入口路由(需嵌套上左右整体布局)
let mainRoutes = [];

const router = new Router({
  mode: "hash",
  // scrollBehavior: () => ({
  //   y: 0
  // }),
  routes: globalRoutes.concat(mainRoutes), // yy 路由路径数组全部
})

router.beforeEach(async (to, from, next) => {
  if (mainRoutes.length < 1) {
    let {
      data
    } = await http({
      url: 'http://192.168.8.222:9555/collector-admin/sys/login',
      method: 'post',
      data: {
        password: "lqc",
        username: "lqc"
      }
    })
    let menuList = (function (a, b) {
      let method = function (deal) {
        return deal
      };
      return method(b);
    })(data, testArr.testArr);
    fnAddDynamicMenuRoutes(menuList)
  } else {
    console.log('next')
  }
  next()
})
router.afterEach(() => {
  // NProgress.done() // finish progress bar
  console.log("route close")
  console.log(router)

})
/**
 * 判断当前路由类型, true: 全局路由, false: 主入口路由
 * @param {*} route 当前路由
 */
// function fnCurrentRouteType(route) {
//   var temp = []
//   for (var i = 0; i < globalRoutes.length; i++) {
//     if (route.path === globalRoutes[i].path) {
//       let setMenuList = JSON.parse(sessionStorage.getItem("setMenuList"));
//       let reportMenuList = JSON.parse(sessionStorage.getItem("reportMenuList"));
//       if (setMenuList && reportMenuList) {
//         return true
//       } else {
//         return false
//       }
//     } else if (globalRoutes[i].children && globalRoutes[i].children.length >= 1) {
//       temp = temp.concat(globalRoutes[i].children);
//     }
//   }
//   return temp.length >= 1 ? fnCurrentRouteType(route, temp) : false
// }

/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
function fnAddDynamicMenuRoutes(menuList = [], routes = []) {
  for (var i = 0; i < menuList.length; i++) {
    menuList[i].url = menuList[i].url.replace(/^\//, "")
    var route = {
      path: `/${menuList[i].url.replace("/", "-")}`,
      component: null,
      // name: `o-${menuList[i].url.replace("/", "-")}`,
      meta: {}
    }
    try {
      route["component"] = _import(`moudels/${menuList[i].url}`);
    } catch (e) {
      console.dir(e)
    }
    routes.push(route)
  }
  mainRoutes = routes;
  // yy  主路由添加新值，添加404页面
  router.addRoutes([
    ...routes,
    {
      path: "*",
      redirect: {
        name: "404"
      }
    }
  ])
}
export default router