import HomeVue from "../pages/Home.vue";
import DataVue from "../pages/Data/Page.vue";
import ExpeditionVue from "../pages/Expedition.vue";
import RubyShardVue from "../pages/RubyShard.vue";
import DropChanceVue from "../pages/DropChance.vue";
import GuildVue from "../pages/Guild.vue";
import TalismanVue from "../pages/Talisman.vue";
import EquipmentVue from "../pages/Equipment.vue";
import HelpVue from "../pages/Help.vue";
import Changelog from "../pages/Changelog.vue";
// import TestVue from "../pages/Test.vue";

export const routes = [
  { path: "/", name: "Home", component: HomeVue },
  { path: "/data", name: "Data", component: DataVue },
  { path: "/equipment", name: "Equipment", component: EquipmentVue },
  { path: "/guild", name: "Guild", component: GuildVue },
  { path: "/talisman", name: "Talisman", component: TalismanVue },
  { path: "/expedition", name: "Expedition", component: ExpeditionVue },
  { path: "/ruby-shard", name: "Ruby Shard", component: RubyShardVue },
  { path: "/drop-chance", name: "Drop Chance", component: DropChanceVue },
  { path: "/help", name: "Help", component: HelpVue },
  { path: "/changelog", name: "Changelog", component: Changelog },
  // { path: "/test", name: "Test", component: TestVue },
];
