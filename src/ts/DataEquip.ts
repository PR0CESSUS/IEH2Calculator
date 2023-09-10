import { DataType } from "./type/DataType";
import { Equipment } from "./type/Equipment";
import { HeroKind } from "./type/HeroKind";
import { EquipmentKind, equipmentKind } from "./type/EquipmentKind";
import { heroKind } from "./type/HeroKind";
import { EquipmentSet } from "./EquipmentSet";

export class DataEquip {
  Warrior: EquipmentSet;
  Wizard: EquipmentSet;
  Angel: EquipmentSet;
  Thief: EquipmentSet;
  Archer: EquipmentSet;
  Tamer: EquipmentSet;

  constructor(data: DataType) {
    this.initialization(data);
  }
  initialization(data: DataType) {
    // data.pet.isInitialized = false;
    // console.log("data.isInitialized:", data.isInitialized);
    // console.log("data.upgrade.isInitialized:", data?.upgrade?.isInitialized);
    if (data.isInitialized) {
      this.Warrior = this.getHeroActiveSet(data, "Warrior");
      this.Wizard = this.getHeroActiveSet(data, "Wizard");
      this.Angel = this.getHeroActiveSet(data, "Angel");
      this.Thief = this.getHeroActiveSet(data, "Thief");
      this.Archer = this.getHeroActiveSet(data, "Archer");
      this.Tamer = this.getHeroActiveSet(data, "Tamer");
      //   for (const [key, value] of Object.entries(data.localStorage.equip)) {
      //     this[key] = value;
      //   }
      // force update
      //   console.log(this.getHeroActiveSet(data));
    } else if (data.source?.isInitialized) {
      this.Warrior = this.getHeroActiveSet(data, "Warrior");
      this.Wizard = this.getHeroActiveSet(data, "Wizard");
      this.Angel = this.getHeroActiveSet(data, "Angel");
      this.Thief = this.getHeroActiveSet(data, "Thief");
      this.Archer = this.getHeroActiveSet(data, "Archer");
      this.Tamer = this.getHeroActiveSet(data, "Tamer");
      //   console.log(this.getHeroActiveSet(data));
      //   console.log(this);

      // cleaning up consumed data
      // delete data.source.equipment1stForgeValues;
      // delete data.source.equipment2ndForgeValues;
      // delete data.source.equipment3rdForgeValues;
      // delete data.source.equipment4thForgeValues;
      // delete data.source.equipment5thForgeValues;
      // delete data.source.equipment6thForgeValues;
      // delete data.source.equipmentLevelsWarrior;
      // delete data.source.equipmentLevelsWizard;
      // delete data.source.equipmentLevelsAngel;
      // delete data.source.equipmentLevelsThief;
      // delete data.source.equipmentLevelsArcher;
      // delete data.source.equipmentLevelsTamer;
      // delete data.source.equipment6thForgeValues;
      // delete data.source.equipment6thForgeValues;
      // delete data.source.equipment6thForgeValues;
    }
  }

  update() {
    // console.log(this.Warrior);
    // this.Warrior.update();
  }

  getHeroActiveSet(data: DataType, hero = "Warrior") {
    let offset = this.getOffset(hero);

    // let offset = 4840 + 24 + 24 + 15;
    // let setLimit = 1;
    let set = new EquipmentSet();
    // 72 = all item in loadout
    for (let index = 0; index < 72; index++) {
      const id = data.source?.equipmentId[offset + index] as number;
      const kind = equipmentKind[data.source?.equipmentKinds[id]];
      const kindNumeric = data.source?.equipmentKinds[id];
      const part = this.getEquipmentPart(kind);
      const setKind = this.getEquipmentSetKind(kind);
      const rarity = this.getEquipmentRarity(kind);
      const level = this.getEquipmentLevel(data, kind);

      const mastery = this.getMasteryEffect(rarity, part);
      const effects = this.getEquipmentEffect(kind);

      let item: Equipment = {
        kind: kind,
        kindNumeric: kindNumeric,
        part: part,
        rarity: rarity,
        setKind: setKind,
        level: level,
        forgeEffect: {
          ReduceRequiredHeroLevel: data.source?.equipment1stForgeValues[id],
          ReduceRequiredAbility: data.source?.equipment2ndForgeValues[id],
          IncreaseProficiencyGain: data.source?.equipment3rdForgeValues[id],
          IncreaseEffect: data.source?.equipment4thForgeValues[id],
          PurifyCurseEffect: data.source?.equipment5thForgeValues[id],
          IncreaseEffectIncrement: data.source?.equipment6thForgeValues[id],
        },
        enchants: [
          data.source?.equipment1stOptionEffectKinds[id],
          data.source?.equipment2ndOptionEffectKinds[id],
          data.source?.equipment3rdOptionEffectKinds[id],
          data.source?.equipment4thOptionEffectKinds[id],
          data.source?.equipment5thOptionEffectKinds[id],
          data.source?.equipment6thOptionEffectKinds[id],
          data.source?.equipment7thOptionEffectKinds[id],
        ],
        // mastery: mastery,
        // effects: effects,
      };

      set.addItem(item);
    }
    return set;
  }

  getOffset(hero) {
    switch (hero) {
      case "Warrior":
        return 4840;
      case "Wizard":
        return 4912; // ?
      case "Angel":
        return 4984; // ?
      case "Thief":
        return 5056; // ?
      case "Archer":
        return 5128; // ? 5130
      case "Tamer":
        return 5200;
      default:
        return 0;
    }
  }

  private getEquipmentPart(kind) {
    switch (kind) {
      case "Nothing":
        return "Weapon";
      case "DullSword":
        return "Weapon";
      case "BrittleStaff":
        return "Weapon";
      case "FlimsyWing":
        return "Weapon";
      case "WornDart":
        return "Weapon";
      case "SmallBow":
        return "Weapon";
      case "WoodenRecorder":
        return "Weapon";
      case "OldCloak":
        return "Armor";
      case "BlueHat":
        return "Armor";
      case "OrangeHat":
        return "Armor";
      case "TShirt":
        return "Armor";
      case "ClothGlove":
        return "Armor";
      case "BlueTShirt":
        return "Armor";
      case "OrangeTShirt":
        return "Armor";
      case "ClothBelt":
        return "Armor";
      case "ClothShoes":
        return "Armor";
      case "IronRing":
        return "Jewelry";
      case "PearlEarring":
        return "Jewelry";
      case "FireBrooch":
        return "Jewelry";
      case "IceBrooch":
        return "Jewelry";
      case "ThunderBrooch":
        return "Jewelry";
      case "LightBrooch":
        return "Jewelry";
      case "DarkBrooch":
        return "Jewelry";
      case "WoodenShield":
        return "Armor";
      case "LongSword":
        return "Weapon";
      case "LongStaff":
        return "Weapon";
      case "WarmWing":
        return "Weapon";
      case "DualDagger":
        return "Weapon";
      case "ReinforcedBow":
        return "Weapon";
      case "Flute":
        return "Weapon";
      case "FireStaff":
        return "Weapon";
      case "IceStaff":
        return "Weapon";
      case "ThunderStaff":
        return "Weapon";
      case "LeatherBelt":
        return "Armor";
      case "LeatherShoes":
        return "Armor";
      case "WarmCloak":
        return "Armor";
      case "LeatherArmor":
        return "Armor";
      case "LeatherGlove":
        return "Armor";
      case "LeatherShield":
        return "Armor";
      case "FireRing":
        return "Jewelry";
      case "IceRing":
        return "Jewelry";
      case "ThunderRing":
        return "Jewelry";
      case "LightRing":
        return "Jewelry";
      case "DarkRing":
        return "Jewelry";
      case "EnhancedFireBrooch":
        return "Jewelry";
      case "EnhancedIceBrooch":
        return "Jewelry";
      case "EnhancedThunderBrooch":
        return "Jewelry";
      case "EnhancedLightBrooch":
        return "Jewelry";
      case "EnhancedDarkBrooch":
        return "Jewelry";
      case "BattleSword":
        return "Weapon";
      case "BattleStaff":
        return "Weapon";
      case "BattleWing":
        return "Weapon";
      case "BattleDagger":
        return "Weapon";
      case "BattleBow":
        return "Weapon";
      case "BattleRecorder":
        return "Weapon";
      case "SlimeSword":
        return "Weapon";
      case "SlimeGlove":
        return "Armor";
      case "SlimeRing":
        return "Jewelry";
      case "SlimeBelt":
        return "Armor";
      case "SlimePincenez":
        return "Jewelry";
      case "SlimeWing":
        return "Weapon";
      case "SlimePoncho":
        return "Armor";
      case "SlimeDart":
        return "Weapon";
      case "MagicSlimeStick":
        return "Weapon";
      case "MagicSlimeHat":
        return "Armor";
      case "MagicSlimeBow":
        return "Weapon";
      case "MagicSlimeShoes":
        return "Armor";
      case "MagicSlimeRecorder":
        return "Weapon";
      case "MagicSlimeEarring":
        return "Jewelry";
      case "MagicSlimeBalloon":
        return "Jewelry";
      case "MagicSlimeSkirt":
        return "Armor";
      case "SpiderHat":
        return "Armor";
      case "SpiderSkirt":
        return "Armor";
      case "SpiderSuit":
        return "Armor";
      case "SpiderDagger":
        return "Weapon";
      case "SpiderWing":
        return "Weapon";
      case "SpiderCatchingNet":
        return "Weapon";
      case "SpiderStick":
        return "Weapon";
      case "SpiderFoldingFan":
        return "Jewelry";
      case "BatRing":
        return "Jewelry";
      case "BatShoes":
        return "Armor";
      case "BatSword":
        return "Weapon";
      case "BatHat":
        return "Armor";
      case "BatRecorder":
        return "Weapon";
      case "BatBow":
        return "Weapon";
      case "BatMascaradeMask":
        return "Jewelry";
      case "BatCloak":
        return "Armor";
      case "BronzeShoulder":
        return "Armor";
      case "BattleRing":
        return "Jewelry";
      case "Halo":
        return "Jewelry";
      case "IronShoulder":
        return "Armor";
      case "StrengthRing":
        return "Jewelry";
      case "GoldenRing":
        return "Jewelry";
      case "GoldenFireRing":
        return "Jewelry";
      case "GoldenIceRing":
        return "Jewelry";
      case "GoldenThunderRing":
        return "Jewelry";
      case "GoldenLightRing":
        return "Jewelry";
      case "GoldenDarkRing":
        return "Jewelry";
      case "IronBelt":
        return "Armor";
      case "IronShoes":
        return "Armor";
      case "CopperArmor":
        return "Armor";
      case "IronGlove":
        return "Armor";
      case "TowerShield":
        return "Armor";
      case "FireTowerShield":
        return "Armor";
      case "IceTowerShield":
        return "Armor";
      case "ThunderTowerShield":
        return "Armor";
      case "LightTowerShield":
        return "Armor";
      case "DarkTowerShield":
        return "Armor";
      case "SavageRing":
        return "Jewelry";
      case "SpellboundFireBrooch":
        return "Jewelry";
      case "SpellboundIceBrooch":
        return "Jewelry";
      case "SpellboundThunderBrooch":
        return "Jewelry";
      case "SpellboundLightBrooch":
        return "Jewelry";
      case "SpellboundDarkBrooch":
        return "Jewelry";
      case "CopperHelm":
        return "Armor";
      case "BattleHelm":
        return "Armor";
      case "WizardHelm":
        return "Armor";
      case "LargeSword":
        return "Weapon";
      case "LargeStaff":
        return "Weapon";
      case "LargeWing":
        return "Weapon";
      case "LargeDagger":
        return "Weapon";
      case "LargeBow":
        return "Weapon";
      case "LargeOcarina":
        return "Weapon";
      case "FairyClothes":
        return "Armor";
      case "FairyStaff":
        return "Weapon";
      case "FairyBoots":
        return "Armor";
      case "FairyGlove":
        return "Armor";
      case "FairyBrooch":
        return "Jewelry";
      case "FairyLamp":
        return "Jewelry";
      case "FairyWing":
        return "Weapon";
      case "FairyShuriken":
        return "Weapon";
      case "FoxKanzashi":
        return "Jewelry";
      case "FoxLoincloth":
        return "Armor";
      case "FoxMask":
        return "Jewelry";
      case "FoxHamayayumi":
        return "Weapon";
      case "FoxHat":
        return "Armor";
      case "FoxCoat":
        return "Armor";
      case "FoxBoot":
        return "Armor";
      case "FoxEma":
        return "Jewelry";
      case "DevilfishSword":
        return "Weapon";
      case "DevilfishWing":
        return "Weapon";
      case "DevilfishRecorder":
        return "Weapon";
      case "DevilfishArmor":
        return "Armor";
      case "DevilfishScarf":
        return "Armor";
      case "DevilfishGill":
        return "Jewelry";
      case "DevilfishPendant":
        return "Jewelry";
      case "DevilfishRing":
        return "Jewelry";
      case "TreantAmulet":
        return "Jewelry";
      case "TreantHagoita":
        return "Weapon";
      case "TreantChoppingBoard":
        return "Armor";
      case "TreantDagger":
        return "Weapon";
      case "TreantHaniwa":
        return "Armor";
      case "TreantKokeshi":
        return "Jewelry";
      case "TreantLamp":
        return "Jewelry";
      case "TreantLunchbox":
        return "Jewelry";
      case "FlametigerPortableHotSpring":
        return "Jewelry";
      case "FlametigerVolcanicShield":
        return "Weapon";
      case "FlametigerStripedBriefs":
        return "Armor";
      case "TorchOfEverburningFlametiger":
        return "Weapon";
      case "FlametigerCostume":
        return "Armor";
      case "RingOfFlametigersWrath":
        return "Weapon";
      case "EndlessBowlOfSpicyFlametigerRamen":
        return "Jewelry";
      case "ScreenOfTheSneakyFlametiger":
        return "Jewelry";
      default:
        return "Weapon";
    }
  }

