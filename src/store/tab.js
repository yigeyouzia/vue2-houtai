/**
 * @job 用于管理侧边栏缩放
 * */
import Cookie from "js-cookie"
export default {
    state: {
        isCollapse: false, // 菜单是否展开
        tabsList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            },
        ], // 面包屑
        menu: []
    },
    mutations: {
        // 定义方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        },
        // 更新面包屑
        selectMenu(state, val) {
            if (val.name !== "首页") {
                const index = state.tabsList.findIndex(item => item.name === val.name)
                if (index === -1) {
                    state.tabsList.push(val)
                }
            }
        },
        closeTag(state, item) {
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index, 1)
        },
        // 设置Menu的数据
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        // 动态注册路由
        addMenu(state, router) {
            // console.log(router);
            if (!Cookie.get('menu')) return;
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            // 组装动态路由数据
            const menuArray = []
            console.log('menu', menu);
            menu.forEach(item => {
                if (item.children) {  // 有子菜单
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            })
            console.log('menuArray', menuArray);
            // 路由动态添加
            menuArray.forEach(item => {
                router.addRoute('Main', item)
            })
        }
    }
}