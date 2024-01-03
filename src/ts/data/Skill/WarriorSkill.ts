import { HeroKind } from "../../type/HeroKind";
import { ClassSkill } from "./ClassSkill";
import { SwordAttack } from "./data/Warrior/SwordAttack";
import { Slash } from "./data/Warrior/Slash";
import { SonicSlash } from "./data/Warrior/SonicSlash";
import { DoubleSlash } from "./data/Warrior/DoubleSlash";
import { SwingDown } from "./data/Warrior/SwingDown";
import { SwingAround } from "./data/Warrior/SwingAround";
import { ChargeSwing } from "./data/Warrior/ChargeSwing";
import { FanSwing } from "./data/Warrior/FanSwing";
import { ShieldAttack } from "./data/Warrior/ShieldAttack";
import { KnockingShot } from "./data/Warrior/KnockingShot";

export class WarriorSkill extends ClassSkill {
  heroKind = HeroKind.Warrior;

  constructor() {
    super();
    this.skills[0] = new SwordAttack(HeroKind.Warrior, 0);
    this.skills[1] = new Slash(HeroKind.Warrior, 1);
    this.skills[2] = new DoubleSlash(HeroKind.Warrior, 2);
    this.skills[3] = new SonicSlash(HeroKind.Warrior, 3);
    this.skills[4] = new SwingDown(HeroKind.Warrior, 4);
    this.skills[5] = new SwingAround(HeroKind.Warrior, 5);
    this.skills[6] = new ChargeSwing(HeroKind.Warrior, 6);
    this.skills[7] = new FanSwing(HeroKind.Warrior, 7);
    this.skills[8] = new ShieldAttack(HeroKind.Warrior, 8);
    this.skills[9] = new KnockingShot(HeroKind.Warrior, 9);
  }
}
