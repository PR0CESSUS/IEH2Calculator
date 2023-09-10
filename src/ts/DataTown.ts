import { BuildingKind, buildingKind, Building } from "./type/BuildingKind";
import { DataType } from "./type/DataType";
import { DATA } from "./Data";

export class DataTown implements BuildingKind {
  StatueOfHeroes: Building;
  Cartographer: Building;
  AlchemistsHut: Building;
  Blacksmith: Building;
  Temple: Building;
  Trapper: Building;
  SlimeBank: Building;
  MysticArena: Building;
  ArcaneResearcher: Building;
  Tavern: Building;
  Dojo: Building;
  AdventuringParty: Building;
  #researchCrystal = [0.05, 0.0075, 0.01, 0.05, 5, 1, 1, 0.025, 0.05, 0, 0, 0.05];
  #researchStone = [0.1, 5, 0.01, 2, 0.025, 2, 0.001, 1, 0.05, 0, 0, 0.01];
  #researchLeaf = [0.0075, 1, 5, 0.0075, 1, 0.02, 0.02, 0.025, 0.05, 0, 0, 0.1];
  #effect = [0.05, 0.05, 1, 0.005, 0.01, 1, 0.01, 0.025, 0.05, 0, 0, 0.005];

  constructor(data: DATA) {
    this.initialization(data);
  }
  initialization(data: DataType) {
    // data.pet.isInitialized = false;
    // console.log("data.isInitialized:", data.isInitialized);
    // console.log("data.upgrade.isInitialized:", data?.upgrade?.isInitialized);
    if (data.isInitialized) {
      for (const [key, value] of Object.entries(data.localStorage.town)) {
        this[key] = value;
      }
    } else if (data.source.isInitialized) {
      for (let index = 0; index < buildingKind.length; index++) {
        const name = buildingKind[index];
        let multiplierExpedition = 1;
        if (index == 0 || index == 3 || index == 6) {
          multiplierExpedition = 1 + data.expedition.Brick.effect;
        }
        if (index == 1 || index == 4 || index == 7) {
          multiplierExpedition = 1 + data.expedition.Log.effect;
        }
        if (index == 11 || index == 8 || index == 5 || index == 2) {
          multiplierExpedition = 1 + data.expedition.Shard.effect;
        }
        const multiplierWA =
          1 + 0.1 * data.source.ascensionMilestoneLevelReached[0] * Math.pow(2.0, (data.source.ascensionMilestoneLevelReached[0] - 1.0) / 9.0);
        const multiplierTalisman = 1 + data.talisman.MasonsTrowel.passiveEffectValue;

        const level = data.source.buildingLevels[index] + data.misc.BuildingLevelBonus;

        this[name] = {
          level: level,
          effect: 1 + level * this.#effect[index] * multiplierExpedition * multiplierWA * multiplierTalisman,
          research: {
            stone: {
              effect: data.source.buildingResearchLevelsStone[index] * this.#researchStone[index],
              level: data.source.buildingResearchLevelsStone[index],
            },
            crystal: {
              effect: data.source.buildingResearchLevelsCrystal[index] * this.#researchCrystal[index],
              level: data.source.buildingResearchLevelsCrystal[index],
            },
            leaf: {
              effect: data.source.buildingResearchLevelsLeaf[index] * this.#researchLeaf[index],
              level: data.source.buildingResearchLevelsLeaf[index],
            },
          },
        };
      }
      // cleaning up consumed data
      delete data.source.buildingResearchLevelsLeaf;
      delete data.source.buildingResearchLevelsCrystal;
      delete data.source.buildingResearchLevelsStone;
      delete data.source.buildingLevels;
    }
  }

  update(endpoint) {
    let path = endpoint.split(".").slice(0, -1).slice(1);
    let building = path[0];
    let key = path[1];
    let research = path[2];

    if (path.length == 2) {
      console.log(path, 2);

      // this[building][key]
    } else if (path.length == 3) {
      switch (research) {
        case "stone":
          this[building][key][research].effect = this[building][key][research].level * this.#researchStone[buildingKind.indexOf(building)];
          break;
        case "crystal":
          this[building][key][research].effect = this[building][key][research].level * this.#researchCrystal[buildingKind.indexOf(building)];
          break;
        case "leaf":
          this[building][key][research].effect = this[building][key][research].level * this.#researchLeaf[buildingKind.indexOf(building)];
          break;
        default:
          break;
      }
    }
  }
}
