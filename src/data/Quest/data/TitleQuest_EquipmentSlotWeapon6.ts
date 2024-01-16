import { QuestController } from "../index";
import { QUEST } from "../QUEST";
import { HeroKind } from "../../../type/HeroKind";
import { QuestKindTitle } from "../../../type/QuestKindTitle";
import { TitleKind } from "../../../type/TitleKind";
import { QuestKind } from "../../../type/QuestKind";


export class TitleQuest_EquipmentSlotWeapon6 extends QUEST {
  constructor(questCtrl: QuestController, heroKind: HeroKind) {
    super(questCtrl, heroKind);

    this.kind = QuestKind.Title;
    this.kindTitle = QuestKindTitle.EquipmentSlotWeapon6;
    this.rewardExp = (() => 10000000000.0);
    this.rewardTitleKind = TitleKind.EquipmentSlotWeapon;
    this.rewardTitleLevel = 6;
    
    }

  StartQuest() {
    
    
  }

  
}
