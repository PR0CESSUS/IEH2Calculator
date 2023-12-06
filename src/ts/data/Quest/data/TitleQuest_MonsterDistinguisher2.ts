import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_MonsterDistinguisher2 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.MonsterDistinguisher2;
    
    this.defeatRequredDefeatNum = (() => 100.0);
    this.rewardGold = (() => 500.0);
    this.rewardExp = (() => 7500.0);
    this.rewardTitleKind = TitleKind.MonsterDistinguisher;
    this.rewardTitleLevel = 2;
    }

  StartQuest() {}
}
