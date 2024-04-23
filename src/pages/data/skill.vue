<script setup lang="ts">
import { Game } from "@/Game";
import { Util } from "@/Util";
import AppDifference from "@/components/AppDifference.vue";
import Tooltip from "@/components/Tooltip.vue";
import { inject } from "vue";
import { definePage } from "vue-router/auto";
const game = inject<Game>("game");
definePage({
  meta: {
    name: "Skill",
  },
});
</script>

<template>
  <Tooltip>
    <template #trigger>
      Total Skill Trigger: {{ game.data.skill.TotalTriggeredNumString() }}
      <AppDifference :data="game.data.skill.TotalTriggeredNum()" :snap="game.snap.skill.TotalTriggeredNum()" />
    </template>
    <template #content>
      Snapshot [{{ Util.secondsToTime(game.snap.source.allTimeRealtime) }}]: {{ game.snap.skill.TotalTriggeredNum() }} ({{ game.snap.skill.TotalTriggeredNumString() }}) <br />
      Current [{{ Util.secondsToTime(game.data.source.allTimeRealtime) }}]: {{ game.data.skill.TotalTriggeredNum() }} ({{ game.data.skill.TotalTriggeredNumString() }})
      <hr />
      Difference: {{ game.data.skill.TotalTriggeredNum() - game.snap.skill.TotalTriggeredNum() }} ({{
        Util.tDigit(game.data.skill.TotalTriggeredNum() - game.snap.skill.TotalTriggeredNum())
      }})
    </template>
  </Tooltip>

  <router-view></router-view>
</template>
