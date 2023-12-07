import { MultiplierInfo, Multiplier } from "../../Multiplier";
import { Enums } from "../../Enums";
import { Debuff } from "../../type/Debuff";
import { ResourceKind } from "../../type/ResourceKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { Element } from "../../type/Element";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { EquipmentKind } from "../../type/EquipmentKind";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { EquipmentForgeEffectKind } from "../../type/EquipmentForgeEffectKind";
import { Stats } from "../../type/Stats";
import { EquipmentParameter } from "./EquipmentParameter";
import { EquipmentOptionEffect, EquipmentOptionEffectData } from "./EquipmentOptionEffect";
import { EquipmentForgeEffect } from "./EquipmentForgeEffect";
import { InventoryParameter } from "../Inventory/InventoryParameter";
import { EquipmentSet } from "./EquipmentSet";

export type EquipmentData = {
  kind: EquipmentKind;
  optionEffects: EquipmentOptionEffectData[];
  forgeEffects: number[];
};

export class Equipment {
  data: EquipmentData;
  isEffectRegistered: boolean[] = Array(Enums.HeroKind);
  isMasteryEffectRegistered;
  isOptionEffectRegistered: boolean[][] = Array(Enums.HeroKind);
  isReachedMax;
  id;
  slotId;
  totalOptionNum: Multiplier;
  //   getGlobalInfo: EquipmentGlobalInformation;
  optionEffects: EquipmentOptionEffect[] = Array(EquipmentParameter.maxOptionEffectNum);
  forgeEffects: EquipmentForgeEffect[] = Array(EquipmentParameter.maxForgeEffectNum);
  requiredLevel;
  requiredGrade;
  requiredLevelWithoutForge;
  requiredGradeWithoutForge;
  requiredAbilityPoint: number[];
  info: MultiplierInfo;
  activateCondition;
  optionNum = 4;
  set: EquipmentSet;

