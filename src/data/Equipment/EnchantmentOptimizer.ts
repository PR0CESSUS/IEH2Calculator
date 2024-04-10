import { Stats } from "@/type/Stats";
import { DATA } from "..";
import { Element } from "../../type/Element";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { HeroKind } from "../../type/HeroKind";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { SDModifierKind } from "../../type/SDModifierKind";

import { EquipmentEffectOptimizerKind } from "@/type/EquipmentEffectOptimizerKind";

export class EquipmentEffectOptimizer {
  data: DATA;
  #kind: EquipmentEffectOptimizerKind = EquipmentEffectOptimizerKind.DPS;
  list: EquipmentEffectKind[] = [];
  filterSetKind: boolean[] = [true, false, false, false, false, true, true, true, true, true, false];
  filterRarity: boolean[] = [false, false, true, true, true];
  filterArtifact: boolean = true;

  constructor(DATA: DATA) {
    this.data = DATA;
    this.list = this.GetList();
    this.filterArtifact = this.data.source.isSuperDungeon;
  }

  get kind() {
    return this.#kind;
  }
  set kind(value) {
    this.#kind = value;
    this.list = this.GetList();
  }

  GetList() {
    switch (this.kind) {
      case EquipmentEffectOptimizerKind.DPS:
        const enemy = this.data.battle.Enemy();
        const info = enemy.AttackedInfo();

        return [
          ...this.GetDPS(),
          ...this.GetElement(info.element),
          ...this.GetKnowledge(enemy.species),
          // ...this.GetSkill(this.data.source.currentHero),
          ...this.GetBasicStats(enemy.data.source.isActiveSdModifiersCustom[SDModifierKind.SwapATKWithDEF]),
        ];
      case EquipmentEffectOptimizerKind.SkillProficiency:
        return [EquipmentEffectKind.SkillProficiency, EquipmentEffectKind.SkillProficiencyMultiplier, ...this.GetBlessing()];

      case EquipmentEffectOptimizerKind.TPG:
        return [EquipmentEffectKind.TamingPoint, EquipmentEffectKind.TamingPointMultiplier];
      case EquipmentEffectOptimizerKind.LPG:
        return [EquipmentEffectKind.LoyaltyPointGain, EquipmentEffectKind.LoyaltyPointGainMultiplier];

      default:
        return [];
    }
  }

  GetMultiplier() {
    switch (this.kind) {
      case EquipmentEffectOptimizerKind.DPS:
        return { Value: () => this.data.battle.Enemy().AttackedInfo().dps };
      case EquipmentEffectOptimizerKind.SkillProficiency:
        return this.data.stats.currentHero.stats[Stats.SkillProficiencyGain];
      case EquipmentEffectOptimizerKind.TPG:
        return this.data.stats.currentHero.stats[Stats.TamingPointGain];
      case EquipmentEffectOptimizerKind.LPG:
        return this.data.stats.currentHero.loyaltyPoingGain;
      default:
        return this.data.stats.currentHero.stats[Stats.SkillProficiencyGain];
    }
  }

  GetBlessing() {
    return this.data.source.isBlessing ? [EquipmentEffectKind.BlessingEffect, EquipmentEffectKind.BlessingEffectMultiplier] : [];
  }

  GetCritical() {
    return this.data.source.isSuperDungeon ? [EquipmentEffectKind.CriticalDamageAfter] : [EquipmentEffectKind.CriticalDamage, EquipmentEffectKind.CriticalDamageMultiplier];
  }

