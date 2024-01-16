import { WAM_BuildingLevel } from "./WAM_BuildingLevel";
import { WAM_DictionaryPoint } from "./WAM_DictionaryPoint";
import { WAM_DisassembleEquipment } from "./WAM_DisassembleEquipment";
import { WAM_UpgradeLevel } from "./WAM_UpgradeLevel";
import { WAM_MissionClearNum } from "./WAM_MissionClearNum";
import { WAM_MoveDistance } from "./WAM_MoveDistance";
import { WAM_RebirthPointGainTier1 } from "./WAM_RebirthPointGainTier1";
import { WAM_RebirthPointGainTier2 } from "./WAM_RebirthPointGainTier2";

export class WorldAscensionTier1 {
  milestoneList: any[] = [];

  constructor() {
    this.milestoneList.push(new WAM_BuildingLevel());
    this.milestoneList.push(new WAM_MissionClearNum());
    this.milestoneList.push(new WAM_UpgradeLevel());
    this.milestoneList.push(new WAM_MoveDistance());
    this.milestoneList.push(new WAM_DictionaryPoint());
    this.milestoneList.push(new WAM_DisassembleEquipment());
    this.milestoneList.push(new WAM_RebirthPointGainTier1());
    this.milestoneList.push(new WAM_RebirthPointGainTier2());
  }

  Start() {
    this.milestoneList.forEach((element) => {
      element.Start();
    });
  }
}
