import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import ElementPlus from "./plugins/elment-plus";
import store from "@/store";

const app = createApp(App);

app
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount("#app");
