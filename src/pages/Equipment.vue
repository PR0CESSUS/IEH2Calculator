<script setup lang="ts">
import { inject } from "vue";
import EquipmentLoadout from "../components/EquipmentLoadout.vue";
import HeroStats from "../components/HeroStats.vue";
import { Game } from "../Game";
import SkillInformation from "../components/SkillInformation.vue";
import MonsterStats from "../components/MonsterStats.vue";
const game = inject<Game>("game");
</script>

<template>
  <div class="grid">
    <div>
      <EquipmentLoadout :key="game.data.source.currentHero" />
      <HeroStats :key="game.data.requireUpdate.value ? 'xxx' : 'yyy'" />
    </div>
    <div>
      <MonsterStats />
      <hr />
      <SkillInformation :key="game.data.requireUpdate.value ? 'aaa' : 'bbb'" />
    </div>
  </div>
</template>
<style scoped>
.grid {
  display: flex;
}
</style>
