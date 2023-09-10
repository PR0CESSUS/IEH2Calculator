import { monsterSpecies, monsterColor, MonsterKind, MonsterColor, petPassiveEffect } from "./type/MonsterKind";
import { PetPassiveEffectValue } from "./data/PetPassiveEffectValue";
import { SourceKind } from "./type/SourceKind";
import { DataType } from "./type/DataType";

export class DataPet implements MonsterKind {
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
    this.initialization(data);
  }
  initialization(data) {
    // data.pet.isInitialized = false;
    // console.log("data.pet.isInitialized:", data.pet.isInitialized);
    if (data.isInitialized) {
      for (const [key, value] of Object.entries(data.localStorage.pet)) {
        this[key] = value;
      }
    } else if (data.source.isInitialized) {
      // console.log(data.source);

      for (let index = 0; index < monsterSpecies.length; index++) {
        const species = monsterSpecies[index];
        const multplier = index;
        this[species] = {};
        for (let index2 = 0; index2 < monsterColor.length; index2++) {
          const id = multplier * 10 + index2;
          const color = monsterColor[index2];
          const level = data.source.monsterPetLevels[id];
          const rank = data.source.monsterPetRanks[id];
          const loyalty = data.source.monsterPetLoyalty[id];
          const effect = PetPassiveEffectValue(petPassiveEffect[id], rank) * (1 + loyalty / 100);
          //@ts-ignore
          // console.log(id, species, color, petPassiveEffect[id], rank) * (1 + data.source.monsterPetLoyalty[id] / 100);

          this[species][color] = {
            level: level,
            rank: rank,
            loyalty: loyalty,
            effectKind: petPassiveEffect[id],
            effect: effect,
          };

          // if (species == "MagicSlime" && color == "Normal") {
          //   console.log(this[species][color]);
          // }
        }

        // cleaning up consumed data
      }
      delete data.source.monsterPetRanks;
      delete data.source.monsterPetLoyalty;
      delete data.source.monsterPetLevels;
    }
  }

  update(endpoint) {
    let path = endpoint.split(".").slice(0, -1).slice(1);
    let species = path[0];
    let color = path[1];

    this[species][color].effect =
      PetPassiveEffectValue(this[species][color].effectKind, this[species][color].rank) * (1 + this[species][color].loyalty / 100);
    // aktualizacja wezła

    /// przerobić na update tylko edytowanego peta
    // for (let index = 0; index < monsterSpecies.length; index++) {
    //   const species = monsterSpecies[index];
    //   const multplier = index;
    //   for (let index2 = 0; index2 < monsterColor.length; index2++) {
    //     const id = multplier * 10 + index2;
    //     const color = monsterColor[index2];
    //     const effect = PetPassiveEffectValue(petPassiveEffect[id], this[species][color].rank) * (1 + this[species][color].loyalty / 100);
    //     this[species][color].effect = effect;
    //     //
    //     // if (species == "FlameTiger" && color == "Red") {
    //     //   console.log(this[species][color]);
    //     // }
    //   }
    // }
  }
}
