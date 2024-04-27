import { MultiplierInfo, Multiplier } from "../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { RebirthUpgradeKind } from "../../type/RebirthUpgradeKind";
import { RebirthUpgrade } from "./RebirthUpgrade";
import { HeroKind } from "../../type/HeroKind";
import { DATA } from "..";
import { DataRebirth } from ".";

export class Rebirth {
  data: DATA;
  rebirthCtrl: DataRebirth;
  additionalAbilityPoint: Multiplier;
  bonusEffectFactorOneDownTier: Multiplier;
  rebirthPointGainFactor: Multiplier;
  rebirthPointKinds = [];
  heroKind: HeroKind;
  tier: number;
  rebirthPoint;
  initRebirthPoint: Multiplier;
  rebirthUpgrades: RebirthUpgrade[];

  constructor(DATA: DATA, tier, heroKind) {
    this.data = DATA;
    this.rebirthCtrl = this.data.rebirth;
    this.tier = tier;
    this.heroKind = heroKind;
    this.Awake();
  }

  Awake() {
    // this.accomplish = new AccomplishRebirth(this);
    // this.rebirthPoint = new RebirthPoint(this.heroKind, this.tier);
    this.additionalAbilityPoint = new Multiplier();

    this.additionalAbilityPoint.minValue = () => 0.0;
    this.bonusEffectFactorOneDownTier = new Multiplier();
    this.initRebirthPoint = new Multiplier();

    this.rebirthPointGainFactor = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.rebirthPointGainFactor.name = `Tier ${this.tier + 1} Rebirth Point Gain`;
    switch (this.tier) {
      case 0:
        // this.additionalAbilityPoint.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => Math.min(this.rebirthCtrl.tier1AbilityPointBonusLevelCap.Value(, this.maxHeroLevel) - RebirthParameter.tierHeroLevel[0])));
        // this.rebirthPointKinds.Add(RebirthPointKind.HeroLevel);
        // this.rebirthPointKinds.Add(RebirthPointKind.Quest);
        // this.rebirthPointKinds.Add(RebirthPointKind.Move);
        this.rebirthUpgrades = [];
        this.rebirthUpgrades[0] = new RebirthUpgrade(this, RebirthUpgradeKind.ExpGain);
        this.rebirthUpgrades[1] = new RebirthUpgrade(this, RebirthUpgradeKind.EQRequirement);
        this.rebirthUpgrades[2] = new RebirthUpgrade(this, RebirthUpgradeKind.QuestAcceptableNum);
        switch (this.heroKind) {
          case HeroKind.Warrior:
            this.rebirthUpgrades[3] = new RebirthUpgrade(this, RebirthUpgradeKind.BasicAtk);
            this.rebirthUpgrades[4] = new RebirthUpgrade(this, RebirthUpgradeKind.StoneGain);
            return;
          case HeroKind.Wizard:
            this.rebirthUpgrades[3] = new RebirthUpgrade(this, RebirthUpgradeKind.BasicMAtk);
            this.rebirthUpgrades[4] = new RebirthUpgrade(this, RebirthUpgradeKind.CrystalGain);
            return;
          case HeroKind.Angel:
            this.rebirthUpgrades[3] = new RebirthUpgrade(this, RebirthUpgradeKind.BasicHp);
            this.rebirthUpgrades[4] = new RebirthUpgrade(this, RebirthUpgradeKind.LeafGain);
            return;
          case HeroKind.Thief:
            this.rebirthUpgrades[3] = new RebirthUpgrade(this, RebirthUpgradeKind.BasicDef);
            this.rebirthUpgrades[4] = new RebirthUpgrade(this, RebirthUpgradeKind.StoneGoldCap);
            return;
          case HeroKind.Archer:
            this.rebirthUpgrades[3] = new RebirthUpgrade(this, RebirthUpgradeKind.BasicMDef);
            this.rebirthUpgrades[4] = new RebirthUpgrade(this, RebirthUpgradeKind.CrystalGoldCap);
            return;
          case HeroKind.Tamer:
            this.rebirthUpgrades[3] = new RebirthUpgrade(this, RebirthUpgradeKind.BasicMp);
            this.rebirthUpgrades[4] = new RebirthUpgrade(this, RebirthUpgradeKind.LeafGoldCap);
            return;
          default:
            return;
        }
      case 1:
        // this.additionalAbilityPoint.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => Math.min(this.rebirthCtrl.tier2AbilityPointBonusLevelCap.Value(, this.maxHeroLevel) - RebirthParameter.tierHeroLevel[1]), (Func<bool>) (() => this.rebirthNum > 0)));
        // this.bonusEffectFactorOneDownTier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.1 * Math.pow((this.rebirthNum, 2.0 / 3.0))));
        // this.rebirthPointKinds.Add(RebirthPointKind.SkillLevel);
        // this.rebirthPointKinds.Add(RebirthPointKind.HeroLevel);
        // this.rebirthPointKinds.Add(RebirthPointKind.Quest);
        // this.rebirthPointKinds.Add(RebirthPointKind.Move);
        this.rebirthUpgrades = [];
        this.rebirthUpgrades[0] = new RebirthUpgrade(this, RebirthUpgradeKind.SkillProfGain);
        this.rebirthUpgrades[1] = new RebirthUpgrade(this, RebirthUpgradeKind.SkillRankCostReduction);
        this.rebirthUpgrades[2] = new RebirthUpgrade(this, RebirthUpgradeKind.ClassSkillSlot);
        this.rebirthUpgrades[3] = new RebirthUpgrade(this, RebirthUpgradeKind.ShareSkillPassive);
        this.rebirthUpgrades[4] = new RebirthUpgrade(this, RebirthUpgradeKind.T1ExpGainBoost);
        this.rebirthUpgrades[5] = new RebirthUpgrade(this, RebirthUpgradeKind.T1RebirthPointGainBoost);
        switch (this.heroKind) {
          case HeroKind.Warrior:
            this.rebirthUpgrades[6] = new RebirthUpgrade(this, RebirthUpgradeKind.T1BasicAtkBoost);
            this.rebirthUpgrades[7] = new RebirthUpgrade(this, RebirthUpgradeKind.T1StoneGainBoost);
            return;
          case HeroKind.Wizard:
            this.rebirthUpgrades[6] = new RebirthUpgrade(this, RebirthUpgradeKind.T1BasicMAtkBoost);
            this.rebirthUpgrades[7] = new RebirthUpgrade(this, RebirthUpgradeKind.T1CrystalGainBoost);
            return;
          case HeroKind.Angel:
            this.rebirthUpgrades[6] = new RebirthUpgrade(this, RebirthUpgradeKind.T1BasicHpBoost);
            this.rebirthUpgrades[7] = new RebirthUpgrade(this, RebirthUpgradeKind.T1LeafGainBoost);
            return;
          case HeroKind.Thief:
            this.rebirthUpgrades[6] = new RebirthUpgrade(this, RebirthUpgradeKind.T1BasicDefBoost);
            this.rebirthUpgrades[7] = new RebirthUpgrade(this, RebirthUpgradeKind.T1StoneGoldCapBoost);
            return;
          case HeroKind.Archer:
            this.rebirthUpgrades[6] = new RebirthUpgrade(this, RebirthUpgradeKind.T1BasicMDefBoost);
            this.rebirthUpgrades[7] = new RebirthUpgrade(this, RebirthUpgradeKind.T1CrystalGoldCapBoost);
            return;
          case HeroKind.Tamer:
            this.rebirthUpgrades[6] = new RebirthUpgrade(this, RebirthUpgradeKind.T1BasicMpBoost);
            this.rebirthUpgrades[7] = new RebirthUpgrade(this, RebirthUpgradeKind.T1LeafGoldCapBoost);
            return;
          default:
            return;
        }
      case 2:
        // this.additionalAbilityPoint.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => ((Math.min(RebirthParameter.tierHeroLevel[3], this.maxHeroLevel) - RebirthParameter.tierHeroLevel[2])), (Func<bool>) (() => this.rebirthNum > 0)));
        // this.bonusEffectFactorOneDownTier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.1 * Math.pow((this.rebirthNum, 2.0 / 3.0))));
        // this.rebirthPointKinds.Add(RebirthPointKind.EQLevel);
        // this.rebirthPointKinds.Add(RebirthPointKind.SkillLevel);
        // this.rebirthPointKinds.Add(RebirthPointKind.HeroLevel);
        // this.rebirthPointKinds.Add(RebirthPointKind.Quest);
        // this.rebirthPointKinds.Add(RebirthPointKind.Move);
        this.rebirthUpgrades = [];
        this.rebirthUpgrades[0] = new RebirthUpgrade(this, RebirthUpgradeKind.EQProfGain);
        this.rebirthUpgrades[1] = new RebirthUpgrade(this, RebirthUpgradeKind.EQLevelCap);
        this.rebirthUpgrades[2] = new RebirthUpgrade(this, RebirthUpgradeKind.EQWeaponSlot);
        this.rebirthUpgrades[3] = new RebirthUpgrade(this, RebirthUpgradeKind.EQArmorSlot);
        this.rebirthUpgrades[4] = new RebirthUpgrade(this, RebirthUpgradeKind.EQJewelrySlot);
        this.rebirthUpgrades[5] = new RebirthUpgrade(this, RebirthUpgradeKind.T2ExpGainBoost);
        this.rebirthUpgrades[6] = new RebirthUpgrade(this, RebirthUpgradeKind.T2SkillProfGainBoost);
        this.rebirthUpgrades[7] = new RebirthUpgrade(this, RebirthUpgradeKind.T2RebirthPointGainBoost);
        switch (this.heroKind) {
          case HeroKind.Warrior:
            this.rebirthUpgrades[8] = new RebirthUpgrade(this, RebirthUpgradeKind.T2BasicAtkBoost);
            this.rebirthUpgrades[9] = new RebirthUpgrade(this, RebirthUpgradeKind.T2StoneGainBoost);
            return;
          case HeroKind.Wizard:
            this.rebirthUpgrades[8] = new RebirthUpgrade(this, RebirthUpgradeKind.T2BasicMAtkBoost);
            this.rebirthUpgrades[9] = new RebirthUpgrade(this, RebirthUpgradeKind.T2CrystalGainBoost);
            return;
          case HeroKind.Angel:
            this.rebirthUpgrades[8] = new RebirthUpgrade(this, RebirthUpgradeKind.T2BasicHpBoost);
            this.rebirthUpgrades[9] = new RebirthUpgrade(this, RebirthUpgradeKind.T2LeafGainBoost);
            return;
          case HeroKind.Thief:
            this.rebirthUpgrades[8] = new RebirthUpgrade(this, RebirthUpgradeKind.T2BasicDefBoost);
            this.rebirthUpgrades[9] = new RebirthUpgrade(this, RebirthUpgradeKind.T2StoneGoldCapBoost);
            return;
          case HeroKind.Archer:
            this.rebirthUpgrades[8] = new RebirthUpgrade(this, RebirthUpgradeKind.T2BasicMDefBoost);
            this.rebirthUpgrades[9] = new RebirthUpgrade(this, RebirthUpgradeKind.T2CrystalGoldCapBoost);
            return;
          case HeroKind.Tamer:
            this.rebirthUpgrades[8] = new RebirthUpgrade(this, RebirthUpgradeKind.T2BasicMpBoost);
            this.rebirthUpgrades[9] = new RebirthUpgrade(this, RebirthUpgradeKind.T2LeafGoldCapBoost);
            return;
          default:
            return;
        }
    }
  }

  Start() {
    for (let index = 0; index < this.rebirthUpgrades.length; index++) this.rebirthUpgrades[index].Start();
  }
  Upgrade(kind: RebirthUpgradeKind) {
    for (let index = 0; index < this.rebirthUpgrades.length; index++) {
      if (this.rebirthUpgrades[index].kind == kind) return this.rebirthUpgrades[index];
    }
    return null;
  }
  GetBonus() {
    // this.rebirthCtrl.Rebirth(this.heroKind, 0).additionalAbilityPoint.Calculate();
    // globalThis.data.stats.AbilityPointLeft(this.heroKind).ChangeValue(this.rebirthCtrl.Rebirth(this.heroKind, 0).additionalAbilityPoint.Value());
    // globalThis.data.stats.heroes[this.heroKind].AutoAddAbilityPoint(true);
  }
}
