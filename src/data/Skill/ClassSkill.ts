import { SkillType } from "@/type/SkillType";
import { DATA } from "..";
import { Enums } from "../../Enums";
import { HeroKind } from "../../type/HeroKind";
import { SKILL } from "./SKILL";
import { Stance } from "./Stance";
import { MultiplierInfo } from "../Multiplier";
import { MultiplierKind } from "@/type/MultiplierKind";
import { MultiplierType } from "@/type/MultiplierType";
import { Util } from "@/Util";

export class ClassSkill {
  data: DATA;
  skills: SKILL[] = Array(Enums.SkillKindWarrior);
  stances: Stance[] = [];

  heroKind: HeroKind;

  constructor(DATA: DATA) {
    this.data = DATA;
  }

  get currentStanceId() {
    return 0;
  }
  Start() {
    for (let index = 0; index < this.skills.length; index++) {
      if (this.skills[index].type == SkillType.Attack)
        this.skills[index].damageMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Skill, MultiplierType.Mul, () => this.DamageMultiplierEffectValue));
    }
  }
  MaxReachedTotalLevel() {
    let num = 0;
    for (let index = 0; index < this.skills.length; index++) num += this.skills[index].level.maxReachedLevel;
    return num;
  }
  DamageMultiplierEffectValue() {
    return Math.pow(2.0, Math.floor(this.MaxReachedTotalLevel() / 250.0));
  }
  DamageMultiplierEffectValueString() {
    return Util.percent(this.DamageMultiplierEffectValue());
  }
  // public void SwitchStance(int id) {
  //   if (!this.CansSwitchStance(id))
  //     return;
  //   this.currentStanceId = id;
  // }

  // public bool CansSwitchStance(int id) => id >= 0 && id < this.stances.Length;
}
