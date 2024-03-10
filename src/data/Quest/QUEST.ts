import { Multiplier } from "../Multiplier";
import { MultiplierInfo } from "../Multiplier";

import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";

import { QuestKindGlobal } from "../../type/QuestKindGlobal";
import { QuestKind } from "../../type/QuestKind";
import { QuestType } from "../../type/QuestType";
import { QuestKindTitle } from "../../type/QuestKindTitle";
import { GlobalQuestType } from "../../type/GlobalQuestType";
import { TitleKind } from "../../type/TitleKind";
import { QuestKindGeneral } from "../../type/QuestKindGeneral";
import { QuestKindDaily } from "../../type/QuestKindDaily";
import { DataQuest } from "./index";
import { DATA } from "..";
import { Stats } from "../../type/Stats";
import { Enums } from "../../Enums";
import { Localization } from "../../localization";
type QuestKindData =
  | {
      kind: QuestKind.Global;
      globalQuestType: GlobalQuestType;
      kindGlobal: QuestKindGlobal;
    }
  | {
      kind: QuestKind.Title;
      kindTitle: QuestKindTitle;
      heroKind: HeroKind;
    };

export class QUEST {
  data: DATA;
  questCtrl: DataQuest;
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
  rewardTitleKind: TitleKind;
  rewardTitleLevel;

  constructor(DATA: DATA, kindData: QuestKindData) {
    this.data = DATA;

    this.kind = kindData.kind;
    this.questCtrl = DATA.quest;
    // this.rewardExpMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    // this.rebirthPointGainMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));

    switch (kindData.kind) {
      case QuestKind.Global:
        this.globalQuestType = kindData.globalQuestType;
        this.kindGlobal = kindData.kindGlobal;
        break;
      case QuestKind.Title:
        this.kindTitle = kindData.kindTitle;
        this.heroKind = kindData.heroKind;
        this.rewardTitleKind = this.getTitleKind();
        this.rewardTitleLevel = this.getTitleLevel();
        break;
      default:
        break;
    }
  }

