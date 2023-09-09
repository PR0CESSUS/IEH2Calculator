import { SaveFileDencrypt } from "./SaveFileDencrypt";

export class SaveFileReader {
  source: any;

  constructor(data: any) {
    // this.source = data;
    this.source = new SaveFileDencrypt(data).data;

    // this.getClearedMission();
    // this.getBestiary();

    // this.talisman = new StatisticTalisman(this.source.potionDisassembledNums).data;
    // this.expedition = new StatisticExpedition(this.source.expeditionLevels).data;
    // this.town = new StatisticTown(
    //   this,
    //   {
    //     brick: this.expedition.Brick,
    //     log: this.expedition.Log,
    //     shard: this.expedition.Shard,
    //   },
    //   //@ts-ignore
    //   this.talisman.MasonsTrowel.passiveEffectValue,
    //   this.source.ascensionMilestoneLevelReached[0]
    // ).data;

    // ascensionMilestoneLevelReached
    // PassiveEffectValue(long level) => 0.1 * (double) level * Math.Pow(2.0, ((double) level - 1.0) / 9.0)
    // this.expeditionLevelTotal = this.getExpeditionLevel();
    // this.testmilestone1599 = this.getClearedMission(1599);
    // this.greenSpiderRank = this.getPetRank(KIND.pet.spider.green);
    // this.greenSpiderLoyalty = this.getPetLoyalty(KIND.pet.spider.green);
    // this.greenSpiderLevel = this.getPetLevel(KIND.pet.spider.green);
    // this.talismanBerserkersStone = this.getTalismanDisassembledNums(KIND.talisman.berserkersStone);
    // this.guildLevel = this.source.guildLevel;
    // expedition
    // this.expedition.team = this.getExpeditionLevelTeams();
    // this.expedition.townBonus = this.getAdventuringPartyPassive();

    // this.researchstatueOfHeroesStoneLevel = this.getResearchLevel("stone", KIND.town.blacksmith);
    // this.researchstatueOfHeroesCrystalLevel = this.getResearchLevel("crystal", KIND.town.blacksmith);
    // this.researchstatueOfHeroesLeafLevel = this.getResearchLevel("leaf", KIND.town.blacksmith);
    // this.townBlacksmithLevel = this.getTownBuildingLevel(KIND.town.blacksmith, true);
    // console.log(this.getHeroActiveSet("archer"));

    // this.archerActiveSet = new ItemSet(this.getHeroActiveSet("archer"));
    // this.warriorActiveSet = new ItemSet(this.getHeroActiveSet("warrior"));
    // this.tamerActiveSet = new ItemSet(this.getHeroActiveSet("tamer"));
    // this.wizardActiveSet = new ItemSet(this.getHeroActiveSet("wizard"));
    // this.angelActiveSet = new ItemSet(this.getHeroActiveSet("angel"));
    // this.thiefActiveSet = new ItemSet(this.getHeroActiveSet("thief"));

    // this.resources = this.source.resources;
    //

    // this.slimeBank.slimeCoinCap1Level = this.source.upgradeLevelsSlimebank[0];
    // this.slimeBank.slimeCoinCap2Level = this.source.upgradeLevelsSlimebank[21];
    // writeFileSync("D:/test/loader/test.json", JSON.stringify(this.source));
  }

  // private getClearedMission() {
  //   let counter = 0;

  //   for (let index = 0; index < this.source.isClearedMission.length; index++) {
  //     if (this.source.isClearedMission[index]) {
  //       counter++;
  //     }
  //   }
  //   this.clearedMission = counter;
  // }

  // private getBestiary() {
  //   const kind = ["slime", "magicslime", "spider", "bat", "fairy", "fox", "devilfish", "treant", "flametiger"];
  //   const color = ["normal", "blue", "yellow", "red", "green", "purple"];
  //   let data = this.pet;
  //   for (let index = 0; index < kind.length; index++) {
  //     const multplier = index;

  //     for (let index2 = 0; index2 < color.length; index2++) {
  //       const id = multplier * 10 + index2;
  //       this.pet[kind[index]][color[index2]] = {
  //         level: this.source.monsterPetLevels[id],
  //         rank: this.source.monsterPetRanks[id],
  //         loyalty: this.source.monsterPetLoyalty[id],
  //       };
  //     }
  //   }
  // }

  // private getTalisman() {
  //   // for (const [key, value] of Object.entries(this.talisman)) {
  //   //   for (let index = 0; index < potionKind.length; index++) {
  //   //     const element = potionKind[index];
  //   //     if (key == element) {
  //   //       this.talisman[key].disassembled = this.source.potionDisassembledNums[index];
  //   //     }
  //   //   }
  //   // }
  //   let data = <any>[];
  //   for (let index = 0; index < this.source.potionDisassembledNums.length; index++) {
  //     const element = this.source.potionDisassembledNums[index];
  //     data.push(element);
  //   }
  //   return data;
  // }

