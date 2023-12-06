import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindGlobal } from "../../../type/QuestKindGlobal";
import { QuestKind } from "../../../type/QuestKind";


export class GlobalQuest_SD4 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Global;
    this.kindGlobal = QuestKindGlobal.SD4;
    
    this.rewardSDRefreshTicket = (() => 1.0);
    }

  StartQuest() {
    
    
  }
}
