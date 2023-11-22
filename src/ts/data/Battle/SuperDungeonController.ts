import { Multiplier } from "../../Multiplier";
import { MultiplierInfo } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { Element } from "../../type/Element";
import { Stats } from "../../type/Stats";
import { SuperDungeonPowerupKind } from "../../type/SuperDungeonPowerupKind";
import { BATTLE_CONTROLLER } from "./index";

export class SuperDungeonController {
  battleCtrl: BATTLE_CONTROLLER;
  //   dungeonCoin: DungeonCoin;
  initialDungeonCoin: Multiplier;
  //   powerupList: SuperDungeonPowerup[] = [];
  powerupList = [];
  //   powerupRamdomArray: SuperDungeonPowerup[];
  skillSlotNum: Multiplier;
  eqWeaponSlotNum: Multiplier;
  eqArmorSlotNum: Multiplier;
  eqJewelrySlotNum: Multiplier;
  utilitySlotNum: Multiplier;
  damageMultiplier: Multiplier;
  damageCutMultiplier: Multiplier;
  sdChallengeBossDamageMultiplier: Multiplier;
  sdChallengeBossDamageCutMultiplier: Multiplier;
  armoredFury: Multiplier;
  wardedFury: Multiplier;
  healPercentEveryFloor: Multiplier;
  mpChargePercentEveryFloor: Multiplier;
  isDodgePressed;
  dodgeTimesecLeft: number;
  dodgeHealPercent: Multiplier;
  dodgeTimeRestoreSecEveryFloor: Multiplier;
  //   unlockedSDPList: SuperDungeonPowerup[] = [];
  lastLootText;

  get heroKind() {
    return this.battleCtrl.heroKind;
  }

  get sdgCtrl() {
    return globalThis.data.sdg;
  }

  IsDodge() {
    return this.IsAvailableDodge() && this.isDodgePressed;
  }

  IsAvailableDodge() {
    return this.dodgeTimesecLeft > 0.0;
  }

  constructor(battleCtrl: BATTLE_CONTROLLER) {
    this.battleCtrl = battleCtrl;
    // this.dungeonCoin = new DungeonCoin(this);
    this.initialDungeonCoin = new Multiplier();
    this.skillSlotNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.eqWeaponSlotNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0));
    this.eqArmorSlotNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0));
    this.eqJewelrySlotNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0));
    this.utilitySlotNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0));
    this.damageMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.damageCutMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.sdChallengeBossDamageMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.sdChallengeBossDamageCutMultiplier = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.armoredFury = new Multiplier();
    this.wardedFury = new Multiplier();
    this.healPercentEveryFloor = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0),
      () => 1.0,
      () => 0.0
    );
    this.mpChargePercentEveryFloor = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0),
      () => 1.0,
      () => 0.0
    );
    // this.dodgeTimesecLeft = new NUMBER((() => this.sdgCtrl.dodgeTimesec.Value()), (() => 0.0));
    this.dodgeHealPercent = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.0), () => 1.0, null);
    // this.dodgeTimeRestoreSecEveryFloor = new Multiplier((() => this.sdgCtrl.dodgeTimesec.Value()), (() => 0.0));
    this.SetPowerups();
  }

  Start() {
    this.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.ArmoredFury,
        MultiplierType.Mul,
        () =>
          this.armoredFury.Value() * Math.log2(Math.max(1.0, globalThis.data.stats.BasicStats(this.heroKind, BasicStatsKind.DEF).After()))
      )
    );
    this.damageMultiplier.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.WardedFury,
        MultiplierType.Mul,
        () =>
          this.wardedFury.Value() * Math.log2(Math.max(1.0, globalThis.data.stats.BasicStats(this.heroKind, BasicStatsKind.MDEF).After()))
      )
    );
    // for (let index = 0; index < this.powerupList.length; index++)
    //   this.powerupList[index].Start();
  }

  //   Initialize() {
  //     this.dungeonCoin.ChangeValue(this.initialDungeonCoin.Value());
  //     this.isDodgePressed = false;
  //     this.dodgeTimesecLeft.ChangeValue(this.sdgCtrl.dodgeTimesec.Value());
  //     for (let index = 0; index < this.powerupList.length; index++)
  //       this.powerupList[index].Initialize();
  //   }

  SetPowerups() {
    // this.powerupList.push((SuperDungeonPowerup) new SDP_Heal(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_TimeLimit(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_DamageMultiplier(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_DamageCutMultiplier(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_RestoreDodgeTimesec(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_MoveSpeed(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_DodgeHeal(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_PhysicalCriticalChance(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_MagicalCriticalChance(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_CriticalDamage(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_SkillCastSpeed(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_PhysicalDamage(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_MagicalDamage(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_PhysicalAbsorption(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_MagicalAbsorption(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_DungeonCoinGain(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_FameGain(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_SkillHitCount(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_ChallengeBossDamageMultiplier(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_EquipmentDropChance(this));
    // this.powerupList.push((SuperDungeonPowerup) new SDP_ExtraAfterDamage(this));
    // this.powerupRamdomArray = this.powerupList.ToArray();
  }

  //   get powerupShowNum() {return this.sdgCtrl.powerupShowNum.Value() - this.currentSD.modifierCtrl.powerupDecrement.Value();}

  Powerup(kind: SuperDungeonPowerupKind) {
    for (let index = 0; index < this.powerupList.length; index++) {
      if (this.powerupList[index].kind == kind) return this.powerupList[index];
    }
    return null;
  }

  IsAvailableFilterSlot() {
    return this.CurrentAvailableFilterSlotNum() > 0;
  }

  CurrentAvailableFilterSlotNum() {
    return Math.max(0, globalThis.data.sdg.powerupFilterSlot.Value() - this.CurrentFilterSlotUsed());
  }

  CurrentFilterSlotUsed() {
    let num = 0;
    for (let index = 0; index < this.powerupList.length; index++) {
      if (this.powerupList[index].isOnPowerupFilter) num++;
    }
    return num;
  }
}
