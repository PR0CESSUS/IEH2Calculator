import { DATA } from "..";
import { Enums } from "../../Enums";
import { Multiplier, MultiplierInfo } from "../Multiplier";
import { CopyKind } from "../../type/CopyKind";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { EquipmentForgeEffectKind } from "../../type/EquipmentForgeEffectKind";
import { EquipmentKind } from "../../type/EquipmentKind";
import { HeroKind } from "../../type/HeroKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { EquipmentPart } from "./../../type/EquipmentPart";
import { EquipmentForgeEffect } from "./EquipmentForgeEffect";
import { EquipmentOptionEffect } from "./EquipmentOptionEffect";
import { EquipmentParameter } from "./EquipmentParameter";
import { SetEffect } from "./SetEffect";
import { EnchantmentOptimizer } from "./EnchantmentOptimizer";
import { EquipmentGlobalInformation } from "./EquipmentGlobalInformation";

export class Equipment {
  data: DATA;
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
  requiredAbilityPoint: number[] = [];
  info: MultiplierInfo;
  activateCondition;
  optionNum = 4;

  // kind: EquipmentKind;
  // set: EquipmentSet;

  constructor(DATA: DATA, id) {
    this.data = DATA;
    this.id = this.data.source.equipmentId[id];
    this.slotId = id;
    // this.slotId = this.data.source.equipmentId[id];
    // this.kind = this.data.source.equipmentKinds[id];

    // for (let index = 0; index < this.isOptionEffectRegistered.length; index++) {
    //   this.isOptionEffectRegistered[index] = Array(Enums.HeroKind).fill(false);
    // }

    for (let optionId = 0; optionId < this.optionEffects.length; optionId++) this.optionEffects[optionId] = new EquipmentOptionEffect(this, this.id, optionId);
    this.totalOptionNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => this.optionNum));
    this.totalOptionNum.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Equipment,
        MultiplierType.Add,
        () => this.globalInfo.levelMaxEffects[3].EffectValue(0),
        () => this.globalInfo.levels[3].isMaxed
      )
    );
    this.forgeEffects[0] = new EquipmentForgeEffect(this, EquipmentForgeEffectKind.ReduceRequiredHeroLevel);
    this.forgeEffects[1] = new EquipmentForgeEffect(this, EquipmentForgeEffectKind.ReduceRequiredAbility);
    this.forgeEffects[2] = new EquipmentForgeEffect(this, EquipmentForgeEffectKind.IncreaseProficiencyGain);
    this.forgeEffects[3] = new EquipmentForgeEffect(this, EquipmentForgeEffectKind.IncreaseEffect);
    this.forgeEffects[4] = new EquipmentForgeEffect(this, EquipmentForgeEffectKind.PurifyCurseEffect);
    this.forgeEffects[5] = new EquipmentForgeEffect(this, EquipmentForgeEffectKind.IncreaseEffectIncrement);
    this.forgeEffects[6] = new EquipmentForgeEffect(this, EquipmentForgeEffectKind.EqLevel);
  }

  get globalInfo(): EquipmentGlobalInformation {
    return this.data.equipment.globalInformations[this.kind];
  }

  get level() {
    return this.globalInfo.TotalLevel();
  }

  get kind() {
    return this.data.source.equipmentKinds[this.id];
  }

  get setKind() {
    return this.globalInfo.setKind;
  }

  set kind(value) {
    // console.log("current kind", EquipmentKind[this.kind], ">", EquipmentKind[value]);
    // console.log("current part", EquipmentPart[this.globalInfo.part], ">", EquipmentPart[EquipmentParameter.Part(value)], EquipmentPart[this.slotPart]);
    // this.data.source.equipmentKinds[this.id] = value;
    if (EquipmentParameter.Part(value) == this.slotPart || value == EquipmentKind.Nothing) this.data.source.equipmentKinds[this.id] = value;
    this.data.inventory.UpdateSetItemEquippedNumHero(this.heroKind);
    // this.data.inventory.UpdateSetItemEquippedNum(this.setKind, this.heroKind);
    this.Start();
  }

  get heroKind() {
    const slotId = this.slotId;
    if (slotId >= 520 && slotId < 1240) {
      return HeroKind.Warrior;
    } else if (slotId >= 1240 && slotId < 1960) {
      return HeroKind.Wizard;
    } else if (slotId >= 1960 && slotId < 2680) {
      return HeroKind.Angel;
    } else if (slotId >= 2680 && slotId < 3400) {
      return HeroKind.Thief;
    } else if (slotId >= 3400 && slotId < 4120) {
      return HeroKind.Archer;
    } else if (slotId >= 4120 && slotId < 4840) {
      return HeroKind.Tamer;
    }
  }

  get loadout() {
    return Math.floor((this.slotId - (520 + this.heroKind * 720)) / 72);
  }

  get loadoutSlot() {
    return this.slotId - (520 + this.heroKind * 720 + this.loadout * 72);
  }

  get slotPart() {
    if (this.loadoutSlot < 24) return EquipmentPart.Weapon;
    if (this.loadoutSlot >= 24 && this.loadoutSlot < 48) return EquipmentPart.Armor;
    return EquipmentPart.Jewelry;
  }

  Start() {
    this.CalculateRequiredLevel();
    this.CalculateRequiredAbilityPoints();

    this.SetAgainAllEffect();

    // if (this.heroKind == HeroKind.Angel && (this.slotId == 2021 || this.slotId == 2022)) {
    //   console.log("gear", this.slotId, this.loadoutSlot, this.IsEquipped(), this.isDisabled(), this.isEffectRegistered);
    // }
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
    return this.forgeEffects[kind].IsForged() ? this.ForgeEffectMaxValueLeft(kind, isArtifactAnvil) > 0.0 : this.AvailableForgeSlotNum() > 0;
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
            if (this.globalInfo.requiredAbilities[index].isSuperAbility) val1 = Math.max(val1, this.globalInfo.requiredAbilities[index].requiredValue);
          } else if (!this.globalInfo.requiredAbilities[index].isSuperAbility) val1 = Math.max(val1, this.globalInfo.requiredAbilities[index].requiredValue);
        }
        break;
      case EquipmentForgeEffectKind.IncreaseEffect:
        val1 += this.data.equipment.forgeEffectCapAdderEQEffect.Value();
        break;
      case EquipmentForgeEffectKind.IncreaseEffectIncrement:
        val1 += this.data.equipment.forgeEffectCapAdderEffectIncrement.Value();
        break;
      case EquipmentForgeEffectKind.EqLevel:
        val1 += this.data.equipment.forgeEffectCapAdderEQLevel.Value();
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
    this.isEffectRegistered.forEach((effect) => {
      effect();
    });
    this.isEffectRegistered = [];
  }

  SetAgainAllEffect() {
    this.IsEffectRegisteredClear();
    // this.SetEffectBase(1);

    // console.log(index, this.IsEquipped(index), this.slotId);
    // this.SetMasteryEffect();
    if (this.IsEquipped()) {
      this.SetEffectBase(this.heroKind);
      this.SetMasteryEffect(this.heroKind);
    }

    // for (let index = 0; index < Enums.HeroKind; index++) {
    //   if (this.IsEquipped()) {
    //     this.SetEffectBase(index);
    //     this.SetMasteryEffect(index);
    //     // console.log("SetAgainAllEffect() inside", this.isEffectRegistered);
    //     // console.log("set again");
    //     // globalThis.app.router.load();

    //     break;
    //   }
    // }
  }
  IsEquipped() {
    if (this.slotId < 520 || this.slotId >= 4840) return false;
    if (this.loadout != this.data.source.equipmentLoadoutIds[this.heroKind] || !this.data.source.isActiveBattle[this.heroKind] || this.kind == 0) return false;

    // if (this.slotId == 717) {
    //   console.log("IsEquipped after first filter");
    //   console.log(this.data.source.isActiveBattle[this.heroKind]);
    // }
    // if (this.slotId == 2021 || this.slotId == 2022) {
    //   console.log("IsEquipped", HeroKind[this.heroKind], this.slotId, this.loadoutSlot - 48, this.data.inventory.equipJewelryUnlockedNum[this.heroKind].Value());
    // }
    if (this.loadoutSlot < 24) {
      return this.data.inventory.equipWeaponUnlockedNum[this.heroKind].Value() > this.loadoutSlot;
    } else if (this.loadoutSlot >= 24 && this.loadoutSlot < 48) {
      return this.data.inventory.equipArmorUnlockedNum[this.heroKind].Value() > this.loadoutSlot - 24;
    } else if (this.loadoutSlot >= 48) {
      return this.data.inventory.equipJewelryUnlockedNum[this.heroKind].Value() > this.loadoutSlot - 48;
    }
  }

  isDisabled() {
    if (this.slotId < 520 || this.slotId >= 4840) return true;
    if (this.data.source.isSuperDungeon && this.heroKind == this.data.source.currentHero) {
      switch (this.slotPart) {
        case EquipmentPart.Weapon:
          return this.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.Value() <= this.loadoutSlot;
        case EquipmentPart.Armor:
          return this.data.battles[this.heroKind].superDungeonCtrl.eqArmorSlotNum.Value() <= this.loadoutSlot - 24;
        case EquipmentPart.Jewelry:
          return this.data.battles[this.heroKind].superDungeonCtrl.eqJewelrySlotNum.Value() <= this.loadoutSlot - 48;
        default:
          return true;
      }
    } else {
      switch (this.slotPart) {
        case EquipmentPart.Weapon:
          return this.data.inventory.equipWeaponUnlockedNum[this.heroKind].Value() <= this.loadoutSlot;
        case EquipmentPart.Armor:
          return this.data.inventory.equipArmorUnlockedNum[this.heroKind].Value() <= this.loadoutSlot - 24;
        case EquipmentPart.Jewelry:
          return this.data.inventory.equipJewelryUnlockedNum[this.heroKind].Value() <= this.loadoutSlot - 48;
        default:
          return true;
      }
    }
  }

  SetMasteryEffect(heroKind: HeroKind) {
    if (this.kind == EquipmentKind.Nothing) return;

    for (let index = 0; index < this.globalInfo.levelMaxEffects.length; index++) {
      if (this.globalInfo.levelMaxEffects[index].kind == 0) continue;
      const register = this.SetEffect(
        this.data,
        heroKind,
        this.globalInfo.levelMaxEffects[index].kind,
        () => this.globalInfo.levelMaxEffects[index].EffectValue(0),
        () => this.globalInfo.levels[index].isMaxed
      );

      Array.isArray(register) ? this.isEffectRegistered.push(...register) : this.isEffectRegistered.push(register);
    }
  }

  SetEffectBase(heroKind: HeroKind) {
    if (this.kind == EquipmentKind.Nothing) return;
    for (let index = 0; index < this.globalInfo.effects.length; index++) {
      // this.SetEffect(heroKind, this.globalInfo.effects[index].kind, () => this.OriginalEffectValue(index));
      const register = this.SetEffect(
        this.data,
        heroKind,
        this.globalInfo.effects[index].kind,
        () => this.OriginalEffectValue(index),
        () => !this.isDisabled()
      );
      Array.isArray(register) ? this.isEffectRegistered.push(...register) : this.isEffectRegistered.push(register);
    }
    for (let index = 0; index < this.optionEffects.length; index++) {
      // console.log(this.optionEffects[index].kind == 58, "all skil");

      if (this.optionEffects[index].kind != 0) {
        const register = this.SetEffect(
          this.data,
          heroKind,
          this.optionEffects[index].kind,
          () => this.optionEffects[index].effectValue,
          () => !this.isDisabled()
        );
        // if (Array.isArray(register)) console.log("all skill", register);
        Array.isArray(register) ? this.isEffectRegistered.push(...register) : this.isEffectRegistered.push(register);
      }

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
    return isGrade ? (withoutForge ? this.requiredGradeWithoutForge : this.requiredGrade) : withoutForge ? this.requiredLevelWithoutForge : this.requiredLevel;
  }

  // IsEnoughLevel(heroKind: HeroKind, isGrade) {
  //   return isGrade
  //     ? this.RequiredLevel(false, true) <= 0 ||
  //         this.data.superStats.Hero(heroKind).GradeForEquipment() >= this.RequiredLevel(false, true)
  //     : this.RequiredLevel(false, false) <= 0 ||
  //         this.data.stats.LevelForEquipment(heroKind).Value() >= this.RequiredLevel(false, false);
  // }
  get isSetItem() {
    return this.globalInfo.setKind != 0 && this.globalInfo.setKind != undefined;
  }
  EffectMultiplierFromSetItem(heroKind: HeroKind) {
    if (!this.isSetItem || this.isSetItem == undefined) return 1;

    switch (this.data.inventory.SetItemEquippedNum(this.globalInfo.setKind, heroKind)) {
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
    let num = baseEffectValue * this.EffectMultiplierFromSetItem(heroKind) * (1.0 + this.forgeEffects[3].EffectValue()) * this.EQAbusePercent(heroKind);
    if (!this.globalInfo.isArtifact) num *= this.data.equipment.EffectMultiplier();
    else if (this.data.equipment.effectMultiplierModifierForArtifact.Value() > 0.0) num *= this.data.equipment.ArtifactEffectMultiplier();
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
    //
    let val2_2 = 0;

    if (!this.globalInfo.isArtifact) val2_2 = this.globalInfo.requiredAbilities[0].requiredValue;
    // console.log("base", this.globalInfo.requiredAbilities[0].requiredValue);
    for (let index = 0; index < this.optionEffects.length; index++) {
      if (!this.optionEffects[index].isAfter) val2_2 += this.optionEffects[index].RequiredLevelIncrement();
      // console.log("optionEffects", index, this.optionEffects[index].RequiredLevelIncrement(), this.optionEffects[index].isAfter, this.optionEffects[index].kind);
    }
    // console.log(val2_2);
    this.requiredLevelWithoutForge = Math.max(0, val2_2);
    if (!this.globalInfo.isArtifact) val2_2 -= this.forgeEffects[0].EffectValue();
    this.requiredLevel = Math.max(0, val2_2);
  }

  Copy(type: CopyKind) {
    switch (type) {
      case CopyKind.OptionEffect:
        return this.optionEffects.map((effect) => effect.Copy());
      case CopyKind.ForgeEffects:
        return this.forgeEffects.map((forge) => forge.Copy());
      case CopyKind.Equipment:
        // for (let index = 0; index < this.forgeEffects.length; index++) data.push(this.forgeEffects[index].Copy());
        // console.log("Equipment Copy");

        return {
          kind: this.kind,
          optionEffects: this.optionEffects.map((effect) => effect.Copy()),
          forgeEffects: this.forgeEffects.map((forge) => forge.Copy()),
        };
      default:
        return null;
    }
  }

  Paste(type: CopyKind, data) {
    switch (type) {
      case CopyKind.Equipment:
        // for (let index = 0; index < this.optionEffects.length; index++) this.optionEffects[index].Paste(data[index]);
        // this.ClearForgeEffects();
        this.optionEffects.map((effect, index) => effect.Paste(data.optionEffects[index]));
        this.kind = data.kind;
        this.forgeEffects.map((forge, index) => forge.Paste(data.forgeEffects[index]));
        this.data.inventory.UpdateSetItemEquippedNumHero(this.heroKind);
        break;
      case CopyKind.OptionEffect:
        this.optionEffects.map((effect, index) => effect.Paste(data[index]));
        break;
      case CopyKind.ForgeEffects:
        this.forgeEffects.map((forge, index) => forge.Paste(data[index]));
        break;
      default:
        break;
    }

    // this.Start();
  }

  SlotString() {
    if (this.slotId < 520) return `Inventory tab ${Math.floor(this.slotId / 52) + 1} position ${this.slotId}`;
    const slot = this.slotPart == EquipmentPart.Weapon ? this.loadoutSlot : this.slotPart == EquipmentPart.Armor ? this.loadoutSlot - 24 : this.loadoutSlot - 48;
    return `${HeroKind[this.heroKind]} Loadout ${this.loadout + 1} - ${EquipmentPart[this.slotPart]} position ${slot + 1}`;
  }

  FindMaxEnchantDPS(optionId: number) {
    EnchantmentOptimizer(this.data.battle.Enemy(), this, optionId);
  }

  RequiredAbilityPoint(id) {
    if (this.requiredAbilityPoint == null || this.requiredAbilityPoint.length < this.globalInfo.requiredAbilities.length) {
      this.requiredAbilityPoint = Array(this.globalInfo.requiredAbilities.length);
      this.CalculateRequiredAbilityPoint(id);
    }
    return this.requiredAbilityPoint[id];
  }

  CalculateRequiredAbilityPoints() {
    for (let id = 1; id < this.globalInfo.requiredAbilities.length; id++) this.CalculateRequiredAbilityPoint(id);
  }
  CalculateRequiredAbilityPoint(id) {
    let requiredValue = this.globalInfo.requiredAbilities[id].requiredValue;
    if (requiredValue > 0) {
      if (this.globalInfo.isArtifact) {
        if (this.globalInfo.requiredAbilities[id].isSuperAbility) requiredValue -= this.forgeEffects[1].EffectValue();
      } else if (!this.globalInfo.requiredAbilities[id].isSuperAbility) requiredValue -= this.forgeEffects[1].EffectValue();
    }
    if (this.requiredAbilityPoint == null || this.requiredAbilityPoint.length < this.globalInfo.requiredAbilities.length)
      this.requiredAbilityPoint = Array(this.globalInfo.requiredAbilities.length);
    this.requiredAbilityPoint[id] = Math.max(0, requiredValue);
  }

  IsExistedRequiredLevel() {
    if (!this.globalInfo.isArtifact) return true;
    for (let index = 0; index < this.optionEffects.length; index++) {
      if (!this.optionEffects[index].isAfter && this.optionEffects[index].RequiredLevelIncrement() > 0) return true;
    }
    return false;
  }

  IsExistedRequiredGrade() {
    if (this.globalInfo.isArtifact) return true;
    for (let index = 0; index < this.optionEffects.length; index++) {
      if (this.optionEffects[index].isAfter) return true;
    }
    return false;
  }
  EQAbusePercent(heroKind: HeroKind) {
    let val2 = 1.0;

    let num1 = 0.0;
    let num2 = 0.0;
    let num3 = 1.0;
    for (let index = 1; index < this.globalInfo.requiredAbilities.length; index++) {
      num1++;

      if (this.RequiredAbilityPoint(index) < 1) num2++;
      else if (this.globalInfo.requiredAbilities[index].isSuperAbility)
        num2 += Math.min(
          1.0,
          this.data.superStats.Hero(heroKind).SuperAbility(this.globalInfo.requiredAbilities[index].kind).Point() / Math.max(1, this.RequiredAbilityPoint(index))
        );
      else num2 += Math.min(1.0, this.data.stats.Ability(heroKind, this.globalInfo.requiredAbilities[index].kind).Point() / Math.max(1, this.RequiredAbilityPoint(index)));
    }
    let num5 = num1 >= 1.0 ? num3 * (num2 / num1) : 1.0;
    let num6 = 1.0;
    if (this.IsExistedRequiredLevel()) {
      if (this.RequiredLevel(false, false) < 1) num5++;
      else num5 += Math.min(1.0, this.data.stats.LevelForEquipment(heroKind).Value() / this.RequiredLevel(false, false));
      num6++;
    }
    if (this.IsExistedRequiredGrade()) {
      if (this.RequiredLevel(false, true) < 1) num5++;
      else num5 += Math.min(1.0, this.data.superStats.Hero(heroKind).GradeForEquipment() / this.RequiredLevel(false, true));
      num6++;
    }
    val2 = num5 / num6;

    // console.log("num1:", num1), console.log("num2:", num2), console.log("num3:", num3), console.log("num5:", num5), console.log("num6:", num6);

    return Math.min(1.0, Math.max(0.1, val2));
  }
}
