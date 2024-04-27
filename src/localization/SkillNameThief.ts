import { SkillKindThief } from "./../type/SkillKindThief";
export function SkillNameThief(kind: SkillKindThief) {
  switch (kind) {
    case SkillKindThief.DaggerAttack:
      return "Dagger Attack";
    case SkillKindThief.Stab:
      return "Stab";
    case SkillKindThief.KnifeToss:
      return "Knife Toss";
    case SkillKindThief.LuckyBlow:
      return "Lucky Blow";
    case SkillKindThief.SpreadToss:
      return "Spread Toss";
    case SkillKindThief.ShadowStrike:
      return "Shadow Strike";
    case SkillKindThief.SneakyStrike:
      return "Sneaky Strike";
    case SkillKindThief.Pilfer:
      return "Pilfer";
    case SkillKindThief.DarkWield:
      return "Dark Wield";
    case SkillKindThief.Assassination:
      return "Assassination";
    default:
      return kind;
  }
}
