<template>
  <div class="tabs">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      size="small"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods: {
    ...mapMutations(["closeTag"]), // 获取store方法
    // 跳转tag
    changeMenu(item) {
      if (
        this.$route.fullPath !== item.path &&
        !(this.$route.fullPath === "/home" && item.path === "/")
      ) {
        this.$router.push({ name: item.name });
      }
    },
    // 点击删除
    handleClose(item, index) {
      this.closeTag(item); // 调用store方法
      const length = this.tags.length;
      //   删除之后跳转逻辑
      if (item.name !== this.$route.name) {
        return;
      }
      if (index === length) {
        this.$router.push({ name: this.tags[index - 1].name });
      } else {
        this.$router.push({ name: this.tags[index].name });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>