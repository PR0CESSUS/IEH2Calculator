<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../Game";

const game = inject<Game>("game");
</script>

<template>
  <div style="width: 151px">{{ game.data.source.isSuperDungeon }}</div>
</template>

<style scoped></style>
../data2 ../Game
