import { MultiplierInfo } from "../../Multiplier";
import { Util } from "../../Util";
import { EquipmentForgeEffectKind } from "../../type/EquipmentForgeEffectKind";
import { HeroKind } from "../../type/HeroKind";
import { Equipment } from "./Equipment";

export class EquipmentForgeEffect {
  equipment: Equipment;
  effectValue;
  kind: EquipmentForgeEffectKind;
  // effectValue;

  constructor(equipment: Equipment, value, kind: EquipmentForgeEffectKind) {
    this.equipment = equipment;
    this.effectValue = value;
    this.kind = kind;
  }

  IsForged() {
    return this.effectValue > 0.0;
  }

  EffectValue() {
    return Math.min(this.effectValue, this.equipment.ForgeEffectMaxValue(this.kind, this.equipment.globalInfo.isArtifact));
  }

  stringKind() {
    switch (this.kind) {
      case EquipmentForgeEffectKind.EqLevel:
      case EquipmentForgeEffectKind.ReduceRequiredHeroLevel:
      case EquipmentForgeEffectKind.ReduceRequiredAbility:
        return "normal";
      case EquipmentForgeEffectKind.IncreaseEffect:
      case EquipmentForgeEffectKind.IncreaseEffectIncrement:
      case EquipmentForgeEffectKind.IncreaseProficiencyGain:
      case EquipmentForgeEffectKind.PurifyCurseEffect:
        return "percent";
      default:
        return "normal";
    }
  }

  get html() {
    return `${EquipmentForgeEffectKind[this.kind]} - ${Util.convertTo(this.effectValue, 2, this.stringKind())}`;
  }
}
