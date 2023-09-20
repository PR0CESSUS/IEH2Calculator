import { monsterSpecies, monsterColor, MonsterKind, MonsterColor, petPassiveEffect } from "../type/MonsterKind";
import { SourceKind } from "../type/SourceKind";
import { DataType } from "../type/DataType";

export class DataPet implements MonsterKind {
  data: DataType;
  Slime: MonsterColor;
  MagicSlime: MonsterColor;
  Spider: MonsterColor;
  Bat: MonsterColor;
  Fairy: MonsterColor;
  Fox: MonsterColor;
  DevilFish: MonsterColor;
  Treant: MonsterColor;
  FlameTiger: MonsterColor;
  Unicorn: MonsterColor;
  Mimic: MonsterColor;
  ChallengeBoss: MonsterColor;
  constructor(data: DataType) {
    this.data = data;
    let isMimic = false;
    let isBoss = false;

    for (let index = 0; index < monsterSpecies.length; index++) {
      const species = monsterSpecies[index];
      this[species] = {} as MonsterColor;
      for (let index2 = 0; index2 < monsterColor.length; index2++) {
        const id = index * 10 + index2;
        const color = monsterColor[index2];
        // if (species == 'Mimic' && !isMimic) {
        //   color = "Normal"
        // }

        this[species][color] = {
          get expeditionList() {
            const expeditionList = [];
            for (let index = 0; index < data.source.expeditionPetIsSet.length; index++) {
              expeditionList.push(
                data.source.expeditionPetIsSet[index] ? data.source.expeditionPetSpecies[index] * 10 + data.source.expeditionPetColors[index] : null
              );
              // console.log(monsterSpecies[data.source.expeditionPetSpecies[index]]);
            }
            return expeditionList;
          },
          id: id,
          get level() {
            return data.source.monsterPetLevels[id];
          },
          set level(value) {
            data.source.monsterPetLevels[id] = value;
          },
          get rank() {
            return data.source.monsterPetRanks[id];
          },
          set rank(value) {
            data.source.monsterPetRanks[id] = value;
          },
          get loyalty() {
            return data.source.monsterPetLoyalty[id];
          },
          set loyalty(value) {
            data.source.monsterPetLoyalty[id] = value;
          },
          effectKind: petPassiveEffect[id],
          get effect() {
            const rank = data.source.monsterPetRanks[id];
            const loyalty = 1 + data.source.monsterPetLoyalty[id] / 100;
            switch (petPassiveEffect[id]) {
              case "ResourceGain":
                return loyalty * 0.1 * rank;
              case "PotionEffect":
                return loyalty * 0.005 * rank;
              case "TamingPointGain":
                return loyalty * 0.05 * rank;
              case "GoldCap":
                return loyalty * 0.025 * rank;
              case "GoldGain":
                return loyalty * 0.025 * rank;
              case "ExpGain":
                return loyalty * 0.1 * rank;
              case "DoubleMaterialChance":
                return loyalty * Math.min(0.0005 * rank, 0.1);
              case "GoldGainOnDisassemblePotion":
                return loyalty * 0.05 * rank;
              case "DisassembleTownMatGain":
                return loyalty * 0.01 * rank;
              case "TownMatGainFromDungeonReward":
                return loyalty * 0.01 * rank;
              case "OilOfSlimeDropChance":
                return loyalty * 0.001 * rank;
              case "EnchantedClothDropChance":
                return loyalty * 0.001 * rank;
              case "SpiderSilkDropChance":
                return loyalty * 0.001 * rank;
              case "BatWingDropChance":
                return loyalty * 0.001 * rank;
              case "FairyDustDropChance":
                return loyalty * 0.001 * rank;
              case "FoxTailDropChance":
                return loyalty * 0.001 * rank;
              case "FishScalesDropChance":
                return loyalty * 0.001 * rank;
              case "CarvedBranchDropChance":
                return loyalty * 0.001 * rank;
              case "ThickFurDropChance":
                return loyalty * 0.001 * rank;
              case "UnicornHornDropChance":
                return loyalty * 0.001 * rank;
              case "EquipProfGain":
                return loyalty * 0.01 * rank;
              case "MysteriousWaterGain":
                return loyalty * 0.01 * rank;
              case "ChestPortalOrbChance":
                return loyalty * Math.min(5e-6 * rank, 0.001);
              case "SkillProfGain":
                return loyalty * 0.01 * rank;
              case "TownMatGain":
                return loyalty * 0.01 * rank;
              case "ResearchPowerStone":
                return loyalty * 0.025 * rank;
              case "ResearchPowerCrystal":
                return loyalty * 0.025 * rank;
              case "ResearchPowerLeaf":
                return loyalty * 0.025 * rank;
              case "CatalystCriticalChance":
                return loyalty * 0.01 * rank;
              case "MysteriousWaterCap":
                return loyalty * 2 * rank;
              case "BlessingEffect":
                return loyalty * 0.02 * rank;
              case "LoyaltyPointGain":
                return loyalty * 0.025 * rank;
              case "PetExpGain":
                return loyalty * 0.05 * rank;
              case "ExpeditionExpGain":
                return loyalty * 0.005 * rank;
              case "EssenceConversionRate":
                return loyalty * 0.005 * rank;
              case "SlimeCoinEfficiency":
                return loyalty * 0.005 * rank;
              case "SlimeCoinCap":
                return loyalty * 0.025 * rank;
              case "EquipmentEffect":
                return loyalty * 0.001 * rank;
              case "AlchemyPointGain":
                return loyalty * 0.01 * rank;
              default:
                return 0.0;
            }
          },
          get team() {
            if (this.expeditionList.indexOf(id, 0) != -1) {
              // console.log("indexOf", expeditionList.indexOf(id, 0), Math.ceil(expeditionList.indexOf(id, 0) / 5) + 1, color, species, id);
              // console.log("team", Math.floor(expeditionList.indexOf(id, 0) / 5) + 1, "indexOf", expeditionList.indexOf(id, 0), species, color, id);
              // console.log(species + "." + color + "." + Math.floor(expeditionList.indexOf(id, 0) / 5) + 1);

              return Math.floor(this.expeditionList.indexOf(id, 0) / 5) + 1;
            } else {
              return 0;
            }
          },

          set team(value) {
            if (value == 0) {
              const startIndex = (this.team - 1) * 5;
              data.source.expeditionPetSpecies[startIndex] = 0;
              data.source.expeditionPetColors[startIndex] = 0;
              data.source.expeditionPetIsSet[startIndex] = false;
              data.source.expeditionPetSpecies[startIndex + 1] = 0;
              data.source.expeditionPetColors[startIndex + 1] = 0;
              data.source.expeditionPetIsSet[startIndex + 1] = false;
              data.source.expeditionPetSpecies[startIndex + 2] = 0;
              data.source.expeditionPetColors[startIndex + 2] = 0;
              data.source.expeditionPetIsSet[startIndex + 2] = false;
              // console.log("value = 0 team = ", this.team);
              return;
            }
            const startIndex = (value - 1) * 5;
            let oldIndex = this.expeditionList.indexOf(this.id);
            // if (oldIndex == -1) oldIndex = 0;
            // console.log();
            // console.log(this.expeditionList);
            function update(offset = 0, oldIndex = 0) {
              // console.log("oldIndex", oldIndex);
              data.source.expeditionPetSpecies[oldIndex] = 0;
              data.source.expeditionPetColors[oldIndex] = 0;
              data.source.expeditionPetIsSet[oldIndex] = false;
              // delate old
              data.source.expeditionPetSpecies[startIndex + offset] = monsterSpecies.indexOf(species);
              data.source.expeditionPetColors[startIndex + offset] = monsterColor.indexOf(color);
              data.source.expeditionPetIsSet[startIndex + offset] = true;
            }

            if (!data.source.expeditionPetIsSet[startIndex]) {
              // console.log("index+0 pusty");
              update(0, oldIndex);
              return;
            }
            if (!data.source.expeditionPetIsSet[startIndex + 1]) {
              // console.log("index+1 pusty");
              update(1, oldIndex);
              return;
            } else {
              // console.log("zapisuję do index+2");
              update(2, oldIndex);
              return;
            }
            console.log(species, color, "setting team to value:", value, "index start at", (value - 1) * 5, "-", value * 5 - 1);
          },
        };
      }
    }
    let counter = 0;
    let nameIndex = 1;
    let totalLevel = 0;

    // console.log(expeditionList);

    // console.log(this.html());
  }
  get totalLevel() {
    return this.data.source.monsterPetLevels.reduce((a, b) => a + b, 0);
  }
  get totalRank() {
    return this.data.source.monsterPetRanks.reduce((a, b) => a + b, 0);
  }
  get totalLoyalty() {
    return this.data.source.monsterPetLoyalty.reduce((a, b) => a + b, 0);
  }

