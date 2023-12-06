import { Multiplier } from "../../Multiplier";
import { MultiplierInfo } from "../../Multiplier";
import { Enums } from "../../Enums";
import { Debuff } from "../../type/Debuff";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";
import { Element } from "../../type/Element";
import { Stats } from "../../type/Stats";
import { Parameter } from "../../Parameter";
import { TitleKind } from "../../type/TitleKind";
import { QUEST } from "./QUEST";
//
import { GlobalQuest_Alchemy1 } from "./data/GlobalQuest_Alchemy1";
import { GlobalQuest_Alchemy2 } from "./data/GlobalQuest_Alchemy2";
import { GlobalQuest_Alchemy3 } from "./data/GlobalQuest_Alchemy3";
import { GlobalQuest_Alchemy4 } from "./data/GlobalQuest_Alchemy4";
import { GlobalQuest_Alchemy5 } from "./data/GlobalQuest_Alchemy5";
import { GlobalQuest_Alchemy6 } from "./data/GlobalQuest_Alchemy6";
import { GlobalQuest_Alchemy7 } from "./data/GlobalQuest_Alchemy7";
import { GlobalQuest_Alchemy8 } from "./data/GlobalQuest_Alchemy8";
import { GlobalQuest_Capture1 } from "./data/GlobalQuest_Capture1";
import { GlobalQuest_Capture10 } from "./data/GlobalQuest_Capture10";
import { GlobalQuest_Capture11 } from "./data/GlobalQuest_Capture11";
import { GlobalQuest_Capture12 } from "./data/GlobalQuest_Capture12";
import { GlobalQuest_Capture13 } from "./data/GlobalQuest_Capture13";
import { GlobalQuest_Capture14 } from "./data/GlobalQuest_Capture14";
import { GlobalQuest_Capture15 } from "./data/GlobalQuest_Capture15";
import { GlobalQuest_Capture16 } from "./data/GlobalQuest_Capture16";
import { GlobalQuest_Capture2 } from "./data/GlobalQuest_Capture2";
import { GlobalQuest_Capture3 } from "./data/GlobalQuest_Capture3";
import { GlobalQuest_Capture4 } from "./data/GlobalQuest_Capture4";
import { GlobalQuest_Capture5 } from "./data/GlobalQuest_Capture5";
import { GlobalQuest_Capture6 } from "./data/GlobalQuest_Capture6";
import { GlobalQuest_Capture7 } from "./data/GlobalQuest_Capture7";
import { GlobalQuest_Capture8 } from "./data/GlobalQuest_Capture8";
import { GlobalQuest_Capture9 } from "./data/GlobalQuest_Capture9";
import { GlobalQuest_Nitro1 } from "./data/GlobalQuest_Nitro1";
import { GlobalQuest_Nitro10 } from "./data/GlobalQuest_Nitro10";
import { GlobalQuest_Nitro11 } from "./data/GlobalQuest_Nitro11";
import { GlobalQuest_Nitro12 } from "./data/GlobalQuest_Nitro12";
import { GlobalQuest_Nitro13 } from "./data/GlobalQuest_Nitro13";
import { GlobalQuest_Nitro14 } from "./data/GlobalQuest_Nitro14";
import { GlobalQuest_Nitro15 } from "./data/GlobalQuest_Nitro15";
import { GlobalQuest_Nitro2 } from "./data/GlobalQuest_Nitro2";
import { GlobalQuest_Nitro3 } from "./data/GlobalQuest_Nitro3";
import { GlobalQuest_Nitro4 } from "./data/GlobalQuest_Nitro4";
import { GlobalQuest_Nitro5 } from "./data/GlobalQuest_Nitro5";
import { GlobalQuest_Nitro6 } from "./data/GlobalQuest_Nitro6";
import { GlobalQuest_Nitro7 } from "./data/GlobalQuest_Nitro7";
import { GlobalQuest_Nitro8 } from "./data/GlobalQuest_Nitro8";
import { GlobalQuest_Nitro9 } from "./data/GlobalQuest_Nitro9";
import { GlobalQuest_SD1 } from "./data/GlobalQuest_SD1";
import { GlobalQuest_SD2 } from "./data/GlobalQuest_SD2";
import { GlobalQuest_SD3 } from "./data/GlobalQuest_SD3";
import { GlobalQuest_SD4 } from "./data/GlobalQuest_SD4";
import { GlobalQuest_SD5 } from "./data/GlobalQuest_SD5";
import { GlobalQuest_SD6 } from "./data/GlobalQuest_SD6";
import { GlobalQuest_SD7 } from "./data/GlobalQuest_SD7";
import { GlobalQuest_SD8 } from "./data/GlobalQuest_SD8";
import { TitleQuest_Alchemist1 } from "./data/TitleQuest_Alchemist1";
import { TitleQuest_Alchemist2 } from "./data/TitleQuest_Alchemist2";
import { TitleQuest_Alchemist3 } from "./data/TitleQuest_Alchemist3";
import { TitleQuest_Alchemist4 } from "./data/TitleQuest_Alchemist4";
import { TitleQuest_Alchemist5 } from "./data/TitleQuest_Alchemist5";
import { TitleQuest_Cooperation1 } from "./data/TitleQuest_Cooperation1";
import { TitleQuest_Cooperation2 } from "./data/TitleQuest_Cooperation2";
import { TitleQuest_Cooperation3 } from "./data/TitleQuest_Cooperation3";
import { TitleQuest_DarkAttack1 } from "./data/TitleQuest_DarkAttack1";
import { TitleQuest_DarkAttack2 } from "./data/TitleQuest_DarkAttack2";
import { TitleQuest_DarkAttack3 } from "./data/TitleQuest_DarkAttack3";
import { TitleQuest_DarkAttack4 } from "./data/TitleQuest_DarkAttack4";
import { TitleQuest_DarkResistance1 } from "./data/TitleQuest_DarkResistance1";
import { TitleQuest_DarkResistance2 } from "./data/TitleQuest_DarkResistance2";
import { TitleQuest_DarkResistance3 } from "./data/TitleQuest_DarkResistance3";
import { TitleQuest_DarkResistance4 } from "./data/TitleQuest_DarkResistance4";
import { TitleQuest_DarkResistance5 } from "./data/TitleQuest_DarkResistance5";
import { TitleQuest_EquipmentProf1 } from "./data/TitleQuest_EquipmentProf1";
import { TitleQuest_EquipmentProf2 } from "./data/TitleQuest_EquipmentProf2";
import { TitleQuest_EquipmentProf3 } from "./data/TitleQuest_EquipmentProf3";
import { TitleQuest_EquipmentProf4 } from "./data/TitleQuest_EquipmentProf4";
import { TitleQuest_EquipmentProf5 } from "./data/TitleQuest_EquipmentProf5";
import { TitleQuest_EquipmentSlotArmor1 } from "./data/TitleQuest_EquipmentSlotArmor1";
import { TitleQuest_EquipmentSlotArmor2 } from "./data/TitleQuest_EquipmentSlotArmor2";
import { TitleQuest_EquipmentSlotArmor3 } from "./data/TitleQuest_EquipmentSlotArmor3";
import { TitleQuest_EquipmentSlotArmor4 } from "./data/TitleQuest_EquipmentSlotArmor4";
import { TitleQuest_EquipmentSlotArmor5 } from "./data/TitleQuest_EquipmentSlotArmor5";
import { TitleQuest_EquipmentSlotArmor6 } from "./data/TitleQuest_EquipmentSlotArmor6";
import { TitleQuest_EquipmentSlotJewelry1 } from "./data/TitleQuest_EquipmentSlotJewelry1";
import { TitleQuest_EquipmentSlotJewelry2 } from "./data/TitleQuest_EquipmentSlotJewelry2";
import { TitleQuest_EquipmentSlotJewelry3 } from "./data/TitleQuest_EquipmentSlotJewelry3";
import { TitleQuest_EquipmentSlotJewelry4 } from "./data/TitleQuest_EquipmentSlotJewelry4";
import { TitleQuest_EquipmentSlotJewelry5 } from "./data/TitleQuest_EquipmentSlotJewelry5";
import { TitleQuest_EquipmentSlotJewelry6 } from "./data/TitleQuest_EquipmentSlotJewelry6";
import { TitleQuest_EquipmentSlotWeapon1 } from "./data/TitleQuest_EquipmentSlotWeapon1";
import { TitleQuest_EquipmentSlotWeapon2 } from "./data/TitleQuest_EquipmentSlotWeapon2";
import { TitleQuest_EquipmentSlotWeapon3 } from "./data/TitleQuest_EquipmentSlotWeapon3";
import { TitleQuest_EquipmentSlotWeapon4 } from "./data/TitleQuest_EquipmentSlotWeapon4";
import { TitleQuest_EquipmentSlotWeapon5 } from "./data/TitleQuest_EquipmentSlotWeapon5";
import { TitleQuest_EquipmentSlotWeapon6 } from "./data/TitleQuest_EquipmentSlotWeapon6";
import { TitleQuest_ExplorerOfSD1 } from "./data/TitleQuest_ExplorerOfSD1";
import { TitleQuest_ExplorerOfSD10 } from "./data/TitleQuest_ExplorerOfSD10";
import { TitleQuest_ExplorerOfSD11 } from "./data/TitleQuest_ExplorerOfSD11";
import { TitleQuest_ExplorerOfSD12 } from "./data/TitleQuest_ExplorerOfSD12";
import { TitleQuest_ExplorerOfSD13 } from "./data/TitleQuest_ExplorerOfSD13";
import { TitleQuest_ExplorerOfSD14 } from "./data/TitleQuest_ExplorerOfSD14";
import { TitleQuest_ExplorerOfSD15 } from "./data/TitleQuest_ExplorerOfSD15";
import { TitleQuest_ExplorerOfSD2 } from "./data/TitleQuest_ExplorerOfSD2";
import { TitleQuest_ExplorerOfSD3 } from "./data/TitleQuest_ExplorerOfSD3";
import { TitleQuest_ExplorerOfSD4 } from "./data/TitleQuest_ExplorerOfSD4";
import { TitleQuest_ExplorerOfSD5 } from "./data/TitleQuest_ExplorerOfSD5";
import { TitleQuest_ExplorerOfSD6 } from "./data/TitleQuest_ExplorerOfSD6";
import { TitleQuest_ExplorerOfSD7 } from "./data/TitleQuest_ExplorerOfSD7";
import { TitleQuest_ExplorerOfSD8 } from "./data/TitleQuest_ExplorerOfSD8";
import { TitleQuest_ExplorerOfSD9 } from "./data/TitleQuest_ExplorerOfSD9";
import { TitleQuest_FireAttack1 } from "./data/TitleQuest_FireAttack1";
import { TitleQuest_FireAttack2 } from "./data/TitleQuest_FireAttack2";
import { TitleQuest_FireAttack3 } from "./data/TitleQuest_FireAttack3";
import { TitleQuest_FireAttack4 } from "./data/TitleQuest_FireAttack4";
import { TitleQuest_FireResistance1 } from "./data/TitleQuest_FireResistance1";
import { TitleQuest_FireResistance2 } from "./data/TitleQuest_FireResistance2";
import { TitleQuest_FireResistance3 } from "./data/TitleQuest_FireResistance3";
import { TitleQuest_FireResistance4 } from "./data/TitleQuest_FireResistance4";
import { TitleQuest_FireResistance5 } from "./data/TitleQuest_FireResistance5";
import { TitleQuest_IceAttack1 } from "./data/TitleQuest_IceAttack1";
import { TitleQuest_IceAttack2 } from "./data/TitleQuest_IceAttack2";
import { TitleQuest_IceAttack3 } from "./data/TitleQuest_IceAttack3";
import { TitleQuest_IceAttack4 } from "./data/TitleQuest_IceAttack4";
import { TitleQuest_IceResistance1 } from "./data/TitleQuest_IceResistance1";
import { TitleQuest_IceResistance2 } from "./data/TitleQuest_IceResistance2";
import { TitleQuest_IceResistance3 } from "./data/TitleQuest_IceResistance3";
import { TitleQuest_IceResistance4 } from "./data/TitleQuest_IceResistance4";
import { TitleQuest_IceResistance5 } from "./data/TitleQuest_IceResistance5";
import { TitleQuest_LightAttack1 } from "./data/TitleQuest_LightAttack1";
import { TitleQuest_LightAttack2 } from "./data/TitleQuest_LightAttack2";
import { TitleQuest_LightAttack3 } from "./data/TitleQuest_LightAttack3";
import { TitleQuest_LightAttack4 } from "./data/TitleQuest_LightAttack4";
import { TitleQuest_LightResistance1 } from "./data/TitleQuest_LightResistance1";
import { TitleQuest_LightResistance2 } from "./data/TitleQuest_LightResistance2";
import { TitleQuest_LightResistance3 } from "./data/TitleQuest_LightResistance3";
import { TitleQuest_LightResistance4 } from "./data/TitleQuest_LightResistance4";
import { TitleQuest_LightResistance5 } from "./data/TitleQuest_LightResistance5";
import { TitleQuest_MetalHunter1 } from "./data/TitleQuest_MetalHunter1";
import { TitleQuest_MetalHunter2 } from "./data/TitleQuest_MetalHunter2";
import { TitleQuest_MetalHunter3 } from "./data/TitleQuest_MetalHunter3";
import { TitleQuest_MetalHunter4 } from "./data/TitleQuest_MetalHunter4";
import { TitleQuest_MetalHunter5 } from "./data/TitleQuest_MetalHunter5";
import { TitleQuest_MetalHunter6 } from "./data/TitleQuest_MetalHunter6";
import { TitleQuest_MetalHunter7 } from "./data/TitleQuest_MetalHunter7";
import { TitleQuest_MetalHunter8 } from "./data/TitleQuest_MetalHunter8";
import { TitleQuest_MetalHunter9 } from "./data/TitleQuest_MetalHunter9";
import { TitleQuest_MonsterDistinguisher1 } from "./data/TitleQuest_MonsterDistinguisher1";
import { TitleQuest_MonsterDistinguisher2 } from "./data/TitleQuest_MonsterDistinguisher2";
import { TitleQuest_MonsterDistinguisher3 } from "./data/TitleQuest_MonsterDistinguisher3";
import { TitleQuest_MonsterDistinguisher4 } from "./data/TitleQuest_MonsterDistinguisher4";
import { TitleQuest_MonsterDistinguisher5 } from "./data/TitleQuest_MonsterDistinguisher5";
import { TitleQuest_MonsterDistinguisher6 } from "./data/TitleQuest_MonsterDistinguisher6";
import { TitleQuest_MonsterDistinguisher7 } from "./data/TitleQuest_MonsterDistinguisher7";
import { TitleQuest_MonsterDistinguisher8 } from "./data/TitleQuest_MonsterDistinguisher8";
import { TitleQuest_PhysicalAttack1 } from "./data/TitleQuest_PhysicalAttack1";
import { TitleQuest_PhysicalAttack2 } from "./data/TitleQuest_PhysicalAttack2";
import { TitleQuest_PhysicalAttack3 } from "./data/TitleQuest_PhysicalAttack3";
import { TitleQuest_PhysicalAttack4 } from "./data/TitleQuest_PhysicalAttack4";
import { TitleQuest_Porter1 } from "./data/TitleQuest_Porter1";
import { TitleQuest_Porter2 } from "./data/TitleQuest_Porter2";
import { TitleQuest_Porter3 } from "./data/TitleQuest_Porter3";
import { TitleQuest_Porter4 } from "./data/TitleQuest_Porter4";
import { TitleQuest_Porter5 } from "./data/TitleQuest_Porter5";
import { TitleQuest_Porter6 } from "./data/TitleQuest_Porter6";
import { TitleQuest_PotionSlot1 } from "./data/TitleQuest_PotionSlot1";
import { TitleQuest_PotionSlot2 } from "./data/TitleQuest_PotionSlot2";
import { TitleQuest_PotionSlot3 } from "./data/TitleQuest_PotionSlot3";
import { TitleQuest_Quester1 } from "./data/TitleQuest_Quester1";
import { TitleQuest_Quester10 } from "./data/TitleQuest_Quester10";
import { TitleQuest_Quester2 } from "./data/TitleQuest_Quester2";
import { TitleQuest_Quester3 } from "./data/TitleQuest_Quester3";
import { TitleQuest_Quester4 } from "./data/TitleQuest_Quester4";
import { TitleQuest_Quester5 } from "./data/TitleQuest_Quester5";
import { TitleQuest_Quester6 } from "./data/TitleQuest_Quester6";
import { TitleQuest_Quester7 } from "./data/TitleQuest_Quester7";
import { TitleQuest_Quester8 } from "./data/TitleQuest_Quester8";
import { TitleQuest_Quester9 } from "./data/TitleQuest_Quester9";
import { TitleQuest_SkillMaster1 } from "./data/TitleQuest_SkillMaster1";
import { TitleQuest_SkillMaster2 } from "./data/TitleQuest_SkillMaster2";
import { TitleQuest_SkillMaster3 } from "./data/TitleQuest_SkillMaster3";
import { TitleQuest_SkillMaster4 } from "./data/TitleQuest_SkillMaster4";
import { TitleQuest_Survival1 } from "./data/TitleQuest_Survival1";
import { TitleQuest_Survival2 } from "./data/TitleQuest_Survival2";
import { TitleQuest_Survival3 } from "./data/TitleQuest_Survival3";
import { TitleQuest_Survival4 } from "./data/TitleQuest_Survival4";
import { TitleQuest_ThunderAttack1 } from "./data/TitleQuest_ThunderAttack1";
import { TitleQuest_ThunderAttack2 } from "./data/TitleQuest_ThunderAttack2";
import { TitleQuest_ThunderAttack3 } from "./data/TitleQuest_ThunderAttack3";
import { TitleQuest_ThunderAttack4 } from "./data/TitleQuest_ThunderAttack4";
import { TitleQuest_ThunderResistance1 } from "./data/TitleQuest_ThunderResistance1";
import { TitleQuest_ThunderResistance2 } from "./data/TitleQuest_ThunderResistance2";
import { TitleQuest_ThunderResistance3 } from "./data/TitleQuest_ThunderResistance3";
import { TitleQuest_ThunderResistance4 } from "./data/TitleQuest_ThunderResistance4";
import { TitleQuest_ThunderResistance5 } from "./data/TitleQuest_ThunderResistance5";

