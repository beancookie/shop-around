import {
  wxRequest
} from '../utils/wxRequest'

// const apiMall = 'https://sujiefs.com/'
const apiMall = 'http://localhost:7004/'

const getCommodityByUrl = (params) => wxRequest(params, apiMall + 'reptile/commodity/url')
const getRankByCategoryAndDay = (params) => wxRequest(params, apiMall + 'analyse/rank')

export default {
  getCommodityByUrl,
  getRankByCategoryAndDay
}
