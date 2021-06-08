<template>
  <router-view />
</template>
<script>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const store = reactive({
      test: "成功上岸！！！",
    });
    return {
      ...toRefs(store),
    };
  },
});
</script>
<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
