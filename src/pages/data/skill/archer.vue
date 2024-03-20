<script setup lang="ts">
import { inject } from "vue";
import { Game } from "@/Game";
import { definePage } from "vue-router/auto";
import AppCollapse from "@/components/AppCollapse.vue";
import AppInput from "@/components/AppInput.vue";

definePage({
  meta: {
    name: "Archer",
  },
});
const game = inject<Game>("game");
</script>

<template>
  Total Level: {{ game.data.skill.classSkills[4].MaxReachedTotalLevel() }} || Damage Multiplier: {{ game.data.skill.classSkills[4].DamageMultiplierEffectValueString() }}
  <hr />
  <AppCollapse v-for="skill in game.data.skill.classSkills[4].skills">
    <template #trigger
      >{{ skill.NameString() }} <span class="green">Lv {{ skill.level.value }}</span> <span class="orange">&lt; Rank {{ skill.rank }} &gt;</span></template
    >
    <template #content>
      Level: <AppInput v-model="skill.level.value" />
      <h5>Passive Effects</h5>

      <p :class="{ green: passive.IsEnoughLevel() }" v-for="passive in skill.passiveEffectLists">{{ passive.requiredLevel }} {{ passive.description() }}</p>
    </template>
  </AppCollapse>
</template>
../../../Game
