import { MultiplierInfo } from "../../../Multiplier";
import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindGlobal } from "../../../type/QuestKindGlobal";
import { GlobalQuestType } from "../../../type/GlobalQuestType";
import { QuestKind } from "../../../type/QuestKind";


export class GlobalQuest_Nitro6 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Global;
    this.globalQuestType = GlobalQuestType.Nitro;
    this.kindGlobal = QuestKindGlobal.Nitro6;
    this.rewardNitro = (() => 5000.0);
    }

  StartQuest() {
    
    
    globalThis.data.nitro.nitroCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Quest, MultiplierType.Add, (() => 5000.0), (() => this.isCleared)));
  }
}
