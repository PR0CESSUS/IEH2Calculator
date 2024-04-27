import { SkillKindAngel } from "./../type/SkillKindAngel";
export function SkillNameAngel(kind: SkillKindAngel) {
  switch (kind) {
    case SkillKindAngel.WingAttack:
      return "Wing Attack";
    case SkillKindAngel.WingShoot:
      return "Wing Shoot";
    case SkillKindAngel.Heal:
      return "Heal";
    case SkillKindAngel.GodBless:
      return "God Bless";
    case SkillKindAngel.MuscleInflation:
      return "Muscle Inflation";
    case SkillKindAngel.MagicImpact:
      return "Magic Impact";
    case SkillKindAngel.ProtectWall:
      return "Protect Wall";
    case SkillKindAngel.Haste:
      return "Haste";
    case SkillKindAngel.WingStorm:
      return "Wing Storm";
    case SkillKindAngel.HolyArch:
      return "Holy Arch";
    default:
      return kind;
  }
}
