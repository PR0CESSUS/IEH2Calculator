import { MultiplierKind } from "../type/MultiplierKind";

export function StatsBreakdown(kind: MultiplierKind) {
  switch (kind) {
    case MultiplierKind.Base:
      return "Base";
    case MultiplierKind.Ability:
      return "Ability";
    case MultiplierKind.SuperAbility:
      return "Super Ability";
    case MultiplierKind.Title:
      return "Title";
    case MultiplierKind.Quest:
      return "Quest";
    case MultiplierKind.Skill:
      return "Skill";
    case MultiplierKind.ChanneledSkill:
      return "Channeled Skill";
    case MultiplierKind.SkillPassive:
      return "Skill Passive";
    case MultiplierKind.Stance:
      return "Stance";
    case MultiplierKind.Upgrade:
      return "Upgrade";
    case MultiplierKind.Town:
      return "Town";
    case MultiplierKind.TownResearch:
      return "Town Research";
    case MultiplierKind.Equipment:
      return "Equipment";
    case MultiplierKind.ArmoredFury:
      return "Armored Fury";
    case MultiplierKind.WardedFury:
      return "Warded Fury";
    case MultiplierKind.Dictionary:
      return "Dictionary";
    case MultiplierKind.Alchemy:
      return "Alchemy Upgrade";
    case MultiplierKind.AlchemyExpand:
      return "Expand Cap";
    case MultiplierKind.Potion:
      return "Potion";
    case MultiplierKind.Pet:
      return "Pet";
    case MultiplierKind.PetRankMilestone:
      return "Pet Rank Milestone";
    case MultiplierKind.Guild:
      return "Guild Ability";
    case MultiplierKind.GuildSuperAbility:
      return "Guild Super Ability";
    case MultiplierKind.Rebirth:
      return "Rebirth";
    case MultiplierKind.Challenge:
      return "Challenge";
    case MultiplierKind.SuperDungeon:
      return "Super Dungeon";
    case MultiplierKind.DungeonItem:
      return "SD Powerup";
    case MultiplierKind.DungeonItemPermanent:
      return "SD Powerup (Permanent)";
    case MultiplierKind.SDUpgrade:
      return "SD Upgrade";
    case MultiplierKind.SDShop:
      return "SD Ruby Shop";
    case MultiplierKind.SDModifier:
      return "SD Modifier";
    case MultiplierKind.SDModifierMilestone:
      return "SD Modifier Milestone";
    case MultiplierKind.SDGemRitual:
      return "SD Gem Ritual";
    case MultiplierKind.GradeMilestone:
      return "Grade Milestone";
    case MultiplierKind.Expedition:
      return "Expedition";
    case MultiplierKind.ExpeditionMilestone:
      return "Expedition Milestone";
    case MultiplierKind.MissionMilestone:
      return "Mission Milestone";
    case MultiplierKind.AreaPrestige:
      return "Area Prestige";
    case MultiplierKind.Ascension:
      return "World Ascension";
    case MultiplierKind.AreaDebuff:
      return "Field Debuff";
    case MultiplierKind.FieldCurse:
      return "Field Curse";
    case MultiplierKind.Blessing:
      return "Blessing";
    case MultiplierKind.Buff:
      return "Skill Buff";
    case MultiplierKind.Debuff:
      return "Debuff";
    case MultiplierKind.Talisman:
      return "Talisman";
    case MultiplierKind.TalismanPassive:
      return "Talisman Passive";
    case MultiplierKind.Achievement:
      return "Achievement";
    case MultiplierKind.EpicStore:
      return "Epic Store";
    case MultiplierKind.DLC:
      return "Steam DLC";
    default:
      return kind;
  }
}
