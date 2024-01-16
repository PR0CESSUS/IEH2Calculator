import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";

export class TitleQuest_Porter1 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.Porter1;
    this.rewardExp = () => 15000.0;
    this.rewardTitleKind = TitleKind.MoveSpeed;
    this.rewardTitleLevel = 1;

    this.porterRequiredMovedDistance = 100000.0;
  }

  StartQuest() {}
}
