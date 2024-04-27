import { HeroKind } from "../../../../type/HeroKind";
import { ClassSkill } from "../../ClassSkill";
import { SwordAttack } from "./SwordAttack";
import { Slash } from "./Slash";
import { SonicSlash } from "./SonicSlash";
import { DoubleSlash } from "./DoubleSlash";
import { SwingDown } from "./SwingDown";
import { SwingAround } from "./SwingAround";
import { ChargeSwing } from "./ChargeSwing";
import { FanSwing } from "./FanSwing";
import { ShieldAttack } from "./ShieldAttack";
import { KnockingShot } from "./KnockingShot";

export class WarriorSkill extends ClassSkill {
  heroKind = HeroKind.Warrior;

  constructor(DATA) {
    super(DATA);
    this.skills[0] = new SwordAttack(this.data, HeroKind.Warrior, 0);
    this.skills[1] = new Slash(this.data, HeroKind.Warrior, 1);
    this.skills[2] = new DoubleSlash(this.data, HeroKind.Warrior, 2);
    this.skills[3] = new SonicSlash(this.data, HeroKind.Warrior, 3);
    this.skills[4] = new SwingDown(this.data, HeroKind.Warrior, 4);
    this.skills[5] = new SwingAround(this.data, HeroKind.Warrior, 5);
    this.skills[6] = new ChargeSwing(this.data, HeroKind.Warrior, 6);
    this.skills[7] = new FanSwing(this.data, HeroKind.Warrior, 7);
    this.skills[8] = new ShieldAttack(this.data, HeroKind.Warrior, 8);
    this.skills[9] = new KnockingShot(this.data, HeroKind.Warrior, 9);
  }
}
