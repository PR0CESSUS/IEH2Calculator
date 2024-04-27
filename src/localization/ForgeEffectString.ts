import { EquipmentForgeEffectKind } from "../type/EquipmentForgeEffectKind";
import { Util } from "../Util";

export function ForgeEffectString(kind: EquipmentForgeEffectKind, value: number, maxValue: number, isArtifactAnvil: boolean) {
  switch (kind) {
    case EquipmentForgeEffectKind.ReduceRequiredHeroLevel:
      if (isArtifactAnvil) return "Required Hero Grade of this equipment - " + Util.tDigit(value);
      return "Required Hero Level of this equipment - " + Util.tDigit(value) + " (Max: " + Util.tDigit(maxValue) + ")";
    case EquipmentForgeEffectKind.ReduceRequiredAbility:
      if (isArtifactAnvil) return "Required Super Ability Point of this equipment - " + Util.tDigit(value);
      return "Required Ability Point of this equipment - " + Util.tDigit(value) + " (Max: " + Util.tDigit(maxValue) + ")";
    case EquipmentForgeEffectKind.IncreaseProficiencyGain:
      return "Proficiency Gain of this equipment + " + Util.percent(value) + " (Max: " + Util.percent(maxValue) + ")";
    case EquipmentForgeEffectKind.IncreaseEffect:
      return "This equipment's effect + " + Util.percent(value) + " (Max: " + Util.percent(maxValue) + ")";
    case EquipmentForgeEffectKind.PurifyCurseEffect:
      return "Decrease this equipment's current negative effects by " + Util.percent(value) + " (Max: " + Util.percent(maxValue) + ")";
    case EquipmentForgeEffectKind.IncreaseEffectIncrement:
      return "This equipment's effect increment per level + " + Util.percent(value) + " (Max: " + Util.percent(maxValue) + ")";
    case EquipmentForgeEffectKind.EqLevel:
      return "This equipment's level + " + Util.tDigit(value) + " (Max: " + Util.tDigit(maxValue) + ")";
    default:
      return EquipmentForgeEffectKind[kind];
  }
}
