import { Multiplier, MultiplierInfo } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ExpeditionGlobalInformation } from "./ExpeditionGlobalInformation";
import { DATA } from "..";
import { ExpeditionKind } from "../../type/ExpeditionKind";
import { NumberType } from "../../type/NumberType";
import { Expedition } from "./Expedition";
export class DataExpedition {
  data: DATA;
  globalInfoList: ExpeditionGlobalInformation[] = [];
  expeditions: Expedition[] = Array(20);
  expGainMultiplier: Multiplier;
  petExpGainMultiplier: Multiplier;
  speedMultiplier: Multiplier;
  rewardMultiplier: Multiplier;
  passiveEffectMultiplier: Multiplier;
  walkedDistanceGainMultiplier: Multiplier;
  unlockedExpeditionSlotNum: Multiplier;
  fieldTrainingPassiveEffectMultiplier: Multiplier;
  lowerLimitTime: Multiplier;
  rewardModifierPerHour: Multiplier;

  constructor(DATA: DATA) {
    this.data = DATA;
    this.lowerLimitTime = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 900.0),
      () => 900.0,
      () => 300.0
    );
    this.rewardModifierPerHour = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.85),
      () => 0.95,
      () => 0.85
    );
    this.petExpGainMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.expGainMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.rewardMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.passiveEffectMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.walkedDistanceGainMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.unlockedExpeditionSlotNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.unlockedExpeditionSlotNum.numberType = NumberType.Normal;
    this.fieldTrainingPassiveEffectMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.speedMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.globalInfoList.push(new ExpeditionGlobalInformation(this.data, ExpeditionKind.Brick));
    this.globalInfoList.push(new ExpeditionGlobalInformation(this.data, ExpeditionKind.Log));
    this.globalInfoList.push(new ExpeditionGlobalInformation(this.data, ExpeditionKind.Shard));
    this.globalInfoList.push(new ExpeditionGlobalInformation(this.data, ExpeditionKind.PetRank));
    this.globalInfoList.push(new ExpeditionGlobalInformation(this.data, ExpeditionKind.Equipment));
    this.globalInfoList.push(new ExpeditionGlobalInformation(this.data, ExpeditionKind.PetExp));
    this.globalInfoList.push(new ExpeditionGlobalInformation(this.data, ExpeditionKind.WalkDistance));
    for (let id = 0; id < this.expeditions.length; id++) {
      this.expeditions[id] = new Expedition(this, id);
    }
    ///
  }
  TotalLevel() {
    return this.data.source.expeditionLevels.reduce((a, b) => a + b, 0);
  }
  Start() {
    this.SetMilestone();
    this.globalInfoList.forEach((expedition: ExpeditionGlobalInformation) => {
      expedition.SetEffect();
    });
  }

  SetMilestone() {
    const totalLevel = this.TotalLevel();

    if (totalLevel >= 5) this.unlockedExpeditionSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 1.0));
    if (totalLevel >= 15) this.unlockedExpeditionSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 1.0));
    if (totalLevel >= 30) this.unlockedExpeditionSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 1.0));
    if (totalLevel >= 125) this.unlockedExpeditionSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 1.0));
    if (totalLevel >= 175) this.speedMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.25));
    if (totalLevel >= 200) this.passiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.25));
    if (totalLevel >= 225) this.speedMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.25));
    if (totalLevel >= 250) this.passiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.25));
    if (totalLevel >= 275) this.fieldTrainingPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 9.0));
    if (totalLevel >= 300) this.rewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.1));
    if (totalLevel >= 325) this.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.25));
    if (totalLevel >= 350) this.speedMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.25));
    if (totalLevel >= 375) this.fieldTrainingPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 90.0));
    if (totalLevel >= 400) this.unlockedExpeditionSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 1.0));
    if (totalLevel >= 425) this.data.monster.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 0.25));
    if (totalLevel >= 450) this.passiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.25));
    if (totalLevel >= 475) this.fieldTrainingPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 900.0));
    if (totalLevel >= 500) this.rewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.2));
    if (totalLevel >= 525) this.data.monster.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 0.5));
    if (totalLevel >= 550) this.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.5));
    if (totalLevel >= 575) this.fieldTrainingPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 9000.0));
    if (totalLevel >= 600) this.speedMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.5));

    if (totalLevel >= 625) this.data.monster.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 0.75));
    if (totalLevel >= 650) this.passiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.25));
    if (totalLevel >= 675) this.fieldTrainingPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 90000.0));
    if (totalLevel >= 700) this.rewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.3));
    if (totalLevel >= 725) this.data.monster.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 1.0));
    if (totalLevel >= 750) this.data.monster.petRankCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 50.0));
    if (totalLevel >= 775) this.fieldTrainingPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 900000.0));
    if (totalLevel >= 800) this.data.monster.loyaltyCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 100.0));
    if (totalLevel >= 825) this.data.monster.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 2.0));
    if (totalLevel >= 850) this.unlockedExpeditionSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 1.0));
    if (totalLevel >= 875)
      this.fieldTrainingPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 9000000.0));
    if (totalLevel >= 900) this.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.75));
    if (totalLevel >= 925) this.data.monster.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 3.5));
    if (totalLevel >= 950) this.speedMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.75));
    if (totalLevel >= 975)
      this.fieldTrainingPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 90000000.0));
    if (totalLevel >= 1000) this.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 9.0));
    if (totalLevel >= 1050) this.passiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.25));
    if (totalLevel >= 1100) this.data.monster.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 5.0));
    if (totalLevel >= 1150) this.rewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.4));
    if (totalLevel >= 1200)
      this.fieldTrainingPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 900000000.0));
    if (totalLevel >= 1250) this.unlockedExpeditionSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 1.0));
    if (totalLevel >= 1300) this.data.monster.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 7.5));
    if (totalLevel >= 1350) this.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 1.0));
    if (totalLevel >= 1400) this.speedMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 1.0));
    if (totalLevel >= 1450) this.passiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.25));
    if (totalLevel >= 1500) this.rewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.5));
    if (totalLevel >= 1550)
      this.fieldTrainingPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 9000000000.0));
    if (totalLevel >= 1600) this.data.monster.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 12.0));
    if (totalLevel >= 1650) this.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 1.25));
    if (totalLevel >= 1700) this.speedMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 1.25));
    if (totalLevel >= 1750) this.passiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.25));
    if (totalLevel >= 1800) this.rewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.6));
    if (totalLevel >= 1850)
      this.fieldTrainingPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 90000000000.0));
    if (totalLevel >= 1900) this.data.monster.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 20.0));
    if (totalLevel >= 1950) this.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 1.5));
    if (totalLevel >= 2000) this.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 90.0));
    if (totalLevel >= 2100) this.speedMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 1.5));
    if (totalLevel >= 2200) this.passiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.25));
    if (totalLevel >= 2300) this.rewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.7));
    if (totalLevel >= 2400)
      this.fieldTrainingPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 900000000000.0));
    if (totalLevel >= 2500) this.unlockedExpeditionSlotNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 1.0));
    if (totalLevel >= 2600) this.data.monster.petStatsMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 40.0));
    if (totalLevel >= 2700) this.data.monster.petRankCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 50.0));
    if (totalLevel >= 2800) this.expGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 1.75));
    if (totalLevel >= 2900) this.speedMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 1.75));
    if (totalLevel >= 3000) this.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 900.0));
    if (totalLevel >= 3100) this.data.monster.loyaltyCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 100.0));
    if (totalLevel >= 3200) this.passiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.25));
    if (totalLevel >= 3300) this.rewardMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Mul, () => 0.8));
    if (totalLevel >= 3400)
      this.fieldTrainingPassiveEffectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ExpeditionMilestone, MultiplierType.Add, () => 9000000000000.0));
  }

  GlobalInfo(kind: ExpeditionKind) {
    return this.globalInfoList[kind];
  }
}
