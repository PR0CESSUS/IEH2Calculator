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
import { EquipmentOptionEffect } from "./EquipmentOptionEffect";
import { EquipmentForgeEffect } from "./EquipmentForgeEffect";
import { InventoryParameter } from "../Inventory/InventoryParameter";
import { SetEffect } from "./SetEffect";

export class Equipment {
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

  // kind: EquipmentKind;
  // set: EquipmentSet;

  constructor(id) {
    this.id = globalThis.data.source.equipmentId[id];
    this.slotId = id;
    // this.slotId = globalThis.data.source.equipmentId[id];
    // this.kind = globalThis.data.source.equipmentKinds[id];

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

  get globalInfo() {
    return globalThis.data.equipment.globalInformations[this.kind];
  }

  get level() {
    return this.globalInfo.TotalLevel();
  }

  get kind() {
    return globalThis.data.source.equipmentKinds[this.id];
  }

  get setKind() {
    return this.globalInfo.setKind;
  }

  set kind(value) {
    globalThis.data.source.equipmentKinds[this.id] = value;
    // this.SetAgainAllEffect();
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

  Start() {
    this.CalculateRequiredLevel();

    if (this.loadout == globalThis.data.source.equipmentLoadoutIds[globalThis.data.source.currentHero] && this.heroKind == globalThis.data.source.currentHero) {
      // console.log("SetAgainAllEffect", this.slotId, this.IsEquipped());
      this.SetAgainAllEffect();
    }

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
    if (this.loadout != globalThis.data.source.equipmentLoadoutIds[this.heroKind] || !globalThis.data.source.isActiveBattle[this.heroKind] || this.kind == 0) return false;

    if (this.loadoutSlot < 24) {
      if (globalThis.data.custom.isSuperDungeon == false) {
        return globalThis.data.inventory.equipWeaponUnlockedNum[this.heroKind].Value() > this.loadoutSlot;
      } else {
        // if (this.heroKind == 4) console.log("sd weeapon", globalThis.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.Value() > this.loadoutSlot, this.loadoutSlot);

        return globalThis.data.battles[this.heroKind].superDungeonCtrl.eqWeaponSlotNum.Value() > this.loadoutSlot;
      }
    } else if (this.loadoutSlot >= 24 && this.loadoutSlot < 48) {
      if (globalThis.data.custom.isSuperDungeon == false) {
        return globalThis.data.inventory.equipArmorUnlockedNum[this.heroKind].Value() > this.loadoutSlot - 24;
      } else {
        return globalThis.data.battles[this.heroKind].superDungeonCtrl.eqArmorSlotNum.Value() > this.loadoutSlot - 24;
      }
    } else if (this.loadoutSlot >= 48) {
      if (globalThis.data.custom.isSuperDungeon == false) {
        return globalThis.data.inventory.equipJewelryUnlockedNum[this.heroKind].Value() > this.loadoutSlot - 48;
      } else {
        return globalThis.data.battles[this.heroKind].superDungeonCtrl.eqJewelrySlotNum.Value() > this.loadoutSlot - 48;
      }
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
      if (this.optionEffects[index].kind != 0) this.isEffectRegistered.push(this.SetEffect(heroKind, this.optionEffects[index].kind, () => this.optionEffects[index].effectValue));

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
  //         globalThis.data.superStats.Hero(heroKind).GradeForEquipment() >= this.RequiredLevel(false, true)
  //     : this.RequiredLevel(false, false) <= 0 ||
  //         globalThis.data.stats.LevelForEquipment(heroKind).Value() >= this.RequiredLevel(false, false);
  // }
  get isSetItem() {
    return this.globalInfo.setKind != 0 && this.globalInfo.setKind != undefined;
  }
  EffectMultiplierFromSetItem(heroKind: HeroKind) {
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
    else if (globalThis.data.equipment.effectMultiplierModifierForArtifact.Value() > 0.0) num *= globalThis.data.equipment.ArtifactEffectMultiplier(heroKind);
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
}
