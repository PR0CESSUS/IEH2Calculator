import { SkillKindWarrior } from "../type/SkillKindWarrior";

export function SkillNameWarrior(kind: SkillKindWarrior) {
  switch (kind) {
    case SkillKindWarrior.SwordAttack:
      return "Sword Attack";
    case SkillKindWarrior.Slash:
      return "Slash";
    case SkillKindWarrior.DoubleSlash:
      return "Double Slash";
    case SkillKindWarrior.SonicSlash:
      return "Sonic Slash";
    case SkillKindWarrior.SwingDown:
      return "Swing Down";
    case SkillKindWarrior.SwingAround:
      return "Swing Around";
    case SkillKindWarrior.ChargeSwing:
      return "Charge Swing";
    case SkillKindWarrior.FanSwing:
      return "Fan Swing";
    case SkillKindWarrior.ShieldAttack:
      return "Shield Charge";
    case SkillKindWarrior.KnockingShot:
      return "Knocking Shot";
    default:
      return kind;
  }
}