  // getAreaMilestone(number: number) {
  //   return number <= this.clearedMission;
  // }

  // getExpeditionLevel() {
  //   return this.source.expeditionLevels.reduce((a, b) => a + b, 0);
  // }

  // getTalismanDisassembledNums(id: number) {
  //   return this.source.potionDisassembledNums[id];
  // }

  // getBuildingLevelBonus() {
  //   let bonus = 0;
  //   if (this.clearedMission >= 550) {
  //     bonus += 10;
  //   }
  //   if (this.clearedMission >= 1350) {
  //     bonus += 10;
  //   }
  //   if (this.clearedMission >= 2300) {
  //     bonus += 10;
  //   }
  //   return bonus;
  // }

  // getHeroActiveSet(hero = "warrior") {
  //   let offset = this.getOffset(hero);
  //   let setLimit = 72;
  //   // let offset = 4840 + 24 + 24 + 15;
  //   // let setLimit = 1;
  //   let set = <any>[];
  //   for (let index = 0; index < setLimit; index++) {
  //     let id = this.source.equipmentId[offset + index];
  //     // let item = ITEMS.find(({ kindNumeric }) => kindNumeric == data.equipmentKinds[id]) ?? {};
  //     if (this.source.equipmentKinds[id] == 0) {
  //       continue;
  //     }
  //     let item = {};
  //     item["id"] = this.source.equipmentKinds[id];
  //     item["anvilEffect"] = this.source.equipment4thForgeValues[id] ?? null;
  //     item["anvilPurify"] = this.source.equipment5thForgeValues[id] ?? null;
  //     item["anvilIncrement"] = this.source.equipment6thForgeValues[id] ?? null;
  //     item["enchants"] = [];
  //     // let enchant = ENCHANTS.find(({ kindNumeric }) => kindNumeric == data.equipment1stOptionEffectKinds[id]);
  //     item["enchants"].push(this.source.equipment1stOptionEffectKinds[id]);
  //     item["enchants"].push(this.source.equipment2ndOptionEffectKinds[id]);
  //     item["enchants"].push(this.source.equipment3rdOptionEffectKinds[id]);
  //     item["enchants"].push(this.source.equipment4thOptionEffectKinds[id]);
  //     item["enchants"].push(this.source.equipment5thOptionEffectKinds[id]);
  //     item["enchants"].push(this.source.equipment6thOptionEffectKinds[id]);
  //     item["enchants"].push(this.source.equipment7thOptionEffectKinds[id]);

  //     set.push(item);
  //   }
  //   return set;
  // }

  // getItem(offset) {
  //   // let offset = 4840 + 24 + 24 + 15;
  //   // let setLimit = 1;

  //   let id = this.source.equipmentId[offset];
  //   // let item = ITEMS.find(({ kindNumeric }) => kindNumeric == data.equipmentKinds[id]) ?? {};

  //   let item = {};
  //   item.id = this.source.equipmentKinds[id];
  //   item.anvilEffect = this.source.equipment4thForgeValues[id] ?? null;
  //   item.anvilPurify = this.source.equipment5thForgeValues[id] ?? null;
  //   item.anvilIncrement = this.source.equipment6thForgeValues[id] ?? null;
  //   item.enchants = [];
  //   // let enchant = ENCHANTS.find(({ kindNumeric }) => kindNumeric == data.equipment1stOptionEffectKinds[id]);
  //   item.enchants.push(this.source.equipment1stOptionEffectKinds[id]);
  //   item.enchants.push(this.source.equipment2ndOptionEffectKinds[id]);
  //   item.enchants.push(this.source.equipment3rdOptionEffectKinds[id]);
  //   item.enchants.push(this.source.equipment4thOptionEffectKinds[id]);
  //   item.enchants.push(this.source.equipment5thOptionEffectKinds[id]);
  //   item.enchants.push(this.source.equipment6thOptionEffectKinds[id]);
  //   item.enchants.push(this.source.equipment7thOptionEffectKinds[id]);

  //   return item;
  // }

  getOffset(hero) {
    switch (hero) {
      case "warrior":
        return 4840;
      case "wizard":
        return 4912; // ?
      case "angel":
        return 4984; // ?
      case "thief":
        return 5056; // ?
      case "archer":
        return 5128; // ? 5130
      case "tamer":
        return 5200;
      default:
        return 0;
    }
  }
}
