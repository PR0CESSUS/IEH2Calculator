import { HeroKind } from "@type/HeroKind";
import { DATA } from "..";

export class SkillTriggeredNum {
  data: DATA;
  heroKind: HeroKind;
  id;

  constructor(DATA: DATA, heroKind: HeroKind, id) {
    this.data = DATA;
    this.heroKind = heroKind;
    this.id = id;
  }

  get value() {
    switch (this.heroKind) {
      case HeroKind.Warrior:
        return this.data.source.warriorSkillTriggeredNum[this.id];
      case HeroKind.Wizard:
        return this.data.source.wizardSkillTriggeredNum[this.id];
      case HeroKind.Angel:
        return this.data.source.angelSkillTriggeredNum[this.id];
      case HeroKind.Thief:
        return this.data.source.thiefSkillTriggeredNum[this.id];
      case HeroKind.Archer:
        return this.data.source.archerSkillTriggeredNum[this.id];
      case HeroKind.Tamer:
        return this.data.source.tamerSkillTriggeredNum[this.id];
      default:
        return 0.0;
    }
  }

  set value(value) {
    switch (this.heroKind) {
      case HeroKind.Warrior:
        this.data.source.warriorSkillTriggeredNum[this.id] = value;
        break;
      case HeroKind.Wizard:
        this.data.source.wizardSkillTriggeredNum[this.id] = value;
        break;
      case HeroKind.Angel:
        this.data.source.angelSkillTriggeredNum[this.id] = value;
        break;
      case HeroKind.Thief:
        this.data.source.thiefSkillTriggeredNum[this.id] = value;
        break;
      case HeroKind.Archer:
        this.data.source.archerSkillTriggeredNum[this.id] = value;
        break;
      case HeroKind.Tamer:
        this.data.source.tamerSkillTriggeredNum[this.id] = value;
        break;
    }
  }
}
