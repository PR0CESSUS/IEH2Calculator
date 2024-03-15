<script setup lang="ts">
import { Game } from "@/Game";

import { inject } from "vue";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Test",
    root: true,
  },
});

const game = inject<Game>("game");
</script>

<template>game.data.source.isSuperDungeon: {{ game.data.source.isSuperDungeon }}</template>

<style scoped></style>
../data2 ../Game ../../Game ../Game
