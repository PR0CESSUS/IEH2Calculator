import { MultiplierInfo } from "../../../Multiplier";
import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { Stats } from "../../../type/Stats";
import { QuestKindGlobal } from "../../../type/QuestKindGlobal";
import { GlobalQuestType } from "../../../type/GlobalQuestType";
import { QuestKind } from "../../../type/QuestKind";


export class GlobalQuest_Capture3 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Global;
    this.globalQuestType = GlobalQuestType.Capture;
    this.kindGlobal = QuestKindGlobal.Capture3;
    }

  StartQuest() {
    
    
    globalThis.data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.Quest, MultiplierType.Mul, (() => 0.3), (() => this.isCleared)));
  }
}
