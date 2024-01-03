import { HeroKind } from "./type/HeroKind";
import { AreaKind } from "./type/AreaKind";
import { ResourceKind } from "./type/ResourceKind";
import { GlobalStats } from "./type/GlobalStats";
import { BasicStatsKind } from "./type/BasicStatsKind";
import { MonsterSpecies } from "./type/MonsterSpecies";
import { ChallengeMonsterKind } from "./type/ChallengeMonsterKind";
import { MonsterColor } from "./type/MonsterColor";
import { PetActiveEffectKind } from "./type/PetActiveEffectKind";
import { AbilityKind } from "./type/AbilityKind";
import { Stats } from "./type/Stats";
import { Element } from "./type/Element";
import { GuildAbilityKind } from "./type/GuildAbilityKind";
import { EquipmentSetKind } from "./type/EquipmentSetKind";
import { EquipmentKind } from "./type/EquipmentKind";
import { EquipmentPart } from "./type/EquipmentPart";
import { PotionKind } from "./type/PotionKind";
import { SuperDungeonPowerupKind } from "./type/SuperDungeonPowerupKind";
import { MultiplierKind } from "./type/MultiplierKind";
import { TitleKind } from "./type/TitleKind";
import { SkillKindWarrior } from "./type/SkillKindWarrior";
import { EquipmentEffectKind } from "./type/EquipmentEffectKind";
import { RebirthUpgradeKind } from "./type/RebirthUpgradeKind";
import { EquipmentForgeEffectKind } from "./type/EquipmentForgeEffectKind";

export const Enums = {
  HeroKind: Object.entries(HeroKind).length / 2,
  AreaKind: Object.entries(AreaKind).length / 2,
  ResourceKind: Object.entries(ResourceKind).length / 2,
  GlobalStats: Object.entries(GlobalStats).length / 2,
  Stats: Object.entries(Stats).length / 2,
  BasicStatsKind: Object.entries(BasicStatsKind).length / 2,
  ChallengeMonsterKind: Object.entries(ChallengeMonsterKind).length / 2,
  MonsterSpecies: Object.entries(MonsterSpecies).length / 2,
  MonsterColor: Object.entries(MonsterColor).length / 2,
  Element: Object.entries(Element).length / 2,
  PetActiveEffectKind: Object.entries(PetActiveEffectKind).length / 2,
  GuildAbilityKind: Object.entries(GuildAbilityKind).length / 2,
  AbilityKind: Object.entries(AbilityKind).length / 2,
  EquipmentSetKind: Object.entries(EquipmentSetKind).length / 2,
  EquipmentKind: Object.entries(EquipmentKind).length / 2,
  EquipmentPart: Object.entries(EquipmentPart).length / 2,
  SuperDungeonPowerupKind: Object.entries(SuperDungeonPowerupKind).length / 2,
  PotionKind: Object.entries(PotionKind).length / 2,
  MultiplierKind: Object.entries(MultiplierKind).length / 2,
  TitleKind: Object.entries(TitleKind).length / 2,
  SkillKindWarrior: Object.entries(SkillKindWarrior).length / 2,
  EquipmentEffectKind: Object.entries(EquipmentEffectKind).length / 2,
  RebirthUpgradeKind: Object.entries(RebirthUpgradeKind).length / 2,
  EquipmentForgeEffectKind: Object.entries(EquipmentForgeEffectKind).length / 2,
};

export const Enum = {
  GetNames: (kind) => {
    return kind;
  },
};

// console.log(Stats);
