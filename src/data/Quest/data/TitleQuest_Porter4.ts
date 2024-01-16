import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";

export class TitleQuest_Porter4 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.Porter4;
    this.rewardExp = () => 2000000.0;
    this.rewardTitleKind = TitleKind.MoveSpeed;
    this.rewardTitleLevel = 4;

    this.porterRequiredMovedDistance = 100000000.0;
  }

  StartQuest() {}
}
