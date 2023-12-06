import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_SkillMaster2 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.SkillMaster2;
    this.rewardExp = (() => 75000.0);
    this.rewardTitleKind = TitleKind.SkillMaster;
    this.rewardTitleLevel = 2;
    }

  StartQuest() {
    
    
  }

 
}
