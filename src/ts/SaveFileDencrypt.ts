import { createDecipheriv, pbkdf2Sync } from "crypto";

export class SaveFileDencrypt {
  data: any;
  private key = new Uint8Array([107, 107, 121, 121, 104, 107, 97]);
  private salt = new Uint8Array([115, 116, 107, 116, 116, 110, 115, 115, 116, 107, 116, 116, 110, 115]);
  private iterationCount = 1000;
  private position = 0;

  constructor(data: string) {
    let dataArray = data.split("#");
    this.data = {
      ...JSON.parse(this.dencrypt(dataArray[0])),
      ...JSON.parse(this.dencrypt(dataArray[1])),
      ...JSON.parse(this.dencrypt(dataArray[2])),
    };
    this.merge();
    this.cleanFile();
  }
  private dencrypt(src: string) {
    let key = this.Rfc2898DeriveBytes(16);
    let iv = this.Rfc2898DeriveBytes(16);
    let decipher = createDecipheriv("aes-128-cbc", key, iv);
    let decoded = decipher.update(src, "base64", "ascii");
    decoded += decipher.final("ascii");

    return decoded;
  }
  private merge() {
    const mergeList = [
      "equipmentId",
      "equipmentKinds",
      "equipment1stForgeValues",
      "equipment2ndForgeValues",
      "equipment3rdForgeValues",
      "equipment4thForgeValues",
      "equipment5thForgeValues",
      "equipment6thForgeValues",
      "equipment1stOptionEffectKinds",
      "equipment2ndOptionEffectKinds",
      "equipment3rdOptionEffectKinds",
      "equipment4thOptionEffectKinds",
      "equipment5thOptionEffectKinds",
      "equipment6thOptionEffectKinds",
      "equipment7thOptionEffectKinds",
      "equipment1stOptionEffectValues",
      "equipment2ndOptionEffectValues",
      "equipment3rdOptionEffectValues",
      "equipment4thOptionEffectValues",
      "equipment5thOptionEffectValues",
      "equipment6thOptionEffectValues",
      "equipment7thOptionEffectValues",
      "equipment1stOptionLevels",
      "equipment2ndOptionLevels",
      "equipment3rdOptionLevels",
      "equipment4thOptionLevels",
      "equipment5thOptionLevels",
      "equipment6thOptionLevels",
      "equipment7thOptionLevels",
    ];
    for (let index = 0; index < mergeList.length; index++) {
      let data = [];
      const element = mergeList[index];
      for (const [key, value] of Object.entries(this.data)) {
        let pattern = new RegExp(element + "[0-9]");

        if (pattern.test(key)) {
          // console.log(key);

          // console.log(this.data[key]);

          //@ts-ignore
          data = data.concat(value);
          delete this.data[key];
        }
      }
      this.data[element] = data;
      // console.log(this.data[element]);
    }
  }

  private Rfc2898DeriveBytes(byteCount: number) {
    let decoder = new TextDecoder();
    // hack for restarting
    if (this.position == 32) {
      this.position = 0;
    }
    let position = this.position;

    let bytes = pbkdf2Sync(Buffer.from(decoder.decode(this.key)), decoder.decode(this.salt), this.iterationCount, position + byteCount, "sha1");
    this.position += byteCount;
    let result = Buffer.alloc(byteCount);
    for (let i = 0; i < byteCount; i++) {
      result[i] = bytes[position + i];
    }
    return result;
  }

