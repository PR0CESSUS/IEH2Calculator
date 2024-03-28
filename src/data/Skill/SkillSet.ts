import { Enums } from "@/Enums";
import { SKILL } from "@/data/skill/SKILL";
import { HeroKind } from "@type/HeroKind";
import { DATA } from "..";
import { DataBattle } from "../Battle";
import { SkillParameter } from "./SkillParameter";

export class SkillSet {
  data: DATA;
  battleCtrl: DataBattle;
  currentHero: HeroKind;
  currentSkillSet: SKILL[] = Array(8);
  currentGlobalSkillSet: SKILL[] = Array(8);
  currentRealEquippingNum;
  currentRealGlobalEquippingNum;

  constructor(battleCtrl: DataBattle) {
    this.battleCtrl = battleCtrl;
    this.data = this.battleCtrl.data;
    this.currentHero = battleCtrl.heroKind;
  }

  get isEquippedSkillArray() {
    return [
      [
        this.data.source.isEquippedWarriorSkillForWarrior,
        this.data.source.isEquippedWizardSkillForWarrior,
        this.data.source.isEquippedAngelSkillForWarrior,
        this.data.source.isEquippedThiefSkillForWarrior,
        this.data.source.isEquippedArcherSkillForWarrior,
        this.data.source.isEquippedTamerSkillForWarrior,
      ],
      [
        this.data.source.isEquippedWarriorSkillForWizard,
        this.data.source.isEquippedWizardSkillForWizard,
        this.data.source.isEquippedAngelSkillForWizard,
        this.data.source.isEquippedThiefSkillForWizard,
        this.data.source.isEquippedArcherSkillForWizard,
        this.data.source.isEquippedTamerSkillForWizard,
      ],
      [
        this.data.source.isEquippedWarriorSkillForAngel,
        this.data.source.isEquippedWizardSkillForAngel,
        this.data.source.isEquippedAngelSkillForAngel,
        this.data.source.isEquippedThiefSkillForAngel,
        this.data.source.isEquippedArcherSkillForAngel,
        this.data.source.isEquippedTamerSkillForAngel,
      ],
      [
        this.data.source.isEquippedWarriorSkillForThief,
        this.data.source.isEquippedWizardSkillForThief,
        this.data.source.isEquippedAngelSkillForThief,
        this.data.source.isEquippedThiefSkillForThief,
        this.data.source.isEquippedArcherSkillForThief,
        this.data.source.isEquippedTamerSkillForThief,
      ],
      [
        this.data.source.isEquippedWarriorSkillForArcher,
        this.data.source.isEquippedWizardSkillForArcher,
        this.data.source.isEquippedAngelSkillForArcher,
        this.data.source.isEquippedThiefSkillForArcher,
        this.data.source.isEquippedArcherSkillForArcher,
        this.data.source.isEquippedTamerSkillForArcher,
      ],
      [
        this.data.source.isEquippedWarriorSkillForTamer,
        this.data.source.isEquippedWizardSkillForTamer,
        this.data.source.isEquippedAngelSkillForTamer,
        this.data.source.isEquippedThiefSkillForTamer,
        this.data.source.isEquippedArcherSkillForTamer,
        this.data.source.isEquippedTamerSkillForTamer,
      ],
    ];
  }

  get maxSkillSlotNum() {
    return this.data.stats.SkillSlotNum(this.currentHero);
  }

  get maxGlobalSkillSlotNum() {
    return this.data.stats.globalSkillSlotNum;
  }

  get skillSlotNum() {
    return this.data.source.persistentSkillSlotNum[this.currentHero] > 0
      ? Math.max(this.data.source.persistentSkillSlotNum[this.currentHero], this.maxSkillSlotNum.Value())
      : this.maxSkillSlotNum.Value();
  }

  get globalSkillSlotNum() {
    return this.data.source.persistentGlobalSkillSlotNum > 0
      ? Math.max(this.data.source.persistentGlobalSkillSlotNum, this.maxGlobalSkillSlotNum.Value())
      : this.maxGlobalSkillSlotNum.Value();
  }

  Initialize() {
    this.UpdateCurrentSkillSet();
    // this.CheckMaxNum();
    // this.UpdateCurrentSkillSet();
  }

