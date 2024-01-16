import { Multiplier, MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ResourceKind } from "../../type/ResourceKind";
import { HeroKind } from "../../type/HeroKind";
import { Enums } from "../../Enums";

export class DataResource {
  goldCap: Multiplier;
  slimeCoinCap: Multiplier;
  slimeCoinEfficiency: Multiplier;
  slimeCoinInterest: Multiplier;

  resources = Array(Enums.ResourceKind);

  constructor() {
    this.goldCap = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1000.0));
    this.slimeCoinCap = new Multiplier();

    this.slimeCoinEfficiency = new Multiplier();
    this.slimeCoinInterest = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
      () => 0.5,
      () => 0.0
    );
    //   for (let kind = 0; kind < this.resources.length; kind++) {
    //     this.resources[kind] = new global::Resource((ResourceKind) kind);
    //   }
  }

  HeroResourceKind(heroKind) {
    switch (heroKind) {
      case HeroKind.Warrior:
        return ResourceKind.Stone;
      case HeroKind.Wizard:
        return ResourceKind.Crystal;
      case HeroKind.Angel:
        return ResourceKind.Leaf;
      case HeroKind.Thief:
        return ResourceKind.Stone;
      case HeroKind.Archer:
        return ResourceKind.Crystal;
      case HeroKind.Tamer:
        return ResourceKind.Leaf;
      default:
        return ResourceKind.Stone;
    }
  }

  HeroResource(heroKind) {
    this.resources[this.HeroResourceKind(heroKind)];
  }

  Resource(kind) {
    return this.resources[kind];
  }
}
