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
import { SetEffect } from "./SetEffect";

export type EquipmentData = {
  kind: EquipmentKind;
  optionEffects: EquipmentOptionEffectData[];
  forgeEffects: number[];
};

export class Equipment {
  data: EquipmentData;
  isEffectRegistered: Function[] = [];
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
    this.SetAgainAllEffect();
  }

  get heroKind() {
    if (this.slotId >= 4840 && this.slotId < 4912) {
      return HeroKind.Warrior;
    } else if (this.slotId >= 4912 && this.slotId < 4984) {
      return HeroKind.Wizard;
    } else if (this.slotId >= 4984 && this.slotId < 5056) {
      return HeroKind.Angel;
    } else if (this.slotId >= 4984 && this.slotId < 5056) {
      return HeroKind.Thief;
    } else if (this.slotId >= 5056 && this.slotId < 5128) {
      return HeroKind.Archer;
    } else if (this.slotId >= 5128 && this.slotId < 5200) {
      return HeroKind.Tamer;
    }
  }

  Start() {
    this.CalculateRequiredLevel();
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
    // TODO
    // console.log(this.isEffectRegistered);

    this.isEffectRegistered.forEach((effect) => {
      effect();
    });
    this.isEffectRegistered = [];
    // clearing alredy set enchatments
    // for (let index = 0; index < this.isEffectRegistered.length; index++) this.isEffectRegistered[index] = false;
    // this.isMasteryEffectRegistered = false;
  }

  SetAgainAllEffect() {
    this.IsEffectRegisteredClear();
    // this.SetEffectBase(1);
    // this.SetMasteryEffect();
    for (let index = 0; index < Enums.HeroKind; index++) {
      if (this.IsEquipped(index)) {
        // console.log("SetAgainAllEffect()");
        // console.log("s", index, this.IsEquipped(index), this.slotId);

        this.SetEffectBase(index);
        this.SetMasteryEffect(index);
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
  SetMasteryEffect(heroKind: HeroKind) {
    if (this.kind == EquipmentKind.Nothing) return;

    for (let index = 0; index < this.globalInfo.levelMaxEffects.length; index++) {
      if (this.globalInfo.levelMaxEffects[index].kind == 0) continue;
      this.isEffectRegistered.push(
        this.SetEffect(
          heroKind,
          this.globalInfo.levelMaxEffects[index].kind,
          () => this.globalInfo.levelMaxEffects[index].EffectValue(0),
          () => this.globalInfo.levels[index].isMaxed
        )
      );
    }
  }

  SetEffectBase(heroKind: HeroKind) {
    if (this.kind == EquipmentKind.Nothing) return;
    for (let index = 0; index < this.globalInfo.effects.length; index++) {
      // this.SetEffect(heroKind, this.globalInfo.effects[index].kind, () => this.OriginalEffectValue(index));
      this.isEffectRegistered.push(this.SetEffect(heroKind, this.globalInfo.effects[index].kind, () => this.OriginalEffectValue(index)));
    }
    for (let index = 0; index < this.optionEffects.length; index++) {
      if (this.optionEffects[index].kind != 0)
        this.isEffectRegistered.push(this.SetEffect(heroKind, this.optionEffects[index].kind, () => this.optionEffects[index].effectValue));

      //
      // this.SetEffect(heroKind, this.optionEffects[index].kind, () => this.optionEffects[index].effectValue);
    }
    // this.isEffectRegistered[heroKind] = true;
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

  SetEffect = SetEffect;

  CalculateRequiredLevel() {
    let val2_1 = 0;
    if (this.globalInfo.isArtifact) val2_1 = this.globalInfo.requiredAbilities[0].requiredValue;
    for (let index = 0; index < this.optionEffects.length; index++) {
      if (this.optionEffects[index].isAfter) val2_1 += this.optionEffects[index].RequiredLevelIncrement();
    }
    this.requiredGradeWithoutForge = Math.max(0, val2_1);
    if (this.globalInfo.isArtifact) val2_1 -= this.forgeEffects[0].EffectValue();
    this.requiredGrade = Math.max(0, val2_1);
    let val2_2 = 0;
    if (!this.globalInfo.isArtifact) val2_2 = this.globalInfo.requiredAbilities[0].requiredValue;
    for (let index = 0; index < this.optionEffects.length; index++) {
      if (!this.optionEffects[index].isAfter) val2_2 += this.optionEffects[index].RequiredLevelIncrement();
    }
    this.requiredLevelWithoutForge = Math.max(0, val2_2);
    if (!this.globalInfo.isArtifact) val2_2 -= this.forgeEffects[0].EffectValue();
    this.requiredLevel = Math.max(0, val2_2);
  }
}
