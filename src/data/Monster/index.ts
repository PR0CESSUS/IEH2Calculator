import { Multiplier, MultiplierInfo } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MonsterColor } from "../../type/MonsterColor";
import { Stats } from "../../type/Stats";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { ChallengeMonsterKind } from "../../type/ChallengeMonsterKind";
import { Enums } from "../../Enums";
import { MonsterParameter } from "./MonsterParameter";
import { MonsterGlobalInformation } from "./MonsterGlobalInformation";
import { DATA } from "..";
export class DataMonster {
  #data: DATA;
  petActiveCap: Multiplier;
  loyaltyCap: Multiplier;
  petRankCap: Multiplier;
  globalInformations: MonsterGlobalInformation[][] = Array(Enums.MonsterSpecies);
  monsterDefeatNumMultiplier: Multiplier;
  globalInfoList: MonsterGlobalInformation[] = [];
  speciesMaterialDropChance: Multiplier[] = Array(Enums.MonsterSpecies);
  colorMaterialDropChance: Multiplier;
  trapNotConsumedChance: Multiplier = new Multiplier();
  monsterCapturableLevel: Multiplier[] = Array(Enums.HeroKind);
  doubleCaptureChance: Multiplier[] = Array(Enums.HeroKind);
  captureTripleChance: Multiplier[] = Array(Enums.HeroKind);
  petStatsMultiplier: Multiplier;
  petPassiveEffectMultiplier: Multiplier;
  isPetActive: boolean[] = Array(Enums.PetActiveEffectKind);
  tempIsPetActive: boolean[] = Array(Enums.PetActiveEffectKind);
  petRankMilestoneList = [];
  isLog: boolean[] = Array(Enums.HeroKind);

