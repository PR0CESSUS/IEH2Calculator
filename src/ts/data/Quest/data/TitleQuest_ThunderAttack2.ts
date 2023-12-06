import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_ThunderAttack2 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.ThunderAttack2;
    this.rewardExp = (() => 1500000.0);
    this.rewardTitleKind = TitleKind.ThunderDamage;
    this.rewardTitleLevel = 2;
    this.elementTriggeredRequiredNum = 25000.0;
    
    }

  

  

  StartQuest() {
    
    
  }
}
