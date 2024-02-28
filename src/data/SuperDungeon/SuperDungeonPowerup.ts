import { Localization } from "../../localization";
import { HeroKind } from "../../type/HeroKind";
import { SDModifierKind } from "../../type/SDModifierKind";
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
  constructor(ctrl: SuperDungeonController) {
    this.ctrl = ctrl;
    this.heroKind = ctrl.heroKind;

    // this.purchasedNum = new SuperDungeonPowerupPurchasedNum(this.kind);
  }
  get level() {
    return this.ctrl.data.source.superDungeonPowerupLevels[this.kind];
  }

  set level(value) {
    this.ctrl.data.source.superDungeonPowerupLevels[this.kind] = value;
  }

  get sdgCtrl() {
    return this.ctrl.data.sdg;
  }

  get isUnlocked() {
    return this.ctrl.data.source.superDungeonPowerupIsUnlocked[this.kind];
  }

  get kind() {
    return SuperDungeonPowerupKind.Heal;
  }

  get purchasedNum() {
    return this.ctrl.data.source.superDungeonPowerupPurchasedNums[this.kind];
  }
  set purchasedNum(value) {
    this.ctrl.data.source.superDungeonPowerupPurchasedNums[this.kind] = value;
  }
  // get dungeonCoin() {return this.ctrl.dungeonCoin;}

  // get dungeonCoinPermanent() {return this.sdgCtrl.dungeonCoinPermanent;}

  // get topaz() {return this.sdgCtrl.topaz;}

  get rank() {
    return this.ctrl.data.source.superDungeonPowerupRanks[this.kind];
  }
  set rank(value) {
    this.ctrl.data.source.superDungeonPowerupRanks[this.kind] = Math.min(100, value);
  }

  Start() {
    // this.rank.maxValue = (() => this.sdgCtrl.powerupMaxRank.Value());
    // this.SetTransaction();
    this.SetEffect();
  }

  // Initialize() {return this.level.ChangeValue(0);}

  isActive() {
    // if (this.kind == 13) console.log(this.ctrl.data.source.superDungeonPowerupIsActive);

    return this.ctrl.data.source.superDungeonPowerupIsActive;
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
    const baseFormula = this.initEffectValue + this.rank * this.incrementEffectValuePerRank;
    // for (let index = 0; index < Enums.HeroKind; index++) {
    //   if (this.ctrl.data.battles[index].isSuperDungeon && this.ctrl.data.battles[index].superDungeonCtrl.currentSD.modifierCtrl.powerupEffectDecrement.Value() > 0.0)
    //     return (this.initEffectValue + this.rank * this.incrementEffectValuePerRank) * Math.max(0.0, 1.0 - this.ctrl.currentSD.modifierCtrl.powerupEffectDecrement.Value());
    // }
    if (this.sdgCtrl.data.source.isSuperDungeon && this.sdgCtrl.data.source.isActiveSdModifiers[950 + SDModifierKind.ReducePowerupEffect]) {
      const value = this.sdgCtrl.data.source.sdModifierValues[950 + SDModifierKind.ReducePowerupEffect];
      const modifier = value == 0 ? 0.5 : value == 1 ? 0.9 : 0.99;

      return baseFormula * Math.max(0.0, 1.0 - modifier);
    }

    return baseFormula;
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
    //   if (this.ctrl.data.battles[index].isSuperDungeon && this.ctrl.data.battles[index].superDungeonCtrl.currentSD.modifierCtrl.unlockRemovePowerupPassives.IsUnlocked())
    //     return 0.0;
    // }
    // }
    if (this.sdgCtrl.data.source.isSuperDungeon && this.sdgCtrl.data.source.isActiveSdModifiers[950 + SDModifierKind.RemoveSDPowerupPassives]) {
      return 0;
    }

    return Math.min(this.permEffectMaxValue, Math.pow(this.purchasedNum, 2.0 / 3.0) * this.permEffect);
  }
  RankCost(rank) {
    return 0;
  }
  NameString() {
    return Localization.SDPowerupString(this.kind, this.PermanentEffectValue()).name;
  }
  TotalRankCost() {
    let total = 0;
    for (let index = 0; index < this.rank; index++) {
      if (this.rank) total += this.RankCost(index);
    }
    return total;
  }
  EffectValueString() {
    return Localization.SDPowerupString(this.kind, this.PermanentEffectValue()).passive;
  }
  // PermEffectString() {
  //   str = ( + this.PermanentEffectString() + "( " + this.permEffectIncrementString + " x [" + Localized.localized.Basic(BasicWord.PurchasedNum) + "]<sup>2/3</sup> )");
  //   if (this.permEffectMaxValueString != "")
  //     str = str + "\n- " + Localized.localized.BattleControllerUIString(16) + " : " + this.permEffectMaxValueString;
  //   return str;
  // }
}
