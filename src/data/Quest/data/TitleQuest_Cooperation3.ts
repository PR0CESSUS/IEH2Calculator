import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_Cooperation3 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.Cooperation3;
    this.rewardExp = (() => 1500000000.0);
    this.rewardTitleKind = TitleKind.Cooperation;
    this.rewardTitleLevel = 3;
    
    }

  StartQuest() {
    
    
  }
}
