import { HeroKind } from "../../../../type/HeroKind";
import { ClassSkill } from "../../ClassSkill";
import { ArrowAttack } from "./ArrowAttack";
import { BurstArrow } from "./BurstArrow";
import { ExplodingArrow } from "./ExplodingArrow";
import { FrozenArrow } from "./FrozenArrow";
import { GravityArrow } from "./GravityArrow";
import { Kiting } from "./Kiting";
import { Multishot } from "./Multishot";
import { PiercingArrow } from "./PiercingArrow";
import { ShiningArrow } from "./ShiningArrow";
import { ShockArrow } from "./ShockArrow";

export class ArcherSkill extends ClassSkill {
  heroKind = HeroKind.Archer;

  constructor(DATA) {
    super(DATA);
    this.skills[0] = new ArrowAttack(this.data, HeroKind.Archer, 0);
    this.skills[1] = new PiercingArrow(this.data, HeroKind.Archer, 1);
    this.skills[2] = new BurstArrow(this.data, HeroKind.Archer, 2);
    this.skills[3] = new Multishot(this.data, HeroKind.Archer, 3);
    this.skills[4] = new ShockArrow(this.data, HeroKind.Archer, 4);
    this.skills[5] = new FrozenArrow(this.data, HeroKind.Archer, 5);
    this.skills[6] = new ExplodingArrow(this.data, HeroKind.Archer, 6);
    this.skills[7] = new ShiningArrow(this.data, HeroKind.Archer, 7);
    this.skills[8] = new GravityArrow(this.data, HeroKind.Archer, 8);
    this.skills[9] = new Kiting(this.data, HeroKind.Archer, 9);
  }
}
