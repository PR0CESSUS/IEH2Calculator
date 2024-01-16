import { FireStorm } from "./data/Wizard/FireStorm";
import { HeroKind } from "../../type/HeroKind";
import { ClassSkill } from "./ClassSkill";
import { FireBolt } from "./data/Wizard/FireBolt";
import { StaffAttack } from "./data/Wizard/StaffAttack";
import { MeteorStrike } from "./data/Wizard/MeteorStrike";
import { IceBolt } from "./data/Wizard/IceBolt";
import { ChillingTouch } from "./data/Wizard/ChillingTouch";
import { Blizzard } from "./data/Wizard/Blizzard";
import { ThunderBolt } from "./data/Wizard/ThunderBolt";
import { DoubleThunderBolt } from "./data/Wizard/DoubleThunderBolt";
import { LightningThunder } from "./data/Wizard/LightningThunder";
export class WizardSkill extends ClassSkill {
  heroKind = HeroKind.Wizard;

  constructor() {
    super();
    this.skills[0] = new StaffAttack(HeroKind.Wizard, 0);
    this.skills[1] = new FireBolt(HeroKind.Wizard, 1);
    this.skills[2] = new FireStorm(HeroKind.Wizard, 2);
    this.skills[3] = new MeteorStrike(HeroKind.Wizard, 3);
    this.skills[4] = new IceBolt(HeroKind.Wizard, 4);
    this.skills[5] = new ChillingTouch(HeroKind.Wizard, 5);
    this.skills[6] = new Blizzard(HeroKind.Wizard, 6);
    this.skills[7] = new ThunderBolt(HeroKind.Wizard, 7);
    this.skills[8] = new DoubleThunderBolt(HeroKind.Wizard, 8);
    this.skills[9] = new LightningThunder(HeroKind.Wizard, 9);
  }
}