  get currentEquippingNum() {
    return Math.min(this.currentRealEquippingNum, this.battleCtrl.limitedSkillNum);
  }

  get currentGlobalEquippingNum() {
    return Math.min(this.currentRealGlobalEquippingNum, this.battleCtrl.limitedGlobalSkillNum);
  }

  UpdateCurrentSkillSet() {
    let index1 = 0;
    let index2 = 0;
    for (let index = 0; index < Enums.HeroKind; index++) {
      for (let id = 0; id < 10; id++) {
        const skill = this.data.skill.Skill(index, id);
        if (this.IsEquipped(skill)) {
          if (index == this.currentHero) {
            this.currentSkillSet[index1] = skill;
            index1++;
          } else {
            this.currentGlobalSkillSet[index2] = skill;
            index2++;
          }
        }
      }
    }
    // for (let index4 = index1; index4 < this.currentSkillSet.length; index4++)
    //   this.currentSkillSet[index4] = this.data.skill.NullSkill();
    // for (let index5 = index2; index5 < this.currentGlobalSkillSet.length; index5++)
    //   this.currentGlobalSkillSet[index5] = this.data.skill.NullSkill();
    // skillArray: SKILL[] = new SKILL[this.currentSkillSet.length];
    // let num1 = 0;
    // if (this.classSkillOrder[7] != 0) {
    //   for (let index6 = 0; index6 < skillArray.length; index6++)
    //     skillArray[index6] = this.currentSkillSet[index6];
    //   for (let index7 = 0; index7 < index1; index7++) {
    //     for (let index8 = num1; index8 < this.classSkillOrder.length; index8++) {
    //       if (this.classSkillOrder[index8] < index1) {
    //         this.currentSkillSet[index7] = skillArray[this.classSkillOrder[index8]];
    //         num1 = index8 + 1;
    //         break;
    //       }
    //     }
    //   }
    // }
    // else
    //   this.InitializeClassSkillOrder();
    // if (this.globalSkillOrder[7] != 0) {
    //   for (let index9 = 0; index9 < skillArray.length; index9++)
    //     skillArray[index9] = this.currentGlobalSkillSet[index9];
    //   let num2 = 0;
    //   for (let index10 = 0; index10 < index2; index10++) {
    //     for (let index11 = num2; index11 < this.globalSkillOrder.length; index11++) {
    //       if (this.globalSkillOrder[index11] < index2) {
    //         this.currentGlobalSkillSet[index10] = skillArray[this.globalSkillOrder[index11]];
    //         num2 = index11 + 1;
    //         break;
    //       }
    //     }
    //   }
    // }
    // else
    //   this.InitializeGlobalSkillOrder();
    this.currentRealEquippingNum = index1;
    this.currentRealGlobalEquippingNum = index2;
    // if (this.equipAction == null)
    //   return;
    // this.equipAction();
  }

  InitializeClassSkillOrder() {
    for (let index = 0; index < this.classSkillOrder.length; index++) this.classSkillOrder[index] = index;
  }

  InitializeGlobalSkillOrder() {
    for (let index = 0; index < this.globalSkillOrder.length; index++) this.globalSkillOrder[index] = index;
  }

  IsEquipped(skill: SKILL) {
    return skill.id >= 0 && this.isEquippedSkillArray[this.currentHero][skill.heroKind][this.IsEquippedSaveId(skill.id)];
  }

  Equip(skill: SKILL) {
    if (this.CanEquip(skill)) this.isEquippedSkillArray[this.currentHero][skill.heroKind][this.IsEquippedSaveId(skill.id)] = true;
    this.CheckMaxNum();
    this.UpdateCurrentSkillSet();
  }

  Remove(skill: SKILL) {
    if (this.CanRemove(skill)) this.isEquippedSkillArray[this.currentHero][skill.heroKind][this.IsEquippedSaveId(skill.id)] = false;
    this.UpdateCurrentSkillSet();
  }

  CanEquip(skill: SKILL) {
    if (this.IsEquipped(skill) || !skill.CanEquip()) return false;
    return skill.heroKind == this.currentHero ? this.currentRealEquippingNum < this.skillSlotNum : this.currentRealGlobalEquippingNum < this.globalSkillSlotNum;
  }

