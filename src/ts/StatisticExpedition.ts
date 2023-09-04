import { expeditionKind, ExpeditionKind } from "./type/ExpeditionKind";

export class StatisticExpedition {
  passiveEffectValueIncrementPerLevel = [0.01, 0.01, 0.01, 0.05, 0.02, 0.2, 0.05];
  passiveEffectMultiplier = 1;
  data: ExpeditionKind = {};
  totalLevel = 0;

  constructor(data) {
    this.totalLevel = data.reduce((a, b) => a + b, 0);
    // console.log(data);

    // console.log(this.totalLevel);
    this.totalLevel >= 200 ? (this.passiveEffectMultiplier += 0.25) : null;
    this.totalLevel >= 250 ? (this.passiveEffectMultiplier += 0.25) : null;

    for (let index = 0; index < expeditionKind.length; index++) {
      const name = expeditionKind[index];
      this.data[name] = data[index] * this.passiveEffectValueIncrementPerLevel[index] * this.passiveEffectMultiplier;
    }
  }
}
