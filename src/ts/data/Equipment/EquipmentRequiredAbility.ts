import { AbilityKind } from "../../type/AbilityKind";

export class EquipmentRequiredAbility {
  kind: AbilityKind;
  requiredValue;
  isLevel;
  isSuperAbility;

  constructor(kind: AbilityKind | number, requiredValue: number | boolean = false, isSuperAbility = false) {
    if (requiredValue == true || requiredValue == false) this.EquipmentRequiredAbility(requiredValue, isSuperAbility);
    this.kind = kind;
    this.requiredValue = requiredValue;
    this.isSuperAbility = isSuperAbility;
  }

  EquipmentRequiredAbility(requiredLevel, isSuperAbility = false) {
    this.isLevel = true;
    this.requiredValue = requiredLevel;
    this.isSuperAbility = isSuperAbility;
  }
}
