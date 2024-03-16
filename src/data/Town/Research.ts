import { DataTown } from ".";
import { DATA } from "..";
import { ResourceKind } from "../../type/ResourceKind";
import { BUILDING } from "./BUILDING";

export class Research {
  data: DATA;
  building: BUILDING;
  kind: ResourceKind;
  townCtrl: DataTown;
  constructor(building: BUILDING, kind: ResourceKind) {
    this.data = building.data;
    this.townCtrl = building.townCtrl;
    this.building = building;
    this.kind = kind;
  }

  get level() {
    switch (this.kind) {
      case ResourceKind.Stone:
        return this.data.source.buildingResearchLevelsStone[this.building.kind];
      case ResourceKind.Crystal:
        return this.data.source.buildingResearchLevelsCrystal[this.building.kind];
      case ResourceKind.Leaf:
        return this.data.source.buildingResearchLevelsLeaf[this.building.kind];

      default:
        return 0;
    }
  }

  set level(value) {
    switch (this.kind) {
      case ResourceKind.Stone:
        this.data.source.buildingResearchLevelsStone[this.building.kind] = Math.min(this.building.Level(), value);
        break;
      case ResourceKind.Crystal:
        this.data.source.buildingResearchLevelsCrystal[this.building.kind] = Math.min(this.building.Level(), value);
        break;
      case ResourceKind.Leaf:
        this.data.source.buildingResearchLevelsLeaf[this.building.kind] = Math.min(this.building.Level(), value);
        break;

      default:
        break;
    }
  }

  get researchMul() {
    return this.townCtrl.researchEffectMultipliers[this.kind].Value();
  }
}
