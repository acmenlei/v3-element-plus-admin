import { createRouter, createWebHistory } from "vue-router";
const files = require.context(".", true, /\.js$/);

let configRouters = [];

files.keys().forEach((key) => {
  if (["./index.js"].includes(key)) return;
  // 读取文件中的default模块
  configRouters = configRouters.concat(files(key).default);
});

const routes = [{ path: "/", redirect: "/home" }].concat(configRouters);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router, configRouters };
