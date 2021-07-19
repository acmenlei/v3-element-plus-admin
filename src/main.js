import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import ElementPlus from "./plugins/elment-plus";
import store from "@/store";
import mavonEditor  from "mavon-editor"
import "mavon-editor/dist/css/index.css"; // 富文本编辑器css

const app = createApp(App);

app
  .use(router)
  .use(mavonEditor)
  .use(store)
  .use(ElementPlus)
  .mount("#app");
