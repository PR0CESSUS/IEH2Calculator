import { EquipmentKind } from "./EquipmentKind";
import { EquipmentSetKind } from "./EquipmentSetKind";
import { EnchantKind, enchantKind } from "./EnchantKind";
import { HeroKind } from "./HeroKind";
import { EquipmentRarity } from "./EquipmentRarity";
import { EquipmentForgeEffectKind, equipmentForgeEffectKind } from "./EquipmentForgeEffectKind";

export const equipmentPart = ["Weapon", "Armor", "Jewelry"] as const;
export type EquipmentPart = (typeof equipmentPart)[number];

export type EquipmentForgeEffect = { [keys in EquipmentForgeEffectKind]: number };
export type EquipmentMastery = EquipmentMasteryEffect[];
export type EquipmentEffects = EquipmentEffect[];
// export type EquipmentEnchants = EquipmentEffect[];

export type EquipmentMasteryEffect = {
  baseValue: number;
  initValue: number;
  kind: EnchantKind | string;
};

export type EquipmentEffect = {
  baseValue: number;
  initValue: number;
  kind: EnchantKind | string;
};

export type Equipment = {
  kind: EquipmentKind;
  kindNumeric: number;
  level: number;
  part: EquipmentPart;
  setKind: EquipmentSetKind;
  rarity: EquipmentRarity;
  forgeEffect: EquipmentForgeEffect;
  enchants: number[];
  // mastery: EquipmentMastery;
  // effects: EquipmentEffects;
  //   effects: Effect[];
  //   levelMaxEffects: Effect[];
};
