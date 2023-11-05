import { HeroKind } from "./type/HeroKind";
import { AreaKind } from "./type/AreaKind";
import { ResourceKind } from "./type/ResourceKind";
import { GlobalStats } from "./type/GlobalStats";
import { BasicStatsKind } from "./type/BasicStatsKind";
import { MonsterSpecies } from "./type/MonsterSpecies";
import { PetActiveEffectKind } from "./type/PetActiveEffectKind";
import { Stats } from "./type/Stats";
import { Element } from "./type/Element";
import { GuildAbilityKind } from "./type/GuildAbilityKind";

export const Enums = {
  HeroKind: Object.entries(HeroKind).length / 2,
  AreaKind: Object.entries(AreaKind).length / 2,
  ResourceKind: Object.entries(ResourceKind).length / 2,
  GlobalStats: Object.entries(GlobalStats).length / 2,
  Stats: Object.entries(Stats).length / 2,
  BasicStatsKind: Object.entries(BasicStatsKind).length / 2,
  MonsterSpecies: Object.entries(MonsterSpecies).length / 2,
  Element: Object.entries(Element).length / 2,
  PetActiveEffectKind: Object.entries(PetActiveEffectKind).length / 2,
  GuildAbilityKind: Object.entries(GuildAbilityKind).length / 2,
};

export const Enum = {
  GetNames: (kind) => {
    return kind;
  },
};

// console.log(Stats);
