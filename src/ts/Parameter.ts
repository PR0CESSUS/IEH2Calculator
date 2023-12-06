import { TitleKind } from "./type/TitleKind";

export const Parameter = {
  baseStats: [
    [20.0, 5.0, 2.0, 0.5, 0.0, 0.0, 0.0, 0.01, 0.0, 2.0, 0.001, 200.0],
    [10.0, 10.0, 0.5, 2.0, 0.0, 0.0, 0.0, 0.0, 0.01, 2.0, 0.001, 150.0],
    [15.0, 7.5, 1.5, 1.5, 0.0, 0.0, 0.0, 0.005, 0.005, 2.0, 0.001, 250.0],
    [10.0, 5.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.05, 0.05, 2.0, 0.0015, 250.0],
    [10.0, 10.0, 1.5, 1.5, 0.0, 0.0, 0.0, 0.005, 0.005, 2.0, 0.001, 200.0],
    [20.0, 10.0, 1.0, 1.0, 0.0, 0.0, 0.0, 0.005, 0.005, 2.0, 0.001, 150.0],
  ],
  cooperationEfficiency: [0.0, 0.2, 0.4, 0.55, 0.7, 0.8, 0.9],
  stats: [
    [20.0, 5.0, 1.0, 0.25, 0.5, 0.5, 1.0, 0.0001, 0.0, 0.0, 1e-5, 1.0],
    [10.0, 10.0, 0.25, 1.0, 0.15, 0.15, 0.5, 0.0, 0.0001, 0.0, 1e-5, 0.75],
    [15.0, 7.5, 0.5, 0.5, 0.35, 0.35, 1.5, 5e-5, 5e-5, 0.0, 1e-5, 1.25],
    [10.0, 5.0, 0.35, 0.35, 0.05, 0.05, 2.5, 0.0002, 0.0002, 0.0, 1e-5, 1.25],
    [10.0, 10.0, 0.5, 0.5, 0.35, 0.35, 1.0, 0.0001, 0.0001, 0.0, 1e-5, 1.0],
    [20.0, 10.0, 0.25, 0.25, 0.25, 0.25, 1.5, 5e-5, 5e-5, 0.0, 1e-5, 0.75],
  ],

  TitleEffectValue(kind: TitleKind, level) {
    function returnValue(main, sub) {
      return { main: main, sub: sub };
    }

    switch (kind) {
      case TitleKind.SkillMaster:
        return returnValue(level, level * 0.1);
      case TitleKind.MonsterDistinguisher:
        return returnValue(Math.min(1, level) * 10 * Math.pow(2.0, level), 10 * level);
      case TitleKind.EquipmentSlotWeapon:
        return returnValue(level, 0.0);
      case TitleKind.EquipmentSlotArmor:
        return returnValue(level, 0.0);
      case TitleKind.EquipmentSlotJewelry:
        return returnValue(level, 0.0);
      case TitleKind.PotionSlot:
        return returnValue(level, 0.0);
      case TitleKind.EquipmentProficiency:
        return returnValue(level * 0.2, 0.0);
      case TitleKind.PhysicalDamage:
        return returnValue(level * 0.025, 0.0);
      case TitleKind.FireDamage:
        return returnValue(level * 0.025, 0.0);
      case TitleKind.IceDamage:
        return returnValue(level * 0.025, 0.0);
      case TitleKind.ThunderDamage:
        return returnValue(level * 0.025, 0.0);
      case TitleKind.LightDamage:
        return returnValue(level * 0.025, 0.0);
      case TitleKind.DarkDamage:
        return returnValue(level * 0.025, 0.0);
      case TitleKind.Alchemist:
        return returnValue(level * 0.025, 0.0);
      case TitleKind.MetalHunter:
        return returnValue(level, 0.25 * level);
      case TitleKind.Survival:
        return returnValue(0.1 * Math.min(1, level) + 0.1 * level, 0.0);
      case TitleKind.FireResistance:
        return returnValue(Math.ceil(Math.pow(level, 1.5)) * 0.025, level * 0.01);
      case TitleKind.IceResistance:
        return returnValue(Math.ceil(Math.pow(level, 1.5)) * 0.025, level * 0.01);
      case TitleKind.ThunderResistance:
        return returnValue(Math.ceil(Math.pow(level, 1.5)) * 0.025, level * 0.01);
      case TitleKind.LightResistance:
        return returnValue(Math.ceil(Math.pow(level, 1.5)) * 0.025, level * 0.01);
      case TitleKind.DarkResistance:
        return returnValue(Math.ceil(Math.pow(level, 1.5)) * 0.025, level * 0.01);
      case TitleKind.Cooperation:
        return returnValue(Math.min(Parameter.cooperationEfficiency[Math.min(level, 6)], 1.0), 0.0);
      case TitleKind.DebuffResistance:
        return returnValue(Math.ceil(Math.pow(level, 1.5)) * 0.025, level * 0.01);
      case TitleKind.MoveSpeed:
        return returnValue(level * 0.05, 0.0);
      case TitleKind.BreakingTheLimit:
        return returnValue(level, 0.0);
      case TitleKind.Quester:
        return returnValue(level, 0.0);
      case TitleKind.ExplorerOfSD:
        return returnValue(Math.min(1, level) * 0.1 * Math.pow(2.0, level - 1), 0.1 * level);
      default:
        return returnValue(0.0, 0.0);
    }
  },
};
