import { MultiplierInfo } from "@/data/Multiplier";
import { UPGRADE } from "@/data/upgrade/UPGRADE";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { UpgradeKind } from "@type/UpgradeKind";
import { DATA } from "@/Data";
import { ResourceKind } from "@/type/ResourceKind";
import { Util } from "@/Util";

export class GoldCapUpgrade extends UPGRADE {
  resourceKind;

  get kind() {
    return UpgradeKind.GoldCap;
  }

  constructor(DATA: DATA, resourceKind) {
    super(DATA);
    this.resourceKind = resourceKind;
    this.id = resourceKind;
  }

  Start() {
    this.data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  //    ResourceKind() => this.resourceKind;

  //   get resource() {return this.data.resource.Resource(this.resourceKind);}

  Cost(level) {
    return 1000.0 * Math.pow(2.0, level / 10.0);
  }

  EffectValue() {
    let level = this.level.value;
    return level * 250 * this.data.upgrade.goldcapMultiplier.Value() * this.data.upgrade.goldcapMultipliers[this.id].Value();
  }

  Name(): string {
    return `Gold Cap [${ResourceKind[this.id]}]`;
  }

  EffectString() {
    return `Gold Cap + ${Util.tDigit(this.EffectValue())}`;
  }
}
