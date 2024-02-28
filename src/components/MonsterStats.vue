<script setup lang="ts">
import { inject, onBeforeUpdate, ref } from "vue";
import { Enums } from "../Enums";
import { Util } from "../Util/index";
import { useGlobalStore } from "../stores/global";
import { ChallengeMonsterKind } from "../type/ChallengeMonsterKind";
import { MonsterColor } from "../type/MonsterColor";
import { MonsterSpecies } from "../type/MonsterSpecies";
import { Game } from "../Game";
const game = inject<Game>("game");
const globalStore = useGlobalStore();
const monster = ref(null);

Update();

onBeforeUpdate(() => {
  Update();
});
function Update() {
  if (globalStore.monster.species == MonsterSpecies.ChallengeBoss) {
    game.data.battle.challengeMonster.challengeMonsterKind = globalStore.monster.challange;
    game.data.battle.challengeMonster.level = globalStore.monster.level;
  } else {
    game.data.battle.monster.color = globalStore.monster.color;
    game.data.battle.monster.level = globalStore.monster.level;
    game.data.battle.monster.species = globalStore.monster.species;
  }

  monster.value = globalStore.monster.species == MonsterSpecies.ChallengeBoss ? game.data.battle.challengeMonster : game.data.battle.monster;
}
</script>

<template>
  <div style="width: 250px; margin-left: 10px">
    <h3>Enemy</h3>
    Species:
    <select v-model.number="globalStore.monster.species">
      <option v-for="(_, i) in Enums.MonsterSpecies" :value="i">{{ MonsterSpecies[i] }}</option></select
    ><br />
    <template v-if="globalStore.monster.species != MonsterSpecies.Mimic">
      Color:&nbsp;&nbsp;&nbsp;&nbsp;
      <select v-model.number="globalStore.monster.challange" v-if="globalStore.monster.species == MonsterSpecies.ChallengeBoss">
        <option v-for="(_, i) in Enums.ChallengeMonsterKind" :value="i">{{ ChallengeMonsterKind[i] }}</option>
      </select>
      <select v-model.number="globalStore.monster.color" v-else-if="globalStore.monster.species != MonsterSpecies.ChallengeBoss">
        <option v-for="(_, i) in Enums.MonsterColor" :value="i">{{ MonsterColor[i] }}</option>
      </select>
      <br />
    </template>
    Level: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input v-model.lazy.number="globalStore.monster.level" size="8" />

    <p>
      HP: <span name="HP"> {{ Util.tDigit(monster.hp) }}</span>
    </p>

    <p>
      DEF: <span name="DEF">{{ Util.tDigit(monster.def) }}</span>
    </p>
    <p>
      MDEF: <span name="MDEF">{{ Util.tDigit(monster.mdef) }}</span>
    </p>
    <p>
      Fire Resistance: <span name="Fire">{{ Util.percent(monster.fire) }}</span>
    </p>
    <p>
      Ice Resistance: <span name="Ice">{{ Util.percent(monster.ice) }}</span>
    </p>
    <p>
      Thunder Resistance: <span name="Thunder">{{ Util.percent(monster.thunder) }}</span>
    </p>
    <p>
      Light Resistance: <span name="Light">{{ Util.percent(monster.light) }}</span>
    </p>
    <p>
      Dark Resistance: <span name="Dark">{{ Util.percent(monster.dark) }}</span>
    </p>
  </div>
</template>
