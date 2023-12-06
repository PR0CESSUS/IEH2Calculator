import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_Quester3 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.Quester3;
    this.rewardTitleKind = TitleKind.Quester;
    this.rewardTitleLevel = 3;
    
    this.questerRequiredClearNum = 2000.0;
    }

  

  

  StartQuest() {
    
    
  }
}