  constructor(data: EquipmentData) {
    this.data = data;

    for (let index = 0; index < this.isOptionEffectRegistered.length; index++) {
      this.isOptionEffectRegistered[index] = Array(Enums.HeroKind).fill(false);
    }

    for (let optionId = 0; optionId < this.optionEffects.length; optionId++)
      this.optionEffects[optionId] = new EquipmentOptionEffect(data.optionEffects[optionId]);
    this.totalOptionNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => this.optionNum));
    this.totalOptionNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Equipment,
        MultiplierType.Add,
        () => this.globalInfo.levelMaxEffects[3].EffectValue(0),
        () => this.globalInfo.levels[3].isMaxed
      )
    );
    this.forgeEffects[0] = new EquipmentForgeEffect(this, data.forgeEffects[0], EquipmentForgeEffectKind.ReduceRequiredHeroLevel);
    this.forgeEffects[1] = new EquipmentForgeEffect(this, data.forgeEffects[1], EquipmentForgeEffectKind.ReduceRequiredAbility);
    this.forgeEffects[2] = new EquipmentForgeEffect(this, data.forgeEffects[2], EquipmentForgeEffectKind.IncreaseProficiencyGain);
    this.forgeEffects[3] = new EquipmentForgeEffect(this, data.forgeEffects[3], EquipmentForgeEffectKind.IncreaseEffect);
    this.forgeEffects[4] = new EquipmentForgeEffect(this, data.forgeEffects[4], EquipmentForgeEffectKind.PurifyCurseEffect);
    this.forgeEffects[5] = new EquipmentForgeEffect(this, data.forgeEffects[5], EquipmentForgeEffectKind.IncreaseEffectIncrement);
    this.forgeEffects[6] = new EquipmentForgeEffect(this, data.forgeEffects[6], EquipmentForgeEffectKind.EqLevel);
  }

  get globalInfo() {
    return globalThis.data.equipment.globalInformations[this.kind];
  }

  get level() {
    return this.globalInfo.TotalLevel();
  }

  get kind() {
    return this.data.kind;
  }

  get setKind() {
    return this.globalInfo.setKind;
  }

  set kind(value) {
    this.data.kind = value;
  }

  Start() {
    // this.CalculateRequiredLevel();
    // this.CalculateRequiredAbilityPoint();
  }

  public IsSkillLevelEnchant(kind: EquipmentEffectKind) {
    return (
      kind == EquipmentEffectKind.WarriorSkillLevel ||
      kind == EquipmentEffectKind.WizardSkillLevel ||
      kind == EquipmentEffectKind.AngelSkillLevel ||
      kind == EquipmentEffectKind.ThiefSkillLevel ||
      kind == EquipmentEffectKind.ArcherSkillLevel ||
      kind == EquipmentEffectKind.TamerSkillLevel ||
      kind == EquipmentEffectKind.AllSkillLevel
    );
  }

  // AdjustOptionEffectValue() {
  //   for (let index = 0; index < this.optionEffects.length; index++) {
  //     if (this.optionEffects[index].effectValue > EquipmentParameter.EffectCalculation(this.optionEffects[index].kind, this.optionEffects[index].level.value + 1))
  //       this.optionEffects[index].effectValue = EquipmentParameter.EffectCalculation(this.optionEffects[index].kind, this.optionEffects[index].level.value + 1);
  //     if (this.optionEffects[index].effectValue < EquipmentParameter.EffectCalculation(this.optionEffects[index].kind, this.optionEffects[index].level.value))
  //       this.optionEffects[index].effectValue = EquipmentParameter.EffectCalculation(this.optionEffects[index].kind, this.optionEffects[index].level.value);
  //   }
  // }

  // DeleteEnchantEffect(kind: EquipmentEffectKind) {
  //   for (let index = 0; index < this.optionEffects.length; index++) {
  //     if (this.optionEffects[index].kind == kind) this.optionEffects[index].Delete();
  //   }
  // }

  Forge(kind: EquipmentForgeEffectKind, value, isArtifactAnvil) {
    if (!this.CanForge(kind, isArtifactAnvil)) return;
    // this.forgeEffects[kind].Forge(value);
    // this.CalculateRequiredLevel();
    // this.CalculateRequiredAbilityPoint();
  }

  CanForge(kind: EquipmentForgeEffectKind, isArtifactAnvil) {
    if ((!isArtifactAnvil && this.globalInfo.isArtifact) || (isArtifactAnvil && !this.globalInfo.isArtifact)) return false;
    return this.forgeEffects[kind].IsForged()
      ? this.ForgeEffectMaxValueLeft(kind, isArtifactAnvil) > 0.0
      : this.AvailableForgeSlotNum() > 0;
  }

  ForgeEffectMaxValueLeft(kind: EquipmentForgeEffectKind, isArtifactAnvil) {
    return this.ForgeEffectMaxValue(kind, isArtifactAnvil) - this.forgeEffects[kind].effectValue;
  }

  ForgeEffectValueLeft(kind: EquipmentForgeEffectKind, value, isArtifactAnvil) {
    return !this.CanForge(kind, isArtifactAnvil) ? 0.0 : Math.max(0.0, value - this.ForgeEffectMaxValueLeft(kind, isArtifactAnvil));
  }

  ForgeEffectMaxValue(kind: EquipmentForgeEffectKind, isArtifactAnvil) {
    let val1 = EquipmentParameter.MaxEffectValue(kind);
    switch (kind) {
      case EquipmentForgeEffectKind.ReduceRequiredHeroLevel:
        val1 = isArtifactAnvil ? this.RequiredLevel(true, true) : this.RequiredLevel(true, false);
        break;
      case EquipmentForgeEffectKind.ReduceRequiredAbility:
        val1 = 0.0;
        for (let index = 1; index < this.globalInfo.requiredAbilities.length; index++) {
          if (isArtifactAnvil) {
            if (this.globalInfo.requiredAbilities[index].isSuperAbility)
              val1 = Math.max(val1, this.globalInfo.requiredAbilities[index].requiredValue);
          } else if (!this.globalInfo.requiredAbilities[index].isSuperAbility)
            val1 = Math.max(val1, this.globalInfo.requiredAbilities[index].requiredValue);
        }
        break;
      case EquipmentForgeEffectKind.IncreaseEffect:
        val1 += globalThis.data.equipment.forgeEffectCapAdderEQEffect.Value();
        break;
      case EquipmentForgeEffectKind.IncreaseEffectIncrement:
        val1 += globalThis.data.equipment.forgeEffectCapAdderEffectIncrement.Value();
        break;
      case EquipmentForgeEffectKind.EqLevel:
        val1 += globalThis.data.equipment.forgeEffectCapAdderEQLevel.Value();
        break;
    }
    return val1;
  }

  ForgedSlotNum() {
    let num = 0;
    for (let index = 0; index < this.forgeEffects.length; index++) {
      if (this.forgeEffects[index].IsForged()) num++;
    }
    return num;
  }

  AvailableForgeSlotNum() {
    return this.globalInfo.ForgeSlotNum() - this.ForgedSlotNum();
  }

  IsEffectRegisteredClear() {
    for (let index = 0; index < this.isEffectRegistered.length; index++) this.isEffectRegistered[index] = false;
    this.isMasteryEffectRegistered = false;
  }

  SetAgainAllEffect() {
    this.IsEffectRegisteredClear();
    // this.SetEffectBase(1);
    // this.SetMasteryEffect();
    for (let index = 0; index < Enums.HeroKind; index++) {
      if (this.IsEquipped(index)) {
        // console.log("SetAgainAllEffect()");

        this.SetEffectBase(index);
        this.SetMasteryEffect();
        // console.log("set again");
        // globalThis.app.router.load();

        break;
      }
    }
  }
  IsEquipped(heroKind: HeroKind) {
    // return true;
    // console.log(this.slotId - InventoryParameter.equipInventorySlotId < InventoryParameter.equipPartSlotId * 3);

    if (this.kind == EquipmentKind.Nothing || this.slotId < InventoryParameter.equipInventorySlotId) return false;
    switch (heroKind) {
      case HeroKind.Warrior:
        return this.slotId - InventoryParameter.equipInventorySlotId < InventoryParameter.equipPartSlotId * 3;
      case HeroKind.Wizard:
        return (
          this.slotId - InventoryParameter.equipInventorySlotId >= InventoryParameter.equipPartSlotId * 3 &&
          this.slotId - InventoryParameter.equipInventorySlotId < 2 * InventoryParameter.equipPartSlotId * 3
        );
      case HeroKind.Angel:
        return (
          this.slotId - InventoryParameter.equipInventorySlotId >= 2 * InventoryParameter.equipPartSlotId * 3 &&
          this.slotId - InventoryParameter.equipInventorySlotId < 3 * InventoryParameter.equipPartSlotId * 3
        );
      case HeroKind.Thief:
        return (
          this.slotId - InventoryParameter.equipInventorySlotId >= 3 * InventoryParameter.equipPartSlotId * 3 &&
          this.slotId - InventoryParameter.equipInventorySlotId < 4 * InventoryParameter.equipPartSlotId * 3
        );
      case HeroKind.Archer:
        return (
          this.slotId - InventoryParameter.equipInventorySlotId >= 4 * InventoryParameter.equipPartSlotId * 3 &&
          this.slotId - InventoryParameter.equipInventorySlotId < 5 * InventoryParameter.equipPartSlotId * 3
        );
      case HeroKind.Tamer:
        return (
          this.slotId - InventoryParameter.equipInventorySlotId >= 5 * InventoryParameter.equipPartSlotId * 3 &&
          this.slotId - InventoryParameter.equipInventorySlotId < 6 * InventoryParameter.equipPartSlotId * 3
        );
      default:
        return false;
    }
  }
  SetMasteryEffect() {
    if (this.kind == EquipmentKind.Nothing || this.isMasteryEffectRegistered) return;
    for (let index1 = 0; index1 < Enums.HeroKind; index1++) {
      for (let index2 = 0; index2 < this.globalInfo.levelMaxEffects.length; index2++) {
        let count = index2;
        this.SetEffect(
          index1,
          this.globalInfo.levelMaxEffects[count].kind,
          () => this.globalInfo.levelMaxEffects[count].EffectValue(0),
          () => this.globalInfo.levels[count].isMaxed
        );
      }
    }
    this.isMasteryEffectRegistered = true;
  }

  SetEffectBase(heroKind: HeroKind) {
    if (this.kind == EquipmentKind.Nothing || this.isEffectRegistered[heroKind]) return;
    for (let index = 0; index < this.globalInfo.effects.length; index++) {
      this.SetEffect(heroKind, this.globalInfo.effects[index].kind, () => this.OriginalEffectValue(index));
    }
    for (let index = 0; index < this.optionEffects.length; index++) {
      this.SetEffect(heroKind, this.optionEffects[index].kind, () => this.optionEffects[index].effectValue);
    }
    this.isEffectRegistered[heroKind] = true;
    // console.log(this.isEffectRegistered[heroKind]);
  }

  OriginalEffectValue(index) {
    return this.globalInfo.effects[index].EffectValue(this.Level(), 1.0 + this.forgeEffects[5].EffectValue());
  }

  OriginalEffectIncrementPerLevel(effectId) {
    return this.globalInfo.effects[effectId].baseValue() * (1.0 + this.forgeEffects[5].EffectValue());
  }

  Level() {
    return this.globalInfo.TotalLevel() + this.forgeEffects[6].EffectValue();
  }

  HasEnchantedEffect() {
    if (this.optionNum > 0) return true;
    if (this.totalOptionNum.Value() < 1.0) return false;
    for (let index = 0; index < this.optionEffects.length; index++) {
      if (this.optionEffects[index].kind != EquipmentEffectKind.Nothing) return true;
    }
    return false;
  }

  RequiredLevel(withoutForge, isGrade) {
    return isGrade
      ? withoutForge
        ? this.requiredGradeWithoutForge
        : this.requiredGrade
      : withoutForge
      ? this.requiredLevelWithoutForge
      : this.requiredLevel;
  }

  // IsEnoughLevel(heroKind: HeroKind, isGrade) {
  //   return isGrade
  //     ? this.RequiredLevel(false, true) <= 0 ||
  //         globalThis.data.superStats.Hero(heroKind).GradeForEquipment() >= this.RequiredLevel(false, true)
  //     : this.RequiredLevel(false, false) <= 0 ||
  //         globalThis.data.stats.LevelForEquipment(heroKind).Value() >= this.RequiredLevel(false, false);
  // }
  get isSetItem() {
    return this.globalInfo.setKind != 0 && this.globalInfo.setKind != undefined;
  }
  EffectMultiplierFromSetItem(heroKind: HeroKind) {
    // BUG

    if (!this.isSetItem || this.isSetItem == undefined) return 1;

    switch (globalThis.data.inventory.SetItemEquippedNum(this.globalInfo.setKind, heroKind)) {
      case 2:
        return 1.05;
      case 3:
        return 1.1;
      case 4:
        return 1.15;
      case 5:
        return 1.2;
      case 6:
        return 1.25;
      case 7:
        return 1.35;
      case 8:
        return 1.5;
      default:
        return 1.0;
    }
  }

  EffectValue(baseEffectValue, heroKind: HeroKind) {
    let num = baseEffectValue * this.EffectMultiplierFromSetItem(heroKind) * (1.0 + this.forgeEffects[3].EffectValue());
    if (!this.globalInfo.isArtifact) num *= globalThis.data.equipment.EffectMultiplier(heroKind);
    else if (globalThis.data.equipment.effectMultiplierModifierForArtifact.Value() > 0.0)
      num *= globalThis.data.equipment.ArtifactEffectMultiplier(heroKind);
    if (num < 0.0) num *= Math.max(0.0, 1 - this.forgeEffects[4].EffectValue());
    return num;
  }

  SetEffect(heroKind: HeroKind, kind: EquipmentEffectKind, effectValue, additionalCondition = null) {
    this.activateCondition = () => additionalCondition == null || additionalCondition();
    switch (kind) {
      case EquipmentEffectKind.HPAdder:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.HP)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MPAdder:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.MP)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.ATKAdder:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.ATK)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MATKAdder:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.MATK)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DEFAdder:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.DEF)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MDEFAdder:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.MDEF)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.SPDAdder:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.SPD)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.HPMultiplier:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.HP)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MPMultiplier:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.MP)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.ATKMultiplier:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.ATK)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MATKMultiplier:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.MATK)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DEFMultiplier:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.DEF)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MDEFMultiplier:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.MDEF)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.ATKPropotion:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.ATK)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => globalThis.data.stats.Level(heroKind) * this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MATKPropotion:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.MATK)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => globalThis.data.stats.Level(heroKind) * this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DEFPropotion:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.DEF)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => globalThis.data.stats.Level(heroKind) * this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MDEFPropotion:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.MDEF)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => globalThis.data.stats.Level(heroKind) * this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.FireResistance:
        globalThis.data.stats
          .ElementResistance(heroKind, Element.Fire)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.IceResistance:
        globalThis.data.stats
          .ElementResistance(heroKind, Element.Ice)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.ThunderResistance:
        globalThis.data.stats
          .ElementResistance(heroKind, Element.Thunder)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.LightResistance:
        globalThis.data.stats
          .ElementResistance(heroKind, Element.Light)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DarkResistance:
        globalThis.data.stats
          .ElementResistance(heroKind, Element.Dark)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.PhysicalAbsorption:
        globalThis.data.stats
          .ElementAbsorption(heroKind, Element.Physical)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.FireAbsorption:
        globalThis.data.stats
          .ElementAbsorption(heroKind, Element.Fire)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.IceAbsorption:
        globalThis.data.stats
          .ElementAbsorption(heroKind, Element.Ice)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.ThunderAbsorption:
        globalThis.data.stats
          .ElementAbsorption(heroKind, Element.Thunder)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.LightAbsorption:
        globalThis.data.stats
          .ElementAbsorption(heroKind, Element.Light)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DarkAbsorption:
        globalThis.data.stats
          .ElementAbsorption(heroKind, Element.Dark)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DebuffResistance:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.DebuffRes)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.EquipmentDropChance:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.EquipmentDropChance)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.SlimeDropChance:
        globalThis.data.monster.speciesMaterialDropChance[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.MagicSlimeDropChance:
        globalThis.data.monster.speciesMaterialDropChance[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.SpiderDropChance:
        globalThis.data.monster.speciesMaterialDropChance[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.BatDropChance:
        globalThis.data.monster.speciesMaterialDropChance[3].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.FairyDropChance:
        globalThis.data.monster.speciesMaterialDropChance[4].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.FoxDropChance:
        globalThis.data.monster.speciesMaterialDropChance[5].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.DevilFishDropChance:
        globalThis.data.monster.speciesMaterialDropChance[6].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.TreantDropChance:
        globalThis.data.monster.speciesMaterialDropChance[7].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.FlameTigerDropChance:
        globalThis.data.monster.speciesMaterialDropChance[8].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.UnicornDropChance:
        globalThis.data.monster.speciesMaterialDropChance[9].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.ColorMaterialDropChance:
        globalThis.data.monster.colorMaterialDropChance.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.PhysicalCritical:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.PhysCritChance)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MagicalCritical:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.MagCritChance)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.EXPGain:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.ExpGain)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.SkillProficiency:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.SkillProficiencyGain)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.EquipmentProficiency:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.EquipmentProficiencyGain)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MoveSpeedMultiplier:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.MoveSpeed)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.GoldGain:
        globalThis.data.stats
          .GoldGain()
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.StoneGain:
        globalThis.data.stats
          .ResourceGain(ResourceKind.Stone)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.CrystalGain:
        globalThis.data.stats
          .ResourceGain(ResourceKind.Crystal)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.LeafGain:
        globalThis.data.stats
          .ResourceGain(ResourceKind.Leaf)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.WarriorSkillLevel:
        globalThis.data.skill.skillLevelBonus[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.WizardSkillLevel:
        globalThis.data.skill.skillLevelBonus[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.AngelSkillLevel:
        globalThis.data.skill.skillLevelBonus[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.ThiefSkillLevel:
        globalThis.data.skill.skillLevelBonus[3].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.ArcherSkillLevel:
        globalThis.data.skill.skillLevelBonus[4].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.TamerSkillLevel:
        globalThis.data.skill.skillLevelBonus[5].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.AllSkillLevel:
        globalThis.data.skill.skillLevelBonus[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        globalThis.data.skill.skillLevelBonus[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        globalThis.data.skill.skillLevelBonus[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        globalThis.data.skill.skillLevelBonus[3].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        globalThis.data.skill.skillLevelBonus[4].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        globalThis.data.skill.skillLevelBonus[5].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.SlimeKnowledge:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.Slime)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MagicSlimeKnowledge:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.MagicSlime)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.SpiderKnowledge:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.Spider)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.BatKnowledge:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.Bat)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.FairyKnowledge:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.Fairy)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.FoxKnowledge:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.Fox)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DevilFishKnowledge:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.DevilFish)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.TreantKnowledge:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.Treant)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.FlameTigerKnowledge:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.FlameTiger)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.UnicornKnowledge:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.Unicorn)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.PhysicalDamage:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Physical)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.FireDamage:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Fire)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.IceDamage:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Ice)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.ThunderDamage:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Thunder)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.LightDamage:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Light)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DarkDamage:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Dark)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.HpRegen:
        globalThis.data.stats
          .HpRegenerate(heroKind)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MpRegen:
        globalThis.data.stats
          .MpRegenerate(heroKind)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.TamingPoint:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.TamingPointGain)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.WarriorSkillRange:
        globalThis.data.skill.skillRangeMultiplier[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.WizardSkillRange:
        globalThis.data.skill.skillRangeMultiplier[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.AngelSkillRange:
        globalThis.data.skill.skillRangeMultiplier[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.ThiefSkillRange:
        globalThis.data.skill.skillRangeMultiplier[3].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.ArcherSkillRange:
        globalThis.data.skill.skillRangeMultiplier[4].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.TamerSkillRange:
        globalThis.data.skill.skillRangeMultiplier[5].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.TownMatGain:
        globalThis.data.town.townMaterialGainMultiplier[heroKind].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.TownMatAreaClearGain:
        globalThis.data.area.townMaterialGainBonusClass[heroKind].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.RebirthPointGain1:
        globalThis.data.rebirth
          .Rebirth(heroKind, 0)
          .rebirthPointGainFactor.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.RebirthPointGain2:
        globalThis.data.rebirth
          .Rebirth(heroKind, 1)
          .rebirthPointGainFactor.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.RebirthPointGain3:
        globalThis.data.rebirth
          .Rebirth(heroKind, 2)
          .rebirthPointGainFactor.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.CriticalDamage:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.CriticalDamage)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.BlessingEffect:
        globalThis.data.blessingInfo.effectMultipliers[heroKind].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.MoveSpeedAdder:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.MoveSpeed)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.PetEXPGain:
        globalThis.data.stats
          .Hero(heroKind)
          .petExpGainPerDefeat.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.LoyaltyPointGain:
        globalThis.data.stats
          .Hero(heroKind)
          .loyaltyPoingGain.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.CatalystDoubleCriticalChance:
        globalThis.data.alchemy.catalyst.catalystDoubleCriticalChance.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.WarriorSkillEffectRange:
        globalThis.data.skill.skillEffectRangeMultiplier[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.WizardSkillEffectRange:
        globalThis.data.skill.skillEffectRangeMultiplier[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.AngelSkillEffectRange:
        globalThis.data.skill.skillEffectRangeMultiplier[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.ThiefSkillEffectRange:
        globalThis.data.skill.skillEffectRangeMultiplier[3].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.ArcherSkillEffectRange:
        globalThis.data.skill.skillEffectRangeMultiplier[4].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.TamerSkillEffectRange:
        globalThis.data.skill.skillEffectRangeMultiplier[5].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.HpRegenMultiplier:
        globalThis.data.stats
          .HpRegenerate(heroKind)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue() * globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.HP).Value(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MpRegenMultiplier:
        globalThis.data.stats
          .MpRegenerate(heroKind)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue() * globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.MP).Value(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.ArmoredFury:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.ArmoredFury)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.WardedFury:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.WardedFury)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.PetPhysicalCriticalChance:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.PetPhysCritChance)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.PetMagicalCriticalChance:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.PetMagCritChance)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.PetCriticalDamage:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.PetCriticalDamage)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.PetDebuffResistance:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.PetDebuffResistance)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Add,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.StoneTownResearchPower:
        globalThis.data.town.researchPower[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.CrystalTownResearchPower:
        globalThis.data.town.researchPower[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.LeafTownResearchPower:
        globalThis.data.town.researchPower[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.GuildEXPGain:
        globalThis.data.stats.heroes[heroKind].guildExpGain.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.SPDMultiplier:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.SPD)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.CriticalDamageMultiplier:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.CriticalDamage)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.SkillProficiencyMultiplier:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.SkillProficiencyGain)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.EquipmentProficiencyMultiplier:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.EquipmentProficiencyGain)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.EXPGainMultiplier:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.ExpGain)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.GoldGainMultiplier:
        globalThis.data.stats
          .GoldGain()
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.PhysicalDamageMultiplier:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Physical)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.FireDamageMultiplier:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Fire)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.IceDamageMultiplier:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Ice)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.ThunderDamageMultiplier:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Thunder)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.LightDamageMultiplier:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Light)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DarkDamageMultiplier:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Dark)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.TamingPointMultiplier:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.TamingPointGain)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.PetEXPGainMultiplier:
        globalThis.data.stats
          .Hero(heroKind)
          .petExpGainPerDefeat.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.LoyaltyPointGainMultiplier:
        globalThis.data.stats
          .Hero(heroKind)
          .loyaltyPoingGain.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.BlessingEffectMultiplier:
        globalThis.data.blessingInfo.effectMultipliers[heroKind].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.PhysicalCriticalMultiplier:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.PhysCritChance)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MagicalCriticalMultiplier:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.MagCritChance)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.ChallengeBossKnowledge:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.ChallengeBoss)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.HPAfter:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.HP)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MPAfter:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.MP)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.ATKAfter:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.ATK)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MATKAfter:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.MATK)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DEFAfter:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.DEF)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MDEFAfter:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.MDEF)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.SPDAfter:
        globalThis.data.stats
          .BasicStats(heroKind, BasicStatsKind.SPD)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MoveSpeedAfter:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.MoveSpeed)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.PhysicalCriticalAfter:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.PhysCritChance)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MagicalCriticalAfter:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.MagCritChance)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.CriticalDamageAfter:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.CriticalDamage)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DebuffResistanceAfter:
        globalThis.data.stats
          .HeroStats(heroKind, Stats.DebuffRes)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.PhysicalDamageAfter:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Physical)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.FireDamageAfter:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Fire)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.IceDamageAfter:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Ice)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.ThunderDamageAfter:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Thunder)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.LightDamageAfter:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Light)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DarkDamageAfter:
        globalThis.data.stats
          .ElementDamage(heroKind, Element.Dark)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.FireResistanceAfter:
        globalThis.data.stats
          .ElementResistance(heroKind, Element.Fire)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.IceResistanceAfter:
        globalThis.data.stats
          .ElementResistance(heroKind, Element.Ice)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.ThunderResistanceAfter:
        globalThis.data.stats
          .ElementResistance(heroKind, Element.Thunder)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.LightResistanceAfter:
        globalThis.data.stats
          .ElementResistance(heroKind, Element.Light)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DarkResistanceAfter:
        globalThis.data.stats
          .ElementResistance(heroKind, Element.Dark)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.SlimeKnowledgeAfter:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.Slime)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.MagicSlimeKnowledgeAfter:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.MagicSlime)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.SpiderKnowledgeAfter:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.Spider)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.BatKnowledgeAfter:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.Bat)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.FairyKnowledgeAfter:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.Fairy)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.FoxKnowledgeAfter:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.Fox)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DevilFishKnowledgeAfter:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.DevilFish)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.TreantKnowledgeAfter:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.Treant)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.FlameTigerKnowledgeAfter:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.FlameTiger)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.UnicornKnowledgeAfter:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.Unicorn)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.ChallengeBossKnowledgeAfter:
        globalThis.data.stats
          .MonsterDamage(heroKind, MonsterSpecies.ChallengeBoss)
          .RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.After,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.SDDamageMultiplier:
        globalThis.data.battles[heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.SDDamageCutMultiplier:
        globalThis.data.battles[heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.FameGain:
        globalThis.data.superStats
          .Hero(heroKind)
          .fameGain.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
      case EquipmentEffectKind.DungeonCoinGain:
        globalThis.data.sdg.dungeonCoinGain.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
        break;
      case EquipmentEffectKind.ExtraAfterDamage:
        globalThis.data.stats
          .Hero(heroKind)
          .extraAfterDamage.RegisterMultiplier(
            new MultiplierInfo(
              MultiplierKind.Equipment,
              MultiplierType.Mul,
              () => this.EffectValue(effectValue(), heroKind),
              this.activateCondition
            )
          );
        break;
    }
  }
}
