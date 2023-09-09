import { BuildingKind } from "./BuildingKind";
import { PotionKind } from "./PotionKind";
import { UpgradeKind } from "./UpgradeKind";
import { MonsterKind, MonsterColor, monsterSpecies } from "./MonsterKind";
import { ExpeditionKind } from "./ExpeditionKind";
import { SourceKind } from "./SourceKind";

export interface DataType {
  isInitialized: boolean;
  localStorage: any;
  clearedMission?: number;
  custom?: any;
  town?: BuildingKind;
  talisman?: PotionKind;
  pet?: MonsterKind;
  expedition?: ExpeditionKind & { totalLevel: number };
  source?: SourceKind;
  upgrade?: any;
  misc?: any;
  expeditionTeams: any;
}
