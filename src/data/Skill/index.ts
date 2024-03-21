import { Multiplier, MultiplierInfo } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { Enums } from "../../Enums";
import { ClassSkill } from "./ClassSkill";
import { AngelSkill } from "./data/Angel/AngelSkill";
import { WarriorSkill } from "./data/Warrior/WarriorSkill";
import { WizardSkill } from "./data/Wizard/WizardSkill";
import { ThiefSkill } from "./data/Thief/ThiefSkill";
import { ArcherSkill } from "./data/Archer/ArcherSkill";
import { TamerSkill } from "./data/Tamer/TamerSkill";
import { HeroKind } from "../../type/HeroKind";
import { DATA } from "..";
import { NumberType } from "../../type/NumberType";

export class DataSkill {
  data: DATA;
  ladyEmeldaEffectMultiplier: Multiplier[] = Array(Enums.HeroKind);
  skillLevelBonus: Multiplier[] = Array(Enums.HeroKind);
  skillLevelBonusValue: number[] = Array(Enums.HeroKind);
  skillLevelBonusFromHolyArch: Multiplier[] = Array(Enums.HeroKind);
  skillRankCostFactors: Multiplier[] = Array(Enums.HeroKind);
  skillPassiveShareFactors: Multiplier[] = Array(Enums.HeroKind);
  skillCooltimeReduction: Multiplier[] = Array(Enums.HeroKind);
  skillCastSpeedModifier: Multiplier[] = Array(Enums.HeroKind);
  excessSpeedForHitCount: Multiplier;
  skillRangeMultiplier: Multiplier[] = Array(Enums.HeroKind);
  skillEffectRangeMultiplier: Multiplier[] = Array(Enums.HeroKind);
  extraSkillHitCount: Multiplier[] = Array(Enums.HeroKind);
  loadoutUnlockedNum: Multiplier;
  globalSkillProfGainRate: Multiplier;
  baseAttackPoisonChance: Multiplier[] = Array(Enums.HeroKind);
  baseAttackSlimeBall: Multiplier[] = Array(Enums.HeroKind);
  classSkills: ClassSkill[] = Array(Enums.HeroKind);
  isLog = Array(Enums.HeroKind);
  unlockSkillPassivePersist: boolean = true;

  constructor(DATA: DATA) {
    this.data = DATA;

    this.excessSpeedForHitCount = new Multiplier();
    for (let index = 0; index < this.skillRankCostFactors.length; index++)
      this.skillRankCostFactors[index] = new Multiplier(
        new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0),
        () => 1.0,
        () => 1e-100
      );
    for (let index = 0; index < this.ladyEmeldaEffectMultiplier.length; index++)
      this.ladyEmeldaEffectMultiplier[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));

    for (let index = 0; index < this.skillCooltimeReduction.length; index++) {
      this.skillCooltimeReduction[index] = new Multiplier(
        new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0),
        () => 0.5,
        () => 0.0
      );
    }
    for (let index = 0; index < this.skillCastSpeedModifier.length; index++) {
      this.skillCastSpeedModifier[index] = new Multiplier(
        new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0),
        () => 10000.0,
        () => 1.0
      );
      this.skillCastSpeedModifier[index].name = "Skill Cast Speed";
    }
    for (let index = 0; index < this.skillRangeMultiplier.length; index++) {
      this.skillRangeMultiplier[index] = new Multiplier(
        new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0)
        // () => 10.0,
        // () => 0.1
      );
      this.skillRangeMultiplier[index].name = `${HeroKind[index]}'s Class Skills Range`;

      this.skillEffectRangeMultiplier[index] = new Multiplier(
        new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0)
        // () => 10.0,
        // () => 0.1
      );
      this.skillEffectRangeMultiplier[index].name = `${HeroKind[index]}'s Class Skills Area of Effect`;
      this.extraSkillHitCount[index] = new Multiplier(
        new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0),
        () => 500.0,
        () => 0.0
      );
    }

    for (let index = 0; index < this.skillLevelBonus.length; index++) {
      this.skillLevelBonus[index] = new Multiplier(
        new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0),
        () => 1000000000.0,
        () => 0.0
      );
      this.skillLevelBonusFromHolyArch[index] = new Multiplier();
      this.skillLevelBonus[index].numberType = NumberType.Normal;
      this.skillLevelBonus[index].name = `${HeroKind[index]}'s Skill Level Bonus`;
    }
    for (let index = 0; index < this.skillPassiveShareFactors.length; index++) this.skillPassiveShareFactors[index] = new Multiplier();
    for (let index = 0; index < this.baseAttackPoisonChance.length; index++) this.baseAttackPoisonChance[index] = new Multiplier();
    for (let index = 0; index < this.baseAttackSlimeBall.length; index++) this.baseAttackSlimeBall[index] = new Multiplier();
    this.globalSkillProfGainRate = new Multiplier();

    this.classSkills[0] = new WarriorSkill(this.data);
    this.classSkills[1] = new WizardSkill(this.data);
    this.classSkills[2] = new AngelSkill(this.data);
    this.classSkills[3] = new ThiefSkill(this.data);
    this.classSkills[4] = new ArcherSkill(this.data);
    this.classSkills[5] = new TamerSkill(this.data);
  }

  Skill(slot: number, heroKind: HeroKind) {
    return this.classSkills[heroKind].skills[slot];
  }

  TotalTriggeredNum() {
    let num = 0;
    for (let index = 0; index < this.classSkills.length; index++) {
      for (let i = 0; i < this.classSkills[index].skills.length; i++) {
        num += this.classSkills[index].skills[i].triggeredNum.value;
      }
    }

    return num;
  }
}
