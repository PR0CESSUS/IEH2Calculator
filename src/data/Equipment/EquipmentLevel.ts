import { HeroKind } from "../../type/HeroKind";
import { EquipmentKind } from "../../type/EquipmentKind";
import { DATA } from "..";

export class EquipmentLevel {
  data: DATA;
  kind: EquipmentKind;
  heroKind: HeroKind;
  maxValue: Function;

  constructor(DATA: DATA, kind: EquipmentKind, heroKind: HeroKind) {
    this.data = DATA;
    this.kind = kind;
    this.heroKind = heroKind;
    this.maxValue = () => this.data.equipment.maxLevels[heroKind].Value();
  }

  GetMastery() {
    this.isMaxed = true;
    if (this.value < 10) return;
    // this.data.equipment.GetDictionaryPoint(this.kind);
  }

  get isMaxed() {
    switch (this.heroKind) {
      case HeroKind.Warrior:
        return this.data.source.equipmentIsMaxedWarrior[this.kind];
      case HeroKind.Wizard:
        return this.data.source.equipmentIsMaxedWizard[this.kind];
      case HeroKind.Angel:
        return this.data.source.equipmentIsMaxedAngel[this.kind];
      case HeroKind.Thief:
        return this.data.source.equipmentIsMaxedThief[this.kind];
      case HeroKind.Archer:
        return this.data.source.equipmentIsMaxedArcher[this.kind];
      case HeroKind.Tamer:
        return this.data.source.equipmentIsMaxedTamer[this.kind];
      default:
        return false;
    }
  }

  set isMaxed(value) {
    switch (this.heroKind) {
      case HeroKind.Warrior:
        this.data.source.equipmentIsMaxedWarrior[this.kind] = value;
        break;
      case HeroKind.Wizard:
        this.data.source.equipmentIsMaxedWizard[this.kind] = value;
        break;
      case HeroKind.Angel:
        this.data.source.equipmentIsMaxedAngel[this.kind] = value;
        break;
      case HeroKind.Thief:
        this.data.source.equipmentIsMaxedThief[this.kind] = value;
        break;
      case HeroKind.Archer:
        this.data.source.equipmentIsMaxedArcher[this.kind] = value;
        break;
      case HeroKind.Tamer:
        this.data.source.equipmentIsMaxedTamer[this.kind] = value;
        break;
    }
  }

  get value() {
    switch (this.heroKind) {
      case HeroKind.Warrior:
        return this.data.source.equipmentLevelsWarrior[this.kind];
      case HeroKind.Wizard:
        return this.data.source.equipmentLevelsWizard[this.kind];
      case HeroKind.Angel:
        return this.data.source.equipmentLevelsAngel[this.kind];
      case HeroKind.Thief:
        return this.data.source.equipmentLevelsThief[this.kind];
      case HeroKind.Archer:
        return this.data.source.equipmentLevelsArcher[this.kind];
      case HeroKind.Tamer:
        return this.data.source.equipmentLevelsTamer[this.kind];
      default:
        return 0;
    }
  }
  set value(value) {
    value = Math.min(value, this.maxValue());

    switch (this.heroKind) {
      case HeroKind.Warrior:
        this.data.source.equipmentLevelsWarrior[this.kind] = value;
        break;
      case HeroKind.Wizard:
        this.data.source.equipmentLevelsWizard[this.kind] = value;
        break;
      case HeroKind.Angel:
        this.data.source.equipmentLevelsAngel[this.kind] = value;
        break;
      case HeroKind.Thief:
        this.data.source.equipmentLevelsThief[this.kind] = value;
        break;
      case HeroKind.Archer:
        this.data.source.equipmentLevelsArcher[this.kind] = value;
        break;
      case HeroKind.Tamer:
        this.data.source.equipmentLevelsTamer[this.kind] = value;
        break;
    }
  }
}
