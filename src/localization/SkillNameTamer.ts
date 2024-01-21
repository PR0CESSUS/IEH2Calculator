import { SkillKindTamer } from "./../type/SkillKindTamer";
export function SkillNameTamer(kind: SkillKindTamer) {
  switch (kind) {
    case SkillKindTamer.SonnetAttack:
      return "Sonnet Attack";
    case SkillKindTamer.AttackingOrder:
      return "Attacking Order";
    case SkillKindTamer.RushOrder:
      return "Rush Order";
    case SkillKindTamer.DefensiveOrder:
      return "Defensive Order";
    case SkillKindTamer.SoothingBallad:
      return "Soothing Ballad";
    case SkillKindTamer.OdeOfFriendship:
      return "Ode of Friendship";
    case SkillKindTamer.AnthemOfEnthusiasm:
      return "Anthem of Enthusiasm";
    case SkillKindTamer.FeedChilli:
      return "Feed Chilli";
    case SkillKindTamer.BreedingKnowledge:
      return "Breeding Knowledge";
    case SkillKindTamer.TuneOfTotalTaming:
      return "Tune of Total Taming";
    default:
      return kind;
  }
}
