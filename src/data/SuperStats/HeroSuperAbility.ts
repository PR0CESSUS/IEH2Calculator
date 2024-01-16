import { AbilityKind } from "../../type/AbilityKind";
import { HeroKind } from "../../type/HeroKind";

export class HeroSuperAbility {
  heroKind: HeroKind;
  kind: AbilityKind;
  constructor(heroKind: HeroKind, kind: AbilityKind) {
    this.heroKind = heroKind;
    this.kind = kind;
  }

  get value() {
    switch (this.kind) {
      case AbilityKind.Vitality:
        return globalThis.data.source.superAbilityPointsVitality[this.heroKind];
      case AbilityKind.Strength:
        return globalThis.data.source.superAbilityPointsStrength[this.heroKind];
      case AbilityKind.Intelligence:
        return globalThis.data.source.superAbilityPointsIntelligence[this.heroKind];
      case AbilityKind.Agility:
        return globalThis.data.source.superAbilityPointsAgility[this.heroKind];
      case AbilityKind.Luck:
        return globalThis.data.source.superAbilityPointsLuck[this.heroKind];
      default:
        return 0;
    }
  }

  Point() {
    return this.value;
  }
}
