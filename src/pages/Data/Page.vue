<script setup lang="ts">
import DataTalisman from "./Talisman.vue";

import TabItem from "../../components/TabItem.vue";
import TabPanel from "../../components/TabPanel.vue";
import DataMain from "./Main.vue";

import { useGlobalStore } from "../../stores/global";
import Ritual from "./Ritual.vue";
import RubyShop from "./RubyShop.vue";
import ExpeditionVue from "./Expedition.vue";
import SDUpgrade from "./SDUpgrade.vue";
import SDPowerup from "./SDPowerup.vue";
import Bestiary from "./Bestiary.vue";

const globalStore = useGlobalStore();
</script>

<template>
  <TabPanel
    :selected-index="globalStore.dataTabSelected"
    @tab-change="
      (tab) => {
        globalStore.dataTabSelected = tab;
      }
    "
  >
    <TabItem title="Main"><DataMain /></TabItem>
    <TabItem title="Bestiary"><Bestiary /></TabItem>
    <TabItem title="Talisman"><DataTalisman /></TabItem>
    <TabItem title="Expedition"><ExpeditionVue /></TabItem>
    <TabItem title="SD Ritual"><Ritual /></TabItem>
    <TabItem title="Ruby Shop"><RubyShop /></TabItem>
    <TabItem title="SD Upgrade"><SDUpgrade /></TabItem>
    <TabItem title="SD Powerup"><SDPowerup /></TabItem>
  </TabPanel>
</template>
