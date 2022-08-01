import { createApp } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/css/reset.css";
import "@/mock/mock";
// import myplugin from "@/fDou/index";
createApp(App).use(ElementPlus).use(store).use(router).mount("#app");
