import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_EquipmentProf5 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.EquipmentProf5;
    this.rewardExp = (() => 5E+15);
    this.rewardTitleKind = TitleKind.EquipmentProficiency;
    this.rewardTitleLevel = 5;
    
    }

  StartQuest() {
    
    
  }
}
