<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../../Game";

const game = inject<Game>("game");
</script>

<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Disassambled</th>
      <th>Level</th>
      <th>Passive Effect</th>
    </tr>
    <tr v-for="talisman in game.data.potion.talismans">
      <td>{{ talisman.NameString() }}:</td>
      <td>
        <input type="text" size="12" v-model.lazy.number="talisman.disassembledNum" name="talisman.disassembledNum" />
      </td>
      <td>
        <input type="text" size="5" v-model.lazy.number="talisman.level" name="talisman.level" />
      </td>
      <td>{{ talisman.EffectValueString() }}</td>
    </tr>
  </table>
</template>
