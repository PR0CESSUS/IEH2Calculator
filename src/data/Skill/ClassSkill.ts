import { DATA } from "..";
import { Enums } from "../../Enums";
import { HeroKind } from "../../type/HeroKind";
import { SKILL } from "./SKILL";
import { Stance } from "./Stance";

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
  // public void SwitchStance(int id) {
  //   if (!this.CansSwitchStance(id))
  //     return;
  //   this.currentStanceId = id;
  // }

  // public bool CansSwitchStance(int id) => id >= 0 && id < this.stances.Length;
}
