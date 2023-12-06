import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_ThunderAttack1 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.ThunderAttack1;
    this.rewardExp = (() => 200000.0);
    this.rewardTitleKind = TitleKind.ThunderDamage;
    this.rewardTitleLevel = 1;
    this.elementTriggeredRequiredNum = 5000.0;
    }

  

  

  StartQuest() {
    
    
    
  }
}
