import { DictionaryUpgradeKind } from "../../type/DictionaryUpgradeKind";

export const DictionaryParameter = {
  UpgradeCost(kind: DictionaryUpgradeKind, level: number) {
    switch (kind) {
      case DictionaryUpgradeKind.EquipmentProficiencyGainWarrior:
        return (2 + 2 * level) * Math.pow(2.0, Math.max(0.0, level - 20.0) / 10.0);
      case DictionaryUpgradeKind.EquipmentProficiencyGainWizard:
        return (2 + 2 * level) * Math.pow(2.0, Math.max(0.0, level - 20.0) / 10.0);
      case DictionaryUpgradeKind.EquipmentProficiencyGainAngel:
        return (2 + 2 * level) * Math.pow(2.0, Math.max(0.0, level - 20.0) / 10.0);
      case DictionaryUpgradeKind.EquipmentProficiencyGainThief:
        return (2 + 2 * level) * Math.pow(2.0, Math.max(0.0, level - 20.0) / 10.0);
      case DictionaryUpgradeKind.EquipmentProficiencyGainArcher:
        return (2 + 2 * level) * Math.pow(2.0, Math.max(0.0, level - 20.0) / 10.0);
      case DictionaryUpgradeKind.EquipmentProficiencyGainTamer:
        return (2 + 2 * level) * Math.pow(2.0, Math.max(0.0, level - 20.0) / 10.0);
      case DictionaryUpgradeKind.EquipmentDropChance:
        return (5 + 5 * level) * Math.pow(2.0, Math.max(0.0, level - 20.0) / 10.0);
      case DictionaryUpgradeKind.EnchantedEffectChance1:
        return (10 + 10 * level) * Math.pow(2.0, Math.max(0.0, level - 20.0) / 10.0);
      case DictionaryUpgradeKind.EnchantedEffectChance2:
        return (20 + 20 * level) * Math.pow(2.0, Math.max(0.0, level - 20.0) / 10.0);
      case DictionaryUpgradeKind.EnchantedEffectChance3:
        return (30 + 30 * level) * Math.pow(2.0, Math.max(0.0, level - 20.0) / 10.0);
      default:
        return 1.0;
    }
  },

  EffectValue(kind: DictionaryUpgradeKind, level: number) {
    switch (kind) {
      case DictionaryUpgradeKind.EquipmentProficiencyGainWarrior:
        return 0.05 * level;
      case DictionaryUpgradeKind.EquipmentProficiencyGainWizard:
        return 0.05 * level;
      case DictionaryUpgradeKind.EquipmentProficiencyGainAngel:
        return 0.05 * level;
      case DictionaryUpgradeKind.EquipmentProficiencyGainThief:
        return 0.05 * level;
      case DictionaryUpgradeKind.EquipmentProficiencyGainArcher:
        return 0.05 * level;
      case DictionaryUpgradeKind.EquipmentProficiencyGainTamer:
        return 0.05 * level;
      case DictionaryUpgradeKind.EquipmentDropChance:
        return (0.025 * level) / 100.0;
      case DictionaryUpgradeKind.EnchantedEffectChance1:
        return (0.25 * level) / 100.0;
      case DictionaryUpgradeKind.EnchantedEffectChance2:
        return (0.05 * level) / 100.0;
      case DictionaryUpgradeKind.EnchantedEffectChance3:
        return (0.005 * level) / 100.0;
      default:
        return 0.0;
    }
  },
};
