import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { WAM_BuildingLevel } from "./data/WAM_BuildingLevel";
import { WAM_MissionClearNum } from "./data/WAM_MissionClearNum";
import { WAM_UpgradeLevel } from "./data/WAM_UpgradeLevel";
import { WAM_MoveDistance } from "./data/WAM_MoveDistance";
import { WAM_DictionaryPoint } from "./data/WAM_DictionaryPoint";
import { WAM_DisassembleEquipment } from "./data/WAM_DisassembleEquipment";
import { WAM_RebirthPointGainTier1 } from "./data/WAM_RebirthPointGainTier1";
import { WAM_RebirthPointGainTier2 } from "./data/WAM_RebirthPointGainTier2";
import { WAU_GuildExpGain } from "./data/WAU_GuildExpGain";
import { WAU_AreaClearCount } from "./data/WAU_AreaClearCount";
import { WAU_ActiveHero } from "./data/WAU_ActiveHero";
import { WAU_SkillProfGain } from "./data/WAU_SkillProfGain";
import { WAU_PreRebirthTier1 } from "./data/WAU_PreRebirthTier1";
import { WAU_PreRebirthTier2 } from "./data/WAU_PreRebirthTier2";
import { WAU_RebirthTier1BonusCap } from "./data/WAU_RebirthTier1BonusCap";
import { WAU_RebirthTier2BonusCap } from "./data/WAU_RebirthTier2BonusCap";
import { WAU_PointGainBonus } from "./data/WAU_PointGainBonus";
import { WAU_NitroSpeed } from "./data/WAU_NitroSpeed";

export class WorldAscensionTier1 extends WorldAscension {
  get tier() {
    return 0;
  }

  SetUpgrade() {
    this.upgradeList.push(new WAU_GuildExpGain(this));
    this.upgradeList.push(new WAU_AreaClearCount(this));
    this.upgradeList.push(new WAU_ActiveHero(this));
    this.upgradeList.push(new WAU_SkillProfGain(this));
    this.upgradeList.push(new WAU_PreRebirthTier1(this));
    this.upgradeList.push(new WAU_PreRebirthTier2(this));
    this.upgradeList.push(new WAU_RebirthTier1BonusCap(this));
    this.upgradeList.push(new WAU_RebirthTier2BonusCap(this));
    this.upgradeList.push(new WAU_PointGainBonus(this));
    this.upgradeList.push(new WAU_NitroSpeed(this));
  }

  SetMilestone() {
    this.milestoneList.push(new WAM_BuildingLevel(this));
    this.milestoneList.push(new WAM_MissionClearNum(this));
    this.milestoneList.push(new WAM_UpgradeLevel(this));
    this.milestoneList.push(new WAM_MoveDistance(this));
    this.milestoneList.push(new WAM_DictionaryPoint(this));
    this.milestoneList.push(new WAM_DisassembleEquipment(this));
    this.milestoneList.push(new WAM_RebirthPointGainTier1(this));
    this.milestoneList.push(new WAM_RebirthPointGainTier2(this));
  }
}
