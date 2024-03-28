import { EquipmentEffectOptimizerKind } from "@/type/EquipmentEffectOptimizerKind";

export function EquipmentEffectOptimizerString(kind: EquipmentEffectOptimizerKind) {
  switch (kind) {
    case EquipmentEffectOptimizerKind.DPS:
      return "DPS";
    case EquipmentEffectOptimizerKind.SkillProficiency:
      return "Skill Proficiency Gain";
    default:
      return "Not Implemented";
  }
}
