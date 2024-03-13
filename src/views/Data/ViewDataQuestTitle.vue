<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../../Game";
const game = inject<Game>("game");
</script>

<template>
  <table>
    <tr>
      <th>Title Quest</th>
      <th>Warrior</th>
      <th>Wizard</th>
      <th>Angel</th>
      <th>Thief</th>
      <th>Archer</th>
      <th>Tamer</th>
    </tr>

    <tr v-for="(quest, index) in game.data.quest.titleQuestList[0]">
      <td>{{ quest.NameString() }}</td>
      <td><input type="checkbox" v-model="game.data.quest.titleQuestList[0][index].isCleared" /></td>
      <td><input type="checkbox" v-model="game.data.quest.titleQuestList[1][index].isCleared" /></td>
      <td><input type="checkbox" v-model="game.data.quest.titleQuestList[2][index].isCleared" /></td>
      <td><input type="checkbox" v-model="game.data.quest.titleQuestList[3][index].isCleared" /></td>
      <td><input type="checkbox" v-model="game.data.quest.titleQuestList[4][index].isCleared" /></td>
      <td><input type="checkbox" v-model="game.data.quest.titleQuestList[5][index].isCleared" /></td>
    </tr>
  </table>
</template>
