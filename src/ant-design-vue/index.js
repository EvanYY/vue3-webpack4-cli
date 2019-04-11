import Vue from 'vue'
import {
	Button,
	message,
	Icon,
	Layout
} from "ant-design-vue"
import 'ant-design-vue/dist/antd.css'

Vue.use(Button)
Vue.use(Icon)
Vue.use(Layout)
// import Antd from "ant-design-vue"
// Vue.use(Antd)
Vue.prototype.$message = message