  constructor(DATA: DATA) {
    this.#data = DATA;
    this.petRankCap = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 50.0));
    this.loyaltyCap = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 100.0));
    this.petActiveCap = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 5.0));
    this.monsterDefeatNumMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.petStatsMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.petPassiveEffectMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.colorMaterialDropChance = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => MonsterParameter.colorDropChanceBase));
    for (let species = 0; species < 10; species++) {
      this.globalInformations[species] = Array(Enums.MonsterColor);
      for (let color = 0; color < this.globalInformations[species].length; color++) {
        this.globalInformations[species][color] = new MonsterGlobalInformation(this.#data, species, color);
        this.globalInfoList.push(this.globalInformations[species][color]);
      }
    }
    this.globalInformations[10] = [];
    this.globalInformations[10][0] = new MonsterGlobalInformation(this.#data, MonsterSpecies.Mimic, MonsterColor.Normal);
    this.globalInfoList.push(this.globalInformations[10][0]);
    this.globalInformations[11] = Array(Enums.ChallengeMonsterKind);
    for (let kind = 0; kind < this.globalInformations[11].length; kind++) {
      this.globalInformations[11][kind] = new MonsterGlobalInformation(this.#data, MonsterSpecies.ChallengeBoss, kind);
      this.globalInfoList.push(this.globalInformations[11][kind]);
    }
    for (let index = 0; index < this.speciesMaterialDropChance.length; index++)
      this.speciesMaterialDropChance[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => MonsterParameter.dropChanceBase));
    for (let index = 0; index < this.captureTripleChance.length; index++) {
      this.doubleCaptureChance[index] = new Multiplier();
      this.captureTripleChance[index] = new Multiplier();
    }
    //   for (let index = 0; index < this.monsterCapturableLevel.length; index++) {
    //     let count = index;
    //     this.monsterCapturableLevel[index] = new Multiplier(() => 2000.0, () => 1.0);
    //     this.monsterCapturableLevel[index].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => ((this.#data.stat.statsCtrl.HeroLevel(count).value - 100))));
    //     this.monsterCapturableLevel[index].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.#data.stat.statsCtrl.MonsterCaptureMaxLevelIncrement((count: HeroKind).Value())));
    //   }
    // console.log(this);
  }

  Start() {
    this.globalInfoList.forEach((pet) => {
      pet.Start();
    });
    this.SetPetRankMilestone();
  }
  TotalPetRank() {
    let num = 0.0;
    for (let index = 0; index < Enums.MonsterSpecies; index++) {
      num += this.TotalPetRankSpecies(index);
    }
    return num;
  }
  SetEffectSpeciesMaterialDropChance(info: MultiplierInfo) {
    for (let index = 0; index < this.speciesMaterialDropChance.length; index++) this.speciesMaterialDropChance[index].RegisterMultiplier(info);
  }

  SetEffectDoubleCaptureChance(info: MultiplierInfo) {
    for (let index = 0; index < this.doubleCaptureChance.length; index++) this.doubleCaptureChance[index].RegisterMultiplier(info);
  }

  SetEffectTripleCaptureChance(info: MultiplierInfo) {
    for (let index = 0; index < this.captureTripleChance.length; index++) this.captureTripleChance[index].RegisterMultiplier(info);
  }
  TotalPetRankSpecies(species: MonsterSpecies) {
    let num = 0.0;
    for (let index = 0; index < this.globalInformations[species].length; index++) num += this.globalInformations[species][index].pet.rank;
    return num;
  }

  Monster(species: MonsterSpecies, color: MonsterColor) {
    return this.GlobalInformation(species, color);
  }

  GlobalInformation(species: MonsterSpecies, color: MonsterColor) {
    return this.globalInformations[species][color];
  }

  GlobalInformationChallengeBoss(kind: ChallengeMonsterKind) {
    return this.globalInformations[11][kind];
  }

  isUnlocked(level) {
    return () => this.TotalPetRank() > level;
  }

  SetPetRankMilestone() {
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(10)));
    this.SetEffectSpeciesMaterialDropChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(20)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.1, this.isUnlocked(30)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.15, this.isUnlocked(40)));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.1, this.isUnlocked(50)));
    this.colorMaterialDropChance.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(60)));
    this.petActiveCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 1.0, this.isUnlocked(70)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.25, this.isUnlocked(80)));
    this.SetEffectSpeciesMaterialDropChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(90)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.1, this.isUnlocked(100)));
    //     this.GlobalInformation(MonsterSpecies.Bat, MonsterColor.Normal).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(120));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.5, this.isUnlocked(140)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.1, this.isUnlocked(160)));
    // //     this.GlobalInformation(MonsterSpecies.Spider, MonsterColor.Blue).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(180));
    this.colorMaterialDropChance.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(200)));
    //     this.GlobalInformation(MonsterSpecies.Bat, MonsterColor.Blue).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(220));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.25, this.isUnlocked(240)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.75, this.isUnlocked(260)));
    //     this.GlobalInformation(MonsterSpecies.Fairy, MonsterColor.Normal).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(280));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.15, this.isUnlocked(300)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.1, this.isUnlocked(320)));
    this.petActiveCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 1.0, this.isUnlocked(340)));
    this.SetEffectSpeciesMaterialDropChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(360)));
    //     this.GlobalInformation(MonsterSpecies.Slime, MonsterColor.Yellow).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(380));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.1, this.isUnlocked(400)));
    //     this.GlobalInformation(MonsterSpecies.Fox, MonsterColor.Normal).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(420));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(440)));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.5, this.isUnlocked(480)));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.2, this.isUnlocked(500)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.0, this.isUnlocked(520)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.15, this.isUnlocked(540)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.5, this.isUnlocked(560)));
    this.SetEffectSpeciesMaterialDropChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(580)));
    this.colorMaterialDropChance.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(600)));
    //     this.GlobalInformation(MonsterSpecies.Fox, MonsterColor.Blue).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(620));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.75, this.isUnlocked(700)));
    //     this.GlobalInformation(MonsterSpecies.Spider, MonsterColor.Red).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(720));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.2, this.isUnlocked(740)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.5, this.isUnlocked(800)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.1, this.isUnlocked(825)));
    this.colorMaterialDropChance.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(900)));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.0, this.isUnlocked(950)));
    this.SetEffectSpeciesMaterialDropChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(975)));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.25, this.isUnlocked(1000)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.25, this.isUnlocked(1025)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.2, this.isUnlocked(1050)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.1, this.isUnlocked(1075)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.5, this.isUnlocked(1100)));
    //     this.GlobalInformation(MonsterSpecies.DevilFish, MonsterColor.Normal).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(1150));
    this.colorMaterialDropChance.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(1200)));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.25, this.isUnlocked(1250)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.25, this.isUnlocked(1300)));
    this.SetEffectSpeciesMaterialDropChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(1350)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.5, this.isUnlocked(1400)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.1, this.isUnlocked(1450)));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.3, this.isUnlocked(1500)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.5, this.isUnlocked(1550)));
    this.SetEffectTripleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.1, this.isUnlocked(1600)));
    //     this.GlobalInformation(MonsterSpecies.MagicSlime, MonsterColor.Yellow).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(1650));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.5, this.isUnlocked(1700)));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.5, this.isUnlocked(1750)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.3, this.isUnlocked(1800)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.1, this.isUnlocked(1850)));
    this.SetEffectSpeciesMaterialDropChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(1900)));
    this.colorMaterialDropChance.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.1, this.isUnlocked(1950)));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.35, this.isUnlocked(2000)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.75, this.isUnlocked(2050)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.0, this.isUnlocked(2100)));
    //     this.GlobalInformation(MonsterSpecies.Fox, MonsterColor.Green).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(2150));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.75, this.isUnlocked(2250)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.35, this.isUnlocked(2300)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.15, this.isUnlocked(2350)));
    //     this.GlobalInformation(MonsterSpecies.DevilFish, MonsterColor.Blue).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(2400));
    this.SetEffectSpeciesMaterialDropChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.2, this.isUnlocked(2450)));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.4, this.isUnlocked(2500)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 2.0, this.isUnlocked(2550)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.0, this.isUnlocked(2600)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.15, this.isUnlocked(2650)));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 2.0, this.isUnlocked(2750)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.4, this.isUnlocked(2800)));
    this.petActiveCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 1.0, this.isUnlocked(2850)));
    //     this.GlobalInformation(MonsterSpecies.Spider, MonsterColor.Green).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(2900));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.45, this.isUnlocked(3000)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 2.25, this.isUnlocked(3050)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.0, this.isUnlocked(3100)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.15, this.isUnlocked(3150)));
    this.SetEffectTripleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.1, this.isUnlocked(3200)));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 2.25, this.isUnlocked(3250)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.45, this.isUnlocked(3300)));
    //     this.GlobalInformation(MonsterSpecies.Spider, MonsterColor.Yellow).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(3350));
    this.SetEffectSpeciesMaterialDropChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.2, this.isUnlocked(3400)));
    //     this.GlobalInformation(MonsterSpecies.Treant, MonsterColor.Normal).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(3450));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.5, this.isUnlocked(3500)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 2.5, this.isUnlocked(3550)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.0, this.isUnlocked(3600)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.15, this.isUnlocked(3650)));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 2.5, this.isUnlocked(3750)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.5, this.isUnlocked(3800)));
    this.petActiveCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 1.0, this.isUnlocked(3850)));
    //     this.GlobalInformation(MonsterSpecies.Bat, MonsterColor.Red).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(3900));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.55, this.isUnlocked(4000)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 2.75, this.isUnlocked(4050)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.5, this.isUnlocked(4100)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.2, this.isUnlocked(4150)));
    //     this.GlobalInformation(MonsterSpecies.Bat, MonsterColor.Yellow).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(4200));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 2.75, this.isUnlocked(4250)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.65, this.isUnlocked(4300)));
    //     this.GlobalInformation(MonsterSpecies.Fairy, MonsterColor.Green).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(4350));
    this.SetEffectSpeciesMaterialDropChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.2, this.isUnlocked(4400)));
    this.petActiveCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 1.0, this.isUnlocked(4450)));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.6, this.isUnlocked(4500)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 3.0, this.isUnlocked(4550)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.5, this.isUnlocked(4600)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.2, this.isUnlocked(4650)));
    //     this.GlobalInformation(MonsterSpecies.Slime, MonsterColor.Green).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(4700));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 3.0, this.isUnlocked(4750)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.9, this.isUnlocked(4800)));
    this.SetEffectTripleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.1, this.isUnlocked(4850)));
    this.petActiveCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 1.0, this.isUnlocked(4900)));
    //     this.GlobalInformation(MonsterSpecies.Treant, MonsterColor.Purple).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(4950));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.7, this.isUnlocked(5000)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.5, this.isUnlocked(5100)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 5.0, this.isUnlocked(5150)));
    //     this.GlobalInformation(MonsterSpecies.Fairy, MonsterColor.Yellow).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(5200));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 3.5, this.isUnlocked(5250)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.5, this.isUnlocked(5300)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.2, this.isUnlocked(5350)));
    this.petActiveCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 1.0, this.isUnlocked(5400)));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 1.0, this.isUnlocked(5450)));
    //     this.GlobalInformation(MonsterSpecies.DevilFish, MonsterColor.Purple).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(5500));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 10.0, this.isUnlocked(5550)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 1.5, this.isUnlocked(5600)));
    //     this.GlobalInformation(MonsterSpecies.FlameTiger, MonsterColor.Normal).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(5650));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 4.0, this.isUnlocked(5750)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 5.0, this.isUnlocked(5800)));
    //     this.GlobalInformation(MonsterSpecies.Bat, MonsterColor.Green).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(5850));
    //     this.GlobalInformation(MonsterSpecies.MagicSlime, MonsterColor.Green).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(5950));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 2.0, this.isUnlocked(6000)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 20.0, this.isUnlocked(6050)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 2.0, this.isUnlocked(6100)));
    //     this.GlobalInformation(MonsterSpecies.Fox, MonsterColor.Yellow).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(6150));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 4.5, this.isUnlocked(6250)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 15.0, this.isUnlocked(6300)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.25, this.isUnlocked(6350)));
    this.SetEffectTripleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.15, this.isUnlocked(6400)));
    this.petActiveCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 1.0, this.isUnlocked(6450)));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 3.0, this.isUnlocked(6500)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 30.0, this.isUnlocked(6550)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 2.0, this.isUnlocked(6600)));
    //     this.GlobalInformation(MonsterSpecies.DevilFish, MonsterColor.Yellow).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(6650));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 5.5, this.isUnlocked(6750)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 30.0, this.isUnlocked(6800)));
    //     this.GlobalInformation(MonsterSpecies.Spider, MonsterColor.Purple).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(6850));
    this.SetEffectSpeciesMaterialDropChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 0.4, this.isUnlocked(6950)));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 5.0, this.isUnlocked(7000)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 50.0, this.isUnlocked(7050)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 2.0, this.isUnlocked(7100)));
    //     this.GlobalInformation(MonsterSpecies.Treant, MonsterColor.Yellow).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(7150));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 7.0, this.isUnlocked(7250)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 50.0, this.isUnlocked(7300)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.3, this.isUnlocked(7350)));
    this.petActiveCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 1.0, this.isUnlocked(7450)));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 10.0, this.isUnlocked(7500)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 100.0, this.isUnlocked(7550)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 3.0, this.isUnlocked(7600)));
    //     this.GlobalInformation(MonsterSpecies.FlameTiger, MonsterColor.Yellow).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(7650));
    this.#data.stats.SetEffectPetEXPGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 9.0, this.isUnlocked(7750)));
    this.#data.stats.SetEffectLoyalityPointGain(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 100.0, this.isUnlocked(7800)));
    //     this.GlobalInformation(MonsterSpecies.Fairy, MonsterColor.Purple).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(7850));
    //     this.GlobalInformation(MonsterSpecies.FlameTiger, MonsterColor.Green).pet.unlockActiveEffectImprovement.RegisterCondition(this.isUnlocked(7900));
    this.SetEffectTripleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.2, this.isUnlocked(8000)));
    this.#data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 300.0, this.isUnlocked(8050)));
    this.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Mul, () => 10.0, this.isUnlocked(8100)));
    this.petPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 15.0, this.isUnlocked(8200)));
    this.SetEffectDoubleCaptureChance(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 0.35, this.isUnlocked(8350)));
    this.petActiveCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.PetRankMilestone, MultiplierType.Add, () => 1.0, this.isUnlocked(8450)));
  }
}
