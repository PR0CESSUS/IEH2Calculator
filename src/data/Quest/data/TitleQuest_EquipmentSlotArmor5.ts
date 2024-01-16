import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_EquipmentSlotArmor5 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.EquipmentSlotArmor5;
    this.rewardExp = (() => 500000000.0);
    this.rewardTitleKind = TitleKind.EquipmentSlotArmor;
    this.rewardTitleLevel = 5;
    
    }

  StartQuest() {
    
    
  }

  
}