  getTitleKind() {
    switch (this.kindTitle) {
      case QuestKindTitle.EquipmentSlotWeapon1:
      case QuestKindTitle.EquipmentSlotWeapon2:
      case QuestKindTitle.EquipmentSlotWeapon3:
      case QuestKindTitle.EquipmentSlotWeapon4:
      case QuestKindTitle.EquipmentSlotWeapon5:
      case QuestKindTitle.EquipmentSlotWeapon6:
        return TitleKind.EquipmentSlotWeapon;
      case QuestKindTitle.EquipmentSlotArmor1:
      case QuestKindTitle.EquipmentSlotArmor2:
      case QuestKindTitle.EquipmentSlotArmor3:
      case QuestKindTitle.EquipmentSlotArmor4:
      case QuestKindTitle.EquipmentSlotArmor5:
      case QuestKindTitle.EquipmentSlotArmor6:
        return TitleKind.EquipmentSlotArmor;
      case QuestKindTitle.EquipmentSlotJewelry1:
      case QuestKindTitle.EquipmentSlotJewelry2:
      case QuestKindTitle.EquipmentSlotJewelry3:
      case QuestKindTitle.EquipmentSlotJewelry4:
      case QuestKindTitle.EquipmentSlotJewelry5:
      case QuestKindTitle.EquipmentSlotJewelry6:
        return TitleKind.EquipmentSlotJewelry;
      case QuestKindTitle.Alchemist1:
      case QuestKindTitle.Alchemist2:
      case QuestKindTitle.Alchemist3:
      case QuestKindTitle.Alchemist4:
      case QuestKindTitle.Alchemist5:
        return TitleKind.Alchemist;
      case QuestKindTitle.DarkAttack1:
      case QuestKindTitle.DarkAttack2:
      case QuestKindTitle.DarkAttack3:
      case QuestKindTitle.DarkAttack4:
        return TitleKind.DarkDamage;
      case QuestKindTitle.LightAttack1:
      case QuestKindTitle.LightAttack2:
      case QuestKindTitle.LightAttack3:
      case QuestKindTitle.LightAttack4:
        return TitleKind.LightDamage;
      case QuestKindTitle.EquipmentProf1:
      case QuestKindTitle.EquipmentProf2:
      case QuestKindTitle.EquipmentProf3:
      case QuestKindTitle.EquipmentProf4:
      case QuestKindTitle.EquipmentProf5:
        return TitleKind.EquipmentProficiency;
      case QuestKindTitle.DarkResistance1:
      case QuestKindTitle.DarkResistance2:
      case QuestKindTitle.DarkResistance3:
      case QuestKindTitle.DarkResistance4:
      case QuestKindTitle.DarkResistance5:
        return TitleKind.DarkResistance;
      case QuestKindTitle.FireResistance1:
      case QuestKindTitle.FireResistance2:
      case QuestKindTitle.FireResistance3:
      case QuestKindTitle.FireResistance4:
      case QuestKindTitle.FireResistance5:
        return TitleKind.FireResistance;
      case QuestKindTitle.ThunderResistance1:
      case QuestKindTitle.ThunderResistance2:
      case QuestKindTitle.ThunderResistance3:
      case QuestKindTitle.ThunderResistance4:
      case QuestKindTitle.ThunderResistance5:
        return TitleKind.ThunderResistance;
      case QuestKindTitle.IceResistance1:
      case QuestKindTitle.IceResistance2:
      case QuestKindTitle.IceResistance3:
      case QuestKindTitle.IceResistance4:
      case QuestKindTitle.IceResistance5:
        return TitleKind.IceResistance;
      case QuestKindTitle.LightResistance1:
      case QuestKindTitle.LightResistance2:
      case QuestKindTitle.LightResistance3:
      case QuestKindTitle.LightResistance4:
      case QuestKindTitle.LightResistance5:
        return TitleKind.LightResistance;
      case QuestKindTitle.FireAttack1:
      case QuestKindTitle.FireAttack2:
      case QuestKindTitle.FireAttack3:
      case QuestKindTitle.FireAttack4:
        return TitleKind.FireDamage;
      case QuestKindTitle.IceAttack1:
      case QuestKindTitle.IceAttack2:
      case QuestKindTitle.IceAttack3:
      case QuestKindTitle.IceAttack4:
        return TitleKind.IceDamage;
      case QuestKindTitle.SkillMaster1:
      case QuestKindTitle.SkillMaster2:
      case QuestKindTitle.SkillMaster3:
      case QuestKindTitle.SkillMaster4:
        return TitleKind.SkillMaster;
      case QuestKindTitle.ThunderAttack1:
      case QuestKindTitle.ThunderAttack2:
      case QuestKindTitle.ThunderAttack3:
      case QuestKindTitle.ThunderAttack4:
        return TitleKind.ThunderDamage;
      case QuestKindTitle.PhysicalAttack1:
      case QuestKindTitle.PhysicalAttack2:
      case QuestKindTitle.PhysicalAttack3:
      case QuestKindTitle.PhysicalAttack4:
        return TitleKind.PhysicalDamage;
      case QuestKindTitle.PotionSlot1:
      case QuestKindTitle.PotionSlot2:
      case QuestKindTitle.PotionSlot3:
        return TitleKind.PotionSlot;
      case QuestKindTitle.Cooperation1:
      case QuestKindTitle.Cooperation2:
      case QuestKindTitle.Cooperation3:
        return TitleKind.Cooperation;
      case QuestKindTitle.Survival1:
      case QuestKindTitle.Survival2:
      case QuestKindTitle.Survival3:
      case QuestKindTitle.Survival4:
        return TitleKind.Survival;
      case QuestKindTitle.ExplorerOfSD1:
      case QuestKindTitle.ExplorerOfSD2:
      case QuestKindTitle.ExplorerOfSD3:
      case QuestKindTitle.ExplorerOfSD4:
      case QuestKindTitle.ExplorerOfSD5:
      case QuestKindTitle.ExplorerOfSD6:
      case QuestKindTitle.ExplorerOfSD7:
      case QuestKindTitle.ExplorerOfSD8:
      case QuestKindTitle.ExplorerOfSD9:
      case QuestKindTitle.ExplorerOfSD10:
      case QuestKindTitle.ExplorerOfSD11:
      case QuestKindTitle.ExplorerOfSD12:
      case QuestKindTitle.ExplorerOfSD13:
      case QuestKindTitle.ExplorerOfSD14:
      case QuestKindTitle.ExplorerOfSD15:
        return TitleKind.ExplorerOfSD;
      case QuestKindTitle.MetalHunter1:
      case QuestKindTitle.MetalHunter2:
      case QuestKindTitle.MetalHunter3:
      case QuestKindTitle.MetalHunter4:
      case QuestKindTitle.MetalHunter5:
      case QuestKindTitle.MetalHunter6:
      case QuestKindTitle.MetalHunter7:
      case QuestKindTitle.MetalHunter8:
      case QuestKindTitle.MetalHunter9:
        return TitleKind.MetalHunter;
      case QuestKindTitle.Porter1:
      case QuestKindTitle.Porter2:
      case QuestKindTitle.Porter3:
      case QuestKindTitle.Porter4:
      case QuestKindTitle.Porter5:
      case QuestKindTitle.Porter6:
        return TitleKind.MoveSpeed;
      case QuestKindTitle.Quester1:
      case QuestKindTitle.Quester2:
      case QuestKindTitle.Quester3:
      case QuestKindTitle.Quester4:
      case QuestKindTitle.Quester5:
      case QuestKindTitle.Quester6:
      case QuestKindTitle.Quester7:
      case QuestKindTitle.Quester8:
      case QuestKindTitle.Quester9:
      case QuestKindTitle.Quester10:
        return TitleKind.Quester;
      case QuestKindTitle.MonsterDistinguisher1:
      case QuestKindTitle.MonsterDistinguisher2:
      case QuestKindTitle.MonsterDistinguisher3:
      case QuestKindTitle.MonsterDistinguisher4:
      case QuestKindTitle.MonsterDistinguisher5:
      case QuestKindTitle.MonsterDistinguisher6:
      case QuestKindTitle.MonsterDistinguisher7:
      case QuestKindTitle.MonsterDistinguisher8:
        return TitleKind.MonsterDistinguisher;
      default:
        return 0;
    }
  }

