import { washMall } from './baseRequest'

/**
 * 4.01-立即领取
 */
export const dealMensendCouponEvent = (options = {}) => {
  return washMall.post('/couponMensend/dealInteractEvent', options.data)
}
/**
 * 4.02-授权码校验
 */
export const chenkCscode = (options = {}) => {
  return washMall.post('/couponMensend/chenkCscode', options.data)
}

export default {
  dealMensendCouponEvent,
  chenkCscode
}
