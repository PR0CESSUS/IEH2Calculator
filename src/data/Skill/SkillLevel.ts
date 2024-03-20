import { HeroKind } from "@type/HeroKind";
import { DATA } from "..";

export class SkillLevel {
  data: DATA;
  heroKind: HeroKind;
  id: number;

  constructor(DATA: DATA, heroKind: HeroKind, id: number) {
    this.data = DATA;
    this.heroKind = heroKind;
    this.id = id;
  }

  get value() {
    switch (this.heroKind) {
      case HeroKind.Warrior:
        return this.data.source.warriorSkillLevel[this.id];
      case HeroKind.Wizard:
        return this.data.source.wizardSkillLevel[this.id];
      case HeroKind.Angel:
        return this.data.source.angelSkillLevel[this.id];
      case HeroKind.Thief:
        return this.data.source.thiefSkillLevel[this.id];
      case HeroKind.Archer:
        return this.data.source.archerSkillLevel[this.id];
      case HeroKind.Tamer:
        return this.data.source.tamerSkillLevel[this.id];
      default:
        return 0;
    }
  }
  set value(value) {
    if (this.value < value) this.maxReachedLevel = value;

    switch (this.heroKind) {
      case HeroKind.Warrior:
        this.data.source.warriorSkillLevel[this.id] = value;
        break;
      case HeroKind.Wizard:
        this.data.source.wizardSkillLevel[this.id] = value;
        break;
      case HeroKind.Angel:
        this.data.source.angelSkillLevel[this.id] = value;
        break;
      case HeroKind.Thief:
        this.data.source.thiefSkillLevel[this.id] = value;
        break;
      case HeroKind.Archer:
        this.data.source.archerSkillLevel[this.id] = value;
        break;
      case HeroKind.Tamer:
        this.data.source.tamerSkillLevel[this.id] = value;
        break;
    }
  }

  get maxReachedLevel() {
    switch (this.heroKind) {
      case HeroKind.Warrior:
        return this.data.source.warriorMaxReachedSkillLevel[this.id];
      case HeroKind.Wizard:
        return this.data.source.wizardMaxReachedSkillLevel[this.id];
      case HeroKind.Angel:
        return this.data.source.angelMaxReachedSkillLevel[this.id];
      case HeroKind.Thief:
        return this.data.source.thiefMaxReachedSkillLevel[this.id];
      case HeroKind.Archer:
        return this.data.source.archerMaxReachedSkillLevel[this.id];
      case HeroKind.Tamer:
        return this.data.source.tamerMaxReachedSkillLevel[this.id];
      default:
        return 0;
    }
  }
  set maxReachedLevel(value) {
    switch (this.heroKind) {
      case HeroKind.Warrior:
        this.data.source.warriorMaxReachedSkillLevel[this.id] = value;
        break;
      case HeroKind.Wizard:
        this.data.source.wizardMaxReachedSkillLevel[this.id] = value;
        break;
      case HeroKind.Angel:
        this.data.source.angelMaxReachedSkillLevel[this.id] = value;
        break;
      case HeroKind.Thief:
        this.data.source.thiefMaxReachedSkillLevel[this.id] = value;
        break;
      case HeroKind.Archer:
        this.data.source.archerMaxReachedSkillLevel[this.id] = value;
        break;
      case HeroKind.Tamer:
        this.data.source.tamerMaxReachedSkillLevel[this.id] = value;
        break;
    }
  }
}
