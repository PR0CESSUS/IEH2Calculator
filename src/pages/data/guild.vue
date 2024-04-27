<script setup lang="ts">
import { inject } from "vue";
import { Game } from "@/Game";
import { HeroKind } from "@type/HeroKind";
import { definePage } from "vue-router/auto";
import AppInput from "@/components/AppInput.vue";

definePage({
  meta: {
    name: "Guild",
  },
});
const game = inject<Game>("game");
</script>

<template>
  <table>
    <tr>
      <th>Hero</th>
      <th>Status</th>
    </tr>
    <tr v-for="(status, index) in game.data.source.isActiveBattle">
      <td>{{ HeroKind[index] }}:</td>
      <td>{{ status ? (game.data.source.currentHero == index ? "active" : "passive") : "inactive" }}</td>
    </tr>
  </table>

  <hr />
  <h3>Guild Ability</h3>
  <table>
    <tr>
      <th>Ability</th>
      <th>Level</th>
      <th>Effect</th>
    </tr>
    <tr v-for="ability in game.data.guild.abilities">
      <td>{{ ability.NameString() }}</td>
      <td><AppInput v-model="ability.level" /></td>
      <td>{{ ability.EffectString() }}</td>
    </tr>
  </table>
  <h3>Super Guild Ability</h3>
  <table>
    <tr>
      <th>Ability</th>
      <th>Level</th>
      <th>Effect</th>
    </tr>
    <tr v-for="ability in game.data.guild.superAbilityList">
      <td>{{ ability.NameString() }}</td>
      <td><AppInput v-model="ability.level" /></td>
      <td>{{ ability.EffectString(ability.level) }}</td>
    </tr>
  </table>
</template>
../../../Game../../../type/HeroKind
