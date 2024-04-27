import { SkillKindArcher } from "./../type/SkillKindArcher";
export function SkillNameArcher(kind: SkillKindArcher) {
  switch (kind) {
    case SkillKindArcher.ArrowAttak:
      return "Arrow Attack";
    case SkillKindArcher.PiercingArrow:
      return "Piercing Arrow";
    case SkillKindArcher.BurstArrow:
      return "Burst Arrow";
    case SkillKindArcher.Multishot:
      return "Multishot";
    case SkillKindArcher.ShockArrow:
      return "Shock Arrow";
    case SkillKindArcher.FrozenArrow:
      return "Frozen Arrow";
    case SkillKindArcher.ExplodingArrow:
      return "Exploding Arrow";
    case SkillKindArcher.ShiningArrow:
      return "Shining Arrow";
    case SkillKindArcher.GravityArrow:
      return "Gravity Arrow";
    case SkillKindArcher.Kiting:
      return "Kiting";
    default:
      return kind;
  }
}
