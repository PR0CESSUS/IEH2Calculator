import { DATA } from "..";
import { Enums } from "../../Enums";
import { AbilityKind } from "../../type/AbilityKind";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { EquipmentKind } from "../../type/EquipmentKind";
import { EquipmentPart } from "../../type/EquipmentPart";
import { EquipmentRarity } from "../../type/EquipmentRarity";
import { EquipmentSetKind } from "../../type/EquipmentSetKind";
import { HeroKind } from "../../type/HeroKind";
import { EquipmentEffect } from "./EquipmentEffect";
import { EquipmentLevel } from "./EquipmentLevel";
import { EquipmentParameter } from "./EquipmentParameter";
import { EquipmentRequiredAbility } from "./EquipmentRequiredAbility";

export class EquipmentGlobalInformation {
  data: DATA;
  kind: EquipmentKind;
  levels: EquipmentLevel[] = Array(Enums.HeroKind);
  // proficiencies: EquipmentProficiency[] = Array(Enums.HeroKind);
  effects: EquipmentEffect[] = [];
  requiredAbilities: EquipmentRequiredAbility[] = [];
  levelMaxEffects: EquipmentEffect[] = Array(Enums.HeroKind);
  setKind: EquipmentSetKind = EquipmentSetKind.Nothing;
  isArtifact: boolean = false;

  constructor(DATA: DATA, kind: EquipmentKind) {
    this.data = DATA;
    this.kind = kind;
    this.SetEffectAndRequiredAbility();
    this.SetLevelMaxEffect();
    for (let index = 0; index < this.levels.length; index++) {
      this.levels[index] = new EquipmentLevel(this.data, kind, index);
      // this.proficiencies[index] = new EquipmentProficiency(kind, count, (level => this.RequiredProficiency(count, level)), this.levels[count], this.isArtifact);
    }
  }

  get rarity() {
    return EquipmentParameter.Rarity(this.kind);
  }

  get part() {
    return EquipmentParameter.Part(this.kind);
  }

