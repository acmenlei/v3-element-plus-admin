import { createRouter, createWebHistory } from "vue-router";
const files = require.context(".", true, /\.js$/);

let configRouters = [];

files.keys().forEach((key) => {
  if (["./index.js"].includes(key)) return;
  // 读取文件中的default模块
  configRouters = configRouters.concat(files(key).default);
});
// 默认路由配置
const defaultRoutes = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "登陆", component: () => import("@/views/login/index.vue") },
];
// 拼装路由
const routes = defaultRoutes.concat(configRouters);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router, configRouters };
