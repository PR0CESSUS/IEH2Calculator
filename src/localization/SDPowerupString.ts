import { Util } from "../Util";
import { SuperDungeonPowerupKind } from "../type/SuperDungeonPowerupKind";

export function SDPowerupString(kind: SuperDungeonPowerupKind, effect = 0, effectPerRank = 0) {
  let str1 = ``;
  let str2 = ``;
  let str3 = ``;
  switch (kind) {
    case SuperDungeonPowerupKind.Heal:
      str1 = `Heal`;
      str2 = `Restores ${effect} of Max every: HP floor ( + ${effectPerRank} / Rank )`;
      str3 = `HP After + ${Util.tDigit(effect)}`;
      break;
    case SuperDungeonPowerupKind.TimeLimit:
      str1 = `Time Expansion`;
      str2 = `SD Time Limit + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `Initial SD Time Limit + ${Util.secondsToDhms(effect)}`;
      break;
    case SuperDungeonPowerupKind.DamageMultiplier:
      str1 = `SD Damage Multiplier`;
      str2 = `SD Damage Multiplier + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `Multiplicative SD Damage Multiplier + ${Util.percent(effect)}`;
      break;
    case SuperDungeonPowerupKind.DamageCutMultiplier:
      str1 = `SD Damage Cut Multiplier`;
      str2 = `SD Damage Cut Multiplier + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `Multiplicative SD Damage Cut Multiplier + ${Util.percent(effect)}`;
      break;
    case SuperDungeonPowerupKind.RestoreDodgeTimesec:
      str1 = `Dodge Time`;
      str2 = `Restores ${effect} sec available dodge every floor ( + ${effectPerRank} / Rank )`;
      str3 = `Initial available dodge + ${Util.tDigit(effect, 0)} sec`;
      break;
    case SuperDungeonPowerupKind.DodgeHeal:
      str1 = `Dodge Heal`;
      str2 = `Restores ${effect} of Max every: HP time dodge is successful ( + ${effectPerRank} / Rank )`;
      str3 = `MP After + ${Util.tDigit(effect)}`;
      break;
    case SuperDungeonPowerupKind.DungeonCoinGain:
      str1 = `Dungeon Coin Gain`;
      str2 = `Extra Dungeon per: Coin defeat + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `Dungeon Coin Gain + ${Util.percent(effect)}`;
      break;
    case SuperDungeonPowerupKind.FameGain:
      str1 = `Fame Gain`;
      str2 = `Fame Gain + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `Fame Gain + ${Util.percent(effect)}`;
      break;
    case SuperDungeonPowerupKind.SkillCastSpeed:
      str1 = `Skill Cast Speed`;
      str2 = `Skill Cast Speed + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `SPD After + ${Util.tDigit(effect)}`;
      break;
    case SuperDungeonPowerupKind.PhysicalCriticalChance:
      str1 = `Physical Critical Chance`;
      str2 = `Physical Critical Chance After + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `Physical Critical Chance After + ${Util.percent(effect)}`;
      break;
    case SuperDungeonPowerupKind.MagicalCriticalChance:
      str1 = `Magical Critical Chance`;
      str2 = `Magical Critical Chance After + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `Magical Critical Chance After + ${Util.percent(effect)}`;
      break;
    case SuperDungeonPowerupKind.CriticalDamage:
      str1 = `Critical Damage`;
      str2 = `Critical Damage After + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `Multiplicative Critical Damage + ${Util.percent(effect)}`;
      break;
    case SuperDungeonPowerupKind.MoveSpeed:
      str1 = `Move Speed`;
      str2 = `Move Speed After + ${effect} / sec ( + ${effectPerRank} / Rank )`;
      str3 = `Move Speed After + ${effect} / sec`;
      break;
    case SuperDungeonPowerupKind.PhysicalDamage:
      str1 = `Physical Damage`;
      str2 = `Physical Damage After + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `ATK After + ${Util.tDigit(effect)}`;
      break;
    case SuperDungeonPowerupKind.MagicalDamage:
      str1 = `Magical Damage`;
      str2 = `Magical Damage After + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `MATK After + ${Util.tDigit(effect)}`;
      break;
    case SuperDungeonPowerupKind.PhysicalAbsorption:
      str1 = `Physical Absorption`;
      str2 = `Physical Absorption After + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `DEF After + ${Util.tDigit(effect)}`;
      break;
    case SuperDungeonPowerupKind.MagicalAbsorption:
      str1 = `Magical Absorption`;
      str2 = `Magical Absorption After + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `MDEF After + ${Util.tDigit(effect)}`;
      break;
    case SuperDungeonPowerupKind.SkillHitCount:
      str1 = `Skill Hit Count`;
      str2 = `Skill Hit Count + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `Skill Level After + ${Util.tDigit(effect)}`;
      break;
    case SuperDungeonPowerupKind.ExtraAfterDamage:
      str1 = `Extra After Damage`;
      str2 = `Extra After Damage + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `Extra After Damage + ${Util.percent(effect)}`;
      break;
    case SuperDungeonPowerupKind.EquipmentDropChance:
      str1 = `Equipment Drop Chance`;
      str2 = `Equipment Drop Chance After + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `Artifact Proficiency Gain + ${Util.percent(effect)}`;
      break;
    case SuperDungeonPowerupKind.ChallengeBossDamageMultiplier:
      str1 = `SD Challenge Boss Damage Multiplier`;
      str2 = `SD Challenge Boss Damage Multiplier + ${effect} ( + ${effectPerRank} / Rank )`;
      str3 = `Multiplicative SD Challenge Boss Damage Multiplier + ${Util.percent(effect)}`;
      break;
  }
  return { name: str1, active: str2, passive: str3 };
}
