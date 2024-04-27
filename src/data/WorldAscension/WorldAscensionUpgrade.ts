import { Multiplier, MultiplierInfo } from "@/data/Multiplier";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { DATA } from "..";
import { WorldAscension } from "./WorldAscension";
import { Localization } from "@/localization";

export class WorldAscensionUpgrade {
  data: DATA;
  wa: WorldAscension;
  effectMultiplier: Multiplier;

  constructor(wa: WorldAscension) {
    this.wa = wa;
    this.data = wa.data;
    this.effectMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  }

  Start() {
    return this.SetEffect();
  }

  get kind() {
    return 0;
  }

  get level() {
    return this.data.source.worldAscensionUpgradeLevels[this.kind];
  }

  set level(value) {
    this.data.source.worldAscensionUpgradeLevels[this.kind] = value;
  }

  get maxLevel() {
    return 1;
  }

  Cost(level) {
    return 1 + level;
  }

  EffectValue(level) {
    return 0.0;
  }

  get effectValue() {
    return this.EffectValue(this.level) * this.effectMultiplier.Value();
  }

  SetEffect() {}

  Name() {
    return Localization.WorldAscensionUpgradeString(this).name;
  }

  EffectString() {
    return Localization.WorldAscensionUpgradeString(this, this.effectValue).effect;
  }

  //   EffectString() {
  //     let str = (Util.optStr + "<size=20><u>" + Localization.Basic(BasicWord.Effect) + "</u><size=18>") + "\n- " + Localization.Basic(BasicWord.Current) + " : " + this.EffectString(this.effectValue);
  //     if (this.level.IsMaxed())
  //       return str;
  //     return str + "\n- " + Localization.Basic(BasicWord.Next) + " : " + this.EffectString(this.nextEffectValue) + " ( <color=green>" + Localization.Basic(BasicWord.Lv) + " " + Util.tDigit(this.transaction.ToLevel()) + "</color> )";
  //   }

  //   DescriptionString() {
  //     let str = (Util.optStr + "<size=20>" + this.NameString() + "<size=18>") + "\n\n<size=20><u>" + Localization.Basic(BasicWord.Information) + "</u><size=18>" + "\n- " + Localization.Basic(BasicWord.MaxLevel) + " : " + Localization.Basic(BasicWord.Lv) + " " + Util.tDigit(this.level.maxValue()) + "\n\n" + this.EffectString();
  //     return this.level.IsMaxed() ? str : str + "\n\n" + this.CostString();
  //   }
}
