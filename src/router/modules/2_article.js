import layout from "@/layout";
export default {
  path: "/article",
  name: "文章管理",
  onlyOne: false,
  icon: "el-icon-edit-outline",
  component: layout,
  children: [
    {
      path: "/article/list",
      name: "文章查看",
      hidden: false,
      icon: "el-icon-view",
      component: () => import("@/views/article.vue"),
    },
    {
      path: "/article/edit",
      hidden: false,
      name: "文章设置",
      icon: "el-icon-edit",
      component: () => import("@/views/edit.vue"),
    },
  ],
};
