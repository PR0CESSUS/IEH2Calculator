<script setup lang="ts">
import { Game } from "@/Game";
import SkillBreakdown from "@/components/SkillBreakdown.vue";
import SkillLoadout from "@/components/SkillLoadout.vue";
import EquipmentLoadout from "@components/EquipmentLoadout.vue";
import HeroStats from "@components/HeroStats.vue";
import MonsterStats from "@components/MonsterStats.vue";
import { inject } from "vue";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Equipment",
    root: true,
  },
});
const game = inject<Game>("game");
</script>

<template>
  <div class="grid">
    <div>
      <EquipmentLoadout />
      <HeroStats :key="game.data.requireUpdate.value ? 'xxx' : 'yyy'" />
    </div>
    <div>
      <MonsterStats />
      <hr />
      <SkillLoadout />
      <hr />
      <SkillBreakdown :key="game.data.requireUpdate.value ? 'aaa' : 'bbb'" />
    </div>
  </div>
</template>
<style scoped>
.grid {
  display: flex;
}
</style>
../../Game
