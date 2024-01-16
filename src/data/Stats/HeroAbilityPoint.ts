import { HeroKind } from "../../type/HeroKind";
import { AbilityKind } from "../../type/AbilityKind";

export class HeroAbilityPoint {
  heroKind: HeroKind;
  kind: AbilityKind;

  constructor(heroKind: HeroKind, kind: AbilityKind) {
    this.heroKind = heroKind;
    this.kind = kind;
  }

  get value() {
    switch (this.kind) {
      case AbilityKind.Vitality:
        return globalThis.data.source.abilityPointsVitality[this.heroKind];
      case AbilityKind.Strength:
        return globalThis.data.source.abilityPointsStrength[this.heroKind];
      case AbilityKind.Intelligence:
        return globalThis.data.source.abilityPointsIntelligence[this.heroKind];
      case AbilityKind.Agility:
        return globalThis.data.source.abilityPointsAgility[this.heroKind];
      case AbilityKind.Luck:
        return globalThis.data.source.abilityPointsLuck[this.heroKind];
      default:
        return 0;
    }
  }

  set value(value) {
    switch (this.kind) {
      case AbilityKind.Vitality:
        globalThis.data.source.abilityPointsVitality[this.heroKind] = value;
        break;
      case AbilityKind.Strength:
        globalThis.data.source.abilityPointsStrength[this.heroKind] = value;
        break;
      case AbilityKind.Intelligence:
        globalThis.data.source.abilityPointsIntelligence[this.heroKind] = value;
        break;
      case AbilityKind.Agility:
        globalThis.data.source.abilityPointsAgility[this.heroKind] = value;
        break;
      case AbilityKind.Luck:
        globalThis.data.source.abilityPointsLuck[this.heroKind] = value;
        break;
    }
  }
}
