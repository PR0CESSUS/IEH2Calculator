import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import { Game } from "./Game";
import "./css/index.css";
import { DATA } from "./data";
import { useSaveFileData } from "./stores/data";
import { useSaveFileSnapshot } from "./stores/snap";
import { createRouter, createWebHashHistory } from "vue-router/auto";
import { useGlobalStore } from "./stores/global";

const router = createRouter({
  history: createWebHashHistory(),
});
const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);

const data = new DATA(useSaveFileData());
const snap = new DATA(useSaveFileSnapshot());
const game = new Game(data, snap);

globalThis.Game = game;
globalThis.globalStore = useGlobalStore();

// deprecated
globalThis.SaveFileData = data;
globalThis.SaveFileSnapshot = snap;

app.config.performance = true;

app.provide("game", game);
app.mount("#app");
