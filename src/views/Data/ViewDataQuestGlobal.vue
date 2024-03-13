<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../../Game";
const game = inject<Game>("game");
</script>

<template>
  <table>
    <tr>
      <th>Global Quest</th>
      <th>Completed</th>
    </tr>
    <tr v-for="quest in game.data.quest.globalQuests">
      <td>{{ quest.NameString() }}</td>
      <td><input type="checkbox" v-model="quest.isCleared" /></td>
    </tr>
  </table>
</template>
