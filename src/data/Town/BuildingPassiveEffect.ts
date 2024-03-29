export class BuildingPassiveEffect {
  level;
  requiredLevel;
  descriptionString;

  constructor(level, requiredLevel, registerInfoAction, descriptionString) {
    this.level = level;
    this.requiredLevel = requiredLevel;
    if (registerInfoAction != null) registerInfoAction(this.IsActive);
    this.descriptionString = descriptionString;
  }

  IsActive() {
    return this.level.value >= this.requiredLevel;
  }

  DescriptionString() {
    //   let optStr = UsefulMethod.optStr;
    //   return (!this.IsActive() ? optStr + "<color=white>" : optStr + "<color=green>") + UsefulMethod.tDigit( this.requiredLevel) + " : " + this.descriptionString() + "</color>";
    return "";
  }
}
