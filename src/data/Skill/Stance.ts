import { HeroKind } from "../../type/HeroKind";

export class Stance {
  id;
  heroKind: HeroKind;

  constructor(heroKind: HeroKind, id) {
    this.heroKind = heroKind;
    this.id = id;
    this.SetEffect();
  }

  get isActive() {
    return globalThis.data.skill.classSkills[this.heroKind].currentStanceId == this.id;
  }

  SetEffect() {}

  get effectValueBuff() {
    return 0.0;
  }

  get effectValueDebuff() {
    return 0.0;
  }
}
