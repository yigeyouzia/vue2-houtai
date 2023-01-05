/**
 * @job 用于管理侧边栏缩放
 * */
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
        ] // 面包屑
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
        }
    }
}