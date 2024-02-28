import { Multiplier } from "../Multiplier";
import { MultiplierInfo } from "../Multiplier";
import { Enums } from "../../Enums";

import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";
import { Element } from "../../type/Element";
import { Stats } from "../../type/Stats";
import { Parameter } from "../Parameter";
import { TitleKind } from "../../type/TitleKind";
import { QUEST } from "./QUEST";
import { QuestKind } from "../../type/QuestKind";

import { QuestKindGlobal } from "../../type/QuestKindGlobal";
import { GlobalQuestType } from "../../type/GlobalQuestType";
import { QuestKindTitle } from "../../type/QuestKindTitle";
import { DATA } from "..";

export class DataQuest {
  data: DATA;
  globalQuestList: QUEST[] = [];
  globalQuestListTutorial: QUEST[] = [];
  globalQuestListUpgrade: QUEST[] = [];
  globalQuestListNitro: QUEST[] = [];
  globalQuestListCapture: QUEST[] = [];
  globalQuestListAlchemy: QUEST[] = [];
  dailyQuestList: QUEST[] = [];
  titleQuestList: Array<Array<QUEST>> = Array(Enums.HeroKind);
  generalQuestList = Array(Enums.HeroKind);
  globalQuests: QUEST[] = [];
  dailyQuests: QUEST[];
  titleQuests = Array(Enums.HeroKind).fill([]);
  generalQuests;
  portalOrbBonusFromDailyQuest: Multiplier;
  //   isUnlockedSDRefreshTicketOnCartoDailyQuests: Unlock[] = new Unlock[5];
  sdRefreshTicketFromDailyQuest: Multiplier;
  acceptableNum: Multiplier[] = Array(Enums.HeroKind);
  quest: QUEST;
  generalQuestClearGain: Multiplier[] = Array(Enums.HeroKind);

