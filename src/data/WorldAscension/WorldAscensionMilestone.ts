import { Localization } from "@/localization";
import { DATA } from "..";
import { WorldAscension } from "./WorldAscension";

export class WorldAscensionMilestone {
  data: DATA;
  wa: WorldAscension;
  currentLevel;
  calculatedCurrentValue;
  maxLevel = 10;

  constructor(wa: WorldAscension) {
    this.wa = wa;
    this.data = wa.data;
  }

  Start() {
    return this.SetEffect();
  }

  get kind() {
    return 0;
  }

  GoalValue(level) {
    return 1e300;
  }

  get maxLevelReached() {
    return this.data.source.ascensionMilestoneLevelReached[this.kind];
  }
  set maxLevelReached(value) {
    this.data.source.ascensionMilestoneLevelReached[this.kind] = value;
  }

  Name() {
    return Localization.WorldAscensionMilestoneString(this).name;
  }

  EffectString() {
    return Localization.WorldAscensionMilestoneString(this, this.currentPassiveEffectValue).effect;
  }

  PassiveEffectValue(level) {
    return 0.0;
  }

  SetEffect() {}

  get currentPassiveEffectValue() {
    return this.PassiveEffectValue(this.maxLevelReached);
  }

  // NameString() {
  //   str = Util.optStr + this.Name() + "< <color=green>" + Localization.Basic(BasicWord.Lv) + " " + Util.tDigit(this.CurrentLevel()) + "</color> >";
  //   if (this.maxLevelReached.value > 0) str = str + "<size=16>( " + Localization.Basic(BasicWord.BestLevel) + " " + Util.tDigit(this.maxLevelReached.value) + " )";
  //   return str;
  // }

  // MilestoneString() {
  //   str1 = Util.optStr;
  //   for (let index = 0; index < 10; index++) {
  //     level = 1 + index;
  //     if (level <= this.CurrentLevel()) str1 += "<color=green>";
  //     str2 = str1 + "\n- " + Localization.Basic(BasicWord.Lv) + " " + Util.tDigit(level) + " : " + Util.tDigit(this.GoalValue(level));
  //     if (level == 1) str1 = str2 + "( " + Localization.WorldAscensionString(2) + " + " + Util.tDigit(this.PointGainIncrement(level)) + " )</color>";
  //     else str1 = str2 + "( + " + Util.tDigit(this.PointGainIncrement(level)) + " )</color>";
  //   }
  //   return str1;
  // }

  CurrentLevel() {
    return this.currentLevel;
  }

  get maxLevelReachedAfterWA() {
    return Math.max(this.maxLevelReached, this.CurrentLevel());
  }
}
