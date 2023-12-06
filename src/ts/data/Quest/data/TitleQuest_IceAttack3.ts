import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_IceAttack3 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.IceAttack3;
    this.rewardExp = (() => 10000000.0);
    this.rewardTitleKind = TitleKind.IceDamage;
    this.rewardTitleLevel = 3;
    this.elementTriggeredRequiredNum = 500000.0;
    
    }

  

  

  StartQuest() {
    
    
  }
}
