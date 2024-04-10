import { Localization } from "@/localization/";
import { DataGuild } from ".";
import { GuildSuperAbilityKind } from "@/type/GuildSuperAbilityKind";
import { Unlock } from "../Unlock";
import { DATA } from "..";
import { Util } from "@/Util";

export class GuildSuperAbility {
  data: DATA;
  guildCtrl: DataGuild;

  unlock: Unlock;

  get kind() {
    return GuildSuperAbilityKind.SuperMining;
  }

  get level() {
    return this.data.source.guildSuperAbilityLevels[this.kind];
  }
  set level(value) {
    this.data.source.guildSuperAbilityLevels[this.kind] = value;
  }
  constructor(guildCtrl: DataGuild) {
    this.data = guildCtrl.data;
    this.guildCtrl = guildCtrl;

    this.unlock = new Unlock();
  }

  Start() {
    this.SetEffect();
  }

  get maxLevel() {
    return 10;
  }

  get isIncreaseLevelCap() {
    return false;
  }

  Cost(level) {
    return 1.0;
  }

  NameString() {
    return Localization.GuildSuperAbility(this.kind).name;
  }

  SetEffect() {}

  EffectString(level) {
    return Localization.GuildSuperAbility(this.kind).effect1;
  }

  EffectValue(level) {
    return 0.0;
  }

  get currentEffectValue() {
    return this.EffectValue(this.level);
  }

  LevelCapEffectString(level) {
    return Localization.GuildSuperAbility(this.kind, "", Util.tDigit(this.EffectLevelCapIncrement(level))).effect2;
  }

  EffectLevelCapIncrement(level) {
    return level;
  }

  LevelString() {
    return `Lv ${Util.tDigit(this.level)}`;
  }

  DescriptionString() {
    // let str1 =
    //   Util.optStr +
    //   "<size=20>" +
    //   this.Name() +
    //   " < <color=green>" +
    //   Localization.Basic(BasicWord.Lv) +
    //   " " +
    //   Util.tDigit(this.level.value) +
    //   "</color> >" +
    //   "<size=18>\n\n" +
    //   (Util.optStr + "<size=20><u>" + Localization.Basic(BasicWord.Information) + "</u><size=18>") +
    //   (Util.optStr + "\n- " + Localization.Basic(BasicWord.MaxLevel) + " : " + Localization.Basic(BasicWord.Lv) + " " + Util.tDigit(this.level.maxValue())) +
    //   "\n\n" +
    //   (Util.optStr + "<size=20><u>" + Localization.UpgradeMenuString(8) + "</u><size=18>") +
    //   (Util.optStr + "\n- " + this.EffectString(this.level.value));
    // if (this.isIncreaseLevelCap) str1 = str1 + "\n- " + this.LevelCapEffectString(this.level.value);
    // let str2 = str1 + "\n\n" + (Util.optStr + "<size=20><u>" + Localization.UpgradeMenuString(9) + "</u><size=18>");
    // if (this.level.IsMaxed()) return str2;
    // let str3 =
    //   str2 +
    //   (Util.optStr +
    //     "\n- " +
    //     this.EffectString(this.transaction.ToLevel()) +
    //     " ( <color=green>" +
    //     Localization.Basic(BasicWord.Lv) +
    //     " " +
    //     Util.tDigit(this.transaction.ToLevel()) +
    //     "</color> )");
    // if (this.isIncreaseLevelCap)
    //   str3 =
    //     str3 +
    //     "\n- " +
    //     this.LevelCapEffectString(this.transaction.ToLevel()) +
    //     " ( <color=green>" +
    //     Localization.Basic(BasicWord.Lv) +
    //     " " +
    //     Util.tDigit(this.transaction.ToLevel()) +
    //     "</color> )";
    // return (
    //   str3 +
    //   "\n\n" +
    //   (Util.optStr + "<size=20><u>" + Localization.Basic(BasicWord.Cost) + "</u><size=18>") +
    //   (Util.optStr +
    //     "\n- " +
    //     Util.tDigit(this.transaction.Cost()) +
    //     " " +
    //     Localization.Basic(BasicWord.Points) +
    //     " ( <color=green>" +
    //     Localization.Basic(BasicWord.Lv) +
    //     " " +
    //     Util.tDigit(this.transaction.ToLevel()) +
    //     "</color> )")
    // );
  }
}