  CanRemove(skill: SKILL) {
    return skill.heroKind != this.currentHero || skill.id > 0;
  }

  CheckInitialized() {
    if (this.currentEquippingNum > 0) return;
    this.isEquippedSkillArray[this.currentHero][this.currentHero][this.IsEquippedSaveId(0)] = true;
  }

  CheckMaxNum() {
    if (this.currentEquippingNum > this.skillSlotNum) {
      for (let id = 0; id < SkillParameter.maxSkillKindNum; id++) this.isEquippedSkillArray[this.currentHero][this.currentHero][this.IsEquippedSaveId(id)] = false;
    }
    if (this.currentGlobalEquippingNum > this.globalSkillSlotNum) {
      for (let index = 0; index < Enums.HeroKind; index++) {
        if (index != this.currentHero) {
          for (let id = 0; id < SkillParameter.maxSkillKindNum; id++) this.isEquippedSkillArray[this.currentHero][index][this.IsEquippedSaveId(id)] = false;
        }
      }
    }
    this.CheckInitialized();
  }

  IsEquippedAnySkill() {
    return this.currentEquippingNum > 1 || this.currentGlobalEquippingNum > 0;
  }

  IsEquippedSaveId(id) {
    return id + SkillParameter.maxSkillKindNum * this.data.source.skillLoadoutIds[this.currentHero];
  }

