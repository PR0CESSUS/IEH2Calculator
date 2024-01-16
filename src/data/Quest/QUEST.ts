import { Multiplier } from "../../Multiplier";
import { MultiplierInfo } from "../../Multiplier";
import { Enums } from "../../Enums";
import { ResourceKind } from "../../type/ResourceKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { PotionKind } from "../../type/PotionKind";
import { MonsterColor } from "../../type/MonsterColor";
import { QuestKindGlobal } from "../../type/QuestKindGlobal";
import { QuestKind } from "../../type/QuestKind";
import { QuestType } from "../../type/QuestType";
import { QuestKindTitle } from "../../type/QuestKindTitle";
import { GlobalQuestType } from "../../type/GlobalQuestType";
import { TitleKind } from "../../type/TitleKind";
import { QuestKindGeneral } from "../../type/QuestKindGeneral";
import { QuestKindDaily } from "../../type/QuestKindDaily";
import { QuestController } from "./index";

export class QUEST {
  questCtrl: QuestController;
  kind: QuestKind;
  type: QuestType;
  heroKind: HeroKind;
  kindGlobal: QuestKindGlobal;
  kindTitle: QuestKindTitle;
  kindGeneral: QuestKindGeneral;
  kindDaily: QuestKindDaily;
  globalQuestType: GlobalQuestType;
  //   masteryList: QuestMastery[] = [];
  rewardExpMultiplier: Multiplier;
  rebirthPointGainMultiplier: Multiplier;
  //   unlockConditions = new List<Func<bool>>();
  unlockHeroLevel = () => 0;
  unlockQuests: QUEST[] = [];
  //   clearConditions = new List<Func<bool>>();
  //   rewardUIAction: Action;
  rewardExp: Function = () => 0.0;
  rewardFame;
  rewardGuildExp: Function = () => 0.0;
  rewardGold: Function = () => 0.0;
  rewardNitro: Function = () => 0.0;
  rewardEC = () => 0;
  //   rewardPotion = new Dictionary<Func<PotionKind>, Func<long>>();
  //   rewardMaterial = new Dictionary<Func<MaterialKind>, Func<long>>();
  //   rewardMaterialNumber = new Dictionary<Func<NUMBER>, Func<long>>();
  rewardTitleKind: TitleKind;
  rewardTitleLevel;
  rewardPortalOrb: Function = () => 0.0;
  rewardSDRefreshTicket: Function = () => 0.0;
  //   bringRequiredMaterials = new Dictionary<MaterialKind, double>();
  //   bringRequiredResources = new Dictionary<ResourceKind, double>();
  //   captureTargetMonster: MonsterGlobalInformation;
  captureRequiredNum: Function = () => 0.0;
  //   defeatTargetMonster: MonsterGlobalInformation;
  defeatRequredDefeatNum: Function = () => 0.0;
  //   completeTargetArea: AREA;
  areaRequredCompletedNum: Function = () => 0.0;
  porterRequiredMovedDistance;
  elementTriggeredRequiredNum;
  questerRequiredClearNum;
  //   questingArea: AREA;

  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    this.rewardExpMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.rebirthPointGainMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.questCtrl = questCtrl;
    this.heroKind = heroKind;
    this.rewardExp = () => {
      return 0;
      //   if (this.kind == QuestKind.Title)
      //     return this.type == QuestType.Bring ? 0.0 : Math.floor(Parameter.RequiredExp(this.HeroLevelFactor()) / 100.0) * 50.0;
      //   if (this.kind != QuestKind.General) return 0.0;
      //   return this.type == QuestType.Bring
      //     ? Math.floor(Parameter.RequiredExp(this.HeroLevelFactor(), true) / 100.0) * 5.0
      //     : Math.floor(Parameter.RequiredExp(this.HeroLevelFactor(), true) / 100.0) * 20.0;
    };
  }

  HeroLevelFactor() {
    if (this.unlockHeroLevel() >= 1000) return 0.0;
    return this.unlockHeroLevel() >= 200
      ? 200.0 + (this.unlockHeroLevel() - 200.0) * (1.0 - 0.0005 * this.unlockHeroLevel())
      : this.unlockHeroLevel();
  }

  Start() {
    // this.SetQuetingArea();
    this.StartQuest();
    this.SetRewardEffect();
  }
  SetRewardEffect() {}
  StartQuest() {}

  IsUnlocked() {
    // if ((this.kind == QuestKind.General && this.isPersistentUnlocked) || this.isCleared) return true;
    // for (let index = 0; index < this.unlockConditions.length; index++) {
    //   if (!this.unlockConditions[index]()) return false;
    // }
    // for (let index = 0; index < this.unlockQuests.length; index++) {
    //   if (this.kind == QuestKind.General) {
    //     if (!this.unlockQuests[index].isClearedOnce) return false;
    //   } else if (!this.unlockQuests[index].isCleared) return false;
    // }
    return true;
  }

  get totalClearedNumGeneral() {
    return this.kind != QuestKind.General ? 0.0 : globalThis.data.source.totalGeneralQuestClearedNums[this.kindGeneral];
  }
  set totalClearedNumGeneral(value) {
    globalThis.data.source.totalGeneralQuestClearedNums[this.kindGeneral] = value;
  }

  get totalClearedNumGeneralThisAscension() {
    return this.kind != QuestKind.General ? 0.0 : globalThis.data.source.totalGeneralQuestClearedNums[this.kindGeneral];
  }
  set totalClearedNumGeneralThisAscension(value) {
    globalThis.data.source.totalGeneralQuestClearedNums[this.kindGeneral] = value;
  }

  get maxReachedClearedNumGeneral() {
    return this.kind != QuestKind.General ? 0.0 : globalThis.data.source.maxReachedGeneralQuestClearedNums[this.kindGeneral];
  }
  set maxReachedClearedNumGeneral(value) {
    globalThis.data.source.maxReachedGeneralQuestClearedNums[this.kindGeneral] = value;
  }

  get isPersistentUnlocked() {
    return this.kind == QuestKind.General && globalThis.data.source.isPersistentUnlockedQuestGeneral[this.kindGeneral];
  }
  set isPersistentUnlocked(value) {
    globalThis.data.source.isPersistentUnlockedQuestGeneral[this.kindGeneral] = value;
  }

  get isClearedOnce() {
    return this.kind != QuestKind.General || globalThis.data.source.isClearedQuestGeneralOnce[this.kindGeneral];
  }
  set isClearedOnce(value) {
    globalThis.data.source.isClearedQuestGeneralOnce[this.kindGeneral] = value;
  }

  get isCleared() {
    switch (this.kind) {
      case QuestKind.Global:
        return globalThis.data.source.isClearedQuestsGlobal[this.kindGlobal];
      case QuestKind.Title:
        switch (this.heroKind) {
          case HeroKind.Warrior:
            return globalThis.data.source.isClearedQuestsTitleWarrior[this.kindTitle];
          case HeroKind.Wizard:
            return globalThis.data.source.isClearedQuestsTitleWizard[this.kindTitle];
          case HeroKind.Angel:
            return globalThis.data.source.isClearedQuestsTitleAngel[this.kindTitle];
          case HeroKind.Thief:
            return globalThis.data.source.isClearedQuestsTitleThief[this.kindTitle];
          case HeroKind.Archer:
            return globalThis.data.source.isClearedQuestsTitleArcher[this.kindTitle];
          case HeroKind.Tamer:
            return globalThis.data.source.isClearedQuestsTitleTamer[this.kindTitle];
        }

      default:
        return false;
    }

    return globalThis.data.source.dailyQuestMonsterSpecies[this.kindDaily];
  }
  //   set isCleared(value) {
  //     globalThis.data.source.dailyQuestMonsterSpecies[this.kindDaily] = value;
  //   }

  //   DefeatTargetMonsterDefeatedNum() {
  //     return !this.isAccepted || this.isCleared ? 0.0 : Math.max(0.0, this.defeatTargetMonsterDefeatNum - this.initDefeatedNum);
  //   }

  //   AreaCompletedNum() {
  //     return !this.isAccepted || this.isCleared ? 0.0 : Math.max(0.0, this.areaCompletedNum - this.initCompletedAreaNum);
  //   }

  //   get areaCompletedNum() {
  //     return this.completeTargetArea.completedNum.TotalCompletedNum();
  //   }
}
