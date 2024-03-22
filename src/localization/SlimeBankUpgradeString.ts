import { Util } from "@/Util";
import { SLIMEBANK_UPGRADE } from "@/data/Upgrade/SLIMEBANK_UPGRADE";
import { SlimeBankUpgradeKind } from "@/type/SlimeBankUpgradeKind";

export function SlimeBankUpgradeString(upgrade: SLIMEBANK_UPGRADE) {
  let str1 = "";
  let str2 = "";
  let str3 = "";
  switch (upgrade.slimebankKind) {
    case SlimeBankUpgradeKind.SlimeCoinCap:
      str1 = "Slime Coin Cap 1";
      str2 = "Increases Slime Coin Cap";
      str3 = `+ ${Util.tDigit(upgrade.EffectValue())}`;
      break;
    case SlimeBankUpgradeKind.SlimeCoinEfficiency:
      str1 = "Slime Coin Efficiency";
      str2 = "Increases Slime Coin Gain per overflowed Gold ";
      str3 = `+ ${Util.percent(upgrade.EffectValue())}`;
      break;
    case SlimeBankUpgradeKind.UpgradeCostReduction:
      str1 = "Upgrade Tab Cost Reduction";
      str2 = "Reduces General Upgrade's cost";
      str3 = "by " + Util.percent(upgrade.EffectValue());
      break;
    case SlimeBankUpgradeKind.ResourceBooster:
      str1 = "Resource Booster";
      str2 = "Increases Resource Upgrade's effect";
      str3 = `+ ${Util.percent(upgrade.EffectValue())}`;
      break;
    case SlimeBankUpgradeKind.StatsBooster:
      str1 = "Stats Booster";
      str2 = "Increases Stats Upgrade's effect";
      str3 = `+ ${Util.percent(upgrade.EffectValue())}`;
      break;
    case SlimeBankUpgradeKind.GoldCapBooster:
      str1 = "Gold Cap Booster";
      str2 = "Multiply Gold Cap Upgrade's effect";
      str3 = "by " + Util.percent(1.0 + upgrade.EffectValue());
      break;
    case SlimeBankUpgradeKind.MysteriousWaterGain:
      str1 = "Mysterious Water Gain";
      str2 = "Increases Mysterious Water Gain";
      str3 = `+ ${Util.tDigit(upgrade.EffectValue(), 3)}`;
      break;
    case SlimeBankUpgradeKind.MaterialFinder:
      str1 = "Material Finder";
      str2 = "Multiplies Common Material Drop Chance";
      str3 = "by " + Util.percent(1.0 + upgrade.EffectValue());
      break;
    case SlimeBankUpgradeKind.ShopTimer:
      str1 = "Shop Timer Reduction";
      str2 = "Decreases Shop's restock timer";
      str3 = "by " + Util.tDigit(upgrade.EffectValue()) + " sec";
      break;
    case SlimeBankUpgradeKind.ResearchPower:
      str1 = "Town Research Booster";
      str2 = "Multiplies Town Research Power ";
      str3 = "by " + Util.percent(1.0 + upgrade.EffectValue());
      break;
    case SlimeBankUpgradeKind.SPD:
      str2 = "Increases SPD ";
      str3 = `+ ${Util.tDigit(upgrade.EffectValue())}`;
      break;
    case SlimeBankUpgradeKind.FireRes:
      str2 = "Increases Fire Resistance ";
      str3 = `+ ${Util.percent(upgrade.EffectValue())}`;
      break;
    case SlimeBankUpgradeKind.IceRes:
      str2 = "Increases Ice Resistance ";
      str3 = `+ ${Util.percent(upgrade.EffectValue())}`;
      break;
    case SlimeBankUpgradeKind.ThunderRes:
      str2 = "Increases Thunder Resistance ";
      str3 = `+ ${Util.percent(upgrade.EffectValue())}`;
      break;
    case SlimeBankUpgradeKind.LightRes:
      str2 = "Increases Light Resistance ";
      str3 = `+ ${Util.percent(upgrade.EffectValue())}`;
      break;
    case SlimeBankUpgradeKind.DarkRes:
      str2 = "Increases Dark Resistance ";
      str3 = `+ ${Util.percent(upgrade.EffectValue())}`;
      break;
    case SlimeBankUpgradeKind.DebuffRes:
      str2 = "Increases Debuff Resistance ";
      str3 = `+ ${Util.percent(upgrade.EffectValue())}`;
      break;
    case SlimeBankUpgradeKind.SkillProf:
      str2 = "Increases Skill Proficiency Gain ";
      str3 = `+ ${Util.percent(upgrade.EffectValue())}`;
      break;
    case SlimeBankUpgradeKind.EquipmentProf:
      str2 = "Increases Equipment Proficiency Gain ";
      str3 = `+ ${Util.percent(upgrade.EffectValue())}`;
      break;
    case SlimeBankUpgradeKind.CritDamage:
      str1 = "Critical Damage";
      str2 = "Increases Critical Damage ";
      str3 = Util.percent(upgrade.EffectValue()) + " of normal damage";
      break;
    case SlimeBankUpgradeKind.GoldGain:
      str1 = "Gold Gain";
      str2 = "Multiplies Gold Gain";
      str3 = "by " + Util.percent(1.0 + upgrade.EffectValue());
      break;
    case SlimeBankUpgradeKind.SlimeCoinCap2:
      str1 = "Slime Coin Cap 2";
      str2 = "Multiplies Slime Coin Cap";
      str3 = "by " + Util.percent(1.0 + upgrade.EffectValue());
      break;
  }
  return { name: str1, description: str2, effect: str3 };
}
