import { MultiplierInfo } from "../../Multiplier";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { Element } from "../../type/Element";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { HeroKind } from "../../type/HeroKind";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ResourceKind } from "../../type/ResourceKind";
import { Stats } from "../../type/Stats";

export function SetEffect(heroKind: HeroKind, kind: EquipmentEffectKind, effectValue, additionalCondition = null) {
  this.activateCondition = () => additionalCondition == null || additionalCondition();
  switch (kind) {
    case EquipmentEffectKind.HPAdder:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.HP)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MPAdder:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.MP)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.ATKAdder:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.ATK)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MATKAdder:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.MATK)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DEFAdder:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.DEF)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MDEFAdder:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.MDEF)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.SPDAdder:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.SPD)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.HPMultiplier:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.HP)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MPMultiplier:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.MP)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.ATKMultiplier:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.ATK)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MATKMultiplier:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.MATK)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DEFMultiplier:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.DEF)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MDEFMultiplier:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.MDEF)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.ATKPropotion:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.ATK)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => globalThis.data.stats.Level(heroKind) * this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MATKPropotion:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.MATK)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => globalThis.data.stats.Level(heroKind) * this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DEFPropotion:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.DEF)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => globalThis.data.stats.Level(heroKind) * this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MDEFPropotion:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.MDEF)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => globalThis.data.stats.Level(heroKind) * this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.FireResistance:
      return globalThis.data.stats
        .ElementResistance(heroKind, Element.Fire)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.IceResistance:
      return globalThis.data.stats
        .ElementResistance(heroKind, Element.Ice)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.ThunderResistance:
      return globalThis.data.stats
        .ElementResistance(heroKind, Element.Thunder)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.LightResistance:
      return globalThis.data.stats
        .ElementResistance(heroKind, Element.Light)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DarkResistance:
      return globalThis.data.stats
        .ElementResistance(heroKind, Element.Dark)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.PhysicalAbsorption:
      return globalThis.data.stats
        .ElementAbsorption(heroKind, Element.Physical)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.FireAbsorption:
      return globalThis.data.stats
        .ElementAbsorption(heroKind, Element.Fire)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.IceAbsorption:
      return globalThis.data.stats
        .ElementAbsorption(heroKind, Element.Ice)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.ThunderAbsorption:
      return globalThis.data.stats
        .ElementAbsorption(heroKind, Element.Thunder)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.LightAbsorption:
      return globalThis.data.stats
        .ElementAbsorption(heroKind, Element.Light)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DarkAbsorption:
      return globalThis.data.stats
        .ElementAbsorption(heroKind, Element.Dark)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DebuffResistance:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.DebuffRes)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.EquipmentDropChance:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.EquipmentDropChance)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.SlimeDropChance:
      return globalThis.data.monster.speciesMaterialDropChance[0].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.MagicSlimeDropChance:
      return globalThis.data.monster.speciesMaterialDropChance[1].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.SpiderDropChance:
      return globalThis.data.monster.speciesMaterialDropChance[2].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.BatDropChance:
      return globalThis.data.monster.speciesMaterialDropChance[3].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.FairyDropChance:
      return globalThis.data.monster.speciesMaterialDropChance[4].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.FoxDropChance:
      return globalThis.data.monster.speciesMaterialDropChance[5].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.DevilFishDropChance:
      return globalThis.data.monster.speciesMaterialDropChance[6].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.TreantDropChance:
      return globalThis.data.monster.speciesMaterialDropChance[7].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.FlameTigerDropChance:
      return globalThis.data.monster.speciesMaterialDropChance[8].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.UnicornDropChance:
      return globalThis.data.monster.speciesMaterialDropChance[9].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.ColorMaterialDropChance:
      return globalThis.data.monster.colorMaterialDropChance.RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.PhysicalCritical:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.PhysCritChance)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MagicalCritical:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.MagCritChance)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.EXPGain:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.ExpGain)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.SkillProficiency:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.SkillProficiencyGain)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.EquipmentProficiency:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.EquipmentProficiencyGain)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MoveSpeedMultiplier:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.MoveSpeed)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.GoldGain:
      return globalThis.data.stats
        .GoldGain()
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.StoneGain:
      return globalThis.data.stats
        .ResourceGain(ResourceKind.Stone)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.CrystalGain:
      return globalThis.data.stats
        .ResourceGain(ResourceKind.Crystal)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.LeafGain:
      return globalThis.data.stats
        .ResourceGain(ResourceKind.Leaf)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.WarriorSkillLevel:
      return globalThis.data.skill.skillLevelBonus[0].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.WizardSkillLevel:
      return globalThis.data.skill.skillLevelBonus[1].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.AngelSkillLevel:
      return globalThis.data.skill.skillLevelBonus[2].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.ThiefSkillLevel:
      return globalThis.data.skill.skillLevelBonus[3].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.ArcherSkillLevel:
      return globalThis.data.skill.skillLevelBonus[4].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.TamerSkillLevel:
      return globalThis.data.skill.skillLevelBonus[5].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.AllSkillLevel:
      return globalThis.data.skill.skillLevelBonus[0].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );
      return globalThis.data.skill.skillLevelBonus[1].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );
      return globalThis.data.skill.skillLevelBonus[2].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );
      return globalThis.data.skill.skillLevelBonus[3].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );
      return globalThis.data.skill.skillLevelBonus[4].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );
      return globalThis.data.skill.skillLevelBonus[5].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.SlimeKnowledge:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Slime)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MagicSlimeKnowledge:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.MagicSlime)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.SpiderKnowledge:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Spider)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.BatKnowledge:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Bat)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.FairyKnowledge:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Fairy)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.FoxKnowledge:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Fox)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DevilFishKnowledge:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.DevilFish)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.TreantKnowledge:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Treant)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.FlameTigerKnowledge:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.FlameTiger)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.UnicornKnowledge:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Unicorn)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.PhysicalDamage:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Physical)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.FireDamage:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Fire)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.IceDamage:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Ice)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.ThunderDamage:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Thunder)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.LightDamage:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Light)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DarkDamage:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Dark)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.HpRegen:
      return globalThis.data.stats
        .HpRegenerate(heroKind)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MpRegen:
      return globalThis.data.stats
        .MpRegenerate(heroKind)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.TamingPoint:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.TamingPointGain)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.WarriorSkillRange:
      return globalThis.data.skill.skillRangeMultiplier[0].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.WizardSkillRange:
      return globalThis.data.skill.skillRangeMultiplier[1].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.AngelSkillRange:
      return globalThis.data.skill.skillRangeMultiplier[2].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.ThiefSkillRange:
      return globalThis.data.skill.skillRangeMultiplier[3].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.ArcherSkillRange:
      return globalThis.data.skill.skillRangeMultiplier[4].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.TamerSkillRange:
      return globalThis.data.skill.skillRangeMultiplier[5].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.TownMatGain:
      return globalThis.data.town.townMaterialGainMultiplier[heroKind].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.TownMatAreaClearGain:
      return globalThis.data.area.townMaterialGainBonusClass[heroKind].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.RebirthPointGain1:
      return globalThis.data.rebirth
        .Rebirth(heroKind, 0)
        .rebirthPointGainFactor.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.RebirthPointGain2:
      return globalThis.data.rebirth
        .Rebirth(heroKind, 1)
        .rebirthPointGainFactor.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.RebirthPointGain3:
      return globalThis.data.rebirth
        .Rebirth(heroKind, 2)
        .rebirthPointGainFactor.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.CriticalDamage:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.CriticalDamage)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.BlessingEffect:
      return globalThis.data.blessingInfo.effectMultipliers[heroKind].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.MoveSpeedAdder:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.MoveSpeed)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.PetEXPGain:
      return globalThis.data.stats
        .Hero(heroKind)
        .petExpGainPerDefeat.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.LoyaltyPointGain:
      return globalThis.data.stats
        .Hero(heroKind)
        .loyaltyPoingGain.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.CatalystDoubleCriticalChance:
      return globalThis.data.alchemy.catalyst.catalystDoubleCriticalChance.RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.WarriorSkillEffectRange:
      return globalThis.data.skill.skillEffectRangeMultiplier[0].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.WizardSkillEffectRange:
      return globalThis.data.skill.skillEffectRangeMultiplier[1].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.AngelSkillEffectRange:
      return globalThis.data.skill.skillEffectRangeMultiplier[2].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.ThiefSkillEffectRange:
      return globalThis.data.skill.skillEffectRangeMultiplier[3].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.ArcherSkillEffectRange:
      return globalThis.data.skill.skillEffectRangeMultiplier[4].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.TamerSkillEffectRange:
      return globalThis.data.skill.skillEffectRangeMultiplier[5].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.HpRegenMultiplier:
      return globalThis.data.stats
        .HpRegenerate(heroKind)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue() * globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.HP).Value(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MpRegenMultiplier:
      return globalThis.data.stats
        .MpRegenerate(heroKind)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue() * globalThis.data.stats.BasicStats(heroKind, BasicStatsKind.MP).Value(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.ArmoredFury:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.ArmoredFury)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.WardedFury:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.WardedFury)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.PetPhysicalCriticalChance:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.PetPhysCritChance)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.PetMagicalCriticalChance:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.PetMagCritChance)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.PetCriticalDamage:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.PetCriticalDamage)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.PetDebuffResistance:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.PetDebuffResistance)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.StoneTownResearchPower:
      return globalThis.data.town.researchPower[0].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Mul,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.CrystalTownResearchPower:
      return globalThis.data.town.researchPower[1].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Mul,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.LeafTownResearchPower:
      return globalThis.data.town.researchPower[2].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Mul,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.GuildEXPGain:
      return globalThis.data.stats.heroes[heroKind].guildExpGain.RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Add,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.SPDMultiplier:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.SPD)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.CriticalDamageMultiplier:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.CriticalDamage)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.SkillProficiencyMultiplier:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.SkillProficiencyGain)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.EquipmentProficiencyMultiplier:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.EquipmentProficiencyGain)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.EXPGainMultiplier:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.ExpGain)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.GoldGainMultiplier:
      return globalThis.data.stats
        .GoldGain()
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.PhysicalDamageMultiplier:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Physical)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.FireDamageMultiplier:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Fire)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.IceDamageMultiplier:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Ice)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.ThunderDamageMultiplier:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Thunder)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.LightDamageMultiplier:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Light)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DarkDamageMultiplier:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Dark)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.TamingPointMultiplier:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.TamingPointGain)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.PetEXPGainMultiplier:
      return globalThis.data.stats
        .Hero(heroKind)
        .petExpGainPerDefeat.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.LoyaltyPointGainMultiplier:
      return globalThis.data.stats
        .Hero(heroKind)
        .loyaltyPoingGain.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.BlessingEffectMultiplier:
      return globalThis.data.blessingInfo.effectMultipliers[heroKind].RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Mul,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.PhysicalCriticalMultiplier:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.PhysCritChance)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MagicalCriticalMultiplier:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.MagCritChance)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.ChallengeBossKnowledge:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.ChallengeBoss)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.HPAfter:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.HP)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MPAfter:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.MP)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.ATKAfter:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.ATK)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MATKAfter:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.MATK)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DEFAfter:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.DEF)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MDEFAfter:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.MDEF)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.SPDAfter:
      return globalThis.data.stats
        .BasicStats(heroKind, BasicStatsKind.SPD)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MoveSpeedAfter:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.MoveSpeed)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.PhysicalCriticalAfter:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.PhysCritChance)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MagicalCriticalAfter:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.MagCritChance)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.CriticalDamageAfter:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.CriticalDamage)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DebuffResistanceAfter:
      return globalThis.data.stats
        .HeroStats(heroKind, Stats.DebuffRes)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.PhysicalDamageAfter:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Physical)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.FireDamageAfter:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Fire)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.IceDamageAfter:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Ice)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.ThunderDamageAfter:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Thunder)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.LightDamageAfter:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Light)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DarkDamageAfter:
      return globalThis.data.stats
        .ElementDamage(heroKind, Element.Dark)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.FireResistanceAfter:
      return globalThis.data.stats
        .ElementResistance(heroKind, Element.Fire)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.IceResistanceAfter:
      return globalThis.data.stats
        .ElementResistance(heroKind, Element.Ice)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.ThunderResistanceAfter:
      return globalThis.data.stats
        .ElementResistance(heroKind, Element.Thunder)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.LightResistanceAfter:
      return globalThis.data.stats
        .ElementResistance(heroKind, Element.Light)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DarkResistanceAfter:
      return globalThis.data.stats
        .ElementResistance(heroKind, Element.Dark)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.SlimeKnowledgeAfter:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Slime)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MagicSlimeKnowledgeAfter:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.MagicSlime)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.SpiderKnowledgeAfter:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Spider)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.BatKnowledgeAfter:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Bat)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.FairyKnowledgeAfter:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Fairy)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.FoxKnowledgeAfter:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Fox)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DevilFishKnowledgeAfter:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.DevilFish)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.TreantKnowledgeAfter:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Treant)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.FlameTigerKnowledgeAfter:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.FlameTiger)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.UnicornKnowledgeAfter:
      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Unicorn)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.ChallengeBossKnowledgeAfter:
      // console.log("ChallengeBossKnowledgeAfter", heroKind);

      return globalThis.data.stats
        .MonsterDamage(heroKind, MonsterSpecies.ChallengeBoss)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.After,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.SDDamageMultiplier:
      return globalThis.data.battles[heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Mul,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.SDDamageCutMultiplier:
      return globalThis.data.battles[heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Mul,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.FameGain:
      return globalThis.data.superStats
        .Hero(heroKind)
        .fameGain.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.DungeonCoinGain:
      return globalThis.data.sdg.dungeonCoinGain.RegisterMultiplier(
        new MultiplierInfo(
          MultiplierKind.Equipment,
          MultiplierType.Mul,
          () => this.EffectValue(effectValue(), heroKind),
          this.activateCondition
        )
      );

    case EquipmentEffectKind.ExtraAfterDamage:
      return globalThis.data.stats
        .Hero(heroKind)
        .extraAfterDamage.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Mul,
            () => this.EffectValue(effectValue(), heroKind),
            this.activateCondition
          )
        );
  }
}
