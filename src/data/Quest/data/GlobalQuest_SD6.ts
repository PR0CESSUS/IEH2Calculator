import { MultiplierInfo } from "../../../Multiplier";
import { Enums } from "../../../Enums";
import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { Stats } from "../../../type/Stats";
import { QuestKindGlobal } from "../../../type/QuestKindGlobal";
import { QuestKind } from "../../../type/QuestKind";


export class GlobalQuest_SD6 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Global;
    this.kindGlobal = QuestKindGlobal.SD6;
    
    this.rewardSDRefreshTicket = (() => 1.0);
    }

  StartQuest() {
    
    
  }

  SetRewardEffect() {
    for (let index = 0; index < Enums.HeroKind; index++)
      globalThis.data.superStats.Hero(index).fameGain.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Quest, MultiplierType.Mul, (() => 0.4), (() => this.isCleared)));
  }
}
