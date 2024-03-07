<script setup lang="ts">
import { inject, onUpdated, ref } from "vue";
import EquipmentInfo from "./EquipmentInfo.vue";
import PotionInfo from "./PotionInfo.vue";
import { Game } from "../Game";
import { Enums } from "../Enums";
import { HeroKind } from "../type/HeroKind";
import { Localization } from "../localization/index";
const game = inject<Game>("game");
const dialog = ref<HTMLDialogElement>();
const INITIAL_OFFSET = ref(520 + game.data.source.currentHero * 720 + game.data.source.equipmentLoadoutIds[game.data.source.currentHero] * 72);

function getEquipmentList() {
  let list = {};
  for (let index = INITIAL_OFFSET.value; index < INITIAL_OFFSET.value + 72; index++) {
    if (game.data.inventory.equipmentSlots[index].kind == 0 || game.data.inventory.equipmentSlots[index].isDisabled()) continue;
    let equipment = Localization.EquipmentName(game.data.inventory.equipmentSlots[index].kind);
    list[equipment] = list[equipment] ? list[equipment] + 1 : 1;
  }

  return list;
}

onUpdated(() => {
  // console.log("update equipment loadout");
  INITIAL_OFFSET.value = 520 + game.data.source.currentHero * 720 + game.data.source.equipmentLoadoutIds[game.data.source.currentHero] * 72;
});
function getEquipmentEffectList() {
  let list = {};
  for (let index = INITIAL_OFFSET.value; index < INITIAL_OFFSET.value + 72; index++) {
    const equipment = game.data.inventory.equipmentSlots[index];
    if (equipment.kind == 0 || equipment.isDisabled()) continue;
    for (let i = 0; i < equipment.optionEffects.length; i++) {
      if (equipment.optionEffects[i].kind == 0) continue;
      const effect = Localization.EquipmentEffectName(equipment.optionEffects[i].kind);
      list[effect] = list[effect] ? list[effect] + 1 : 1;
    }
  }

  return list;
}
</script>

<template>
  <div>
    <div style="display: flex">
      <select v-model.number="game.data.source.currentHero" style="height: 24px" name="hero">
        <option v-for="(_, index) in Enums.HeroKind" :value="index" :selected="game.data.source.currentHero == index">
          {{ HeroKind[index] }}
        </option>
      </select>
      <ul>
        <li
          v-for="(n, i) in 7"
          :class="i == game.data.source.equipmentLoadoutIds[game.data.source.currentHero] ? 'yellow' : ''"
          @click="game.data.source.equipmentLoadoutIds[game.data.source.currentHero] = i"
        >
          Loadout {{ n }}
        </li>
      </ul>
      <button class="blue small" title="loadout breakdown" @click="dialog.showModal()">&#9776;</button>
      <!-- <button class="blue small" title="search">&#x1F50E;&#xFE0E;</button> -->
    </div>

    <div :key="game.data.source.currentHero">
      <div class="part">
        <div class="block">
          <EquipmentInfo v-for="(_, index) in 24" :id="INITIAL_OFFSET + index" class="equipment" :key="INITIAL_OFFSET + index" />
        </div>
      </div>
      <div class="part">
        <div class="block">
          <EquipmentInfo v-for="(_, index) in 24" :id="INITIAL_OFFSET + index + 24" class="equipment" :key="INITIAL_OFFSET + index" />
        </div>
      </div>
      <div class="part">
        <div class="block">
          <EquipmentInfo v-for="(_, index) in 24" :id="INITIAL_OFFSET + index + 48" class="equipment" :key="INITIAL_OFFSET + index" />
        </div>
      </div>
      <div class="part">
        <div class="block-potion">
          <PotionInfo v-for="(_, index) in 6" :id="260 + index + game.data.source.currentHero * 6" class="equipment" />
        </div>
      </div>
    </div>

    <!-- <template v-for="(_, i) in 7">
      <div v-if="i == game.data.source.equipmentLoadoutIds[game.data.source.currentHero]">
        <div class="part">
          <div class="block">
            <EquipmentInfo v-for="(_, index) in 24" :id="INITIAL_OFFSET + index + game.data.source.equipmentLoadoutIds[game.data.source.currentHero] * 72" class="equipment" />
          </div>
        </div>
        <div class="part">
          <div class="block">
            <EquipmentInfo v-for="(_, index) in 24" :id="INITIAL_OFFSET + index + 24 + game.data.source.equipmentLoadoutIds[game.data.source.currentHero] * 72" class="equipment" />
          </div>
        </div>
        <div class="part">
          <div class="block">
            <EquipmentInfo v-for="(_, index) in 24" :id="INITIAL_OFFSET + index + 48 + game.data.source.equipmentLoadoutIds[game.data.source.currentHero] * 72" class="equipment" />
          </div>
        </div>
        <div class="part">
          <div class="block-potion">
            <PotionInfo v-for="(_, index) in 6" :id="260 + index + game.data.source.currentHero * 6" class="equipment" />
          </div>
        </div>
      </div>
    </template> -->
  </div>

  <dialog ref="dialog" @mousedown="if (($event.target as HTMLDialogElement).nodeName == dialog.nodeName) dialog.close();">
    <div class="wrapper">
      <div style="float: left; margin-right: 20px">
        <h3>Equipment List</h3>
        <p v-for="(value, key) in getEquipmentList()">{{ key }} x{{ value }}</p>
      </div>
      <div style="float: left">
        <h3>Equipment List</h3>
        <p v-for="(value, key) in getEquipmentEffectList()">{{ key }} x{{ value }}</p>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.part {
  display: inline-block;
  margin-right: 8px;
}
.block-potion {
  display: grid;
  grid-template-columns: repeat(1, 48px);
  gap: 3px;
}
.block-potion div:nth-child(2n) {
  margin-bottom: 10px;
}

.block div:nth-child(8n) {
  margin-bottom: 10px;
}

.block {
  display: grid;
  grid-template-columns: repeat(4, 48px);
  gap: 3px;
}

ul {
  display: inline-block;
  margin-bottom: 20px;
  margin-top: 5px;
  margin-left: 0;
  padding: 0;
  font-size: 0;
}

li {
  display: inline;
  font-size: 10px;
  background-image: linear-gradient(#2b487f, #20365f);
  margin-left: 0px;
  padding: 5px 5px 5px 5px;
  background-color: #264374;
  border-style: outset;
  border-width: 2px;
  cursor: pointer;

  border-top-color: #5476ae;
  border-bottom-color: #203151;
  border-left-color: #203865;
  border-right-color: #203c6e;
}

li:hover {
  filter: brightness(120%);
}

.equipment {
  /* background-color: red; */
  border-style: solid;
  border-width: 1px;
  border-color: rgb(143, 0, 0);
  font-size: 11px;
  padding: 0;
  width: 48px;
  height: 48px;
}

.equipment:hover {
  border-color: #01f304;
  border-style: solid;
  border-width: 1px;
}
dialog {
  padding: 0;
  background: rgba(51, 51, 51, 0.95);
  color: #fff;
  border-width: 1px;
  border-color: #525252;
}
.wrapper {
  padding: 10px;
  width: 700px;
}
</style>
../data2 ../stores/heroStats
