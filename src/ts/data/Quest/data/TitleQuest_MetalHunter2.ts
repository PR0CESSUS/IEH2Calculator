import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_MetalHunter2 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.MetalHunter2;
    this.rewardTitleKind = TitleKind.MetalHunter;
    this.rewardTitleLevel = 2;
    
    this.rewardExp = (() => 2500000.0);
    
    this.defeatRequredDefeatNum = (() => 2.0);
    }

  StartQuest() {}
}
