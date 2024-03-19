<script setup lang="ts">
import { Game } from "@/Game";
import { inject } from "vue";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Achievement",
    submenu: false,
  },
});
const game = inject<Game>("game");
</script>

<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Level</th>
      <th>Rank</th>
      <th>Loyalty</th>
      <th>Effect</th>
    </tr>
    <tr v-for="achievement in game.data.achievement.achievementList">
      <td :class="{ green: achievement.isGotReward, orange: achievement.isCleared && !achievement.isGotReward }">{{ achievement.NameString() }}</td>
      <td><input type="checkbox" v-model.lazy="achievement.isGotReward" name="achievement.isGotAchievementRewards" /></td>
      <td>{{ achievement.RewardString() }}</td>
    </tr>
    <!-- <tr class="summary">
      <td>Total:</td>
      <td></td>
      <td>{{ game.data.achievement.TotalClearNum() }}</td>
    </tr> -->
  </table>
</template>
