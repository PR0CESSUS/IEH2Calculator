import { MultiplierInfo } from "@/data/Multiplier";
import { UPGRADE } from "@/data/upgrade/UPGRADE";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { UpgradeKind } from "@type/UpgradeKind";
import { DATA } from "@/Data";
import { Util } from "@/Util";

export class BasicStatsUpgrade extends UPGRADE {
  statsKind: BasicStatsKind;

  constructor(DATA: DATA, statsKind: BasicStatsKind) {
    super(DATA);
    this.statsKind = statsKind;
    this.id = statsKind;
  }
  get resource() {
    return this.data.resource.Resource(this.ResourceKind());
  }

  //   get subResrouce() {return this.data.resource.gold;}

  get kind() {
    return UpgradeKind.BasicStats;
  }

  Cost(level) {
    return 100.0 * Math.pow(1000.0, level / 4.0);
  }

  EffectValue() {
    let level = this.level.value;
    switch (this.statsKind) {
      case BasicStatsKind.HP:
        return level * 25 * this.data.upgrade.statsMultiplier.Value();
      case BasicStatsKind.MP:
        return level * 10 * this.data.upgrade.statsMultiplier.Value();
      case BasicStatsKind.ATK:
        return level * this.data.upgrade.statsMultiplier.Value();
      case BasicStatsKind.MATK:
        return level * this.data.upgrade.statsMultiplier.Value();
      case BasicStatsKind.DEF:
        return level * this.data.upgrade.statsMultiplier.Value();
      case BasicStatsKind.MDEF:
        return level * this.data.upgrade.statsMultiplier.Value();
      default:
        return level * this.data.upgrade.statsMultiplier.Value();
    }
  }

  Start() {
    this.data.stats.SetEffectBasicStats(this.statsKind, new MultiplierInfo(MultiplierKind.Upgrade, MultiplierType.Add, () => this.EffectValue()));
  }

  Name(): string {
    return `Stats [${BasicStatsKind[this.id]}]`;
  }

  EffectString() {
    return `${BasicStatsKind[this.id]} + ${Util.tDigit(this.EffectValue())}`;
  }
}
