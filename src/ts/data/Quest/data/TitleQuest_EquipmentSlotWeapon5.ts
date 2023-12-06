import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_EquipmentSlotWeapon5 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.EquipmentSlotWeapon5;
    this.rewardExp = (() => 500000000.0);
    this.rewardTitleKind = TitleKind.EquipmentSlotWeapon;
    this.rewardTitleLevel = 5;
    
    }

  StartQuest() {
    
    
  }

  
}