  private getEquipmentRarity(kind) {
    switch (kind) {
      case "Nothing":
        return "Common";
      case "DullSword":
        return "Common";
      case "BrittleStaff":
        return "Common";
      case "FlimsyWing":
        return "Common";
      case "WornDart":
        return "Common";
      case "SmallBow":
        return "Common";
      case "WoodenRecorder":
        return "Common";
      case "OldCloak":
        return "Common";
      case "BlueHat":
        return "Common";
      case "OrangeHat":
        return "Common";
      case "TShirt":
        return "Common";
      case "ClothGlove":
        return "Common";
      case "BlueTShirt":
        return "Common";
      case "OrangeTShirt":
        return "Common";
      case "ClothBelt":
        return "Common";
      case "ClothShoes":
        return "Common";
      case "IronRing":
        return "Common";
      case "PearlEarring":
        return "Common";
      case "FireBrooch":
        return "Common";
      case "IceBrooch":
        return "Common";
      case "ThunderBrooch":
        return "Common";
      case "LightBrooch":
        return "Common";
      case "DarkBrooch":
        return "Common";
      case "WoodenShield":
        return "Common";
      case "LongSword":
        return "Uncommon";
      case "LongStaff":
        return "Uncommon";
      case "WarmWing":
        return "Uncommon";
      case "DualDagger":
        return "Uncommon";
      case "ReinforcedBow":
        return "Uncommon";
      case "Flute":
        return "Uncommon";
      case "FireStaff":
        return "Uncommon";
      case "IceStaff":
        return "Uncommon";
      case "ThunderStaff":
        return "Uncommon";
      case "LeatherBelt":
        return "Uncommon";
      case "LeatherShoes":
        return "Uncommon";
      case "WarmCloak":
        return "Uncommon";
      case "LeatherArmor":
        return "Uncommon";
      case "LeatherGlove":
        return "Uncommon";
      case "LeatherShield":
        return "Uncommon";
      case "FireRing":
        return "Common";
      case "IceRing":
        return "Common";
      case "ThunderRing":
        return "Common";
      case "LightRing":
        return "Common";
      case "DarkRing":
        return "Common";
      case "EnhancedFireBrooch":
        return "Uncommon";
      case "EnhancedIceBrooch":
        return "Uncommon";
      case "EnhancedThunderBrooch":
        return "Uncommon";
      case "EnhancedLightBrooch":
        return "Uncommon";
      case "EnhancedDarkBrooch":
        return "Uncommon";
      case "BattleSword":
        return "Uncommon";
      case "BattleStaff":
        return "Uncommon";
      case "BattleWing":
        return "Uncommon";
      case "BattleDagger":
        return "Uncommon";
      case "BattleBow":
        return "Uncommon";
      case "BattleRecorder":
        return "Uncommon";
      case "SlimeSword":
        return "Rare";
      case "SlimeGlove":
        return "Rare";
      case "SlimeRing":
        return "Rare";
      case "SlimeBelt":
        return "Rare";
      case "SlimePincenez":
        return "Rare";
      case "SlimeWing":
        return "Rare";
      case "SlimePoncho":
        return "Rare";
      case "SlimeDart":
        return "Rare";
      case "MagicSlimeStick":
        return "Rare";
      case "MagicSlimeHat":
        return "Rare";
      case "MagicSlimeBow":
        return "Rare";
      case "MagicSlimeShoes":
        return "Rare";
      case "MagicSlimeRecorder":
        return "Rare";
      case "MagicSlimeEarring":
        return "Rare";
      case "MagicSlimeBalloon":
        return "Rare";
      case "MagicSlimeSkirt":
        return "Rare";
      case "SpiderHat":
        return "Rare";
      case "SpiderSkirt":
        return "Rare";
      case "SpiderSuit":
        return "Rare";
      case "SpiderDagger":
        return "Rare";
      case "SpiderWing":
        return "Rare";
      case "SpiderCatchingNet":
        return "Rare";
      case "SpiderStick":
        return "Rare";
      case "SpiderFoldingFan":
        return "Rare";
      case "BatRing":
        return "Rare";
      case "BatShoes":
        return "Rare";
      case "BatSword":
        return "Rare";
      case "BatHat":
        return "Rare";
      case "BatRecorder":
        return "Rare";
      case "BatBow":
        return "Rare";
      case "BatMascaradeMask":
        return "Rare";
      case "BatCloak":
        return "Rare";
      case "BronzeShoulder":
        return "Common";
      case "BattleRing":
        return "Common";
      case "Halo":
        return "Common";
      case "IronShoulder":
        return "Uncommon";
      case "StrengthRing":
        return "Uncommon";
      case "GoldenRing":
        return "Uncommon";
      case "GoldenFireRing":
        return "Uncommon";
      case "GoldenIceRing":
        return "Uncommon";
      case "GoldenThunderRing":
        return "Uncommon";
      case "GoldenLightRing":
        return "Uncommon";
      case "GoldenDarkRing":
        return "Uncommon";
      case "IronBelt":
        return "Uncommon";
      case "IronShoes":
        return "Uncommon";
      case "CopperArmor":
        return "Uncommon";
      case "IronGlove":
        return "Uncommon";
      case "TowerShield":
        return "Uncommon";
      case "FireTowerShield":
        return "Uncommon";
      case "IceTowerShield":
        return "Uncommon";
      case "ThunderTowerShield":
        return "Uncommon";
      case "LightTowerShield":
        return "Uncommon";
      case "DarkTowerShield":
        return "Uncommon";
      case "SavageRing":
        return "Uncommon";
      case "SpellboundFireBrooch":
        return "Uncommon";
      case "SpellboundIceBrooch":
        return "Uncommon";
      case "SpellboundThunderBrooch":
        return "Uncommon";
      case "SpellboundLightBrooch":
        return "Uncommon";
      case "SpellboundDarkBrooch":
        return "Uncommon";
      case "CopperHelm":
        return "Uncommon";
      case "BattleHelm":
        return "Uncommon";
      case "WizardHelm":
        return "Uncommon";
      case "LargeSword":
        return "Uncommon";
      case "LargeStaff":
        return "Uncommon";
      case "LargeWing":
        return "Uncommon";
      case "LargeDagger":
        return "Uncommon";
      case "LargeBow":
        return "Uncommon";
      case "LargeOcarina":
        return "Uncommon";
      case "FairyClothes":
        return "SuperRare";
      case "FairyStaff":
        return "SuperRare";
      case "FairyBoots":
        return "SuperRare";
      case "FairyGlove":
        return "SuperRare";
      case "FairyBrooch":
        return "SuperRare";
      case "FairyLamp":
        return "SuperRare";
      case "FairyWing":
        return "SuperRare";
      case "FairyShuriken":
        return "SuperRare";
      case "FoxKanzashi":
        return "SuperRare";
      case "FoxLoincloth":
        return "SuperRare";
      case "FoxMask":
        return "SuperRare";
      case "FoxHamayayumi":
        return "SuperRare";
      case "FoxHat":
        return "SuperRare";
      case "FoxCoat":
        return "SuperRare";
      case "FoxBoot":
        return "SuperRare";
      case "FoxEma":
        return "SuperRare";
      case "DevilfishSword":
        return "SuperRare";
      case "DevilfishWing":
        return "SuperRare";
      case "DevilfishRecorder":
        return "SuperRare";
      case "DevilfishArmor":
        return "SuperRare";
      case "DevilfishScarf":
        return "SuperRare";
      case "DevilfishGill":
        return "SuperRare";
      case "DevilfishPendant":
        return "SuperRare";
      case "DevilfishRing":
        return "SuperRare";
      case "TreantAmulet":
        return "SuperRare";
      case "TreantHagoita":
        return "SuperRare";
      case "TreantChoppingBoard":
        return "SuperRare";
      case "TreantDagger":
        return "SuperRare";
      case "TreantHaniwa":
        return "SuperRare";
      case "TreantKokeshi":
        return "SuperRare";
      case "TreantLamp":
        return "SuperRare";
      case "TreantLunchbox":
        return "SuperRare";
      case "FlametigerPortableHotSpring":
        return "Epic";
      case "FlametigerVolcanicShield":
        return "Epic";
      case "FlametigerStripedBriefs":
        return "Epic";
      case "TorchOfEverburningFlametiger":
        return "Epic";
      case "FlametigerCostume":
        return "Epic";
      case "RingOfFlametigersWrath":
        return "Epic";
      case "EndlessBowlOfSpicyFlametigerRamen":
        return "Epic";
      case "ScreenOfTheSneakyFlametiger":
        return "Epic";
      default:
        return "Common";
    }
  }

