import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { initWxJsSDK, configWxShare } from '@/utils/wechat/jssdk'
import { isWeixin } from '@/utils/wechat/tools'
import AppConst from '@/config'
import combineURLs from '@/utils/url/combineURLs'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function configShareData() {
  initWxJsSDK().then(() => {
    configWxShare({
      title: 'demons',
      desc: '你是魔鬼吗',
      link: AppConst.APP_BASE_FULL_URL,
      imgUrl: combineURLs(AppConst.APP_BASE_FULL_URL, '/logo.png')
    })
  })
}

function configShare() {
  if (window.__wxjs_is_wkwebview) {
    // 微信的 ios 环境
    configShareData()
  } else {
    setTimeout(configShareData, 500)
  }
}

router.afterEach(route => {
  if (
    (!route.meta || !route.meta.diyShare) &&
    isWeixin() &&
    window.__wxjs_environment !== 'miniprogram'
  ) {
    configShare()
  }
})

export default router
