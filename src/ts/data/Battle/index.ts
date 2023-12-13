import { Enums } from "../../Enums";
import { Debuff } from "../../type/Debuff";
import { ResourceKind } from "../../type/ResourceKind";
import { HeroKind } from "../../type/HeroKind";

import { EquipmentKind } from "../../type/EquipmentKind";

import { Element } from "../../type/Element";
import { SuperDungeonController } from "../SuperDungeon/SuperDungeonController";
import { BATTLE } from "./BATTLE";

export class BATTLE_CONTROLLER {
  heroKind: HeroKind;
  //   hero: HERO_BATTLE;
  //   List<> heroAllys = new List<>();
  //   pets: PET_BATTLE[] = new PET_BATTLE[Parameter.maxPetSpawnNum];
  //   monsters: MONSTER_BATTLE[] = new MONSTER_BATTLE[Parameter.maxMonsterSpawnNum];
  //   challengeMonsters: CHALLENGE_BATTLE[] = Array(Enums.ChallengeMonsterKind);
  heroesList = [];
  monstersList: BATTLE[] = [];
  //   heroListArray: BATTLE[];
  //   monsterListArray: BATTLE[];
  //   areaBattle: AREA_BATTLE;
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
    this.monstersList.push(new BATTLE(this));
    // if (this.heroKind == HeroKind.Warrior) {

    // }
  }

  Start() {
    // this.skillSet = globalThis.data.battle.skillSet;
    // this.hero.Start();

    this.superDungeonCtrl.Start();
  }
}
