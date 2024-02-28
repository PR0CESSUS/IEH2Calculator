<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../../Game";
const game = inject<Game>("game");
</script>

<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Level</th>
      <th>Passive Effect</th>
    </tr>
    <tr v-for="expedition in game.data.expedition.globalInfoList">
      <td>{{ expedition.NameString() }}: {{}}</td>
      <td>
        <input type="text" size="12" v-model.lazy.number="expedition.level" />
      </td>
      <td>{{ expedition.EffectValueString() }}</td>
    </tr>
  </table>
</template>
