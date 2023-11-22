import { MultiplierInfo } from "../../Multiplier";
import { Enums } from "../../Enums";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { EquipmentParameter } from "./EquipmentParameter";

export type EquipmentOptionEffectData = {
  kind: number;
  value: number;
  level: number;
};

export class EquipmentOptionEffect {
  createId;
  optionKindDictionary = [];
  optionKindAfterDictionary = [];
  optionLotteryDictionary = [];
  optionLotteryAfterDictionary = [];
  optionLottery;
  data: EquipmentOptionEffectData;
  optionId;

  constructor(data: EquipmentOptionEffectData) {
    this.data = data;
    // this.optionId = optionId;

    // this.level = globalThis.data
  }

  CanEnchant() {
    return this.kind == EquipmentEffectKind.Nothing;
  }

  // Delete() {
  //   this.kind = EquipmentEffectKind.Nothing;
  //   this.level.ChangeValue(0);
  //   this.effectValue = 0.0;
  //   this.createId = -1;
  // }

  get kind() {
    return this.data.kind;
  }

  get effectValue() {
    return this.data.value;
  }

  get level() {
    return this.data.level;
  }

  isAfter() {
    return EquipmentParameter.IsAfter(this.kind);
  }

  RequiredLevelIncrement() {
    return EquipmentParameter.RequiredLevelIncrement(this.kind, this.level);
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
        return "normal";

      default:
        return "percent";
    }
  }
}
