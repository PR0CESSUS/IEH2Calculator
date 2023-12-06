import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_MetalHunter8 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.MetalHunter8;
    this.rewardTitleKind = TitleKind.MetalHunter;
    this.rewardTitleLevel = 8;
    
    
    this.defeatRequredDefeatNum = (() => 2000.0);
    }

  StartQuest() {}
}