  SetEffectAndRequiredAbility() {
    switch (this.kind) {
      case EquipmentKind.Nothing:
        this.requiredAbilities.push(new EquipmentRequiredAbility(1));
        break;
      case EquipmentKind.DullSword:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 5.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 4.0,
            () => 1.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(1));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 3));
        break;
      case EquipmentKind.BrittleStaff:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 5.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 4.0,
            () => 1.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(1));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 3));
        break;
      case EquipmentKind.FlimsyWing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 5.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 2.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 2.0,
            () => 0.5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(1));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 2));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 2));
        break;
      case EquipmentKind.WornDart:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 2.5,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 4.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.StoneGain,
            () => 0.1,
            () => 0.025
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(1));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 3));
        break;
      case EquipmentKind.SmallBow:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 2.5,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 4.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.CrystalGain,
            () => 0.1,
            () => 0.025
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(1));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 3));
        break;
      case EquipmentKind.WoodenRecorder:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 2.5,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 2.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 2.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LeafGain,
            () => 0.1,
            () => 0.025
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(1));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 2));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 2));
        break;
      case EquipmentKind.OldCloak:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 10.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 5.0,
            () => 1.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(1));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 3));
        break;
      case EquipmentKind.BlueHat:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAdder,
            () => 1.0,
            () => 1.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(5));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 3));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 2));
        break;
      case EquipmentKind.OrangeHat:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 1.0,
            () => 1.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(5));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 3));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 2));
        break;
      case EquipmentKind.TShirt:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 20.0,
            () => 5.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAdder,
            () => 0.5,
            () => 0.5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(5));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 5));
        break;
      case EquipmentKind.ClothGlove:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAdder,
            () => 2.5,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalCritical,
            () => 0.005,
            () => 0.00025
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 5));
        break;
      case EquipmentKind.BlueTShirt:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 30.0,
            () => 3.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(15));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 5));
        break;
      case EquipmentKind.OrangeTShirt:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 20.0,
            () => 20.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(15));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 5));
        break;
      case EquipmentKind.ClothBelt:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(5));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 3));
        break;
      case EquipmentKind.ClothShoes:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedAdder,
            () => 5.0,
            () => 0.25
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(5));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 5));
        break;
      case EquipmentKind.IronRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 5.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 5));
        break;
      case EquipmentKind.PearlEarring:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 20.0,
            () => 4.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 5));
        break;
      case EquipmentKind.FireBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireDamage,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 5));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 10));
        break;
      case EquipmentKind.IceBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceDamage,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 5));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 10));
        break;
      case EquipmentKind.ThunderBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderDamage,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 5));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 10));
        break;
      case EquipmentKind.LightBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightDamage,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 5));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 10));
        break;
      case EquipmentKind.DarkBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkDamage,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 5));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 10));
        break;
      case EquipmentKind.WoodenShield:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAdder,
            () => 20.0,
            () => 1.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(15));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 5));
        break;
      case EquipmentKind.LongSword:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 10.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 10.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.WarriorSkillLevel,
            () => 2.0,
            () => 0.1
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 20));
        break;
      case EquipmentKind.LongStaff:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 10.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 10.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.WizardSkillLevel,
            () => 2.0,
            () => 0.1
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 20));
        break;
      case EquipmentKind.WarmWing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 10.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 5.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 5.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.AngelSkillLevel,
            () => 2.0,
            () => 0.1
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 10));
        break;
      case EquipmentKind.DualDagger:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 10.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 8.0,
            () => 0.8
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 2.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThiefSkillLevel,
            () => 2.0,
            () => 0.1
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 20));
        break;
      case EquipmentKind.ReinforcedBow:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 10.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 2.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 8.0,
            () => 0.8
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ArcherSkillLevel,
            () => 2.0,
            () => 0.1
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 20));
        break;
      case EquipmentKind.Flute:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 10.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 5.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 5.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TamerSkillLevel,
            () => 2.0,
            () => 0.1
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 10));
        break;
      case EquipmentKind.FireStaff:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 10.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireDamage,
            () => 0.1,
            () => 0.005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 15));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 10));
        break;
      case EquipmentKind.IceStaff:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 10.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceDamage,
            () => 0.1,
            () => 0.005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 15));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 10));
        break;
      case EquipmentKind.ThunderStaff:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 10.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderDamage,
            () => 0.1,
            () => 0.005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 15));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 10));
        break;
      case EquipmentKind.LeatherBelt:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAdder,
            () => 10.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(35));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 5));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 5));
        break;
      case EquipmentKind.LeatherShoes:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => 10.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedAdder,
            () => 10.0,
            () => 0.5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(35));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 20));
        break;
      case EquipmentKind.WarmCloak:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 100.0,
            () => 25.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 25.0,
            () => 5.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(35));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 10));
        break;
      case EquipmentKind.LeatherArmor:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(35));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 15));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 10));
        break;
      case EquipmentKind.LeatherGlove:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 5.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicalCritical,
            () => 0.005,
            () => 0.0005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(35));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 5));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 15));
        break;
      case EquipmentKind.LeatherShield:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAdder,
            () => 20.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalAbsorption,
            () => 0.01,
            () => 0.0005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(35));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 10));
        break;
      case EquipmentKind.FireRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 5.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireResistance,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(25));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 15));
        break;
      case EquipmentKind.IceRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 5.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceResistance,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(25));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 15));
        break;
      case EquipmentKind.ThunderRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 5.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderResistance,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(25));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 15));
        break;
      case EquipmentKind.LightRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 5.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightResistance,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(25));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 15));
        break;
      case EquipmentKind.DarkRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 5.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkResistance,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(25));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 15));
        break;
      case EquipmentKind.EnhancedFireBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireDamage,
            () => 0.15,
            () => 0.005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(60));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 50));
        break;
      case EquipmentKind.EnhancedIceBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceDamage,
            () => 0.15,
            () => 0.005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(60));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 50));
        break;
      case EquipmentKind.EnhancedThunderBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderDamage,
            () => 0.15,
            () => 0.005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(60));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 50));
        break;
      case EquipmentKind.EnhancedLightBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightDamage,
            () => 0.15,
            () => 0.005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(60));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 50));
        break;
      case EquipmentKind.EnhancedDarkBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkDamage,
            () => 0.15,
            () => 0.005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(60));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 50));
        break;
      case EquipmentKind.BattleSword:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 20.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKMultiplier,
            () => 0.01,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKPropotion,
            () => 0.1,
            () => 0.005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(80));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 60));
        break;
      case EquipmentKind.BattleStaff:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 20.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKMultiplier,
            () => 0.01,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKPropotion,
            () => 0.1,
            () => 0.005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(80));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 60));
        break;
      case EquipmentKind.BattleWing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 10.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKMultiplier,
            () => 0.005,
            () => 0.00025
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKPropotion,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 10.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKMultiplier,
            () => 0.005,
            () => 0.00025
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKPropotion,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(80));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 30));
        break;
      case EquipmentKind.BattleDagger:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 15.0,
            () => 1.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 5.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalCritical,
            () => 0.05,
            () => 0.0005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(80));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 40));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 20));
        break;
      case EquipmentKind.BattleBow:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 5.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 15.0,
            () => 1.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicalCritical,
            () => 0.05,
            () => 0.0005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(80));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 40));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 20));
        break;
      case EquipmentKind.BattleRecorder:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 10.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 10.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalCritical,
            () => 0.025,
            () => 0.00025
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicalCritical,
            () => 0.025,
            () => 0.00025
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(80));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 20));
        break;
      case EquipmentKind.SlimeSword:
        this.setKind = EquipmentSetKind.Slime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 15.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(25));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 20));
        break;
      case EquipmentKind.SlimeGlove:
        this.setKind = EquipmentSetKind.Slime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => 20.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SkillProficiency,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(25));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 10));
        break;
      case EquipmentKind.SlimeRing:
        this.setKind = EquipmentSetKind.Slime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.StoneGain,
            () => 0.5,
            () => 0.1
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.CrystalGain,
            () => 0.5,
            () => 0.1
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LeafGain,
            () => 0.5,
            () => 0.1
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(25));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 20));
        break;
      case EquipmentKind.SlimeBelt:
        this.setKind = EquipmentSetKind.Slime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAdder,
            () => 5.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DebuffResistance,
            () => 0.1,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(25));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 10));
        break;
      case EquipmentKind.SlimePincenez:
        this.setKind = EquipmentSetKind.Slime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.EXPGain,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(25));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 20));
        break;
      case EquipmentKind.SlimeWing:
        this.setKind = EquipmentSetKind.Slime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKMultiplier,
            () => 0.005,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKMultiplier,
            () => 0.005,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightDamage,
            () => 0.2,
            () => 0.02
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.AngelSkillLevel,
            () => 5.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(25));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 10));
        break;
      case EquipmentKind.SlimePoncho:
        this.setKind = EquipmentSetKind.Slime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 100.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPMultiplier,
            () => 0.05,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(25));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 20));
        break;
      case EquipmentKind.SlimeDart:
        this.setKind = EquipmentSetKind.Slime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalDamage,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkDamage,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.StoneGain,
            () => 1.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(25));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 10));
        break;
      case EquipmentKind.MagicSlimeStick:
        this.setKind = EquipmentSetKind.Magicslime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 15.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 20));
        break;
      case EquipmentKind.MagicSlimeHat:
        this.setKind = EquipmentSetKind.Magicslime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 10.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFMultiplier,
            () => 0.025,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 20));
        break;
      case EquipmentKind.MagicSlimeBow:
        this.setKind = EquipmentSetKind.Magicslime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 10.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireDamage,
            () => 0.1,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceDamage,
            () => 0.1,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderDamage,
            () => 0.1,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.CrystalGain,
            () => 1.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 40));
        break;
      case EquipmentKind.MagicSlimeShoes:
        this.setKind = EquipmentSetKind.Magicslime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireResistance,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceResistance,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderResistance,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 15));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 5));
        break;
      case EquipmentKind.MagicSlimeRecorder:
        this.setKind = EquipmentSetKind.Magicslime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LeafGain,
            () => 1.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TamerSkillLevel,
            () => 5.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 20));
        break;
      case EquipmentKind.MagicSlimeEarring:
        this.setKind = EquipmentSetKind.Magicslime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGain,
            () => 0.1,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 40));
        break;
      case EquipmentKind.MagicSlimeBalloon:
        this.setKind = EquipmentSetKind.Magicslime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ColorMaterialDropChance,
            () => 0.00015,
            () => 1e-6
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 40));
        break;
      case EquipmentKind.MagicSlimeSkirt:
        this.setKind = EquipmentSetKind.Magicslime;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 200.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPMultiplier,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicSlimeDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 20));
        break;
      case EquipmentKind.SpiderHat:
        this.setKind = EquipmentSetKind.Spider;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 500.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFMultiplier,
            () => 0.025,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFPropotion,
            () => 0.1,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 40));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 40));
        break;
      case EquipmentKind.SpiderSkirt:
        this.setKind = EquipmentSetKind.Spider;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkResistance,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkAbsorption,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 40));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 10));
        break;
      case EquipmentKind.SpiderSuit:
        this.setKind = EquipmentSetKind.Spider;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 500.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFMultiplier,
            () => 0.025,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFPropotion,
            () => 0.1,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 40));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 40));
        break;
      case EquipmentKind.SpiderDagger:
        this.setKind = EquipmentSetKind.Spider;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 30.0,
            () => 3.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkDamage,
            () => 0.2,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThiefSkillLevel,
            () => 5.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 80));
        break;
      case EquipmentKind.SpiderWing:
        this.setKind = EquipmentSetKind.Spider;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalCritical,
            () => 0.025,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicalCritical,
            () => 0.025,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalDamage,
            () => 0.2,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightDamage,
            () => 0.2,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 20));
        break;
      case EquipmentKind.SpiderCatchingNet:
        this.setKind = EquipmentSetKind.Spider;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TamingPoint,
            () => 0.5,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 40));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 40));
        break;
      case EquipmentKind.SpiderStick:
        this.setKind = EquipmentSetKind.Spider;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TamingPoint,
            () => 0.25,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ColorMaterialDropChance,
            () => 0.0001,
            () => 1e-6
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.WizardSkillLevel,
            () => 5.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 40));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 40));
        break;
      case EquipmentKind.SpiderFoldingFan:
        this.setKind = EquipmentSetKind.Spider;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SkillProficiency,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGain,
            () => 0.1,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SpiderDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 40));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 40));
        break;
      case EquipmentKind.BatRing:
        this.setKind = EquipmentSetKind.Bat;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DebuffResistance,
            () => 0.1,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.StoneGain,
            () => 1.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.CrystalGain,
            () => 1.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LeafGain,
            () => 1.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 60));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 40));
        break;
      case EquipmentKind.BatShoes:
        this.setKind = EquipmentSetKind.Bat;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedAdder,
            () => 20.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 100));
        break;
      case EquipmentKind.BatSword:
        this.setKind = EquipmentSetKind.Bat;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 50.0,
            () => 5.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKMultiplier,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.WarriorSkillLevel,
            () => 5.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 40));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 60));
        break;
      case EquipmentKind.BatHat:
        this.setKind = EquipmentSetKind.Bat;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireAbsorption,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceAbsorption,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderAbsorption,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightAbsorption,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkAbsorption,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 40));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 60));
        break;
      case EquipmentKind.BatRecorder:
        this.setKind = EquipmentSetKind.Bat;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TamerSkillLevel,
            () => 10.0,
            () => 0.25
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TamingPoint,
            () => 0.1,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 100));
        break;
      case EquipmentKind.BatBow:
        this.setKind = EquipmentSetKind.Bat;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKPropotion,
            () => 0.2,
            () => 0.02
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ArcherSkillLevel,
            () => 5.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 100));
        break;
      case EquipmentKind.BatMascaradeMask:
        this.setKind = EquipmentSetKind.Bat;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.EXPGain,
            () => 0.2,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 60));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 40));
        break;
      case EquipmentKind.BatCloak:
        this.setKind = EquipmentSetKind.Bat;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalAbsorption,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 200.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPMultiplier,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BatDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 60));
        break;
      case EquipmentKind.BronzeShoulder:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 20.0,
            () => 1.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(15));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 10));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 5));
        break;
      case EquipmentKind.BattleRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalDamage,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 5));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 10));
        break;
      case EquipmentKind.Halo:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HpRegen,
            () => 5.0,
            () => 0.25
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(25));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 5));
        break;
      case EquipmentKind.IronShoulder:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 25.0,
            () => 5.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 25.0,
            () => 1.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(35));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 15));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 15));
        break;
      case EquipmentKind.StrengthRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalDamage,
            () => 0.15,
            () => 0.005
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(60));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 50));
        break;
      case EquipmentKind.GoldenRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPMultiplier,
            () => 0.02,
            () => 0.002
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPMultiplier,
            () => 0.02,
            () => 0.002
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 20));
        break;
      case EquipmentKind.GoldenFireRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPMultiplier,
            () => 0.02,
            () => 0.002
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireResistance,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 40));
        break;
      case EquipmentKind.GoldenIceRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPMultiplier,
            () => 0.02,
            () => 0.002
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceResistance,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 40));
        break;
      case EquipmentKind.GoldenThunderRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPMultiplier,
            () => 0.02,
            () => 0.002
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderResistance,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 40));
        break;
      case EquipmentKind.GoldenLightRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPMultiplier,
            () => 0.02,
            () => 0.002
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightResistance,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 40));
        break;
      case EquipmentKind.GoldenDarkRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPMultiplier,
            () => 0.02,
            () => 0.002
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkResistance,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 40));
        break;
      case EquipmentKind.IronBelt:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFPropotion,
            () => 0.1,
            () => 0.01
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(120));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 50));
        break;
      case EquipmentKind.IronShoes:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => 20.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedAdder,
            () => 20.0,
            () => 0.5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(120));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 100));
        break;
      case EquipmentKind.CopperArmor:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAdder,
            () => 40.0,
            () => 4.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 40.0,
            () => 4.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(120));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 60));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 20));
        break;
      case EquipmentKind.IronGlove:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 20.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFPropotion,
            () => 0.1,
            () => 0.01
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(120));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 50));
        break;
      case EquipmentKind.TowerShield:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAdder,
            () => 40.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalAbsorption,
            () => 0.02,
            () => 0.001
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(120));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 20));
        break;
      case EquipmentKind.FireTowerShield:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 40.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireAbsorption,
            () => 0.02,
            () => 0.001
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(120));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 20));
        break;
      case EquipmentKind.IceTowerShield:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 40.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceAbsorption,
            () => 0.02,
            () => 0.001
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(120));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 20));
        break;
      case EquipmentKind.ThunderTowerShield:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 40.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderAbsorption,
            () => 0.02,
            () => 0.001
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(120));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 20));
        break;
      case EquipmentKind.LightTowerShield:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 40.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightAbsorption,
            () => 0.02,
            () => 0.001
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(120));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 20));
        break;
      case EquipmentKind.DarkTowerShield:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 40.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkAbsorption,
            () => 0.02,
            () => 0.001
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(120));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 30));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 20));
        break;
      case EquipmentKind.SavageRing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalDamage,
            () => 0.2,
            () => 3.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 150));
        break;
      case EquipmentKind.SpellboundFireBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireDamage,
            () => 0.2,
            () => 3.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 150));
        break;
      case EquipmentKind.SpellboundIceBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceDamage,
            () => 0.2,
            () => 3.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 150));
        break;
      case EquipmentKind.SpellboundThunderBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderDamage,
            () => 0.2,
            () => 3.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 150));
        break;
      case EquipmentKind.SpellboundLightBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightDamage,
            () => 0.2,
            () => 3.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 150));
        break;
      case EquipmentKind.SpellboundDarkBrooch:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkDamage,
            () => 0.2,
            () => 3.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 150));
        break;
      case EquipmentKind.CopperHelm:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 250.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(70));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        break;
      case EquipmentKind.BattleHelm:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 10.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalDamage,
            () => 0.025,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(70));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 30));
        break;
      case EquipmentKind.WizardHelm:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 10.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireDamage,
            () => 0.025,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceDamage,
            () => 0.025,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderDamage,
            () => 0.025,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightDamage,
            () => 0.025,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkDamage,
            () => 0.025,
            () => 1.0 / 400.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(70));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 20));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 30));
        break;
      case EquipmentKind.LargeSword:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAdder,
            () => 30.0,
            () => 3.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKPropotion,
            () => 0.25,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.WarriorSkillLevel,
            () => 5.0,
            () => 0.1
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.StoneGain,
            () => 1.0,
            () => 0.2
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 50));
        break;
      case EquipmentKind.LargeStaff:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAdder,
            () => 30.0,
            () => 3.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKPropotion,
            () => 0.25,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.WizardSkillLevel,
            () => 5.0,
            () => 0.1
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.CrystalGain,
            () => 1.0,
            () => 0.2
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 50));
        break;
      case EquipmentKind.LargeWing:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalDamage,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightDamage,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.AngelSkillLevel,
            () => 5.0,
            () => 0.1
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LeafGain,
            () => 1.0,
            () => 0.2
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 50));
        break;
      case EquipmentKind.LargeDagger:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalDamage,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkDamage,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThiefSkillLevel,
            () => 5.0,
            () => 0.1
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.StoneGain,
            () => 1.0,
            () => 0.2
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 50));
        break;
      case EquipmentKind.LargeBow:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireDamage,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceDamage,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderDamage,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ArcherSkillLevel,
            () => 5.0,
            () => 0.1
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.CrystalGain,
            () => 1.0,
            () => 0.2
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 50));
        break;
      case EquipmentKind.LargeOcarina:
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TamingPoint,
            () => 0.1,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TamerSkillLevel,
            () => 5.0,
            () => 0.1
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LeafGain,
            () => 1.0,
            () => 0.2
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 50));
        break;
      case EquipmentKind.FairyClothes:
        this.setKind = EquipmentSetKind.Fairy;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 100.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TownMatGain,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 200));
        break;
      case EquipmentKind.FairyStaff:
        this.setKind = EquipmentSetKind.Fairy;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 100.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.CrystalGain,
            () => 2.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKMultiplier,
            () => 0.1,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKPropotion,
            () => 0.5,
            () => 0.02
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 100));
        break;
      case EquipmentKind.FairyBoots:
        this.setKind = EquipmentSetKind.Fairy;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 100.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedAdder,
            () => 20.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightResistance,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightAbsorption,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 100));
        break;
      case EquipmentKind.FairyGlove:
        this.setKind = EquipmentSetKind.Fairy;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 100.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SkillProficiency,
            () => 0.15,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 100));
        break;
      case EquipmentKind.FairyBrooch:
        this.setKind = EquipmentSetKind.Fairy;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 100.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.EXPGain,
            () => 0.3,
            () => 0.015
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 250));
        break;
      case EquipmentKind.FairyLamp:
        this.setKind = EquipmentSetKind.Fairy;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 100.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TownMatAreaClearGain,
            () => 2.0,
            () => 0.1
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 200));
        break;
      case EquipmentKind.FairyWing:
        this.setKind = EquipmentSetKind.Fairy;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 100.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LeafGain,
            () => 2.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKMultiplier,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKPropotion,
            () => 0.25,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKMultiplier,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKPropotion,
            () => 0.25,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 50));
        break;
      case EquipmentKind.FairyShuriken:
        this.setKind = EquipmentSetKind.Fairy;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 100.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.StoneGain,
            () => 2.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKMultiplier,
            () => 0.1,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKPropotion,
            () => 0.5,
            () => 0.02
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FairyDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 100));
        break;
      case EquipmentKind.FoxKanzashi:
        this.setKind = EquipmentSetKind.Fox;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGain,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BlessingEffect,
            () => 0.1,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(250));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 200));
        break;
      case EquipmentKind.FoxLoincloth:
        this.setKind = EquipmentSetKind.Fox;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGain,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.EXPGain,
            () => 0.5,
            () => 0.025
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFMultiplier,
            () => -0.2,
            () => 0.002
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFMultiplier,
            () => -0.2,
            () => 0.002
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(250));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 200));
        break;
      case EquipmentKind.FoxMask:
        this.setKind = EquipmentSetKind.Fox;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGain,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPMultiplier,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MpRegen,
            () => 100.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalAbsorption,
            () => 0.02,
            () => 0.0001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(250));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 50));
        break;
      case EquipmentKind.FoxHamayayumi:
        this.setKind = EquipmentSetKind.Fox;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGain,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.CriticalDamage,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ArcherSkillLevel,
            () => 5.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DebuffResistance,
            () => 0.05,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(250));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 50));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 50));
        break;
      case EquipmentKind.FoxHat:
        this.setKind = EquipmentSetKind.Fox;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGain,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 500.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPMultiplier,
            () => 0.05,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HpRegen,
            () => 10.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(250));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 350));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 50));
        break;
      case EquipmentKind.FoxCoat:
        this.setKind = EquipmentSetKind.Fox;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGain,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceResistance,
            () => 0.15,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderResistance,
            () => 0.15,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightResistance,
            () => 0.15,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderAbsorption,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(250));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 100));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 100));
        break;
      case EquipmentKind.FoxBoot:
        this.setKind = EquipmentSetKind.Fox;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGain,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedMultiplier,
            () => -0.2,
            () => 0.002
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKPropotion,
            () => 0.5,
            () => 0.02
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderDamage,
            () => 0.25,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightDamage,
            () => 0.25,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(250));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 200));
        break;
      case EquipmentKind.FoxEma:
        this.setKind = EquipmentSetKind.Fox;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGain,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BlessingEffect,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.EquipmentDropChance,
            () => 0.00015,
            () => 1e-6
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FoxDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(250));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 400));
        break;
      case EquipmentKind.DevilfishSword:
        this.setKind = EquipmentSetKind.Devilfish;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 200.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKMultiplier,
            () => -0.2,
            () => 0.002
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKMultiplier,
            () => -0.2,
            () => 0.002
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalCritical,
            () => 0.25,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicalCritical,
            () => 0.25,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.CriticalDamage,
            () => 0.1,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.WarriorSkillLevel,
            () => 5.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(300));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 200));
        break;
      case EquipmentKind.DevilfishWing:
        this.setKind = EquipmentSetKind.Devilfish;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 200.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPMultiplier,
            () => 0.025,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKMultiplier,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKMultiplier,
            () => 0.05,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireResistance,
            () => 0.15,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.AngelSkillLevel,
            () => 5.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(300));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 200));
        break;
      case EquipmentKind.DevilfishRecorder:
        this.setKind = EquipmentSetKind.Devilfish;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 200.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKPropotion,
            () => 0.5,
            () => 0.02
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceDamage,
            () => 0.25,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkDamage,
            () => 0.25,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPMultiplier,
            () => -0.2,
            () => 0.002
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TamerSkillLevel,
            () => 5.0,
            () => 0.2
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(300));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 200));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 400));
        break;
      case EquipmentKind.DevilfishArmor:
        this.setKind = EquipmentSetKind.Devilfish;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 200.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAdder,
            () => 50.0,
            () => 5.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 50.0,
            () => 5.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPMultiplier,
            () => 0.025,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireResistance,
            () => 0.15,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkResistance,
            () => 0.15,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(300));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 600));
        break;
      case EquipmentKind.DevilfishScarf:
        this.setKind = EquipmentSetKind.Devilfish;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 200.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFMultiplier,
            () => 0.025,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFPropotion,
            () => 0.1,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFMultiplier,
            () => 0.025,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFPropotion,
            () => 0.1,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceDamage,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(300));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 300));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 150));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 150));
        break;
      case EquipmentKind.DevilfishGill:
        this.setKind = EquipmentSetKind.Devilfish;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 200.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceDamage,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireAbsorption,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceAbsorption,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkAbsorption,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(300));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 350));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 250));
        break;
      case EquipmentKind.DevilfishPendant:
        this.setKind = EquipmentSetKind.Devilfish;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 200.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGain,
            () => 0.2,
            () => 0.02
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(300));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 600));
        break;
      case EquipmentKind.DevilfishRing:
        this.setKind = EquipmentSetKind.Devilfish;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 200.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DebuffResistance,
            () => 0.15,
            () => 0.0015
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.StoneGain,
            () => 3.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.CrystalGain,
            () => 3.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LeafGain,
            () => 3.0,
            () => 0.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DevilFishDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(300));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 400));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 200));
        break;
      case EquipmentKind.TreantAmulet:
        this.setKind = EquipmentSetKind.Treant;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => -3600.0,
            () => 30.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedAdder,
            () => -120.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedMultiplier,
            () => -0.06,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.StoneGain,
            () => 100.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.CrystalGain,
            () => 100.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LeafGain,
            () => 100.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(350));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 500));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 1000));
        break;
      case EquipmentKind.TreantHagoita:
        this.setKind = EquipmentSetKind.Treant;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => -3600.0,
            () => 30.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedAdder,
            () => -120.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedMultiplier,
            () => -0.06,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TamingPoint,
            () => 0.25,
            () => 0.025
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PetEXPGain,
            () => 0.25,
            () => 0.025
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LoyaltyPointGain,
            () => 0.25,
            () => 0.025
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(350));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 500));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 500));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 500));
        break;
      case EquipmentKind.TreantChoppingBoard:
        this.setKind = EquipmentSetKind.Treant;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => -3600.0,
            () => 30.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedAdder,
            () => -120.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedMultiplier,
            () => -0.06,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 200.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAdder,
            () => 100.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 100.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFMultiplier,
            () => 0.1,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFMultiplier,
            () => 0.1,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(350));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 1000));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 250));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 250));
        break;
      case EquipmentKind.TreantDagger:
        this.setKind = EquipmentSetKind.Treant;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => -3600.0,
            () => 30.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedAdder,
            () => -120.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedMultiplier,
            () => -0.06,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalDamage,
            () => 1.0,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireDamage,
            () => 1.0,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceDamage,
            () => 1.0,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderDamage,
            () => 1.0,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightDamage,
            () => 1.0,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkDamage,
            () => 1.0,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(350));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 750));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 750));
        break;
      case EquipmentKind.TreantHaniwa:
        this.setKind = EquipmentSetKind.Treant;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => -3600.0,
            () => 30.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedAdder,
            () => -120.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedMultiplier,
            () => -0.06,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 1000.0,
            () => 50.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPMultiplier,
            () => 0.1,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HpRegen,
            () => 250.0,
            () => 25.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(350));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 1500));
        break;
      case EquipmentKind.TreantKokeshi:
        this.setKind = EquipmentSetKind.Treant;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => -3600.0,
            () => 30.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedAdder,
            () => -120.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedMultiplier,
            () => -0.06,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ColorMaterialDropChance,
            () => 0.0001,
            () => 1e-6
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.CriticalDamage,
            () => 1.0,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(350));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 500));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 1000));
        break;
      case EquipmentKind.TreantLamp:
        this.setKind = EquipmentSetKind.Treant;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => -3600.0,
            () => 30.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedAdder,
            () => -120.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedMultiplier,
            () => -0.06,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGain,
            () => 0.5,
            () => 0.025
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(350));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 500));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 250));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 250));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 500));
        break;
      case EquipmentKind.TreantLunchbox:
        this.setKind = EquipmentSetKind.Treant;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAdder,
            () => -3600.0,
            () => 30.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedAdder,
            () => -120.0,
            () => 1.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedMultiplier,
            () => -0.06,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.CatalystDoubleCriticalChance,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TreantDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(350));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 500));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 1000));
        break;
      case EquipmentKind.FlametigerPortableHotSpring:
        this.setKind = EquipmentSetKind.Flametiger;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SkillProficiency,
            () => -2.0,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAdder,
            () => 5000.0,
            () => 500.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAdder,
            () => 2000.0,
            () => 200.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPMultiplier,
            () => 0.5,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPMultiplier,
            () => 0.5,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HpRegenMultiplier,
            () => 0.001,
            () => 5e-5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MpRegenMultiplier,
            () => 0.001,
            () => 5e-5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(700));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 500000));
        break;
      case EquipmentKind.FlametigerVolcanicShield:
        this.setKind = EquipmentSetKind.Flametiger;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.EXPGain,
            () => -2.0,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalDamageMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ArmoredFury,
            () => 0.025,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAdder,
            () => 200.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFMultiplier,
            () => 0.2,
            () => 0.02
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(700));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 250000));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 250000));
        break;
      case EquipmentKind.FlametigerStripedBriefs:
        this.setKind = EquipmentSetKind.Flametiger;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DebuffResistance,
            () => -4.0,
            () => 0.01
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PhysicalCriticalMultiplier,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MagicalCriticalMultiplier,
            () => 0.025,
            () => 0.0005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.EXPGainMultiplier,
            () => 0.1,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGainMultiplier,
            () => 0.1,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(700));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 500000));
        break;
      case EquipmentKind.TorchOfEverburningFlametiger:
        this.setKind = EquipmentSetKind.Flametiger;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGain,
            () => -2.0,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.WarriorSkillRange,
            () => 0.001,
            () => 2.5e-5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.WizardSkillRange,
            () => 0.001,
            () => 2.5e-5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.AngelSkillRange,
            () => 0.001,
            () => 2.5e-5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThiefSkillRange,
            () => 0.001,
            () => 2.5e-5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ArcherSkillRange,
            () => 0.001,
            () => 2.5e-5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TamerSkillRange,
            () => 0.001,
            () => 2.5e-5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(700));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 100000));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 100000));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 300000));
        break;
      case EquipmentKind.FlametigerCostume:
        this.setKind = EquipmentSetKind.Flametiger;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.EquipmentProficiency,
            () => -2.0,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PetPhysicalCriticalChance,
            () => 0.1,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PetMagicalCriticalChance,
            () => 0.1,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PetCriticalDamage,
            () => 0.3,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TamingPointMultiplier,
            () => 0.1,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.PetEXPGainMultiplier,
            () => 0.1,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LoyaltyPointGainMultiplier,
            () => 0.1,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(700));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 100000));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 200000));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 200000));
        break;
      case EquipmentKind.RingOfFlametigersWrath:
        this.setKind = EquipmentSetKind.Flametiger;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.EXPGain,
            () => -2.0,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FireDamageMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.IceDamageMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ThunderDamageMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LightDamageMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DarkDamageMultiplier,
            () => 0.01,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.WardedFury,
            () => 0.025,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAdder,
            () => 200.0,
            () => 20.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFMultiplier,
            () => 0.2,
            () => 0.02
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(700));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 250000));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 250000));
        break;
      case EquipmentKind.EndlessBowlOfSpicyFlametigerRamen:
        this.setKind = EquipmentSetKind.Flametiger;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.TamingPoint,
            () => -10.0,
            () => 0.025
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LoyaltyPointGain,
            () => -10.0,
            () => 0.025
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.StoneTownResearchPower,
            () => 0.025,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.CrystalTownResearchPower,
            () => 0.025,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.LeafTownResearchPower,
            () => 0.025,
            () => 0.001
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.BlessingEffectMultiplier,
            () => 0.01,
            () => 0.00025
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(700));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 100000));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 400000));
        break;
      case EquipmentKind.ScreenOfTheSneakyFlametiger:
        this.setKind = EquipmentSetKind.Flametiger;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.AllSkillLevel,
            () => -1000.0,
            () => 2.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GoldGainMultiplier,
            () => 0.05,
            () => 1.0 / 400.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.GuildEXPGain,
            () => 0.005,
            () => 0.00025
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerKnowledge,
            () => 0.2,
            () => 0.005
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FlameTigerDropChance,
            () => 0.0005,
            () => 5e-5
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(700));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 250000));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 250000));
        break;
      case EquipmentKind.ModifiedSword:
        this.isArtifact = true;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAfter,
            () => 25.0,
            () => 5.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAfter,
            () => 50.0,
            () => 10.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(10, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 5, true));
        break;
      case EquipmentKind.ModifiedStaff:
        this.isArtifact = true;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAfter,
            () => 50.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAfter,
            () => 50.0,
            () => 10.0
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(10, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 5, true));
        break;
      case EquipmentKind.ModifiedWing:
        this.isArtifact = true;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAfter,
            () => 50.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAfter,
            () => 25.0,
            () => 5.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SDDamageCutMultiplier,
            () => 0.2,
            () => 0.1
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(10, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 5, true));
        break;
      case EquipmentKind.ModifiedDart:
        this.isArtifact = true;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAfter,
            () => 10.0,
            () => 2.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ChallengeBossKnowledgeAfter,
            () => 0.5,
            () => 0.25
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(10, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 3, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 2, true));
        break;
      case EquipmentKind.ModifiedBow:
        this.isArtifact = true;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAfter,
            () => 25.0,
            () => 5.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAfter,
            () => 25.0,
            () => 5.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAfter,
            () => 25.0,
            () => 5.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SDDamageMultiplier,
            () => 0.2,
            () => 0.1
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(10, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 1, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 2, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 2, true));
        break;
      case EquipmentKind.ModifiedRecorder:
        this.isArtifact = true;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAfter,
            () => 50.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MPAfter,
            () => 25.0,
            () => 5.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FameGain,
            () => 0.05,
            () => 0.01
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(10, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 5, true));
        break;
      case EquipmentKind.AncientCloak:
        this.isArtifact = true;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.HPAfter,
            () => 200.0,
            () => 40.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ChallengeBossKnowledgeAfter,
            () => 0.5,
            () => 0.25
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(20, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 10, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 5, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 5, true));
        break;
      case EquipmentKind.AncientBelt:
        this.isArtifact = true;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.DEFAfter,
            () => 50.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MDEFAfter,
            () => 50.0,
            () => 10.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SDDamageCutMultiplier,
            () => 0.2,
            () => 0.1
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(20, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Vitality, 20, true));
        break;
      case EquipmentKind.AncientShoes:
        this.isArtifact = true;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SPDAfter,
            () => 25.0,
            () => 5.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MoveSpeedAfter,
            () => 20.0,
            () => 4.0
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FameGain,
            () => 0.02,
            () => 0.004
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(30, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 20, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 10, true));
        break;
      case EquipmentKind.AncientRing:
        this.isArtifact = true;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ATKAfter,
            () => 10.0,
            () => 2.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.MATKAfter,
            () => 10.0,
            () => 2.5
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.ChallengeBossKnowledgeAfter,
            () => 0.5,
            () => 0.25
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(40, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Strength, 10, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Intelligence, 10, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 10, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 10, true));
        break;
      case EquipmentKind.AncientEarring:
        this.isArtifact = true;
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.SDDamageMultiplier,
            () => 0.1,
            () => 0.05
          )
        );
        this.effects.push(
          new EquipmentEffect(
            EquipmentEffectKind.FameGain,
            () => 0.05,
            () => 0.01
          )
        );
        this.requiredAbilities.push(new EquipmentRequiredAbility(40, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Agility, 10, true));
        this.requiredAbilities.push(new EquipmentRequiredAbility(AbilityKind.Luck, 30, true));
        break;
    }
  }

  SetLevelMaxEffect() {
    if (this.isArtifact) {
      switch (this.rarity) {
        case EquipmentRarity.Rare:
          switch (this.part) {
            case EquipmentPart.Weapon:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.ATKAfter,
                () => 50.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.MATKAfter,
                () => 50.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.MPAfter,
                () => 50.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 2.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.PhysicalCriticalAfter,
                () => 0.01,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.MagicalCriticalAfter,
                () => 0.01,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Armor:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.DEFAfter,
                () => 50.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.MDEFAfter,
                () => 50.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.HPAfter,
                () => 200.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 2.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.SPDAfter,
                () => 50.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.MoveSpeedAfter,
                () => 50.0,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Jewelry:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.FireResistanceAfter,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.IceResistanceAfter,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.ThunderResistanceAfter,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 2.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.LightResistanceAfter,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.DarkResistanceAfter,
                () => 0.05,
                () => 0.0,
                true
              );
              return;
            default:
              return;
          }
        case EquipmentRarity.SuperRare:
          switch (this.part) {
            case EquipmentPart.Weapon:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.ATKMultiplier,
                () => 0.2,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.MATKMultiplier,
                () => 0.2,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.CriticalDamage,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 2.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.SPDAdder,
                () => 200.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.TamingPoint,
                () => 0.5,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Armor:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.DEFPropotion,
                () => 0.25,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.MDEFPropotion,
                () => 0.25,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.GoldGain,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 2.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.SPDAdder,
                () => 200.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.EquipmentProficiency,
                () => 0.1,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Jewelry:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.EXPGain,
                () => 0.25,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.SkillProficiency,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.RebirthPointGain2,
                () => 0.025,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 2.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.TownMatGain,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.PetEXPGain,
                () => 0.25,
                () => 0.0,
                true
              );
              return;
            default:
              return;
          }
        case EquipmentRarity.Epic:
          switch (this.part) {
            case EquipmentPart.Weapon:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.StoneTownResearchPower,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.CrystalTownResearchPower,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.LeafTownResearchPower,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 3.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.SPDMultiplier,
                () => 0.3,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.TamingPointMultiplier,
                () => 0.25,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Armor:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.ArmoredFury,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.WardedFury,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.GoldGainMultiplier,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 3.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.GuildEXPGain,
                () => 0.01,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.PetEXPGainMultiplier,
                () => 0.25,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Jewelry:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.EXPGainMultiplier,
                () => 0.2,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.SkillProficiencyMultiplier,
                () => 0.2,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.RebirthPointGain3,
                () => 0.025,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 3.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.EquipmentProficiencyMultiplier,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.LoyaltyPointGainMultiplier,
                () => 0.25,
                () => 0.0,
                true
              );
              return;
            default:
              return;
          }
      }
    } else {
      switch (this.rarity) {
        case EquipmentRarity.Common:
          switch (this.part) {
            case EquipmentPart.Weapon:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.ATKAdder,
                () => 15.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.MATKAdder,
                () => 15.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.AllSkillLevel,
                () => 1.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 1.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.SPDAdder,
                () => 20.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.TamingPoint,
                () => 0.05,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Armor:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.HPAdder,
                () => 100.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.MPAdder,
                () => 50.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.HpRegen,
                () => 5.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 1.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.MpRegen,
                () => 20.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.LoyaltyPointGain,
                () => 0.05,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Jewelry:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.StoneGain,
                () => 1.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.CrystalGain,
                () => 1.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.LeafGain,
                () => 1.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 1.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.TownMatAreaClearGain,
                () => 1.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.PetEXPGain,
                () => 0.05,
                () => 0.0,
                true
              );
              return;
            default:
              return;
          }
        case EquipmentRarity.Uncommon:
          switch (this.part) {
            case EquipmentPart.Weapon:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.ATKMultiplier,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.MATKMultiplier,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.SkillProficiency,
                () => 0.025,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 1.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.SPDAdder,
                () => 50.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.TamingPoint,
                () => 0.1,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Armor:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.DEFAdder,
                () => 25.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.MDEFAdder,
                () => 25.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.GoldGain,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 1.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.SPDAdder,
                () => 50.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.EquipmentProficiency,
                () => 0.025,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Jewelry:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.HPMultiplier,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.MPMultiplier,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.EXPGain,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 1.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.TownMatGain,
                () => 0.025,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.PetEXPGain,
                () => 0.1,
                () => 0.0,
                true
              );
              return;
            default:
              return;
          }
        case EquipmentRarity.Rare:
          switch (this.part) {
            case EquipmentPart.Weapon:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.ATKPropotion,
                () => 0.25,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.MATKPropotion,
                () => 0.25,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.SkillProficiency,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 2.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.SPDAdder,
                () => 100.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.TamingPoint,
                () => 0.25,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Armor:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.DEFMultiplier,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.MDEFMultiplier,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.HpRegen,
                () => 10.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 2.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.SPDAdder,
                () => 100.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.EquipmentProficiency,
                () => 0.05,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Jewelry:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.HPMultiplier,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.MPMultiplier,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.RebirthPointGain1,
                () => 0.025,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 2.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.TownMatAreaClearGain,
                () => 2.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.LoyaltyPointGain,
                () => 0.2,
                () => 0.0,
                true
              );
              return;
            default:
              return;
          }
        case EquipmentRarity.SuperRare:
          switch (this.part) {
            case EquipmentPart.Weapon:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.ATKMultiplier,
                () => 0.2,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.MATKMultiplier,
                () => 0.2,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.CriticalDamage,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 2.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.SPDAdder,
                () => 200.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.TamingPoint,
                () => 0.5,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Armor:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.DEFPropotion,
                () => 0.25,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.MDEFPropotion,
                () => 0.25,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.GoldGain,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 2.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.SPDAdder,
                () => 200.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.EquipmentProficiency,
                () => 0.1,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Jewelry:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.EXPGain,
                () => 0.25,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.SkillProficiency,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.RebirthPointGain2,
                () => 0.025,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 2.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.TownMatGain,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.PetEXPGain,
                () => 0.25,
                () => 0.0,
                true
              );
              return;
            default:
              return;
          }
        case EquipmentRarity.Epic:
          switch (this.part) {
            case EquipmentPart.Weapon:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.StoneTownResearchPower,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.CrystalTownResearchPower,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.LeafTownResearchPower,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 3.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.SPDMultiplier,
                () => 0.3,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.TamingPointMultiplier,
                () => 0.25,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Armor:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.ArmoredFury,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.WardedFury,
                () => 0.05,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.GoldGainMultiplier,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 3.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.GuildEXPGain,
                () => 0.01,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.PetEXPGainMultiplier,
                () => 0.25,
                () => 0.0,
                true
              );
              return;
            case EquipmentPart.Jewelry:
              this.levelMaxEffects[0] = new EquipmentEffect(
                EquipmentEffectKind.EXPGainMultiplier,
                () => 0.2,
                () => 0.0,
                true
              );
              this.levelMaxEffects[1] = new EquipmentEffect(
                EquipmentEffectKind.SkillProficiencyMultiplier,
                () => 0.2,
                () => 0.0,
                true
              );
              this.levelMaxEffects[2] = new EquipmentEffect(
                EquipmentEffectKind.RebirthPointGain3,
                () => 0.025,
                () => 0.0,
                true
              );
              this.levelMaxEffects[3] = new EquipmentEffect(
                EquipmentEffectKind.Nothing,
                () => 3.0,
                () => 0.0,
                true
              );
              this.levelMaxEffects[4] = new EquipmentEffect(
                EquipmentEffectKind.EquipmentProficiencyMultiplier,
                () => 0.1,
                () => 0.0,
                true
              );
              this.levelMaxEffects[5] = new EquipmentEffect(
                EquipmentEffectKind.LoyaltyPointGainMultiplier,
                () => 0.25,
                () => 0.0,
                true
              );
              return;
            default:
              return;
          }
      }
    }
  }

  // DisassembleMaterialKind() {
  //   kind: TownMaterialKind = TownMaterialKind.MudBrick;
  //   switch (this.part) {
  //     case EquipmentPart.Weapon:
  //       switch (this.rarity) {
  //         case EquipmentRarity.Common:
  //           kind = TownMaterialKind.MudBrick;
  //           break;
  //         case EquipmentRarity.Uncommon:
  //           kind = TownMaterialKind.LimestoneBrick;
  //           break;
  //         case EquipmentRarity.Rare:
  //           kind = TownMaterialKind.MarbleBrick;
  //           break;
  //         case EquipmentRarity.SuperRare:
  //           kind = TownMaterialKind.GraniteBrick;
  //           break;
  //         case EquipmentRarity.Epic:
  //           kind = TownMaterialKind.BasaltBrick;
  //           break;
  //       }
  //       break;
  //     case EquipmentPart.Armor:
  //       switch (this.rarity) {
  //         case EquipmentRarity.Common:
  //           kind = TownMaterialKind.PineLog;
  //           break;
  //         case EquipmentRarity.Uncommon:
  //           kind = TownMaterialKind.MapleLog;
  //           break;
  //         case EquipmentRarity.Rare:
  //           kind = TownMaterialKind.AshLog;
  //           break;
  //         case EquipmentRarity.SuperRare:
  //           kind = TownMaterialKind.MahoganyLog;
  //           break;
  //         case EquipmentRarity.Epic:
  //           kind = TownMaterialKind.RosewoodLog;
  //           break;
  //       }
  //       break;
  //     case EquipmentPart.Jewelry:
  //       switch (this.rarity) {
  //         case EquipmentRarity.Common:
  //           kind = TownMaterialKind.JasperShard;
  //           break;
  //         case EquipmentRarity.Uncommon:
  //           kind = TownMaterialKind.OpalShard;
  //           break;
  //         case EquipmentRarity.Rare:
  //           kind = TownMaterialKind.OnyxShard;
  //           break;
  //         case EquipmentRarity.SuperRare:
  //           kind = TownMaterialKind.JadeShard;
  //           break;
  //         case EquipmentRarity.Epic:
  //           kind = TownMaterialKind.SapphireShard;
  //           break;
  //       }
  //       break;
  //   }
  //   return this.data.town.TownMaterial(kind);
  // }

  DisassembleMaterialNum() {
    return this.isArtifact ? 1 + this.TotalLevel() : Math.max(1.0, Math.floor((this.TotalLevel() + this.requiredAbilities[0].requiredValue / 2.0) / 4.0));
  }

  CraftCostMaterialNum() {
    let num = this.DisassembleMaterialNum() * 500.0 * (1.0 - this.data.craft.costReduction.Value()) * (1 + this.rarity * 2);
    if (this.rarity >= EquipmentRarity.Epic) num *= 1000000.0;
    if (num < this.DisassembleMaterialNum() * this.data.equipment.disassembleMultiplier.Value() * 4.0)
      num = this.DisassembleMaterialNum() * this.data.equipment.disassembleMultiplier.Value() * 4.0;
    return num;
  }

  TotalLevel() {
    let num = 0;
    for (let index = 0; index < this.levels.length; index++) num += this.levels[index].value;
    return num;
  }

  RequiredProficiency(heroKind: HeroKind, level) {
    let num = Math.pow(3.0, this.rarity) * (1.0 + 1.5 * this.rarity) * 300.0 * (level * (1 + this.rarity) + 1);
    if (this.rarity >= EquipmentRarity.Epic) num *= 10000.0 * Math.pow(10.0, level / 10.0);
    return level <= 10 ? num : num * Math.pow(2.0, level - 10);
  }

  // RequiredProficiency(heroKind: HeroKind) {return this.RequiredProficiency(heroKind, this.levels[heroKind].value);}

  // ProficiencyPercent(heroKind: HeroKind) {return this.proficiencies[heroKind].value / this.RequiredProficiency(heroKind);}

  // ProficiencyLeft(heroKind: HeroKind) {return Math.max(0.0, this.RequiredProficiency(heroKind) - this.proficiencies[heroKind].value);}

  // ProficiencyTotalLeft(heroKind: HeroKind, toLevel = 20) {
  //   num1 = this.levels[heroKind].maxValue();
  //   if (toLevel < 20)
  //     num1 = toLevel;
  //   num2 = this.ProficiencyLeft(heroKind);
  //   for (level = this.levels[heroKind].value + 1; level < num1; level++)
  //     num2 += this.RequiredProficiency(heroKind, level);
  //   return num2;
  // }

  ForgeSlotNum() {
    if (this.TotalLevel() < 60) return 0;
    if (this.TotalLevel() < 80) return 1;
    if (this.TotalLevel() < 100) return 2;
    if (this.TotalLevel() < 120) return 3;
    if (this.TotalLevel() < 140) return 4;
    return this.TotalLevel() < 160 ? 5 : 6;
  }

  MasteryNum() {
    let num = 0;
    for (let index = 0; index < this.levels.length; index++) {
      if (this.levels[index].isMaxed) num++;
    }
    return num;
  }
}
