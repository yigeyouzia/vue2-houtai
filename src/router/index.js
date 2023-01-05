//引入VueRouter
import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter);
//引入Luyou 组件
import Home from "../views/Home"
import User from "../views/User"
import Main from "../views/Main"
import Mall from "../views/Mall"
import PageOne from "../views/PageOne"
import PageTwo from "../views/PageTwo"
//创建router实例对象，去管理一组一组的路由规则
const routes = [
    // 主路由
    {
        path: "/",
        component: Main,
        redirect: '/home', // 重定向到home
        children: [
            // 子路由
            { path: 'home', name: "home", component: Home },  // 首页
            { path: 'user', name: "user", component: User }, // 用户管理
            { path: 'mall', name: "mall", component: Mall }, // 商品管理
            { path: 'page1', name: "page1", component: PageOne }, // 页面1
            { path: 'page2', name: "page2", component: PageTwo }, // 页面2
        ]
    }

]
// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = new VueRouter({
    routes, // `routes: routes` 的缩写
    // mode: 'history',
})

export default router;