  constructor(DATA: DATA) {
    this.data = DATA;
    for (let index = 0; index < this.acceptableNum.length; index++)
      this.acceptableNum[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 3.0));
    this.portalOrbBonusFromDailyQuest = new Multiplier();
    this.sdRefreshTicketFromDailyQuest = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    for (let index = 0; index < this.generalQuestClearGain.length; index++)
      this.generalQuestClearGain[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    //   this.globalQuestListTutorial.push(new GlobalQuest_Tutorial1(this, HeroKind.Warrior));
    //   this.globalQuestListTutorial.push(new GlobalQuest_Tutorial2(this, HeroKind.Warrior));
    //   this.globalQuestListTutorial.push(new GlobalQuest_Tutorial3(this, HeroKind.Warrior));
    //   this.globalQuestListTutorial.push(new GlobalQuest_Tutorial4(this, HeroKind.Warrior));
    //   this.globalQuestListTutorial.push(new GlobalQuest_Tutorial5(this, HeroKind.Warrior));
    //   this.globalQuestListTutorial.push(new GlobalQuest_Tutorial6(this, HeroKind.Warrior));
    //   this.globalQuestListTutorial.push(new GlobalQuest_Tutorial7(this, HeroKind.Warrior));
    //   this.globalQuestListTutorial.push(new GlobalQuest_Tutorial8(this, HeroKind.Warrior));
    //   this.globalQuestListTutorial.push(new GlobalQuest_Tutorial9(this, HeroKind.Warrior));
    //   this.globalQuestListTutorial.push(new GlobalQuest_Tutorial10(this, HeroKind.Warrior));
    //   this.globalQuestListTutorial.push(new GlobalQuest_Tutorial11(this, HeroKind.Warrior));
    //   this.globalQuestListTutorial.push(new GlobalQuest_Tutorial12(this, HeroKind.Warrior));
    //   this.globalQuestListTutorial.push(new GlobalQuest_Tutorial13(this, HeroKind.Warrior));
    //

    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade1(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade2(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade3(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade4(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade5(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade6(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade7(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade8(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade9(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade10(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade11(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade12(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade13(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade14(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade15(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade16(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade17(this, HeroKind.Warrior));
    //   this.globalQuestListUpgrade.push(new GlobalQuest_Upgrade18(this, HeroKind.Warrior));
    //   this.globalQuestList.AddRange((IEnumerable<QUEST>) this.globalQuestListUpgrade);

    this.globalQuestListTutorial.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Tutorial, kindGlobal: QuestKindGlobal.Expedition }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro1 }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro2 }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro3 }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro4 }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro5 }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro6 }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro7 }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro8 }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro9 }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro10 }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro11 }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro12 }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro13 }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro14 }));
    this.globalQuestListNitro.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Nitro, kindGlobal: QuestKindGlobal.Nitro15 }));

    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture1 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture2 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture3 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture4 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture5 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture6 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture7 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture8 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture9 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture10 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture11 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture12 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture13 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture14 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture15 }));
    this.globalQuestListCapture.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Capture, kindGlobal: QuestKindGlobal.Capture16 }));

    //   this.globalQuestList.AddRange((IEnumerable<QUEST>) this.globalQuestListNitro);

    //   this.globalQuestList.AddRange((IEnumerable<QUEST>) this.globalQuestListCapture);
    this.globalQuestListAlchemy.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Alchemy, kindGlobal: QuestKindGlobal.Alchemy1 }));
    this.globalQuestListAlchemy.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Alchemy, kindGlobal: QuestKindGlobal.Alchemy2 }));
    this.globalQuestListAlchemy.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Alchemy, kindGlobal: QuestKindGlobal.Alchemy3 }));
    this.globalQuestListAlchemy.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Alchemy, kindGlobal: QuestKindGlobal.Alchemy4 }));
    this.globalQuestListAlchemy.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Alchemy, kindGlobal: QuestKindGlobal.Alchemy5 }));
    this.globalQuestListAlchemy.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Alchemy, kindGlobal: QuestKindGlobal.Alchemy6 }));
    this.globalQuestListAlchemy.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Alchemy, kindGlobal: QuestKindGlobal.Alchemy7 }));
    this.globalQuestListAlchemy.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Alchemy, kindGlobal: QuestKindGlobal.Alchemy8 }));
    //   this.globalQuestList.AddRange((IEnumerable<QUEST>) this.globalQuestListAlchemy);
    this.globalQuestList.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Tutorial, kindGlobal: QuestKindGlobal.SD2 }));
    this.globalQuestList.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Tutorial, kindGlobal: QuestKindGlobal.SD3 }));
    this.globalQuestList.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Tutorial, kindGlobal: QuestKindGlobal.SD5 }));
    this.globalQuestList.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Tutorial, kindGlobal: QuestKindGlobal.SD6 }));
    this.globalQuestList.push(new QUEST(this.data, { kind: QuestKind.Global, globalQuestType: GlobalQuestType.Tutorial, kindGlobal: QuestKindGlobal.SD8 }));

    this.globalQuests = [...this.globalQuestListNitro, ...this.globalQuestListCapture, ...this.globalQuestListAlchemy, ...this.globalQuestList, ...this.globalQuestListTutorial];
    //   this.globalQuests = new QUEST[Enum.GetNames(typeof (QuestKindGlobal)).length];
    //   for (let index1 = 0; index1 < this.globalQuests.length; index1++) {
    //     for (let index2 = 0; index2 < this.globalQuestList.length; index2++) {
    //       if (this.globalQuestList[index2].kindGlobal == (QuestKindGlobal) index1) {
    //         this.globalQuests[index1] = this.globalQuestList[index2];
    //         break;
    //       }
    //     }
    //   }
    //   this.dailyQuestList.push(new DailyQuest_EC1(this, HeroKind.Warrior));
    //   this.dailyQuestList.push(new DailyQuest_EC2(this, HeroKind.Warrior));
    //   this.dailyQuestList.push(new DailyQuest_EC3(this, HeroKind.Warrior));
    //   this.dailyQuestList.push(new DailyQuest_EC4(this, HeroKind.Warrior));
    //   this.dailyQuestList.push(new DailyQuest_Cartographer1(this, HeroKind.Warrior));
    //   this.dailyQuestList.push(new DailyQuest_Cartographer2(this, HeroKind.Warrior));
    //   this.dailyQuestList.push(new DailyQuest_Cartographer3(this, HeroKind.Warrior));
    //   this.dailyQuestList.push(new DailyQuest_Cartographer4(this, HeroKind.Warrior));
    //   this.dailyQuestList.push(new DailyQuest_Cartographer5(this, HeroKind.Warrior));
    //   this.dailyQuests = new QUEST[Enum.GetNames(typeof (QuestKindDaily)).length];
    //   for (let index3 = 0; index3 < this.dailyQuests.length; index3++) {
    //     for (let index4 = 0; index4 < this.dailyQuestList.length; index4++) {
    //       if (this.dailyQuestList[index4].kindDaily == (QuestKindDaily) index3) {
    //         this.dailyQuests[index3] = this.dailyQuestList[index4];
    //         break;
    //       }
    //     }
    //   }
    //   this.titleQuests = new QUEST[Enum.GetNames(typeof (HeroKind)).length][];
    //   this.generalQuests = new QUEST[Enum.GetNames(typeof (HeroKind)).length][];
    for (let index = 0; index < this.titleQuestList.length; index++) {
      this.titleQuestList[index] = [];

      for (let i = 0; i < Enums.QuestKindTitle; i++) {
        const quest = QuestKindTitle[i];
        this.titleQuestList[index].push(new QUEST(this.data, { kind: QuestKind.Title, kindTitle: QuestKindTitle[quest], heroKind: index }));
      }

      // this.titleQuestList[index].push(new QUEST(this.#data, { kind: QuestKind.Title, kindTitle: QuestKindTitle.EquipmentSlotWeapon1, heroKind: index }));

      this.titleQuests = [...this.titleQuestList];
      //     for (let index6 = 0; index6 < this.titleQuests[index].length; index6++) {
      //       for (let index7 = 0; index7 < this.titleQuestList[index].length; index7++) {
      //         if (this.titleQuestList[index][index7].kindTitle == (QuestKindTitle) index6) {
      //           this.titleQuests[index][index6] = this.titleQuestList[index][index7];
      //           break;
      //         }
      //       }
    }
  }

  Start() {
    this.SetTitleEffectAll();
    for (let index = 0; index < this.globalQuests.length; index++) this.globalQuests[index].Start();
    // for (let index = 0; index < this.dailyQuests.length; index++) this.dailyQuests[index].Start();
    for (let index1 = 0; index1 < Enums.HeroKind; index1++) {
      for (let index2 = 0; index2 < this.titleQuests[index1].length; index2++) this.titleQuests[index1][index2].Start();
      //   for (let index3 = 0; index3 < this.generalQuests[index1].length; index3++) {
      //     this.generalQuests[index1][index3].Start();
      //     this.generalQuests[index1][index3].SetMastery();
      //   }
    }
  }

  TitleLevel(heroKind: HeroKind, kind: TitleKind) {
    let num = 0;
    for (let index = 0; index < this.titleQuests[heroKind].length; index++) {
      if (this.titleQuests[heroKind][index].rewardTitleKind == kind && this.titleQuests[heroKind][index].isCleared && this.titleQuests[heroKind][index].rewardTitleLevel > num) {
        num = this.titleQuests[heroKind][index].rewardTitleLevel;
      }
    }

    return num;
  }

  TitleEffectValue(heroKind: HeroKind, kind: TitleKind) {
    return Parameter.TitleEffectValue(kind, this.TitleLevel(heroKind, kind));
  }

  SetTitleEffectAll() {
    for (let kind = 0; kind < Enums.TitleKind; kind++) this.SetTitleEffect(kind);
  }

  SetTitleEffect(kind: TitleKind) {
    switch (kind) {
      case TitleKind.SkillMaster:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo1 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.SkillSlotNum(index).RegisterMultiplier(multiplierInfo1);
          const multiplierInfo2 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).sub);
          this.data.stats.HeroStats(index, Stats.SkillProficiencyGain).RegisterMultiplier(multiplierInfo2);
        }
        break;
      case TitleKind.MonsterDistinguisher:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo3 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.MonsterDistinguishMaxLevel(index).RegisterMultiplier(multiplierInfo3);
          const multiplierInfo4 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).sub);
          this.data.stats.MonsterCaptureMaxLevelIncrement(index).RegisterMultiplier(multiplierInfo4);
        }
        break;
      case TitleKind.EquipmentSlotWeapon:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);
          this.data.inventory.equipWeaponUnlockedNum[index].RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.EquipmentSlotArmor:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);
          this.data.inventory.equipArmorUnlockedNum[index].RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.EquipmentSlotJewelry:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);
          this.data.inventory.equipJewelryUnlockedNum[index].RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.PotionSlot:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);
          this.data.inventory.equipPotionUnlockedNum[index].RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.EquipmentProficiency:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.HeroStats(index, Stats.EquipmentProficiencyGain).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.PhysicalDamage:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Mul, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.ElementDamage(index, Element.Physical).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.FireDamage:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Mul, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.ElementDamage(index, Element.Fire).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.IceDamage:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Mul, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.ElementDamage(index, Element.Ice).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.ThunderDamage:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Mul, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.ElementDamage(index, Element.Thunder).RegisterMultiplier(multiplierInfo);
        }
        break;
      //
      case TitleKind.LightDamage:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Mul, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.ElementDamage(index, Element.Light).RegisterMultiplier(multiplierInfo);
        }
        //

        break;
      case TitleKind.DarkDamage:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Mul, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.ElementDamage(index, Element.Dark).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.Alchemist:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Mul, () => this.TitleEffectValue(index, kind).main);
          this.data.alchemy.mysteriousWaterProductionPerSec.RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.Survival:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => 0.5,
            () => false
          );
          this.data.stats.HeroStats(index, Stats.PhysCritChance).RegisterMultiplier(multiplierInfo);
          this.data.stats.HeroStats(index, Stats.MagCritChance).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.FireResistance:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo5 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.HeroStats(index, Stats.FireRes).RegisterMultiplier(multiplierInfo5);
          const multiplierInfo6 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).sub);
          this.data.stats.ElementInvalid(index, Element.Fire).RegisterMultiplier(multiplierInfo6);
        }
        break;
      case TitleKind.IceResistance:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo7 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.HeroStats(index, Stats.IceRes).RegisterMultiplier(multiplierInfo7);
          const multiplierInfo8 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).sub);
          this.data.stats.ElementInvalid(index, Element.Ice).RegisterMultiplier(multiplierInfo8);
        }
        break;
      case TitleKind.ThunderResistance:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo9 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.HeroStats(index, Stats.ThunderRes).RegisterMultiplier(multiplierInfo9);
          const multiplierInfo10 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).sub);
          this.data.stats.ElementInvalid(index, Element.Thunder).RegisterMultiplier(multiplierInfo10);
        }
        break;
      case TitleKind.LightResistance:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo11 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.HeroStats(index, Stats.LightRes).RegisterMultiplier(multiplierInfo11);
          const multiplierInfo12 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).sub);
          this.data.stats.ElementInvalid(index, Element.Light).RegisterMultiplier(multiplierInfo12);
        }
        break;
      case TitleKind.DarkResistance:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo13 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.HeroStats(index, Stats.DarkRes).RegisterMultiplier(multiplierInfo13);
          const multiplierInfo14 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).sub);
          this.data.stats.ElementInvalid(index, Element.Dark).RegisterMultiplier(multiplierInfo14);
        }
        break;
      case TitleKind.Cooperation:
        // TODO backgroundGainRate
        // for (let index = 0; index < Enums.HeroKind; index++) {
        //   const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);

        //   //   this.#data.guild.Member(index).backgroundGainRate.RegisterMultiplier(multiplierInfo);
        // }
        break;
      case TitleKind.DebuffResistance:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.HeroStats(index, Stats.DebuffRes).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.MoveSpeed:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Mul, () => this.TitleEffectValue(index, kind).main);
          this.data.stats.HeroStats(index, Stats.MoveSpeed).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.Quester:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Add, () => this.TitleEffectValue(index, kind).main);
          this.generalQuestClearGain[index].RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.ExplorerOfSD:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo15 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Mul, () => this.TitleEffectValue(index, kind).main);
          this.data.battles[index].superDungeonCtrl.damageMultiplier.RegisterMultiplier(multiplierInfo15);
          const multiplierInfo16 = new MultiplierInfo(MultiplierKind.Title, MultiplierType.Mul, () => this.TitleEffectValue(index, kind).sub);
          this.data.superStats.Hero(index).fameGain.RegisterMultiplier(multiplierInfo16);
        }
        break;
    }
  }
}
