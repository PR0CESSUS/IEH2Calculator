import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_SkillMaster1 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.SkillMaster1;
    this.rewardExp = (() => 2000.0);
    this.rewardTitleKind = TitleKind.SkillMaster;
    this.rewardTitleLevel = 1;
    }

  StartQuest() {
    
    
  }

 
}
