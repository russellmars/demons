import createBaseRequest from './createBaseRequest'
import AppConst from '@/config'

export const wechat = createBaseRequest({
  baseURL: AppConst.APP_BACKEND_WECHAT,
  signWithRow: false
})

export const mallManager = createBaseRequest({
  baseURL: AppConst.APP_BACKEND_MALL_MANAGER,
  signWithRow: true
})

export const washMall = createBaseRequest({
  baseURL: AppConst.APP_BACKEND_WASHMALL,
  signWithRow: true
})
