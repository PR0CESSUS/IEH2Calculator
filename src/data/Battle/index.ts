import { Enums } from "../../Enums";
import { Debuff } from "../../type/Debuff";
import { ResourceKind } from "../../type/ResourceKind";
import { HeroKind } from "../../type/HeroKind";

import { EquipmentKind } from "../../type/EquipmentKind";

import { Element } from "../../type/Element";
import { SuperDungeonController } from "../SuperDungeon/SuperDungeonController";
import { BATTLE } from "./BATTLE";
import { HERO_BATTLE } from "./HERO_BATTLE";
import { MONSTER_BATTLE } from "./MONSTER_BATTLE";
import { CHALLENGE_BATTLE } from "./CHALLENGE_BATTLE";

export class BATTLE_CONTROLLER {
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

  constructor(heroKind: HeroKind) {
    this.heroKind = heroKind;
    this.superDungeonCtrl = new SuperDungeonController(this);
    this.monster = new MONSTER_BATTLE(this);
    this.challengeMonster = new CHALLENGE_BATTLE(this);
    this.hero = new HERO_BATTLE(this.heroKind, this);
    // if (this.heroKind == HeroKind.Warrior) {

    // }
  }

  Start() {
    // this.skillSet = globalThis.data.battle.skillSet;
    // this.hero.Start();

    this.superDungeonCtrl.Start();
  }

  CurrentSlayerElement(): Element {
    for (let index = 0; index < Enums.Element; ++index) {
      let kind = index;
      if (globalThis.data.stats.ElementSlayerDamage(this.heroKind, kind).Value() > 0.0) return kind;
    }
    return Element.Physical;
  }
}
