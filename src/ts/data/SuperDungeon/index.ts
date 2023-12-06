import { Multiplier } from "../../Multiplier";
import { MultiplierInfo } from "../../Multiplier";
import { Enums } from "../../Enums";
import { SDGem } from "./SDGem";
import { SDGemRitual } from "./SDGemRitual";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { SuperDungeonPowerupKind } from "../../type/SuperDungeonPowerupKind";
import { SuperDungeonUpgradeController } from "./SuperDungeonUpgradeController";
import { SuperDungeonShopController } from "./SuperDungeonShopController";

export class SuperDungeonGlobalController {
  //   dungeonCoinPermanent: DungeonCoinPermanent;
  //   topaz: Topaz;
  //   ruby: Ruby;
  //   pieceOfRuby: PieceOfRuby;
  //   motherStone: MotherStone;
  //   refreshTicket: EntryCostRefreshTicket;
  dungeonCoinGain: Multiplier;
  dungeonCoinBonus: Multiplier;
  powerupShowNum: Multiplier;
  //   unlockPowerupBoostStart: Unlock;
  //   unlockBoostStartGoodRNG: Unlock;
  //   unlockFlexibleDodge: Unlock;
  dodgeTimesec: Multiplier;
  additionalTimeLimit: Multiplier;
  lootGainOnDie: Multiplier;
  //   unlockRubyShopTab: Unlock;
  //   unlockGemRitualTab: Unlock;
  //   modifierMilestoneCtrl: SDModifierMilestoneController;
  modifierLoadoutSlot: Multiplier;
  shopCtrl: SuperDungeonShopController;
  sdGemRitualCtrl: SDGemRitual;
  powerupMaxRank: Multiplier;
  powerupFilterSlot: Multiplier;
  powerupFilterLoadoutSlot: Multiplier;
  powerupEffectMultiplier: Multiplier[] = Array(Enums.SuperDungeonPowerupKind);
  powerupPermEffectMultiplier: Multiplier;
  //   unlockLeaveAndRetry: Unlock;
  autoBuyPowerupsTimesEveryFloor: Multiplier;
  upgradeCtrl: SuperDungeonUpgradeController;

  constructor() {
    // this.dungeonCoinPermanent = new DungeonCoinPermanent();
    // this.topaz = new Topaz();
    // this.ruby = new Ruby();
    // this.pieceOfRuby = new PieceOfRuby();
    // this.motherStone = new MotherStone();
    // this.refreshTicket = new EntryCostRefreshTicket();
    this.dungeonCoinGain = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.dungeonCoinBonus = new Multiplier();
    this.dodgeTimesec = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 10.0));
    // this.unlockFlexibleDodge = new Unlock();
    this.powerupShowNum = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0),
      () => 5.0,
      () => 2.0
    );
    // this.unlockPowerupBoostStart = new Unlock();
    // this.unlockBoostStartGoodRNG = new Unlock();
    this.autoBuyPowerupsTimesEveryFloor = new Multiplier();
    this.additionalTimeLimit = new Multiplier();
    this.lootGainOnDie = new Multiplier();
    this.powerupMaxRank = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 50.0));
    // this.powerupFilterSlot = new Multiplier((() => Enum.GetNames(typeof (SuperDungeonPowerupKind)).length), (() => 0.0));
    this.powerupFilterLoadoutSlot = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    for (let index = 0; index < this.powerupEffectMultiplier.length; index++)
      this.powerupEffectMultiplier[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.powerupPermEffectMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    // this.unlockRubyShopTab = new Unlock();
    // this.unlockGemRitualTab = new Unlock();
    this.upgradeCtrl = new SuperDungeonUpgradeController(this);
    this.shopCtrl = new SuperDungeonShopController();
    this.sdGemRitualCtrl = new SDGemRitual();
    // this.unlockLeaveAndRetry = new Unlock();
    // this.modifierMilestoneCtrl = new SDModifierMilestoneController();
    this.modifierLoadoutSlot = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  }

  SetPowerupGlobalEffect() {
    for (let index = 0; index < Enums.SuperDungeonPowerupKind; index++) {
      globalThis.data.battle.superDungeonCtrl.powerupList[index].SetGlobalEffect();
    }
    // console.log(globalThis.data.stats.heroes[0].basicStats[0]);
  }

  Start() {
    this.shopCtrl.Start();
    this.upgradeCtrl.Start();

    this.sdGemRitualCtrl.Start();
    this.SetPowerupGlobalEffect();
    // this.modifierMilestoneCtrl.Start();
  }

  PowerupEffectMultiplier(kind: SuperDungeonPowerupKind) {
    return this.powerupEffectMultiplier[kind];
  }

  SetEffectSDDamageMultiplier(info: MultiplierInfo) {
    for (let index = 0; index < Enums.HeroKind; index++)
      globalThis.data.battles[index].superDungeonCtrl.damageMultiplier.RegisterMultiplier(info);
  }

  SetEffectSDDamageCutMultiplier(info: MultiplierInfo) {
    for (let index = 0; index < Enums.HeroKind; index++)
      globalThis.data.battles[index].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(info);
  }

  SetEffectSDChallengeBossDamageMultiplier(info: MultiplierInfo) {
    for (let index = 0; index < Enums.HeroKind; index++)
      globalThis.data.battles[index].superDungeonCtrl.sdChallengeBossDamageMultiplier.RegisterMultiplier(info);
  }

  SetEffectSDChallengeBossDamageCutMultiplier(info: MultiplierInfo) {
    for (let index = 0; index < Enums.HeroKind; index++)
      globalThis.data.battles[index].superDungeonCtrl.sdChallengeBossDamageCutMultiplier.RegisterMultiplier(info);
  }

  SetEffectSDArmoredFuryMultiplier(info: MultiplierInfo) {
    for (let index = 0; index < Enums.HeroKind; index++)
      globalThis.data.battles[index].superDungeonCtrl.armoredFury.RegisterMultiplier(info);
  }

  SetEffectSDWardedFuryMultiplier(info: MultiplierInfo) {
    for (let index = 0; index < Enums.HeroKind; index++)
      globalThis.data.battles[index].superDungeonCtrl.wardedFury.RegisterMultiplier(info);
  }
}
