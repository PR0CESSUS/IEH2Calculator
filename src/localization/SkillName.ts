import { HeroKind } from "../type/HeroKind";
import { SkillNameAngel } from "./SkillNameAngel";
import { SkillNameArcher } from "./SkillNameArcher";
import { SkillNameTamer } from "./SkillNameTamer";
import { SkillNameThief } from "./SkillNameThief";
import { SkillNameWarrior } from "./SkillNameWarrior";
import { SkillNameWizard } from "./SkillNameWizard";

export function SkillName(heroKind: HeroKind, id: number) {
  switch (heroKind) {
    case HeroKind.Warrior:
      return SkillNameWarrior(id);
    case HeroKind.Wizard:
      return SkillNameWizard(id);
    case HeroKind.Angel:
      return SkillNameAngel(id);
    case HeroKind.Thief:
      return SkillNameThief(id);
    case HeroKind.Archer:
      return SkillNameArcher(id);
    case HeroKind.Tamer:
      return SkillNameTamer(id);
    default:
      return "";
  }
}
