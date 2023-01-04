/**
 * @job 用于管理侧边栏缩放
 * */
export default {
    state: {
        isCollapse: false, // 菜单是否展开
    },
    mutations: {
        // 定义方法
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        }
    }
}