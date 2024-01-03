import { HeroKind } from "../../type/HeroKind";
import { ClassSkill } from "./ClassSkill";
import { GodBless } from "./data/Angel/GodBless";
import { Haste } from "./data/Angel/Haste";
import { Heal } from "./data/Angel/Heal";
import { HolyArch } from "./data/Angel/HolyArch";
import { MagicImpact } from "./data/Angel/MagicImpact";
import { MuscleInflation } from "./data/Angel/MuscleInflation";
import { ProtectWall } from "./data/Angel/ProtectWall";
import { WingAttack } from "./data/Angel/WingAttack";
import { WingShoot } from "./data/Angel/WingShoot";
import { WingStorm } from "./data/Angel/WingStorm";

export class AngelSkill extends ClassSkill {
  heroKind = HeroKind.Angel;

  constructor() {
    super();
    this.skills[0] = new WingAttack(HeroKind.Angel, 0);
    this.skills[1] = new WingShoot(HeroKind.Angel, 1);
    this.skills[2] = new Heal(HeroKind.Angel, 2);
    this.skills[3] = new GodBless(HeroKind.Angel, 3);
    this.skills[4] = new MuscleInflation(HeroKind.Angel, 4);
    this.skills[5] = new MagicImpact(HeroKind.Angel, 5);
    this.skills[6] = new ProtectWall(HeroKind.Angel, 6);
    this.skills[7] = new Haste(HeroKind.Angel, 7);
    this.skills[8] = new WingStorm(HeroKind.Angel, 8);
    this.skills[9] = new HolyArch(HeroKind.Angel, 9);
  }
}