  GetElement(element: Element) {
    switch (element) {
      case Element.Physical:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.PhysicalDamageAfter] : [EquipmentEffectKind.PhysicalDamage, EquipmentEffectKind.PhysicalDamageMultiplier];
      case Element.Fire:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.FireDamageAfter] : [EquipmentEffectKind.FireDamage, EquipmentEffectKind.FireDamageMultiplier];
      case Element.Thunder:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.ThunderDamageAfter] : [EquipmentEffectKind.ThunderDamage, EquipmentEffectKind.ThunderDamageMultiplier];
      case Element.Ice:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.IceDamageAfter] : [EquipmentEffectKind.IceDamage, EquipmentEffectKind.IceDamageMultiplier];
      case Element.Light:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.LightDamageAfter] : [EquipmentEffectKind.LightDamage, EquipmentEffectKind.LightDamageMultiplier];
      case Element.Dark:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.DarkDamageAfter] : [EquipmentEffectKind.DarkDamage, EquipmentEffectKind.DarkDamageMultiplier];

      default:
        return [];
    }
  }

  GetKnowledge(species: MonsterSpecies) {
    switch (species) {
      case MonsterSpecies.Slime:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.SlimeKnowledgeAfter] : [EquipmentEffectKind.SlimeKnowledge];
      case MonsterSpecies.MagicSlime:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.MagicSlimeKnowledgeAfter] : [EquipmentEffectKind.MagicSlimeKnowledge];
      case MonsterSpecies.Spider:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.SpiderKnowledgeAfter] : [EquipmentEffectKind.SpiderKnowledge];
      case MonsterSpecies.Bat:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.BatKnowledgeAfter] : [EquipmentEffectKind.BatKnowledge];
      case MonsterSpecies.Fairy:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.FairyKnowledgeAfter] : [EquipmentEffectKind.FairyKnowledge];
      case MonsterSpecies.Fox:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.FoxKnowledgeAfter] : [EquipmentEffectKind.FoxKnowledge];
      case MonsterSpecies.DevilFish:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.DevilFishKnowledgeAfter] : [EquipmentEffectKind.DevilFishKnowledge];
      case MonsterSpecies.Treant:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.TreantKnowledgeAfter] : [EquipmentEffectKind.TreantKnowledge];
      case MonsterSpecies.FlameTiger:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.FlameTigerKnowledgeAfter] : [EquipmentEffectKind.FlameTigerKnowledge];
      case MonsterSpecies.Unicorn:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.UnicornKnowledgeAfter] : [EquipmentEffectKind.UnicornKnowledge];
      case MonsterSpecies.ChallengeBoss:
        return this.data.source.isSuperDungeon ? [EquipmentEffectKind.ChallengeBossKnowledgeAfter] : [EquipmentEffectKind.ChallengeBossKnowledge];
      default:
        return [];
    }
  }

  GetSkill(heroKind: HeroKind) {
    switch (heroKind) {
      case HeroKind.Warrior:
        return [EquipmentEffectKind.WarriorSkillLevel];
      case HeroKind.Wizard:
        return [EquipmentEffectKind.WizardSkillLevel];
      case HeroKind.Angel:
        return [EquipmentEffectKind.AngelSkillLevel];
      case HeroKind.Thief:
        return [EquipmentEffectKind.ThiefSkillLevel];
      case HeroKind.Archer:
        return [EquipmentEffectKind.ArcherSkillLevel];
      case HeroKind.Tamer:
        return [EquipmentEffectKind.TamerSkillLevel];

      default:
        return [];
    }
  }

  GetDPS() {
    return this.data.source.isSuperDungeon
      ? [EquipmentEffectKind.SDDamageMultiplier, EquipmentEffectKind.ExtraAfterDamage]
      : [EquipmentEffectKind.ArmoredFury, EquipmentEffectKind.WardedFury];
  }

  GetBasicStats(isSwapATKWithDEF: boolean) {
    let result = this.data.source.isSuperDungeon ? [EquipmentEffectKind.SPDAfter] : [EquipmentEffectKind.SPDAdder, EquipmentEffectKind.SPDMultiplier];
    if (this.data.source.isSuperDungeon) {
      if (isSwapATKWithDEF) {
        if (this.data.battle.skillSet.currentSkillSet[0].element == Element.Physical) {
          result = [...result, ...[EquipmentEffectKind.DEFAfter]];
        } else {
          result = [...result, ...[EquipmentEffectKind.MDEFAfter]];
        }
      } else {
        result = [...result, ...[EquipmentEffectKind.ATKAfter, EquipmentEffectKind.MATKAfter]];
      }
    } else {
      result = [
        ...result,
        EquipmentEffectKind.ATKMultiplier,
        EquipmentEffectKind.MATKMultiplier,
        EquipmentEffectKind.ATKPropotion,
        EquipmentEffectKind.MATKPropotion,
        EquipmentEffectKind.ATKAdder,
        EquipmentEffectKind.MATKAdder,
        EquipmentEffectKind.DEFAdder,
        EquipmentEffectKind.MDEFAdder,
        EquipmentEffectKind.DEFMultiplier,
        EquipmentEffectKind.MDEFMultiplier,
        EquipmentEffectKind.DEFPropotion,
        EquipmentEffectKind.MDEFPropotion,
      ];
    }

    return result;
  }
}
