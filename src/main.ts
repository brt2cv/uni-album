import { createSSRApp } from "vue";
import App from "./App.vue";

export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.$serverUrl = "https://unidemo.dcloud.net.cn/"
  return {
    app,
  }
}
