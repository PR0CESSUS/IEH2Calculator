import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_MonsterDistinguisher3 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.MonsterDistinguisher3;
    
    this.defeatRequredDefeatNum = (() => 250.0);
    this.rewardGold = (() => 1000.0);
    this.rewardExp = (() => 100000.0);
    this.rewardTitleKind = TitleKind.MonsterDistinguisher;
    this.rewardTitleLevel = 3;
    
    }

  StartQuest() {}
}
