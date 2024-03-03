import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import { DATA } from "./data";
import { useSaveFileData } from "./stores/data";
import { useSaveFileSnapshot } from "./stores/snap";
import "./css/index.css";
import { Game } from "./Game";

import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes/index";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
const data = new DATA(useSaveFileData());
const snap = new DATA(useSaveFileSnapshot());
const game = new Game(data, snap);

globalThis.Game = game;

// deprecated
globalThis.SaveFileData = data;
globalThis.SaveFileSnapshot = snap;

app.config.performance = true;

app.provide("data", data);
app.provide("snap", snap);
app.provide("router", router);
app.provide("game", game);
app.mount("#app");
