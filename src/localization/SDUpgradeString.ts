import { Util } from "../Util";
import { Stats } from "../type/Stats";
import { SuperDungeonUpgradeKind } from "../type/SuperDungeonUpgradeKind";

export function SDUpgradeString(kind: SuperDungeonUpgradeKind, value = 0) {
  let str1 = "";
  let str2 = "";
  let str3 = "";
  switch (kind) {
    case SuperDungeonUpgradeKind.MorePowerups:
      str1 = "More Powerups";
      str2 = "Increases the amount of powerups every floor";
      str3 = Util.tDigit(value, 0) + " powerups appear in the Safe Zone every floor";
      break;
    case SuperDungeonUpgradeKind.FlexibleDodge:
      str1 = "Flexible Dodge";
      str2 = "Enables you to keep casting skills and moving during Dodge";
      str3 = "";
      break;
    case SuperDungeonUpgradeKind.LeaveAndRetry:
      str1 = "Leave & Retry";
      str2 = 'Unlocks the "Leave & Retry" button that enables you start the current Super Dungeon as soon as you leave it';
      str3 = "";
      break;
    case SuperDungeonUpgradeKind.AutoDodge:
      str1 = "Auto Dodge";
      str2 = 'Unlocks the "Auto Dodge" toggle in SD Options tab that automatically keeps holding down the Dodge button until the available dodge time is gone';
      str3 = "";
      break;
    case SuperDungeonUpgradeKind.AutoLeaveAndRetry:
      str1 = "Auto Leave & Retry";
      str2 = "Unlocks the toggle in SD Options tab that automatically clicks Leave & Retry button when you reach a certain floor with the entry cost less than a certain amount";
      str3 = "";
      break;
    case SuperDungeonUpgradeKind.SDDamageMultiplier:
      str1 = "SD Damage Multiplier";
      str2 = "Multiplies SD Damage Multiplier";
      str3 = "by " + Util.percent(value + 1);
      break;
    case SuperDungeonUpgradeKind.SDDamageCutMultiplier:
      str1 = "SD Damage Cut Multiplier";
      str2 = "Multiplies SD Damage Cut Multiplier";
      str3 = "by " + Util.percent(value + 1);
      break;
    case SuperDungeonUpgradeKind.FameGain:
      str1 = "Fame Gain";
      str2 = "Multiplies Fame Gain";
      str3 = "by " + Util.percent(value + 1);
      break;
    case SuperDungeonUpgradeKind.SDMPGainEveryFloor:
      str1 = "Boost-Start of MP";
      str2 = "";
      str3 = "Gains " + Util.percent(value) + " of Max MP when you visit every floor";
      break;
    case SuperDungeonUpgradeKind.SDDungeonCoinBoostStart:
      str1 = "Boost-Start of Dungeon Coin";
      str2 = "";
      str3 = "Starts a Super Dungeon run with " + Util.tDigit(value, 0) + " Dungeon Coins";
      break;
    case SuperDungeonUpgradeKind.SDPowerupBoostStart:
      str1 = "Boost-Start of Powerups";
      str2 = "Starts a Super Dungeon run with random powerups to purchase at B1F Safe Zone";
      str3 = "";
      break;
    case SuperDungeonUpgradeKind.AutoProgress:
      str1 = "Auto Progression";
      str2 = 'Unlocks the "Auto Progression" toggle in SD Options tab that automatically keeps going to the next floor up to a certain floor';
      str3 = "";
      break;
    case SuperDungeonUpgradeKind.AutoBuyPowerups:
      str1 = "Auto Buy Powerups";
      str2 = 'Unlocks the "Auto Buy Powerups" toggle in SD Options tab that automatically buys powerups randomly';
      str3 = "Buys random powerups " + Util.percent(value) + " times every floor";
      break;
    case SuperDungeonUpgradeKind.AutoUseRefreshTicket:
      str1 = "Auto Use Refresh Tickets";
      str2 = 'Unlocks the "Auto Use Refresh Tickets" toggle in SD Options tab that automatically uses an Entry Cost Refresh Ticket when the entry cost exceeds a certain amount';
      str3 = "";
      break;
    case SuperDungeonUpgradeKind.SDChallengeBossDamageMultiplier:
      str1 = "SD Challenge Boss Damage Multiplier";
      str2 = "Multiplies SD Challenge Boss Damage Multiplier";
      str3 = "by " + Util.percent(value + 1);
      break;
    case SuperDungeonUpgradeKind.GoldCap:
      str1 = "Gold Cap";
      str2 = "Multiplies Gold Cap";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.SlimeCoinCap:
      str1 = "Slime Coin Cap";
      str2 = "Multiplies Slime Coin Cap";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.HPMultiplier:
      str1 = "HP Multiplier";
      str2 = "Multiplies HP";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.MPMultiplier:
      str1 = "MP Multiplier";
      str2 = "Multiplies MP";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.ATKMultiplier:
      str1 = "ATK Multiplier";
      str2 = "Multiplies ATK";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.MATKMultiplier:
      str1 = "MATK Multiplier";
      str2 = "Multiplies MATK";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.DEFMultiplier:
      str1 = "DEF Multiplier";
      str2 = "Multiplies DEF";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.MDEFMultiplier:
      str1 = "MDEF Multiplier";
      str2 = "Multiplies MDEF";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.SPDMultiplier:
      str1 = "SPD Multiplier";
      str2 = "Multiplies SPD";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.PhysicalCriticalChanceMul:
      str1 = this.Stat(Stats.PhysCritChance) + " Multiplier";
      str2 = "Multiplies " + this.Stat(Stats.PhysCritChance);
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.MagicalCriticalChanceMul:
      str1 = this.Stat(Stats.MagCritChance) + " Multiplier";
      str2 = "Multiplies " + this.Stat(Stats.MagCritChance);
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.CriticalDamageMul:
      str1 = this.Stat(Stats.CriticalDamage) + " Multiplier";
      str2 = "Multiplies " + this.Stat(Stats.CriticalDamage);
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.DebuffResistanceMul:
      str1 = this.Stat(Stats.DebuffRes) + " Multiplier";
      str2 = "Multiplies " + this.Stat(Stats.DebuffRes);
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.PetPhysicalCriticalChanceMul:
      str1 = this.Stat(Stats.PetPhysCritChance) + " Multiplier";
      str2 = "Multiplies " + this.Stat(Stats.PetPhysCritChance);
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.PetMagicalCriticalChanceMul:
      str1 = this.Stat(Stats.PetMagCritChance) + " Multiplier";
      str2 = "Multiplies " + this.Stat(Stats.PetMagCritChance);
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.PetCriticalDamageMul:
      str1 = this.Stat(Stats.PetCriticalDamage) + " Multiplier";
      str2 = "Multiplies " + this.Stat(Stats.PetCriticalDamage);
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.PetDebuffResistanceMul:
      str1 = this.Stat(Stats.PetDebuffResistance) + " Multiplier";
      str2 = "Multiplies " + this.Stat(Stats.PetDebuffResistance);
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.ElementResistanceMultiplier:
      str1 = "Element Resistance Multiplier";
      str2 = "Multiplies All Resistance";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.PhysicalDamageMultiplier:
      str1 = "Physical Damage Multiplier";
      str2 = "Multiplies Physical Damage";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.MagicalDamageMultiplier:
      str1 = "Magical Damage Multiplier";
      str2 = "Multiplies Magical Damage";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.ArmoredFuryMultiplier:
      str1 = this.Stat(Stats.ArmoredFury) + " Multiplier";
      str2 = "Multiplies " + this.Stat(Stats.ArmoredFury);
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.WardedFuryMultiplier:
      str1 = this.Stat(Stats.WardedFury) + " Multiplier";
      str2 = "Multiplies " + this.Stat(Stats.WardedFury);
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.DamageToRegularMonstersMultiplier:
      str1 = "Damage to Regular Monsters";
      str2 = "Multiplies Damage to Regular Monsters";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.DamageToChallengeBossMultiplier:
      str1 = "Damage to Challenge Boss";
      str2 = "Multiplies Damage to Challenge Boss";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.HeroExpGainMul:
      str1 = "Hero EXP Gain";
      str2 = "Multiplies Hero EXP Gain";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.GoldGainMul:
      str1 = "Gold Gain";
      str2 = "Multiplies Gold Gain";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.StoneGainMul:
      str1 = "Stone Gain";
      str2 = "Multiplies Stone Gain";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.CrystalGainMul:
      str1 = "Crystal Gain";
      str2 = "Multiplies Crystal Gain";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.LeafGainMul:
      str1 = "Leaf Gain";
      str2 = "Multiplies Leaf Gain";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.SkillProficiencyGainMul:
      str1 = this.Stat(Stats.SkillProficiencyGain);
      str2 = "Multiplies " + this.Stat(Stats.SkillProficiencyGain);
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.EquipmentProficiencyGainMul:
      str1 = this.Stat(Stats.EquipmentProficiencyGain);
      str2 = "Multiplies " + this.Stat(Stats.EquipmentProficiencyGain);
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.GuildEXPGainMul:
      str1 = "Guild EXP Gain";
      str2 = "Multiplies Guild EXP Gain";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.TownMatGainMul:
      str1 = "Town Material Gain";
      str2 = "Multiplies Town Material Gain";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.TamingPointGainMul:
      str1 = this.Stat(Stats.TamingPointGain);
      str2 = "Multiplies " + this.Stat(Stats.TamingPointGain);
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.PetEXPGainMul:
      str1 = "Pet EXP Gain";
      str2 = "Multiplies Pet EXP Gain";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.LoyaltyPointGainMul:
      str1 = "Loyalty Point Gain";
      str2 = "Multiplies Loyalty Point Gain";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.AlchemyPointGainMul:
      str1 = "Alchemy Point Gain";
      str2 = "Multiplies Alchemy Point Gain";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.StoneResearchPowerMul:
      str1 = "Stone Research Power";
      str2 = "Multiplies Stone Research Power";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.CrystalResearchPowerMul:
      str1 = "Crystal Research Power";
      str2 = "Multiplies Crystal Research Power";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.LeafResearchPowerMul:
      str1 = "Leaf Research Power";
      str2 = "Multiplies Leaf Research Power";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.SDUpgreadeSuperQueue:
      str1 = "SD Upgrade Super Queue";
      str2 = "SD Upgrade Available Super Queue";
      str3 = "+ " + Util.tDigit(value, 0);
      break;
    case SuperDungeonUpgradeKind.SDArmoredFury:
      str1 = "SD Armored Fury";
      str2 = "Increases SD Armored Fury";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.SDWardedFury:
      str1 = "SD Warded Fury";
      str2 = "Increases SD Warded Fury";
      str3 = "by " + Util.percent(value);
      break;
    case SuperDungeonUpgradeKind.PowerupFilterSlot:
      str1 = "Powerup Filter Slot";
      str2 = "Increase Powerup Filter Slot";
      str3 = "by " + Util.tDigit(value, 0);
      break;
    case SuperDungeonUpgradeKind.SDChallengeBossDamageCutMultiplier:
      str1 = "SD Challenge Boss Damage Cut Multiplier";
      str2 = "Multiplies SD Challenge Boss Damage Cut Multiplier";
      str3 = "by " + Util.percent(value + 1);
      break;
    case SuperDungeonUpgradeKind.BoostStartGoodRNG:
      str1 = "Boost-Start of RNGesus's Favour";
      str2 = "The Powerup [SD Damage Multiplier] will always show up at B1F Safe Zone";
      str3 = "";
      break;
  }
  return { name: str1, description: str2, value: str3 };
}
