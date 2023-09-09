// import { Upgrade } from "../data/UpgradeEffect";
import { resourceKind } from "./ResourceKind";

export const slimeBankUpgradeKind = [
  "SlimeCoinCap",
  "SlimeCoinEfficiency",
  "UpgradeCostReduction",
  "ResourceBooster",
  "StatsBooster",
  "GoldCapBooster",
  "MysteriousWaterGain",
  "MaterialFinder",
  "ShopTimer",
  "ResearchPower",
  "SPD",
  "FireRes",
  "IceRes",
  "ThunderRes",
  "LightRes",
  "DarkRes",
  "DebuffRes",
  "SkillProf",
  "EquipmentProf",
  "CritDamage",
  "GoldGain",
  "SlimeCoinCap2",
] as const;
// export type SlimeBankUpgradeKind = { [key in typeof slimeBankUpgradeKind]: UpgradeType | any };
export type SlimeBankUpgradeKind = { [keys in (typeof slimeBankUpgradeKind)[number]]?: UpgradeType };
export type ResourceKind = { [keys in (typeof resourceKind)[number]]?: UpgradeType | any };
export type BasicStatsKind = { [key in (typeof basicStatsKind)[number]]: UpgradeType | any };

export type UpgradeType = {
  cost?: number | any;
  effect?: number | any;
  level?: number;
};

export type UpgradeKind = {
  Resource?: any;
  BasicStats?: BasicStatsKind;
  GoldGain?: any;
  ExpGain?: any;
  GoldCap?: ResourceKind;
  SlimeBank?: SlimeBankUpgradeKind;
  EquipmentInventory?: any;
};

export const basicStatsKind = ["HP", "MP", "ATK", "MATK", "DEF", "MDEF", "SPD"] as const;

// export type UpgradeEffect = {

// }
// export type PotionKind = {
//   [K in (typeof potionKind)[number]]?: Talisman;
// };
