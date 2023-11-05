import { Multiplier, MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { Enums } from "../../Enums";
import { MonsterParameter } from "./MonsterParameter";
export class DataMonster {
  petActiveCap: Multiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 5.0));
  loyaltyCap: Multiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 100.0));
  petRankCap: Multiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 50.0));
  globalInformations;
  monsterDefeatNumMultiplier: Multiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  globalInfoList = [];
  speciesMaterialDropChance: Multiplier[] = Array(Enums.MonsterSpecies);
  colorMaterialDropChance = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => MonsterParameter.colorDropChanceBase));
  trapNotConsumedChance: Multiplier = new Multiplier();
  monsterCapturableLevel: Multiplier[] = Array(Enums.HeroKind);
  doubleCaptureChance: Multiplier[] = Array(Enums.HeroKind);
  captureTripleChance: Multiplier[] = Array(Enums.HeroKind);
  petStatsMultiplier: Multiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  petPassiveEffectMultiplier: Multiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  isPetActive: boolean[] = Array(Enums.PetActiveEffectKind);
  tempIsPetActive: boolean[] = Array(Enums.PetActiveEffectKind);
  petRankMilestoneList = [];
  isLog: boolean[] = Array(Enums.HeroKind);

  constructor() {
    //   this.globalInformations = new MonsterGlobalInformation[Enum.GetNames(typeof (MonsterSpecies)).length][];
    //   for (let species = 0; species < 10; species++) {
    //     this.globalInformations[species] = new MonsterGlobalInformation[Enum.GetNames(typeof (MonsterColor)).length];
    //     for (let color = 0; color < this.globalInformations[species].length; color++) {
    //       this.globalInformations[species][color] = new MonsterGlobalInformation((MonsterSpecies) species, (MonsterColor) color);
    //       this.globalInfoList.Add(this.globalInformations[species][color]);
    //     }
    //   }
    //   this.globalInformations[10] = new MonsterGlobalInformation[1];
    //   this.globalInformations[10][0] = new MonsterGlobalInformation(MonsterSpecies.Mimic, MonsterColor.Normal);
    //   this.globalInfoList.Add(this.globalInformations[10][0]);
    //   this.globalInformations[11] = new MonsterGlobalInformation[Enum.GetNames(typeof (ChallengeMonsterKind)).length];
    //   for (let kind = 0; kind < this.globalInformations[11].length; kind++) {
    //     this.globalInformations[11][kind] = (MonsterGlobalInformation) new ChallengeMonsterGlobalInformation((ChallengeMonsterKind) kind);
    //     this.globalInfoList.Add(this.globalInformations[11][kind]);
    //   }
    //   for (let index = 0; index < this.speciesMaterialDropChance.length; index++)
    //     this.speciesMaterialDropChance[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => MonsterParameter.dropChanceBase));
    //   for (let index = 0; index < this.captureTripleChance.length; index++) {
    //     this.doubleCaptureChance[index] = new Multiplier();
    //     this.captureTripleChance[index] = new Multiplier();
    //   }
    //   for (let index = 0; index < this.monsterCapturableLevel.length; index++) {
    //     let count = index;
    //     this.monsterCapturableLevel[index] = new Multiplier(() => 2000.0, () => 1.0);
    //     this.monsterCapturableLevel[index].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => ((globalThis.data.stat.statsCtrl.HeroLevel(count).value - 100))));
    //     this.monsterCapturableLevel[index].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => globalThis.data.stat.statsCtrl.MonsterCaptureMaxLevelIncrement((count: HeroKind).Value())));
    //   }
  }
}
