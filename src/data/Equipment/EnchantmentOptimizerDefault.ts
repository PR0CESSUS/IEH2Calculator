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
  #kind: EquipmentEffectOptimizerKind;
  list: EquipmentEffectKind[] = [];

  constructor(kind: EquipmentEffectOptimizerKind) {
    this.data = globalThis.Game.data;
    this.kind = kind;
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
          ...this.GetSkill(this.data.source.currentHero),
          ...this.GetBasicStats(enemy.data.source.isActiveSdModifiers[950 + SDModifierKind.SwapATKWithDEF] && enemy.data.source.isSuperDungeon),

          EquipmentEffectKind.AllSkillLevel,

          EquipmentEffectKind.CriticalDamage,
          EquipmentEffectKind.CriticalDamageMultiplier,
          EquipmentEffectKind.CriticalDamageAfter,
          EquipmentEffectKind.ExtraAfterDamage,
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

  GetElement(element: Element) {
    switch (element) {
      case Element.Physical:
        return [EquipmentEffectKind.PhysicalDamage, EquipmentEffectKind.PhysicalDamageMultiplier, EquipmentEffectKind.PhysicalDamageAfter];
      case Element.Fire:
        return [EquipmentEffectKind.FireDamage, EquipmentEffectKind.FireDamageMultiplier, EquipmentEffectKind.FireDamageAfter];
      case Element.Thunder:
        return [EquipmentEffectKind.ThunderDamage, EquipmentEffectKind.ThunderDamageMultiplier, EquipmentEffectKind.ThunderDamageAfter];
      case Element.Ice:
        return [EquipmentEffectKind.IceDamage, EquipmentEffectKind.IceDamageMultiplier, EquipmentEffectKind.IceDamageAfter];
      case Element.Light:
        return [EquipmentEffectKind.LightDamage, EquipmentEffectKind.LightDamageMultiplier, EquipmentEffectKind.LightDamageAfter];
      case Element.Dark:
        return [EquipmentEffectKind.DarkDamage, EquipmentEffectKind.DarkDamageMultiplier, EquipmentEffectKind.DarkDamageAfter];

      default:
        return [];
    }
  }

  GetKnowledge(species: MonsterSpecies) {
    switch (species) {
      case MonsterSpecies.Slime:
        return [EquipmentEffectKind.SlimeKnowledge, EquipmentEffectKind.SlimeKnowledgeAfter];
      case MonsterSpecies.MagicSlime:
        return [EquipmentEffectKind.MagicSlimeKnowledge, EquipmentEffectKind.MagicSlimeKnowledgeAfter];
      case MonsterSpecies.Spider:
        return [EquipmentEffectKind.SpiderKnowledge, EquipmentEffectKind.SpiderKnowledgeAfter];
      case MonsterSpecies.Bat:
        return [EquipmentEffectKind.BatKnowledge, EquipmentEffectKind.BatKnowledgeAfter];
      case MonsterSpecies.Fairy:
        return [EquipmentEffectKind.FairyKnowledge, EquipmentEffectKind.FairyKnowledgeAfter];
      case MonsterSpecies.Fox:
        return [EquipmentEffectKind.FoxKnowledge, EquipmentEffectKind.FoxKnowledgeAfter];
      case MonsterSpecies.DevilFish:
        return [EquipmentEffectKind.DevilFishKnowledge, EquipmentEffectKind.DevilFishKnowledgeAfter];
      case MonsterSpecies.Treant:
        return [EquipmentEffectKind.TreantKnowledge, EquipmentEffectKind.TreantKnowledgeAfter];
      case MonsterSpecies.FlameTiger:
        return [EquipmentEffectKind.FlameTigerKnowledge, EquipmentEffectKind.FlameTigerKnowledgeAfter];
      case MonsterSpecies.Unicorn:
        return [EquipmentEffectKind.UnicornKnowledge, EquipmentEffectKind.UnicornKnowledgeAfter];
      case MonsterSpecies.ChallengeBoss:
        return [EquipmentEffectKind.ChallengeBossKnowledge, EquipmentEffectKind.ChallengeBossKnowledgeAfter];
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
    return this.data.source.isSuperDungeon ? [EquipmentEffectKind.SDDamageMultiplier] : [EquipmentEffectKind.ArmoredFury, EquipmentEffectKind.WardedFury];
  }

  GetBasicStats(isSwapATKWithDEF: boolean) {
    let result = [EquipmentEffectKind.SPDAdder, EquipmentEffectKind.SPDMultiplier, EquipmentEffectKind.SPDAfter];
    if (isSwapATKWithDEF) {
      result = [
        ...result,
        ...[
          EquipmentEffectKind.DEFAdder,
          EquipmentEffectKind.MDEFAdder,
          EquipmentEffectKind.DEFMultiplier,
          EquipmentEffectKind.MDEFMultiplier,
          EquipmentEffectKind.DEFPropotion,
          EquipmentEffectKind.MDEFPropotion,
          EquipmentEffectKind.DEFAfter,
          EquipmentEffectKind.MDEFAfter,
        ],
      ];
    } else {
      result = [
        ...result,
        ...[
          EquipmentEffectKind.ATKAdder,
          EquipmentEffectKind.MATKAdder,
          EquipmentEffectKind.ATKMultiplier,
          EquipmentEffectKind.MATKMultiplier,
          EquipmentEffectKind.ATKPropotion,
          EquipmentEffectKind.MATKPropotion,
          EquipmentEffectKind.ATKAfter,
          EquipmentEffectKind.MATKAfter,
        ],
      ];
    }

    return result;
  }
}
