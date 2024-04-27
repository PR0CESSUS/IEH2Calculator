import { DATA } from "..";
import { Multiplier, MultiplierInfo } from "../Multiplier";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { HeroKind } from "../../type/HeroKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { RebirthUpgradeKind } from "../../type/RebirthUpgradeKind";
import { ResourceKind } from "../../type/ResourceKind";
import { Stats } from "../../type/Stats";
import { Rebirth } from "./Rebirth";
import { RebirthParameter } from "./RebirthParameter";

export class RebirthUpgrade {
  data: DATA;
  rebirth: Rebirth;
  kind: RebirthUpgradeKind;
  effectMultiFactor: Multiplier;
  isGlobalEffect: boolean;
  constructor(rebirth: Rebirth, kind: RebirthUpgradeKind) {
    this.rebirth = rebirth;
    this.data = rebirth.data;
    this.kind = kind;

    this.effectMultiFactor = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
  }

  get level() {
    switch (this.rebirth.heroKind) {
      case HeroKind.Warrior:
        return this.data.source.rebirthUpgradeLevelsWarrior[this.kind];
      case HeroKind.Wizard:
        return this.data.source.rebirthUpgradeLevelsWizard[this.kind];
      case HeroKind.Angel:
        return this.data.source.rebirthUpgradeLevelsAngel[this.kind];
      case HeroKind.Thief:
        return this.data.source.rebirthUpgradeLevelsTamer[this.kind];
      case HeroKind.Archer:
        return this.data.source.rebirthUpgradeLevelsArcher[this.kind];
      case HeroKind.Tamer:
        return this.data.source.rebirthUpgradeLevelsTamer[this.kind];

      default:
        return 0;
    }
  }

  get rebirthCtrl() {
    return this.data.rebirth;
  }

  get heroKind() {
    return this.rebirth.heroKind;
  }
  Start() {
    this.SetEffect();
  }

  get effectValue() {
    return RebirthParameter.Upgrade(this.kind, this.level)[4] * this.effectMultiFactor.Value();
  }

