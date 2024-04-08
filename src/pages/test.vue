<script setup lang="ts">
import { Equipment } from "@/Data/Equipment/Equipment";
import { Enums } from "@/Enums";
import { Game } from "@/Game";
import AppSelect from "@/components/AppSelect.vue";
import AppSelectEnchantments from "@/components/AppSelectEnchantments.vue";
import MultiplierInformation from "@/components/MultiplierInformation.vue";
import SkillLoadout from "@/components/SkillLoadout.vue";
import { useGlobalStore } from "@/stores/global";
import { CustomSelectType } from "@/type/CustomSelectType";
import { EquipmentEffectKind } from "@/type/EquipmentEffectKind";
import { EquipmentPart } from "@/type/EquipmentPart";
import { HeroKind } from "@/type/HeroKind";

import { inject, ref } from "vue";
import { definePage } from "vue-router/auto";
const store = useGlobalStore();
const game = inject<Game>("game");
definePage({
  meta: {
    name: "Test",
    root: true,
    debug: true,
  },
});
const loadout = game.data.inventory.GetCurrentLoadout();

function Sort(array: Equipment[]) {
  const newArray = [];
  const weapons = array.filter((equipment) => equipment.slotPart == EquipmentPart.Weapon);
  const armors = array.filter((equipment) => equipment.slotPart == EquipmentPart.Armor);
  const jewelry = array.filter((equipment) => equipment.slotPart == EquipmentPart.Jewelry);

  weapons.reverse();
  armors.reverse();
  jewelry.reverse();

  for (let index = 0; index < array.length; index++) {
    const w = weapons.pop();
    const a = armors.pop();
    const j = jewelry.pop();

    if (w) newArray.push(w);
    if (a) newArray.push(a);
    if (j) newArray.push(j);
  }

  return newArray;
}

const test = Sort(loadout);

const aaa = ref(12);

// const inGameData = ref({main1: globalStore});
</script>

<template>
  <button style="font-size: 12px" @click="store.version = '0.1.41'">TEST Changelog new version</button>
  <hr />

  Current Hero: {{ HeroKind[game.data.source.currentHero] }}<br />
  Current Skill Loadout: {{ game.data.source.skillLoadoutIds[game.data.source.currentHero] }}<br />
  SD slots: {{ game.data.battle.superDungeonCtrl.skillSlotNum.Value() }}<br />
  Class skill slot: {{ game.data.battle.skillSet.currentEquippingNum }} / {{ game.data.battle.limitedSkillNum }} <br />
  current Global skill slot : {{ game.data.battle.skillSet.currentGlobalEquippingNum }} / {{ game.data.battle.limitedGlobalSkillNum }}<br />

  Global skill slot : {{ game.data.stats.globalSkillSlotNum.Value() }}

  <div style="width: 300px">
    <MultiplierInformation :multiplier="'stats.globalSkillSlotNum'" />
  </div>

  <hr />

  <SkillLoadout />

  <hr />
  <button @click="console.log(test)">GetCurrentLoadout</button>
  <!-- {{ game.data.inventory.currentLoadout[0].Level() }}
  {{ game.data.inventory.currentLoadout[0].globalInfo.effects[0].baseValue }}
  {{ game.data.inventory.currentLoadout[0].globalInfo.effects[0].initValue }}
  {{ game.data.inventory.currentLoadout[0].globalInfo.effects[0].kind }}
  {{ game.data.inventory.currentLoadout[0].globalInfo.effects[0].EffectValue(1) }} -->

  <input type="text" list="test" />
  <datalist id="test">
    <option v-for="i in Enums.EquipmentEffectKind" :value="i">{{ EquipmentEffectKind[i] }}</option>
  </datalist>

  <AppSelect :type="CustomSelectType.EquipmentEffectKind" v-model="aaa" />
  <button @click="console.log(aaa)">Test</button>
  <AppSelectEnchantments v-model="aaa" />
</template>

<style scoped>
.element {
  background-color: #636363;
  border: 1px solid #000;
  border-radius: 3px;
}
</style>
../data2 ../Game ../../Game ../Game
