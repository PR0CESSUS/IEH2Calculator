import { SkillKindWizard } from "./../type/SkillKindWizard";
export function SkillNameWizard(kind: SkillKindWizard) {
  switch (kind) {
    case SkillKindWizard.StaffAttack:
      return "Staff Attack";
    case SkillKindWizard.FireBolt:
      return "Fire Bolt";
    case SkillKindWizard.FireStorm:
      return "Fire Storm";
    case SkillKindWizard.MeteorStrike:
      return "Meteor Strike";
    case SkillKindWizard.IceBolt:
      return "Ice Bolt";
    case SkillKindWizard.ChillingTouch:
      return "Chilling Touch";
    case SkillKindWizard.Blizzard:
      return "Blizzard";
    case SkillKindWizard.ThunderBolt:
      return "Thunder Bolt";
    case SkillKindWizard.DoubleThunderBolt:
      return "Double Thunder Bolt";
    case SkillKindWizard.LightningThunder:
      return "Lightning Thunder";
    default:
      return kind;
  }
}
