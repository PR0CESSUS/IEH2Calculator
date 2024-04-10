import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { NumberType } from "../../type/NumberType";

export class EquipmentEffect {
  isMaxEffect;
  kind: EquipmentEffectKind;
  initValue: Function;
  baseValue: Function;

  constructor(kind: EquipmentEffectKind, initValue: Function, baseValue: Function, isMaxEffect = false) {
    this.kind = kind;
    this.initValue = initValue;
    this.baseValue = baseValue;
    this.isMaxEffect = isMaxEffect;
  }

  EffectValue(level, effectIncrementPerLevelModifier = 1.0) {
    if (this.kind == EquipmentEffectKind.Nothing) return Math.floor(this.initValue());
    return this.isMaxEffect ? this.initValue() * Math.max(1.0, level / 10.0) : this.initValue() + effectIncrementPerLevelModifier * this.baseValue() * level;
  }

  get valueKind() {
    switch (this.kind) {
      case EquipmentEffectKind.ATKAdder:
      case EquipmentEffectKind.ATKAfter:
      case EquipmentEffectKind.AllSkillLevel:
      case EquipmentEffectKind.HPAfter:
      case EquipmentEffectKind.HPAdder:
      case EquipmentEffectKind.DEFAdder:
      case EquipmentEffectKind.DEFAfter:
      case EquipmentEffectKind.MATKAdder:
      case EquipmentEffectKind.MATKAfter:
      case EquipmentEffectKind.MDEFAdder:
      case EquipmentEffectKind.MDEFAfter:
      case EquipmentEffectKind.MPAdder:
      case EquipmentEffectKind.MPAfter:
      case EquipmentEffectKind.SPDAdder:
      case EquipmentEffectKind.SPDAfter:
        return NumberType.Normal;
      case EquipmentEffectKind.MoveSpeedAdder:
      case EquipmentEffectKind.MoveSpeedAfter:
        return NumberType.Meter;
      default:
        return NumberType.Percent;
    }
  }
}
