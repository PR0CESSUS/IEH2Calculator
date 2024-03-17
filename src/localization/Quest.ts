import { QUEST } from "../Data/Quest/QUEST";
import { QuestKind } from "../type/QuestKind";
import { QuestKindGlobal } from "../type/QuestKindGlobal";
import { QuestKindTitle } from "../type/QuestKindTitle";
import { TitleKind } from "../type/TitleKind";
//TODO rewrite switch case
export function Quest(quest: QUEST) {
  const kind = quest.kind;
  const kindGlobal = quest.kindGlobal;
  // const kindDaily = quest.kindDaily;
  const kindTitle = quest.kindTitle;
  // const kindGeneral = quest.kindGeneral;
  // const heroKind = quest.heroKind;

  switch (kind) {
    case QuestKind.Global:
      switch (kindGlobal) {
        case QuestKindGlobal.AbilityVIT:
          return "Tutorial 1 : Basic Training";
        case QuestKindGlobal.ClearGeneralQuest:
          return "Tutorial 2 : General Quest";
        case QuestKindGlobal.ClearTitleQuest:
          return "Tutorial 3 : Title Quest";
        case QuestKindGlobal.UpgradeResource:
          return "Tutorial 4 : Upgrade";
        case QuestKindGlobal.Equip:
          return "Tutorial 5 : Equipment";
        case QuestKindGlobal.Alchemy:
          return "Tutorial 6 : Alchemy";
        case QuestKindGlobal.Guild:
          return "Tutorial 7 : Guild";
        case QuestKindGlobal.Town:
          return "Tutorial 8 : Town";
        case QuestKindGlobal.Research:
          return "Tutorial 9 : Town Research";
        case QuestKindGlobal.Rebirth:
          return "Tutorial 10 : Rebirth";
        case QuestKindGlobal.Challenge:
          return "Tutorial 11 : Challenge";
        case QuestKindGlobal.Expedition:
          return "Tutorial 12 : Expedition";
        case QuestKindGlobal.WorldAscension:
          return "Tutorial 13 : World Ascension";
        case QuestKindGlobal.AreaPrestige:
          return "Tutorial 14 : Area Prestige";
        case QuestKindGlobal.Upgrade1:
          return "To Further Stage 1";
        case QuestKindGlobal.Upgrade2:
          return "To Further Stage 2";
        case QuestKindGlobal.Upgrade3:
          return "To Further Stage 3";
        case QuestKindGlobal.Upgrade4:
          return "To Further Stage 4";
        case QuestKindGlobal.Upgrade5:
          return "To Further Stage 5";
        case QuestKindGlobal.Upgrade6:
          return "To Further Stage 6";
        case QuestKindGlobal.Upgrade7:
          return "To Further Stage 7";
        case QuestKindGlobal.Upgrade8:
          return "To Further Stage 8";
        case QuestKindGlobal.Nitro1:
          return "How to be a Nitro Booster Geek 1";
        case QuestKindGlobal.Nitro2:
          return "How to be a Nitro Booster Geek 2";
        case QuestKindGlobal.Nitro3:
          return "How to be a Nitro Booster Geek 3";
        case QuestKindGlobal.Nitro4:
          return "How to be a Nitro Booster Geek 4";
        case QuestKindGlobal.Nitro5:
          return "How to be a Nitro Booster Geek 5";
        case QuestKindGlobal.Nitro6:
          return "How to be a Nitro Booster Geek 6";
        case QuestKindGlobal.Nitro7:
          return "How to be a Nitro Booster Geek 7";
        case QuestKindGlobal.Nitro8:
          return "How to be a Nitro Booster Geek 8";
        case QuestKindGlobal.Nitro9:
          return "How to be a Nitro Booster Geek 9";
        case QuestKindGlobal.Nitro10:
          return "How to be a Nitro Booster Geek 10";
        case QuestKindGlobal.Nitro11:
          return "How to be a Nitro Booster Geek 11";
        case QuestKindGlobal.Nitro12:
          return "How to be a Nitro Booster Geek 12";
        case QuestKindGlobal.Nitro13:
          return "How to be a Nitro Booster Geek 13";
        case QuestKindGlobal.Nitro14:
          return "How to be a Nitro Booster Geek 14";
        case QuestKindGlobal.Nitro15:
          return "How to be a Nitro Booster Geek 15";
        case QuestKindGlobal.Nitro16:
          return "How to be a Nitro Booster Geek 16";
        case QuestKindGlobal.Nitro17:
          return "How to be a Nitro Booster Geek 17";
        case QuestKindGlobal.Nitro18:
          return "How to be a Nitro Booster Geek 18";
        case QuestKindGlobal.Nitro19:
          return "How to be a Nitro Booster Geek 19";

        case QuestKindGlobal.Alchemy1:
          return "The Road of Alchemy 1";
        case QuestKindGlobal.Alchemy2:
          return "The Road of Alchemy 2";
        case QuestKindGlobal.Alchemy3:
          return "The Road of Alchemy 3";
        case QuestKindGlobal.Alchemy4:
          return "The Road of Alchemy 4";
        case QuestKindGlobal.Alchemy5:
          return "The Road of Alchemy 5";
        case QuestKindGlobal.Alchemy6:
          return "The Road of Alchemy 6";
        case QuestKindGlobal.Alchemy7:
          return "The Road of Alchemy 7";
        case QuestKindGlobal.Alchemy8:
          return "The Road of Alchemy 8";
        case QuestKindGlobal.Upgrade9:
          return "To Further Stage 9";
        case QuestKindGlobal.Upgrade10:
          return "To Further Stage 10";
        case QuestKindGlobal.Upgrade11:
          return "To Further Stage 11";
        case QuestKindGlobal.Upgrade12:
          return "To Further Stage 12";
        case QuestKindGlobal.Upgrade13:
          return "To Further Stage 13";
        case QuestKindGlobal.Upgrade14:
          return "To Further Stage 14";
        case QuestKindGlobal.Upgrade15:
          return "To Further Stage 15";
        case QuestKindGlobal.Upgrade16:
          return "To Further Stage 16";
        case QuestKindGlobal.Upgrade17:
          return "To Further Stage 17";
        case QuestKindGlobal.Upgrade18:
          return "To Further Stage 18";
        case QuestKindGlobal.Capture1:
          return "Capturing Monsters 1";
        case QuestKindGlobal.Capture2:
          return "Capturing Monsters 2";
        case QuestKindGlobal.Capture3:
          return "Capturing Monsters 3";
        case QuestKindGlobal.Capture4:
          return "Capturing Monsters 4";
        case QuestKindGlobal.Capture5:
          return "Capturing Monsters 5";
        case QuestKindGlobal.Capture6:
          return "Capturing Monsters 6";
        case QuestKindGlobal.Capture7:
          return "Capturing Monsters 7";
        case QuestKindGlobal.Capture8:
          return "Capturing Monsters 8";
        case QuestKindGlobal.Capture9:
          return "Capturing Monsters 9";
        case QuestKindGlobal.Capture10:
          return "Capturing Monsters 10";
        case QuestKindGlobal.Capture11:
          return "Capturing Monsters 11";
        case QuestKindGlobal.Capture12:
          return "Capturing Monsters 12";
        case QuestKindGlobal.Capture13:
          return "Capturing Monsters 13";
        case QuestKindGlobal.Capture14:
          return "Capturing Monsters 14";
        case QuestKindGlobal.Capture15:
          return "Capturing Monsters 15";
        case QuestKindGlobal.Capture16:
          return "Capturing Monsters 16";
        case QuestKindGlobal.Capture17:
          return "Capturing Monsters 17";
        case QuestKindGlobal.Capture18:
          return "Capturing Monsters 18";
        case QuestKindGlobal.SD1:
          return "Super Dungeon 1";
        case QuestKindGlobal.SD2:
          return "Super Dungeon 2";
        case QuestKindGlobal.SD3:
          return "Super Dungeon 3";
        case QuestKindGlobal.SD4:
          return "Super Dungeon 4";
        case QuestKindGlobal.SD5:
          return "Super Dungeon 5";
        case QuestKindGlobal.SD6:
          return "Super Dungeon 6";
        case QuestKindGlobal.SD7:
          return "Super Dungeon 7";
        case QuestKindGlobal.SD8:
          return "Super Dungeon 8";
      }
      break;
    case QuestKind.Daily:
      // switch (kindDaily) {
      //   case QuestKindDaily.EC1:
      //     return "Epic Coin 1 : " + this.DailyQuestRarityName(quest.dailyQuestRarity);
      //   case QuestKindDaily.EC2:
      //     return "Epic Coin 2 : " + this.DailyQuestRarityName(quest.dailyQuestRarity);
      //   case QuestKindDaily.EC3:
      //     return "Epic Coin 3 : " + this.DailyQuestRarityName(quest.dailyQuestRarity);
      //   case QuestKindDaily.EC4:
      //     return "Epic Coin 4 : " + this.DailyQuestRarityName(quest.dailyQuestRarity);
      //   case QuestKindDaily.Cartographer1:
      //     return "Cartographer 1 : " + this.DailyQuestRarityName(quest.dailyQuestRarity);
      //   case QuestKindDaily.Cartographer2:
      //     return "Cartographer 2 : " + this.DailyQuestRarityName(quest.dailyQuestRarity);
      //   case QuestKindDaily.Cartographer3:
      //     return "Cartographer 3 : " + this.DailyQuestRarityName(quest.dailyQuestRarity);
      //   case QuestKindDaily.Cartographer4:
      //     return "Cartographer 4 : " + this.DailyQuestRarityName(quest.dailyQuestRarity);
      //   case QuestKindDaily.Cartographer5:
      //     return "Cartographer 5 : " + this.DailyQuestRarityName(quest.dailyQuestRarity);
      // }
      break;
    case QuestKind.Title:
      switch (kindTitle) {
        case QuestKindTitle.SkillMaster1:
          return this.Title(TitleKind.SkillMaster) + " 1";
        case QuestKindTitle.SkillMaster2:
          return this.Title(TitleKind.SkillMaster) + " 2";
        case QuestKindTitle.SkillMaster3:
          return this.Title(TitleKind.SkillMaster) + " 3";
        case QuestKindTitle.SkillMaster4:
          return this.Title(TitleKind.SkillMaster) + " 4";
        case QuestKindTitle.MonsterDistinguisher1:
          return this.Title(TitleKind.MonsterDistinguisher) + " 1";
        case QuestKindTitle.MonsterDistinguisher2:
          return this.Title(TitleKind.MonsterDistinguisher) + " 2";
        case QuestKindTitle.MonsterDistinguisher3:
          return this.Title(TitleKind.MonsterDistinguisher) + " 3";
        case QuestKindTitle.MonsterDistinguisher4:
          return this.Title(TitleKind.MonsterDistinguisher) + " 4";
        case QuestKindTitle.MonsterDistinguisher5:
          return this.Title(TitleKind.MonsterDistinguisher) + " 5";
        case QuestKindTitle.MonsterDistinguisher6:
          return this.Title(TitleKind.MonsterDistinguisher) + " 6";
        case QuestKindTitle.EquipmentSlotWeapon1:
          return this.Title(TitleKind.EquipmentSlotWeapon) + " 1";
        case QuestKindTitle.EquipmentSlotWeapon2:
          return this.Title(TitleKind.EquipmentSlotWeapon) + " 2";
        case QuestKindTitle.EquipmentSlotWeapon3:
          return this.Title(TitleKind.EquipmentSlotWeapon) + " 3";
        case QuestKindTitle.EquipmentSlotWeapon4:
          return this.Title(TitleKind.EquipmentSlotWeapon) + " 4";
        case QuestKindTitle.EquipmentSlotWeapon5:
          return this.Title(TitleKind.EquipmentSlotWeapon) + " 5";
        case QuestKindTitle.EquipmentSlotWeapon6:
          return this.Title(TitleKind.EquipmentSlotWeapon) + " 6";
        case QuestKindTitle.EquipmentSlotArmor1:
          return this.Title(TitleKind.EquipmentSlotArmor) + " 1";
        case QuestKindTitle.EquipmentSlotArmor2:
          return this.Title(TitleKind.EquipmentSlotArmor) + " 2";
        case QuestKindTitle.EquipmentSlotArmor3:
          return this.Title(TitleKind.EquipmentSlotArmor) + " 3";
        case QuestKindTitle.EquipmentSlotArmor4:
          return this.Title(TitleKind.EquipmentSlotArmor) + " 4";
        case QuestKindTitle.EquipmentSlotArmor5:
          return this.Title(TitleKind.EquipmentSlotArmor) + " 5";
        case QuestKindTitle.EquipmentSlotArmor6:
          return this.Title(TitleKind.EquipmentSlotArmor) + " 6";
        case QuestKindTitle.EquipmentSlotJewelry1:
          return this.Title(TitleKind.EquipmentSlotJewelry) + " 1";
        case QuestKindTitle.EquipmentSlotJewelry2:
          return this.Title(TitleKind.EquipmentSlotJewelry) + " 2";
        case QuestKindTitle.EquipmentSlotJewelry3:
          return this.Title(TitleKind.EquipmentSlotJewelry) + " 3";
        case QuestKindTitle.EquipmentSlotJewelry4:
          return this.Title(TitleKind.EquipmentSlotJewelry) + " 4";
        case QuestKindTitle.EquipmentSlotJewelry5:
          return this.Title(TitleKind.EquipmentSlotJewelry) + " 5";
        case QuestKindTitle.EquipmentSlotJewelry6:
          return this.Title(TitleKind.EquipmentSlotJewelry) + " 6";
        case QuestKindTitle.PotionSlot1:
          return this.Title(TitleKind.PotionSlot) + " 1";
        case QuestKindTitle.PotionSlot2:
          return this.Title(TitleKind.PotionSlot) + " 2";
        case QuestKindTitle.PotionSlot3:
          return this.Title(TitleKind.PotionSlot) + " 3";
        case QuestKindTitle.PhysicalAttack1:
          return this.Title(TitleKind.PhysicalDamage) + " 1";
        case QuestKindTitle.PhysicalAttack2:
          return this.Title(TitleKind.PhysicalDamage) + " 2";
        case QuestKindTitle.PhysicalAttack3:
          return this.Title(TitleKind.PhysicalDamage) + " 3";
        case QuestKindTitle.PhysicalAttack4:
          return this.Title(TitleKind.PhysicalDamage) + " 4";
        case QuestKindTitle.FireAttack1:
          return this.Title(TitleKind.FireDamage) + " 1";
        case QuestKindTitle.FireAttack2:
          return this.Title(TitleKind.FireDamage) + " 2";
        case QuestKindTitle.FireAttack3:
          return this.Title(TitleKind.FireDamage) + " 3";
        case QuestKindTitle.FireAttack4:
          return this.Title(TitleKind.FireDamage) + " 4";
        case QuestKindTitle.IceAttack1:
          return this.Title(TitleKind.IceDamage) + " 1";
        case QuestKindTitle.IceAttack2:
          return this.Title(TitleKind.IceDamage) + " 2";
        case QuestKindTitle.IceAttack3:
          return this.Title(TitleKind.IceDamage) + " 3";
        case QuestKindTitle.IceAttack4:
          return this.Title(TitleKind.IceDamage) + " 4";
        case QuestKindTitle.ThunderAttack1:
          return this.Title(TitleKind.ThunderDamage) + " 1";
        case QuestKindTitle.ThunderAttack2:
          return this.Title(TitleKind.ThunderDamage) + " 2";
        case QuestKindTitle.ThunderAttack3:
          return this.Title(TitleKind.ThunderDamage) + " 3";
        case QuestKindTitle.ThunderAttack4:
          return this.Title(TitleKind.ThunderDamage) + " 4";
        case QuestKindTitle.LightAttack1:
          return this.Title(TitleKind.LightDamage) + " 1";
        case QuestKindTitle.LightAttack2:
          return this.Title(TitleKind.LightDamage) + " 2";
        case QuestKindTitle.LightAttack3:
          return this.Title(TitleKind.LightDamage) + " 3";
        case QuestKindTitle.LightAttack4:
          return this.Title(TitleKind.LightDamage) + " 4";
        case QuestKindTitle.DarkAttack1:
          return this.Title(TitleKind.DarkDamage) + " 1";
        case QuestKindTitle.DarkAttack2:
          return this.Title(TitleKind.DarkDamage) + " 2";
        case QuestKindTitle.DarkAttack3:
          return this.Title(TitleKind.DarkDamage) + " 3";
        case QuestKindTitle.DarkAttack4:
          return this.Title(TitleKind.DarkDamage) + " 4";
        case QuestKindTitle.Porter1:
          return "The Great Race 1";
        case QuestKindTitle.Porter2:
          return "The Great Race 2";
        case QuestKindTitle.Porter3:
          return "The Great Race 3";
        case QuestKindTitle.Porter4:
          return "The Great Race 4";
        case QuestKindTitle.Porter5:
          return "The Great Race 5";
        case QuestKindTitle.Porter6:
          return "The Great Race 6";
        case QuestKindTitle.Alchemist1:
          return this.Title(TitleKind.Alchemist) + " 1";
        case QuestKindTitle.Alchemist2:
          return this.Title(TitleKind.Alchemist) + " 2";
        case QuestKindTitle.Alchemist3:
          return this.Title(TitleKind.Alchemist) + " 3";
        case QuestKindTitle.Alchemist4:
          return this.Title(TitleKind.Alchemist) + " 4";
        case QuestKindTitle.Alchemist5:
          return this.Title(TitleKind.Alchemist) + " 5";
        case QuestKindTitle.EquipmentProf1:
          return this.Title(TitleKind.EquipmentProficiency) + " 1";
        case QuestKindTitle.EquipmentProf2:
          return this.Title(TitleKind.EquipmentProficiency) + " 2";
        case QuestKindTitle.EquipmentProf3:
          return this.Title(TitleKind.EquipmentProficiency) + " 3";
        case QuestKindTitle.EquipmentProf4:
          return this.Title(TitleKind.EquipmentProficiency) + " 4";
        case QuestKindTitle.EquipmentProf5:
          return this.Title(TitleKind.EquipmentProficiency) + " 5";
        case QuestKindTitle.MetalHunter1:
          return this.Title(TitleKind.MetalHunter) + " 1";
        case QuestKindTitle.MetalHunter2:
          return this.Title(TitleKind.MetalHunter) + " 2";
        case QuestKindTitle.MetalHunter3:
          return this.Title(TitleKind.MetalHunter) + " 3";
        case QuestKindTitle.MetalHunter4:
          return this.Title(TitleKind.MetalHunter) + " 4";
        case QuestKindTitle.FireResistance1:
          return this.Title(TitleKind.FireResistance) + " 1";
        case QuestKindTitle.FireResistance2:
          return this.Title(TitleKind.FireResistance) + " 2";
        case QuestKindTitle.FireResistance3:
          return this.Title(TitleKind.FireResistance) + " 3";
        case QuestKindTitle.FireResistance4:
          return this.Title(TitleKind.FireResistance) + " 4";
        case QuestKindTitle.FireResistance5:
          return this.Title(TitleKind.FireResistance) + " 5";
        case QuestKindTitle.IceResistance1:
          return this.Title(TitleKind.IceResistance) + " 1";
        case QuestKindTitle.IceResistance2:
          return this.Title(TitleKind.IceResistance) + " 2";
        case QuestKindTitle.IceResistance3:
          return this.Title(TitleKind.IceResistance) + " 3";
        case QuestKindTitle.IceResistance4:
          return this.Title(TitleKind.IceResistance) + " 4";
        case QuestKindTitle.IceResistance5:
          return this.Title(TitleKind.IceResistance) + " 5";
        case QuestKindTitle.ThunderResistance1:
          return this.Title(TitleKind.ThunderResistance) + " 1";
        case QuestKindTitle.ThunderResistance2:
          return this.Title(TitleKind.ThunderResistance) + " 2";
        case QuestKindTitle.ThunderResistance3:
          return this.Title(TitleKind.ThunderResistance) + " 3";
        case QuestKindTitle.ThunderResistance4:
          return this.Title(TitleKind.ThunderResistance) + " 4";
        case QuestKindTitle.ThunderResistance5:
          return this.Title(TitleKind.ThunderResistance) + " 5";
        case QuestKindTitle.LightResistance1:
          return this.Title(TitleKind.LightResistance) + " 1";
        case QuestKindTitle.LightResistance2:
          return this.Title(TitleKind.LightResistance) + " 2";
        case QuestKindTitle.LightResistance3:
          return this.Title(TitleKind.LightResistance) + " 3";
        case QuestKindTitle.LightResistance4:
          return this.Title(TitleKind.LightResistance) + " 4";
        case QuestKindTitle.LightResistance5:
          return this.Title(TitleKind.LightResistance) + " 5";
        case QuestKindTitle.DarkResistance1:
          return this.Title(TitleKind.DarkResistance) + " 1";
        case QuestKindTitle.DarkResistance2:
          return this.Title(TitleKind.DarkResistance) + " 2";
        case QuestKindTitle.DarkResistance3:
          return this.Title(TitleKind.DarkResistance) + " 3";
        case QuestKindTitle.DarkResistance4:
          return this.Title(TitleKind.DarkResistance) + " 4";
        case QuestKindTitle.DarkResistance5:
          return this.Title(TitleKind.DarkResistance) + " 5";
        case QuestKindTitle.Survival1:
          return this.Title(TitleKind.Survival) + " 1";
        case QuestKindTitle.Survival2:
          return this.Title(TitleKind.Survival) + " 2";
        case QuestKindTitle.Survival3:
          return this.Title(TitleKind.Survival) + " 3";
        case QuestKindTitle.Survival4:
          return this.Title(TitleKind.Survival) + " 4";
        case QuestKindTitle.Cooperation1:
          return this.Title(TitleKind.Cooperation) + " 1";
        case QuestKindTitle.Cooperation2:
          return this.Title(TitleKind.Cooperation) + " 2";
        case QuestKindTitle.Cooperation3:
          return this.Title(TitleKind.Cooperation) + " 3";
        case QuestKindTitle.Quester1:
          return this.Title(TitleKind.Quester) + " 1";
        case QuestKindTitle.Quester2:
          return this.Title(TitleKind.Quester) + " 2";
        case QuestKindTitle.Quester3:
          return this.Title(TitleKind.Quester) + " 3";
        case QuestKindTitle.Quester4:
          return this.Title(TitleKind.Quester) + " 4";
        case QuestKindTitle.Quester5:
          return this.Title(TitleKind.Quester) + " 5";
        case QuestKindTitle.Quester6:
          return this.Title(TitleKind.Quester) + " 6";
        case QuestKindTitle.Quester7:
          return this.Title(TitleKind.Quester) + " 7";
        case QuestKindTitle.Quester8:
          return this.Title(TitleKind.Quester) + " 8";
        case QuestKindTitle.Quester9:
          return this.Title(TitleKind.Quester) + " 9";
        case QuestKindTitle.Quester10:
          return this.Title(TitleKind.Quester) + " 10";
        case QuestKindTitle.MonsterDistinguisher7:
          return this.Title(TitleKind.MonsterDistinguisher) + " 7";
        case QuestKindTitle.MonsterDistinguisher8:
          return this.Title(TitleKind.MonsterDistinguisher) + " 8";
        case QuestKindTitle.MetalHunter5:
          return this.Title(TitleKind.MetalHunter) + " 5";
        case QuestKindTitle.MetalHunter6:
          return this.Title(TitleKind.MetalHunter) + " 6";
        case QuestKindTitle.MetalHunter7:
          return this.Title(TitleKind.MetalHunter) + " 7";
        case QuestKindTitle.MetalHunter8:
          return this.Title(TitleKind.MetalHunter) + " 8";
        case QuestKindTitle.MetalHunter9:
          return this.Title(TitleKind.MetalHunter) + " 9";
        case QuestKindTitle.ExplorerOfSD1:
          return this.Title(TitleKind.ExplorerOfSD) + " 1";
        case QuestKindTitle.ExplorerOfSD2:
          return this.Title(TitleKind.ExplorerOfSD) + " 2";
        case QuestKindTitle.ExplorerOfSD3:
          return this.Title(TitleKind.ExplorerOfSD) + " 3";
        case QuestKindTitle.ExplorerOfSD4:
          return this.Title(TitleKind.ExplorerOfSD) + " 4";
        case QuestKindTitle.ExplorerOfSD5:
          return this.Title(TitleKind.ExplorerOfSD) + " 5";
        case QuestKindTitle.ExplorerOfSD6:
          return this.Title(TitleKind.ExplorerOfSD) + " 6";
        case QuestKindTitle.ExplorerOfSD7:
          return this.Title(TitleKind.ExplorerOfSD) + " 7";
        case QuestKindTitle.ExplorerOfSD8:
          return this.Title(TitleKind.ExplorerOfSD) + " 8";
        case QuestKindTitle.ExplorerOfSD9:
          return this.Title(TitleKind.ExplorerOfSD) + " 9";
        case QuestKindTitle.ExplorerOfSD10:
          return this.Title(TitleKind.ExplorerOfSD) + " 10";
        case QuestKindTitle.ExplorerOfSD11:
          return this.Title(TitleKind.ExplorerOfSD) + " 11";
        case QuestKindTitle.ExplorerOfSD12:
          return this.Title(TitleKind.ExplorerOfSD) + " 12";
        case QuestKindTitle.ExplorerOfSD13:
          return this.Title(TitleKind.ExplorerOfSD) + " 13";
        case QuestKindTitle.ExplorerOfSD14:
          return this.Title(TitleKind.ExplorerOfSD) + " 14";
        case QuestKindTitle.ExplorerOfSD15:
          return this.Title(TitleKind.ExplorerOfSD) + " 15";
      }
      break;
    case QuestKind.General:
      // switch (kindGeneral) {
      //   case QuestKindGeneral.CompleteArea0_0:
      //     return "Find My Brother 1";
      //   case QuestKindGeneral.CompleteArea0_1:
      //     return "Find My Brother 2";
      //   case QuestKindGeneral.CompleteArea0_2:
      //     return "Find My Brother 3";
      //   case QuestKindGeneral.CompleteArea0_3:
      //     return "Find My Brother 4";
      //   case QuestKindGeneral.DefeatNormalSlime1:
      //     return "Slime Infestation 1";
      //   case QuestKindGeneral.DefeatNormalSlime2:
      //     return "Slime Infestation 2";
      //   case QuestKindGeneral.DefeatNormalSlime3:
      //     return "Slime Infestation 3";
      //   case QuestKindGeneral.BringOilOfSlime:
      //     return "The Slime Lover";
      //   case QuestKindGeneral.DefeatRedSlime:
      //     return "Red Slime Threat";
      //   case QuestKindGeneral.DefeatNormalMagicSlime:
      //     return "A Debt Left Unpaid";
      //   case QuestKindGeneral.DefeatRedMagicSlime:
      //     return "Magicslime Menace";
      //   case QuestKindGeneral.DefeatGreenMagicSlime:
      //     return "Sending A Message";
      //   case QuestKindGeneral.CompleteDungeon0_0:
      //     return "Find My Husband 1";
      //   case QuestKindGeneral.CompleteDungeon0_1:
      //     return "Find My Husband 2";
      //   case QuestKindGeneral.CompleteDungeon0_2:
      //     return "Find My Husband 3";
      //   case QuestKindGeneral.DefeatYellowBat:
      //     return "The Mine 1";
      //   case QuestKindGeneral.DefeatRedBat:
      //     return "The Mine 2";
      //   case QuestKindGeneral.DefeatGreenBat:
      //     return "The Mine 3";
      //   case QuestKindGeneral.DefeatPurpleBat:
      //     return "A Deep Dark Place";
      //   case QuestKindGeneral.DefeatBlueBat:
      //     return "A Strange Request";
      //   case QuestKindGeneral.BringToEnchantShard:
      //     return "The Big One";
      //   case QuestKindGeneral.CompleteDungeon2_0:
      //     return "Haunted Mansion 1";
      //   case QuestKindGeneral.CompleteDungeon2_1:
      //     return "Haunted Mansion 2";
      //   case QuestKindGeneral.CaptureNormalSpider:
      //     return "Haunted Mansion 3";
      //   case QuestKindGeneral.CompleteDungeon2_2:
      //     return "Haunted Mansion 4";
      //   case QuestKindGeneral.CaptureYellowSlime:
      //     return "All Things Yellow!";
      //   case QuestKindGeneral.CaptureNormalFairy:
      //     return "King Of The Fairies 1";
      //   case QuestKindGeneral.CaptureBlueFairy:
      //     return "King Of The Fairies 2";
      //   case QuestKindGeneral.CaptureYellowFairy:
      //     return "King Of The Fairies 3";
      //   case QuestKindGeneral.CaptureRedFairy:
      //     return "Queen Of The Fairies";
      //   case QuestKindGeneral.CaptureGreenFairy:
      //     return "Good Luck Charms";
      //   case QuestKindGeneral.CaptureNormalFox:
      //     return "Fox Friends";
      //   case QuestKindGeneral.BringFoxTails:
      //     return "Fox Town";
      //   case QuestKindGeneral.CaptureGreenFox:
      //     return "Build A Better Shrine";
      //   case QuestKindGeneral.CapturePurpleFox:
      //     return "Journey Of A Thousand Miles";
      //   case QuestKindGeneral.CaptureBlueDevilFish:
      //     return "Over The Pond";
      //   case QuestKindGeneral.DefeatBlueDevilFish:
      //     return "Heresy";
      //   case QuestKindGeneral.DefeatBossDevilFish:
      //     return "Fishing With Dynamite";
      //   case QuestKindGeneral.BringFairyFoxFish:
      //     return "For The Casing";
      //   case QuestKindGeneral.DefeatNormalTreant:
      //     return "Wombat Escapees 1";
      //   case QuestKindGeneral.DefeatYellowTreant:
      //     return "Wombat Escapees 2";
      //   case QuestKindGeneral.DefeatRedTreant:
      //     return "Wombat Escapees 3";
      //   case QuestKindGeneral.TheBiggerOne:
      //     return "The Bigger One";
      //   case QuestKindGeneral.TheBiggestOne:
      //     return "The Biggest One";
      //   case QuestKindGeneral.TheBiggerestOne:
      //     return "The Biggerest One";
      //   case QuestKindGeneral.TigerTaming:
      //     return "Tiger Taming";
      // }
      break;
  }
  return "not found";
}
