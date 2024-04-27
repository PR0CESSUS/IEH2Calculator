<script setup lang="ts">
import { inject } from "vue";
import { Game } from "@/Game";
import { definePage } from "vue-router/auto";

definePage({
  meta: {
    name: "Upgrade",
  },
});
const game = inject<Game>("game");
</script>

<template>
  <table>
    <tr>
      <th>Name</th>
      <th>Level</th>
      <th>Effect</th>
    </tr>
    <tr class="heading">
      <td>Automations</td>
    </tr>
    <tr v-for="upgrade in game.data.sdg.upgradeCtrl.automationList">
      <td>{{ upgrade.NameString() }}</td>
      <td>
        <input type="text" size="6" v-model.lazy.number="upgrade.level" name="upgradeLevel" />
      </td>
      <td>{{ upgrade.EffectValueString() }}</td>
    </tr>
    <tr class="heading">
      <td>Upgrade 1</td>
    </tr>
    <tr v-for="upgrade in game.data.sdg.upgradeCtrl.upgrade1ist">
      <td>{{ upgrade.NameString() }}</td>
      <td>
        <input type="text" size="6" v-model.lazy.number="upgrade.level" name="upgradeLevel" />
      </td>
      <td>{{ upgrade.EffectValueString() }}</td>
    </tr>
    <tr class="heading">
      <td>Upgrade 2</td>
    </tr>
    <tr v-for="upgrade in game.data.sdg.upgradeCtrl.upgrade2ist">
      <td>{{ upgrade.NameString() }}</td>
      <td>
        <input type="text" size="6" v-model.lazy.number="upgrade.level" name="upgradeLevel" />
      </td>
      <td>{{ upgrade.EffectValueString() }}</td>
    </tr>
    <tr class="heading">
      <td>Upgrade 3</td>
    </tr>
    <tr v-for="upgrade in game.data.sdg.upgradeCtrl.upgrade3ist">
      <td>{{ upgrade.NameString() }}</td>
      <td>
        <input type="text" size="6" v-model.lazy.number="upgrade.level" name="upgradeLevel" />
      </td>
      <td>{{ upgrade.EffectValueString() }}</td>
    </tr>
    <tr class="heading">
      <td>Upgrade 4</td>
    </tr>
    <tr v-for="upgrade in game.data.sdg.upgradeCtrl.upgrade4ist">
      <td>{{ upgrade.NameString() }}</td>
      <td>
        <input type="text" size="6" v-model.lazy.number="upgrade.level" name="upgradeLevel" />
      </td>
      <td>{{ upgrade.EffectValueString() }}</td>
    </tr>
  </table>
</template>
../../../Game
