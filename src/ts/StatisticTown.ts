import { BuildingKind, buildingKind } from "./type/BuildingKind";

export class StatisticTown {
  researchCrystal = [0.05, 0.0075, 0.01, 0.05, 5, 1, 1, 0.025, 0.05, null, null, 0.05];
  researchStone = [0.1, 5, 0.01, 2, 0.025, 2, 0.001, 1, 0.05, null, null, 0.01];
  researchLeaf = [0.0075, 1, 5, 0.0075, 1, 0.02, 0.02, 0.025, 0.05, null, null, 0.1];
  effect = [0.05, 0.05, 1, 0.005, 0.01, 1, 0.01, 0.025, 0.05, null, null, 0.005];
  data: BuildingKind = {};
  multiplierTalisman = 1;
  multiplierExpedition = {
    brick: 1,
    log: 1,
    shard: 1,
  };
  multiplierWA = 1; // ADD

  constructor(data, expedition, talisman, WA) {
    this.multiplierExpedition = expedition;
    this.multiplierTalisman = 1 + talisman;
    this.multiplierWA = 1 + 0.1 * WA * Math.pow(2.0, (WA - 1.0) / 9.0);
    // console.log(this.multiplierWA);
    // console.log(this.multiplierExpedition, this.multiplierTalisman, this.multiplierWA);

    this.getEffect(data);
  }

  getEffect(data) {
    for (let index = 0; index < buildingKind.length; index++) {
      const name = buildingKind[index];
      let multiplierExpedition = 1;
      if (index == 0 || index == 3 || index == 6) {
        multiplierExpedition = 1 + this.multiplierExpedition.brick;
      }
      if (index == 1 || index == 4 || index == 7) {
        multiplierExpedition = 1 + this.multiplierExpedition.log;
      }
      if (index == 11 || index == 8 || index == 5 || index == 2) {
        multiplierExpedition = 1 + this.multiplierExpedition.shard;
      }

      //   console.log(name);

      const level = data.levels[index];
      this.data[name] = {
        effect: 1 + level * this.effect[index] * multiplierExpedition * this.multiplierWA * this.multiplierTalisman,
        research: {
          stone: data.stone[index] * this.researchStone[index],
          crystal: data.crystal[index] * this.researchCrystal[index],
          leaf: data.leaf[index] * this.researchLeaf[index],
        },
      };
    }
  }
}
