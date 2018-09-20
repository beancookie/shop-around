import {
  wxRequest
} from '../utils/wxRequest'

const zuulAddr = 'http://172.29.30.229:7004/'

const getCommodityByUrl = (params) => wxRequest(params, zuulAddr + 'reptile/commodity/url')
const getRankByCategoryAndDay = (params) => wxRequest(params, zuulAddr + 'analyse/rank')

export default {
  getCommodityByUrl,
  getRankByCategoryAndDay
}
