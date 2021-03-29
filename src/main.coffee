import Vue from 'vue'
import App from './App.vue'

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)
Vue.config.productionTip = false


window.$ = window.jQuery = require('jquery')
new Vue
  render: (h) -> h(App)
.$mount('#app')
