import { ChallengeMonsterKind } from "../type/ChallengeMonsterKind";

export function MonsterShortNameString(kind: ChallengeMonsterKind) {
  switch (kind) {
    case ChallengeMonsterKind.Florzporb:
      return "Florzporb";
    case ChallengeMonsterKind.Arachnetta:
      return "Arachnetta";
    case ChallengeMonsterKind.GuardianKor:
      return "Guardian Kor";
    case ChallengeMonsterKind.Nostro:
      return "Nostro";
    case ChallengeMonsterKind.LadyEmelda:
      return "Lady Emelda";
    case ChallengeMonsterKind.NariSune:
      return "Nari Sune";
    case ChallengeMonsterKind.Octobaddie:
      return "Octobaddie";
    case ChallengeMonsterKind.Bananoon:
      return "Bananoon";
    case ChallengeMonsterKind.Glorbliorbus:
      return "Glorbliorbus";
    case ChallengeMonsterKind.DistortionSlime:
      return "Gankyū";
    default:
      return "Not Implemented";
  }
}