  get classSkillOrder() {
    switch (this.currentHero) {
      case HeroKind.Warrior:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            return this.data.source.classSkillOrdersWarrior0;
          case 1:
            return this.data.source.classSkillOrdersWarrior1;
          case 2:
            return this.data.source.classSkillOrdersWarrior2;
          case 3:
            return this.data.source.classSkillOrdersWarrior3;
          case 4:
            return this.data.source.classSkillOrdersWarrior4;
        }
        break;
      case HeroKind.Wizard:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            return this.data.source.classSkillOrdersWizard0;
          case 1:
            return this.data.source.classSkillOrdersWizard1;
          case 2:
            return this.data.source.classSkillOrdersWizard2;
          case 3:
            return this.data.source.classSkillOrdersWizard3;
          case 4:
            return this.data.source.classSkillOrdersWizard4;
        }
        break;
      case HeroKind.Angel:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            return this.data.source.classSkillOrdersAngel0;
          case 1:
            return this.data.source.classSkillOrdersAngel1;
          case 2:
            return this.data.source.classSkillOrdersAngel2;
          case 3:
            return this.data.source.classSkillOrdersAngel3;
          case 4:
            return this.data.source.classSkillOrdersAngel4;
        }
        break;
      case HeroKind.Thief:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            return this.data.source.classSkillOrdersThief0;
          case 1:
            return this.data.source.classSkillOrdersThief1;
          case 2:
            return this.data.source.classSkillOrdersThief2;
          case 3:
            return this.data.source.classSkillOrdersThief3;
          case 4:
            return this.data.source.classSkillOrdersThief4;
        }
        break;
      case HeroKind.Archer:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            return this.data.source.classSkillOrdersArcher0;
          case 1:
            return this.data.source.classSkillOrdersArcher1;
          case 2:
            return this.data.source.classSkillOrdersArcher2;
          case 3:
            return this.data.source.classSkillOrdersArcher3;
          case 4:
            return this.data.source.classSkillOrdersArcher4;
        }
        break;
      case HeroKind.Tamer:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            return this.data.source.classSkillOrdersTamer0;
          case 1:
            return this.data.source.classSkillOrdersTamer1;
          case 2:
            return this.data.source.classSkillOrdersTamer2;
          case 3:
            return this.data.source.classSkillOrdersTamer3;
          case 4:
            return this.data.source.classSkillOrdersTamer4;
        }
        break;
    }
    return null;
  }
  set classSkillOrder(value) {
    switch (this.currentHero) {
      case HeroKind.Warrior:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            this.data.source.classSkillOrdersWarrior0 = value;
            return;
          case 1:
            this.data.source.classSkillOrdersWarrior1 = value;
            return;
          case 2:
            this.data.source.classSkillOrdersWarrior2 = value;
            return;
          case 3:
            this.data.source.classSkillOrdersWarrior3 = value;
            return;
          case 4:
            this.data.source.classSkillOrdersWarrior4 = value;
            return;
          default:
            return;
        }
      case HeroKind.Wizard:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            this.data.source.classSkillOrdersWizard0 = value;
            return;
          case 1:
            this.data.source.classSkillOrdersWizard1 = value;
            return;
          case 2:
            this.data.source.classSkillOrdersWizard2 = value;
            return;
          case 3:
            this.data.source.classSkillOrdersWizard3 = value;
            return;
          case 4:
            this.data.source.classSkillOrdersWizard4 = value;
            return;
          default:
            return;
        }
      case HeroKind.Angel:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            this.data.source.classSkillOrdersAngel0 = value;
            return;
          case 1:
            this.data.source.classSkillOrdersAngel1 = value;
            return;
          case 2:
            this.data.source.classSkillOrdersAngel2 = value;
            return;
          case 3:
            this.data.source.classSkillOrdersAngel3 = value;
            return;
          case 4:
            this.data.source.classSkillOrdersAngel4 = value;
            return;
          default:
            return;
        }
      case HeroKind.Thief:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            this.data.source.classSkillOrdersThief0 = value;
            return;
          case 1:
            this.data.source.classSkillOrdersThief1 = value;
            return;
          case 2:
            this.data.source.classSkillOrdersThief2 = value;
            return;
          case 3:
            this.data.source.classSkillOrdersThief3 = value;
            return;
          case 4:
            this.data.source.classSkillOrdersThief4 = value;
            return;
          default:
            return;
        }
      case HeroKind.Archer:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            this.data.source.classSkillOrdersArcher0 = value;
            return;
          case 1:
            this.data.source.classSkillOrdersArcher1 = value;
            return;
          case 2:
            this.data.source.classSkillOrdersArcher2 = value;
            return;
          case 3:
            this.data.source.classSkillOrdersArcher3 = value;
            return;
          case 4:
            this.data.source.classSkillOrdersArcher4 = value;
            return;
          default:
            return;
        }
      case HeroKind.Tamer:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            this.data.source.classSkillOrdersTamer0 = value;
            return;
          case 1:
            this.data.source.classSkillOrdersTamer1 = value;
            return;
          case 2:
            this.data.source.classSkillOrdersTamer2 = value;
            return;
          case 3:
            this.data.source.classSkillOrdersTamer3 = value;
            return;
          case 4:
            this.data.source.classSkillOrdersTamer4 = value;
            return;
          default:
            return;
        }
    }
  }

  get globalSkillOrder() {
    switch (this.currentHero) {
      case HeroKind.Warrior:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            return this.data.source.globalSkillOrdersWarrior0;
          case 1:
            return this.data.source.globalSkillOrdersWarrior1;
          case 2:
            return this.data.source.globalSkillOrdersWarrior2;
          case 3:
            return this.data.source.globalSkillOrdersWarrior3;
          case 4:
            return this.data.source.globalSkillOrdersWarrior4;
        }
        break;
      case HeroKind.Wizard:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            return this.data.source.globalSkillOrdersWizard0;
          case 1:
            return this.data.source.globalSkillOrdersWizard1;
          case 2:
            return this.data.source.globalSkillOrdersWizard2;
          case 3:
            return this.data.source.globalSkillOrdersWizard3;
          case 4:
            return this.data.source.globalSkillOrdersWizard4;
        }
        break;
      case HeroKind.Angel:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            return this.data.source.globalSkillOrdersAngel0;
          case 1:
            return this.data.source.globalSkillOrdersAngel1;
          case 2:
            return this.data.source.globalSkillOrdersAngel2;
          case 3:
            return this.data.source.globalSkillOrdersAngel3;
          case 4:
            return this.data.source.globalSkillOrdersAngel4;
        }
        break;
      case HeroKind.Thief:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            return this.data.source.globalSkillOrdersThief0;
          case 1:
            return this.data.source.globalSkillOrdersThief1;
          case 2:
            return this.data.source.globalSkillOrdersThief2;
          case 3:
            return this.data.source.globalSkillOrdersThief3;
          case 4:
            return this.data.source.globalSkillOrdersThief4;
        }
        break;
      case HeroKind.Archer:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            return this.data.source.globalSkillOrdersArcher0;
          case 1:
            return this.data.source.globalSkillOrdersArcher1;
          case 2:
            return this.data.source.globalSkillOrdersArcher2;
          case 3:
            return this.data.source.globalSkillOrdersArcher3;
          case 4:
            return this.data.source.globalSkillOrdersArcher4;
        }
        break;
      case HeroKind.Tamer:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            return this.data.source.globalSkillOrdersTamer0;
          case 1:
            return this.data.source.globalSkillOrdersTamer1;
          case 2:
            return this.data.source.globalSkillOrdersTamer2;
          case 3:
            return this.data.source.globalSkillOrdersTamer3;
          case 4:
            return this.data.source.globalSkillOrdersTamer4;
        }
        break;
    }
    return null;
  }
  set globalSkillOrder(value) {
    switch (this.currentHero) {
      case HeroKind.Warrior:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            this.data.source.globalSkillOrdersWarrior0 = value;
            return;
          case 1:
            this.data.source.globalSkillOrdersWarrior1 = value;
            return;
          case 2:
            this.data.source.globalSkillOrdersWarrior2 = value;
            return;
          case 3:
            this.data.source.globalSkillOrdersWarrior3 = value;
            return;
          case 4:
            this.data.source.globalSkillOrdersWarrior4 = value;
            return;
          default:
            return;
        }
      case HeroKind.Wizard:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            this.data.source.globalSkillOrdersWizard0 = value;
            return;
          case 1:
            this.data.source.globalSkillOrdersWizard1 = value;
            return;
          case 2:
            this.data.source.globalSkillOrdersWizard2 = value;
            return;
          case 3:
            this.data.source.globalSkillOrdersWizard3 = value;
            return;
          case 4:
            this.data.source.globalSkillOrdersWizard4 = value;
            return;
          default:
            return;
        }
      case HeroKind.Angel:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            this.data.source.globalSkillOrdersAngel0 = value;
            return;
          case 1:
            this.data.source.globalSkillOrdersAngel1 = value;
            return;
          case 2:
            this.data.source.globalSkillOrdersAngel2 = value;
            return;
          case 3:
            this.data.source.globalSkillOrdersAngel3 = value;
            return;
          case 4:
            this.data.source.globalSkillOrdersAngel4 = value;
            return;
          default:
            return;
        }
      case HeroKind.Thief:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            this.data.source.globalSkillOrdersThief0 = value;
            return;
          case 1:
            this.data.source.globalSkillOrdersThief1 = value;
            return;
          case 2:
            this.data.source.globalSkillOrdersThief2 = value;
            return;
          case 3:
            this.data.source.globalSkillOrdersThief3 = value;
            return;
          case 4:
            this.data.source.globalSkillOrdersThief4 = value;
            return;
          default:
            return;
        }
      case HeroKind.Archer:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            this.data.source.globalSkillOrdersArcher0 = value;
            return;
          case 1:
            this.data.source.globalSkillOrdersArcher1 = value;
            return;
          case 2:
            this.data.source.globalSkillOrdersArcher2 = value;
            return;
          case 3:
            this.data.source.globalSkillOrdersArcher3 = value;
            return;
          case 4:
            this.data.source.globalSkillOrdersArcher4 = value;
            return;
          default:
            return;
        }
      case HeroKind.Tamer:
        switch (this.data.source.skillLoadoutIds[this.currentHero]) {
          case 0:
            this.data.source.globalSkillOrdersTamer0 = value;
            return;
          case 1:
            this.data.source.globalSkillOrdersTamer1 = value;
            return;
          case 2:
            this.data.source.globalSkillOrdersTamer2 = value;
            return;
          case 3:
            this.data.source.globalSkillOrdersTamer3 = value;
            return;
          case 4:
            this.data.source.globalSkillOrdersTamer4 = value;
            return;
          default:
            return;
        }
    }
  }
}
