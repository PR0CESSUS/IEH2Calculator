import { Enums } from "../../Enums";
import { Util } from "../../Util";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { Element } from "../../type/Element";
import { NumberType } from "../../type/NumberType";

export function renderMain() {
  let endpoint = new Util.Endpoint();
  let str = `<h3>Main Stats</h3>`;
  str += `<div class="block">`;
  for (let index = 0; index < Enums.BasicStatsKind; index++) {
    str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].basicStats[${index}]`)} data-type="${NumberType.Normal}">${
      BasicStatsKind[index]
    }</multiplier-info>`;
  }
  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[10]`)} data-type="${NumberType.Meter}">Move Speed</multiplier-info>`;
  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].stats[9]`)}>Equipment Drop Chance</multiplier-info>`;
  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].optionEffectChance[0]`)}>Equipment 1st Enchantment Slot Chance</multiplier-info>`;
  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].optionEffectChance[1]`)}>Equipment 2nd Enchantment Slot Chance</multiplier-info>`;
  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].optionEffectChance[2]`)}>Equipment 3rd Enchantment Slot Chance</multiplier-info>`;
  str += `<multiplier-info ${endpoint.new(`equipment.effectMultiplier`)}>Equipment Effect</multiplier-info>`;

  str += `</div>`;
  str += `<div class="block">`;
  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].hpRegenerate`)} data-type="${NumberType.Normal}">HP Regeneration</multiplier-info>`;
  str += `<multiplier-info ${endpoint.new(`stats.heroes[${globalThis.data.source.currentHero}].mpRegenerate`)} data-type="${NumberType.Normal}">MP Regeneration</multiplier-info>`;
  str += `<multiplier-info ${endpoint.new(`blessingInfo.effectMultipliers[${globalThis.data.source.currentHero}]`)}>Blessing Effect</multiplier-info>`;
  str += `<multiplier-info ${endpoint.new(`battles[${globalThis.data.source.currentHero}].superDungeonCtrl.damageMultiplier`)}>SD Damage Multiplier</multiplier-info>`;
  str += `<multiplier-info ${endpoint.new(`battles[${globalThis.data.source.currentHero}].superDungeonCtrl.damageCutMultiplier`)}>SD Damage Cut Multiplier</multiplier-info>`;
  str += `<multiplier-info ${endpoint.new(
    `battles[${globalThis.data.source.currentHero}].superDungeonCtrl.sdChallengeBossDamageMultiplier`
  )}>SD Challange Boss Damage Multiplier</multiplier-info>`;
  str += `<multiplier-info ${endpoint.new(
    `battles[${globalThis.data.source.currentHero}].superDungeonCtrl.sdChallengeBossDamageCutMultiplier`
  )}>SD Challange Boss Damage Cut Multiplier</multiplier-info>`;
  str += `<multiplier-info ${endpoint.new(`battles[${globalThis.data.source.currentHero}].superDungeonCtrl.armoredFury`)}>SD Armored Fury</multiplier-info>`;
  str += `<multiplier-info ${endpoint.new(`battles[${globalThis.data.source.currentHero}].superDungeonCtrl.wardedFury`)}>SD Warded Fury</multiplier-info>`;

  str += `</div>`;
  return { html: str, endpoints: endpoint.list };
}