  SetEffect() {
    switch (this.kind) {
      case RebirthUpgradeKind.ExpGain:
        this.data.stats.HeroStats(this.heroKind, Stats.ExpGain).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Mul, () => this.effectValue));
        break;
      case RebirthUpgradeKind.EQRequirement:
        this.data.stats.LevelForEquipment(this.heroKind).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        break;
      case RebirthUpgradeKind.QuestAcceptableNum:
        // this.#data.quest.AcceptableNum(this.heroKind).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add,  (() => this.effectValue)));
        break;
      case RebirthUpgradeKind.BasicAtk:
        this.data.stats.SetEffectBasicStatsPerLevel(BasicStatsKind.ATK, new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.BasicMAtk:
        this.data.stats.SetEffectBasicStatsPerLevel(BasicStatsKind.MATK, new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.BasicHp:
        this.data.stats.SetEffectBasicStatsPerLevel(BasicStatsKind.HP, new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.BasicDef:
        this.data.stats.SetEffectBasicStatsPerLevel(BasicStatsKind.DEF, new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.BasicMDef:
        this.data.stats.SetEffectBasicStatsPerLevel(BasicStatsKind.MDEF, new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.BasicMp:
        this.data.stats.SetEffectBasicStatsPerLevel(BasicStatsKind.MP, new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.StoneGain:
        this.data.stats.ResourceGain(ResourceKind.Stone).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Mul, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.CrystalGain:
        this.data.stats.ResourceGain(ResourceKind.Crystal).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Mul, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.LeafGain:
        this.data.stats.ResourceGain(ResourceKind.Leaf).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Mul, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.StoneGoldCap:
        // this.#data.upgrade.goldcapMultipliers[0].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add,  (() => this.effectValue)));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.CrystalGoldCap:
        // this.#data.upgrade.goldcapMultipliers[1].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add,  (() => this.effectValue)));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.LeafGoldCap:
        // this.#data.upgrade.goldcapMultipliers[2].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add,  (() => this.effectValue)));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.SkillProfGain:
        this.data.stats
          .HeroStats(this.heroKind, Stats.SkillProficiencyGain)
          .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Mul, () => this.effectValue));
        break;
      case RebirthUpgradeKind.SkillRankCostReduction:
        this.data.skill.skillRankCostFactors[this.heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        break;
      case RebirthUpgradeKind.ClassSkillSlot:
        this.data.stats.SkillSlotNum(this.heroKind).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        break;
      case RebirthUpgradeKind.ShareSkillPassive:
        this.data.skill.skillPassiveShareFactors[this.heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        break;
      case RebirthUpgradeKind.T1ExpGainBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 0)
          .Upgrade(RebirthUpgradeKind.ExpGain)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        break;
      case RebirthUpgradeKind.T1RebirthPointGainBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 0)
          .rebirthPointGainFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        break;
      case RebirthUpgradeKind.T1BasicAtkBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 0)
          .Upgrade(RebirthUpgradeKind.BasicAtk)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T1BasicMAtkBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 0)
          .Upgrade(RebirthUpgradeKind.BasicMAtk)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T1BasicHpBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 0)
          .Upgrade(RebirthUpgradeKind.BasicHp)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T1BasicDefBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 0)
          .Upgrade(RebirthUpgradeKind.BasicDef)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T1BasicMDefBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 0)
          .Upgrade(RebirthUpgradeKind.BasicMDef)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T1BasicMpBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 0)
          .Upgrade(RebirthUpgradeKind.BasicMp)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T1StoneGainBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 0)
          .Upgrade(RebirthUpgradeKind.StoneGain)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T1CrystalGainBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 0)
          .Upgrade(RebirthUpgradeKind.CrystalGain)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T1LeafGainBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 0)
          .Upgrade(RebirthUpgradeKind.LeafGain)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T1StoneGoldCapBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 0)
          .Upgrade(RebirthUpgradeKind.StoneGoldCap)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T1CrystalGoldCapBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 0)
          .Upgrade(RebirthUpgradeKind.CrystalGoldCap)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T1LeafGoldCapBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 0)
          .Upgrade(RebirthUpgradeKind.LeafGoldCap)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.EQProfGain:
        this.data.stats
          .HeroStats(this.heroKind, Stats.EquipmentProficiencyGain)
          .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Mul, () => this.effectValue));
        break;
      case RebirthUpgradeKind.EQLevelCap:
        this.data.equipment.maxLevels[this.heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        break;
      case RebirthUpgradeKind.EQWeaponSlot:
        this.data.inventory.equipWeaponUnlockedNum[this.heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        break;
      case RebirthUpgradeKind.EQArmorSlot:
        this.data.inventory.equipArmorUnlockedNum[this.heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        break;
      case RebirthUpgradeKind.EQJewelrySlot:
        this.data.inventory.equipJewelryUnlockedNum[this.heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        break;
      case RebirthUpgradeKind.T2ExpGainBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .Upgrade(RebirthUpgradeKind.T1ExpGainBoost)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        break;
      case RebirthUpgradeKind.T2SkillProfGainBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .Upgrade(RebirthUpgradeKind.SkillProfGain)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        break;
      case RebirthUpgradeKind.T2RebirthPointGainBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .rebirthPointGainFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        break;
      case RebirthUpgradeKind.T2BasicAtkBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .Upgrade(RebirthUpgradeKind.T1BasicAtkBoost)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T2BasicMAtkBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .Upgrade(RebirthUpgradeKind.T1BasicMAtkBoost)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T2BasicHpBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .Upgrade(RebirthUpgradeKind.T1BasicHpBoost)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T2BasicDefBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .Upgrade(RebirthUpgradeKind.T1BasicDefBoost)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T2BasicMDefBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .Upgrade(RebirthUpgradeKind.T1BasicMDefBoost)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T2BasicMpBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .Upgrade(RebirthUpgradeKind.T1BasicMpBoost)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T2StoneGainBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .Upgrade(RebirthUpgradeKind.T1StoneGainBoost)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T2CrystalGainBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .Upgrade(RebirthUpgradeKind.T1CrystalGainBoost)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T2LeafGainBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .Upgrade(RebirthUpgradeKind.T1LeafGainBoost)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T2StoneGoldCapBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .Upgrade(RebirthUpgradeKind.T1StoneGoldCapBoost)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T2CrystalGoldCapBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .Upgrade(RebirthUpgradeKind.T1CrystalGoldCapBoost)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
      case RebirthUpgradeKind.T2LeafGoldCapBoost:
        this.rebirthCtrl
          .Rebirth(this.heroKind, 1)
          .Upgrade(RebirthUpgradeKind.T1LeafGoldCapBoost)
          .effectMultiFactor.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => this.effectValue));
        this.isGlobalEffect = true;
        break;
    }
  }
}