  html() {
    let html = "";
    html += `
    <h2>Bestiary Data</h2>
    <table>  
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Level</th>
      <th scope="col">Rank</th>
      <th scope="col">Loyalty</th>
      <th scope="col">Effect</th>
      <th scope="col">Team</th>
    </tr>
  </thead>`;
    html += `Total Pet Levels: <span data-endpoint="pet.totalLevel"></span><br>`;
    html += `Total Pet Ranks: <span data-endpoint="pet.totalRank"></span><br>`;
    html += `Total Pet Loyalty: <span data-endpoint="pet.totalLoyalty"></span>`;
    html += "<hr>";
    for (let index = 0; index < monsterSpecies.length; index++) {
      const species = monsterSpecies[index];

      for (let index2 = 0; index2 < monsterColor.length; index2++) {
        const color = monsterColor[index2];
        const id = index * 10 + index2;

        const expeditionPetColors = this.data.source.expeditionPetColors[index];

        html += `<tr>`;
        html += `<td>${species}.${color}</td>`;
        html += `<td><input type='text' data-endpoint='pet.${species}.${color}.level' size="6"></td>`;
        html += `<td><input type='text' data-endpoint='pet.${species}.${color}.rank' size="6"></td>`;
        html += `<td><input type='text' data-endpoint='pet.${species}.${color}.loyalty' size="6"></td>`;
        html += `<td><span data-endpoint='pet.${species}.${color}.effect' data-precision='2'></span></td>`;
        html += `<td><select data-endpoint='pet.${species}.${color}.team' id='${species}.${color}.team'>`;
        html += `<option value=''></option>`;
        for (let index = 0; index < this.data.source.expeditionPetIsSet.length / 5; index++) {
          html += `<option value='${index + 1}'>team${index + 1}</option>`;
        }
        html += "</select></td>";
        html += `</tr>`;
      }
    }

    html += "</table>";

    return html;
  }
}
