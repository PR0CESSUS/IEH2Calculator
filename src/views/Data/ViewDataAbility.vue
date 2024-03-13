<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../../Game";
import { HeroKind } from "../../type/HeroKind";
import AppInput from "../../components/AppInput.vue";
const game = inject<Game>("game");
</script>

<template>
  <table>
    <tr>
      <th>Hero</th>
      <th>VIT</th>
      <th>STR</th>
      <th>INT</th>
      <th>AGI</th>
      <th>LUK</th>
    </tr>
    <tr v-for="hero in game.data.stats.heroes">
      <td>{{ HeroKind[hero.heroKind] }}</td>
      <td><AppInput v-model.convert="hero.abilities[0].point.value" /></td>
      <td><AppInput v-model.convert="hero.abilities[1].point.value" /></td>
      <td><AppInput v-model.convert="hero.abilities[2].point.value" /></td>
      <td><AppInput v-model.convert="hero.abilities[3].point.value" /></td>
      <td><AppInput v-model.convert="hero.abilities[4].point.value" /></td>
    </tr>
  </table>
  <table>
    <tr>
      <th>Hero</th>
      <th>SD VIT</th>
      <th>SD STR</th>
      <th>SD INT</th>
      <th>SD AGI</th>
      <th>SD LUK</th>
    </tr>
    <tr v-for="hero in game.data.superStats.heroes">
      <td>{{ HeroKind[hero.heroKind] }}</td>
      <td><AppInput v-model.convert="hero.superAbilities[0].value" /></td>
      <td><AppInput v-model.convert="hero.superAbilities[1].value" /></td>
      <td><AppInput v-model.convert="hero.superAbilities[2].value" /></td>
      <td><AppInput v-model.convert="hero.superAbilities[3].value" /></td>
      <td><AppInput v-model.convert="hero.superAbilities[4].value" /></td>
    </tr>
  </table>
</template>
