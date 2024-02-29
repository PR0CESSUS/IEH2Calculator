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
      <th>Effect</th>
    </tr>
    <tr v-for="upgrade in game.data.sdg.upgradeCtrl.upgrade1ist">
      <td>{{ upgrade.NameString() }}:</td>
      <td>
        <input type="text" size="6" v-model.lazy.number="upgrade.level" />
      </td>
      <td>{{ upgrade.EffectValueString() }}</td>
    </tr>
  </table>
</template>
