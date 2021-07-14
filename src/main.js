import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/scss/app.scss";
require("bootstrap");
window.toastr = require("toastr");

createApp(App).use(store).use(router).mount("#app");
