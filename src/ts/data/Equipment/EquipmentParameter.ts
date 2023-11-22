import { MultiplierInfo } from "../../Multiplier";
import { Debuff } from "../../type/Debuff";
import { EquipmentPart } from "../../type/EquipmentPart";
import { EquipmentKind } from "../../type/EquipmentKind";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { EquipmentForgeEffectKind } from "../../type/EquipmentForgeEffectKind";
import { EquipmentRarity } from "../../type/EquipmentRarity";

export const EquipmentParameter = {
  maxOptionEffectNum: 7,
  maxForgeEffectNum: 7,
  maxLevelForEachHero: 10,
  areaUniqueDropChanceBase: 1e-5,

  Rarity(kind: EquipmentKind): EquipmentRarity {
    switch (kind) {
      case EquipmentKind.Nothing:
        return EquipmentRarity.Common;
      case EquipmentKind.DullSword:
        return EquipmentRarity.Common;
      case EquipmentKind.BrittleStaff:
        return EquipmentRarity.Common;
      case EquipmentKind.FlimsyWing:
        return EquipmentRarity.Common;
      case EquipmentKind.WornDart:
        return EquipmentRarity.Common;
      case EquipmentKind.SmallBow:
        return EquipmentRarity.Common;
      case EquipmentKind.WoodenRecorder:
        return EquipmentRarity.Common;
      case EquipmentKind.OldCloak:
        return EquipmentRarity.Common;
      case EquipmentKind.BlueHat:
        return EquipmentRarity.Common;
      case EquipmentKind.OrangeHat:
        return EquipmentRarity.Common;
      case EquipmentKind.TShirt:
        return EquipmentRarity.Common;
      case EquipmentKind.ClothGlove:
        return EquipmentRarity.Common;
      case EquipmentKind.BlueTShirt:
        return EquipmentRarity.Common;
      case EquipmentKind.OrangeTShirt:
        return EquipmentRarity.Common;
      case EquipmentKind.ClothBelt:
        return EquipmentRarity.Common;
      case EquipmentKind.ClothShoes:
        return EquipmentRarity.Common;
      case EquipmentKind.IronRing:
        return EquipmentRarity.Common;
      case EquipmentKind.PearlEarring:
        return EquipmentRarity.Common;
      case EquipmentKind.FireBrooch:
        return EquipmentRarity.Common;
      case EquipmentKind.IceBrooch:
        return EquipmentRarity.Common;
      case EquipmentKind.ThunderBrooch:
        return EquipmentRarity.Common;
      case EquipmentKind.LightBrooch:
        return EquipmentRarity.Common;
      case EquipmentKind.DarkBrooch:
        return EquipmentRarity.Common;
      case EquipmentKind.WoodenShield:
        return EquipmentRarity.Common;
      case EquipmentKind.LongSword:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.LongStaff:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.WarmWing:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.DualDagger:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.ReinforcedBow:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.Flute:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.FireStaff:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.IceStaff:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.ThunderStaff:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.LeatherBelt:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.LeatherShoes:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.WarmCloak:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.LeatherArmor:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.LeatherGlove:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.LeatherShield:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.FireRing:
        return EquipmentRarity.Common;
      case EquipmentKind.IceRing:
        return EquipmentRarity.Common;
      case EquipmentKind.ThunderRing:
        return EquipmentRarity.Common;
      case EquipmentKind.LightRing:
        return EquipmentRarity.Common;
      case EquipmentKind.DarkRing:
        return EquipmentRarity.Common;
      case EquipmentKind.EnhancedFireBrooch:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.EnhancedIceBrooch:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.EnhancedThunderBrooch:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.EnhancedLightBrooch:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.EnhancedDarkBrooch:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.BattleSword:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.BattleStaff:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.BattleWing:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.BattleDagger:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.BattleBow:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.BattleRecorder:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.SlimeSword:
        return EquipmentRarity.Rare;
      case EquipmentKind.SlimeGlove:
        return EquipmentRarity.Rare;
      case EquipmentKind.SlimeRing:
        return EquipmentRarity.Rare;
      case EquipmentKind.SlimeBelt:
        return EquipmentRarity.Rare;
      case EquipmentKind.SlimePincenez:
        return EquipmentRarity.Rare;
      case EquipmentKind.SlimeWing:
        return EquipmentRarity.Rare;
      case EquipmentKind.SlimePoncho:
        return EquipmentRarity.Rare;
      case EquipmentKind.SlimeDart:
        return EquipmentRarity.Rare;
      case EquipmentKind.MagicSlimeStick:
        return EquipmentRarity.Rare;
      case EquipmentKind.MagicSlimeHat:
        return EquipmentRarity.Rare;
      case EquipmentKind.MagicSlimeBow:
        return EquipmentRarity.Rare;
      case EquipmentKind.MagicSlimeShoes:
        return EquipmentRarity.Rare;
      case EquipmentKind.MagicSlimeRecorder:
        return EquipmentRarity.Rare;
      case EquipmentKind.MagicSlimeEarring:
        return EquipmentRarity.Rare;
      case EquipmentKind.MagicSlimeBalloon:
        return EquipmentRarity.Rare;
      case EquipmentKind.MagicSlimeSkirt:
        return EquipmentRarity.Rare;
      case EquipmentKind.SpiderHat:
        return EquipmentRarity.Rare;
      case EquipmentKind.SpiderSkirt:
        return EquipmentRarity.Rare;
      case EquipmentKind.SpiderSuit:
        return EquipmentRarity.Rare;
      case EquipmentKind.SpiderDagger:
        return EquipmentRarity.Rare;
      case EquipmentKind.SpiderWing:
        return EquipmentRarity.Rare;
      case EquipmentKind.SpiderCatchingNet:
        return EquipmentRarity.Rare;
      case EquipmentKind.SpiderStick:
        return EquipmentRarity.Rare;
      case EquipmentKind.SpiderFoldingFan:
        return EquipmentRarity.Rare;
      case EquipmentKind.BatRing:
        return EquipmentRarity.Rare;
      case EquipmentKind.BatShoes:
        return EquipmentRarity.Rare;
      case EquipmentKind.BatSword:
        return EquipmentRarity.Rare;
      case EquipmentKind.BatHat:
        return EquipmentRarity.Rare;
      case EquipmentKind.BatRecorder:
        return EquipmentRarity.Rare;
      case EquipmentKind.BatBow:
        return EquipmentRarity.Rare;
      case EquipmentKind.BatMascaradeMask:
        return EquipmentRarity.Rare;
      case EquipmentKind.BatCloak:
        return EquipmentRarity.Rare;
      case EquipmentKind.BronzeShoulder:
        return EquipmentRarity.Common;
      case EquipmentKind.BattleRing:
        return EquipmentRarity.Common;
      case EquipmentKind.Halo:
        return EquipmentRarity.Common;
      case EquipmentKind.IronShoulder:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.StrengthRing:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.GoldenRing:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.GoldenFireRing:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.GoldenIceRing:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.GoldenThunderRing:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.GoldenLightRing:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.GoldenDarkRing:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.IronBelt:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.IronShoes:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.CopperArmor:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.IronGlove:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.TowerShield:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.FireTowerShield:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.IceTowerShield:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.ThunderTowerShield:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.LightTowerShield:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.DarkTowerShield:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.SavageRing:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.SpellboundFireBrooch:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.SpellboundIceBrooch:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.SpellboundThunderBrooch:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.SpellboundLightBrooch:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.SpellboundDarkBrooch:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.CopperHelm:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.BattleHelm:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.WizardHelm:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.LargeSword:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.LargeStaff:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.LargeWing:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.LargeDagger:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.LargeBow:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.LargeOcarina:
        return EquipmentRarity.Uncommon;
      case EquipmentKind.FairyClothes:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FairyStaff:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FairyBoots:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FairyGlove:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FairyBrooch:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FairyLamp:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FairyWing:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FairyShuriken:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FoxKanzashi:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FoxLoincloth:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FoxMask:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FoxHamayayumi:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FoxHat:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FoxCoat:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FoxBoot:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FoxEma:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.DevilfishSword:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.DevilfishWing:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.DevilfishRecorder:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.DevilfishArmor:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.DevilfishScarf:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.DevilfishGill:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.DevilfishPendant:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.DevilfishRing:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.TreantAmulet:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.TreantHagoita:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.TreantChoppingBoard:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.TreantDagger:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.TreantHaniwa:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.TreantKokeshi:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.TreantLamp:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.TreantLunchbox:
        return EquipmentRarity.SuperRare;
      case EquipmentKind.FlametigerPortableHotSpring:
        return EquipmentRarity.Epic;
      case EquipmentKind.FlametigerVolcanicShield:
        return EquipmentRarity.Epic;
      case EquipmentKind.FlametigerStripedBriefs:
        return EquipmentRarity.Epic;
      case EquipmentKind.TorchOfEverburningFlametiger:
        return EquipmentRarity.Epic;
      case EquipmentKind.FlametigerCostume:
        return EquipmentRarity.Epic;
      case EquipmentKind.RingOfFlametigersWrath:
        return EquipmentRarity.Epic;
      case EquipmentKind.EndlessBowlOfSpicyFlametigerRamen:
        return EquipmentRarity.Epic;
      case EquipmentKind.ScreenOfTheSneakyFlametiger:
        return EquipmentRarity.Epic;
      case EquipmentKind.ModifiedSword:
        return EquipmentRarity.Rare;
      case EquipmentKind.ModifiedStaff:
        return EquipmentRarity.Rare;
      case EquipmentKind.ModifiedWing:
        return EquipmentRarity.Rare;
      case EquipmentKind.ModifiedDart:
        return EquipmentRarity.Rare;
      case EquipmentKind.ModifiedBow:
        return EquipmentRarity.Rare;
      case EquipmentKind.ModifiedRecorder:
        return EquipmentRarity.Rare;
      case EquipmentKind.AncientCloak:
        return EquipmentRarity.Rare;
      case EquipmentKind.AncientBelt:
        return EquipmentRarity.Rare;
      case EquipmentKind.AncientShoes:
        return EquipmentRarity.Rare;
      case EquipmentKind.AncientRing:
        return EquipmentRarity.Rare;
      case EquipmentKind.AncientEarring:
        return EquipmentRarity.Rare;
      default:
        return EquipmentRarity.Common;
    }
  },

  Part(kind: EquipmentKind): EquipmentPart {
    switch (kind) {
      case EquipmentKind.Nothing:
        return EquipmentPart.Weapon;
      case EquipmentKind.DullSword:
        return EquipmentPart.Weapon;
      case EquipmentKind.BrittleStaff:
        return EquipmentPart.Weapon;
      case EquipmentKind.FlimsyWing:
        return EquipmentPart.Weapon;
      case EquipmentKind.WornDart:
        return EquipmentPart.Weapon;
      case EquipmentKind.SmallBow:
        return EquipmentPart.Weapon;
      case EquipmentKind.WoodenRecorder:
        return EquipmentPart.Weapon;
      case EquipmentKind.OldCloak:
        return EquipmentPart.Armor;
      case EquipmentKind.BlueHat:
        return EquipmentPart.Armor;
      case EquipmentKind.OrangeHat:
        return EquipmentPart.Armor;
      case EquipmentKind.TShirt:
        return EquipmentPart.Armor;
      case EquipmentKind.ClothGlove:
        return EquipmentPart.Armor;
      case EquipmentKind.BlueTShirt:
        return EquipmentPart.Armor;
      case EquipmentKind.OrangeTShirt:
        return EquipmentPart.Armor;
      case EquipmentKind.ClothBelt:
        return EquipmentPart.Armor;
      case EquipmentKind.ClothShoes:
        return EquipmentPart.Armor;
      case EquipmentKind.IronRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.PearlEarring:
        return EquipmentPart.Jewelry;
      case EquipmentKind.FireBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.IceBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.ThunderBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.LightBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.DarkBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.WoodenShield:
        return EquipmentPart.Armor;
      case EquipmentKind.LongSword:
        return EquipmentPart.Weapon;
      case EquipmentKind.LongStaff:
        return EquipmentPart.Weapon;
      case EquipmentKind.WarmWing:
        return EquipmentPart.Weapon;
      case EquipmentKind.DualDagger:
        return EquipmentPart.Weapon;
      case EquipmentKind.ReinforcedBow:
        return EquipmentPart.Weapon;
      case EquipmentKind.Flute:
        return EquipmentPart.Weapon;
      case EquipmentKind.FireStaff:
        return EquipmentPart.Weapon;
      case EquipmentKind.IceStaff:
        return EquipmentPart.Weapon;
      case EquipmentKind.ThunderStaff:
        return EquipmentPart.Weapon;
      case EquipmentKind.LeatherBelt:
        return EquipmentPart.Armor;
      case EquipmentKind.LeatherShoes:
        return EquipmentPart.Armor;
      case EquipmentKind.WarmCloak:
        return EquipmentPart.Armor;
      case EquipmentKind.LeatherArmor:
        return EquipmentPart.Armor;
      case EquipmentKind.LeatherGlove:
        return EquipmentPart.Armor;
      case EquipmentKind.LeatherShield:
        return EquipmentPart.Armor;
      case EquipmentKind.FireRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.IceRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.ThunderRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.LightRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.DarkRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.EnhancedFireBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.EnhancedIceBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.EnhancedThunderBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.EnhancedLightBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.EnhancedDarkBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.BattleSword:
        return EquipmentPart.Weapon;
      case EquipmentKind.BattleStaff:
        return EquipmentPart.Weapon;
      case EquipmentKind.BattleWing:
        return EquipmentPart.Weapon;
      case EquipmentKind.BattleDagger:
        return EquipmentPart.Weapon;
      case EquipmentKind.BattleBow:
        return EquipmentPart.Weapon;
      case EquipmentKind.BattleRecorder:
        return EquipmentPart.Weapon;
      case EquipmentKind.SlimeSword:
        return EquipmentPart.Weapon;
      case EquipmentKind.SlimeGlove:
        return EquipmentPart.Armor;
      case EquipmentKind.SlimeRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.SlimeBelt:
        return EquipmentPart.Armor;
      case EquipmentKind.SlimePincenez:
        return EquipmentPart.Jewelry;
      case EquipmentKind.SlimeWing:
        return EquipmentPart.Weapon;
      case EquipmentKind.SlimePoncho:
        return EquipmentPart.Armor;
      case EquipmentKind.SlimeDart:
        return EquipmentPart.Weapon;
      case EquipmentKind.MagicSlimeStick:
        return EquipmentPart.Weapon;
      case EquipmentKind.MagicSlimeHat:
        return EquipmentPart.Armor;
      case EquipmentKind.MagicSlimeBow:
        return EquipmentPart.Weapon;
      case EquipmentKind.MagicSlimeShoes:
        return EquipmentPart.Armor;
      case EquipmentKind.MagicSlimeRecorder:
        return EquipmentPart.Weapon;
      case EquipmentKind.MagicSlimeEarring:
        return EquipmentPart.Jewelry;
      case EquipmentKind.MagicSlimeBalloon:
        return EquipmentPart.Jewelry;
      case EquipmentKind.MagicSlimeSkirt:
        return EquipmentPart.Armor;
      case EquipmentKind.SpiderHat:
        return EquipmentPart.Armor;
      case EquipmentKind.SpiderSkirt:
        return EquipmentPart.Armor;
      case EquipmentKind.SpiderSuit:
        return EquipmentPart.Armor;
      case EquipmentKind.SpiderDagger:
        return EquipmentPart.Weapon;
      case EquipmentKind.SpiderWing:
        return EquipmentPart.Weapon;
      case EquipmentKind.SpiderCatchingNet:
        return EquipmentPart.Weapon;
      case EquipmentKind.SpiderStick:
        return EquipmentPart.Weapon;
      case EquipmentKind.SpiderFoldingFan:
        return EquipmentPart.Jewelry;
      case EquipmentKind.BatRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.BatShoes:
        return EquipmentPart.Armor;
      case EquipmentKind.BatSword:
        return EquipmentPart.Weapon;
      case EquipmentKind.BatHat:
        return EquipmentPart.Armor;
      case EquipmentKind.BatRecorder:
        return EquipmentPart.Weapon;
      case EquipmentKind.BatBow:
        return EquipmentPart.Weapon;
      case EquipmentKind.BatMascaradeMask:
        return EquipmentPart.Jewelry;
      case EquipmentKind.BatCloak:
        return EquipmentPart.Armor;
      case EquipmentKind.BronzeShoulder:
        return EquipmentPart.Armor;
      case EquipmentKind.BattleRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.Halo:
        return EquipmentPart.Jewelry;
      case EquipmentKind.IronShoulder:
        return EquipmentPart.Armor;
      case EquipmentKind.StrengthRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.GoldenRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.GoldenFireRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.GoldenIceRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.GoldenThunderRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.GoldenLightRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.GoldenDarkRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.IronBelt:
        return EquipmentPart.Armor;
      case EquipmentKind.IronShoes:
        return EquipmentPart.Armor;
      case EquipmentKind.CopperArmor:
        return EquipmentPart.Armor;
      case EquipmentKind.IronGlove:
        return EquipmentPart.Armor;
      case EquipmentKind.TowerShield:
        return EquipmentPart.Armor;
      case EquipmentKind.FireTowerShield:
        return EquipmentPart.Armor;
      case EquipmentKind.IceTowerShield:
        return EquipmentPart.Armor;
      case EquipmentKind.ThunderTowerShield:
        return EquipmentPart.Armor;
      case EquipmentKind.LightTowerShield:
        return EquipmentPart.Armor;
      case EquipmentKind.DarkTowerShield:
        return EquipmentPart.Armor;
      case EquipmentKind.SavageRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.SpellboundFireBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.SpellboundIceBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.SpellboundThunderBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.SpellboundLightBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.SpellboundDarkBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.CopperHelm:
        return EquipmentPart.Armor;
      case EquipmentKind.BattleHelm:
        return EquipmentPart.Armor;
      case EquipmentKind.WizardHelm:
        return EquipmentPart.Armor;
      case EquipmentKind.LargeSword:
        return EquipmentPart.Weapon;
      case EquipmentKind.LargeStaff:
        return EquipmentPart.Weapon;
      case EquipmentKind.LargeWing:
        return EquipmentPart.Weapon;
      case EquipmentKind.LargeDagger:
        return EquipmentPart.Weapon;
      case EquipmentKind.LargeBow:
        return EquipmentPart.Weapon;
      case EquipmentKind.LargeOcarina:
        return EquipmentPart.Weapon;
      case EquipmentKind.FairyClothes:
        return EquipmentPart.Armor;
      case EquipmentKind.FairyStaff:
        return EquipmentPart.Weapon;
      case EquipmentKind.FairyBoots:
        return EquipmentPart.Armor;
      case EquipmentKind.FairyGlove:
        return EquipmentPart.Armor;
      case EquipmentKind.FairyBrooch:
        return EquipmentPart.Jewelry;
      case EquipmentKind.FairyLamp:
        return EquipmentPart.Jewelry;
      case EquipmentKind.FairyWing:
        return EquipmentPart.Weapon;
      case EquipmentKind.FairyShuriken:
        return EquipmentPart.Weapon;
      case EquipmentKind.FoxKanzashi:
        return EquipmentPart.Jewelry;
      case EquipmentKind.FoxLoincloth:
        return EquipmentPart.Armor;
      case EquipmentKind.FoxMask:
        return EquipmentPart.Jewelry;
      case EquipmentKind.FoxHamayayumi:
        return EquipmentPart.Weapon;
      case EquipmentKind.FoxHat:
        return EquipmentPart.Armor;
      case EquipmentKind.FoxCoat:
        return EquipmentPart.Armor;
      case EquipmentKind.FoxBoot:
        return EquipmentPart.Armor;
      case EquipmentKind.FoxEma:
        return EquipmentPart.Jewelry;
      case EquipmentKind.DevilfishSword:
        return EquipmentPart.Weapon;
      case EquipmentKind.DevilfishWing:
        return EquipmentPart.Weapon;
      case EquipmentKind.DevilfishRecorder:
        return EquipmentPart.Weapon;
      case EquipmentKind.DevilfishArmor:
        return EquipmentPart.Armor;
      case EquipmentKind.DevilfishScarf:
        return EquipmentPart.Armor;
      case EquipmentKind.DevilfishGill:
        return EquipmentPart.Jewelry;
      case EquipmentKind.DevilfishPendant:
        return EquipmentPart.Jewelry;
      case EquipmentKind.DevilfishRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.TreantAmulet:
        return EquipmentPart.Jewelry;
      case EquipmentKind.TreantHagoita:
        return EquipmentPart.Weapon;
      case EquipmentKind.TreantChoppingBoard:
        return EquipmentPart.Armor;
      case EquipmentKind.TreantDagger:
        return EquipmentPart.Weapon;
      case EquipmentKind.TreantHaniwa:
        return EquipmentPart.Armor;
      case EquipmentKind.TreantKokeshi:
        return EquipmentPart.Jewelry;
      case EquipmentKind.TreantLamp:
        return EquipmentPart.Jewelry;
      case EquipmentKind.TreantLunchbox:
        return EquipmentPart.Jewelry;
      case EquipmentKind.FlametigerPortableHotSpring:
        return EquipmentPart.Jewelry;
      case EquipmentKind.FlametigerVolcanicShield:
        return EquipmentPart.Weapon;
      case EquipmentKind.FlametigerStripedBriefs:
        return EquipmentPart.Armor;
      case EquipmentKind.TorchOfEverburningFlametiger:
        return EquipmentPart.Weapon;
      case EquipmentKind.FlametigerCostume:
        return EquipmentPart.Armor;
      case EquipmentKind.RingOfFlametigersWrath:
        return EquipmentPart.Weapon;
      case EquipmentKind.EndlessBowlOfSpicyFlametigerRamen:
        return EquipmentPart.Jewelry;
      case EquipmentKind.ScreenOfTheSneakyFlametiger:
        return EquipmentPart.Jewelry;
      case EquipmentKind.ModifiedSword:
        return EquipmentPart.Weapon;
      case EquipmentKind.ModifiedStaff:
        return EquipmentPart.Weapon;
      case EquipmentKind.ModifiedWing:
        return EquipmentPart.Weapon;
      case EquipmentKind.ModifiedDart:
        return EquipmentPart.Weapon;
      case EquipmentKind.ModifiedBow:
        return EquipmentPart.Weapon;
      case EquipmentKind.ModifiedRecorder:
        return EquipmentPart.Weapon;
      case EquipmentKind.AncientCloak:
        return EquipmentPart.Armor;
      case EquipmentKind.AncientBelt:
        return EquipmentPart.Armor;
      case EquipmentKind.AncientShoes:
        return EquipmentPart.Armor;
      case EquipmentKind.AncientRing:
        return EquipmentPart.Jewelry;
      case EquipmentKind.AncientEarring:
        return EquipmentPart.Jewelry;
      default:
        return EquipmentPart.Weapon;
    }
  },

  RarityFactor(kind: EquipmentEffectKind) {
    switch (kind) {
      case EquipmentEffectKind.Nothing:
        return 1;
      case EquipmentEffectKind.HPAdder:
        return 1;
      case EquipmentEffectKind.MPAdder:
        return 1;
      case EquipmentEffectKind.ATKAdder:
        return 1;
      case EquipmentEffectKind.MATKAdder:
        return 1;
      case EquipmentEffectKind.DEFAdder:
        return 1;
      case EquipmentEffectKind.MDEFAdder:
        return 1;
      case EquipmentEffectKind.SPDAdder:
        return 5;
      case EquipmentEffectKind.HPMultiplier:
        return 5;
      case EquipmentEffectKind.MPMultiplier:
        return 5;
      case EquipmentEffectKind.ATKMultiplier:
        return 5;
      case EquipmentEffectKind.MATKMultiplier:
        return 5;
      case EquipmentEffectKind.DEFMultiplier:
        return 5;
      case EquipmentEffectKind.MDEFMultiplier:
        return 5;
      case EquipmentEffectKind.ATKPropotion:
        return 3;
      case EquipmentEffectKind.MATKPropotion:
        return 3;
      case EquipmentEffectKind.DEFPropotion:
        return 3;
      case EquipmentEffectKind.MDEFPropotion:
        return 3;
      case EquipmentEffectKind.FireResistance:
        return 2;
      case EquipmentEffectKind.IceResistance:
        return 2;
      case EquipmentEffectKind.ThunderResistance:
        return 2;
      case EquipmentEffectKind.LightResistance:
        return 2;
      case EquipmentEffectKind.DarkResistance:
        return 2;
      case EquipmentEffectKind.PhysicalAbsorption:
        return 4;
      case EquipmentEffectKind.FireAbsorption:
        return 4;
      case EquipmentEffectKind.IceAbsorption:
        return 4;
      case EquipmentEffectKind.ThunderAbsorption:
        return 4;
      case EquipmentEffectKind.LightAbsorption:
        return 4;
      case EquipmentEffectKind.DarkAbsorption:
        return 4;
      case EquipmentEffectKind.DebuffResistance:
        return 3;
      case EquipmentEffectKind.EquipmentDropChance:
        return 10;
      case EquipmentEffectKind.SlimeDropChance:
        return 10;
      case EquipmentEffectKind.MagicSlimeDropChance:
        return 20;
      case EquipmentEffectKind.SpiderDropChance:
        return 30;
      case EquipmentEffectKind.BatDropChance:
        return 40;
      case EquipmentEffectKind.FairyDropChance:
        return 50;
      case EquipmentEffectKind.FoxDropChance:
        return 60;
      case EquipmentEffectKind.DevilFishDropChance:
        return 70;
      case EquipmentEffectKind.TreantDropChance:
        return 80;
      case EquipmentEffectKind.FlameTigerDropChance:
        return 90;
      case EquipmentEffectKind.UnicornDropChance:
        return 100;
      case EquipmentEffectKind.ColorMaterialDropChance:
        return 10;
      case EquipmentEffectKind.PhysicalCritical:
        return 2;
      case EquipmentEffectKind.MagicalCritical:
        return 2;
      case EquipmentEffectKind.EXPGain:
        return 10;
      case EquipmentEffectKind.SkillProficiency:
        return 10;
      case EquipmentEffectKind.EquipmentProficiency:
        return 10;
      case EquipmentEffectKind.MoveSpeedMultiplier:
        return 10;
      case EquipmentEffectKind.GoldGain:
        return 5;
      case EquipmentEffectKind.StoneGain:
        return 2;
      case EquipmentEffectKind.CrystalGain:
        return 2;
      case EquipmentEffectKind.LeafGain:
        return 2;
      case EquipmentEffectKind.WarriorSkillLevel:
        return 4;
      case EquipmentEffectKind.WizardSkillLevel:
        return 4;
      case EquipmentEffectKind.AngelSkillLevel:
        return 4;
      case EquipmentEffectKind.ThiefSkillLevel:
        return 4;
      case EquipmentEffectKind.ArcherSkillLevel:
        return 4;
      case EquipmentEffectKind.TamerSkillLevel:
        return 4;
      case EquipmentEffectKind.AllSkillLevel:
        return 5;
      case EquipmentEffectKind.SlimeKnowledge:
        return 10;
      case EquipmentEffectKind.MagicSlimeKnowledge:
        return 20;
      case EquipmentEffectKind.SpiderKnowledge:
        return 30;
      case EquipmentEffectKind.BatKnowledge:
        return 40;
      case EquipmentEffectKind.FairyKnowledge:
        return 50;
      case EquipmentEffectKind.FoxKnowledge:
        return 60;
      case EquipmentEffectKind.DevilFishKnowledge:
        return 70;
      case EquipmentEffectKind.TreantKnowledge:
        return 80;
      case EquipmentEffectKind.FlameTigerKnowledge:
        return 90;
      case EquipmentEffectKind.UnicornKnowledge:
        return 100;
      case EquipmentEffectKind.PhysicalDamage:
        return 5;
      case EquipmentEffectKind.FireDamage:
        return 5;
      case EquipmentEffectKind.IceDamage:
        return 5;
      case EquipmentEffectKind.ThunderDamage:
        return 5;
      case EquipmentEffectKind.LightDamage:
        return 5;
      case EquipmentEffectKind.DarkDamage:
        return 5;
      case EquipmentEffectKind.HpRegen:
        return 10;
      case EquipmentEffectKind.MpRegen:
        return 10;
      case EquipmentEffectKind.TamingPoint:
        return 10;
      case EquipmentEffectKind.WarriorSkillRange:
        return 200;
      case EquipmentEffectKind.WizardSkillRange:
        return 200;
      case EquipmentEffectKind.AngelSkillRange:
        return 200;
      case EquipmentEffectKind.ThiefSkillRange:
        return 200;
      case EquipmentEffectKind.ArcherSkillRange:
        return 200;
      case EquipmentEffectKind.TamerSkillRange:
        return 200;
      case EquipmentEffectKind.TownMatGain:
        return 100;
      case EquipmentEffectKind.TownMatAreaClearGain:
        return 100;
      case EquipmentEffectKind.RebirthPointGain1:
        return 100;
      case EquipmentEffectKind.RebirthPointGain2:
        return 100;
      case EquipmentEffectKind.RebirthPointGain3:
        return 100;
      case EquipmentEffectKind.CriticalDamage:
        return 10;
      case EquipmentEffectKind.BlessingEffect:
        return 100;
      case EquipmentEffectKind.MoveSpeedAdder:
        return 3;
      case EquipmentEffectKind.PetEXPGain:
        return 10;
      case EquipmentEffectKind.LoyaltyPointGain:
        return 10;
      case EquipmentEffectKind.CatalystDoubleCriticalChance:
        return 100;
      case EquipmentEffectKind.WarriorSkillEffectRange:
        return 400;
      case EquipmentEffectKind.WizardSkillEffectRange:
        return 400;
      case EquipmentEffectKind.AngelSkillEffectRange:
        return 400;
      case EquipmentEffectKind.ThiefSkillEffectRange:
        return 400;
      case EquipmentEffectKind.ArcherSkillEffectRange:
        return 400;
      case EquipmentEffectKind.TamerSkillEffectRange:
        return 400;
      case EquipmentEffectKind.HpRegenMultiplier:
        return 200;
      case EquipmentEffectKind.MpRegenMultiplier:
        return 250;
      case EquipmentEffectKind.ArmoredFury:
        return 500;
      case EquipmentEffectKind.WardedFury:
        return 500;
      case EquipmentEffectKind.PetPhysicalCriticalChance:
        return 60;
      case EquipmentEffectKind.PetMagicalCriticalChance:
        return 60;
      case EquipmentEffectKind.PetCriticalDamage:
        return 80;
      case EquipmentEffectKind.PetDebuffResistance:
        return 100;
      case EquipmentEffectKind.StoneTownResearchPower:
        return 400;
      case EquipmentEffectKind.CrystalTownResearchPower:
        return 400;
      case EquipmentEffectKind.LeafTownResearchPower:
        return 400;
      case EquipmentEffectKind.GuildEXPGain:
        return 800;
      case EquipmentEffectKind.SPDMultiplier:
        return 400;
      case EquipmentEffectKind.CriticalDamageMultiplier:
        return 250;
      case EquipmentEffectKind.SkillProficiencyMultiplier:
        return 200;
      case EquipmentEffectKind.EquipmentProficiencyMultiplier:
        return 300;
      case EquipmentEffectKind.EXPGainMultiplier:
        return 200;
      case EquipmentEffectKind.GoldGainMultiplier:
        return 200;
      case EquipmentEffectKind.PhysicalDamageMultiplier:
        return 200;
      case EquipmentEffectKind.FireDamageMultiplier:
        return 200;
      case EquipmentEffectKind.IceDamageMultiplier:
        return 200;
      case EquipmentEffectKind.ThunderDamageMultiplier:
        return 200;
      case EquipmentEffectKind.LightDamageMultiplier:
        return 200;
      case EquipmentEffectKind.DarkDamageMultiplier:
        return 200;
      case EquipmentEffectKind.TamingPointMultiplier:
        return 200;
      case EquipmentEffectKind.PetEXPGainMultiplier:
        return 200;
      case EquipmentEffectKind.LoyaltyPointGainMultiplier:
        return 300;
      case EquipmentEffectKind.BlessingEffectMultiplier:
        return 400;
      case EquipmentEffectKind.PhysicalCriticalMultiplier:
        return 60;
      case EquipmentEffectKind.MagicalCriticalMultiplier:
        return 60;
      case EquipmentEffectKind.ChallengeBossKnowledge:
        return 1000;
      case EquipmentEffectKind.HPAfter:
        return 10;
      case EquipmentEffectKind.MPAfter:
        return 10;
      case EquipmentEffectKind.ATKAfter:
        return 10;
      case EquipmentEffectKind.MATKAfter:
        return 10;
      case EquipmentEffectKind.DEFAfter:
        return 10;
      case EquipmentEffectKind.MDEFAfter:
        return 10;
      case EquipmentEffectKind.SPDAfter:
        return 10;
      case EquipmentEffectKind.MoveSpeedAfter:
        return 50;
      case EquipmentEffectKind.PhysicalCriticalAfter:
        return 40;
      case EquipmentEffectKind.MagicalCriticalAfter:
        return 40;
      case EquipmentEffectKind.CriticalDamageAfter:
        return 50;
      case EquipmentEffectKind.DebuffResistanceAfter:
        return 30;
      case EquipmentEffectKind.PhysicalDamageAfter:
        return 60;
      case EquipmentEffectKind.FireDamageAfter:
        return 60;
      case EquipmentEffectKind.IceDamageAfter:
        return 60;
      case EquipmentEffectKind.ThunderDamageAfter:
        return 60;
      case EquipmentEffectKind.LightDamageAfter:
        return 60;
      case EquipmentEffectKind.DarkDamageAfter:
        return 60;
      case EquipmentEffectKind.FireResistanceAfter:
        return 20;
      case EquipmentEffectKind.IceResistanceAfter:
        return 20;
      case EquipmentEffectKind.ThunderResistanceAfter:
        return 20;
      case EquipmentEffectKind.LightResistanceAfter:
        return 20;
      case EquipmentEffectKind.DarkResistanceAfter:
        return 20;
      case EquipmentEffectKind.SlimeKnowledgeAfter:
        return 20;
      case EquipmentEffectKind.MagicSlimeKnowledgeAfter:
        return 40;
      case EquipmentEffectKind.SpiderKnowledgeAfter:
        return 60;
      case EquipmentEffectKind.BatKnowledgeAfter:
        return 80;
      case EquipmentEffectKind.FairyKnowledgeAfter:
        return 100;
      case EquipmentEffectKind.FoxKnowledgeAfter:
        return 120;
      case EquipmentEffectKind.DevilFishKnowledgeAfter:
        return 140;
      case EquipmentEffectKind.TreantKnowledgeAfter:
        return 160;
      case EquipmentEffectKind.FlameTigerKnowledgeAfter:
        return 180;
      case EquipmentEffectKind.UnicornKnowledgeAfter:
        return 200;
      case EquipmentEffectKind.ChallengeBossKnowledgeAfter:
        return 250;
      case EquipmentEffectKind.SDDamageMultiplier:
        return 100;
      case EquipmentEffectKind.SDDamageCutMultiplier:
        return 100;
      case EquipmentEffectKind.FameGain:
        return 800;
      case EquipmentEffectKind.DungeonCoinGain:
        return 1000;
      case EquipmentEffectKind.ExtraAfterDamage:
        return 1000;
      default:
        return 1000;
    }
  },

  MaxLevel(kind: EquipmentEffectKind) {
    switch (kind) {
      case EquipmentEffectKind.HPAdder:
        return 10;
      case EquipmentEffectKind.MPAdder:
        return 10;
      case EquipmentEffectKind.ATKAdder:
        return 10;
      case EquipmentEffectKind.MATKAdder:
        return 10;
      case EquipmentEffectKind.DEFAdder:
        return 10;
      case EquipmentEffectKind.MDEFAdder:
        return 10;
      case EquipmentEffectKind.SPDAdder:
        return 10;
      case EquipmentEffectKind.HPMultiplier:
        return 5;
      case EquipmentEffectKind.MPMultiplier:
        return 5;
      case EquipmentEffectKind.ATKMultiplier:
        return 5;
      case EquipmentEffectKind.MATKMultiplier:
        return 5;
      case EquipmentEffectKind.DEFMultiplier:
        return 5;
      case EquipmentEffectKind.MDEFMultiplier:
        return 5;
      case EquipmentEffectKind.ATKPropotion:
        return 5;
      case EquipmentEffectKind.MATKPropotion:
        return 5;
      case EquipmentEffectKind.DEFPropotion:
        return 5;
      case EquipmentEffectKind.MDEFPropotion:
        return 5;
      case EquipmentEffectKind.FireResistance:
        return 10;
      case EquipmentEffectKind.IceResistance:
        return 10;
      case EquipmentEffectKind.ThunderResistance:
        return 10;
      case EquipmentEffectKind.LightResistance:
        return 10;
      case EquipmentEffectKind.DarkResistance:
        return 10;
      case EquipmentEffectKind.PhysicalAbsorption:
        return 2;
      case EquipmentEffectKind.FireAbsorption:
        return 2;
      case EquipmentEffectKind.IceAbsorption:
        return 2;
      case EquipmentEffectKind.ThunderAbsorption:
        return 2;
      case EquipmentEffectKind.LightAbsorption:
        return 2;
      case EquipmentEffectKind.DarkAbsorption:
        return 2;
      case EquipmentEffectKind.DebuffResistance:
        return 5;
      case EquipmentEffectKind.EquipmentDropChance:
        return 10;
      case EquipmentEffectKind.SlimeDropChance:
        return 10;
      case EquipmentEffectKind.MagicSlimeDropChance:
        return 10;
      case EquipmentEffectKind.SpiderDropChance:
        return 10;
      case EquipmentEffectKind.BatDropChance:
        return 10;
      case EquipmentEffectKind.FairyDropChance:
        return 10;
      case EquipmentEffectKind.FoxDropChance:
        return 10;
      case EquipmentEffectKind.DevilFishDropChance:
        return 10;
      case EquipmentEffectKind.TreantDropChance:
        return 10;
      case EquipmentEffectKind.FlameTigerDropChance:
        return 10;
      case EquipmentEffectKind.UnicornDropChance:
        return 10;
      case EquipmentEffectKind.ColorMaterialDropChance:
        return 10;
      case EquipmentEffectKind.PhysicalCritical:
        return 2;
      case EquipmentEffectKind.MagicalCritical:
        return 2;
      case EquipmentEffectKind.EXPGain:
        return 10;
      case EquipmentEffectKind.SkillProficiency:
        return 10;
      case EquipmentEffectKind.EquipmentProficiency:
        return 10;
      case EquipmentEffectKind.MoveSpeedMultiplier:
        return 10;
      case EquipmentEffectKind.GoldGain:
        return 5;
      case EquipmentEffectKind.StoneGain:
        return 10;
      case EquipmentEffectKind.CrystalGain:
        return 10;
      case EquipmentEffectKind.LeafGain:
        return 10;
      case EquipmentEffectKind.WarriorSkillLevel:
        return 10;
      case EquipmentEffectKind.WizardSkillLevel:
        return 10;
      case EquipmentEffectKind.AngelSkillLevel:
        return 10;
      case EquipmentEffectKind.ThiefSkillLevel:
        return 10;
      case EquipmentEffectKind.ArcherSkillLevel:
        return 10;
      case EquipmentEffectKind.TamerSkillLevel:
        return 10;
      case EquipmentEffectKind.AllSkillLevel:
        return 10;
      case EquipmentEffectKind.SlimeKnowledge:
        return 10;
      case EquipmentEffectKind.MagicSlimeKnowledge:
        return 10;
      case EquipmentEffectKind.SpiderKnowledge:
        return 10;
      case EquipmentEffectKind.BatKnowledge:
        return 10;
      case EquipmentEffectKind.FairyKnowledge:
        return 10;
      case EquipmentEffectKind.FoxKnowledge:
        return 10;
      case EquipmentEffectKind.DevilFishKnowledge:
        return 10;
      case EquipmentEffectKind.TreantKnowledge:
        return 10;
      case EquipmentEffectKind.FlameTigerKnowledge:
        return 10;
      case EquipmentEffectKind.UnicornKnowledge:
        return 10;
      case EquipmentEffectKind.PhysicalDamage:
        return 10;
      case EquipmentEffectKind.FireDamage:
        return 10;
      case EquipmentEffectKind.IceDamage:
        return 10;
      case EquipmentEffectKind.ThunderDamage:
        return 10;
      case EquipmentEffectKind.LightDamage:
        return 10;
      case EquipmentEffectKind.DarkDamage:
        return 10;
      case EquipmentEffectKind.HpRegen:
        return 5;
      case EquipmentEffectKind.MpRegen:
        return 5;
      case EquipmentEffectKind.TamingPoint:
        return 10;
      case EquipmentEffectKind.WarriorSkillRange:
        return 2;
      case EquipmentEffectKind.WizardSkillRange:
        return 2;
      case EquipmentEffectKind.AngelSkillRange:
        return 2;
      case EquipmentEffectKind.ThiefSkillRange:
        return 2;
      case EquipmentEffectKind.ArcherSkillRange:
        return 2;
      case EquipmentEffectKind.TamerSkillRange:
        return 2;
      case EquipmentEffectKind.TownMatGain:
        return 10;
      case EquipmentEffectKind.TownMatAreaClearGain:
        return 10;
      case EquipmentEffectKind.RebirthPointGain1:
        return 10;
      case EquipmentEffectKind.RebirthPointGain2:
        return 10;
      case EquipmentEffectKind.RebirthPointGain3:
        return 10;
      case EquipmentEffectKind.CriticalDamage:
        return 2;
      case EquipmentEffectKind.BlessingEffect:
        return 10;
      case EquipmentEffectKind.MoveSpeedAdder:
        return 10;
      case EquipmentEffectKind.PetEXPGain:
        return 10;
      case EquipmentEffectKind.LoyaltyPointGain:
        return 10;
      case EquipmentEffectKind.CatalystDoubleCriticalChance:
        return 10;
      case EquipmentEffectKind.WarriorSkillEffectRange:
        return 2;
      case EquipmentEffectKind.WizardSkillEffectRange:
        return 2;
      case EquipmentEffectKind.AngelSkillEffectRange:
        return 2;
      case EquipmentEffectKind.ThiefSkillEffectRange:
        return 2;
      case EquipmentEffectKind.ArcherSkillEffectRange:
        return 2;
      case EquipmentEffectKind.TamerSkillEffectRange:
        return 2;
      case EquipmentEffectKind.HpRegenMultiplier:
        return 5;
      case EquipmentEffectKind.MpRegenMultiplier:
        return 5;
      case EquipmentEffectKind.ArmoredFury:
        return 10;
      case EquipmentEffectKind.WardedFury:
        return 10;
      case EquipmentEffectKind.PetPhysicalCriticalChance:
        return 2;
      case EquipmentEffectKind.PetMagicalCriticalChance:
        return 2;
      case EquipmentEffectKind.PetCriticalDamage:
        return 2;
      case EquipmentEffectKind.PetDebuffResistance:
        return 5;
      case EquipmentEffectKind.StoneTownResearchPower:
        return 10;
      case EquipmentEffectKind.CrystalTownResearchPower:
        return 10;
      case EquipmentEffectKind.LeafTownResearchPower:
        return 10;
      case EquipmentEffectKind.GuildEXPGain:
        return 10;
      case EquipmentEffectKind.SPDMultiplier:
        return 5;
      case EquipmentEffectKind.CriticalDamageMultiplier:
        return 5;
      case EquipmentEffectKind.SkillProficiencyMultiplier:
        return 5;
      case EquipmentEffectKind.EquipmentProficiencyMultiplier:
        return 5;
      case EquipmentEffectKind.EXPGainMultiplier:
        return 5;
      case EquipmentEffectKind.GoldGainMultiplier:
        return 5;
      case EquipmentEffectKind.PhysicalDamageMultiplier:
        return 5;
      case EquipmentEffectKind.FireDamageMultiplier:
        return 5;
      case EquipmentEffectKind.IceDamageMultiplier:
        return 5;
      case EquipmentEffectKind.ThunderDamageMultiplier:
        return 5;
      case EquipmentEffectKind.LightDamageMultiplier:
        return 5;
      case EquipmentEffectKind.DarkDamageMultiplier:
        return 5;
      case EquipmentEffectKind.TamingPointMultiplier:
        return 5;
      case EquipmentEffectKind.PetEXPGainMultiplier:
        return 5;
      case EquipmentEffectKind.LoyaltyPointGainMultiplier:
        return 5;
      case EquipmentEffectKind.BlessingEffectMultiplier:
        return 5;
      case EquipmentEffectKind.PhysicalCriticalMultiplier:
        return 2;
      case EquipmentEffectKind.MagicalCriticalMultiplier:
        return 2;
      case EquipmentEffectKind.ChallengeBossKnowledge:
        return 10;
      case EquipmentEffectKind.HPAfter:
        return 10;
      case EquipmentEffectKind.MPAfter:
        return 10;
      case EquipmentEffectKind.ATKAfter:
        return 10;
      case EquipmentEffectKind.MATKAfter:
        return 10;
      case EquipmentEffectKind.DEFAfter:
        return 10;
      case EquipmentEffectKind.MDEFAfter:
        return 10;
      case EquipmentEffectKind.SPDAfter:
        return 10;
      case EquipmentEffectKind.MoveSpeedAfter:
        return 10;
      case EquipmentEffectKind.PhysicalCriticalAfter:
        return 10;
      case EquipmentEffectKind.MagicalCriticalAfter:
        return 10;
      case EquipmentEffectKind.CriticalDamageAfter:
        return 10;
      case EquipmentEffectKind.DebuffResistanceAfter:
        return 10;
      case EquipmentEffectKind.PhysicalDamageAfter:
        return 10;
      case EquipmentEffectKind.FireDamageAfter:
        return 10;
      case EquipmentEffectKind.IceDamageAfter:
        return 10;
      case EquipmentEffectKind.ThunderDamageAfter:
        return 10;
      case EquipmentEffectKind.LightDamageAfter:
        return 10;
      case EquipmentEffectKind.DarkDamageAfter:
        return 10;
      case EquipmentEffectKind.FireResistanceAfter:
        return 10;
      case EquipmentEffectKind.IceResistanceAfter:
        return 10;
      case EquipmentEffectKind.ThunderResistanceAfter:
        return 10;
      case EquipmentEffectKind.LightResistanceAfter:
        return 10;
      case EquipmentEffectKind.DarkResistanceAfter:
        return 10;
      case EquipmentEffectKind.SlimeKnowledgeAfter:
        return 10;
      case EquipmentEffectKind.MagicSlimeKnowledgeAfter:
        return 10;
      case EquipmentEffectKind.SpiderKnowledgeAfter:
        return 10;
      case EquipmentEffectKind.BatKnowledgeAfter:
        return 10;
      case EquipmentEffectKind.FairyKnowledgeAfter:
        return 10;
      case EquipmentEffectKind.FoxKnowledgeAfter:
        return 10;
      case EquipmentEffectKind.DevilFishKnowledgeAfter:
        return 10;
      case EquipmentEffectKind.TreantKnowledgeAfter:
        return 10;
      case EquipmentEffectKind.FlameTigerKnowledgeAfter:
        return 10;
      case EquipmentEffectKind.UnicornKnowledgeAfter:
        return 10;
      case EquipmentEffectKind.ChallengeBossKnowledgeAfter:
        return 10;
      case EquipmentEffectKind.SDDamageMultiplier:
        return 10;
      case EquipmentEffectKind.SDDamageCutMultiplier:
        return 10;
      case EquipmentEffectKind.FameGain:
        return 10;
      case EquipmentEffectKind.DungeonCoinGain:
        return 10;
      case EquipmentEffectKind.ExtraAfterDamage:
        return 10;
      default:
        return 2;
    }
  },

  EffectCalculation(kind: EquipmentEffectKind, level) {
    switch (kind) {
      case EquipmentEffectKind.HPAdder:
        return 10.0 * Math.pow(level, 2.0);
      case EquipmentEffectKind.MPAdder:
        return 5.0 * Math.pow(level, 2.0);
      case EquipmentEffectKind.ATKAdder:
        return Math.pow(level, 2.0);
      case EquipmentEffectKind.MATKAdder:
        return Math.pow(level, 2.0);
      case EquipmentEffectKind.DEFAdder:
        return Math.pow(level, 2.0);
      case EquipmentEffectKind.MDEFAdder:
        return Math.pow(level, 2.0);
      case EquipmentEffectKind.SPDAdder:
        return Math.pow(level, 2.0);
      case EquipmentEffectKind.HPMultiplier:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.MPMultiplier:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.ATKMultiplier:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.MATKMultiplier:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.DEFMultiplier:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.MDEFMultiplier:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.ATKPropotion:
        return (10 * level) / 100.0;
      case EquipmentEffectKind.MATKPropotion:
        return (10 * level) / 100.0;
      case EquipmentEffectKind.DEFPropotion:
        return (10 * level) / 100.0;
      case EquipmentEffectKind.MDEFPropotion:
        return (10 * level) / 100.0;
      case EquipmentEffectKind.FireResistance:
        return (2 * level) / 100.0;
      case EquipmentEffectKind.IceResistance:
        return (2 * level) / 100.0;
      case EquipmentEffectKind.ThunderResistance:
        return (2 * level) / 100.0;
      case EquipmentEffectKind.LightResistance:
        return (2 * level) / 100.0;
      case EquipmentEffectKind.DarkResistance:
        return (2 * level) / 100.0;
      case EquipmentEffectKind.PhysicalAbsorption:
        return Math.pow(level, 2.0) / 100.0;
      case EquipmentEffectKind.FireAbsorption:
        return Math.pow(level, 2.0) / 100.0;
      case EquipmentEffectKind.IceAbsorption:
        return Math.pow(level, 2.0) / 100.0;
      case EquipmentEffectKind.ThunderAbsorption:
        return Math.pow(level, 2.0) / 100.0;
      case EquipmentEffectKind.LightAbsorption:
        return Math.pow(level, 2.0) / 100.0;
      case EquipmentEffectKind.DarkAbsorption:
        return Math.pow(level, 2.0) / 100.0;
      case EquipmentEffectKind.DebuffResistance:
        return (5 * level) / 100.0;
      case EquipmentEffectKind.EquipmentDropChance:
        return (0.0001 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.SlimeDropChance:
        return (0.01 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.MagicSlimeDropChance:
        return (0.01 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.SpiderDropChance:
        return (0.01 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.BatDropChance:
        return (0.01 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.FairyDropChance:
        return (0.01 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.FoxDropChance:
        return (0.01 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.DevilFishDropChance:
        return (0.01 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.TreantDropChance:
        return (0.01 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.FlameTigerDropChance:
        return (0.01 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.UnicornDropChance:
        return (0.01 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.ColorMaterialDropChance:
        return (0.0001 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.PhysicalCritical:
        return (3 * level) / 100.0;
      case EquipmentEffectKind.MagicalCritical:
        return (3 * level) / 100.0;
      case EquipmentEffectKind.EXPGain:
        return (1.0 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.SkillProficiency:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.EquipmentProficiency:
        return (0.25 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.MoveSpeedMultiplier:
        return (0.1 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.GoldGain:
        return (level * (level + 1)) / 100.0;
      case EquipmentEffectKind.StoneGain:
        return (5.0 * Math.pow(level, 2.0)) / 100.0;
      case EquipmentEffectKind.CrystalGain:
        return (5.0 * Math.pow(level, 2.0)) / 100.0;
      case EquipmentEffectKind.LeafGain:
        return (5.0 * Math.pow(level, 2.0)) / 100.0;
      case EquipmentEffectKind.WarriorSkillLevel:
        return 2 * level;
      case EquipmentEffectKind.WizardSkillLevel:
        return 2 * level;
      case EquipmentEffectKind.AngelSkillLevel:
        return 2 * level;
      case EquipmentEffectKind.ThiefSkillLevel:
        return 2 * level;
      case EquipmentEffectKind.ArcherSkillLevel:
        return 2 * level;
      case EquipmentEffectKind.TamerSkillLevel:
        return 2 * level;
      case EquipmentEffectKind.AllSkillLevel:
        return level;
      case EquipmentEffectKind.SlimeKnowledge:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.MagicSlimeKnowledge:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.SpiderKnowledge:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.BatKnowledge:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.FairyKnowledge:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.FoxKnowledge:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.DevilFishKnowledge:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.TreantKnowledge:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.FlameTigerKnowledge:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.UnicornKnowledge:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.PhysicalDamage:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.FireDamage:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.IceDamage:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.ThunderDamage:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.LightDamage:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.DarkDamage:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.HpRegen:
        return 10 * level;
      case EquipmentEffectKind.MpRegen:
        return 10 * level * (level + 1);
      case EquipmentEffectKind.TamingPoint:
        return 0.05 * level;
      case EquipmentEffectKind.WarriorSkillRange:
        return 0.002 * level;
      case EquipmentEffectKind.WizardSkillRange:
        return 0.002 * level;
      case EquipmentEffectKind.AngelSkillRange:
        return 0.002 * level;
      case EquipmentEffectKind.ThiefSkillRange:
        return 0.002 * level;
      case EquipmentEffectKind.ArcherSkillRange:
        return 0.002 * level;
      case EquipmentEffectKind.TamerSkillRange:
        return 0.002 * level;
      case EquipmentEffectKind.TownMatGain:
        return 0.01 * level;
      case EquipmentEffectKind.TownMatAreaClearGain:
        return level;
      case EquipmentEffectKind.RebirthPointGain1:
        return 0.01 * level;
      case EquipmentEffectKind.RebirthPointGain2:
        return 0.01 * level;
      case EquipmentEffectKind.RebirthPointGain3:
        return 0.01 * level;
      case EquipmentEffectKind.CriticalDamage:
        return (5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.BlessingEffect:
        return 0.01 * level;
      case EquipmentEffectKind.MoveSpeedAdder:
        return (level * (level + 1)) / 2.0;
      case EquipmentEffectKind.PetEXPGain:
        return 0.05 * level;
      case EquipmentEffectKind.LoyaltyPointGain:
        return 0.05 * level;
      case EquipmentEffectKind.CatalystDoubleCriticalChance:
        return 0.005 * level;
      case EquipmentEffectKind.WarriorSkillEffectRange:
        return 0.002 * level;
      case EquipmentEffectKind.WizardSkillEffectRange:
        return 0.002 * level;
      case EquipmentEffectKind.AngelSkillEffectRange:
        return 0.002 * level;
      case EquipmentEffectKind.ThiefSkillEffectRange:
        return 0.002 * level;
      case EquipmentEffectKind.ArcherSkillEffectRange:
        return 0.002 * level;
      case EquipmentEffectKind.TamerSkillEffectRange:
        return 0.002 * level;
      case EquipmentEffectKind.HpRegenMultiplier:
        return 0.005 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.MpRegenMultiplier:
        return 0.005 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.ArmoredFury:
        return 0.1 * level * 0.01;
      case EquipmentEffectKind.WardedFury:
        return 0.1 * level * 0.01;
      case EquipmentEffectKind.PetPhysicalCriticalChance:
        return 3 * level * 0.01;
      case EquipmentEffectKind.PetMagicalCriticalChance:
        return 3 * level * 0.01;
      case EquipmentEffectKind.PetCriticalDamage:
        return 5 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.PetDebuffResistance:
        return 5 * level * 0.01;
      case EquipmentEffectKind.StoneTownResearchPower:
        return 0.025 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.CrystalTownResearchPower:
        return 0.025 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.LeafTownResearchPower:
        return 0.025 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.GuildEXPGain:
        return 0.002 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.SPDMultiplier:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.CriticalDamageMultiplier:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.SkillProficiencyMultiplier:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.EquipmentProficiencyMultiplier:
        return (0.25 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.EXPGainMultiplier:
        return (0.25 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.GoldGainMultiplier:
        return (0.25 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.PhysicalDamageMultiplier:
        return (0.25 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.FireDamageMultiplier:
        return (0.25 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.IceDamageMultiplier:
        return (0.25 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.ThunderDamageMultiplier:
        return (0.25 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.LightDamageMultiplier:
        return (0.25 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.DarkDamageMultiplier:
        return (0.25 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.TamingPointMultiplier:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.PetEXPGainMultiplier:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.LoyaltyPointGainMultiplier:
        return (0.5 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.BlessingEffectMultiplier:
        return (0.05 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.PhysicalCriticalMultiplier:
        return (2 * level) / 100.0;
      case EquipmentEffectKind.MagicalCriticalMultiplier:
        return (2 * level) / 100.0;
      case EquipmentEffectKind.ChallengeBossKnowledge:
        return (0.2 * level * (level + 1)) / 100.0;
      case EquipmentEffectKind.HPAfter:
        return 12.5 * level * (level + 1);
      case EquipmentEffectKind.MPAfter:
        return 10.0 * level * (level + 1);
      case EquipmentEffectKind.ATKAfter:
        return 5.0 * level * (level + 1);
      case EquipmentEffectKind.MATKAfter:
        return 5.0 * level * (level + 1);
      case EquipmentEffectKind.DEFAfter:
        return 5.0 * level * (level + 1);
      case EquipmentEffectKind.MDEFAfter:
        return 5.0 * level * (level + 1);
      case EquipmentEffectKind.SPDAfter:
        return 5.0 * level * (level + 1);
      case EquipmentEffectKind.MoveSpeedAfter:
        return 0.5 * level * (level + 1);
      case EquipmentEffectKind.PhysicalCriticalAfter:
        return 0.1 * level * 0.01;
      case EquipmentEffectKind.MagicalCriticalAfter:
        return 0.1 * level * 0.01;
      case EquipmentEffectKind.CriticalDamageAfter:
        return level * (level + 1) * 0.01;
      case EquipmentEffectKind.DebuffResistanceAfter:
        return 0.1 * level * 0.01;
      case EquipmentEffectKind.PhysicalDamageAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.FireDamageAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.IceDamageAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.ThunderDamageAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.LightDamageAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.DarkDamageAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.FireResistanceAfter:
        return 0.1 * level * 0.01;
      case EquipmentEffectKind.IceResistanceAfter:
        return 0.1 * level * 0.01;
      case EquipmentEffectKind.ThunderResistanceAfter:
        return 0.1 * level * 0.01;
      case EquipmentEffectKind.LightResistanceAfter:
        return 0.1 * level * 0.01;
      case EquipmentEffectKind.DarkResistanceAfter:
        return 0.1 * level * 0.01;
      case EquipmentEffectKind.SlimeKnowledgeAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.MagicSlimeKnowledgeAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.SpiderKnowledgeAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.BatKnowledgeAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.FairyKnowledgeAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.FoxKnowledgeAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.DevilFishKnowledgeAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.TreantKnowledgeAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.FlameTigerKnowledgeAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.UnicornKnowledgeAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.ChallengeBossKnowledgeAfter:
        return 10.0 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.SDDamageMultiplier:
        return 2.5 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.SDDamageCutMultiplier:
        return 2.5 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.FameGain:
        return 0.1 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.DungeonCoinGain:
        return 0.01 * level * (level + 1) * 0.01;
      case EquipmentEffectKind.ExtraAfterDamage:
        return 0.01 * level * (level + 1) * 0.01;
      default:
        return 0.0;
    }
  },

  RequiredLevelIncrement(kind: EquipmentEffectKind, level) {
    return kind == EquipmentEffectKind.Nothing ? 0 : (25 / this.MaxLevel(kind)) * level * this.RarityFactor(kind);
  },

  IsAfter(kind: EquipmentEffectKind) {
    switch (kind) {
      case EquipmentEffectKind.HPAfter:
        return true;
      case EquipmentEffectKind.MPAfter:
        return true;
      case EquipmentEffectKind.ATKAfter:
        return true;
      case EquipmentEffectKind.MATKAfter:
        return true;
      case EquipmentEffectKind.DEFAfter:
        return true;
      case EquipmentEffectKind.MDEFAfter:
        return true;
      case EquipmentEffectKind.SPDAfter:
        return true;
      case EquipmentEffectKind.MoveSpeedAfter:
        return true;
      case EquipmentEffectKind.PhysicalCriticalAfter:
        return true;
      case EquipmentEffectKind.MagicalCriticalAfter:
        return true;
      case EquipmentEffectKind.CriticalDamageAfter:
        return true;
      case EquipmentEffectKind.DebuffResistanceAfter:
        return true;
      case EquipmentEffectKind.PhysicalDamageAfter:
        return true;
      case EquipmentEffectKind.FireDamageAfter:
        return true;
      case EquipmentEffectKind.IceDamageAfter:
        return true;
      case EquipmentEffectKind.ThunderDamageAfter:
        return true;
      case EquipmentEffectKind.LightDamageAfter:
        return true;
      case EquipmentEffectKind.DarkDamageAfter:
        return true;
      case EquipmentEffectKind.FireResistanceAfter:
        return true;
      case EquipmentEffectKind.IceResistanceAfter:
        return true;
      case EquipmentEffectKind.ThunderResistanceAfter:
        return true;
      case EquipmentEffectKind.LightResistanceAfter:
        return true;
      case EquipmentEffectKind.DarkResistanceAfter:
        return true;
      case EquipmentEffectKind.SlimeKnowledgeAfter:
        return true;
      case EquipmentEffectKind.MagicSlimeKnowledgeAfter:
        return true;
      case EquipmentEffectKind.SpiderKnowledgeAfter:
        return true;
      case EquipmentEffectKind.BatKnowledgeAfter:
        return true;
      case EquipmentEffectKind.FairyKnowledgeAfter:
        return true;
      case EquipmentEffectKind.FoxKnowledgeAfter:
        return true;
      case EquipmentEffectKind.DevilFishKnowledgeAfter:
        return true;
      case EquipmentEffectKind.TreantKnowledgeAfter:
        return true;
      case EquipmentEffectKind.FlameTigerKnowledgeAfter:
        return true;
      case EquipmentEffectKind.UnicornKnowledgeAfter:
        return true;
      case EquipmentEffectKind.ChallengeBossKnowledgeAfter:
        return true;
      case EquipmentEffectKind.SDDamageMultiplier:
        return true;
      case EquipmentEffectKind.SDDamageCutMultiplier:
        return true;
      case EquipmentEffectKind.FameGain:
        return true;
      case EquipmentEffectKind.DungeonCoinGain:
        return true;
      case EquipmentEffectKind.ExtraAfterDamage:
        return true;
      default:
        return false;
    }
  },

  MaxEffectValue(kind: EquipmentForgeEffectKind) {
    switch (kind) {
      case EquipmentForgeEffectKind.IncreaseProficiencyGain:
        return 100;
      case EquipmentForgeEffectKind.IncreaseEffect:
        return 10;
      case EquipmentForgeEffectKind.PurifyCurseEffect:
        return 1;
      case EquipmentForgeEffectKind.IncreaseEffectIncrement:
        return 1;
      case EquipmentForgeEffectKind.EqLevel:
        return 100;
      default:
        return 1e9;
    }
  },
};