  private getEquipmentSetKind(kind) {
    switch (kind) {
      case "DullSword":
      case "BrittleStaff":
      case "FlimsyWing":
      case "WornDart":
      case "SmallBow":
      case "WoodenRecorder":
      case "OldCloak":
      case "BlueHat":
      case "OrangeHat":
      case "TShirt":
      case "ClothBelt":
      case "ClothShoes":
      case "ClothGlove":
      case "IronRing":
      case "PearlEarring":
      case "BlueTShirt":
      case "OrangeTShirt":
      case "WoodenShield":
      case "BronzeShoulder":
      case "BattleRing":
      case "FireBrooch":
      case "IceBrooch":
      case "ThunderBrooch":
      case "LightBrooch":
      case "DarkBrooch":
      case "FireRing":
      case "IceRing":
      case "ThunderRing":
      case "LightRing":
      case "DarkRing":
      case "Halo":
      case "LongSword":
      case "LongStaff":
      case "WarmWing":
      case "DualDagger":
      case "ReinforcedBow":
      case "Flute":
      case "LeatherBelt":
      case "LeatherShoes":
      case "WarmCloak":
      case "LeatherArmor":
      case "LeatherGlove":
      case "LeatherShield":
      case "IronShoulder":
      case "FireStaff":
      case "IceStaff":
      case "ThunderStaff":
      case "StrengthRing":
      case "EnhancedFireBrooch":
      case "EnhancedIceBrooch":
      case "EnhancedThunderBrooch":
      case "EnhancedLightBrooch":
      case "EnhancedDarkBrooch":
      case "CopperHelm":
      case "BattleHelm":
      case "WizardHelm":
      case "BattleSword":
      case "BattleStaff":
      case "BattleWing":
      case "BattleDagger":
      case "BattleBow":
      case "BattleRecorder":
      case "GoldenRing":
      case "GoldenFireRing":
      case "GoldenIceRing":
      case "GoldenThunderRing":
      case "GoldenLightRing":
      case "GoldenDarkRing":
      case "IronBelt":
      case "IronShoes":
      case "CopperArmor":
      case "IronGlove":
      case "TowerShield":
      case "FireTowerShield":
      case "IceTowerShield":
      case "ThunderTowerShield":
      case "LightTowerShield":
      case "DarkTowerShield":
      case "LargeSword":
      case "LargeStaff":
      case "LargeWing":
      case "LargeDagger":
      case "LargeBow":
      case "LargeOcarina":
      case "SavageRing":
      case "SpellboundFireBrooch":
      case "SpellboundIceBrooch":
      case "SpellboundThunderBrooch":
      case "SpellboundLightBrooch":
      case "SpellboundDarkBrooch":
        return "Nothing";
      case "SlimeSword":
      case "SlimeGlove":
      case "SlimeRing":
      case "SlimeBelt":
      case "SlimePincenez":
      case "SlimeWing":
      case "SlimePoncho":
      case "SlimeDart":
        return "Slime";
      case "MagicSlimeStick":
      case "MagicSlimeHat":
      case "MagicSlimeBow":
      case "MagicSlimeShoes":
      case "MagicSlimeRecorder":
      case "MagicSlimeEarring":
      case "MagicSlimeBalloon":
      case "MagicSlimeSkirt":
        return "Magicslime";
      case "SpiderHat":
      case "SpiderSkirt":
      case "SpiderSuit":
      case "SpiderDagger":
      case "SpiderWing":
      case "SpiderCatchingNet":
      case "SpiderStick":
      case "SpiderFoldingFan":
        return "Spider";
      case "BatRing":
      case "BatShoes":
      case "BatSword":
      case "BatHat":
      case "BatRecorder":
      case "BatBow":
      case "BatMascaradeMask":
      case "BatCloak":
        return "Bat";
      case "FairyClothes":
      case "FairyStaff":
      case "FairyBoots":
      case "FairyGlove":
      case "FairyBrooch":
      case "FairyLamp":
      case "FairyWing":
      case "FairyShuriken":
        return "Fairy";
      case "FoxKanzashi":
      case "FoxLoincloth":
      case "FoxMask":
      case "FoxHamayayumi":
      case "FoxHat":
      case "FoxCoat":
      case "FoxBoot":
      case "FoxEma":
        return "Fox";
      case "DevilfishSword":
      case "DevilfishWing":
      case "DevilfishRecorder":
      case "DevilfishArmor":
      case "DevilfishScarf":
      case "DevilfishGill":
      case "DevilfishPendant":
      case "DevilfishRing":
        return "Devilfish";
      case "TreantAmulet":
      case "TreantHagoita":
      case "TreantChoppingBoard":
      case "TreantDagger":
      case "TreantHaniwa":
      case "TreantKokeshi":
      case "TreantLamp":
      case "TreantLunchbox":
        return "Treant";
      case "FlametigerPortableHotSpring":
      case "FlametigerVolcanicShield":
      case "FlametigerStripedBriefs":
      case "TorchOfEverburningFlametiger":
      case "FlametigerCostume":
      case "RingOfFlametigersWrath":
      case "EndlessBowlOfSpicyFlametigerRamen":
      case "ScreenOfTheSneakyFlametiger":
        return "Flametiger";

      default:
        return "Nothing";
    }
  }

  private getEquipmentLevel(data: DataType, kind: EquipmentKind) {
    const dataList = [
      "equipmentLevelsWarrior",
      "equipmentLevelsWizard",
      "equipmentLevelsAngel",
      "equipmentLevelsThief",
      "equipmentLevelsArcher",
      "equipmentLevelsTamer",
    ];

    data.source.equipmentLevelsWarrior;
    let level = 0;
    for (let index = 0; index < dataList.length; index++) {
      level += data.source[dataList[index]][equipmentKind.indexOf(kind)];
    }
    return level;
  }

  private getMasteryEffect(rarity, part) {
    switch (rarity) {
      case "Common":
        switch (part) {
          case "Weapon":
            return [
              { baseValue: 0, kind: "ATKAdder", initValue: 15.0 },
              { baseValue: 0, kind: "MATKAdder", initValue: 15.0 },
              { baseValue: 0, kind: "AllSkillLevel", initValue: 1.0 },

              { baseValue: 0, kind: "SPDAdder", initValue: 20.0 },
              { baseValue: 0, kind: "TamingPoint", initValue: 0.05 },
            ];
          case "Armor":
            return [
              { baseValue: 0, kind: "HPAdder", initValue: 100.0 },
              { baseValue: 0, kind: "MPAdder", initValue: 50.0 },
              { baseValue: 0, kind: "HpRegen", initValue: 5.0 },

              { baseValue: 0, kind: "MpRegen", initValue: 20.0 },
              { baseValue: 0, kind: "LoyaltyPointGain", initValue: 0.05 },
            ];
          case "Jewelry":
            return [
              { baseValue: 0, kind: "StoneGain", initValue: 1.0 },
              { baseValue: 0, kind: "CrystalGain", initValue: 1.0 },
              { baseValue: 0, kind: "LeafGain", initValue: 1.0 },

              { baseValue: 0, kind: "TownMatAreaClearGain", initValue: 1.0 },
              { baseValue: 0, kind: "PetEXPGain", initValue: 0.05 },
            ];
          default:
            return;
        }
      case "Uncommon":
        switch (part) {
          case "Weapon":
            return [
              { baseValue: 0, kind: "ATKMultiplier", initValue: 0.05 },
              { baseValue: 0, kind: "MATKMultiplier", initValue: 0.05 },
              { baseValue: 0, kind: "SkillProficiency", initValue: 0.025 },

              { baseValue: 0, kind: "SPDAdder", initValue: 50.0 },
              { baseValue: 0, kind: "TamingPoint", initValue: 0.1 },
            ];
          case "Armor":
            return [
              { baseValue: 0, kind: "DEFAdder", initValue: 25.0 },
              { baseValue: 0, kind: "MDEFAdder", initValue: 25.0 },
              { baseValue: 0, kind: "GoldGain", initValue: 0.05 },

              { baseValue: 0, kind: "SPDAdder", initValue: 50.0 },
              { baseValue: 0, kind: "EquipmentProficiency", initValue: 0.025 },
            ];
          case "Jewelry":
            return [
              { baseValue: 0, kind: "HPMultiplier", initValue: 0.05 },
              { baseValue: 0, kind: "MPMultiplier", initValue: 0.05 },
              { baseValue: 0, kind: "EXPGain", initValue: 0.1 },

              { baseValue: 0, kind: "TownMatGain", initValue: 0.025 },
              { baseValue: 0, kind: "PetEXPGain", initValue: 0.1 },
            ];
          default:
            return;
        }
      case "Rare":
        switch (part) {
          case "Weapon":
            return [
              { baseValue: 0, kind: "ATKPropotion", initValue: 0.25 },
              { baseValue: 0, kind: "MATKPropotion", initValue: 0.25 },
              { baseValue: 0, kind: "SkillProficiency", initValue: 0.05 },

              { baseValue: 0, kind: "SPDAdder", initValue: 100.0 },
              { baseValue: 0, kind: "TamingPoint", initValue: 0.25 },
            ];
          case "Armor":
            return [
              { baseValue: 0, kind: "DEFMultiplier", initValue: 0.1 },
              { baseValue: 0, kind: "MDEFMultiplier", initValue: 0.1 },
              { baseValue: 0, kind: "HpRegen", initValue: 10.0 },

              { baseValue: 0, kind: "SPDAdder", initValue: 100.0 },
              { baseValue: 0, kind: "EquipmentProficiency", initValue: 0.05 },
            ];
          case "Jewelry":
            return [
              { baseValue: 0, kind: "HPMultiplier", initValue: 0.1 },
              { baseValue: 0, kind: "MPMultiplier", initValue: 0.1 },
              { baseValue: 0, kind: "RebirthPointGain1", initValue: 0.025 },

              { baseValue: 0, kind: "TownMatAreaClearGain", initValue: 2.0 },
              { baseValue: 0, kind: "LoyaltyPointGain", initValue: 0.2 },
            ];
          default:
            return;
        }
      case "SuperRare":
        switch (part) {
          case "Weapon":
            return [
              { baseValue: 0, kind: "ATKMultiplier", initValue: 0.2 },
              { baseValue: 0, kind: "MATKMultiplier", initValue: 0.2 },
              { baseValue: 0, kind: "CriticalDamage", initValue: 0.1 },

              { baseValue: 0, kind: "SPDAdder", initValue: 200.0 },
              { baseValue: 0, kind: "TamingPoint", initValue: 0.5 },
            ];
          case "Armor":
            return [
              { baseValue: 0, kind: "DEFPropotion", initValue: 0.25 },
              { baseValue: 0, kind: "MDEFPropotion", initValue: 0.25 },
              { baseValue: 0, kind: "GoldGain", initValue: 0.1 },

              { baseValue: 0, kind: "SPDAdder", initValue: 200.0 },
              { baseValue: 0, kind: "EquipmentProficiency", initValue: 0.1 },
            ];
          case "Jewelry":
            return [
              { baseValue: 0, kind: "EXPGain", initValue: 0.25 },
              { baseValue: 0, kind: "SkillProficiency", initValue: 0.1 },
              { baseValue: 0, kind: "RebirthPointGain2", initValue: 0.025 },

              { baseValue: 0, kind: "TownMatGain", initValue: 0.05 },
              { baseValue: 0, kind: "PetEXPGain", initValue: 0.25 },
            ];
          default:
            return;
        }
      case "Epic":
        switch (part) {
          case "Weapon":
            return [
              { baseValue: 0, kind: "StoneTownResearchPower", initValue: 0.05 },
              { baseValue: 0, kind: "CrystalTownResearchPower", initValue: 0.05 },
              { baseValue: 0, kind: "LeafTownResearchPower", initValue: 0.05 },

              { baseValue: 0, kind: "SPDMultiplier", initValue: 0.3 },
              { baseValue: 0, kind: "TamingPointMultiplier", initValue: 0.25 },
            ];
          case "Armor":
            return [
              { baseValue: 0, kind: "ArmoredFury", initValue: 0.05 },
              { baseValue: 0, kind: "WardedFury", initValue: 0.05 },
              { baseValue: 0, kind: "GoldGainMultiplier", initValue: 0.1 },

              { baseValue: 0, kind: "GuildEXPGain", initValue: 0.01 },
              { baseValue: 0, kind: "PetEXPGainMultiplier", initValue: 0.25 },
            ];
          case "Jewelry":
            return [
              { baseValue: 0, kind: "EXPGainMultiplier", initValue: 0.2 },
              { baseValue: 0, kind: "SkillProficiencyMultiplier", initValue: 0.2 },
              { baseValue: 0, kind: "RebirthPointGain3", initValue: 0.025 },

              { baseValue: 0, kind: "EquipmentProficiencyMultiplier", initValue: 0.1 },
              { baseValue: 0, kind: "LoyaltyPointGainMultiplier", initValue: 0.25 },
            ];
          default:
            return;
        }
      default:
        return [
          { baseValue: 0, kind: "HPAdder", initValue: 100.0 },
          { baseValue: 0, kind: "MPAdder", initValue: 50.0 },
          { baseValue: 0, kind: "GoldGain", initValue: 0.1 },

          { baseValue: 0, kind: "Nothing", initValue: 1.0 },
          { baseValue: 0, kind: "Nothing", initValue: 1.0 },
        ];
    }
  }

