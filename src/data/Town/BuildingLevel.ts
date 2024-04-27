import { BuildingKind } from "@/type/BuildingKind";
import { DATA } from "..";

export class BuildingLevel {
  data: DATA;
  kind: BuildingKind;

  constructor(DATA: DATA, kind: BuildingKind) {
    this.data = DATA;
    this.kind = kind;
  }

  get value() {
    return this.data.source.buildingLevels[this.kind];
  }
  set value(value) {
    this.data.source.buildingLevels[this.kind] = value;
  }
}
