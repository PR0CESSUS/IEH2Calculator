import { EquipmentForgeEffectKind } from "../type/EquipmentForgeEffectKind";

export function ForgeNameString(kind: EquipmentForgeEffectKind, isArtifactAnvil: boolean = false) {
  switch (kind) {
    case EquipmentForgeEffectKind.ReduceRequiredHeroLevel:
      return isArtifactAnvil ? "Hero Grade" : "Hero Level";
    case EquipmentForgeEffectKind.ReduceRequiredAbility:
      return isArtifactAnvil ? "Required Super Ability" : "Required Ability";
    case EquipmentForgeEffectKind.IncreaseProficiencyGain:
      return "Proficiency Gain ";
    case EquipmentForgeEffectKind.IncreaseEffect:
      return "Equipment Effect";
    case EquipmentForgeEffectKind.PurifyCurseEffect:
      return "Purify of Cursed Effect";
    case EquipmentForgeEffectKind.IncreaseEffectIncrement:
      return "Effect Increment / Lv";
    case EquipmentForgeEffectKind.EqLevel:
      return "Equipment Level";
    default:
      return kind;
  }
}
