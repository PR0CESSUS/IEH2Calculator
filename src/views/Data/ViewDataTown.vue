<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../../Game";
import AppInput from "../../components/AppInput.vue";
const game = inject<Game>("game");
</script>

<template>
  <div style="display: flex"></div>
  <table>
    <tr>
      <th>Building Name</th>
      <th>Level</th>
      <th>Effect</th>
    </tr>
    <template v-for="building in game.data.town.buildings">
      <tr class="summary">
        <td>{{ building.NameString() }}</td>
        <td class="green" style="padding-right: 5px">{{ building.level[building.kind] }} + {{ building.levelBonus.Value() }}</td>
        <td>{{ building.EffectValueString() }}</td>
      </tr>
      <tr>
        <td>-Stone</td>
        <td><AppInput v-model="building.research[0].level" :size="4" /></td>
        <td>{{ building.research[0].EffectValueString() }}</td>
      </tr>
      <tr>
        <td>-Crystal</td>
        <td><AppInput v-model="building.research[1].level" :size="4" /></td>
        <td>{{ building.research[1].EffectValueString() }}</td>
      </tr>
      <tr>
        <td>-Leaf</td>
        <td><AppInput v-model="building.research[2].level" :size="4" /></td>
        <td>{{ building.research[2].EffectValueString() }}</td>
      </tr>
    </template>
  </table>
</template>
