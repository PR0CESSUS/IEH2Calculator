import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_MonsterDistinguisher7 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.MonsterDistinguisher7;
    
    this.defeatRequredDefeatNum = (() => 1000000.0);
    this.rewardTitleKind = TitleKind.MonsterDistinguisher;
    this.rewardTitleLevel = 7;
    
    }

  StartQuest() {}
}
