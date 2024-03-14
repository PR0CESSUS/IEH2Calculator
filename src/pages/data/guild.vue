<script setup lang="ts">
import { inject } from "vue";
import { Game } from "@/Game";
import { HeroKind } from "@type/HeroKind";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Guild",
  },
});
const game = inject<Game>("game");
</script>

<template>
  <table>
    <tr>
      <th>Hero</th>
      <th>Status</th>
    </tr>
    <tr v-for="(status, index) in game.data.source.isActiveBattle">
      <td>{{ HeroKind[index] }}:</td>
      <td>{{ status ? (game.data.source.currentHero == index ? "active" : "passive") : "inactive" }}</td>
    </tr>
  </table>
</template>
../../../Game../../../type/HeroKind
