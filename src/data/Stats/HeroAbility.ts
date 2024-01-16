import { MultiplierInfo, Multiplier } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";
import { AbilityKind } from "../../type/AbilityKind";
import { HeroAbilityPoint } from "./HeroAbilityPoint";

export class HeroAbility {
  heroKind: HeroKind;
  kind: AbilityKind;
  point;
  pointMultiplicativeMultiplier: Multiplier;

  constructor(heroKind: HeroKind, kind: AbilityKind, pointLeft) {
    this.heroKind = heroKind;
    this.kind = kind;
    this.pointMultiplicativeMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.point = new HeroAbilityPoint(heroKind, kind);
    // this.transaction = new Transaction(this.point, (NUMBER) pointLeft, () => 1.0, () => 0.0, true);
  }

  Point() {
    return Math.max(0.0, this.point.value * this.pointMultiplicativeMultiplier.Value());
  }
}
