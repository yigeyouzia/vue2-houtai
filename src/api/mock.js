/**
 * @job mock生成数据
 * */
import Mock from "mockjs"
import homeApi from "./mockServeData/home"
import user from "./mockServeData/user"
import permission from "./mockServeData/permission"
// 定义mock请求拦截
Mock.mock('/api/home/getData', 'get', homeApi.getStatisticalData)

// 用户列表数据
Mock.mock('/api/user/add', 'post', user.createUser)
Mock.mock('/api/user/edit', 'post', user.updateUser)
Mock.mock('/api/user/del', 'post', user.deleteUser)
Mock.mock(/api\/user\/getUser/, user.getUserList)  // 正则匹配

Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)