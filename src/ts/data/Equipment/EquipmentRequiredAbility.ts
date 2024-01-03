import { AbilityKind } from "../../type/AbilityKind";

export class EquipmentRequiredAbility {
  kind: AbilityKind;
  requiredValue;
  isLevel;
  isSuperAbility;
  //kind: AbilityKind | number, requiredValue: number = 0, isSuperAbility = false
  constructor(kind: AbilityKind | number, requiredValue: number | boolean = 0, isSuperAbility = false) {
    if (arguments.length == 1) {
      this.EquipmentRequiredAbility(arguments[0], isSuperAbility);
    } else if (arguments.length == 2 && arguments[1] == true) {
      this.EquipmentRequiredAbility(arguments[0], arguments[1]);
    } else {
      this.kind = kind;
      this.requiredValue = requiredValue;
      this.isSuperAbility = isSuperAbility;
    }
    // if (requiredValue == 0) {

    // } else {

    // }
  }

  EquipmentRequiredAbility(requiredLevel, isSuperAbility = false) {
    this.isLevel = true;
    this.requiredValue = requiredLevel;
    this.isSuperAbility = isSuperAbility;
  }
}
