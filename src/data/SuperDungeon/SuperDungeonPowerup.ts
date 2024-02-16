import { Enums } from "../../Enums";
import { HeroKind } from "../../type/HeroKind";
import { SuperDungeonPowerupKind } from "../../type/SuperDungeonPowerupKind";
import { SuperDungeonController } from "./SuperDungeonController";

export class SuperDungeonPowerup {
  ctrl: SuperDungeonController;
  heroKind: HeroKind;
  // rank: SuperDungeonPowerupRank;

  // purchasedNum: SuperDungeonPowerupPurchasedNum;
  // transaction: Transaction;
  // rankTransaction: Transaction;
  // unlockTransaction: SpecifiedTransaction;
  // isShow;

  get level() {
    return globalThis.data.custom.powerup[this.kind];
  }

  constructor(ctrl: SuperDungeonController) {
    this.ctrl = ctrl;
    this.heroKind = ctrl.heroKind;

    // this.purchasedNum = new SuperDungeonPowerupPurchasedNum(this.kind);
  }
  get sdgCtrl() {
    return globalThis.data.sdg;
  }

  get isUnlocked() {
    return globalThis.data.source.superDungeonPowerupIsUnlocked[this.kind];
  }

  get kind() {
    return SuperDungeonPowerupKind.Heal;
  }

  get purchasedNum() {
    return globalThis.data.source.superDungeonPowerupPurchasedNums[this.kind];
  }
  set purchasedNum(value) {
    globalThis.data.source.superDungeonPowerupPurchasedNums[this.kind] = value;
  }
  // get dungeonCoin() {return this.ctrl.dungeonCoin;}

  // get dungeonCoinPermanent() {return this.sdgCtrl.dungeonCoinPermanent;}

  // get topaz() {return this.sdgCtrl.topaz;}

  get rank() {
    return globalThis.data.source.superDungeonPowerupRanks[this.kind];
  }
  set rank(value) {
    globalThis.data.source.superDungeonPowerupRanks[this.kind] = Math.min(100, value);
  }

  Start() {
    // this.rank.maxValue = (() => this.sdgCtrl.powerupMaxRank.Value());
    // this.SetTransaction();
    this.SetEffect();
  }

  // Initialize() {return this.level.ChangeValue(0);}
  RankCost(rank) {
    return 0;
  }
  TotalRankCost() {
    let total = 0;
    for (let index = 0; index < this.rank; index++) {
      if (this.rank) total += this.RankCost(index);
    }
    return total;
  }

  Cost(level) {
    return 0;
  }
  isActive() {
    return globalThis.data.custom.isPowerupActive;
  }

  // Cost(level) {return (10 + 10 * level);}

  // RankCost(rank) {return (1 + rank);}

  // get unlockDungeonCoinCost() {return 0.0;}

  SetEffect() {}

  SetGlobalEffect() {}

  // Name() {return Localized.localized.SDPowerupString(this.kind).name;}

  // get permEffectIncrementString() {return "";}

  get baseInitEffectValue() {
    return 0.0;
  }

  get initEffectValue() {
    return this.baseInitEffectValue * this.sdgCtrl.powerupEffectMultiplier[this.kind].Value();
  }

  get baseIncrementEffectValuePerRank() {
    return 0.0;
  }

  get incrementEffectValuePerRank() {
    return this.baseIncrementEffectValuePerRank * this.sdgCtrl.powerupEffectMultiplier[this.kind].Value();
  }

  EffectValue() {
    // for (let index = 0; index < Enums.HeroKind; index++) {
    //   if (globalThis.data.battles[index].isSuperDungeon && globalThis.data.battles[index].superDungeonCtrl.currentSD.modifierCtrl.powerupEffectDecrement.Value() > 0.0)
    //     return (this.initEffectValue + this.rank * this.incrementEffectValuePerRank) * Math.max(0.0, 1.0 - this.ctrl.currentSD.modifierCtrl.powerupEffectDecrement.Value());
    // }
    return this.initEffectValue + this.rank * this.incrementEffectValuePerRank;
  }

  get basePermEffect() {
    return 0.0;
  }

  get permEffect() {
    return this.basePermEffect * this.sdgCtrl.powerupPermEffectMultiplier.Value();
  }

  get basePermEffectMaxValue() {
    return 1e300;
  }

  get permEffectMaxValue() {
    return this.basePermEffectMaxValue * this.sdgCtrl.powerupPermEffectMultiplier.Value();
  }

  // get permEffectMaxValueString() {return "";}

  PermanentEffectValue() {
    // for (let index = 0; index < Enums.HeroKind; index++) {
    //   if (globalThis.data.battles[index].isSuperDungeon && globalThis.data.battles[index].superDungeonCtrl.currentSD.modifierCtrl.unlockRemovePowerupPassives.IsUnlocked())
    //     return 0.0;
    // }
    return Math.min(this.permEffectMaxValue, Math.pow(this.purchasedNum, 2.0 / 3.0) * this.permEffect);
  }

  // PermEffectString() {
  //   str = (UsefulMethod.optStr + this.PermanentEffectString() + "( " + this.permEffectIncrementString + " x [" + Localized.localized.Basic(BasicWord.PurchasedNum) + "]<sup>2/3</sup> )");
  //   if (this.permEffectMaxValueString != "")
  //     str = str + "\n- " + Localized.localized.BattleControllerUIString(16) + " : " + this.permEffectMaxValueString;
  //   return str;
  // }
}
