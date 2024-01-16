import { HeroKind } from "../../type/HeroKind";
import { ClassSkill } from "./ClassSkill";
import { AnthemOfEnthusiasm } from "./data/Tamer/AnthemOfEnthusiasm";
import { AttackingOrder } from "./data/Tamer/AttackingOrder";
import { BreedingKnowledge } from "./data/Tamer/BreedingKnowledge";
import { DefensiveOrder } from "./data/Tamer/DefensiveOrder";
import { FeedChilli } from "./data/Tamer/FeedChilli";
import { OdeOfFriendship } from "./data/Tamer/OdeOfFriendship";
import { RushOrder } from "./data/Tamer/RushOrder";
import { SonnetAttack } from "./data/Tamer/SonnetAttack";
import { SoothingBallad } from "./data/Tamer/SoothingBallad";
import { TuneOfTotalTaming } from "./data/Tamer/TuneOfTotalTaming";

export class TamerSkill extends ClassSkill {
  heroKind = HeroKind.Tamer;

  constructor() {
    super();
    this.skills[0] = new SonnetAttack(HeroKind.Tamer, 0);
    this.skills[1] = new AttackingOrder(HeroKind.Tamer, 1);
    this.skills[2] = new RushOrder(HeroKind.Tamer, 2);
    this.skills[3] = new DefensiveOrder(HeroKind.Tamer, 3);
    this.skills[4] = new SoothingBallad(HeroKind.Tamer, 4);
    this.skills[5] = new OdeOfFriendship(HeroKind.Tamer, 5);
    this.skills[6] = new AnthemOfEnthusiasm(HeroKind.Tamer, 6);
    this.skills[7] = new FeedChilli(HeroKind.Tamer, 7);
    this.skills[8] = new BreedingKnowledge(HeroKind.Tamer, 8);
    this.skills[9] = new TuneOfTotalTaming(HeroKind.Tamer, 9);
  }
}
