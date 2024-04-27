import { Util } from "@/Util";
import { DATA } from "..";
import { Localization } from "../../localization";
import { SDGemKind } from "../../type/SDGemKind";
export class SDGem {
  data: DATA;
  // sdGemRitualCtrl: SDGemRitualController;

  constructor(DATA: DATA) {
    this.data = DATA;
    // this.sdGemRitualCtrl = sdGemRitualCtrl;
    //   this.level.maxValue = (() => this.maxLevel);
    //   this.exp = new SDGemExp(this, new Func<long, double>(this.RequiredExp), (INTEGER) this.level);
    //   this.unlock = new Unlock();
    //   this.motherStoneAssigned = new SDGemMotherStoneAssigned(this);
  }

  Start() {
    return this.SetEffect();
  }

  get motherStoneAssigned() {
    return this.data.source.sdGemMotherStoneAssigned[this.kind];
  }
  set motherStoneAssigned(value) {
    this.data.source.sdGemMotherStoneAssigned[this.kind] = value;
  }
  get level() {
    return this.data.source.sdGemLevels[this.kind];
  }

  get exp() {
    return this.data.source.sdGemExps[this.kind];
  }

  set level(value) {
    this.data.source.sdGemLevels[this.kind] = Math.min(value, this.maxLevel);
  }

  get kind() {
    return SDGemKind.Sunstone;
  }

  get maxLevel() {
    return 10;
  }
  ProgressPerSec() {
    return this.motherStoneAssigned * this.data.sdg.sdGemRitualCtrl.progressSpeedModifier.Value();
  }

  TimeLeftToLevel() {
    return this.ProgressPerSec() < 1.0 ? this.progressLeft / Math.max(1.0, this.data.sdg.sdGemRitualCtrl.progressSpeedModifier.Value()) : this.progressLeft / this.ProgressPerSec();
  }
  TimeLeftToLevelTotal(levelTarget) {
    return this.ProgressPerSec() < 1.0
      ? this.RequiredExpTotal(levelTarget) / Math.max(1.0, this.data.sdg.sdGemRitualCtrl.progressSpeedModifier.Value())
      : this.RequiredExpTotal(levelTarget) / this.ProgressPerSec();
  }

  RequiredExp(level) {
    return 1e300;
  }

  RequiredExpTotal(levelTarget) {
    if (levelTarget < this.level || this.level == this.maxLevel) return 0;
    if (levelTarget > this.maxLevel) levelTarget = this.maxLevel;
    let exp = 0;

    for (let level = this.level; level <= levelTarget; level++) {
      exp += this.RequiredExp(level);
    }
    if (exp < 0) return 0;
    return exp - this.exp;
  }

  ApproximateTimeNeeded(targetLevel: number) {
    if (this.motherStoneAssigned == 0) return 0;
    let totalSecRequired = this.TimeLeftToLevelTotal(targetLevel);
    let timeRequired = 0;
    let expPerSec = this.data.source.nitroSpeed;
    let expPerDay = expPerSec * 86400;
    let expPerNitro = this.data.nitro.ModifiedOfflineTimesec();
    let daysRequired = 0;
    let nitroSink = 0;
    let nitroUsed = 0;

    while (totalSecRequired > expPerNitro + expPerDay) {
      totalSecRequired -= expPerDay;
      daysRequired++;
      while (nitroUsed < 5) {
        if (totalSecRequired < expPerNitro) break;
        totalSecRequired -= expPerNitro;
        nitroSink++;
        nitroUsed++;
      }
      // totalSecRequired -= expPerNitro;

      nitroUsed = 0;
    }
    // console.log("expPerDayNitro:", expPerNitro);
    // console.log("expPerDay:", expPerDay);
    // console.log("totalSecRequired:", totalSecRequired);
    // console.log("daysRequired:", daysRequired);

    timeRequired += daysRequired * 86400;
    timeRequired += totalSecRequired / expPerSec;
    if (timeRequired < 0) timeRequired = 0;

    return `${Util.secondsToTime(timeRequired)} (${nitroSink})`;

    return Util.secondsToTime(timeRequired);
  }

  SetEffect() {}

  get progressLeft() {
    if (this.level == this.maxLevel) return 0;
    return this.RequiredExp(this.level) - this.exp;
  }

  get initEffectValue() {
    return 0.0;
  }

  get effectIncrementPerLevel() {
    return 0.0;
  }

  EffectValue() {
    return this.initEffectValue + this.effectIncrementPerLevel * this.level;
  }

  NameString() {
    return Localization.SDGemString(this.kind).name;
  }

  EffectValueString() {
    return Localization.SDGemString(this.kind, this.EffectValue()).description;
  }
}
