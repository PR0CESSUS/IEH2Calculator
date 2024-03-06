import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import { Game } from "./Game";
import "./css/index.css";
import { DATA } from "./data";
import { useSaveFileData } from "./stores/data";
import { useSaveFileSnapshot } from "./stores/snap";

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
const snapshotSaveFile = useSaveFileSnapshot();
const data = new DATA(useSaveFileData());
const snap = new DATA(snapshotSaveFile);
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