  private getEquipmentEffect(kind) {
    switch (kind) {
      case "Nothing":
        return [];
      case "DullSword":
        [
          { kind: "MPAdder", initValue: 5.0, baseValue: 1.0 },
          { kind: "ATKAdder", initValue: 4.0, baseValue: 1.0 },
        ];
      case "BrittleStaff":
        return [
          { kind: "MPAdder", initValue: 5.0, baseValue: 1.0 },
          { kind: "MATKAdder", initValue: 4.0, baseValue: 1.0 },
        ];
      case "FlimsyWing":
        return [
          { kind: "MPAdder", initValue: 5.0, baseValue: 1.0 },
          { kind: "ATKAdder", initValue: 2.0, baseValue: 0.5 },
          { kind: "MATKAdder", initValue: 2.0, baseValue: 0.5 },
        ];
      case "WornDart":
        return [
          { kind: "MPAdder", initValue: 2.5, baseValue: 0.5 },
          { kind: "ATKAdder", initValue: 4.0, baseValue: 1.0 },
          { kind: "StoneGain", initValue: 0.1, baseValue: 0.025 },
        ];
      case "SmallBow":
        return [
          { kind: "MPAdder", initValue: 2.5, baseValue: 0.5 },
          { kind: "MATKAdder", initValue: 4.0, baseValue: 1.0 },
          { kind: "CrystalGain", initValue: 0.1, baseValue: 0.025 },
        ];
      case "WoodenRecorder":
        return [
          { kind: "MPAdder", initValue: 2.5, baseValue: 0.5 },
          { kind: "ATKAdder", initValue: 2.0, baseValue: 0.5 },
          { kind: "MATKAdder", initValue: 2.0, baseValue: 0.5 },
          { kind: "LeafGain", initValue: 0.1, baseValue: 0.025 },
        ];
      case "OldCloak":
        return [
          { kind: "HPAdder", initValue: 10.0, baseValue: 10.0 },
          { kind: "MPAdder", initValue: 5.0, baseValue: 1.0 },
        ];
      case "BlueHat":
        return [{ kind: "DEFAdder", initValue: 1.0, baseValue: 1.0 }];
      case "OrangeHat":
        return [{ kind: "MDEFAdder", initValue: 1.0, baseValue: 1.0 }];
      case "TShirt":
        return [
          { kind: "HPAdder", initValue: 20.0, baseValue: 5.0 },
          { kind: "DEFAdder", initValue: 0.5, baseValue: 0.5 },
        ];
      case "ClothGlove":
        return [
          { kind: "DEFAdder", initValue: 2.5, baseValue: 0.5 },
          { kind: "PhysicalCritical", initValue: 0.005, baseValue: 0.00025 },
        ];
      case "BlueTShirt":
        return [{ kind: "MPAdder", initValue: 30.0, baseValue: 3.0 }];
      case "OrangeTShirt":
        return [{ kind: "HPAdder", initValue: 20.0, baseValue: 20.0 }];
      case "ClothBelt":
        return [{ kind: "DEFMultiplier", initValue: 0.01, baseValue: 0.001 }];
      case "ClothShoes":
        return [{ kind: "MoveSpeedAdder", initValue: 5.0, baseValue: 0.25 }];
      case "IronRing":
        return [
          { kind: "HPAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "MPAdder", initValue: 5.0, baseValue: 1.0 },
          { kind: "HPMultiplier", initValue: 0.01, baseValue: 0.001 },
        ];
      case "PearlEarring":
        return [
          { kind: "MPAdder", initValue: 20.0, baseValue: 4.0 },
          { kind: "MPMultiplier", initValue: 0.01, baseValue: 0.001 },
        ];
      case "FireBrooch":
        return [{ kind: "FireDamage", initValue: 0.1, baseValue: 1.0 / 400.0 }];
      case "IceBrooch":
        return [{ kind: "IceDamage", initValue: 0.1, baseValue: 1.0 / 400.0 }];
      case "ThunderBrooch":
        return [{ kind: "ThunderDamage", initValue: 0.1, baseValue: 1.0 / 400.0 }];
      case "LightBrooch":
        return [{ kind: "LightDamage", initValue: 0.1, baseValue: 1.0 / 400.0 }];
      case "DarkBrooch":
        return [{ kind: "DarkDamage", initValue: 0.1, baseValue: 1.0 / 400.0 }];
      case "WoodenShield":
        return [{ kind: "DEFAdder", initValue: 20.0, baseValue: 1.0 }];
      case "LongSword":
        return [
          { kind: "MPAdder", initValue: 10.0, baseValue: 2.0 },
          { kind: "ATKAdder", initValue: 10.0, baseValue: 1.0 },
          { kind: "WarriorSkillLevel", initValue: 2.0, baseValue: 0.1 },
        ];
      case "LongStaff":
        return [
          { kind: "MPAdder", initValue: 10.0, baseValue: 2.0 },
          { kind: "MATKAdder", initValue: 10.0, baseValue: 1.0 },
          { kind: "WizardSkillLevel", initValue: 2.0, baseValue: 0.1 },
        ];
      case "WarmWing":
        return [
          { kind: "MPAdder", initValue: 10.0, baseValue: 2.0 },
          { kind: "ATKAdder", initValue: 5.0, baseValue: 0.5 },
          { kind: "MATKAdder", initValue: 5.0, baseValue: 0.5 },
          { kind: "AngelSkillLevel", initValue: 2.0, baseValue: 0.1 },
        ];
      case "DualDagger":
        return [
          { kind: "MPAdder", initValue: 10.0, baseValue: 2.0 },
          { kind: "ATKAdder", initValue: 8.0, baseValue: 0.8 },
          { kind: "MATKAdder", initValue: 2.0, baseValue: 0.2 },
          { kind: "ThiefSkillLevel", initValue: 2.0, baseValue: 0.1 },
        ];
      case "ReinforcedBow":
        return [
          { kind: "MPAdder", initValue: 10.0, baseValue: 2.0 },
          { kind: "ATKAdder", initValue: 2.0, baseValue: 0.2 },
          { kind: "MATKAdder", initValue: 8.0, baseValue: 0.8 },
          { kind: "ArcherSkillLevel", initValue: 2.0, baseValue: 0.1 },
        ];
      case "Flute":
        return [
          { kind: "MPAdder", initValue: 10.0, baseValue: 2.0 },
          { kind: "ATKAdder", initValue: 5.0, baseValue: 0.5 },
          { kind: "MATKAdder", initValue: 5.0, baseValue: 0.5 },
          { kind: "TamerSkillLevel", initValue: 2.0, baseValue: 0.1 },
        ];
      case "FireStaff":
        return [
          { kind: "MPAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "MATKAdder", initValue: 10.0, baseValue: 1.0 },
          { kind: "FireDamage", initValue: 0.1, baseValue: 0.005 },
        ];
      case "IceStaff":
        return [
          { kind: "MPAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "MATKAdder", initValue: 10.0, baseValue: 1.0 },
          { kind: "IceDamage", initValue: 0.1, baseValue: 0.005 },
        ];
      case "ThunderStaff":
        return [
          { kind: "MPAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "MATKAdder", initValue: 10.0, baseValue: 1.0 },
          { kind: "ThunderDamage", initValue: 0.1, baseValue: 0.005 },
        ];
      case "LeatherBelt":
        return [
          { kind: "DEFAdder", initValue: 10.0, baseValue: 1.0 },
          { kind: "MDEFMultiplier", initValue: 0.01, baseValue: 0.001 },
        ];
      case "LeatherShoes":
        return [
          { kind: "SPDAdder", initValue: 10.0, baseValue: 0.5 },
          { kind: "MoveSpeedAdder", initValue: 10.0, baseValue: 0.5 },
        ];
      case "WarmCloak":
        return [
          { kind: "HPAdder", initValue: 100.0, baseValue: 25.0 },
          { kind: "MPAdder", initValue: 25.0, baseValue: 5.0 },
        ];
      case "LeatherArmor":
        return [
          { kind: "DEFAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "MDEFAdder", initValue: 20.0, baseValue: 2.0 },
        ];
      case "LeatherGlove":
        return [
          { kind: "MDEFAdder", initValue: 5.0, baseValue: 0.5 },
          { kind: "MagicalCritical", initValue: 0.005, baseValue: 0.0005 },
        ];
      case "LeatherShield":
        return [
          { kind: "DEFAdder", initValue: 20.0, baseValue: 1.0 },
          { kind: "PhysicalAbsorption", initValue: 0.01, baseValue: 0.0005 },
        ];
      case "FireRing":
        return [
          { kind: "MPAdder", initValue: 5.0, baseValue: 1.0 },
          { kind: "FireResistance", initValue: 0.05, baseValue: 1.0 / 400.0 },
        ];
      case "IceRing":
        return [
          { kind: "MPAdder", initValue: 5.0, baseValue: 1.0 },
          { kind: "IceResistance", initValue: 0.05, baseValue: 1.0 / 400.0 },
        ];
      case "ThunderRing":
        return [
          { kind: "MPAdder", initValue: 5.0, baseValue: 1.0 },
          { kind: "ThunderResistance", initValue: 0.05, baseValue: 1.0 / 400.0 },
        ];
      case "LightRing":
        return [
          { kind: "MPAdder", initValue: 5.0, baseValue: 1.0 },
          { kind: "LightResistance", initValue: 0.05, baseValue: 1.0 / 400.0 },
        ];
      case "DarkRing":
        return [
          { kind: "MPAdder", initValue: 5.0, baseValue: 1.0 },
          { kind: "DarkResistance", initValue: 0.05, baseValue: 1.0 / 400.0 },
        ];
      case "EnhancedFireBrooch":
        return [{ kind: "FireDamage", initValue: 0.15, baseValue: 0.005 }];
      case "EnhancedIceBrooch":
        return [{ kind: "IceDamage", initValue: 0.15, baseValue: 0.005 }];
      case "EnhancedThunderBrooch":
        return [{ kind: "ThunderDamage", initValue: 0.15, baseValue: 0.005 }];
      case "EnhancedLightBrooch":
        return [{ kind: "LightDamage", initValue: 0.15, baseValue: 0.005 }];
      case "EnhancedDarkBrooch":
        return [{ kind: "DarkDamage", initValue: 0.15, baseValue: 0.005 }];
      case "BattleSword":
        return [
          { kind: "ATKAdder", initValue: 20.0, baseValue: 1.0 },
          { kind: "ATKMultiplier", initValue: 0.01, baseValue: 0.0005 },
          { kind: "ATKPropotion", initValue: 0.1, baseValue: 0.005 },
        ];
      case "BattleStaff":
        return [
          { kind: "MATKAdder", initValue: 20.0, baseValue: 1.0 },
          { kind: "MATKMultiplier", initValue: 0.01, baseValue: 0.0005 },
          { kind: "MATKPropotion", initValue: 0.1, baseValue: 0.005 },
        ];
      case "BattleWing":
        return [
          { kind: "ATKAdder", initValue: 10.0, baseValue: 0.5 },
          { kind: "ATKMultiplier", initValue: 0.005, baseValue: 0.00025 },
          { kind: "ATKPropotion", initValue: 0.05, baseValue: 1.0 / 400.0 },
          { kind: "MATKAdder", initValue: 10.0, baseValue: 0.5 },
          { kind: "MATKMultiplier", initValue: 0.005, baseValue: 0.00025 },
          { kind: "MATKPropotion", initValue: 0.05, baseValue: 1.0 / 400.0 },
        ];
      case "BattleDagger":
        return [
          { kind: "ATKAdder", initValue: 15.0, baseValue: 1.5 },
          { kind: "MATKAdder", initValue: 5.0, baseValue: 0.5 },
          { kind: "PhysicalCritical", initValue: 0.05, baseValue: 0.0005 },
        ];
      case "BattleBow":
        return [
          { kind: "ATKAdder", initValue: 5.0, baseValue: 0.5 },
          { kind: "MATKAdder", initValue: 15.0, baseValue: 1.5 },
          { kind: "MagicalCritical", initValue: 0.05, baseValue: 0.0005 },
        ];
      case "BattleRecorder":
        return [
          { kind: "ATKAdder", initValue: 10.0, baseValue: 1.0 },
          { kind: "MATKAdder", initValue: 10.0, baseValue: 1.0 },
          { kind: "PhysicalCritical", initValue: 0.025, baseValue: 0.00025 },
          { kind: "MagicalCritical", initValue: 0.025, baseValue: 0.00025 },
        ];
      case "SlimeSword":
        return [
          { kind: "ATKAdder", initValue: 15.0, baseValue: 2.0 },
          { kind: "ATKMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "SlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SlimeGlove":
        return [
          { kind: "SPDAdder", initValue: 20.0, baseValue: 1.0 },
          { kind: "SkillProficiency", initValue: 0.05, baseValue: 1.0 / 400.0 },
          { kind: "SlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SlimeRing":
        return [
          { kind: "StoneGain", initValue: 0.5, baseValue: 0.1 },
          { kind: "CrystalGain", initValue: 0.5, baseValue: 0.1 },
          { kind: "LeafGain", initValue: 0.5, baseValue: 0.1 },
          { kind: "SlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SlimeBelt":
        return [
          { kind: "DEFAdder", initValue: 5.0, baseValue: 1.0 },
          { kind: "DebuffResistance", initValue: 0.1, baseValue: 0.001 },
          { kind: "SlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SlimePincenez":
        return [
          { kind: "EXPGain", initValue: 0.05, baseValue: 1.0 / 400.0 },
          { kind: "SlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SlimeWing":
        return [
          { kind: "ATKMultiplier", initValue: 0.005, baseValue: 0.0005 },
          { kind: "MATKMultiplier", initValue: 0.005, baseValue: 0.0005 },
          { kind: "LightDamage", initValue: 0.2, baseValue: 0.02 },
          { kind: "AngelSkillLevel", initValue: 5.0, baseValue: 0.2 },
          { kind: "SlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SlimePoncho":
        return [
          { kind: "HPAdder", initValue: 100.0, baseValue: 20.0 },
          { kind: "HPMultiplier", initValue: 0.05, baseValue: 0.001 },
          { kind: "SlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SlimeDart":
        return [
          { kind: "PhysicalDamage", initValue: 0.2, baseValue: 0.005 },
          { kind: "DarkDamage", initValue: 0.2, baseValue: 0.005 },
          { kind: "StoneGain", initValue: 1.0, baseValue: 0.2 },
          { kind: "SlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "MagicSlimeStick":
        return [
          { kind: "MATKAdder", initValue: 15.0, baseValue: 2.0 },
          { kind: "MATKMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "MagicSlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "MagicSlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "MagicSlimeHat":
        return [
          { kind: "MDEFAdder", initValue: 10.0, baseValue: 2.0 },
          { kind: "MDEFMultiplier", initValue: 0.025, baseValue: 1.0 / 400.0 },
          { kind: "MagicSlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "MagicSlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "MagicSlimeBow":
        return [
          { kind: "MATKAdder", initValue: 10.0, baseValue: 1.0 },
          { kind: "FireDamage", initValue: 0.1, baseValue: 0.01 },
          { kind: "IceDamage", initValue: 0.1, baseValue: 0.01 },
          { kind: "ThunderDamage", initValue: 0.1, baseValue: 0.01 },
          { kind: "CrystalGain", initValue: 1.0, baseValue: 0.2 },
          { kind: "MagicSlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "MagicSlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "MagicSlimeShoes":
        return [
          { kind: "FireResistance", initValue: 0.1, baseValue: 1.0 / 400.0 },
          { kind: "IceResistance", initValue: 0.1, baseValue: 1.0 / 400.0 },
          { kind: "ThunderResistance", initValue: 0.1, baseValue: 1.0 / 400.0 },
          { kind: "MagicSlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "MagicSlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "MagicSlimeRecorder":
        return [
          { kind: "LeafGain", initValue: 1.0, baseValue: 0.2 },
          { kind: "TamerSkillLevel", initValue: 5.0, baseValue: 0.2 },
          { kind: "MagicSlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "MagicSlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "MagicSlimeEarring":
        return [
          { kind: "GoldGain", initValue: 0.1, baseValue: 0.005 },
          { kind: "MagicSlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "MagicSlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "MagicSlimeBalloon":
        return [
          { kind: "ColorMaterialDropChance", initValue: 0.00015, baseValue: 1e-6 },
          { kind: "MagicSlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "MagicSlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "MagicSlimeSkirt":
        return [
          { kind: "MPAdder", initValue: 200.0, baseValue: 20.0 },
          { kind: "MPMultiplier", initValue: 0.05, baseValue: 1.0 / 400.0 },
          { kind: "MagicSlimeKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "MagicSlimeDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SpiderHat":
        return [
          { kind: "HPAdder", initValue: 500.0, baseValue: 20.0 },
          { kind: "DEFMultiplier", initValue: 0.025, baseValue: 1.0 / 400.0 },
          { kind: "DEFPropotion", initValue: 0.1, baseValue: 0.01 },
          { kind: "SpiderKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SpiderDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SpiderSkirt":
        return [
          { kind: "DarkResistance", initValue: 0.1, baseValue: 1.0 / 400.0 },
          { kind: "DarkAbsorption", initValue: 0.025, baseValue: 0.0005 },
          { kind: "SpiderKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SpiderDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SpiderSuit":
        return [
          { kind: "HPAdder", initValue: 500.0, baseValue: 20.0 },
          { kind: "MDEFMultiplier", initValue: 0.025, baseValue: 1.0 / 400.0 },
          { kind: "MDEFPropotion", initValue: 0.1, baseValue: 0.01 },
          { kind: "SpiderKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SpiderDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SpiderDagger":
        return [
          { kind: "MATKAdder", initValue: 30.0, baseValue: 3.0 },
          { kind: "DarkDamage", initValue: 0.2, baseValue: 0.01 },
          { kind: "ThiefSkillLevel", initValue: 5.0, baseValue: 0.2 },
          { kind: "SpiderKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SpiderDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SpiderWing":
        return [
          { kind: "PhysicalCritical", initValue: 0.025, baseValue: 1.0 / 400.0 },
          { kind: "MagicalCritical", initValue: 0.025, baseValue: 1.0 / 400.0 },
          { kind: "PhysicalDamage", initValue: 0.2, baseValue: 0.01 },
          { kind: "LightDamage", initValue: 0.2, baseValue: 0.01 },
          { kind: "SpiderKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SpiderDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SpiderCatchingNet":
        return [
          { kind: "TamingPoint", initValue: 0.5, baseValue: 0.01 },
          { kind: "SpiderKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SpiderDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SpiderStick":
        return [
          { kind: "TamingPoint", initValue: 0.25, baseValue: 0.005 },
          { kind: "ColorMaterialDropChance", initValue: 0.0001, baseValue: 1e-6 },
          { kind: "WizardSkillLevel", initValue: 5.0, baseValue: 0.2 },
          { kind: "SpiderKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SpiderDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "SpiderFoldingFan":
        return [
          { kind: "SkillProficiency", initValue: 0.05, baseValue: 1.0 / 400.0 },
          { kind: "GoldGain", initValue: 0.1, baseValue: 0.01 },
          { kind: "SpiderKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "SpiderDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "BatRing":
        return [
          { kind: "SPDAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "DebuffResistance", initValue: 0.1, baseValue: 0.001 },
          { kind: "StoneGain", initValue: 1.0, baseValue: 0.2 },
          { kind: "CrystalGain", initValue: 1.0, baseValue: 0.2 },
          { kind: "LeafGain", initValue: 1.0, baseValue: 0.2 },
          { kind: "BatKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "BatDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "BatShoes":
        return [
          { kind: "SPDAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "MoveSpeedAdder", initValue: 20.0, baseValue: 1.0 },
          { kind: "BatKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "BatDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "BatSword":
        return [
          { kind: "SPDAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "ATKAdder", initValue: 50.0, baseValue: 5.0 },
          { kind: "ATKMultiplier", initValue: 0.05, baseValue: 0.005 },
          { kind: "WarriorSkillLevel", initValue: 5.0, baseValue: 0.2 },
          { kind: "BatKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "BatDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "BatHat":
        return [
          { kind: "SPDAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "FireAbsorption", initValue: 0.025, baseValue: 0.0005 },
          { kind: "IceAbsorption", initValue: 0.025, baseValue: 0.0005 },
          { kind: "ThunderAbsorption", initValue: 0.025, baseValue: 0.0005 },
          { kind: "LightAbsorption", initValue: 0.025, baseValue: 0.0005 },
          { kind: "DarkAbsorption", initValue: 0.025, baseValue: 0.0005 },
          { kind: "BatKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "BatDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "BatRecorder":
        return [
          { kind: "SPDAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "TamerSkillLevel", initValue: 10.0, baseValue: 0.25 },
          { kind: "TamingPoint", initValue: 0.1, baseValue: 0.01 },
          { kind: "BatKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "BatDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "BatBow":
        return [
          { kind: "SPDAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "ATKPropotion", initValue: 0.2, baseValue: 0.02 },
          { kind: "ArcherSkillLevel", initValue: 5.0, baseValue: 0.2 },
          { kind: "BatKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "BatDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "BatMascaradeMask":
        return [
          { kind: "SPDAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "EXPGain", initValue: 0.2, baseValue: 0.01 },
          { kind: "BatKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "BatDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "BatCloak":
        return [
          { kind: "SPDAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "PhysicalAbsorption", initValue: 0.025, baseValue: 0.0005 },
          { kind: "MPAdder", initValue: 200.0, baseValue: 20.0 },
          { kind: "MPMultiplier", initValue: 0.05, baseValue: 0.005 },
          { kind: "BatKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "BatDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "BronzeShoulder":
        return [{ kind: "MDEFAdder", initValue: 20.0, baseValue: 1.0 }];
      case "BattleRing":
        return [{ kind: "PhysicalDamage", initValue: 0.1, baseValue: 1.0 / 400.0 }];
      case "Halo":
        return [{ kind: "HpRegen", initValue: 5.0, baseValue: 0.25 }];
      case "IronShoulder":
        return [
          { kind: "MPAdder", initValue: 25.0, baseValue: 5.0 },
          { kind: "MDEFAdder", initValue: 25.0, baseValue: 1.0 },
        ];
      case "StrengthRing":
        return [{ kind: "PhysicalDamage", initValue: 0.15, baseValue: 0.005 }];
      case "GoldenRing":
        return [
          { kind: "HPMultiplier", initValue: 0.02, baseValue: 0.002 },
          { kind: "MPMultiplier", initValue: 0.02, baseValue: 0.002 },
        ];
      case "GoldenFireRing":
        return [
          { kind: "MPMultiplier", initValue: 0.02, baseValue: 0.002 },
          { kind: "FireResistance", initValue: 0.1, baseValue: 1.0 / 400.0 },
        ];
      case "GoldenIceRing":
        return [
          { kind: "MPMultiplier", initValue: 0.02, baseValue: 0.002 },
          { kind: "IceResistance", initValue: 0.1, baseValue: 1.0 / 400.0 },
        ];
      case "GoldenThunderRing":
        return [
          { kind: "MPMultiplier", initValue: 0.02, baseValue: 0.002 },
          { kind: "ThunderResistance", initValue: 0.1, baseValue: 1.0 / 400.0 },
        ];
      case "GoldenLightRing":
        return [
          { kind: "MPMultiplier", initValue: 0.02, baseValue: 0.002 },
          { kind: "LightResistance", initValue: 0.1, baseValue: 1.0 / 400.0 },
        ];
      case "GoldenDarkRing":
        return [
          { kind: "MPMultiplier", initValue: 0.02, baseValue: 0.002 },
          { kind: "DarkResistance", initValue: 0.1, baseValue: 1.0 / 400.0 },
        ];
      case "IronBelt":
        return [
          { kind: "DEFAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "DEFMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "DEFPropotion", initValue: 0.1, baseValue: 0.01 },
        ];
      case "IronShoes":
        return [
          { kind: "SPDAdder", initValue: 20.0, baseValue: 1.0 },
          { kind: "MoveSpeedAdder", initValue: 20.0, baseValue: 0.5 },
        ];
      case "CopperArmor":
        return [
          { kind: "DEFAdder", initValue: 40.0, baseValue: 4.0 },
          { kind: "MDEFAdder", initValue: 40.0, baseValue: 4.0 },
        ];
      case "IronGlove":
        return [
          { kind: "MDEFAdder", initValue: 20.0, baseValue: 2.0 },
          { kind: "MDEFMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "MDEFPropotion", initValue: 0.1, baseValue: 0.01 },
        ];
      case "TowerShield":
        return [
          { kind: "DEFAdder", initValue: 40.0, baseValue: 2.0 },
          { kind: "DEFMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "PhysicalAbsorption", initValue: 0.02, baseValue: 0.001 },
        ];
      case "FireTowerShield":
        return [
          { kind: "MDEFAdder", initValue: 40.0, baseValue: 2.0 },
          { kind: "MDEFMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "FireAbsorption", initValue: 0.02, baseValue: 0.001 },
        ];
      case "IceTowerShield":
        return [
          { kind: "MDEFAdder", initValue: 40.0, baseValue: 2.0 },
          { kind: "MDEFMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "IceAbsorption", initValue: 0.02, baseValue: 0.001 },
        ];
      case "ThunderTowerShield":
        return [
          { kind: "MDEFAdder", initValue: 40.0, baseValue: 2.0 },
          { kind: "MDEFMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "ThunderAbsorption", initValue: 0.02, baseValue: 0.001 },
        ];
      case "LightTowerShield":
        return [
          { kind: "MDEFAdder", initValue: 40.0, baseValue: 2.0 },
          { kind: "MDEFMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "LightAbsorption", initValue: 0.02, baseValue: 0.001 },
        ];
      case "DarkTowerShield":
        return [
          { kind: "MDEFAdder", initValue: 40.0, baseValue: 2.0 },
          { kind: "MDEFMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "DarkAbsorption", initValue: 0.02, baseValue: 0.001 },
        ];
      case "SavageRing":
        return [{ kind: "PhysicalDamage", initValue: 0.2, baseValue: 3.0 / 400.0 }];
      case "SpellboundFireBrooch":
        return [{ kind: "FireDamage", initValue: 0.2, baseValue: 3.0 / 400.0 }];
      case "SpellboundIceBrooch":
        return [{ kind: "IceDamage", initValue: 0.2, baseValue: 3.0 / 400.0 }];
      case "SpellboundThunderBrooch":
        return [{ kind: "ThunderDamage", initValue: 0.2, baseValue: 3.0 / 400.0 }];
      case "SpellboundLightBrooch":
        return [{ kind: "LightDamage", initValue: 0.2, baseValue: 3.0 / 400.0 }];
      case "SpellboundDarkBrooch":
        return [{ kind: "DarkDamage", initValue: 0.2, baseValue: 3.0 / 400.0 }];
      case "CopperHelm":
        return [
          { kind: "HPAdder", initValue: 250.0, baseValue: 10.0 },
          { kind: "HPMultiplier", initValue: 0.01, baseValue: 0.001 },
        ];
      case "BattleHelm":
        return [
          { kind: "ATKAdder", initValue: 10.0, baseValue: 1.0 },
          { kind: "PhysicalDamage", initValue: 0.025, baseValue: 1.0 / 400.0 },
        ];
      case "WizardHelm":
        return [
          { kind: "MATKAdder", initValue: 10.0, baseValue: 1.0 },
          { kind: "FireDamage", initValue: 0.025, baseValue: 1.0 / 400.0 },
          { kind: "IceDamage", initValue: 0.025, baseValue: 1.0 / 400.0 },
          { kind: "ThunderDamage", initValue: 0.025, baseValue: 1.0 / 400.0 },
          { kind: "LightDamage", initValue: 0.025, baseValue: 1.0 / 400.0 },
          { kind: "DarkDamage", initValue: 0.025, baseValue: 1.0 / 400.0 },
        ];
      case "LargeSword":
        return [
          { kind: "ATKAdder", initValue: 30.0, baseValue: 3.0 },
          { kind: "ATKPropotion", initValue: 0.25, baseValue: 0.01 },
          { kind: "WarriorSkillLevel", initValue: 5.0, baseValue: 0.1 },
          { kind: "StoneGain", initValue: 1.0, baseValue: 0.2 },
        ];
      case "LargeStaff":
        return [
          { kind: "MATKAdder", initValue: 30.0, baseValue: 3.0 },
          { kind: "MATKPropotion", initValue: 0.25, baseValue: 0.01 },
          { kind: "WizardSkillLevel", initValue: 5.0, baseValue: 0.1 },
          { kind: "CrystalGain", initValue: 1.0, baseValue: 0.2 },
        ];
      case "LargeWing":
        return [
          { kind: "PhysicalDamage", initValue: 0.2, baseValue: 0.005 },
          { kind: "LightDamage", initValue: 0.2, baseValue: 0.005 },
          { kind: "AngelSkillLevel", initValue: 5.0, baseValue: 0.1 },
          { kind: "LeafGain", initValue: 1.0, baseValue: 0.2 },
        ];
      case "LargeDagger":
        return [
          { kind: "PhysicalDamage", initValue: 0.2, baseValue: 0.005 },
          { kind: "DarkDamage", initValue: 0.2, baseValue: 0.005 },
          { kind: "ThiefSkillLevel", initValue: 5.0, baseValue: 0.1 },
          { kind: "StoneGain", initValue: 1.0, baseValue: 0.2 },
        ];
      case "LargeBow":
        return [
          { kind: "FireDamage", initValue: 0.2, baseValue: 0.005 },
          { kind: "IceDamage", initValue: 0.2, baseValue: 0.005 },
          { kind: "ThunderDamage", initValue: 0.2, baseValue: 0.005 },
          { kind: "ArcherSkillLevel", initValue: 5.0, baseValue: 0.1 },
          { kind: "CrystalGain", initValue: 1.0, baseValue: 0.2 },
        ];
      case "LargeOcarina":
        return [
          { kind: "TamingPoint", initValue: 0.1, baseValue: 0.005 },
          { kind: "TamerSkillLevel", initValue: 5.0, baseValue: 0.1 },
          { kind: "LeafGain", initValue: 1.0, baseValue: 0.2 },
        ];
      case "FairyClothes":
        return [
          { kind: "MPAdder", initValue: 100.0, baseValue: 10.0 },
          { kind: "TownMatGain", initValue: 0.05, baseValue: 1.0 / 400.0 },
          { kind: "FairyKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FairyDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FairyStaff":
        return [
          { kind: "MPAdder", initValue: 100.0, baseValue: 10.0 },
          { kind: "CrystalGain", initValue: 2.0, baseValue: 0.2 },
          { kind: "MATKMultiplier", initValue: 0.1, baseValue: 0.01 },
          { kind: "MATKPropotion", initValue: 0.5, baseValue: 0.02 },
          { kind: "FairyKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FairyDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FairyBoots":
        return [
          { kind: "MPAdder", initValue: 100.0, baseValue: 10.0 },
          { kind: "MoveSpeedAdder", initValue: 20.0, baseValue: 1.0 },
          { kind: "LightResistance", initValue: 0.1, baseValue: 1.0 / 400.0 },
          { kind: "LightAbsorption", initValue: 0.025, baseValue: 0.0005 },
          { kind: "FairyKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FairyDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FairyGlove":
        return [
          { kind: "MPAdder", initValue: 100.0, baseValue: 10.0 },
          { kind: "SkillProficiency", initValue: 0.15, baseValue: 0.005 },
          { kind: "FairyKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FairyDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FairyBrooch":
        return [
          { kind: "MPAdder", initValue: 100.0, baseValue: 10.0 },
          { kind: "EXPGain", initValue: 0.3, baseValue: 0.015 },
          { kind: "FairyKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FairyDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FairyLamp":
        return [
          { kind: "MPAdder", initValue: 100.0, baseValue: 10.0 },
          { kind: "TownMatAreaClearGain", initValue: 2.0, baseValue: 0.1 },
          { kind: "FairyKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FairyDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FairyWing":
        return [
          { kind: "MPAdder", initValue: 100.0, baseValue: 10.0 },
          { kind: "LeafGain", initValue: 2.0, baseValue: 0.2 },
          { kind: "ATKMultiplier", initValue: 0.05, baseValue: 0.005 },
          { kind: "ATKPropotion", initValue: 0.25, baseValue: 0.01 },
          { kind: "MATKMultiplier", initValue: 0.05, baseValue: 0.005 },
          { kind: "MATKPropotion", initValue: 0.25, baseValue: 0.01 },
          { kind: "FairyKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FairyDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FairyShuriken":
        return [
          { kind: "MPAdder", initValue: 100.0, baseValue: 10.0 },
          { kind: "StoneGain", initValue: 2.0, baseValue: 0.2 },
          { kind: "ATKMultiplier", initValue: 0.1, baseValue: 0.01 },
          { kind: "ATKPropotion", initValue: 0.5, baseValue: 0.02 },
          { kind: "FairyKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FairyDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FoxKanzashi":
        return [
          { kind: "GoldGain", initValue: 0.05, baseValue: 0.005 },
          { kind: "BlessingEffect", initValue: 0.1, baseValue: 1.0 / 400.0 },
          { kind: "FoxKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FoxDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FoxLoincloth":
        return [
          { kind: "GoldGain", initValue: 0.05, baseValue: 0.005 },
          { kind: "EXPGain", initValue: 0.5, baseValue: 0.025 },
          { kind: "DEFMultiplier", initValue: -0.2, baseValue: 0.002 },
          { kind: "MDEFMultiplier", initValue: -0.2, baseValue: 0.002 },
          { kind: "FoxKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FoxDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FoxMask":
        return [
          { kind: "GoldGain", initValue: 0.05, baseValue: 0.005 },
          { kind: "MPMultiplier", initValue: 0.05, baseValue: 0.005 },
          { kind: "MpRegen", initValue: 100.0, baseValue: 10.0 },
          { kind: "PhysicalAbsorption", initValue: 0.02, baseValue: 0.0001 },
          { kind: "FoxKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FoxDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FoxHamayayumi":
        return [
          { kind: "GoldGain", initValue: 0.05, baseValue: 0.005 },
          { kind: "CriticalDamage", initValue: 0.2, baseValue: 0.005 },
          { kind: "ArcherSkillLevel", initValue: 5.0, baseValue: 0.2 },
          { kind: "DebuffResistance", initValue: 0.05, baseValue: 0.0005 },
          { kind: "FoxKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FoxDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FoxHat":
        return [
          { kind: "GoldGain", initValue: 0.05, baseValue: 0.005 },
          { kind: "HPAdder", initValue: 500.0, baseValue: 20.0 },
          { kind: "HPMultiplier", initValue: 0.05, baseValue: 0.001 },
          { kind: "HpRegen", initValue: 10.0, baseValue: 1.0 },
          { kind: "FoxKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FoxDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FoxCoat":
        return [
          { kind: "GoldGain", initValue: 0.05, baseValue: 0.005 },
          { kind: "IceResistance", initValue: 0.15, baseValue: 1.0 / 400.0 },
          { kind: "ThunderResistance", initValue: 0.15, baseValue: 1.0 / 400.0 },
          { kind: "LightResistance", initValue: 0.15, baseValue: 1.0 / 400.0 },
          { kind: "ThunderAbsorption", initValue: 0.025, baseValue: 0.0005 },
          { kind: "FoxKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FoxDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FoxBoot":
        return [
          { kind: "GoldGain", initValue: 0.05, baseValue: 0.005 },
          { kind: "MoveSpeedMultiplier", initValue: -0.2, baseValue: 0.002 },
          { kind: "MATKPropotion", initValue: 0.5, baseValue: 0.02 },
          { kind: "ThunderDamage", initValue: 0.25, baseValue: 0.005 },
          { kind: "LightDamage", initValue: 0.25, baseValue: 0.005 },
          { kind: "FoxKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FoxDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FoxEma":
        return [
          { kind: "GoldGain", initValue: 0.05, baseValue: 0.005 },
          { kind: "BlessingEffect", initValue: 0.05, baseValue: 1.0 / 400.0 },
          { kind: "EquipmentDropChance", initValue: 0.0001, baseValue: 5e-6 },
          { kind: "FoxKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FoxDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "DevilfishSword":
        return [
          { kind: "HPAdder", initValue: 200.0, baseValue: 20.0 },
          { kind: "ATKMultiplier", initValue: -0.2, baseValue: 0.002 },
          { kind: "MATKMultiplier", initValue: -0.2, baseValue: 0.002 },
          { kind: "PhysicalCritical", initValue: 0.25, baseValue: 0.005 },
          { kind: "MagicalCritical", initValue: 0.25, baseValue: 0.005 },
          { kind: "CriticalDamage", initValue: 0.1, baseValue: 0.005 },
          { kind: "WarriorSkillLevel", initValue: 5.0, baseValue: 0.2 },
          { kind: "DevilFishKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "DevilFishDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "DevilfishWing":
        return [
          { kind: "HPAdder", initValue: 200.0, baseValue: 20.0 },
          { kind: "HPMultiplier", initValue: 0.025, baseValue: 0.001 },
          { kind: "ATKMultiplier", initValue: 0.05, baseValue: 0.005 },
          { kind: "MATKMultiplier", initValue: 0.05, baseValue: 0.005 },
          { kind: "FireResistance", initValue: 0.15, baseValue: 1.0 / 400.0 },
          { kind: "AngelSkillLevel", initValue: 5.0, baseValue: 0.2 },
          { kind: "DevilFishKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "DevilFishDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "DevilfishRecorder":
        return [
          { kind: "HPAdder", initValue: 200.0, baseValue: 20.0 },
          { kind: "MATKPropotion", initValue: 0.5, baseValue: 0.02 },
          { kind: "IceDamage", initValue: 0.25, baseValue: 0.005 },
          { kind: "DarkDamage", initValue: 0.25, baseValue: 0.005 },
          { kind: "MPMultiplier", initValue: -0.2, baseValue: 0.002 },
          { kind: "TamerSkillLevel", initValue: 5.0, baseValue: 0.2 },
          { kind: "DevilFishKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "DevilFishDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "DevilfishArmor":
        return [
          { kind: "HPAdder", initValue: 200.0, baseValue: 20.0 },
          { kind: "DEFAdder", initValue: 50.0, baseValue: 5.0 },
          { kind: "MDEFAdder", initValue: 50.0, baseValue: 5.0 },
          { kind: "HPMultiplier", initValue: 0.025, baseValue: 0.001 },
          { kind: "FireResistance", initValue: 0.15, baseValue: 1.0 / 400.0 },
          { kind: "DarkResistance", initValue: 0.15, baseValue: 1.0 / 400.0 },
          { kind: "DevilFishKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "DevilFishDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "DevilfishScarf":
        return [
          { kind: "HPAdder", initValue: 200.0, baseValue: 20.0 },
          { kind: "DEFMultiplier", initValue: 0.025, baseValue: 1.0 / 400.0 },
          { kind: "DEFPropotion", initValue: 0.1, baseValue: 0.01 },
          { kind: "MDEFMultiplier", initValue: 0.025, baseValue: 1.0 / 400.0 },
          { kind: "MDEFPropotion", initValue: 0.1, baseValue: 0.01 },
          { kind: "IceDamage", initValue: 0.05, baseValue: 1.0 / 400.0 },
          { kind: "DevilFishKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "DevilFishDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "DevilfishGill":
        return [
          { kind: "HPAdder", initValue: 200.0, baseValue: 20.0 },
          { kind: "IceDamage", initValue: 0.05, baseValue: 1.0 / 400.0 },
          { kind: "FireAbsorption", initValue: 0.025, baseValue: 0.0005 },
          { kind: "IceAbsorption", initValue: 0.025, baseValue: 0.0005 },
          { kind: "DarkAbsorption", initValue: 0.025, baseValue: 0.0005 },
          { kind: "DevilFishKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "DevilFishDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "DevilfishPendant":
        return [
          { kind: "HPAdder", initValue: 200.0, baseValue: 20.0 },
          { kind: "GoldGain", initValue: 0.2, baseValue: 0.02 },
          { kind: "DevilFishKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "DevilFishDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "DevilfishRing":
        return [
          { kind: "HPAdder", initValue: 200.0, baseValue: 20.0 },
          { kind: "DebuffResistance", initValue: 0.15, baseValue: 0.0015 },
          { kind: "StoneGain", initValue: 3.0, baseValue: 0.5 },
          { kind: "CrystalGain", initValue: 3.0, baseValue: 0.5 },
          { kind: "LeafGain", initValue: 3.0, baseValue: 0.5 },
          { kind: "DevilFishKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "DevilFishDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "TreantAmulet":
        return [
          { kind: "SPDAdder", initValue: -3600.0, baseValue: 30.0 },
          { kind: "MoveSpeedAdder", initValue: -120.0, baseValue: 1.0 },
          { kind: "MoveSpeedMultiplier", initValue: -0.06, baseValue: 0.0005 },
          { kind: "StoneGain", initValue: 100.0, baseValue: 1.0 },
          { kind: "CrystalGain", initValue: 100.0, baseValue: 1.0 },
          { kind: "LeafGain", initValue: 100.0, baseValue: 1.0 },
          { kind: "TreantKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "TreantDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "TreantHagoita":
        return [
          { kind: "SPDAdder", initValue: -3600.0, baseValue: 30.0 },
          { kind: "MoveSpeedAdder", initValue: -120.0, baseValue: 1.0 },
          { kind: "MoveSpeedMultiplier", initValue: -0.06, baseValue: 0.0005 },
          { kind: "TamingPoint", initValue: 0.25, baseValue: 0.025 },
          { kind: "PetEXPGain", initValue: 0.25, baseValue: 0.025 },
          { kind: "LoyaltyPointGain", initValue: 0.25, baseValue: 0.025 },
          { kind: "TreantKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "TreantDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "TreantChoppingBoard":
        return [
          { kind: "SPDAdder", initValue: -3600.0, baseValue: 30.0 },
          { kind: "MoveSpeedAdder", initValue: -120.0, baseValue: 1.0 },
          { kind: "MoveSpeedMultiplier", initValue: -0.06, baseValue: 0.0005 },
          { kind: "HPAdder", initValue: 200.0, baseValue: 20.0 },
          { kind: "DEFAdder", initValue: 100.0, baseValue: 10.0 },
          { kind: "MDEFAdder", initValue: 100.0, baseValue: 10.0 },
          { kind: "DEFMultiplier", initValue: 0.1, baseValue: 0.01 },
          { kind: "MDEFMultiplier", initValue: 0.1, baseValue: 0.01 },
          { kind: "TreantKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "TreantDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "TreantDagger":
        return [
          { kind: "SPDAdder", initValue: -3600.0, baseValue: 30.0 },
          { kind: "MoveSpeedAdder", initValue: -120.0, baseValue: 1.0 },
          { kind: "MoveSpeedMultiplier", initValue: -0.06, baseValue: 0.0005 },
          { kind: "PhysicalDamage", initValue: 1.0, baseValue: 0.01 },
          { kind: "FireDamage", initValue: 1.0, baseValue: 0.01 },
          { kind: "IceDamage", initValue: 1.0, baseValue: 0.01 },
          { kind: "ThunderDamage", initValue: 1.0, baseValue: 0.01 },
          { kind: "LightDamage", initValue: 1.0, baseValue: 0.01 },
          { kind: "DarkDamage", initValue: 1.0, baseValue: 0.01 },
          { kind: "TreantKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "TreantDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "TreantHaniwa":
        return [
          { kind: "SPDAdder", initValue: -3600.0, baseValue: 30.0 },
          { kind: "MoveSpeedAdder", initValue: -120.0, baseValue: 1.0 },
          { kind: "MoveSpeedMultiplier", initValue: -0.06, baseValue: 0.0005 },
          { kind: "HPAdder", initValue: 1000.0, baseValue: 50.0 },
          { kind: "HPMultiplier", initValue: 0.1, baseValue: 0.005 },
          { kind: "HpRegen", initValue: 250.0, baseValue: 25.0 },
          { kind: "TreantKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "TreantDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "TreantKokeshi":
        return [
          { kind: "SPDAdder", initValue: -3600.0, baseValue: 30.0 },
          { kind: "MoveSpeedAdder", initValue: -120.0, baseValue: 1.0 },
          { kind: "MoveSpeedMultiplier", initValue: -0.06, baseValue: 0.0005 },
          { kind: "ColorMaterialDropChance", initValue: 0.0001, baseValue: 1e-6 },
          { kind: "CriticalDamage", initValue: 1.0, baseValue: 0.01 },
          { kind: "TreantKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "TreantDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "TreantLamp":
        return [
          { kind: "SPDAdder", initValue: -3600.0, baseValue: 30.0 },
          { kind: "MoveSpeedAdder", initValue: -120.0, baseValue: 1.0 },
          { kind: "MoveSpeedMultiplier", initValue: -0.06, baseValue: 0.0005 },
          { kind: "GoldGain", initValue: 0.5, baseValue: 0.025 },
          { kind: "TreantKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "TreantDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "TreantLunchbox":
        return [
          { kind: "SPDAdder", initValue: -3600.0, baseValue: 30.0 },
          { kind: "MoveSpeedAdder", initValue: -120.0, baseValue: 1.0 },
          { kind: "MoveSpeedMultiplier", initValue: -0.06, baseValue: 0.0005 },
          { kind: "CatalystDoubleCriticalChance", initValue: 0.025, baseValue: 0.0005 },
          { kind: "TreantKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "TreantDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FlametigerPortableHotSpring":
        return [
          { kind: "SkillProficiency", initValue: -2.0, baseValue: 0.005 },
          { kind: "HPAdder", initValue: 5000.0, baseValue: 500.0 },
          { kind: "MPAdder", initValue: 2000.0, baseValue: 200.0 },
          { kind: "HPMultiplier", initValue: 0.5, baseValue: 0.01 },
          { kind: "MPMultiplier", initValue: 0.5, baseValue: 0.01 },
          { kind: "HpRegenMultiplier", initValue: 0.001, baseValue: 5e-5 },
          { kind: "MpRegenMultiplier", initValue: 0.001, baseValue: 5e-5 },
          { kind: "FlameTigerKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FlameTigerDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FlametigerVolcanicShield":
        return [
          { kind: "EXPGain", initValue: -2.0, baseValue: 0.005 },
          { kind: "PhysicalDamageMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "ArmoredFury", initValue: 0.025, baseValue: 0.001 },
          { kind: "DEFAdder", initValue: 200.0, baseValue: 20.0 },
          { kind: "DEFMultiplier", initValue: 0.2, baseValue: 0.02 },
          { kind: "FlameTigerKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FlameTigerDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FlametigerStripedBriefs":
        return [
          { kind: "DebuffResistance", initValue: -4.0, baseValue: 0.01 },
          { kind: "PhysicalCriticalMultiplier", initValue: 0.025, baseValue: 0.0005 },
          { kind: "MagicalCriticalMultiplier", initValue: 0.025, baseValue: 0.0005 },
          { kind: "EXPGainMultiplier", initValue: 0.1, baseValue: 0.005 },
          { kind: "GoldGainMultiplier", initValue: 0.1, baseValue: 0.005 },
          { kind: "FlameTigerKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FlameTigerDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "TorchOfEverburningFlametiger":
        return [
          { kind: "GoldGain", initValue: -2.0, baseValue: 0.005 },
          { kind: "WarriorSkillRange", initValue: 0.001, baseValue: 2.5e-5 },
          { kind: "WizardSkillRange", initValue: 0.001, baseValue: 2.5e-5 },
          { kind: "AngelSkillRange", initValue: 0.001, baseValue: 2.5e-5 },
          { kind: "ThiefSkillRange", initValue: 0.001, baseValue: 2.5e-5 },
          { kind: "ArcherSkillRange", initValue: 0.001, baseValue: 2.5e-5 },
          { kind: "TamerSkillRange", initValue: 0.001, baseValue: 2.5e-5 },
          { kind: "FlameTigerKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FlameTigerDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "FlametigerCostume":
        return [
          { kind: "EquipmentProficiency", initValue: -2.0, baseValue: 0.005 },
          { kind: "PetPhysicalCriticalChance", initValue: 0.1, baseValue: 0.005 },
          { kind: "PetMagicalCriticalChance", initValue: 0.1, baseValue: 0.005 },
          { kind: "PetCriticalDamage", initValue: 0.3, baseValue: 0.005 },
          { kind: "TamingPointMultiplier", initValue: 0.1, baseValue: 0.005 },
          { kind: "PetEXPGainMultiplier", initValue: 0.1, baseValue: 0.005 },
          { kind: "LoyaltyPointGainMultiplier", initValue: 0.1, baseValue: 0.005 },
          { kind: "FlameTigerKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FlameTigerDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "RingOfFlametigersWrath":
        return [
          { kind: "EXPGain", initValue: -2.0, baseValue: 0.005 },
          { kind: "FireDamageMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "IceDamageMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "ThunderDamageMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "LightDamageMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "DarkDamageMultiplier", initValue: 0.01, baseValue: 0.001 },
          { kind: "WardedFury", initValue: 0.025, baseValue: 0.001 },
          { kind: "MDEFAdder", initValue: 200.0, baseValue: 20.0 },
          { kind: "MDEFMultiplier", initValue: 0.2, baseValue: 0.02 },
          { kind: "FlameTigerKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FlameTigerDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "EndlessBowlOfSpicyFlametigerRamen":
        return [
          { kind: "TamingPoint", initValue: -10.0, baseValue: 0.025 },
          { kind: "LoyaltyPointGain", initValue: -10.0, baseValue: 0.025 },
          { kind: "StoneTownResearchPower", initValue: 0.025, baseValue: 0.001 },
          { kind: "CrystalTownResearchPower", initValue: 0.025, baseValue: 0.001 },
          { kind: "LeafTownResearchPower", initValue: 0.025, baseValue: 0.001 },
          { kind: "BlessingEffectMultiplier", initValue: 0.01, baseValue: 0.00025 },
          { kind: "FlameTigerKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FlameTigerDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
      case "ScreenOfTheSneakyFlametiger":
        return [
          { kind: "AllSkillLevel", initValue: -1000.0, baseValue: 2.5 },
          { kind: "GoldGainMultiplier", initValue: 0.05, baseValue: 1.0 / 400.0 },
          { kind: "GuildEXPGain", initValue: 0.005, baseValue: 0.00025 },
          { kind: "FlameTigerKnowledge", initValue: 0.2, baseValue: 0.005 },
          { kind: "FlameTigerDropChance", initValue: 0.0005, baseValue: 5e-5 },
        ];
    }
  }
}
