<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../../Game";
import { Util } from "../../Util/index";
const game = inject<Game>("game");
</script>

<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Level</th>
      <th>Passive Effect</th>
      <th>Exp</th>
      <th>Total Exp</th>
    </tr>
    <tr v-for="expedition in game.data.expedition.globalInfoList">
      <td>{{ expedition.NameString() }}: {{}}</td>
      <td>
        <input type="text" size="8" v-model.lazy.number="expedition.level" />
      </td>
      <td>{{ expedition.EffectValueString() }}</td>
      <td>{{ Util.tDigit(expedition.exp, 3) }} / {{ Util.tDigit(expedition.RequiredExp(expedition.level), 3) }}</td>
      <td>{{ Util.tDigit(expedition.TotalExp(), 3) }}</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>{{ Util.tDigit(game.data.expedition.TotalExp(), 3) }}</td>
    </tr>
  </table>
</template>
