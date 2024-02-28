import { DATA } from "..";
import { MultiplierInfo } from "../Multiplier";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { Element } from "../../type/Element";
import { EquipmentEffectKind } from "../../type/EquipmentEffectKind";
import { HeroKind } from "../../type/HeroKind";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ResourceKind } from "../../type/ResourceKind";
import { Stats } from "../../type/Stats";

export function SetEffect(data: DATA, heroKind: HeroKind, kind: EquipmentEffectKind, effectValue, additionalCondition = null) {
  this.activateCondition = () => additionalCondition == null || additionalCondition();
  switch (kind) {
    case EquipmentEffectKind.HPAdder:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.HP)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MPAdder:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.MP)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.ATKAdder:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.ATK)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MATKAdder:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.MATK)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.DEFAdder:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.DEF)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MDEFAdder:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.MDEF)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.SPDAdder:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.SPD)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.HPMultiplier:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.HP)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MPMultiplier:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.MP)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.ATKMultiplier:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.ATK)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MATKMultiplier:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.MATK)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.DEFMultiplier:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.DEF)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MDEFMultiplier:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.MDEF)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.ATKPropotion:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.ATK)
        .RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => data.stats.Level(heroKind) * this.EffectValue(effectValue(), heroKind), this.activateCondition)
        );

    case EquipmentEffectKind.MATKPropotion:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.MATK)
        .RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => data.stats.Level(heroKind) * this.EffectValue(effectValue(), heroKind), this.activateCondition)
        );

    case EquipmentEffectKind.DEFPropotion:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.DEF)
        .RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => data.stats.Level(heroKind) * this.EffectValue(effectValue(), heroKind), this.activateCondition)
        );

    case EquipmentEffectKind.MDEFPropotion:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.MDEF)
        .RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => data.stats.Level(heroKind) * this.EffectValue(effectValue(), heroKind), this.activateCondition)
        );

    case EquipmentEffectKind.FireResistance:
      return data.stats
        .ElementResistance(heroKind, Element.Fire)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.IceResistance:
      return data.stats
        .ElementResistance(heroKind, Element.Ice)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.ThunderResistance:
      return data.stats
        .ElementResistance(heroKind, Element.Thunder)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.LightResistance:
      return data.stats
        .ElementResistance(heroKind, Element.Light)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.DarkResistance:
      return data.stats
        .ElementResistance(heroKind, Element.Dark)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.PhysicalAbsorption:
      return data.stats
        .ElementAbsorption(heroKind, Element.Physical)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.FireAbsorption:
      return data.stats
        .ElementAbsorption(heroKind, Element.Fire)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.IceAbsorption:
      return data.stats
        .ElementAbsorption(heroKind, Element.Ice)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.ThunderAbsorption:
      return data.stats
        .ElementAbsorption(heroKind, Element.Thunder)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.LightAbsorption:
      return data.stats
        .ElementAbsorption(heroKind, Element.Light)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.DarkAbsorption:
      return data.stats
        .ElementAbsorption(heroKind, Element.Dark)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.DebuffResistance:
      return data.stats
        .HeroStats(heroKind, Stats.DebuffRes)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.EquipmentDropChance:
      return data.stats
        .HeroStats(heroKind, Stats.EquipmentDropChance)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.SlimeDropChance:
      return data.monster.speciesMaterialDropChance[0].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.MagicSlimeDropChance:
      return data.monster.speciesMaterialDropChance[1].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.SpiderDropChance:
      return data.monster.speciesMaterialDropChance[2].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.BatDropChance:
      return data.monster.speciesMaterialDropChance[3].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.FairyDropChance:
      return data.monster.speciesMaterialDropChance[4].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.FoxDropChance:
      return data.monster.speciesMaterialDropChance[5].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.DevilFishDropChance:
      return data.monster.speciesMaterialDropChance[6].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.TreantDropChance:
      return data.monster.speciesMaterialDropChance[7].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.FlameTigerDropChance:
      return data.monster.speciesMaterialDropChance[8].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.UnicornDropChance:
      return data.monster.speciesMaterialDropChance[9].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.ColorMaterialDropChance:
      return data.monster.colorMaterialDropChance.RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.PhysicalCritical:
      return data.stats
        .HeroStats(heroKind, Stats.PhysCritChance)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MagicalCritical:
      return data.stats
        .HeroStats(heroKind, Stats.MagCritChance)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.EXPGain:
      return data.stats
        .HeroStats(heroKind, Stats.ExpGain)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.SkillProficiency:
      return data.stats
        .HeroStats(heroKind, Stats.SkillProficiencyGain)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.EquipmentProficiency:
      return data.stats
        .HeroStats(heroKind, Stats.EquipmentProficiencyGain)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MoveSpeedMultiplier:
      return data.stats
        .HeroStats(heroKind, Stats.MoveSpeed)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.GoldGain:
      return data.stats
        .GoldGain()
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.StoneGain:
      return data.stats
        .ResourceGain(ResourceKind.Stone)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.CrystalGain:
      return data.stats
        .ResourceGain(ResourceKind.Crystal)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.LeafGain:
      return data.stats
        .ResourceGain(ResourceKind.Leaf)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.WarriorSkillLevel:
      return data.skill.skillLevelBonus[0].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.WizardSkillLevel:
      return data.skill.skillLevelBonus[1].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.AngelSkillLevel:
      return data.skill.skillLevelBonus[2].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.ThiefSkillLevel:
      return data.skill.skillLevelBonus[3].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.ArcherSkillLevel:
      return data.skill.skillLevelBonus[4].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.TamerSkillLevel:
      return data.skill.skillLevelBonus[5].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.AllSkillLevel:
      // console.log(this.activateCondition(), "all skill");
      return [
        data.skill.skillLevelBonus[0].RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
        ),
        data.skill.skillLevelBonus[1].RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
        ),
        data.skill.skillLevelBonus[2].RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
        ),
        data.skill.skillLevelBonus[3].RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
        ),
        data.skill.skillLevelBonus[4].RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
        ),
        data.skill.skillLevelBonus[5].RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
        ),
      ];

    case EquipmentEffectKind.SlimeKnowledge:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Slime)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MagicSlimeKnowledge:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.MagicSlime)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.SpiderKnowledge:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Spider)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.BatKnowledge:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Bat)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.FairyKnowledge:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Fairy)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.FoxKnowledge:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Fox)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.DevilFishKnowledge:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.DevilFish)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.TreantKnowledge:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Treant)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.FlameTigerKnowledge:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.FlameTiger)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.UnicornKnowledge:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Unicorn)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.PhysicalDamage:
      return data.stats
        .ElementDamage(heroKind, Element.Physical)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.FireDamage:
      return data.stats
        .ElementDamage(heroKind, Element.Fire)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.IceDamage:
      return data.stats
        .ElementDamage(heroKind, Element.Ice)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.ThunderDamage:
      return data.stats
        .ElementDamage(heroKind, Element.Thunder)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.LightDamage:
      return data.stats
        .ElementDamage(heroKind, Element.Light)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.DarkDamage:
      return data.stats
        .ElementDamage(heroKind, Element.Dark)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.HpRegen:
      return data.stats
        .HpRegenerate(heroKind)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MpRegen:
      return data.stats
        .MpRegenerate(heroKind)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.TamingPoint:
      return data.stats
        .HeroStats(heroKind, Stats.TamingPointGain)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.WarriorSkillRange:
      return data.skill.skillRangeMultiplier[0].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.WizardSkillRange:
      return data.skill.skillRangeMultiplier[1].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.AngelSkillRange:
      return data.skill.skillRangeMultiplier[2].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.ThiefSkillRange:
      return data.skill.skillRangeMultiplier[3].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.ArcherSkillRange:
      return data.skill.skillRangeMultiplier[4].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.TamerSkillRange:
      return data.skill.skillRangeMultiplier[5].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.TownMatGain:
      return data.town.townMaterialGainMultiplier[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.TownMatAreaClearGain:
      return data.area.townMaterialGainBonusClass[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.RebirthPointGain1:
      return data.rebirth
        .Rebirth(heroKind, 0)
        .rebirthPointGainFactor.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
        );

    case EquipmentEffectKind.RebirthPointGain2:
      return data.rebirth
        .Rebirth(heroKind, 1)
        .rebirthPointGainFactor.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
        );

    case EquipmentEffectKind.RebirthPointGain3:
      return data.rebirth
        .Rebirth(heroKind, 2)
        .rebirthPointGainFactor.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
        );

    case EquipmentEffectKind.CriticalDamage:
      return data.stats
        .HeroStats(heroKind, Stats.CriticalDamage)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.BlessingEffect:
      return data.blessingInfo.effectMultipliers[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.MoveSpeedAdder:
      return data.stats
        .HeroStats(heroKind, Stats.MoveSpeed)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.PetEXPGain:
      return data.stats
        .Hero(heroKind)
        .petExpGainPerDefeat.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
        );

    case EquipmentEffectKind.LoyaltyPointGain:
      return data.stats
        .Hero(heroKind)
        .loyaltyPoingGain.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
        );

    case EquipmentEffectKind.CatalystDoubleCriticalChance:
      return data.alchemy.catalyst.catalystDoubleCriticalChance.RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.WarriorSkillEffectRange:
      return data.skill.skillEffectRangeMultiplier[0].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.WizardSkillEffectRange:
      return data.skill.skillEffectRangeMultiplier[1].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.AngelSkillEffectRange:
      return data.skill.skillEffectRangeMultiplier[2].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.ThiefSkillEffectRange:
      return data.skill.skillEffectRangeMultiplier[3].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.ArcherSkillEffectRange:
      return data.skill.skillEffectRangeMultiplier[4].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.TamerSkillEffectRange:
      return data.skill.skillEffectRangeMultiplier[5].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.HpRegenMultiplier:
      return data.stats
        .HpRegenerate(heroKind)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue() * data.stats.BasicStats(heroKind, BasicStatsKind.HP).Value(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.MpRegenMultiplier:
      return data.stats
        .MpRegenerate(heroKind)
        .RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Equipment,
            MultiplierType.Add,
            () => this.EffectValue(effectValue() * data.stats.BasicStats(heroKind, BasicStatsKind.MP).Value(), heroKind),
            this.activateCondition
          )
        );

    case EquipmentEffectKind.ArmoredFury:
      return data.stats
        .HeroStats(heroKind, Stats.ArmoredFury)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.WardedFury:
      return data.stats
        .HeroStats(heroKind, Stats.WardedFury)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.PetPhysicalCriticalChance:
      return data.stats
        .HeroStats(heroKind, Stats.PetPhysCritChance)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.PetMagicalCriticalChance:
      return data.stats
        .HeroStats(heroKind, Stats.PetMagCritChance)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.PetCriticalDamage:
      return data.stats
        .HeroStats(heroKind, Stats.PetCriticalDamage)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.PetDebuffResistance:
      return data.stats
        .HeroStats(heroKind, Stats.PetDebuffResistance)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.StoneTownResearchPower:
      return data.town.researchPower[0].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.CrystalTownResearchPower:
      return data.town.researchPower[1].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.LeafTownResearchPower:
      return data.town.researchPower[2].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.GuildEXPGain:
      return data.stats.heroes[heroKind].guildExpGain.RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Add, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.SPDMultiplier:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.SPD)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.CriticalDamageMultiplier:
      return data.stats
        .HeroStats(heroKind, Stats.CriticalDamage)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.SkillProficiencyMultiplier:
      return data.stats
        .HeroStats(heroKind, Stats.SkillProficiencyGain)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.EquipmentProficiencyMultiplier:
      return data.stats
        .HeroStats(heroKind, Stats.EquipmentProficiencyGain)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.EXPGainMultiplier:
      return data.stats
        .HeroStats(heroKind, Stats.ExpGain)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.GoldGainMultiplier:
      return data.stats
        .GoldGain()
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.PhysicalDamageMultiplier:
      return data.stats
        .ElementDamage(heroKind, Element.Physical)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.FireDamageMultiplier:
      return data.stats
        .ElementDamage(heroKind, Element.Fire)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.IceDamageMultiplier:
      return data.stats
        .ElementDamage(heroKind, Element.Ice)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.ThunderDamageMultiplier:
      return data.stats
        .ElementDamage(heroKind, Element.Thunder)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.LightDamageMultiplier:
      return data.stats
        .ElementDamage(heroKind, Element.Light)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.DarkDamageMultiplier:
      return data.stats
        .ElementDamage(heroKind, Element.Dark)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.TamingPointMultiplier:
      return data.stats
        .HeroStats(heroKind, Stats.TamingPointGain)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.PetEXPGainMultiplier:
      return data.stats
        .Hero(heroKind)
        .petExpGainPerDefeat.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
        );

    case EquipmentEffectKind.LoyaltyPointGainMultiplier:
      return data.stats
        .Hero(heroKind)
        .loyaltyPoingGain.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
        );

    case EquipmentEffectKind.BlessingEffectMultiplier:
      return data.blessingInfo.effectMultipliers[heroKind].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.PhysicalCriticalMultiplier:
      return data.stats
        .HeroStats(heroKind, Stats.PhysCritChance)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MagicalCriticalMultiplier:
      return data.stats
        .HeroStats(heroKind, Stats.MagCritChance)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.ChallengeBossKnowledge:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.ChallengeBoss)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.HPAfter:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.HP)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MPAfter:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.MP)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.ATKAfter:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.ATK)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MATKAfter:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.MATK)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.DEFAfter:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.DEF)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MDEFAfter:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.MDEF)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.SPDAfter:
      return data.stats
        .BasicStats(heroKind, BasicStatsKind.SPD)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MoveSpeedAfter:
      return data.stats
        .HeroStats(heroKind, Stats.MoveSpeed)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.PhysicalCriticalAfter:
      return data.stats
        .HeroStats(heroKind, Stats.PhysCritChance)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MagicalCriticalAfter:
      return data.stats
        .HeroStats(heroKind, Stats.MagCritChance)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.CriticalDamageAfter:
      return data.stats
        .HeroStats(heroKind, Stats.CriticalDamage)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.DebuffResistanceAfter:
      return data.stats
        .HeroStats(heroKind, Stats.DebuffRes)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.PhysicalDamageAfter:
      return data.stats
        .ElementDamage(heroKind, Element.Physical)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.FireDamageAfter:
      return data.stats
        .ElementDamage(heroKind, Element.Fire)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.IceDamageAfter:
      return data.stats
        .ElementDamage(heroKind, Element.Ice)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.ThunderDamageAfter:
      return data.stats
        .ElementDamage(heroKind, Element.Thunder)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.LightDamageAfter:
      return data.stats
        .ElementDamage(heroKind, Element.Light)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.DarkDamageAfter:
      return data.stats
        .ElementDamage(heroKind, Element.Dark)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.FireResistanceAfter:
      return data.stats
        .ElementResistance(heroKind, Element.Fire)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.IceResistanceAfter:
      return data.stats
        .ElementResistance(heroKind, Element.Ice)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.ThunderResistanceAfter:
      return data.stats
        .ElementResistance(heroKind, Element.Thunder)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.LightResistanceAfter:
      return data.stats
        .ElementResistance(heroKind, Element.Light)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.DarkResistanceAfter:
      return data.stats
        .ElementResistance(heroKind, Element.Dark)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.SlimeKnowledgeAfter:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Slime)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.MagicSlimeKnowledgeAfter:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.MagicSlime)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.SpiderKnowledgeAfter:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Spider)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.BatKnowledgeAfter:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Bat)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.FairyKnowledgeAfter:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Fairy)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.FoxKnowledgeAfter:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Fox)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.DevilFishKnowledgeAfter:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.DevilFish)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.TreantKnowledgeAfter:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Treant)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.FlameTigerKnowledgeAfter:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.FlameTiger)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.UnicornKnowledgeAfter:
      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.Unicorn)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.ChallengeBossKnowledgeAfter:
      // console.log("ChallengeBossKnowledgeAfter", heroKind);

      return data.stats
        .MonsterDamage(heroKind, MonsterSpecies.ChallengeBoss)
        .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.After, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.SDDamageMultiplier:
      return data.battles[heroKind].superDungeonCtrl.damageMultiplier.RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.SDDamageCutMultiplier:
      return data.battles[heroKind].superDungeonCtrl.damageCutMultiplier.RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.FameGain:
      return data.superStats
        .Hero(heroKind)
        .fameGain.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition));

    case EquipmentEffectKind.DungeonCoinGain:
      return data.sdg.dungeonCoinGain.RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
      );

    case EquipmentEffectKind.ExtraAfterDamage:
      return data.stats
        .Hero(heroKind)
        .extraAfterDamage.RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.Equipment, MultiplierType.Mul, () => this.EffectValue(effectValue(), heroKind), this.activateCondition)
        );
  }
}
