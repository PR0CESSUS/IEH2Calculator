import { Enums } from "../../Enums";
import { Debuff } from "../../type/Debuff";
import { ResourceKind } from "../../type/ResourceKind";
import { HeroKind } from "../../type/HeroKind";

import { EquipmentKind } from "../../type/EquipmentKind";

import { Element } from "../../type/Element";
import { SuperDungeonController } from "./SuperDungeonController";

export class BATTLE_CONTROLLER {
  isTryingRaid;
  isPaused;
  fieldScale = 1;
  heroKind: HeroKind;
  //   hero: HERO_BATTLE;
  //   List<> heroAllys = new List<>();
  //   pets: PET_BATTLE[] = new PET_BATTLE[Parameter.maxPetSpawnNum];
  //   monsters: MONSTER_BATTLE[] = new MONSTER_BATTLE[Parameter.maxMonsterSpawnNum];
  //   challengeMonsters: CHALLENGE_BATTLE[] = Array(Enums.ChallengeMonsterKind);
  //   heroesList: BATTLE[] = [];
  //   monstersList: BATTLE[] = [];
  //   heroListArray: BATTLE[];
  //   monsterListArray: BATTLE[];
  //   areaBattle: AREA_BATTLE;
  //   blessingCtrl: BlessingController;
  //   skillSet: SkillSet;
  //   totalDamage: NUMBER;
  timecount;
  timecountForSec;
  isTryingCapture;
  isAttemptNoEQ;
  isAttemptOnlyBase;
  //   bool[] isHandicapped = Array(Enums.ChallengeHandicapKind);
  deltaTime = 0.0166666675;
  //   debuffLength = Enum.GetNames(typeof (Debuff)).length;
  isEquippedAnyEQ;
  isEquippedAnySkill;
  superDungeonCtrl: SuperDungeonController;

  constructor(heroKind: HeroKind) {
    this.superDungeonCtrl = new SuperDungeonController(this);
    this.heroKind = heroKind;
  }

  Start() {
    // this.skillSet = globalThis.data.battle.skillSet;
    // this.hero.Start();
    this.superDungeonCtrl.Start();
  }
}