export class QuestController {
  globalQuestList: QUEST[] = [];
  globalQuestListTutorial: QUEST[] = [];
  globalQuestListUpgrade: QUEST[] = [];
  globalQuestListNitro: QUEST[] = [];
  globalQuestListCapture: QUEST[] = [];
  globalQuestListAlchemy: QUEST[] = [];
  dailyQuestList: QUEST[] = [];
  titleQuestList: Array<Array<QUEST>> = Array(Enums.HeroKind).fill([]);
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

  constructor() {
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
    //   this.globalQuestListTutorial.push(new GlobalQuest_Tutorial14(this, HeroKind.Warrior));

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
    this.globalQuestListNitro.push(new GlobalQuest_Nitro1(this, HeroKind.Warrior));
    this.globalQuestListNitro.push(new GlobalQuest_Nitro2(this, HeroKind.Warrior));
    this.globalQuestListNitro.push(new GlobalQuest_Nitro3(this, HeroKind.Warrior));
    this.globalQuestListNitro.push(new GlobalQuest_Nitro4(this, HeroKind.Warrior));
    this.globalQuestListNitro.push(new GlobalQuest_Nitro5(this, HeroKind.Warrior));
    this.globalQuestListNitro.push(new GlobalQuest_Nitro6(this, HeroKind.Warrior));
    this.globalQuestListNitro.push(new GlobalQuest_Nitro7(this, HeroKind.Warrior));
    this.globalQuestListNitro.push(new GlobalQuest_Nitro8(this, HeroKind.Warrior));
    this.globalQuestListNitro.push(new GlobalQuest_Nitro9(this, HeroKind.Warrior));
    this.globalQuestListNitro.push(new GlobalQuest_Nitro10(this, HeroKind.Warrior));
    this.globalQuestListNitro.push(new GlobalQuest_Nitro11(this, HeroKind.Warrior));
    this.globalQuestListNitro.push(new GlobalQuest_Nitro12(this, HeroKind.Warrior));
    this.globalQuestListNitro.push(new GlobalQuest_Nitro13(this, HeroKind.Warrior));
    this.globalQuestListNitro.push(new GlobalQuest_Nitro14(this, HeroKind.Warrior));
    this.globalQuestListNitro.push(new GlobalQuest_Nitro15(this, HeroKind.Warrior));
    //   this.globalQuestList.AddRange((IEnumerable<QUEST>) this.globalQuestListNitro);
    this.globalQuestListCapture.push(new GlobalQuest_Capture1(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture2(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture3(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture4(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture5(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture6(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture7(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture8(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture9(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture10(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture11(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture12(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture13(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture14(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture15(this, HeroKind.Warrior));
    this.globalQuestListCapture.push(new GlobalQuest_Capture16(this, HeroKind.Warrior));
    //   this.globalQuestList.AddRange((IEnumerable<QUEST>) this.globalQuestListCapture);
    this.globalQuestListAlchemy.push(new GlobalQuest_Alchemy1(this, HeroKind.Warrior));
    this.globalQuestListAlchemy.push(new GlobalQuest_Alchemy2(this, HeroKind.Warrior));
    this.globalQuestListAlchemy.push(new GlobalQuest_Alchemy3(this, HeroKind.Warrior));
    this.globalQuestListAlchemy.push(new GlobalQuest_Alchemy4(this, HeroKind.Warrior));
    this.globalQuestListAlchemy.push(new GlobalQuest_Alchemy5(this, HeroKind.Warrior));
    this.globalQuestListAlchemy.push(new GlobalQuest_Alchemy6(this, HeroKind.Warrior));
    this.globalQuestListAlchemy.push(new GlobalQuest_Alchemy7(this, HeroKind.Warrior));
    this.globalQuestListAlchemy.push(new GlobalQuest_Alchemy8(this, HeroKind.Warrior));
    //   this.globalQuestList.AddRange((IEnumerable<QUEST>) this.globalQuestListAlchemy);
    this.globalQuestList.push(new GlobalQuest_SD1(this, HeroKind.Warrior));
    this.globalQuestList.push(new GlobalQuest_SD2(this, HeroKind.Warrior));
    this.globalQuestList.push(new GlobalQuest_SD3(this, HeroKind.Warrior));
    this.globalQuestList.push(new GlobalQuest_SD4(this, HeroKind.Warrior));
    this.globalQuestList.push(new GlobalQuest_SD5(this, HeroKind.Warrior));
    this.globalQuestList.push(new GlobalQuest_SD6(this, HeroKind.Warrior));
    this.globalQuestList.push(new GlobalQuest_SD7(this, HeroKind.Warrior));
    this.globalQuestList.push(new GlobalQuest_SD8(this, HeroKind.Warrior));

    this.globalQuests = [
      ...this.globalQuestListNitro,
      ...this.globalQuestListCapture,
      ...this.globalQuestListAlchemy,
      ...this.globalQuestList,
    ];
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
      //     this.titleQuestList[index] = new List<QUEST>();
      //     this.titleQuestList[index].push(new TitleQuest_SkillMaster1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_SkillMaster2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_SkillMaster3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_SkillMaster4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MonsterDistinguisher1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MonsterDistinguisher2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MonsterDistinguisher3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MonsterDistinguisher4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MonsterDistinguisher5(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MonsterDistinguisher6(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MonsterDistinguisher7(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MonsterDistinguisher8(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotWeapon1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotWeapon2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotWeapon3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotWeapon4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotWeapon5(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotWeapon6(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotArmor1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotArmor2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotArmor3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotArmor4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotArmor5(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotArmor6(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotJewelry1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotJewelry2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotJewelry3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotJewelry4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotJewelry5(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentSlotJewelry6(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_PotionSlot1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_PotionSlot2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_PotionSlot3(this, index));
      this.titleQuestList[index].push(new TitleQuest_PhysicalAttack1(this, index));
      this.titleQuestList[index].push(new TitleQuest_PhysicalAttack2(this, index));
      this.titleQuestList[index].push(new TitleQuest_PhysicalAttack3(this, index));
      this.titleQuestList[index].push(new TitleQuest_PhysicalAttack4(this, index));
      this.titleQuestList[index].push(new TitleQuest_FireAttack1(this, index));
      this.titleQuestList[index].push(new TitleQuest_FireAttack2(this, index));
      this.titleQuestList[index].push(new TitleQuest_FireAttack3(this, index));
      this.titleQuestList[index].push(new TitleQuest_FireAttack4(this, index));
      this.titleQuestList[index].push(new TitleQuest_IceAttack1(this, index));
      this.titleQuestList[index].push(new TitleQuest_IceAttack2(this, index));
      this.titleQuestList[index].push(new TitleQuest_IceAttack3(this, index));
      this.titleQuestList[index].push(new TitleQuest_IceAttack4(this, index));
      this.titleQuestList[index].push(new TitleQuest_ThunderAttack1(this, index));
      this.titleQuestList[index].push(new TitleQuest_ThunderAttack2(this, index));
      this.titleQuestList[index].push(new TitleQuest_ThunderAttack3(this, index));
      this.titleQuestList[index].push(new TitleQuest_ThunderAttack4(this, index));
      this.titleQuestList[index].push(new TitleQuest_LightAttack1(this, index));
      this.titleQuestList[index].push(new TitleQuest_LightAttack2(this, index));
      this.titleQuestList[index].push(new TitleQuest_LightAttack3(this, index));
      this.titleQuestList[index].push(new TitleQuest_LightAttack4(this, index));
      this.titleQuestList[index].push(new TitleQuest_DarkAttack1(this, index));
      this.titleQuestList[index].push(new TitleQuest_DarkAttack2(this, index));
      this.titleQuestList[index].push(new TitleQuest_DarkAttack3(this, index));
      this.titleQuestList[index].push(new TitleQuest_DarkAttack4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Porter1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Porter2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Porter3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Porter4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Porter5(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Porter6(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Alchemist1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Alchemist2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Alchemist3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Alchemist4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Alchemist5(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentProf1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentProf2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentProf3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentProf4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_EquipmentProf5(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MetalHunter1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MetalHunter2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MetalHunter3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MetalHunter4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MetalHunter5(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MetalHunter6(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MetalHunter7(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MetalHunter8(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_MetalHunter9(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_FireResistance1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_FireResistance2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_FireResistance3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_FireResistance4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_FireResistance5(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_IceResistance1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_IceResistance2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_IceResistance3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_IceResistance4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_IceResistance5(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_ThunderResistance1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_ThunderResistance2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_ThunderResistance3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_ThunderResistance4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_ThunderResistance5(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_LightResistance1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_LightResistance2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_LightResistance3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_LightResistance4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_LightResistance5(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_DarkResistance1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_DarkResistance2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_DarkResistance3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_DarkResistance4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_DarkResistance5(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Survival1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Survival2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Survival3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Survival4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Cooperation1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Cooperation2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Cooperation3(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD1(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD2(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD3(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD4(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD5(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD6(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD7(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD8(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD9(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD10(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD11(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD12(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD13(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD14(this, index));
      this.titleQuestList[index].push(new TitleQuest_ExplorerOfSD15(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Quester1(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Quester2(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Quester3(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Quester4(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Quester5(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Quester6(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Quester7(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Quester8(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Quester9(this, index));
      //     this.titleQuestList[index].push(new TitleQuest_Quester10(this, index));
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
      if (
        this.titleQuests[heroKind][index].rewardTitleKind == kind &&
        this.titleQuests[heroKind][index].isCleared &&
        this.titleQuests[heroKind][index].rewardTitleLevel > num
      ) {
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
          const multiplierInfo1 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.SkillSlotNum(index).RegisterMultiplier(multiplierInfo1);
          const multiplierInfo2 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).sub
          );
          globalThis.data.stats.HeroStats(index, Stats.SkillProficiencyGain).RegisterMultiplier(multiplierInfo2);
        }
        break;
      case TitleKind.MonsterDistinguisher:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo3 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.MonsterDistinguishMaxLevel(index).RegisterMultiplier(multiplierInfo3);
          const multiplierInfo4 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).sub
          );
          globalThis.data.stats.MonsterCaptureMaxLevelIncrement(index).RegisterMultiplier(multiplierInfo4);
        }
        break;
      case TitleKind.EquipmentSlotWeapon:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.inventory.equipWeaponUnlockedNum[index].RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.EquipmentSlotArmor:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.inventory.equipArmorUnlockedNum[index].RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.EquipmentSlotJewelry:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.inventory.equipJewelryUnlockedNum[index].RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.PotionSlot:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.inventory.equipPotionUnlockedNum[index].RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.EquipmentProficiency:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.HeroStats(index, Stats.EquipmentProficiencyGain).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.PhysicalDamage:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Mul,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.ElementDamage(index, Element.Physical).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.FireDamage:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Mul,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.ElementDamage(index, Element.Fire).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.IceDamage:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Mul,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.ElementDamage(index, Element.Ice).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.ThunderDamage:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Mul,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.ElementDamage(index, Element.Thunder).RegisterMultiplier(multiplierInfo);
        }
        break;
      //
      case TitleKind.LightDamage:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Mul,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.ElementDamage(index, Element.Light).RegisterMultiplier(multiplierInfo);
        }
        //

        break;
      case TitleKind.DarkDamage:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Mul,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.ElementDamage(index, Element.Dark).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.Alchemist:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Mul,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.alchemy.mysteriousWaterProductionPerSec.RegisterMultiplier(multiplierInfo);
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
          globalThis.data.stats.HeroStats(index, Stats.PhysCritChance).RegisterMultiplier(multiplierInfo);
          globalThis.data.stats.HeroStats(index, Stats.MagCritChance).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.FireResistance:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo5 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.HeroStats(index, Stats.FireRes).RegisterMultiplier(multiplierInfo5);
          const multiplierInfo6 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).sub
          );
          globalThis.data.stats.ElementInvalid(index, Element.Fire).RegisterMultiplier(multiplierInfo6);
        }
        break;
      case TitleKind.IceResistance:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo7 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.HeroStats(index, Stats.IceRes).RegisterMultiplier(multiplierInfo7);
          const multiplierInfo8 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).sub
          );
          globalThis.data.stats.ElementInvalid(index, Element.Ice).RegisterMultiplier(multiplierInfo8);
        }
        break;
      case TitleKind.ThunderResistance:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo9 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.HeroStats(index, Stats.ThunderRes).RegisterMultiplier(multiplierInfo9);
          const multiplierInfo10 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).sub
          );
          globalThis.data.stats.ElementInvalid(index, Element.Thunder).RegisterMultiplier(multiplierInfo10);
        }
        break;
      case TitleKind.LightResistance:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo11 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.HeroStats(index, Stats.LightRes).RegisterMultiplier(multiplierInfo11);
          const multiplierInfo12 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).sub
          );
          globalThis.data.stats.ElementInvalid(index, Element.Light).RegisterMultiplier(multiplierInfo12);
        }
        break;
      case TitleKind.DarkResistance:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo13 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.HeroStats(index, Stats.DarkRes).RegisterMultiplier(multiplierInfo13);
          const multiplierInfo14 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).sub
          );
          globalThis.data.stats.ElementInvalid(index, Element.Dark).RegisterMultiplier(multiplierInfo14);
        }
        break;
      case TitleKind.Cooperation:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          // TODO
          //   globalThis.data.guild.Member(index).backgroundGainRate.RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.DebuffResistance:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.HeroStats(index, Stats.DebuffRes).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.MoveSpeed:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Mul,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.stats.HeroStats(index, Stats.MoveSpeed).RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.Quester:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Add,
            () => this.TitleEffectValue(index, kind).main
          );
          this.generalQuestClearGain[index].RegisterMultiplier(multiplierInfo);
        }
        break;
      case TitleKind.ExplorerOfSD:
        for (let index = 0; index < Enums.HeroKind; index++) {
          const multiplierInfo15 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Mul,
            () => this.TitleEffectValue(index, kind).main
          );
          globalThis.data.battles[index].superDungeonCtrl.damageMultiplier.RegisterMultiplier(multiplierInfo15);
          const multiplierInfo16 = new MultiplierInfo(
            MultiplierKind.Title,
            MultiplierType.Mul,
            () => this.TitleEffectValue(index, kind).sub
          );
          globalThis.data.superStats.Hero(index).fameGain.RegisterMultiplier(multiplierInfo16);
        }
        break;
    }
  }
}
