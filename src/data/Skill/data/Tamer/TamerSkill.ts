import { HeroKind } from "../../../../type/HeroKind";
import { ClassSkill } from "../../ClassSkill";
import { AnthemOfEnthusiasm } from "./AnthemOfEnthusiasm";
import { AttackingOrder } from "./AttackingOrder";
import { BreedingKnowledge } from "./BreedingKnowledge";
import { DefensiveOrder } from "./DefensiveOrder";
import { FeedChilli } from "./FeedChilli";
import { OdeOfFriendship } from "./OdeOfFriendship";
import { RushOrder } from "./RushOrder";
import { SonnetAttack } from "./SonnetAttack";
import { SoothingBallad } from "./SoothingBallad";
import { TuneOfTotalTaming } from "./TuneOfTotalTaming";

export class TamerSkill extends ClassSkill {
  heroKind = HeroKind.Tamer;

  constructor(DATA) {
    super(DATA);
    this.skills[0] = new SonnetAttack(this.data, HeroKind.Tamer, 0);
    this.skills[1] = new AttackingOrder(this.data, HeroKind.Tamer, 1);
    this.skills[2] = new RushOrder(this.data, HeroKind.Tamer, 2);
    this.skills[3] = new DefensiveOrder(this.data, HeroKind.Tamer, 3);
    this.skills[4] = new SoothingBallad(this.data, HeroKind.Tamer, 4);
    this.skills[5] = new OdeOfFriendship(this.data, HeroKind.Tamer, 5);
    this.skills[6] = new AnthemOfEnthusiasm(this.data, HeroKind.Tamer, 6);
    this.skills[7] = new FeedChilli(this.data, HeroKind.Tamer, 7);
    this.skills[8] = new BreedingKnowledge(this.data, HeroKind.Tamer, 8);
    this.skills[9] = new TuneOfTotalTaming(this.data, HeroKind.Tamer, 9);
  }
}