  getTitleLevel() {
    switch (this.kindTitle) {
      case QuestKindTitle.EquipmentSlotWeapon1:
      case QuestKindTitle.EquipmentSlotArmor1:
      case QuestKindTitle.EquipmentSlotJewelry1:
      case QuestKindTitle.Alchemist1:
      case QuestKindTitle.ExplorerOfSD1:
      case QuestKindTitle.EquipmentProf1:
      case QuestKindTitle.DarkAttack1:
      case QuestKindTitle.FireAttack1:
      case QuestKindTitle.IceAttack1:
      case QuestKindTitle.ThunderAttack1:
      case QuestKindTitle.LightAttack1:
      case QuestKindTitle.LightResistance1:
      case QuestKindTitle.DarkResistance1:
      case QuestKindTitle.FireResistance1:
      case QuestKindTitle.ThunderResistance1:
      case QuestKindTitle.IceResistance1:
      case QuestKindTitle.PhysicalAttack1:
      case QuestKindTitle.PotionSlot1:
      case QuestKindTitle.SkillMaster1:
      case QuestKindTitle.Survival1:
      case QuestKindTitle.Cooperation1:
      case QuestKindTitle.MetalHunter1:
      case QuestKindTitle.Porter1:
      case QuestKindTitle.Quester1:
      case QuestKindTitle.MonsterDistinguisher1:
        return 1;
      case QuestKindTitle.EquipmentSlotWeapon2:
      case QuestKindTitle.EquipmentSlotArmor2:
      case QuestKindTitle.EquipmentSlotJewelry2:
      case QuestKindTitle.Alchemist2:
      case QuestKindTitle.ExplorerOfSD2:
      case QuestKindTitle.EquipmentProf2:
      case QuestKindTitle.DarkAttack2:
      case QuestKindTitle.FireAttack2:
      case QuestKindTitle.IceAttack2:
      case QuestKindTitle.ThunderAttack2:
      case QuestKindTitle.LightAttack2:
      case QuestKindTitle.LightResistance2:
      case QuestKindTitle.DarkResistance2:
      case QuestKindTitle.FireResistance2:
      case QuestKindTitle.ThunderResistance2:
      case QuestKindTitle.IceResistance2:
      case QuestKindTitle.PhysicalAttack2:
      case QuestKindTitle.PotionSlot2:
      case QuestKindTitle.SkillMaster2:
      case QuestKindTitle.Survival2:
      case QuestKindTitle.Cooperation2:
      case QuestKindTitle.MetalHunter2:
      case QuestKindTitle.Porter2:
      case QuestKindTitle.Quester2:
      case QuestKindTitle.MonsterDistinguisher2:
        return 2;
      case QuestKindTitle.EquipmentSlotWeapon3:
      case QuestKindTitle.EquipmentSlotArmor3:
      case QuestKindTitle.EquipmentSlotJewelry3:
      case QuestKindTitle.Alchemist3:
      case QuestKindTitle.ExplorerOfSD3:
      case QuestKindTitle.EquipmentProf3:
      case QuestKindTitle.DarkAttack3:
      case QuestKindTitle.FireAttack3:
      case QuestKindTitle.IceAttack3:
      case QuestKindTitle.ThunderAttack3:
      case QuestKindTitle.LightAttack3:
      case QuestKindTitle.LightResistance3:
      case QuestKindTitle.DarkResistance3:
      case QuestKindTitle.FireResistance3:
      case QuestKindTitle.ThunderResistance3:
      case QuestKindTitle.IceResistance3:
      case QuestKindTitle.PhysicalAttack3:
      case QuestKindTitle.PotionSlot3:
      case QuestKindTitle.SkillMaster3:
      case QuestKindTitle.Survival3:
      case QuestKindTitle.Cooperation3:
      case QuestKindTitle.MetalHunter3:
      case QuestKindTitle.Porter3:
      case QuestKindTitle.Quester3:
      case QuestKindTitle.MonsterDistinguisher3:
        return 3;
      case QuestKindTitle.EquipmentSlotWeapon4:
      case QuestKindTitle.EquipmentSlotArmor4:
      case QuestKindTitle.EquipmentSlotJewelry4:
      case QuestKindTitle.Alchemist4:
      case QuestKindTitle.ExplorerOfSD4:
      case QuestKindTitle.EquipmentProf4:
      case QuestKindTitle.DarkAttack4:
      case QuestKindTitle.FireAttack4:
      case QuestKindTitle.IceAttack4:
      case QuestKindTitle.ThunderAttack4:
      case QuestKindTitle.LightAttack4:
      case QuestKindTitle.LightResistance4:
      case QuestKindTitle.DarkResistance4:
      case QuestKindTitle.FireResistance4:
      case QuestKindTitle.ThunderResistance4:
      case QuestKindTitle.IceResistance4:
      case QuestKindTitle.PhysicalAttack4:
      case QuestKindTitle.SkillMaster4:
      case QuestKindTitle.Survival4:
      case QuestKindTitle.MetalHunter4:
      case QuestKindTitle.Porter4:
      case QuestKindTitle.Quester4:
      case QuestKindTitle.MonsterDistinguisher4:
        return 4;
      case QuestKindTitle.EquipmentSlotWeapon5:
      case QuestKindTitle.EquipmentSlotArmor5:
      case QuestKindTitle.EquipmentSlotJewelry5:
      case QuestKindTitle.Alchemist5:
      case QuestKindTitle.ExplorerOfSD5:
      case QuestKindTitle.EquipmentProf5:
      case QuestKindTitle.ThunderResistance5:
      case QuestKindTitle.LightResistance5:
      case QuestKindTitle.DarkResistance5:
      case QuestKindTitle.FireResistance5:
      case QuestKindTitle.IceResistance5:
      case QuestKindTitle.MetalHunter5:
      case QuestKindTitle.Porter5:
      case QuestKindTitle.Quester5:
      case QuestKindTitle.MonsterDistinguisher5:
        return 5;
      case QuestKindTitle.EquipmentSlotWeapon6:
      case QuestKindTitle.EquipmentSlotArmor6:
      case QuestKindTitle.EquipmentSlotJewelry6:
      case QuestKindTitle.ExplorerOfSD6:
      case QuestKindTitle.MetalHunter6:
      case QuestKindTitle.Porter6:
      case QuestKindTitle.Quester6:
      case QuestKindTitle.MonsterDistinguisher6:
        return 6;
      case QuestKindTitle.ExplorerOfSD7:
      case QuestKindTitle.MetalHunter7:
      case QuestKindTitle.Quester7:
      case QuestKindTitle.MonsterDistinguisher7:
        return 7;
      case QuestKindTitle.ExplorerOfSD8:
      case QuestKindTitle.MetalHunter8:
      case QuestKindTitle.Quester8:
      case QuestKindTitle.MonsterDistinguisher8:
        return 8;
      case QuestKindTitle.ExplorerOfSD9:
      case QuestKindTitle.MetalHunter9:
      case QuestKindTitle.Quester9:
        return 9;
      case QuestKindTitle.ExplorerOfSD10:
      case QuestKindTitle.Quester10:
        return 10;
      case QuestKindTitle.ExplorerOfSD11:
        return 11;
      case QuestKindTitle.ExplorerOfSD12:
        return 12;
      case QuestKindTitle.ExplorerOfSD13:
        return 13;
      case QuestKindTitle.ExplorerOfSD14:
        return 14;
      case QuestKindTitle.ExplorerOfSD15:
        return 15;
      default:
        return 0;
    }
  }

