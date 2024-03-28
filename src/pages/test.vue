<script setup lang="ts">
import { Game } from "@/Game";
import SkillLoadout from "@/components/SkillLoadout.vue";
import { HeroKind } from "@/type/HeroKind";

import { inject } from "vue";
import { definePage } from "vue-router/auto";

const game = inject<Game>("game");
definePage({
  meta: {
    name: "Test",
    root: true,
    debug: true,
  },
});

// const inGameData = ref({main1: globalStore});
</script>

<template>
  Current Hero: {{ HeroKind[game.data.source.currentHero] }}<br />
  Current Skill Loadout: {{ game.data.source.skillLoadoutIds[game.data.source.currentHero] }}<br />

  <!-- {{ game.data.source.isEquippedAngelSkillForAngel }} -->

  <hr />

  <SkillLoadout />
</template>

<style scoped>
.element {
  background-color: #636363;
  border: 1px solid #000;
  border-radius: 3px;
}
</style>
../data2 ../Game ../../Game ../Game
