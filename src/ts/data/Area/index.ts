import { Enums } from "../../Enums";
import { MultiplierInfo, Multiplier } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { BuildingKind } from "../../type/BuildingKind";
import { ResourceKind } from "../../type/ResourceKind";

export class DataArea {
  areas;
  implementedRegionNum;
  dungeons;

  expBonuses: Multiplier[] = Array(Enums.AreaKind);
  moveSpeedBonuses: Multiplier[] = Array(Enums.AreaKind);
  areaDebuffReduction = new Multiplier(
    new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
    () => 0.9,
    () => 0.0
  );

  largeSwarmChanceInsteadOfRegular = new Multiplier(
    new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
    () => 1.0,
    () => 0.0
  );
  epicSwarmChanceInsteadOfLarge = new Multiplier(
    new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
    () => 1.0,
    () => 0.0
  );
  swarmScoreMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  maxAreaPrestigeLevel = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 9.0));
  maxAreaExpLevel = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 100.0));
  maxAreaMoveSpeedLevel = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 100.0));
  townMaterialGainBonus = new Multiplier();
  townMaterialDungeonRewardMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  townMaterialGainPerDifficultyMultiplier = new Multiplier();
  townMaterialGainBonusClass: Multiplier[] = Array(Enums.HeroKind);

  chestPortalOrbChance: Multiplier;
  clearCountBonusClass: Multiplier[] = Array(Enums.HeroKind);
  dungeonClearCountBonusClass: Multiplier[] = Array(Enums.HeroKind);

  constructor() {
    for (let index = 0; index < this.expBonuses.length; index++) {
      this.expBonuses[index] = new Multiplier();
      this.moveSpeedBonuses[index] = new Multiplier();
    }

    for (let index = 0; index < this.townMaterialGainBonusClass.length; index++) this.townMaterialGainBonusClass[index] = new Multiplier();

    this.chestPortalOrbChance = new Multiplier();
    for (let index = 0; index < this.clearCountBonusClass.length; index++) {
      this.clearCountBonusClass[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
      this.dungeonClearCountBonusClass[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    }
  }

  SetEffectClearCount(info) {
    for (let index = 0; index < this.clearCountBonusClass.length; index++) this.clearCountBonusClass[index].RegisterMultiplier(info);
  }

  //   TotalClearedMissionNum(areaKind, thisAscension) {
  //     let num = 0;
  //     for (let index = 0; index < this.areas[areaKind].length; index++) num += this.areas[areaKind][index].TotalClearedMissionNum(thisAscension);
  //     return num;
  //   }

  TotalClearedMissionNum() {
    return globalThis.data.source.isClearedMission.filter(Boolean).length;
  }
}
