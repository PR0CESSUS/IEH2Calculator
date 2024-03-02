<script setup lang="ts">
import { computed, inject, ref } from "vue";
import { Game } from "../Game";
import AppSelect from "../components/AppSelect.vue";
import { CustomSelectType } from "../type/CustomSelectType";

const game = inject<Game>("game");

// const xxx = test.data.expedition.expeditions[0];

const searchKind = ref(0);
const tab = ref(1);

const foundList = computed(() => {
  let list = [];
  if (searchKind.value == 0) return list;

  for (let index = 0; index < game.data.inventory.equipmentSlots.length; index++) {
    const equipment = game.data.inventory.equipmentSlots[index];

    for (let index = 0; index < equipment.optionEffects.length; index++) {
      const effect = equipment.optionEffects[index];
      if (effect.kind == searchKind.value) {
        list.push(equipment);
        break;
      }
    }
    // const xx = equipment.optionEffects.filter((effect) => effect.kind == kind);
    // if ()
    // if (xx.length) console.log(xx);
  }

  // console.log(list.find((e) => e.slotId == 374));

  return list;
});

const foundListIds = computed(() => {
  return foundList.value.map((ele) => {
    return ele.slotId;
  });
});

// function findEnchantements(kind: EquipmentEffectKind): Equipment[] {

// }

// watch(def, () => {
//   findEnchantements(def.value);
// });
</script>

<template>
  Search Enchant: <AppSelect :type="CustomSelectType.EquipmentEffectKind" v-model="searchKind" />

  <div>
    <button v-for="i in 9" @click="tab = i" class="btn btn-gray" :class="tab == i ? 'yellow' : ''">{{ i }}</button>
  </div>
  <div class="container">
    <!-- <EquipmentInfo v-for="i in 52" :id="52 * (tab - 1) + i - 1" :key="52 * (tab - 1) + i - 1" class="found" /> -->
    <div v-for="i in 52" :class="foundListIds.includes(52 * (tab - 1) + i - 1) ? 'found' : ''">{{ 52 * (tab - 1) + i - 1 }}</div>
  </div>

  <!-- {{ game.compare.expedition.globalInfoList[0].TotalExp() }} -->
  <p v-for="(equipment, index) in foundList">{{ index + 1 }}. {{ equipment.SlotString() }}</p>
  <!-- data.source.equipmentLoadoutIds[data.source.currentHero] {{ test.data.source.equipmentLoadoutIds[test.data.source.currentHero] }}  -->
  <!-- 
  expedition.expeditions[0].level.value {{ test.data.expedition.expeditions[0].level.value }}<br />
  expedition.expeditions[0].level.snap {{ test.data.expedition.expeditions[0].level.snap }}<br />
  expedition.expeditions[0].level.diff.digit {{ test.data.expedition.expeditions[0].level.diff.digit }}<br />
  expedition.expeditions[0].level.diff.percent {{ test.data.expedition.expeditions[0].level.diff.percent }}<br />

  <br />
  expedition.expeditions[1].level.value {{ test.data.expedition.expeditions[1].level.value }}<br />
  expedition.expeditions[1].level.snap {{ test.data.expedition.expeditions[1].level.snap }}<br />
  expedition.expeditions[1].level.diff.digit {{ test.data.expedition.expeditions[1].level.diff.digit }}<br />
  expedition.expeditions[1].level.diff.percent {{ test.data.expedition.expeditions[1].level.diff.percent }}<br />

  <br />

  xxx.level {{ xxx.level.value }}

  <div>
    <p v-for="(expedition, index) in test.main.expedition.expeditions">
      <span>{{ expedition.NameString() }}</span> {{ test.data.expedition.expeditions[index].level.diff.digit }}
      {{ index }}
    </p>
  </div> -->
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(13, 48px [col-start]);
}
.container div {
  background-image: url(./img/equip/Nothing.png);
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
