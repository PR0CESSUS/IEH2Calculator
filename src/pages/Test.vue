<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../Game";
const game = inject<Game>("game");

// const xxx = test.data.expedition.expeditions[0];
</script>

<template>
  <hr />
  {{ game.data.requireUpdate }}

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

<style scoped></style>
../data2 ../Game
