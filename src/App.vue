<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";
// import { useStore } from "vuex"
export default defineComponent({
  name: "App",
  setup() {
    // const store = useStore();
    // store.getters["user/token"];
  }
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
