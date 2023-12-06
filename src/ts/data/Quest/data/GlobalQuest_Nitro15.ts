import { MultiplierInfo } from "../../../Multiplier";
import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { MultiplierType } from "../../../type/MultiplierType";
import { MultiplierKind } from "../../../type/MultiplierKind";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindGlobal } from "../../../type/QuestKindGlobal";
import { GlobalQuestType } from "../../../type/GlobalQuestType";
import { QuestKind } from "../../../type/QuestKind";


export class GlobalQuest_Nitro15 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Global;
    this.globalQuestType = GlobalQuestType.Nitro;
    this.kindGlobal = QuestKindGlobal.Nitro15;
    this.rewardNitro = (() => 50000.0);
    }

  StartQuest() {
    
    
    globalThis.data.nitro.nitroCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Quest, MultiplierType.Add, (() => 50000.0), (() => this.isCleared)));
  }
}
