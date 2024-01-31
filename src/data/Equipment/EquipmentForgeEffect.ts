import { MultiplierInfo } from "../../Multiplier";
import { Util } from "../../Util";
import { Localization } from "../../localization";
import { EquipmentForgeEffectKind } from "../../type/EquipmentForgeEffectKind";
import { HeroKind } from "../../type/HeroKind";
import { Equipment } from "./Equipment";

export class EquipmentForgeEffect {
  equipment: Equipment;
  kind: EquipmentForgeEffectKind;
  // effectValue;

  constructor(equipment: Equipment, kind: EquipmentForgeEffectKind) {
    this.equipment = equipment;
    this.kind = kind;
  }

  get effectValue() {
    switch (this.kind) {
      case EquipmentForgeEffectKind.ReduceRequiredHeroLevel:
        return globalThis.data.source.equipment1stForgeValues[this.equipment.id];
      case EquipmentForgeEffectKind.ReduceRequiredAbility:
        return globalThis.data.source.equipment2ndForgeValues[this.equipment.id];
      case EquipmentForgeEffectKind.IncreaseProficiencyGain:
        return globalThis.data.source.equipment3rdForgeValues[this.equipment.id];
      case EquipmentForgeEffectKind.IncreaseEffect:
        return globalThis.data.source.equipment4thForgeValues[this.equipment.id];
      case EquipmentForgeEffectKind.PurifyCurseEffect:
        return globalThis.data.source.equipment5thForgeValues[this.equipment.id];
      case EquipmentForgeEffectKind.IncreaseEffectIncrement:
        return globalThis.data.source.equipment6thForgeValues[this.equipment.id];
      case EquipmentForgeEffectKind.EqLevel:
        return globalThis.data.source.equipment7thForgeValues[this.equipment.id];

      default:
        return 0;
    }
  }

  SetEffectValue(value) {
    switch (this.kind) {
      case EquipmentForgeEffectKind.ReduceRequiredHeroLevel:
        globalThis.data.source.equipment1stForgeValues[this.equipment.id] = value;
        break;
      case EquipmentForgeEffectKind.ReduceRequiredAbility:
        globalThis.data.source.equipment2ndForgeValues[this.equipment.id] = value;
        break;
      case EquipmentForgeEffectKind.IncreaseProficiencyGain:
        globalThis.data.source.equipment3rdForgeValues[this.equipment.id] = value;
        break;
      case EquipmentForgeEffectKind.IncreaseEffect:
        globalThis.data.source.equipment4thForgeValues[this.equipment.id] = value;
        break;
      case EquipmentForgeEffectKind.PurifyCurseEffect:
        globalThis.data.source.equipment5thForgeValues[this.equipment.id] = value;
        break;
      case EquipmentForgeEffectKind.IncreaseEffectIncrement:
        globalThis.data.source.equipment6thForgeValues[this.equipment.id] = value;
        break;
      case EquipmentForgeEffectKind.EqLevel:
        globalThis.data.source.equipment7thForgeValues[this.equipment.id] = value;
        break;

      default:
        break;
    }
  }
  set effectValue(value) {
    if (this.equipment.ForgedSlotNum() >= 4 && value > 0 && this.effectValue == 0) return;
    const newValue = Math.min(value, this.equipment.ForgeEffectMaxValue(this.kind, this.equipment.globalInfo.isArtifact));
    this.SetEffectValue(newValue);

    // console.log(this.kind, "forgeEffects set effectValue", this.effectValue, " > ", newValue);
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
  EffectString() {
    return Localization.ForgeEffectString(
      this.kind,
      this.effectValue,
      this.equipment.ForgeEffectMaxValue(this.kind, this.equipment.globalInfo.isArtifact),
      this.equipment.globalInfo.isArtifact
    );
  }
  Copy() {
    return { kind: this.kind, effectValue: this.effectValue };
  }

  Paste(data: { kind: number; effectValue: number }) {
    // console.log("before", this.kind, this.level, this.effectValue);
    this.kind = data.kind;
    this.effectValue = data.effectValue;
    // console.log("after", this.kind, this.level, this.effectValue);
  }
}
