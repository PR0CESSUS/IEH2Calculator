import { MultiplierInfo, Multiplier } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { SDGemKind } from "../../type/SDGemKind";
import { SDGem } from "./SDGem";
import { SDG_Almandine } from "./SDG/SDG_Almandine";
import { SDG_Amber } from "./SDG/SDG_Amber";
import { SDG_BlueTourmaline } from "./SDG/SDG_BlueTourmaline";
import { SDG_Carnelian } from "./SDG/SDG_Carnelian";
import { SDG_Diamond } from "./SDG/SDG_Diamond";
import { SDG_Emerald } from "./SDG/SDG_Emerald";
import { SDG_Hackmanite } from "./SDG/SDG_Hackmanite";
import { SDG_Heliodor } from "./SDG/SDG_Heliodor";
import { SDG_Kunzite } from "./SDG/SDG_Kunzite";
import { SDG_Morganite } from "./SDG/SDG_Morganite";
import { SDG_Obsidian } from "./SDG/SDG_Obsidian";
import { SDG_Peridot } from "./SDG/SDG_Peridot";
import { SDG_Sunstone } from "./SDG/SDG_Sunstone";
import { SDG_Tanzanite } from "./SDG/SDG_Tanzanite";
import { SDG_Turquoise } from "./SDG/SDG_Turquoise";
export class SDGemRitual {
  //   sdgCtrl: SuperDungeonGlobalController;
  sdGemList: SDGem[] = [];
  progressSpeedModifier: Multiplier;

  constructor() {
    // this.sdgCtrl = sdgCtrl;
    this.progressSpeedModifier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.sdGemList.push(new SDG_Sunstone());
    this.sdGemList.push(new SDG_Morganite());
    this.sdGemList.push(new SDG_Tanzanite());
    this.sdGemList.push(new SDG_Heliodor());
    this.sdGemList.push(new SDG_Peridot());
    this.sdGemList.push(new SDG_Obsidian());
    this.sdGemList.push(new SDG_Hackmanite());
    this.sdGemList.push(new SDG_Turquoise());
    this.sdGemList.push(new SDG_Kunzite());
    this.sdGemList.push(new SDG_Carnelian());
    this.sdGemList.push(new SDG_BlueTourmaline());
    this.sdGemList.push(new SDG_Amber());
    this.sdGemList.push(new SDG_Diamond());
    this.sdGemList.push(new SDG_Almandine());
    this.sdGemList.push(new SDG_Emerald());
  }

  Start() {
    for (let index = 0; index < this.sdGemList.length; index++) this.sdGemList[index].Start();
  }

  Gem(kind: SDGemKind) {
    for (let index = 0; index < this.sdGemList.length; index++) {
      if (this.sdGemList[index].kind == kind) return this.sdGemList[index];
    }
    return null;
  }
}
