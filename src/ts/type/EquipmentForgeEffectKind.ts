export const equipmentForgeEffectKind = [
  "ReduceRequiredHeroLevel",
  "ReduceRequiredAbility",
  "IncreaseProficiencyGain",
  "IncreaseEffect",
  "PurifyCurseEffect",
  "IncreaseEffectIncrement",
] as const;

export type EquipmentForgeEffectKind = (typeof equipmentForgeEffectKind)[number];
