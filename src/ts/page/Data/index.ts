import { App } from "../../App";
import { Page } from "../Page";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { PotionKind } from "../../type/PotionKind";
import { HeroKind } from "../../type/HeroKind";
import { ChallengeKind } from "../../type/ChallengeKind";
import { Util } from "../../Util";
import { Equipment } from "../../data/Equipment/Equipment";
import { EquipmentKind } from "../../type/EquipmentKind";
import { Stats } from "../../type/Stats";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ChallengeMonsterKind } from "../../type/ChallengeMonsterKind";

export class PageData {
  constructor() {}
  Initialization() {}

  get html() {
    let html = ``;
    html += "<data-overview></data-overview>";

    return html;
  }
}
