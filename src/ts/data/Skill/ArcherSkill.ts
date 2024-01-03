import { HeroKind } from "../../type/HeroKind";
import { ClassSkill } from "./ClassSkill";
import { ArrowAttack } from "./data/Archer/ArrowAttack";
import { BurstArrow } from "./data/Archer/BurstArrow";
import { ExplodingArrow } from "./data/Archer/ExplodingArrow";
import { FrozenArrow } from "./data/Archer/FrozenArrow";
import { GravityArrow } from "./data/Archer/GravityArrow";
import { Kiting } from "./data/Archer/Kiting";
import { Multishot } from "./data/Archer/Multishot";
import { PiercingArrow } from "./data/Archer/PiercingArrow";
import { ShiningArrow } from "./data/Archer/ShiningArrow";
import { ShockArrow } from "./data/Archer/ShockArrow";

export class ArcherSkill extends ClassSkill {
  heroKind = HeroKind.Archer;

  constructor() {
    super();
    this.skills[0] = new ArrowAttack(HeroKind.Archer, 0);
    this.skills[1] = new PiercingArrow(HeroKind.Archer, 1);
    this.skills[2] = new BurstArrow(HeroKind.Archer, 2);
    this.skills[3] = new Multishot(HeroKind.Archer, 3);
    this.skills[4] = new ShockArrow(HeroKind.Archer, 4);
    this.skills[5] = new FrozenArrow(HeroKind.Archer, 5);
    this.skills[6] = new ExplodingArrow(HeroKind.Archer, 6);
    this.skills[7] = new ShiningArrow(HeroKind.Archer, 7);
    this.skills[8] = new GravityArrow(HeroKind.Archer, 8);
    this.skills[9] = new Kiting(HeroKind.Archer, 9);
  }
}
