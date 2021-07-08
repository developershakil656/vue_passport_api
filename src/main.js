import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
window.toastr = require("toastr");
require("bootstrap");

import "./assets/scss/app.scss";


createApp(App).use(store).use(router).mount("#app");