  Start() {
    // this.SetQuetingArea();
    this.StartQuest();
    this.SetRewardEffect();
  }
  SetRewardEffect() {
    switch (this.kindGlobal) {
      case QuestKindGlobal.Nitro2:
        this.SetRewardNitro(1000);
        break;

      case QuestKindGlobal.Nitro3:
        this.SetRewardNitro(2000);
        break;
      case QuestKindGlobal.Nitro4:
        this.SetRewardNitro(3000);
        break;
      case QuestKindGlobal.Nitro5:
        this.SetRewardNitro(4000);
        break;
      case QuestKindGlobal.Nitro6:
        this.SetRewardNitro(5000);

        break;
      case QuestKindGlobal.Nitro7:
        this.SetRewardNitro(6000);
        break;
      case QuestKindGlobal.Nitro8:
        this.SetRewardNitro(7000);
        break;
      case QuestKindGlobal.Capture1:
        this.SetRewardCapture(0.1);
        break;
      case QuestKindGlobal.Capture2:
        this.SetRewardCapture(0.2);
        break;
      case QuestKindGlobal.Capture3:
        this.SetRewardCapture(0.3);
        break;
      case QuestKindGlobal.Capture4:
        this.SetRewardCapture(0.4);
        break;
      case QuestKindGlobal.Capture5:
        this.SetRewardCapture(0.5);
        break;
      case QuestKindGlobal.Alchemy1:
        this.SetReward(this.data.alchemy.catalyst.criticalChanceMultiplier, MultiplierType.Mul, 0.25);
        break;
      case QuestKindGlobal.Alchemy2:
        this.SetReward(this.data.alchemy.maxMysteriousWaterExpandedCapNum, MultiplierType.Add, 100.0);
        break;
      case QuestKindGlobal.Alchemy3:
        this.SetReward(this.data.potion.potionMaxLevel, MultiplierType.Add, 25.0);
        break;
      case QuestKindGlobal.Alchemy4:
        this.SetReward(this.data.alchemy.catalyst.catalystLevelCap, MultiplierType.Add, 25.0);
        break;
      case QuestKindGlobal.Alchemy5:
        this.SetReward(this.data.alchemy.catalyst.catalystCostReduction, MultiplierType.Add, 0.25);
        break;
      case QuestKindGlobal.Alchemy6:
        this.SetReward(this.data.alchemy.catalyst.criticalChanceMultiplier, MultiplierType.Mul, 0.25);
        this.SetReward(this.data.alchemy.maxMysteriousWaterExpandedCapNum, MultiplierType.Add, 250.0);
        break;
      case QuestKindGlobal.Alchemy7:
        this.SetReward(this.data.potion.potionMaxLevel, MultiplierType.Add, 25.0);
        this.SetReward(this.data.alchemy.catalyst.catalystLevelCap, MultiplierType.Add, 25.0);
        break;
      case QuestKindGlobal.Alchemy8:
        this.SetReward(this.data.alchemy.alchemyPointGainMultiplier, MultiplierType.Add, 1.0);
        this.SetReward(this.data.alchemy.catalyst.catalystCostReduction, MultiplierType.Add, 0.25);
        break;
      case QuestKindGlobal.Upgrade9:
        break;
      case QuestKindGlobal.Upgrade10:
        break;
      case QuestKindGlobal.Upgrade11:
        break;
      case QuestKindGlobal.Upgrade12:
        break;
      case QuestKindGlobal.Upgrade13:
        break;
      case QuestKindGlobal.Nitro9:
        this.SetRewardNitro(8000);
        break;
      case QuestKindGlobal.Nitro10:
        this.SetRewardNitro(9000);
        break;
      case QuestKindGlobal.Nitro11:
        this.SetRewardNitro(10000);
        break;
      case QuestKindGlobal.Nitro12:
        this.SetRewardNitro(20000);
        break;
      case QuestKindGlobal.Nitro13:
        this.SetRewardNitro(30000);
        break;
      case QuestKindGlobal.Nitro14:
        this.SetRewardNitro(40000);
        break;
      case QuestKindGlobal.Nitro15:
        this.SetRewardNitro(50000);
        break;
      case QuestKindGlobal.Capture6:
        this.SetRewardCapture(0.75);
        break;
      case QuestKindGlobal.Capture7:
        this.SetRewardCapture(1);
        break;
      case QuestKindGlobal.Capture8:
        this.SetRewardCapture(2);
        break;
      case QuestKindGlobal.Capture9:
        this.SetRewardCapture(3);
        break;
      case QuestKindGlobal.Capture10:
        this.SetRewardCapture(5);
        break;
      case QuestKindGlobal.Capture11:
        this.SetRewardCapture(10);
        break;
      case QuestKindGlobal.Capture12:
        this.SetRewardCapture(50);
        break;
      case QuestKindGlobal.Capture13:
        this.SetRewardCapture(100);
        break;
      case QuestKindGlobal.Capture14:
        this.SetRewardCapture(150);
        break;
      case QuestKindGlobal.Capture15:
        this.SetRewardCapture(250);
        break;
      case QuestKindGlobal.Capture16:
        this.SetRewardCapture(500);
        break;

      case QuestKindGlobal.SD2:
        for (let index = 0; index < Enums.HeroKind; index++) this.SetReward(this.data.superStats.Hero(index).fameGain, MultiplierType.Mul, 0.1);
        break;
      case QuestKindGlobal.SD3:
        for (let index = 0; index < Enums.HeroKind; index++) this.SetReward(this.data.superStats.Hero(index).fameGain, MultiplierType.Mul, 0.2);
        break;
      case QuestKindGlobal.SD5:
        for (let index = 0; index < Enums.HeroKind; index++) this.SetReward(this.data.superStats.Hero(index).fameGain, MultiplierType.Mul, 0.3);
        break;
      case QuestKindGlobal.SD6:
        for (let index = 0; index < Enums.HeroKind; index++) this.SetReward(this.data.superStats.Hero(index).fameGain, MultiplierType.Mul, 0.4);
        break;
      case QuestKindGlobal.SD8:
        for (let index = 0; index < Enums.HeroKind; index++) this.SetReward(this.data.battles[index].superDungeonCtrl.sdChallengeBossDamageMultiplier, MultiplierType.Mul, 0.5);
        break;
      case QuestKindGlobal.Expedition:
        this.data.expedition.unlockedExpeditionSlotNum.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Quest,
            MultiplierType.Add,
            () => 1,
            () => this.isCleared
          )
        );
        break;
      default:
        break;
    }
  }
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
    return this.kind != QuestKind.General ? 0.0 : this.data.source.totalGeneralQuestClearedNums[this.kindGeneral];
  }
  set totalClearedNumGeneral(value) {
    this.data.source.totalGeneralQuestClearedNums[this.kindGeneral] = value;
  }

  get totalClearedNumGeneralThisAscension() {
    return this.kind != QuestKind.General ? 0.0 : this.data.source.totalGeneralQuestClearedNums[this.kindGeneral];
  }
  set totalClearedNumGeneralThisAscension(value) {
    this.data.source.totalGeneralQuestClearedNums[this.kindGeneral] = value;
  }

  get maxReachedClearedNumGeneral() {
    return this.kind != QuestKind.General ? 0.0 : this.data.source.maxReachedGeneralQuestClearedNums[this.kindGeneral];
  }
  set maxReachedClearedNumGeneral(value) {
    this.data.source.maxReachedGeneralQuestClearedNums[this.kindGeneral] = value;
  }

  get isPersistentUnlocked() {
    return this.kind == QuestKind.General && this.data.source.isPersistentUnlockedQuestGeneral[this.kindGeneral];
  }
  set isPersistentUnlocked(value) {
    this.data.source.isPersistentUnlockedQuestGeneral[this.kindGeneral] = value;
  }

  get isClearedOnce() {
    return this.kind != QuestKind.General || this.data.source.isClearedQuestGeneralOnce[this.kindGeneral];
  }
  set isClearedOnce(value) {
    this.data.source.isClearedQuestGeneralOnce[this.kindGeneral] = value;
  }

  get isCleared() {
    switch (this.kind) {
      case QuestKind.Global:
        return this.data.source.isClearedQuestsGlobal[this.kindGlobal];
      case QuestKind.Title:
        switch (this.heroKind) {
          case HeroKind.Warrior:
            return this.data.source.isClearedQuestsTitleWarrior[this.kindTitle];
          case HeroKind.Wizard:
            return this.data.source.isClearedQuestsTitleWizard[this.kindTitle];
          case HeroKind.Angel:
            return this.data.source.isClearedQuestsTitleAngel[this.kindTitle];
          case HeroKind.Thief:
            return this.data.source.isClearedQuestsTitleThief[this.kindTitle];
          case HeroKind.Archer:
            return this.data.source.isClearedQuestsTitleArcher[this.kindTitle];
          case HeroKind.Tamer:
            return this.data.source.isClearedQuestsTitleTamer[this.kindTitle];
        }

      default:
        return false;
    }
  }
  set isCleared(value: boolean) {
    switch (this.kind) {
      case QuestKind.Global:
        this.data.source.isClearedQuestsGlobal[this.kindGlobal] = value;
        break;
      case QuestKind.Title:
        switch (this.heroKind) {
          case HeroKind.Warrior:
            this.data.source.isClearedQuestsTitleWarrior[this.kindTitle] = value;
            break;
          case HeroKind.Wizard:
            this.data.source.isClearedQuestsTitleWizard[this.kindTitle] = value;
            break;
          case HeroKind.Angel:
            this.data.source.isClearedQuestsTitleAngel[this.kindTitle] = value;
            break;
          case HeroKind.Thief:
            this.data.source.isClearedQuestsTitleThief[this.kindTitle] = value;
            break;
          case HeroKind.Archer:
            this.data.source.isClearedQuestsTitleArcher[this.kindTitle] = value;
            break;
          case HeroKind.Tamer:
            this.data.source.isClearedQuestsTitleTamer[this.kindTitle] = value;
            break;
        }
    }
  }
  //   set isCleared(value) {
  //     this.data.source.dailyQuestMonsterSpecies[this.kindDaily] = value;
  //   }

  NameString() {
    return Localization.Quest(this);
  }
  //   DefeatTargetMonsterDefeatedNum() {
  //     return !this.isAccepted || this.isCleared ? 0.0 : Math.max(0.0, this.defeatTargetMonsterDefeatNum - this.initDefeatedNum);
  //   }

  //   AreaCompletedNum() {
  //     return !this.isAccepted || this.isCleared ? 0.0 : Math.max(0.0, this.areaCompletedNum - this.initCompletedAreaNum);
  //   }

  //   get areaCompletedNum() {
  //     return this.completeTargetArea.completedNum.TotalCompletedNum();
  //   }
  SetRewardCapture(value: number) {
    this.data.stats.SetEffectStats(
      Stats.TamingPointGain,
      new MultiplierInfo(
        MultiplierKind.Quest,
        MultiplierType.Mul,
        () => value,
        () => this.isCleared
      )
    );
  }
  SetRewardNitro(value: number) {
    this.data.nitro.nitroCap.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Quest,
        MultiplierType.Add,
        () => value,
        () => this.isCleared
      )
    );
  }

  SetReward(multiplier: Multiplier, type: MultiplierType, value: number) {
    multiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Quest,
        type,
        () => value,
        () => this.isCleared
      )
    );
  }
}
