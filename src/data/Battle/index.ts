import { Enums } from "../../Enums";
import { HeroKind } from "../../type/HeroKind";
import { Element } from "../../type/Element";
import { SuperDungeonController } from "../SuperDungeon/SuperDungeonController";
import { CHALLENGE_BATTLE } from "./CHALLENGE_BATTLE";
import { HERO_BATTLE } from "./HERO_BATTLE";
import { MONSTER_BATTLE } from "./MONSTER_BATTLE";
import { DATA } from "..";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { SkillSet } from "../Skill/SkillSet";
import { SDModifierKind } from "@/type/SDModifierKind";

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
  skillSet: SkillSet;
  //   totalDamage: NUMBER;
  //   bool[] isHandicapped = Array(Enums.ChallengeHandicapKind);
  //   debuffLength = Enum.GetNames(typeof (Debuff)).length;
  superDungeonCtrl: SuperDungeonController;

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

  get isSuperDungeon() {
    return this.data.source.isSuperDungeon;
  }

  Start() {
    this.skillSet = new SkillSet(this);
    // this.hero.Start();

    this.superDungeonCtrl.Start();
    // this.skillSet.Initialize();
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

  get limitedSkillNum() {
    //TODO limitedSkillNum hardcoded 8 for now
    if (this.isSuperDungeon) {
      if (this.data.source.isActiveSdModifiersCustom[SDModifierKind.ReduceSkillSlot])
        return Math.max(0.0, this.superDungeonCtrl.skillSlotNum.Value() - this.data.source.sdModifierValuesCustom[SDModifierKind.ReduceSkillSlot]);
      return this.superDungeonCtrl.skillSlotNum.Value();
    }
    // if (this.isAttemptOnlyBase || this.isHandicapped[9] || this.isHandicapped[12])
    //   return 1;
    // if (this.isHandicapped[10] || this.isHandicapped[11])
    //   return 2;
    // return Main.main.S.persistentSkillSlotNum[(int) this.heroKind] > 0 ? (int) this.skillSet.maxSkillSlotNum.Value() : 10;
    return 8;
  }

  get limitedGlobalSkillNum() {
    if (this.isSuperDungeon) return 0;
    // if (this.isHandicapped[10])
    //   return 1;
    // return Main.main.S.persistentGlobalSkillSlotNum > 0 ? (int) this.skillSet.maxGlobalSkillSlotNum.Value() : 10;
    return 8;
  }
}
