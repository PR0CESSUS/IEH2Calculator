import { HeroKind } from "../../../../type/HeroKind";
import { ClassSkill } from "../../ClassSkill";
import { GodBless } from "./GodBless";
import { Haste } from "./Haste";
import { Heal } from "./Heal";
import { HolyArch } from "./HolyArch";
import { MagicImpact } from "./MagicImpact";
import { MuscleInflation } from "./MuscleInflation";
import { ProtectWall } from "./ProtectWall";
import { WingAttack } from "./WingAttack";
import { WingShoot } from "./WingShoot";
import { WingStorm } from "./WingStorm";

export class AngelSkill extends ClassSkill {
  heroKind = HeroKind.Angel;

  constructor(DATA) {
    super(DATA);

    this.skills[0] = new WingAttack(this.data, HeroKind.Angel, 0);
    this.skills[1] = new WingShoot(this.data, HeroKind.Angel, 1);
    this.skills[2] = new Heal(this.data, HeroKind.Angel, 2);
    this.skills[3] = new GodBless(this.data, HeroKind.Angel, 3);
    this.skills[4] = new MuscleInflation(this.data, HeroKind.Angel, 4);
    this.skills[5] = new MagicImpact(this.data, HeroKind.Angel, 5);
    this.skills[6] = new ProtectWall(this.data, HeroKind.Angel, 6);
    this.skills[7] = new Haste(this.data, HeroKind.Angel, 7);
    this.skills[8] = new WingStorm(this.data, HeroKind.Angel, 8);
    this.skills[9] = new HolyArch(this.data, HeroKind.Angel, 9);
  }
}
