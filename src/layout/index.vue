<template>
  <div class="title">个人博客B端管理台</div>
  <el-container>
    <el-aside width="220px"><Tabview /> </el-aside>
    <el-container>
      <el-header> <Header /> </el-header>
      <el-main>
        <!-- 路由缓存 -->
        <router-view v-slot="{ Component }">
          <keep-alive include="home">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
      <!-- <el-footer> <Footer /> </el-footer> -->
    </el-container>
  </el-container>
</template>
<script>
import Tabview from "./tabview.vue";
import Header from "./header.vue";

export default {
  name: "layout",
  components: { Tabview, Header },
};
</script>
<style>
:root {
  --theme: #fff;
  --header: #0ca678;
}
footer,
header,
.title {
  background: var(--header);
  color: var(--theme);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
main,
footer,
header {
  padding: 10px;
}
.title {
  height: 60px;
  position: absolute;
  top: 0;
  z-index: 1;
  background: var(--header);
  justify-content: center;
  width: 220px;
}
</style>