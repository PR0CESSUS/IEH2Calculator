import { HeroKind } from "../../../../type/HeroKind";
import { ClassSkill } from "../../ClassSkill";
import { Assassination } from "./Assassination";
import { DaggerAttack } from "./DaggerAttack";
import { DarkWield } from "./DarkWield";
import { KnifeToss } from "./KnifeToss";
import { LuckyBlow } from "./LuckyBlow";
import { Pilfer } from "./Pilfer";
import { ShadowStrike } from "./ShadowStrike";
import { SneakyStrike } from "./SneakyStrike";
import { SpreadToss } from "./SpreadToss";
import { Stab } from "./Stab";

export class ThiefSkill extends ClassSkill {
  heroKind = HeroKind.Thief;

  constructor(DATA) {
    super(DATA);
    this.skills[0] = new DaggerAttack(this.data, HeroKind.Thief, 0);
    this.skills[1] = new Stab(this.data, HeroKind.Thief, 1);
    this.skills[2] = new KnifeToss(this.data, HeroKind.Thief, 2);
    this.skills[3] = new LuckyBlow(this.data, HeroKind.Thief, 3);
    this.skills[4] = new SpreadToss(this.data, HeroKind.Thief, 4);
    this.skills[5] = new ShadowStrike(this.data, HeroKind.Thief, 5);
    this.skills[6] = new SneakyStrike(this.data, HeroKind.Thief, 6);
    this.skills[7] = new Pilfer(this.data, HeroKind.Thief, 7);
    this.skills[8] = new DarkWield(this.data, HeroKind.Thief, 8);
    this.skills[9] = new Assassination(this.data, HeroKind.Thief, 9);
  }
}
