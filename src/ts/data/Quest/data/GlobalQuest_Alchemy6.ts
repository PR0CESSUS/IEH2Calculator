import { MultiplierInfo } from "../../../Multiplier";
import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindGlobal } from "../../../type/QuestKindGlobal";
import { GlobalQuestType } from "../../../type/GlobalQuestType";
import { QuestKind } from "../../../type/QuestKind";


export class GlobalQuest_Alchemy6 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Global;
    this.globalQuestType = GlobalQuestType.Alchemy;
    this.kindGlobal = QuestKindGlobal.Alchemy6;
    
    }

  StartQuest() {
    
    
    globalThis.data.alchemy.catalyst.criticalChanceMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Quest, MultiplierType.Mul, (() => 0.25), (() => this.isCleared)));
    globalThis.data.alchemy.maxMysteriousWaterExpandedCapNum.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Quest, MultiplierType.Add, (() => 250.0), (() => this.isCleared)));
  }
}
