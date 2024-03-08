<script setup lang="ts">
import { computed, inject, ref } from "vue";
import { Game } from "../Game";
import AppSelect from "../components/AppSelect.vue";
import { CustomSelectType } from "../type/CustomSelectType";
const game = inject<Game>("game");

const searchKind = ref(0);
const tab = ref(1);

const foundList = computed(() => {
  let list = [];
  if (searchKind.value == 0) return list;

  for (let index = 0; index < 4840; index++) {
    const equipment = game.data.inventory.equipmentSlots[index];

    for (let index = 0; index < equipment.optionEffects.length; index++) {
      const effect = equipment.optionEffects[index];
      if (effect.kind == searchKind.value) {
        list.push(equipment);
        break;
      }
    }
  }

  return list;
});

const foundListIds = computed(() => {
  return foundList.value.map((ele) => {
    return ele.slotId;
  });
});

function isInRange(tab) {
  const minRange = (tab - 1) * 52;
  const maxRange = minRange + 52;

  for (let index = 0; index < foundListIds.value.length; index++) {
    const id = foundListIds.value[index];
    if (id >= minRange && id < maxRange) return "green";
  }
}
// console.log(foundListIds);
</script>

<template>
  Search Enchant: <AppSelect :type="CustomSelectType.EquipmentEffectKind" v-model="searchKind" />

  <div>
    <button v-for="i in 9" @click="tab = i" :class="tab == i ? 'yellow' : isInRange(i)">{{ i }}</button>
  </div>
  <div class="container">
    <div v-for="i in 52" :class="foundListIds.includes(52 * (tab - 1) + i - 1) ? 'found' : ''">{{ 52 * (tab - 1) + i - 1 }}</div>
  </div>

  <p v-for="(equipment, index) in foundList">{{ index + 1 }}. {{ equipment.SlotString() }}</p>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(13, 48px [col-start]);
}
.container div {
  width: 48px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-color: #5a5a5a;
}

.found {
  border-color: greenyellow;
  border-width: 1px;
  border-style: solid;
  color: greenyellow;
}
</style>
../data2 ../Game
