import { DATA } from "..";
import { WorldAscensionMilestone } from "./WorldAscensionMilestone";
import { WorldAscensionMiletoneKind } from "../../type/WorldAscensionMiletoneKind";

export class WorldAscensionTier1 {
  milestoneList: WorldAscensionMilestone[] = [];

  constructor(DATA: DATA) {
    this.milestoneList.push(new WorldAscensionMilestone(DATA, WorldAscensionMiletoneKind.TownBuldingLevel));
    this.milestoneList.push(new WorldAscensionMilestone(DATA, WorldAscensionMiletoneKind.MissionClearNum));
    this.milestoneList.push(new WorldAscensionMilestone(DATA, WorldAscensionMiletoneKind.UpgradeLevel));
    this.milestoneList.push(new WorldAscensionMilestone(DATA, WorldAscensionMiletoneKind.MoveDistance));
    this.milestoneList.push(new WorldAscensionMilestone(DATA, WorldAscensionMiletoneKind.DictionaryPoint));
    this.milestoneList.push(new WorldAscensionMilestone(DATA, WorldAscensionMiletoneKind.DisassembleEquipment));
    this.milestoneList.push(new WorldAscensionMilestone(DATA, WorldAscensionMiletoneKind.RebirthPointGainTier1));
    this.milestoneList.push(new WorldAscensionMilestone(DATA, WorldAscensionMiletoneKind.RebirthPointGainTier2));
  }

  Start() {
    this.milestoneList.forEach((element) => {
      element.Start();
    });
  }
}
