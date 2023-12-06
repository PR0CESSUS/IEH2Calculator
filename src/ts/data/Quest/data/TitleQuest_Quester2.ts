import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_Quester2 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.Quester2;
    this.rewardTitleKind = TitleKind.Quester;
    this.rewardTitleLevel = 2;
    
    this.questerRequiredClearNum = 500.0;
    }

  

  

  StartQuest() {
    
    
  }
}
