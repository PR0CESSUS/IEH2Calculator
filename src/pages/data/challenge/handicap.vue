<script setup lang="ts">
import { Game } from "@/Game";
import AppCollapse from "@/components/AppCollapse.vue";
import { HeroKind } from "@type/HeroKind";
import { inject } from "vue";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Handicap",
  },
});
const game = inject<Game>("game");
</script>

<template>
  <AppCollapse v-for="challenge in game.data.challenge.handicapList">
    <template #trigger>{{ challenge.NameString() }}</template>
    <template #content>
      <table>
        <tr>
          <th>Name</th>
          <th>Done</th>
          <th>Effect</th>
        </tr>

        <tr v-for="(_, index) in 6">
          <td>{{ HeroKind[index] }}</td>

          <td>
            <input
              type="checkbox"
              :checked="challenge.IsReceivedRewardClass(index)"
              @change="challenge.SetReceivedRewardClass(index, ($event.target as HTMLInputElement).checked)"
            />
          </td>
          <td>{{ challenge.ClassExclusiveRewardString()[index] }}</td>
        </tr>
      </table>
    </template>
  </AppCollapse>
</template>
