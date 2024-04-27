import { HeroKind } from "../../type/HeroKind";
import { AbilityKind } from "../../type/AbilityKind";
import { DATA } from "..";

export class HeroAbilityPoint {
  data: DATA;
  heroKind: HeroKind;
  kind: AbilityKind;

  constructor(DATA: DATA, heroKind: HeroKind, kind: AbilityKind) {
    this.data = DATA;
    this.heroKind = heroKind;
    this.kind = kind;
  }

  get value() {
    switch (this.kind) {
      case AbilityKind.Vitality:
        return this.data.source.abilityPointsVitality[this.heroKind];
      case AbilityKind.Strength:
        return this.data.source.abilityPointsStrength[this.heroKind];
      case AbilityKind.Intelligence:
        return this.data.source.abilityPointsIntelligence[this.heroKind];
      case AbilityKind.Agility:
        return this.data.source.abilityPointsAgility[this.heroKind];
      case AbilityKind.Luck:
        return this.data.source.abilityPointsLuck[this.heroKind];
      default:
        return 0;
    }
  }

  set value(value) {
    switch (this.kind) {
      case AbilityKind.Vitality:
        this.data.source.abilityPointsVitality[this.heroKind] = value;
        break;
      case AbilityKind.Strength:
        this.data.source.abilityPointsStrength[this.heroKind] = value;
        break;
      case AbilityKind.Intelligence:
        this.data.source.abilityPointsIntelligence[this.heroKind] = value;
        break;
      case AbilityKind.Agility:
        this.data.source.abilityPointsAgility[this.heroKind] = value;
        break;
      case AbilityKind.Luck:
        this.data.source.abilityPointsLuck[this.heroKind] = value;
        break;
    }
  }
}
