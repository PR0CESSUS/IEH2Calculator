import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_ExplorerOfSD4 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.ExplorerOfSD4;
    this.rewardExp = (() => 0.0);
    this.rewardTitleKind = TitleKind.ExplorerOfSD;
    this.rewardTitleLevel = 4;
    
    this.rewardSDRefreshTicket = (() => 1.0);
    }

  

  StartQuest() {
    
    
  }
}
