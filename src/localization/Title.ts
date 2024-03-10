import { TitleKind } from "../type/TitleKind";

export function Title(kind: TitleKind) {
  switch (kind) {
    case TitleKind.SkillMaster:
      return "Class Master";
    case TitleKind.MonsterDistinguisher:
      return "Monster Study";
    case TitleKind.EquipmentSlotWeapon:
      return "Apprentice of Weapon";
    case TitleKind.EquipmentSlotArmor:
      return "Apprentice of Armor";
    case TitleKind.EquipmentSlotJewelry:
      return "Apprentice of Jewelry";
    case TitleKind.PotionSlot:
      return "Apprentice of Potion";
    case TitleKind.EquipmentProficiency:
      return "Equipment Master";
    case TitleKind.PhysicalDamage:
      return "Master of Physical Attacks";
    case TitleKind.FireDamage:
      return "Master of Fire Attacks";
    case TitleKind.IceDamage:
      return "Master of Ice Attacks";
    case TitleKind.ThunderDamage:
      return "Master of Thunder Attacks";
    case TitleKind.LightDamage:
      return "Master of Light Attacks";
    case TitleKind.DarkDamage:
      return "Master of Dark Attacks";
    case TitleKind.Alchemist:
      return "Alchemist";
    case TitleKind.MetalHunter:
      return "Metal Hunter";
    case TitleKind.Survival:
      return "Survival";
    case TitleKind.FireResistance:
      return "Fire Soul";
    case TitleKind.IceResistance:
      return "Ice Soul";
    case TitleKind.ThunderResistance:
      return "Thunder Soul";
    case TitleKind.LightResistance:
      return "Light Soul";
    case TitleKind.DarkResistance:
      return "Dark Soul";
    case TitleKind.Cooperation:
      return "Proof of Rebirth";
    case TitleKind.DebuffResistance:
      return "Holy Guard";
    case TitleKind.MoveSpeed:
      return "Racer";
    case TitleKind.BreakingTheLimit:
      return "Breaking The Limit";
    case TitleKind.Quester:
      return "Quester";
    case TitleKind.ExplorerOfSD:
      return "Explorer of Super Dungeon";
    default:
      return "Not Implemented";
  }
}
