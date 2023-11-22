export class PetRankMilestone {
  number: Function;
  requiredNumber: number;
  registerInfoAction: Function;
  constructor(number, requiredNumber, registerInfoAction) {
    this.number = number;
    this.requiredNumber = requiredNumber;
    registerInfoAction = registerInfoAction;
    console.log(number(), requiredNumber, registerInfoAction);

    this.registerInfoAction(this.IsActive);
  }

  IsActive() {
    return this.number() >= this.requiredNumber;
  }
}
