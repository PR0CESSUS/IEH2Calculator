import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_MetalHunter9 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.MetalHunter9;
    this.rewardTitleKind = TitleKind.MetalHunter;
    this.rewardTitleLevel = 9;
    
    
    this.defeatRequredDefeatNum = (() => 10000.0);
    }

  StartQuest() {}
}
