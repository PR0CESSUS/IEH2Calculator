import { MultiplierInfo } from "../../Multiplier";
import { Enums } from "../../Enums";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { EquipmentParameter } from "./EquipmentParameter";
import { Equipment } from "./Equipment";

export class EquipmentOptionEffect {
  equipment: Equipment;
  createId;
  optionKindDictionary = [];
  optionKindAfterDictionary = [];
  optionLotteryDictionary = [];
  optionLotteryAfterDictionary = [];
  optionLottery;
  optionId;

  constructor(equipment, createId, optionId) {
    this.equipment = equipment;
    this.createId = createId;
    this.optionId = optionId;
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
    switch (this.optionId) {
      case 0:
        return globalThis.data.source.equipment1stOptionEffectKinds[this.createId];
      case 1:
        return globalThis.data.source.equipment2ndOptionEffectKinds[this.createId];
      case 2:
        return globalThis.data.source.equipment3rdOptionEffectKinds[this.createId];
      case 3:
        return globalThis.data.source.equipment4thOptionEffectKinds[this.createId];
      case 4:
        return globalThis.data.source.equipment5thOptionEffectKinds[this.createId];
      case 5:
        return globalThis.data.source.equipment6thOptionEffectKinds[this.createId];
      case 6:
        return globalThis.data.source.equipment7thOptionEffectKinds[this.createId];
      default:
        return 0;
    }
  }
  set kind(value) {
    this.equipment.IsEffectRegisteredClear();
    switch (this.optionId) {
      case 0:
        globalThis.data.source.equipment1stOptionEffectKinds[this.createId] = value;
        break;
      case 1:
        globalThis.data.source.equipment2ndOptionEffectKinds[this.createId] = value;
        break;
      case 2:
        globalThis.data.source.equipment3rdOptionEffectKinds[this.createId] = value;
        break;
      case 3:
        globalThis.data.source.equipment4thOptionEffectKinds[this.createId] = value;
        break;
      case 4:
        globalThis.data.source.equipment5thOptionEffectKinds[this.createId] = value;
        break;
      case 5:
        globalThis.data.source.equipment6thOptionEffectKinds[this.createId] = value;
        break;
      case 6:
        globalThis.data.source.equipment7thOptionEffectKinds[this.createId] = value;
        break;
      default:
        break;
    }
    // change level and value
    this.level = this.MaxLevel();

    // this.equipment.Start();
  }
  get effectValue() {
    // if (this.equipment.slotId == 3523) {
    //   console.log(this.optionId >= this.equipment.totalOptionNum.Value(), this.optionId, this.equipment.totalOptionNum.Value());
    // }
    if (this.optionId >= this.equipment.totalOptionNum.Value()) return 0;
    switch (this.optionId) {
      case 0:
        return globalThis.data.source.equipment1stOptionEffectValues[this.createId];
      case 1:
        return globalThis.data.source.equipment2ndOptionEffectValues[this.createId];
      case 2:
        return globalThis.data.source.equipment3rdOptionEffectValues[this.createId];
      case 3:
        return globalThis.data.source.equipment4thOptionEffectValues[this.createId];
      case 4:
        return globalThis.data.source.equipment5thOptionEffectValues[this.createId];
      case 5:
        return globalThis.data.source.equipment6thOptionEffectValues[this.createId];
      case 6:
        return globalThis.data.source.equipment7thOptionEffectValues[this.createId];
      default:
        return 0;
    }
  }
  set effectValue(value) {
    value = Math.min(value, EquipmentParameter.EffectCalculation(this.kind, this.level + 1));
    switch (this.optionId) {
      case 0:
        globalThis.data.source.equipment1stOptionEffectValues[this.createId] = value;
        break;
      case 1:
        globalThis.data.source.equipment2ndOptionEffectValues[this.createId] = value;
        break;
      case 2:
        globalThis.data.source.equipment3rdOptionEffectValues[this.createId] = value;
        break;
      case 3:
        globalThis.data.source.equipment4thOptionEffectValues[this.createId] = value;
        break;
      case 4:
        globalThis.data.source.equipment5thOptionEffectValues[this.createId] = value;
        break;
      case 5:
        globalThis.data.source.equipment6thOptionEffectValues[this.createId] = value;
        break;
      case 6:
        globalThis.data.source.equipment7thOptionEffectValues[this.createId] = value;
        break;
      default:
        break;
    }
  }
  get level() {
    switch (this.optionId) {
      case 0:
        return globalThis.data.source.equipment1stOptionLevels[this.createId];
      case 1:
        return globalThis.data.source.equipment2ndOptionLevels[this.createId];
      case 2:
        return globalThis.data.source.equipment3rdOptionLevels[this.createId];
      case 3:
        return globalThis.data.source.equipment4thOptionLevels[this.createId];
      case 4:
        return globalThis.data.source.equipment5thOptionLevels[this.createId];
      case 5:
        return globalThis.data.source.equipment6thOptionLevels[this.createId];
      case 6:
        return globalThis.data.source.equipment7thOptionLevels[this.createId];
      default:
        return 0;
    }
  }
  set level(value) {
    value = Math.min(value, EquipmentParameter.MaxLevel(this.kind));
    switch (this.optionId) {
      case 0:
        globalThis.data.source.equipment1stOptionLevels[this.createId] = value;
        break;
      case 1:
        globalThis.data.source.equipment2ndOptionLevels[this.createId] = value;
        break;
      case 2:
        globalThis.data.source.equipment3rdOptionLevels[this.createId] = value;
        break;
      case 3:
        globalThis.data.source.equipment4thOptionLevels[this.createId] = value;
        break;
      case 4:
        globalThis.data.source.equipment5thOptionLevels[this.createId] = value;
        break;
      case 5:
        globalThis.data.source.equipment6thOptionLevels[this.createId] = value;
        break;
      case 6:
        globalThis.data.source.equipment7thOptionLevels[this.createId] = value;
        break;
      default:
        break;
    }
    this.effectValue = this.MaxEffectValue();
  }
  get isAfter() {
    return EquipmentParameter.IsAfter(this.kind);
  }

  MaxLevel() {
    return EquipmentParameter.MaxLevel(this.kind);
  }

  MaxEffectValue() {
    return EquipmentParameter.EffectCalculation(this.kind, this.level + 1);
  }
  MinEffectValue() {
    return EquipmentParameter.EffectCalculation(this.kind, this.level);
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

  Copy() {
    return { kind: this.kind, effectValue: this.effectValue, level: this.level };
  }

  Paste(data: { kind: number; effectValue: number; level: number }) {
    // console.log("before", this.kind, this.level, this.effectValue);
    this.kind = data.kind;
    this.level = data.level;
    this.effectValue = data.effectValue;
    this.equipment.Start();
    // console.log("after", this.kind, this.level, this.effectValue);
  }
}
