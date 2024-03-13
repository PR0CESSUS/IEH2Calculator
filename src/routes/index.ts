import HomeVue from "../views/Home.vue";
import DataVue from "../views/Data/ViewData.vue";
import ExpeditionVue from "../views/Expedition.vue";
import RubyShardVue from "../views/RubyShard.vue";
import DropChanceVue from "../views/DropChance.vue";
import GuildVue from "../views/Guild.vue";
import TalismanVue from "../views/Talisman.vue";
import EquipmentVue from "../views/Equipment.vue";
import HelpVue from "../views/Help.vue";
import Changelog from "../views/Changelog.vue";
import Main from "../views/Data/ViewDataMain.vue";
import ViewDataAbility from "../views/Data/ViewDataAbility.vue";
import ViewDataTown from "../views/Data/ViewDataTown.vue";
import ViewDataTalisman from "../views/Data/ViewDataTalisman.vue";
import ViewDataBestiary from "../views/Data/ViewDataBestiary.vue";
import ViewDataExpedition from "../views/Data/ViewDataExpedition.vue";
import ViewDataChallange from "../views/Data/ViewDataChallange.vue";
import ViewDataQuest from "../views/Data/ViewDataQuest.vue";
import ViewDataRitual from "../views/Data/ViewDataRitual.vue";
import ViewDataRubyShop from "../views/Data/ViewDataRubyShop.vue";
import ViewDataSDUpgrade from "../views/Data/ViewDataSDUpgrade.vue";
import ViewDataSDPowerup from "../views/Data/ViewDataSDPowerup.vue";
import ViewDataQuestGlobal from "../views/Data/ViewDataQuestGlobal.vue";
import ViewDataQuestTitle from "../views/Data/ViewDataQuestTitle.vue";
import { RouteRecordRaw } from "vue-router";
// import ViewTest from "../views/ViewTest.vue";

export const routes: Readonly<RouteRecordRaw[]> = [
  { path: "/", meta: { name: "Home" }, component: HomeVue },
  {
    path: "/data",
    meta: { name: "Data" },
    component: DataVue,

    children: [
      { path: "", meta: { name: "Main", default: true }, component: Main },
      { path: "ability", meta: { name: "Ability" }, component: ViewDataAbility },
      { path: "town", meta: { name: "Town" }, component: ViewDataTown },
      { path: "talisman", meta: { name: "Talisman" }, component: ViewDataTalisman },
      { path: "bestiary", meta: { name: "Bestiary" }, component: ViewDataBestiary },
      { path: "expedition", meta: { name: "Expedition" }, component: ViewDataExpedition },
      { path: "challange", meta: { name: "Challange" }, component: ViewDataChallange },
      { path: "ritual", meta: { name: "SD Ritual" }, component: ViewDataRitual },
      { path: "ruby_shop", meta: { name: "Ruby Shop" }, component: ViewDataRubyShop },
      { path: "sd_upgrade", meta: { name: "SD Upgrade" }, component: ViewDataSDUpgrade },
      { path: "sd_powerup", meta: { name: "SD Powerup" }, component: ViewDataSDPowerup },
      {
        path: "quest",
        meta: { name: "Quest" },
        component: ViewDataQuest,
        children: [
          { path: "global", meta: { name: "Global" }, component: ViewDataQuestGlobal },
          { path: "title", meta: { name: "Title", parent: "Quest" }, component: ViewDataQuestTitle },
        ],
      },
    ],
  },
  { path: "/equipment", meta: { name: "Equipment" }, component: EquipmentVue },
  { path: "/guild", meta: { name: "Guild" }, component: GuildVue },
  { path: "/talisman", meta: { name: "Talisman" }, component: TalismanVue },
  { path: "/expedition", meta: { name: "Expedition" }, component: ExpeditionVue },
  { path: "/ruby-shard", meta: { name: "Ruby Shard" }, component: RubyShardVue },
  { path: "/drop-chance", meta: { name: "Drop Chance" }, component: DropChanceVue },
  { path: "/help", meta: { name: "Help" }, component: HelpVue },
  { path: "/changelog", meta: { name: "Changelog" }, component: Changelog },
  // { path: "/test", meta: { name: "Test" }, component: ViewTest },
];
