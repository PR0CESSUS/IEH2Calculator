import { PotionKind } from "../type/PotionKind";

export function PotionName(kind: PotionKind) {
  switch (kind) {
    case PotionKind.MinorHealthPotion:
      return "Minor Health Potion";
    case PotionKind.MinorRegenerationPoultice:
      return "Minor Regeneration Poultice";
    case PotionKind.MinorResourcePoultice:
      return "Minor Resource Poultice";
    case PotionKind.SlickShoeSolution:
      return "Slick Shoe Solution";
    case PotionKind.MinorManaRegenerationPoultice:
      return "Minor Mana Regeneration Poultice";
    case PotionKind.MaterialMultiplierMist:
      return "Material Multiplier Mist";
    case PotionKind.BasicElixirOfBrawn:
      return "Basic Elixir of Brawn";
    case PotionKind.BasicElixirOfBrains:
      return "Basic Elixir of Brains";
    case PotionKind.BasicElixirOfFortitude:
      return "Basic Elixir of Fortitude";
    case PotionKind.BasicElixirOfConcentration:
      return "Basic Elixir of Concentration";
    case PotionKind.BasicElixirOfUnderstanding:
      return "Basic Elixir of Understanding";
    case PotionKind.ChilledHealthPotion:
      return "Chilled Health Potion";
    case PotionKind.ChilledRegenerationPoultice:
      return "Chilled Regeneration Poultice";
    case PotionKind.FrostyDefensePotion:
      return "Frosty Defense Potion";
    case PotionKind.IcyAuraDraught:
      return "Ice Aura Draught";
    case PotionKind.SlightlyStickySalve:
      return "Slightly Sticky Salve";
    case PotionKind.SlickerShoeSolution:
      return "Slicker Shoe Solution";
    case PotionKind.CoolHeadOintment:
      return "Cool Head Ointment";
    case PotionKind.FrostySlayersOil:
      return "Frosty Slayer's Oil";
    case PotionKind.BurningDefensePotion:
      return "Burning Defense Potion";
    case PotionKind.BlazingAuraDraught:
      return "Blazing Aura Draught";
    case PotionKind.FierySlayersOil:
      return "Fiery Slayer's Oil";
    case PotionKind.ElectricDefensePotion:
      return "Electric Defense Potion";
    case PotionKind.WhirlingAuraDraught:
      return "Whirling Aura Draught";
    case PotionKind.ShockingSlayersOil:
      return "Shocking Slayer's Oil";
    case PotionKind.ThrowingNet:
      return "Throwing Net";
    case PotionKind.IceRope:
      return "Ice Net";
    case PotionKind.ThunderRope:
      return "Thunder Net";
    case PotionKind.FireRope:
      return "Fire Net";
    case PotionKind.LightRope:
      return "Light Net";
    case PotionKind.DarkRope:
      return "Dark Net";
    case PotionKind.GuildMembersEmblem:
      return "Guild Member's Emblem";
    case PotionKind.CertificateOfCompetence:
      return "Certificate of Competence";
    case PotionKind.MasonsTrowel:
      return "Mason's Trowel";
    case PotionKind.EnchantedAlembic:
      return "Enchanted Alembic";
    case PotionKind.TrackersMap:
      return "Tracker's Map";
    case PotionKind.BerserkersStone:
      return "Berserker's Stone";
    case PotionKind.TrappersTag:
      return "Trapper's Tag";
    case PotionKind.FlorzporbDoll:
      return "Florzporb Doll";
    case PotionKind.ArachnettaDoll:
      return "Arachnetta Doll";
    case PotionKind.GuardianKorDoll:
      return "Guardian Kor Doll";
    case PotionKind.SlimeBadge:
      return "Slime Badge";
    case PotionKind.MagicslimeBadge:
      return "Magicslime Badge";
    case PotionKind.SpiderBadge:
      return "Spider Badge";
    case PotionKind.BatBadge:
      return "Bat Badge";
    case PotionKind.FairyBadge:
      return "Fairy Badge";
    case PotionKind.FoxBadge:
      return "Fox Badge";
    case PotionKind.DevilfishBadge:
      return "Devilfish Badge";
    case PotionKind.TreantBadge:
      return "Treant Badge";
    case PotionKind.FlametigerBadge:
      return "Flametiger Badge";
    case PotionKind.UnicornBadge:
      return "Unicorn Badge";
    case PotionKind.AscendedFromIEH1:
      return "Proof of Ascension from IEH1";
    case PotionKind.WarriorsBadge:
      return "Warrior's Badge";
    case PotionKind.WizardsBadge:
      return "Wizard's Badge";
    case PotionKind.AngelsBadge:
      return "Angel's Badge";
    case PotionKind.ThiefsBadge:
      return "Thief's Badge";
    case PotionKind.ArchersBadge:
      return "Archer's Badge";
    case PotionKind.TamersBadge:
      return "Tamer's Badge";
    case PotionKind.NostroDoll:
      return "Nostro Doll";
    case PotionKind.LadyEmeldaDoll:
      return "Lady Emelda Doll";
    case PotionKind.NariSuneDoll:
      return "Nari Sune Doll";
    case PotionKind.OctobaddieDoll:
      return "Octobaddie Doll";
    case PotionKind.BananoonDoll:
      return "Bananoon Doll";
    case PotionKind.GlorbliorbusDoll:
      return "Glorbliorbus Doll";
    case PotionKind.DistortionSlimeDoll:
      return "Gankyū Doll";
    case PotionKind.AncientSlimeBadge:
      return "Ancient Slime Badge";
    case PotionKind.AncientMagicslimeBadge:
      return "Ancient Magicslime Badge";
    case PotionKind.AncientSpiderBadge:
      return "Ancient Spider Badge";
    case PotionKind.AncientBatBadge:
      return "Ancient Bat Badge";
    case PotionKind.AncientFairyBadge:
      return "Ancient Fairy Badge";
    case PotionKind.AncientFoxBadge:
      return "Ancient Fox Badge";
    case PotionKind.AncientDevilfishBadge:
      return "Ancient Devilfish Badge";
    case PotionKind.AncientTreantBadge:
      return "Ancient Treant Badge";
    case PotionKind.AncientFlametigerBadge:
      return "Ancient Flametiger Badge";
    case PotionKind.AncientUnicornBadge:
      return "Ancient Unicorn Badge";
    case PotionKind.AncientWarriorsBadge:
      return "Ancient Warrior's Badge";
    case PotionKind.AncientWizardsBadge:
      return "Ancient Wizard's Badge";
    case PotionKind.AncientAngelsBadge:
      return "Ancient Angel's Badge";
    case PotionKind.AncientThiefsBadge:
      return "Ancient Thief's Badge";
    case PotionKind.AncientArchersBadge:
      return "Ancient Archer's Badge";
    case PotionKind.AncientTamersBadge:
      return "Ancient Tamer's Badge";
    default:
      return PotionKind[kind];
  }
}
