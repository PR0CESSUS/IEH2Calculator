import { HeroKind } from "../../type/HeroKind";
import { ClassSkill } from "./ClassSkill";
import { Assassination } from "./data/Thief/Assassination";
import { DaggerAttack } from "./data/Thief/DaggerAttack";
import { DarkWield } from "./data/Thief/DarkWield";
import { KnifeToss } from "./data/Thief/KnifeToss";
import { LuckyBlow } from "./data/Thief/LuckyBlow";
import { Pilfer } from "./data/Thief/Pilfer";
import { ShadowStrike } from "./data/Thief/ShadowStrike";
import { SneakyStrike } from "./data/Thief/SneakyStrike";
import { SpreadToss } from "./data/Thief/SpreadToss";
import { Stab } from "./data/Thief/Stab";

export class ThiefSkill extends ClassSkill {
  heroKind = HeroKind.Thief;

  constructor() {
    super();
    this.skills[0] = new DaggerAttack(HeroKind.Thief, 0);
    this.skills[1] = new Stab(HeroKind.Thief, 1);
    this.skills[2] = new KnifeToss(HeroKind.Thief, 2);
    this.skills[3] = new LuckyBlow(HeroKind.Thief, 3);
    this.skills[4] = new SpreadToss(HeroKind.Thief, 4);
    this.skills[5] = new ShadowStrike(HeroKind.Thief, 5);
    this.skills[6] = new SneakyStrike(HeroKind.Thief, 6);
    this.skills[7] = new Pilfer(HeroKind.Thief, 7);
    this.skills[8] = new DarkWield(HeroKind.Thief, 8);
    this.skills[9] = new Assassination(HeroKind.Thief, 9);
  }
}
