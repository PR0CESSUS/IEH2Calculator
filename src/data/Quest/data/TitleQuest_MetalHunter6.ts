import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_MetalHunter6 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.MetalHunter6;
    this.rewardTitleKind = TitleKind.MetalHunter;
    this.rewardTitleLevel = 6;
    
    
    this.defeatRequredDefeatNum = (() => 50.0);
    }

  StartQuest() {}
}
