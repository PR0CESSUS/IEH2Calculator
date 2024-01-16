import { HeroKind } from "../../type/HeroKind";
import { EquipmentKind } from "../../type/EquipmentKind";

export class EquipmentLevel {
  kind: EquipmentKind;
  heroKind: HeroKind;
  maxValue: Function;

  constructor(kind: EquipmentKind, heroKind: HeroKind) {
    this.kind = kind;
    this.heroKind = heroKind;
    this.maxValue = () => globalThis.data.equipment.maxLevels[heroKind].Value();
  }

  GetMastery() {
    this.isMaxed = true;
    if (this.value < 10) return;
    // globalThis.data.equipment.GetDictionaryPoint(this.kind);
  }

  get isMaxed() {
    switch (this.heroKind) {
      case HeroKind.Warrior:
        return globalThis.data.source.equipmentIsMaxedWarrior[this.kind];
      case HeroKind.Wizard:
        return globalThis.data.source.equipmentIsMaxedWizard[this.kind];
      case HeroKind.Angel:
        return globalThis.data.source.equipmentIsMaxedAngel[this.kind];
      case HeroKind.Thief:
        return globalThis.data.source.equipmentIsMaxedThief[this.kind];
      case HeroKind.Archer:
        return globalThis.data.source.equipmentIsMaxedArcher[this.kind];
      case HeroKind.Tamer:
        return globalThis.data.source.equipmentIsMaxedTamer[this.kind];
      default:
        return false;
    }
  }

  set isMaxed(value) {
    switch (this.heroKind) {
      case HeroKind.Warrior:
        globalThis.data.source.equipmentIsMaxedWarrior[this.kind] = value;
        break;
      case HeroKind.Wizard:
        globalThis.data.source.equipmentIsMaxedWizard[this.kind] = value;
        break;
      case HeroKind.Angel:
        globalThis.data.source.equipmentIsMaxedAngel[this.kind] = value;
        break;
      case HeroKind.Thief:
        globalThis.data.source.equipmentIsMaxedThief[this.kind] = value;
        break;
      case HeroKind.Archer:
        globalThis.data.source.equipmentIsMaxedArcher[this.kind] = value;
        break;
      case HeroKind.Tamer:
        globalThis.data.source.equipmentIsMaxedTamer[this.kind] = value;
        break;
    }
  }

  get value() {
    switch (this.heroKind) {
      case HeroKind.Warrior:
        return globalThis.data.source.equipmentLevelsWarrior[this.kind];
      case HeroKind.Wizard:
        return globalThis.data.source.equipmentLevelsWizard[this.kind];
      case HeroKind.Angel:
        return globalThis.data.source.equipmentLevelsAngel[this.kind];
      case HeroKind.Thief:
        return globalThis.data.source.equipmentLevelsThief[this.kind];
      case HeroKind.Archer:
        return globalThis.data.source.equipmentLevelsArcher[this.kind];
      case HeroKind.Tamer:
        return globalThis.data.source.equipmentLevelsTamer[this.kind];
      default:
        return 0;
    }
  }
  set value(value) {
    switch (this.heroKind) {
      case HeroKind.Warrior:
        globalThis.data.source.equipmentLevelsWarrior[this.kind] = value;
        break;
      case HeroKind.Wizard:
        globalThis.data.source.equipmentLevelsWizard[this.kind] = value;
        break;
      case HeroKind.Angel:
        globalThis.data.source.equipmentLevelsAngel[this.kind] = value;
        break;
      case HeroKind.Thief:
        globalThis.data.source.equipmentLevelsThief[this.kind] = value;
        break;
      case HeroKind.Archer:
        globalThis.data.source.equipmentLevelsArcher[this.kind] = value;
        break;
      case HeroKind.Tamer:
        globalThis.data.source.equipmentLevelsTamer[this.kind] = value;
        break;
    }
  }
}
