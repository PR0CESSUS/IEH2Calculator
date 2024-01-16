import { RebirthUpgradeKind } from "../../type/RebirthUpgradeKind";

export const RebirthParameter = {
  tierHeroLevel: [100, 200, 300, 500, 750, 1000],
  Upgrade: (kind: RebirthUpgradeKind, level) => {
    switch (kind) {
      case RebirthUpgradeKind.ExpGain:
        return [50.0, 50.0, true, 100, 0.25 * level];
      case RebirthUpgradeKind.EQRequirement:
        return [75.0, 75.0, true, 100, 5 * level];
      case RebirthUpgradeKind.QuestAcceptableNum:
        return [250.0, Math.pow(10.0, 0.2), false, 20, level];
      case RebirthUpgradeKind.BasicAtk:
        return [200.0, 200.0, true, 50, 0.05 * level];
      case RebirthUpgradeKind.BasicMAtk:
        return [200.0, 200.0, true, 50, 0.05 * level];
      case RebirthUpgradeKind.BasicHp:
        return [200.0, 200.0, true, 50, 0.25 * level];
      case RebirthUpgradeKind.BasicDef:
        return [200.0, 200.0, true, 50, 0.05 * level];
      case RebirthUpgradeKind.BasicMDef:
        return [200.0, 200.0, true, 50, 0.05 * level];
      case RebirthUpgradeKind.BasicMp:
        return [200.0, 200.0, true, 50, 0.1 * level];
      case RebirthUpgradeKind.StoneGain:
        return [100.0, 100.0, true, 100, level];
      case RebirthUpgradeKind.CrystalGain:
        return [100.0, 100.0, true, 100, level];
      case RebirthUpgradeKind.LeafGain:
        return [100.0, 100.0, true, 100, level];
      case RebirthUpgradeKind.StoneGoldCap:
        return [100.0, 100.0, true, 100, 0.05 * level];
      case RebirthUpgradeKind.CrystalGoldCap:
        return [100.0, 100.0, true, 100, 0.05 * level];
      case RebirthUpgradeKind.LeafGoldCap:
        return [100.0, 100.0, true, 100, 0.05 * level];
      case RebirthUpgradeKind.SkillProfGain:
        return [100.0, 100.0, true, 100, 0.25 * level];
      case RebirthUpgradeKind.SkillRankCostReduction:
        return [100.0, 100.0, true, 100, Math.pow(0.75, level)];
      case RebirthUpgradeKind.ClassSkillSlot:
        return [10000.0, 100.0, false, 1, level];
      case RebirthUpgradeKind.ShareSkillPassive:
        return [2500.0, 2.0, false, 10, level * 0.1];
      case RebirthUpgradeKind.T1ExpGainBoost:
        return [250.0, 250.0, true, 100, 0.1 * level];
      case RebirthUpgradeKind.T1RebirthPointGainBoost:
        return [500.0, 500.0, true, 10, 0.1 * level];
      case RebirthUpgradeKind.T1BasicAtkBoost:
        return [200.0, 200.0, true, 50, 0.1 * level];
      case RebirthUpgradeKind.T1BasicMAtkBoost:
        return [200.0, 200.0, true, 50, 0.1 * level];
      case RebirthUpgradeKind.T1BasicHpBoost:
        return [200.0, 200.0, true, 50, 0.1 * level];
      case RebirthUpgradeKind.T1BasicDefBoost:
        return [200.0, 200.0, true, 50, 0.1 * level];
      case RebirthUpgradeKind.T1BasicMDefBoost:
        return [200.0, 200.0, true, 50, 0.1 * level];
      case RebirthUpgradeKind.T1BasicMpBoost:
        return [200.0, 200.0, true, 50, 0.1 * level];
      case RebirthUpgradeKind.T1StoneGainBoost:
        return [100.0, 100.0, true, 100, 0.2 * level];
      case RebirthUpgradeKind.T1CrystalGainBoost:
        return [100.0, 100.0, true, 100, 0.2 * level];
      case RebirthUpgradeKind.T1LeafGainBoost:
        return [100.0, 100.0, true, 100, 0.2 * level];
      case RebirthUpgradeKind.T1StoneGoldCapBoost:
        return [100.0, 100.0, true, 100, 0.05 * level];
      case RebirthUpgradeKind.T1CrystalGoldCapBoost:
        return [100.0, 100.0, true, 100, 0.05 * level];
      case RebirthUpgradeKind.T1LeafGoldCapBoost:
        return [100.0, 100.0, true, 100, 0.05 * level];
      case RebirthUpgradeKind.EQProfGain:
        return [100.0, 100.0, true, 100, 0.25 * level];
      case RebirthUpgradeKind.EQLevelCap:
        return [5000.0, 10.0, false, 2, 5 * level];
      case RebirthUpgradeKind.EQWeaponSlot:
        return [250.0, 5.0, false, 5, level];
      case RebirthUpgradeKind.EQArmorSlot:
        return [250.0, 5.0, false, 5, level];
      case RebirthUpgradeKind.EQJewelrySlot:
        return [250.0, 5.0, false, 5, level];
      case RebirthUpgradeKind.T2ExpGainBoost:
        return [250.0, 250.0, true, 100, 0.1 * level];
      case RebirthUpgradeKind.T2SkillProfGainBoost:
        return [250.0, 250.0, true, 100, 0.1 * level];
      case RebirthUpgradeKind.T2RebirthPointGainBoost:
        return [500.0, 500.0, true, 10, 0.1 * level];
      case RebirthUpgradeKind.T2BasicAtkBoost:
        return [200.0, 200.0, true, 50, 0.1 * level];
      case RebirthUpgradeKind.T2BasicMAtkBoost:
        return [200.0, 200.0, true, 50, 0.1 * level];
      case RebirthUpgradeKind.T2BasicHpBoost:
        return [200.0, 200.0, true, 50, 0.1 * level];
      case RebirthUpgradeKind.T2BasicDefBoost:
        return [200.0, 200.0, true, 50, 0.1 * level];
      case RebirthUpgradeKind.T2BasicMDefBoost:
        return [200.0, 200.0, true, 50, 0.1 * level];
      case RebirthUpgradeKind.T2BasicMpBoost:
        return [200.0, 200.0, true, 50, 0.1 * level];
      case RebirthUpgradeKind.T2StoneGainBoost:
        return [100.0, 100.0, true, 100, 0.2 * level];
      case RebirthUpgradeKind.T2CrystalGainBoost:
        return [100.0, 100.0, true, 100, 0.2 * level];
      case RebirthUpgradeKind.T2LeafGainBoost:
        return [100.0, 100.0, true, 100, 0.2 * level];
      case RebirthUpgradeKind.T2StoneGoldCapBoost:
        return [100.0, 100.0, true, 100, 0.05 * level];
      case RebirthUpgradeKind.T2CrystalGoldCapBoost:
        return [100.0, 100.0, true, 100, 0.05 * level];
      case RebirthUpgradeKind.T2LeafGoldCapBoost:
        return [100.0, 100.0, true, 100, 0.05 * level];
      default:
        return [10000.0, 100.0, false, 1, 0.0];
    }
  },
};
