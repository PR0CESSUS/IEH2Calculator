<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../Game";
import { Util } from "../Util/index";
import { Localization } from "../localization/index";
import { Element } from "../type/Element";
import { MonsterSpecies } from "../type/MonsterSpecies";
import AppDifference from "./AppDifference.vue";
const game = inject<Game>("game");

// main save

const monster = game.data.battle.Enemy();
const info = monster.AttackedInfo();
// snapshot save

const monsterSnap = game.snap.battle.Enemy();
const infoSnap = monsterSnap.AttackedInfo();

// console.log(info.totalDamage, infoSnap.totalDamage);
</script>

<template>
  <div style="margin-left: 10px">
    <p>
      Skill: {{ Localization.SkillName(game.data.source.currentHero, 0) }}
      <span class="green">Lv {{ Util.tDigit(info.skill.level, 0) }} + {{ Util.tDigit(info.skill.levelBonus, 0) }} </span>
      <span class="orange"> &lt; Rank {{ info.skill.rank }} &gt;</span>
    </p>
    <p>- {{ Element[info.skill.element] }} Damage: {{ Util.tDigit(info.skill.DamageOrigin(info.hero, true)) }} * {{ Util.tDigit(info.skill.HitCount(), 0) }}</p>
    <p>- Cast Time: {{ Util.tDigit(info.skill.CalculateInterval(info.hero), 3) }} sec</p>
    <hr />
    <h4>Skill Damage Breakdown</h4>
    <table style="font-size: 12px; border-collapse: collapse">
      <tr>
        <td>Base:</td>
        <td>{{ game.data.source.isSuperDungeon ? Util.tDigit(Math.log10(Math.max(1.0, info.skill.Damage()))) : Util.tDigit(info.skill.Damage()) }}</td>
      </tr>
      <tr>
        <td>{{ info.skill.element == Element.Physical ? "ATK" : "MATK" }}:</td>
        <td>{{ game.data.source.isSuperDungeon ? "+" : "*" }} {{ Util.tDigit(info.skill.element == Element.Physical ? info.hero.atk : info.hero.matk) }}</td>
      </tr>
      <tr>
        <td>Emelda</td>
        <td>* {{ Util.percent(game.data.skill.ladyEmeldaEffectMultiplier[game.data.source.currentHero].Value()) }}</td>
      </tr>
      <tr>
        <td>Monster Resistance</td>
        <td>* {{ Util.percent(monster.DamageCutRate(info.damage, info.element), 4) }} vs {{ Element[info.element] }}</td>
      </tr>
      <tr>
        <td>Knowledge {{ MonsterSpecies[monster.species] }}</td>
        <td>* {{ Util.percent(monster.damageFactor) }}</td>
      </tr>
      <tr>
        <td>Element {{ Element[info.element] }}</td>
        <td>* {{ Util.percent(monster.DamageFactorElement(info.element)) }}</td>
      </tr>
      <tr>
        <td>Critical Damage</td>
        <td>* {{ Util.percent(info.hero.critDamage) }}</td>
      </tr>

      <template v-if="game.data.source.isSuperDungeon">
        <tr>
          <td>Damage Modifier</td>
          <td>* {{ Util.percent(game.data.battle.superDungeonCtrl.damageMultiplier.Value()) }}</td>
        </tr>
        <tr>
          <td>Damage Modifier vs Boss</td>
          <td>* {{ Util.percent(game.data.battle.superDungeonCtrl.sdChallengeBossDamageMultiplier.Value()) }}</td>
        </tr>
      </template>
      <tr style="border-bottom: 1px solid #fff">
        <td>Single Hit Damage</td>
        <td>= {{ Util.tDigit(info.DamagePerHit) }}</td>
      </tr>
      <tr>
        <td>Hit Count</td>
        <td>* {{ Util.tDigit(info.realHitCount, 0) }}</td>
      </tr>
      <!-- <tr style="border-bottom: 1px solid #fff">
        <td>Total Damage Before Oil</td>
        <td>= {{ Util.tDigit(info.tempTotalDamage) }}</td>
      </tr> -->
      <template v-if="info.slayerOilDamage > 0">
        <tr>
          <td>Slayer Oil Bonus</td>
          <td>* {{ Util.percent(info.SlayerOilValue) }} ({{ Util.tDigit(info.slayerOilDamage) }})</td>
        </tr>
      </template>

      <!-- <tr style="border-bottom: 1px solid #fff">
        <td>Total Damage Before Extra After</td>
        <td>= {{ Util.tDigit(info.totalBeforeExtraAfter) }}</td>
      </tr> -->
      <tr>
        <td>Extra After Bonus</td>
        <td>* {{ Util.percent(info.hero.extraAfterDamage) }} ({{ Util.tDigit(info.extraAfterDamage) }})</td>
      </tr>

      <tr style="border-bottom: 1px solid #fff">
        <td>Total Damage</td>
        <td>= {{ Util.tDigit(info.totalDamage) }}</td>
      </tr>
      <tr>
        <td>Cast Time</td>
        <td>/ {{ Util.tDigit(info.castTime, 3) }}</td>
      </tr>
      <tr>
        <td>DPS</td>
        <td>= {{ Util.tDigit(info.dps) }} <AppDifference :data="info.dps" :snap="infoSnap.dps" /></td>
      </tr>
    </table>
  </div>
</template>