  private cleanFile() {
    // const byteSize = (str) => new Blob([str]).size;
    // console.log("initial data size: " + byteSize(JSON.stringify(this.data)));

    const cleanList = [
      "areaBestExps",
      "monsterDefeatedNums",
      "areaPrestigePoints",
      "areaPrestigeUpgradeLevels",
      "areaPrestigeResetNums",
      "isAcceptedQuestsTitle",
      "isFavoriteQuest",
      "autoAbilityPointPresets",
      "autoAbilityPointMax",
      "monsterMutantDefeatedNums",
      "monsterMutantCapturedNums",
      "SkillFor",
      "areaBestTimes",
      "areaCompleteNums",
      "equipmentIsLocked",
      "rebirthPoints",
      "monsterCapturedNums",
      "areaBestGolds",
      "isClearedQuestsGeneral",
      "isAcceptedQuests",
      "initDefeatedNumQuests",
      "initCompletedAreaNumQuests",
      "rebirthNums",
      "rebirthPlay",
      "rebirthMaxHero",
      "SkillProficiency",
      "accomplished",
      "autoRebirth",
      "upgradeQueues",
      "upgradeIsSuperQueue",
      // "OptionLevels", // enchantments levels may be useful
      // "OptionEffect", // enchantments values may be useful
      "equipmentOptionNums",
      "equipmentProficiency",
      "equipmentIsAuto",
      "areaIsUnlockedOnce",
      "isVer01",
      "Volume",
      "TriggeredNum",
      "swarm",
      "regularChest",
      "amwa",
      "dailyQuest",
      "questing",
      "isDlc",
      "movedDistance",
      "MovedDistance",
      "persistent",
      "isReceived",
      "areaIsReceived",
      "current",
      "purchasedNum",
      "IEH1Achievement",
      "NumEnchantFilter",
      "enchantEffect",
      "QuestClearedNum",
      "isGot",
      "CloudSave",
      "GotServerTime",
      "epicCoin",
      "favorite",
      "buildingResearchExps",
      "IsBuildingResearch",
      "playtimes",
      "allTime",
    ];
    // delete this.data.
    for (const [key, value] of Object.entries(this.data)) {
      for (let index = 0; index < cleanList.length; index++) {
        if (key.includes(cleanList[index])) {
          delete this.data[key];
          // console.log(key);
        }
      }
    }
    delete this.data.expeditionCompletedNums;
    delete this.data.expeditionMovedDistance;
    delete this.data.expeditionProgress;
    delete this.data.expeditionTimeId;
    delete this.data.expeditionTimes;
    delete this.data.isStartedExpedition;
    delete this.data.monsterPetTamingPoints;
    delete this.data.monsterPetLoyaltyExp;
    delete this.data.monsterMilk;
    delete this.data.monsterPetExps;
    delete this.data.multibuyNums;
    delete this.data.isGotFirstEQ;
    delete this.data.currentTutorialArrow;
    delete this.data.isFirstWelcomed;
    delete this.data.isToggleOn;
    delete this.data.combatRangeId;
    delete this.data.heroLevel;
    delete this.data.heroExp;
    delete this.data.maxHeroLevelReached;
    delete this.data.currentHero;
    delete this.data.ascendTime;
    delete this.data.isActiveBattle;
    delete this.data.language;
    delete this.data.isOnAMWA;
    delete this.data.summonSpecies;
    delete this.data.summonColor;
    delete this.data.isSetSummonPet;
    delete this.data.isScrollFilter;
    delete this.data.numberFormatKind;
    delete this.data.isAutoBuyBlessings;
    delete this.data.blessingDurationLefts;
    delete this.data.enchantIsLocked;
    delete this.data.enchantForgeEffectKinds;
    delete this.data.disassembledEquipmentNums;
    delete this.data.townMatGainFromdisassemble;
    delete this.data.potionIsLocked;
    delete this.data.potionProductedNums;
    delete this.data.craftEnchantScrollLevels;
    delete this.data.essenceProgresses;
    delete this.data.generalQuestClearNumsPerClass;
    delete this.data.survivalNumQuestTitle;
    delete this.data.initMovedDistanceQuestTitle;
    delete this.data.multibuyId;
    delete this.data.totalEquipmentGained;
    delete this.data.potionQueues;
    delete this.data.potionIsSuperQueues;
    // delete this.data.isClearedChallenge;
    delete this.data.isClearedQuestsDaily;
    delete this.data.upgradeQueueExpGain;
    delete this.data.isEnchantFilter;
    delete this.data.enchantFilterLevel;
    delete this.data.isUsedSimulationOnce;
    delete this.data.isShowQuickAccess;
    delete this.data.autoAreaProgressionTargetClearNums;
    delete this.data.isLazyQuestingMode;
    delete this.data.isAutoAbilityPointPresets;
    delete this.data.isBestExpSecAreas;
    delete this.data.isClearedQuestGeneralOnce;
    delete this.data.isPersistentUnlockedQuestGeneral;
    delete this.data.shopRestockTimecount;
    delete this.data.lastSwarmPlaytime;
    delete this.data.equipmentIsGotOnce;
    delete this.data.isAutoRebirthOns;
    delete this.data.skillLoadoutIds;
    delete this.data.ascensionPlayTime;
    delete this.data.ascensionPoints;
    delete this.data.bestAscensionPlayTime;
    delete this.data.totalSlimeCoin;
    delete this.data.totalLeaf;
    delete this.data.totalCrystal;
    delete this.data.totalStone;
    delete this.data.totalGold;
    delete this.data.nitroConsumed;
    delete this.data.nitro;
    delete this.data.talismanFragement;
    delete this.data.materials;
    delete this.data.townMaterials;
    delete this.data.gold;
    delete this.data.slimeCoin;
    delete this.data.resources;
    delete this.data.achievementPlaytimes;
    delete this.data.wasd;
    delete this.data.lastDailyTime;
    delete this.data.portalOrbNum;
    delete this.data.openedChestNum;
    delete this.data.bestRebirthPlaytimes;
    delete this.data.totalAlchemyPointGained;
    delete this.data.essences;
    delete this.data.version;
    delete this.data.lastTimeLocal;
    delete this.data.birthDate;
    delete this.data.monsterPetIsActives;
    delete this.data.buildingRanks;
    delete this.data.dictionaryUpgradePoint;
    delete this.data.guildAbilityPoint;
    delete this.data.alchemyPoint;
    delete this.data.mysteriousWaterProgress;
    delete this.data.isInitialized;
    delete this.data.abilityPoints;
    delete this.data.ascensionNum;
    delete this.data.abilityPoints;
    delete this.data.enchantId;
    delete this.data.enchantKinds;
    delete this.data.expeditionExps; // maby for upgrading simulator
    delete this.data.inAppPurchasedNum_ver01011401;
    // delete this.data.expedition;
    // console.log("clean data size: " + byteSize(JSON.stringify(this.data)));
    // writeFileSync("D:/test/test/test.json", JSON.stringify(this.data, null, 2));
    // console.log("file saved");
  }
}
