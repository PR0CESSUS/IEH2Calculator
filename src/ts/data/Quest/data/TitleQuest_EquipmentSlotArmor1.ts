import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_EquipmentSlotArmor1 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.EquipmentSlotArmor1;
    this.rewardExp = (() => 50000.0);
    this.rewardTitleKind = TitleKind.EquipmentSlotArmor;
    this.rewardTitleLevel = 1;
    
    }

  StartQuest() {
    
    
  }

  
}
