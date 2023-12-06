import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_EquipmentSlotJewelry4 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.EquipmentSlotJewelry4;
    this.rewardExp = (() => 5000000.0);
    this.rewardTitleKind = TitleKind.EquipmentSlotJewelry;
    this.rewardTitleLevel = 4;
    
    }

  StartQuest() {
    
    
  }

  
}
