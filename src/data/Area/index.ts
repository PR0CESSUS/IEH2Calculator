import { DATA } from "..";
import { Enums } from "../../Enums";
import { MultiplierInfo, Multiplier } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";

export class DataArea {
  #data: DATA;
  expBonuses: Multiplier[] = Array(Enums.AreaKind);
  moveSpeedBonuses: Multiplier[] = Array(Enums.AreaKind);
  areaDebuffReduction: Multiplier;
  largeSwarmChanceInsteadOfRegular: Multiplier;
  epicSwarmChanceInsteadOfLarge: Multiplier;
  swarmScoreMultiplier: Multiplier;
  maxAreaPrestigeLevel: Multiplier;
  maxAreaExpLevel: Multiplier;
  maxAreaMoveSpeedLevel: Multiplier;
  townMaterialGainBonus: Multiplier;
  townMaterialDungeonRewardMultiplier: Multiplier;
  townMaterialGainPerDifficultyMultiplier: Multiplier;
  townMaterialGainBonusClass: Multiplier[] = Array(Enums.HeroKind);
  chestPortalOrbChance: Multiplier;
  clearCountBonusClass: Multiplier[] = Array(Enums.HeroKind);
  dungeonClearCountBonusClass: Multiplier[] = Array(Enums.HeroKind);
  memoTotalClearedMissionNum: number;

  constructor(DATA: DATA) {
    this.#data = DATA;
    this.chestPortalOrbChance = new Multiplier();
    this.townMaterialGainBonus = new Multiplier();
    this.townMaterialGainPerDifficultyMultiplier = new Multiplier();
    this.maxAreaExpLevel = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 100.0));
    this.maxAreaPrestigeLevel = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 9.0));
    this.swarmScoreMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.maxAreaMoveSpeedLevel = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 100.0));
    this.townMaterialDungeonRewardMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.epicSwarmChanceInsteadOfLarge = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
      () => 1.0,
      () => 0.0
    );
    this.largeSwarmChanceInsteadOfRegular = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
      () => 1.0,
      () => 0.0
    );

    this.areaDebuffReduction = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
      () => 0.9,
      () => 0.0
    );

    for (let index = 0; index < this.expBonuses.length; index++) {
      this.expBonuses[index] = new Multiplier();
      this.moveSpeedBonuses[index] = new Multiplier();
    }

    for (let index = 0; index < this.townMaterialGainBonusClass.length; index++) this.townMaterialGainBonusClass[index] = new Multiplier();

    for (let index = 0; index < this.clearCountBonusClass.length; index++) {
      this.clearCountBonusClass[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
      this.dungeonClearCountBonusClass[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    }
  }

  SetEffectClearCount(info: MultiplierInfo) {
    for (let index = 0; index < this.clearCountBonusClass.length; index++) this.clearCountBonusClass[index].RegisterMultiplier(info);
  }

  //   TotalClearedMissionNum(areaKind, thisAscension) {
  //     let num = 0;
  //     for (let index = 0; index < this.areas[areaKind].length; index++) num += this.areas[areaKind][index].TotalClearedMissionNum(thisAscension);
  //     return num;
  //   }
  SetEffectDungeonClearCount(info: MultiplierInfo) {
    for (let index = 0; index < this.dungeonClearCountBonusClass.length; index++) this.dungeonClearCountBonusClass[index].RegisterMultiplier(info);
  }
  TotalClearedMissionNum() {
    if (this.memoTotalClearedMissionNum) return this.memoTotalClearedMissionNum;
    const result = this.#data.source.isClearedMission.filter(Boolean).length;
    this.memoTotalClearedMissionNum = result;
    return result;
  }
}
