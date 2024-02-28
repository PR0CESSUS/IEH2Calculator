import { FireStorm } from "./FireStorm";
import { HeroKind } from "../../../../type/HeroKind";
import { ClassSkill } from "../../ClassSkill";
import { FireBolt } from "./FireBolt";
import { StaffAttack } from "./StaffAttack";
import { MeteorStrike } from "./MeteorStrike";
import { IceBolt } from "./IceBolt";
import { ChillingTouch } from "./ChillingTouch";
import { Blizzard } from "./Blizzard";
import { ThunderBolt } from "./ThunderBolt";
import { DoubleThunderBolt } from "./DoubleThunderBolt";
import { LightningThunder } from "./LightningThunder";
export class WizardSkill extends ClassSkill {
  heroKind = HeroKind.Wizard;

  constructor(DATA) {
    super(DATA);
    this.skills[0] = new StaffAttack(this.data, HeroKind.Wizard, 0);
    this.skills[1] = new FireBolt(this.data, HeroKind.Wizard, 1);
    this.skills[2] = new FireStorm(this.data, HeroKind.Wizard, 2);
    this.skills[3] = new MeteorStrike(this.data, HeroKind.Wizard, 3);
    this.skills[4] = new IceBolt(this.data, HeroKind.Wizard, 4);
    this.skills[5] = new ChillingTouch(this.data, HeroKind.Wizard, 5);
    this.skills[6] = new Blizzard(this.data, HeroKind.Wizard, 6);
    this.skills[7] = new ThunderBolt(this.data, HeroKind.Wizard, 7);
    this.skills[8] = new DoubleThunderBolt(this.data, HeroKind.Wizard, 8);
    this.skills[9] = new LightningThunder(this.data, HeroKind.Wizard, 9);
  }
}
