import { BuildingKind } from "./BuildingKind";
import { PotionKind } from "./PotionKind";
import { UpgradeKind } from "./UpgradeKind";
import { MonsterKind, MonsterColor, monsterSpecies } from "./MonsterKind";
import { ExpeditionKind } from "./ExpeditionKind";
import { SourceKind } from "./SourceKind";
import { DataStatistic } from "../data/DataStatistic";
import { DataExpedition } from "../data/DataExpedition";
import { DataPet } from "../data/DataPet";
import { DataTown } from "../data/DataTown";
import { DataGuild } from "../data/DataGuild";
import { DataMisc } from "../data/DataMisc";

export interface DataType {
  clearedMission?: number;
  custom?: any;
  town: DataTown;
  talisman?: PotionKind;
  pet: DataPet;
  // expedition?: ExpeditionKind & { totalLevel: number };
  expedition?: DataExpedition;
  source?: SourceKind;
  upgrade?: any;
  misc: DataMisc;
  stat: DataStatistic;
  quest: any;
  guild: DataGuild;
}
