import { DATA } from "..";
import { AbilityKind } from "../../type/AbilityKind";
import { HeroKind } from "../../type/HeroKind";

export class HeroSuperAbility {
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
        return this.data.source.superAbilityPointsVitality[this.heroKind];
      case AbilityKind.Strength:
        return this.data.source.superAbilityPointsStrength[this.heroKind];
      case AbilityKind.Intelligence:
        return this.data.source.superAbilityPointsIntelligence[this.heroKind];
      case AbilityKind.Agility:
        return this.data.source.superAbilityPointsAgility[this.heroKind];
      case AbilityKind.Luck:
        return this.data.source.superAbilityPointsLuck[this.heroKind];
      default:
        return 0;
    }
  }

  Point() {
    return this.value;
  }
}
