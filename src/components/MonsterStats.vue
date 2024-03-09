<script setup lang="ts">
import { computed, inject } from "vue";
import { Game } from "../Game";
import { Util } from "../Util/index";
import { CustomSelectType } from "../type/CustomSelectType";
import { MonsterSpecies } from "../type/MonsterSpecies";
import AppSelect from "./AppSelect.vue";
const game = inject<Game>("game");
const monster = computed(() => game.data.battle.Enemy());
</script>

<template>
  <div style="width: 250px; margin-left: 10px">
    <h3>Enemy</h3>
    <div style="display: flex">
      <AppSelect :type="CustomSelectType.MonsterSpecies" v-model.number="game.data.source.enemySpecies" />

      <template v-if="game.data.source.enemySpecies != MonsterSpecies.Mimic">
        <AppSelect :type="CustomSelectType.MonsterColor" v-model.number="game.data.source.enemyColor" v-if="game.data.source.enemySpecies != MonsterSpecies.ChallengeBoss" />
        <AppSelect
          :type="CustomSelectType.ChallengeMonsterKind"
          v-model.number="game.data.source.enemyChallenge"
          v-else="game.data.source.enemySpecies == MonsterSpecies.ChallengeBoss"
        />
      </template>
    </div>

    Level: <input v-model.lazy.number="game.data.source.enemyLevel" size="6" name="monsterLevel" /><br />

    HP: {{ Util.tDigit(monster.hp) }}<br />
    DEF: {{ Util.tDigit(monster.def) }}<br />
    MDEF: {{ Util.tDigit(monster.mdef) }}<br />
    Fire Resistance: {{ Util.percent(monster.fire) }}<br />
    Ice Resistance: {{ Util.percent(monster.ice) }}<br />
    Thunder Resistance: {{ Util.percent(monster.thunder) }}<br />
    Light Resistance: {{ Util.percent(monster.light) }}<br />
    Dark Resistance: {{ Util.percent(monster.dark) }}<br />
  </div>
</template>
