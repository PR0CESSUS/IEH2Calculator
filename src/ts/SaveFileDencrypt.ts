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
    ];
    for (let index = 0; index < mergeList.length; index++) {
      let data = [];
      const element = mergeList[index];
      for (const [key, value] of Object.entries(this.data)) {
        let pattern = new RegExp(element + "[0-9]");

        if (pattern.test(key)) {
          // console.log(this.data[key]);

          //@ts-ignore
          data = data.concat(value);
          delete this.data[key];
        }
      }
      this.data[element] = data;
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
      "SkillTriggeredNum",
      "monsterMutantDefeatedNums",
      "monsterMutantCapturedNums",
      "SkillFor",
      "areaBestTimes",
      "areaCompleteNums",
      "equipmentIsLocked",
      "rebirthPoints",
      "monsterCapturedNums",
      "areaIsReceivedFirstReward",
      "currentAreaLevels",
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
      "OptionLevels", // enchantments levels may be useful
      "OptionEffect", // enchantments values may be useful
      "equipmentOptionNums",
      "equipmentProficiency",
      "equipmentIsMaxed", // maxed equipment
      "equipmentIsAuto",
      "areaIsUnlockedOnce",
      "isVer01",
    ];
    // delete this.data.
    for (const [key, value] of Object.entries(this.data)) {
      // for (let index = 0; index < monsterColor.length; index++) {
      //   const element = monsterColor[index];
      //   let name = key +
      for (let index = 0; index < cleanList.length; index++) {
        if (key.includes(cleanList[index])) {
          delete this.data[key];
          // console.log(key);
        }
      }
      // }
      // if (key.includes("accomplished")) {
      //   // delete this.data[key];
      //   console.log(key);
      // }
    }
    delete this.data.expeditionCompletedNums;
    delete this.data.expeditionMovedDistance;
    delete this.data.expeditionProgress;
    delete this.data.expeditionTimeId;
    delete this.data.expeditionTimes;
    delete this.data.isStartedExpedition;
    // delete this.data.expedition;
    // console.log("clean data size: " + byteSize(JSON.stringify(this.data)));
    // writeFileSync("D:/test/test/test.json", JSON.stringify(this.data, null, 2));
    // console.log("file saved");
  }
}
