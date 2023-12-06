import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_PhysicalAttack4 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.PhysicalAttack4;
    this.rewardExp = (() => 50000000.0);
    this.rewardTitleKind = TitleKind.PhysicalDamage;
    this.rewardTitleLevel = 4;
    this.elementTriggeredRequiredNum = 5000000.0;
    
    }

  

  

  StartQuest() {
    
    
  }
}
