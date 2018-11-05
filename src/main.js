import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from './vant'
import store2 from 'store2'
import { isWeixin } from '@/utils/wechat/tools'
import { authorization } from '@/utils'
import * as filters from './filters'
import AppConst from '@/config'
import combineURLs from '@/utils/url/combineURLs'

!(function() {
  // 微信授权获取 openid, 重定向到 /auth 路由
  if (isWeixin()) {
    if (
      !window.store.session('openid') &&
      window.location.pathname !== combineURLs(AppConst.APP_BASE_URL, '/auth')
    ) {
      return authorization()
    }
  }

  window.store = store2.namespace(AppConst.APP_PROP_APP_NAME)

  Vue.config.productionTip = false

  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })

  Vue.use(vant)

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})()
