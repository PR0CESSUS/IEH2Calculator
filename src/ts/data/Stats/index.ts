import { Multiplier, MultiplierInfo } from "../../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { GlobalStats } from "../../type/GlobalStats";
import { HeroKind } from "../../type/HeroKind";
import { ResourceKind } from "../../type/ResourceKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { Element } from "../../type/Element";
import { Debuff } from "../../type/Debuff";
import { Stats } from "../../type/Stats";
import { Enums, Enum } from "../../Enums";
import { HeroStats } from "./HeroStats";
import { Util } from "../../Util";

export class DataStats {
  heroLevelIncrementLimit: Multiplier;
  globalStats: Multiplier[] = Array(Enums.GlobalStats);
  globalSkillSlotNum: Multiplier;
  heroes: HeroStats[] = Array(Enums.HeroKind);

  constructor() {
    for (let kind = 0; kind < this.heroes.length; kind++) this.heroes[kind] = new HeroStats(kind);
    for (let index = 0; index < this.globalStats.length; index++) this.globalStats[index] = new Multiplier();
    this.globalStats[0].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));

    this.heroLevelIncrementLimit = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 30.0));
  }

  GoldGain() {
    return this.globalStats[0];
  }

  ResourceGain(kind: ResourceKind) {
    switch (kind) {
      case ResourceKind.Stone:
        return this.globalStats[1];
      case ResourceKind.Crystal:
        return this.globalStats[2];
      case ResourceKind.Leaf:
        return this.globalStats[3];
      default:
        return this.globalStats[1];
    }
  }

  Hero(kind: HeroKind) {
    return this.heroes[kind];
  }

  BasicStats(heroKind: HeroKind, kind: BasicStatsKind) {
    return this.heroes[heroKind].basicStats[kind];
  }

  SetEffectBasicStats(kind: BasicStatsKind, info: MultiplierInfo) {
    for (let index = 0; index < this.heroes.length; index++) this.BasicStats(index, kind).RegisterMultiplier(info);
  }
  SetEffectStats(kind: Stats, info: MultiplierInfo) {
    for (let index = 0; index < this.heroes.length; index++) this.HeroStats(index, kind).RegisterMultiplier(info);
  }
  BasicStatsPerLevel(heroKind: HeroKind, kind: BasicStatsKind) {
    return this.heroes[heroKind].basicStatsPerLevel[kind];
  }

  SetEffectBasicStatsPerLevel(kind: BasicStatsKind, info: MultiplierInfo) {
    for (let index = 0; index < this.heroes.length; index++) this.BasicStatsPerLevel(index, kind).RegisterMultiplier(info);
  }

  HeroStats(heroKind: HeroKind, kind: Stats) {
    return this.heroes[heroKind].stats[kind];
  }

  ModifiedExpGain(heroKind: HeroKind, areaKind) {
    return (
      (this.HeroStats(heroKind, Stats.ExpGain).Value() / (1.0 + globalThis.data.area.expBonuses[globalThis.data.battle[heroKind].areaBattle.CurrentArea().kind].Value())) *
      (1.0 + globalThis.data.area.expBonuses[areaKind].Value())
    );
  }

  SetEffectResourceGain(info: MultiplierInfo) {
    for (let kind = 0; kind < Enums.ResourceKind; kind++) this.ResourceGain(kind).RegisterMultiplier(info);
  }

  SetEffectGuildExp(info: MultiplierInfo) {
    for (let index = 0; index < this.heroes.length; index++) this.heroes[index].guildExpGain.RegisterMultiplier(info);
  }

  SetEffectLoyalityPointGain(info: MultiplierInfo) {
    for (let index = 0; index < this.heroes.length; index++) this.heroes[index].loyaltyPoingGain.RegisterMultiplier(info);
  }

  SetEffectPetEXPGain(info: MultiplierInfo) {
    for (let index = 0; index < this.heroes.length; index++) this.heroes[index].petExpGainPerDefeat.RegisterMultiplier(info);
  }

  OptionEffectChance(heroKind: HeroKind, optionId) {
    return this.heroes[heroKind].optionEffectChance[optionId];
  }

  ElementResistance(heroKind: HeroKind, kind: Element) {
    switch (kind) {
      case Element.Physical:
        return;
      case Element.Fire:
        return this.heroes[heroKind].stats[0];
      case Element.Ice:
        return this.heroes[heroKind].stats[1];
      case Element.Thunder:
        return this.heroes[heroKind].stats[2];
      case Element.Light:
        return this.heroes[heroKind].stats[3];
      case Element.Dark:
        return this.heroes[heroKind].stats[4];
      default:
        return;
    }
  }

  SetEffectElementResistance(info: MultiplierInfo) {
    for (let index = 0; index < Enums.HeroKind; index++) {
      this.ElementResistance(index, Element.Fire).RegisterMultiplier(info);
      this.ElementResistance(index, Element.Ice).RegisterMultiplier(info);
      this.ElementResistance(index, Element.Thunder).RegisterMultiplier(info);
      this.ElementResistance(index, Element.Light).RegisterMultiplier(info);
      this.ElementResistance(index, Element.Dark).RegisterMultiplier(info);
    }
  }

  HpRegenerate(heroKind: HeroKind) {
    return this.heroes[heroKind].hpRegenerate;
  }

  MpRegenerate(heroKind: HeroKind) {
    return this.heroes[heroKind].mpRegenerate;
  }

  SkillSlotNum(heroKind: HeroKind) {
    return this.heroes[heroKind].skillSlotNum;
  }

  LevelForEquipment(heroKind: HeroKind) {
    return this.heroes[heroKind].levelForEquipment;
  }

  MonsterDamage(heroKind: HeroKind, species: MonsterSpecies) {
    return this.heroes[heroKind].monsterDamages[species];
  }

  ElementDamage(heroKind: HeroKind, element: Element) {
    return this.heroes[heroKind].elementDamages[element];
  }

  SetEffectElementDamage(element: Element, info: MultiplierInfo) {
    for (let index = 0; index < this.heroes.length; index++) this.ElementDamage(index, element).RegisterMultiplier(info);
  }

  SetEffectMagicalDamage(info: MultiplierInfo) {
    this.SetEffectElementDamage(Element.Fire, info);
    this.SetEffectElementDamage(Element.Ice, info);
    this.SetEffectElementDamage(Element.Thunder, info);
    this.SetEffectElementDamage(Element.Light, info);
    this.SetEffectElementDamage(Element.Dark, info);
  }

  ElementAbsorption(heroKind: HeroKind, element: Element) {
    return this.heroes[heroKind].elementAbsoptions[element];
  }

  ElementInvalid(heroKind: HeroKind, element: Element) {
    return this.heroes[heroKind].elementInvalids[element];
  }

  MonsterDistinguishMaxLevel(heroKind: HeroKind) {
    return this.heroes[heroKind].monsterDistinguishMaxLevel;
  }

  MonsterCaptureMaxLevelIncrement(heroKind: HeroKind) {
    return this.heroes[heroKind].monsterCaptureMaxLevelIncrement;
  }

  MaterialLootGain(heroKind: HeroKind) {
    return this.heroes[heroKind].materialLootGain;
  }

  DebuffChance(heroKind: HeroKind, kind: Debuff) {
    return this.heroes[heroKind].debuffChances[kind];
  }

  ElementSlayerDamage(heroKind: HeroKind, kind: Element) {
    return this.heroes[heroKind].elementSlayerDamages[kind];
  }

  //  AbilityPointLeft(heroKind: HeroKind) => this.heroes[heroKind].abilityPointLeft;

  //  Ability(heroKind: HeroKind, AbilityKind kind) => this.heroes[heroKind].abilities[kind];

  // TotalAbilityPoint(heroKind: HeroKind) {
  //   num = this.AbilityPointLeft(heroKind).value;
  //   for (let index = 0; index < Enums.abilityKindLength; index++) {
  //     kind = index;
  //     num += this.Ability(heroKind, (AbilityKind) kind).Point();
  //   }
  //   return num;
  // }

  Level(heroKind: HeroKind) {
    return this.heroes[heroKind].Level();
  }

  //  HeroLevel(heroKind: HeroKind) => this.heroes[heroKind].level;

  //  Exp(heroKind: HeroKind) => this.heroes[heroKind].exp;

  MaxPetEXPGainAmongHeroes() {
    let num = 0.0;
    for (let kind = 0; kind < Enums.HeroKind; ++kind) {
      if (this.Hero(kind).petExpGainPerDefeat.Value() > num) num = this.Hero(kind).petExpGainPerDefeat.Value();
    }
    return num;
  }

  MaxTPGAmongHeroes() {
    let num = 0.0;
    for (let index = 0; index < Enums.HeroKind; index++) {
      if (this.Hero(index).stats[Stats.TamingPointGain].Value() > num) num = this.Hero(index).stats[Stats.TamingPointGain].Value();
    }
    // console.log("MaxTPGAmongHeroes", Util.convertTo(num));

    return num;
  }
}
