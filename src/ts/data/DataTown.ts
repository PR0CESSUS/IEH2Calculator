import { BuildingKind, buildingKind, Building } from "../type/BuildingKind";
import { DataType } from "../type/DataType";

export class DataTown implements BuildingKind {
  data: DataType;
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

  constructor(data: DataType) {
    this.data = data;
    const effect = [0.05, 0.05, 1, 0.005, 0.01, 1, 0.01, 0.025, 0.05, 0, 0, 0.005];
    const researchStone = [0.1, 5, 0.01, 2, 0.025, 2, 0.001, 1, 0.05, 0, 0, 0.01];
    const researchCrystal = [0.05, 0.0075, 0.01, 0.05, 5, 1, 1, 0.025, 0.05, 0, 0, 0.05];
    const researchLeaf = [0.0075, 1, 5, 0.0075, 1, 0.02, 0.02, 0.025, 0.05, 0, 0, 0.1];

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

      // DATA ascension zrobić
      const multiplierWA =
        1 + 0.1 * data.source.ascensionMilestoneLevelReached[0] * Math.pow(2.0, (data.source.ascensionMilestoneLevelReached[0] - 1.0) / 9.0);

      // console.log(1, level, this.#effect[index], multiplierExpedition, multiplierWA, multiplierTalisman);

      this[name] = {
        get level() {
          return data.source.buildingLevels[index];
        },
        set level(value) {
          data.source.buildingLevels[index] = value;
        },
        get levelTotal() {
          return this.level + data.misc.BuildingLevelBonus;
        },
        get effect() {
          return 1 + this.levelTotal * effect[index] * multiplierExpedition * multiplierWA * (1 + data.talisman.MasonsTrowel.effect);
        },

        research: {
          stone: {
            get effect() {
              return data.source.buildingResearchLevelsStone[index] * researchStone[index];
            },

            get level() {
              return data.source.buildingResearchLevelsStone[index];
            },
            set level(value) {
              data.source.buildingResearchLevelsStone[index] = value;
            },
          },
          crystal: {
            get effect() {
              return data.source.buildingResearchLevelsCrystal[index] * researchCrystal[index];
            },
            get level() {
              return data.source.buildingResearchLevelsCrystal[index];
            },
            set level(value) {
              data.source.buildingResearchLevelsCrystal[index] = value;
            },
          },
          leaf: {
            get effect() {
              return data.source.buildingResearchLevelsLeaf[index] * researchLeaf[index];
            },
            get level() {
              return data.source.buildingResearchLevelsLeaf[index];
            },
            set level(value) {
              data.source.buildingResearchLevelsLeaf[index] = value;
            },
          },
        },
      } as Building;
    }
  }

  // update(endpoint) {
  //   let path = endpoint.split(".").slice(0, -1).slice(1);
  //   let building = path[0];
  //   let key = path[1];
  //   let research = path[2];

  //   if (path.length == 2) {
  //     console.log(path, 2);

  //     // this[building][key]
  //   } else if (path.length == 3) {
  //     switch (research) {
  //       case "stone":
  //         this[building][key][research].effect = this[building][key][research].level * this.#researchStone[buildingKind.indexOf(building)];
  //         break;
  //       case "crystal":
  //         this[building][key][research].effect = this[building][key][research].level * this.#researchCrystal[buildingKind.indexOf(building)];
  //         break;
  //       case "leaf":
  //         this[building][key][research].effect = this[building][key][research].level * this.#researchLeaf[buildingKind.indexOf(building)];
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // }

  html() {
    let html = "";
    html += `
    <h2>Town Data</h2>
    <table>  
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Level</th>
        <th scope="col">Effect</th>
      </tr>
    </thead>`;
    for (let index = 0; index < buildingKind.length; index++) {
      const building = buildingKind[index];
      html += `<tr>`;
      html += `<td>${building}</td>`;
      html += `<td><input type='text' data-endpoint='town.${building}.level' size="6"> +${this.data.misc.BuildingLevelBonus}</td>`;
      html += `<td data-endpoint='town.${building}.effect' data-precision='3'></td>`;
      html += `</tr>`;
      html += `<tr>`;
      html += /*html*/ `<td><img src="img/stone.png" class="icon"> Stone Research</td>`;
      html += `<td><input type='text' data-endpoint='town.${building}.research.stone.level' size="6"></td>`;
      html += `<td data-endpoint='town.${building}.research.stone.effect' data-precision='3'></td>`;
      html += `</tr>`;
      html += `<tr>`;
      html += `<td><img src="img/crystal.png" class="icon"> Crystal Research</td>`;
      html += `<td><input type='text' data-endpoint='town.${building}.research.crystal.level' size="6"></td>`;
      html += `<td data-endpoint='town.${building}.research.crystal.effect' data-precision='3'></td>`;
      html += `</tr>`;
      html += `<tr>`;
      html += `<td><img src="img/leaf.png" class="icon"> Leaf Research</td>`;
      html += `<td><input type='text' data-endpoint='town.${building}.research.leaf.level' size="6"></td>`;
      html += `<td data-endpoint='town.${building}.research.leaf.effect' data-precision='3'></td>`;
      html += `</tr>`;
    }

    html += "</table>";

    return html;
  }
}
