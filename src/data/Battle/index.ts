import { Enums } from "../../Enums";
import { HeroKind } from "../../type/HeroKind";
import { Element } from "../../type/Element";
import { SuperDungeonController } from "../SuperDungeon/SuperDungeonController";
import { CHALLENGE_BATTLE } from "./CHALLENGE_BATTLE";
import { HERO_BATTLE } from "./HERO_BATTLE";
import { MONSTER_BATTLE } from "./MONSTER_BATTLE";
import { DATA } from "..";
import { MonsterSpecies } from "../../type/MonsterSpecies";

export class DataBattle {
  data: DATA;
  heroKind: HeroKind;
  hero: HERO_BATTLE;
  //   List<> heroAllys = new List<>();
  //   pets: PET_BATTLE[] = new PET_BATTLE[Parameter.maxPetSpawnNum];
  monster: MONSTER_BATTLE;
  challengeMonster: CHALLENGE_BATTLE;
  // heroesList = [];
  // monstersList: BATTLE[] = [];
  //   heroListArray: BATTLE[];
  //   monsterListArray: BATTLE[];
  //   areaBattle: AREA_BATTLE;
  areaBattle = { areaDebuffFactor: 1 };
  //   blessingCtrl: BlessingController;
  //   skillSet: SkillSet;
  //   totalDamage: NUMBER;
  //   bool[] isHandicapped = Array(Enums.ChallengeHandicapKind);
  //   debuffLength = Enum.GetNames(typeof (Debuff)).length;
  superDungeonCtrl: SuperDungeonController;
  isSuperDungeon = true;

  constructor(DATA: DATA, heroKind: HeroKind) {
    this.data = DATA;
    this.heroKind = heroKind;
    this.superDungeonCtrl = new SuperDungeonController(this);
    this.monster = new MONSTER_BATTLE(DATA, this);
    this.challengeMonster = new CHALLENGE_BATTLE(DATA, this);
    this.hero = new HERO_BATTLE(DATA, this.heroKind, this);
    // if (this.heroKind == HeroKind.Warrior) {

    // }
  }

  Start() {
    // this.skillSet = this.data.battle.skillSet;
    // this.hero.Start();

    this.superDungeonCtrl.Start();
  }

  CurrentSlayerElement(): Element {
    for (let index = 0; index < Enums.Element; ++index) {
      let kind = index;
      if (this.data.stats.ElementSlayerDamage(this.heroKind, kind).Value() > 0.0) return kind;
    }
    return Element.Physical;
  }

  Enemy() {
    return this.data.source.enemySpecies == MonsterSpecies.ChallengeBoss ? this.challengeMonster : this.monster;
  }
}
