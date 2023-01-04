/**
 * @job 请求接口文件
 * */

import http from "../util/request"
// 请求首页数据
export const getData = () => {
    return http.get('/home/getData')
}
