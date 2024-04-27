export class Unlock {
  conditionList = [];
  conditionStringList = [];
  forceConditionList = [];
  forceUnlockConditionList = [];
  isLockedInDefault;

  constructor(isLockedInDefault = false) {
    this.isLockedInDefault = isLockedInDefault;
  }

  RegisterCondition(condition: Function, conditionString = null) {
    this.conditionList.push(condition);
    if (conditionString == null) return;
    this.conditionStringList.push(conditionString);
  }

  RegisterForceCondition(condition) {
    this.forceConditionList.push(condition);
  }

  RegisterForceUnlockCondition(condition) {
    this.forceUnlockConditionList.push(condition);
  }
  IsUnlocked() {
    if (this.conditionList.length == 0) return !this.isLockedInDefault;
    if (this.forceConditionList.length > 0) {
      for (let index = 0; index < this.forceConditionList.length; ++index) {
        if (!this.forceConditionList[index]()) return false;
      }
    }
    if (this.forceUnlockConditionList.length > 0) {
      for (let index = 0; index < this.forceUnlockConditionList.length; ++index) {
        if (!this.forceUnlockConditionList[index]())
          for (let index = 0; index < this.conditionList.length; ++index) {
            if (!this.conditionList[index]()) return false;
          }
      }
      return true;
    }

    return true;
  }
}
