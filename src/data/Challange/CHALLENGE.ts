import { MultiplierInfo } from "../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";
import { Enums } from "../../Enums";
import { EquipmentPart } from "../../type/EquipmentPart";
import { ChallengeType } from "../../type/ChallengeType";
import { ChallengeKind } from "../../type/ChallengeKind";
import { DATA } from "..";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { ResourceKind } from "../../type/ResourceKind";
import { Stats } from "../../type/Stats";
import { Element } from "../../type/Element";

export class CHALLENGE {
  #data: DATA;
  handicapKindList = [];
  type: ChallengeType = ChallengeType.RaidBossBattle;
  superDungeonId: number;
  kind: ChallengeKind;
  constructor(DATA: DATA, kind: ChallengeKind) {
    this.#data = DATA;
    this.kind = kind;
    // this.isReceivedRewardWarrior;
    // this.unlock = new Unlock();
    // this.disableUnlock = new Unlock();
    // this.accomplish = new AccomplishChallenge(this);
    // this.SetArea();
  }
  get statRewardMultiplier() {
    return this.#data.challenge.sdStatRewardMultiplier.Value();
  }
  Start() {
    this.SetReward();
  }

  //   sdId => 0;

  //   currentHeroKind: HeroKind => this.#data.challenge.heroKind;

  //   saveId => (this.currentHeroKind + this.kind * 10);

  //   isClearedCurrentHero => this.#data.source.isClearedChallenge[this.saveId];

  IsCleared(heroKind: HeroKind) {
    return this.#data.source.isClearedChallenge[heroKind + 10 * this.kind];
  }

  IsClearedOnce() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      if (this.IsCleared(index)) return true;
    }
    return false;
  }
  //////////////////////
  GetMaxModifierCleared(heroKind: HeroKind) {
    return this.#data.source.maxModifierCleareds[heroKind + 10 * this.superDungeonId];
  }
  BaseRewardValueIncrementPerFloor(heroKind: HeroKind) {
    switch (this.superDungeonId) {
      case 0:
        switch (heroKind) {
          case HeroKind.Warrior:
            return 1.0;
          case HeroKind.Wizard:
            return 1.0;
          case HeroKind.Angel:
            return 1.0;
          case HeroKind.Thief:
            return 0.2;
          case HeroKind.Archer:
            return 0.05;
          case HeroKind.Tamer:
            return 0.05;
          default:
            return 0;
        }
      case 1:
        switch (heroKind) {
          case HeroKind.Warrior:
            return 0.025;
          case HeroKind.Wizard:
            return 0.025;
          case HeroKind.Angel:
            return 0.025;
          case HeroKind.Thief:
            return 0.025;
          case HeroKind.Archer:
            return 0.025;
          case HeroKind.Tamer:
            return 0.025;
          default:
            return 0;
        }
      case 2:
        switch (heroKind) {
          case HeroKind.Warrior:
            return 0.01;
          case HeroKind.Wizard:
            return 0.01;
          case HeroKind.Angel:
            return 0.01;
          case HeroKind.Thief:
            return 0.01;
          case HeroKind.Archer:
            return 0.01;
          case HeroKind.Tamer:
            return 0.01;
          default:
            return 0;
        }

      case 3:
        switch (heroKind) {
          case HeroKind.Warrior:
            return 0.01;
          case HeroKind.Wizard:
            return 0.01;
          case HeroKind.Angel:
            return 0.01;
          case HeroKind.Thief:
            return 0.01;
          case HeroKind.Archer:
            return 0.01;
          case HeroKind.Tamer:
            return 0.01;
          default:
            return 0;
        }

      case 4:
        switch (heroKind) {
          case HeroKind.Warrior:
            return 0.005;
          case HeroKind.Wizard:
            return 0.005;
          case HeroKind.Angel:
            return 1.0 / 400.0;
          case HeroKind.Thief:
            return 1.0 / 400.0;
          case HeroKind.Archer:
            return 1.0 / 400.0;
          case HeroKind.Tamer:
            return 1.0 / 400.0;
          default:
            return 0;
        }

      default:
        return 0;
    }

    return 0.0;
  }
  RewardValueIncrementPerFloor(heroKind: HeroKind) {
    return this.BaseRewardValueIncrementPerFloor(heroKind) * this.statRewardMultiplier;
  }
  SuperDungeonMaxFloorReached(heroKind: HeroKind) {
    return this.#data.source.superDungeonMaxFloorsReached[heroKind + 10 * this.superDungeonId];
  }

  FloorRewardValue(heroKind: HeroKind) {
    return this.RewardValueIncrementPerFloor(heroKind) * this.SuperDungeonMaxFloorReached(heroKind) * (1.0 + 0.1 * this.GetMaxModifierCleared(heroKind));
  }

  ////////////////////////////
  IsClearedCompleted() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      if (!this.IsCleared(index)) return false;
    }
    return true;
  }

  get isReceivedRewardOnce() {
    return this.#data.source.isReceivedRewardsChallenge[this.kind * 10];
  }
  set isReceivedRewardOnce(value) {
    this.#data.source.isReceivedRewardsChallenge[this.kind * 10] = value;
  }

  get isReceivedRewardWarrior() {
    // console.log(this.#data.source.isReceivedRewardsChallenge[0]);

    return this.#data.source.isReceivedRewardsChallenge[1 + this.kind * 10];
  }
  set isReceivedRewardWarrior(value) {
    this.#data.source.isReceivedRewardsChallenge[1 + this.kind * 10] = value;
  }

  get isReceivedRewardWizard() {
    return this.#data.source.isReceivedRewardsChallenge[2 + this.kind * 10];
  }
  set isReceivedRewardWizard(value) {
    this.#data.source.isReceivedRewardsChallenge[2 + this.kind * 10] = value;
  }

  get isReceivedRewardAngel() {
    // console.log(this.#data.source.isReceivedRewardsChallenge[3 + this.kind * 10]);

    return this.#data.source.isReceivedRewardsChallenge[3 + this.kind * 10];
  }
  set isReceivedRewardAngel(value) {
    this.#data.source.isReceivedRewardsChallenge[3 + this.kind * 10] = value;
  }

  get isReceivedRewardThief() {
    return this.#data.source.isReceivedRewardsChallenge[4 + this.kind * 10];
  }
  set isReceivedRewardThief(value) {
    this.#data.source.isReceivedRewardsChallenge[4 + this.kind * 10] = value;
  }

  get isReceivedRewardArcher() {
    return this.#data.source.isReceivedRewardsChallenge[5 + this.kind * 10];
  }
  set isReceivedRewardArcher(value) {
    this.#data.source.isReceivedRewardsChallenge[5 + this.kind * 10] = value;
  }

  get isReceivedRewardTamer() {
    return this.#data.source.isReceivedRewardsChallenge[6 + this.kind * 10];
  }
  set isReceivedRewardTamer(value) {
    this.#data.source.isReceivedRewardsChallenge[6 + this.kind * 10] = value;
  }

  get isReceivedRewardComplete() {
    return this.#data.source.isReceivedRewardsChallenge[7 + this.kind * 10];
  }
  set isReceivedRewardComplete(value) {
    this.#data.source.isReceivedRewardsChallenge[7 + this.kind * 10] = value;
  }

  IsReceivedRewardClass(heroKind: HeroKind) {
    switch (heroKind) {
      case HeroKind.Warrior:
        return this.isReceivedRewardWarrior;
      case HeroKind.Wizard:
        return this.isReceivedRewardWizard;
      case HeroKind.Angel:
        return this.isReceivedRewardAngel;
      case HeroKind.Thief:
        return this.isReceivedRewardThief;
      case HeroKind.Archer:
        return this.isReceivedRewardArcher;
      case HeroKind.Tamer:
        return this.isReceivedRewardTamer;
      default:
        return false;
    }
  }

  get rewardMultiplier() {
    return this.#data.challenge.permanentRewardMultiplier.Value();
  }

  SetReward() {
    switch (this.kind) {
      case ChallengeKind.RaidFlorzporb100:
        break;
      case ChallengeKind.SoloFlorzporb100:
        this.SetRewardEquipmentSlot(EquipmentPart.Weapon);
        break;
      case ChallengeKind.RaidArachnetta150:
        break;
      case ChallengeKind.SoloArachnetta150:
        break;
      case ChallengeKind.RaidGuardianKor200:
        break;
      case ChallengeKind.SoloGuardianKor200:
        this.SetRewardEquipmentSlot(EquipmentPart.Jewelry);
        break;
      case ChallengeKind.HCArena1:
        break;
      case ChallengeKind.HCFlorzporb100:
        this.SetRewardBasicStats(0.1);
        break;
      case ChallengeKind.HCArachnetta150:
        this.SetRewardBasicStats(0.2);
        break;
      case ChallengeKind.HCGuardianKor200:
        this.SetRewardBasicStats(0.3);

        break;
      case ChallengeKind.HCArena2:
        break;
      case ChallengeKind.RaidNostro250:
        break;
      case ChallengeKind.SoloNostro250:
        this.SetRewardEquipmentSlot(EquipmentPart.Armor);
        break;
      case ChallengeKind.HCNostro250:
        this.SetRewardBasicStats(0.4);

        break;
      case ChallengeKind.RaidLadyEmelda300:
        break;
      case ChallengeKind.SoloLadyEmelda300:
        this.SetRewardEquipmentSlot(EquipmentPart.Weapon);
        break;
      case ChallengeKind.HCLadyEmelda300:
        this.SetRewardBasicStats(0.5);

        break;
      case ChallengeKind.RaidNariSune350:
        break;
      case ChallengeKind.SoloNariSune350:
        this.SetRewardEquipmentSlot(EquipmentPart.Jewelry);
        break;
      case ChallengeKind.HCNariSune350:
        this.SetRewardBasicStats(0.6);
        break;
      case ChallengeKind.RaidOctobaddie400:
        break;
      case ChallengeKind.SoloOctobaddie400:
        this.SetRewardEquipmentSlot(EquipmentPart.Armor);
        break;
      case ChallengeKind.HCOctobaddie400:
        this.SetRewardOcto([0.1, 0.1, 0.1, 1, 1, 1]);

        break;
      case ChallengeKind.RaidBananoon450:
        break;
      case ChallengeKind.SoloBananoon450:
        break;
      case ChallengeKind.HCBananoon450:
        break;
      case ChallengeKind.RaidGlorbliorbus500:
        break;
      case ChallengeKind.SoloGlorbliorbus500:
        break;
      case ChallengeKind.HCGlorbliorbus500:
        break;
      case ChallengeKind.RaidDistortionSlime550:
        break;
      case ChallengeKind.SoloDistortionSlime550:
        break;
      case ChallengeKind.HCDistortionSlime550:
        break;
      case ChallengeKind.RaidFlorzporb200:
        break;
      case ChallengeKind.SoloFlorzporb200:
        break;
      case ChallengeKind.HCFlorzporb200:
        this.SetRewardBasicStats(0.2);
        break;
      case ChallengeKind.RaidFlorzporb300:
        break;
      case ChallengeKind.SoloFlorzporb300:
        break;
      case ChallengeKind.HCFlorzporb300:
        this.SetRewardBasicStats(0.3);
        break;
      case ChallengeKind.RaidArachnetta250:
        break;
      case ChallengeKind.SoloArachnetta250:
        break;
      case ChallengeKind.HCArachnetta250:
        this.SetRewardBasicStats(0.3);
        break;
      case ChallengeKind.RaidArachnetta350:
        break;
      case ChallengeKind.SoloArachnetta350:
        break;
      case ChallengeKind.HCArachnetta350:
        this.SetRewardBasicStats(0.4);
        break;
      case ChallengeKind.RaidGuardianKor300:
        break;
      case ChallengeKind.SoloGuardianKor300:
        break;
      case ChallengeKind.HCGuardianKor300:
        this.SetRewardBasicStats(0.4);
        break;
      case ChallengeKind.RaidGuardianKor400:
        break;
      case ChallengeKind.SoloGuardianKor400:
        break;
      case ChallengeKind.HCGuardianKor400:
        this.SetRewardBasicStats(0.5);
        break;
      case ChallengeKind.RaidNostro350:
        break;
      case ChallengeKind.SoloNostro350:
        break;
      case ChallengeKind.HCNostro350:
        this.SetRewardBasicStats(0.5);
        break;
      case ChallengeKind.RaidNostro450:
        break;
      case ChallengeKind.SoloNostro450:
        break;
      case ChallengeKind.HCNostro450:
        this.SetRewardBasicStats(0.6);
        break;
      case ChallengeKind.HCArena3:
        break;
      case ChallengeKind.HCArena4:
        break;
      case ChallengeKind.HCArena5:
        break;
      case ChallengeKind.HCArena6:
        break;
      case ChallengeKind.HCArena7:
        break;
      case ChallengeKind.HCArena8:
        break;
      case ChallengeKind.HCArena9:
        break;
      case ChallengeKind.HCArena10:
        break;
      case ChallengeKind.RaidFlorzporb400:
        break;
      case ChallengeKind.SoloFlorzporb400:
        break;
      case ChallengeKind.HCFlorzporb400:
        this.SetRewardBasicStats(0.4);
        break;
      case ChallengeKind.RaidArachnetta450:
        break;
      case ChallengeKind.SoloArachnetta450:
        break;
      case ChallengeKind.HCArachnetta450:
        this.SetRewardBasicStats(0.5);
        break;
      case ChallengeKind.RaidGuardianKor500:
        break;
      case ChallengeKind.SoloGuardianKor500:
        break;
      case ChallengeKind.HCGuardianKor500:
        this.SetRewardBasicStats(0.6);
        break;
      case ChallengeKind.RaidNostro550:
        break;
      case ChallengeKind.SoloNostro550:
        break;
      case ChallengeKind.HCNostro550:
        this.SetRewardBasicStats(0.7);

        break;
      case ChallengeKind.RaidLadyEmelda400:
        break;
      case ChallengeKind.SoloLadyEmelda400:
        break;
      case ChallengeKind.HCLadyEmelda400:
        this.SetRewardBasicStats(0.6);

        break;
      case ChallengeKind.RaidLadyEmelda500:
        break;
      case ChallengeKind.SoloLadyEmelda500:
        break;
      case ChallengeKind.HCLadyEmelda500:
        this.SetRewardBasicStats(0.7);
        break;
      case ChallengeKind.RaidLadyEmelda600:
        break;
      case ChallengeKind.SoloLadyEmelda600:
        break;
      case ChallengeKind.HCLadyEmelda600:
        this.SetRewardBasicStats(0.8);
        break;
      case ChallengeKind.RaidNariSune450:
        break;
      case ChallengeKind.SoloNariSune450:
        break;
      case ChallengeKind.HCNariSune450:
        this.SetRewardBasicStats(0.7);

        break;
      case ChallengeKind.RaidNariSune550:
        break;
      case ChallengeKind.SoloNariSune550:
        break;
      case ChallengeKind.HCNariSune550:
        this.SetRewardBasicStats(0.8);

        break;
      case ChallengeKind.RaidNariSune650:
        break;
      case ChallengeKind.SoloNariSune650:
        break;
      case ChallengeKind.HCNariSune650:
        this.SetRewardBasicStats(0.9);

        break;
      case ChallengeKind.SDSlime:
        this.superDungeonId = 0;
        this.#data.stats
          .ResourceGain(ResourceKind.Stone)
          .RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Warrior)));
        this.#data.stats
          .ResourceGain(ResourceKind.Crystal)
          .RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Wizard)));
        this.#data.stats
          .ResourceGain(ResourceKind.Leaf)
          .RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Angel)));
        this.#data.resource.goldCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Thief)));
        this.#data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Archer)));
        this.#data.resource.slimeCoinCap.RegisterMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Tamer)));
        break;
      case ChallengeKind.RaidOctobaddie500:
        break;
      case ChallengeKind.SoloOctobaddie500:
        break;
      case ChallengeKind.HCOctobaddie500:
        this.SetRewardOcto([0.2, 0.2, 0.2, 5, 5, 5]);
        break;
      case ChallengeKind.RaidOctobaddie600:
        break;
      case ChallengeKind.SoloOctobaddie600:
        break;
      case ChallengeKind.HCOctobaddie600:
        this.SetRewardOcto([0.4, 0.4, 0.4, 25, 25, 25]);
        break;
      case ChallengeKind.RaidOctobaddie700:
        break;
      case ChallengeKind.SoloOctobaddie700:
        break;
      case ChallengeKind.HCOctobaddie700:
        this.SetRewardOcto([0.8, 0.8, 0.8, 125, 125, 125]);
        break;
      case ChallengeKind.SDSpider:
        this.superDungeonId = 1;
        this.#data.stats.SetEffectBasicStats(BasicStatsKind.HP, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Warrior)));
        this.#data.stats.SetEffectBasicStats(BasicStatsKind.MP, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Wizard)));
        this.#data.stats.SetEffectBasicStats(BasicStatsKind.ATK, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Angel)));
        this.#data.stats.SetEffectBasicStats(BasicStatsKind.MATK, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Thief)));
        this.#data.stats.SetEffectBasicStats(BasicStatsKind.DEF, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Archer)));
        this.#data.stats.SetEffectBasicStats(BasicStatsKind.MDEF, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Tamer)));
        break;
      case ChallengeKind.SDBatTreant:
        this.superDungeonId = 2;
        this.#data.stats.SetEffectElementDamage(
          Element.Physical,
          new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Warrior))
        );
        this.#data.stats.SetEffectStats(Stats.PhysCritChance, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Wizard)));
        this.#data.stats.SetEffectStats(Stats.ArmoredFury, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Angel)));
        this.#data.stats.SetEffectStats(Stats.CriticalDamage, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Thief)));
        this.#data.stats.SetEffectStats(Stats.PetCriticalDamage, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Archer)));
        this.#data.stats.SetEffectStats(Stats.PetPhysCritChance, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Tamer)));
        break;
      case ChallengeKind.SDFairyFlametiger:
        this.superDungeonId = 3;
        this.#data.stats.SetEffectMagicalDamage(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Warrior)));
        this.#data.stats.SetEffectStats(Stats.MagCritChance, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Wizard)));
        this.#data.stats.SetEffectStats(Stats.WardedFury, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Angel)));
        this.#data.stats.SetEffectStats(Stats.DebuffRes, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Thief)));
        this.#data.stats.SetEffectElementResistance(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Archer)));
        this.#data.stats.SetEffectStats(Stats.PetMagCritChance, new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Tamer)));
        break;
      case ChallengeKind.SDSlimeMslime:
        this.superDungeonId = 4;
        this.#data.sdg.SetEffectSDDamageMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Warrior)));
        this.#data.sdg.SetEffectSDChallengeBossDamageMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Wizard)));
        this.#data.sdg.SetEffectSDDamageCutMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Angel)));
        this.#data.sdg.SetEffectSDChallengeBossDamageCutMultiplier(
          new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Thief))
        );
        this.#data.sdg.SetEffectSDArmoredFuryMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Archer)));
        this.#data.sdg.SetEffectSDWardedFuryMultiplier(new MultiplierInfo(MultiplierKind.SuperDungeon, MultiplierType.Mul, () => this.FloorRewardValue(HeroKind.Tamer)));
        break;
      default:
        break;
    }
  }

  SetRewardEquipmentSlot(part: EquipmentPart) {
    switch (part) {
      case EquipmentPart.Weapon:
        this.#data.inventory.equipWeaponUnlockedNum[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWarrior
          )
        );
        this.#data.inventory.equipWeaponUnlockedNum[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWizard
          )
        );
        this.#data.inventory.equipWeaponUnlockedNum[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardAngel
          )
        );
        this.#data.inventory.equipWeaponUnlockedNum[3].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardThief
          )
        );
        this.#data.inventory.equipWeaponUnlockedNum[4].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardArcher
          )
        );
        this.#data.inventory.equipWeaponUnlockedNum[5].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardTamer
          )
        );
        break;
      case EquipmentPart.Armor:
        this.#data.inventory.equipArmorUnlockedNum[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWarrior
          )
        );
        this.#data.inventory.equipArmorUnlockedNum[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWizard
          )
        );
        this.#data.inventory.equipArmorUnlockedNum[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardAngel
          )
        );
        this.#data.inventory.equipArmorUnlockedNum[3].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardThief
          )
        );
        this.#data.inventory.equipArmorUnlockedNum[4].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardArcher
          )
        );
        this.#data.inventory.equipArmorUnlockedNum[5].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardTamer
          )
        );
        break;
      case EquipmentPart.Jewelry:
        this.#data.inventory.equipJewelryUnlockedNum[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWarrior
          )
        );
        this.#data.inventory.equipJewelryUnlockedNum[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWizard
          )
        );
        this.#data.inventory.equipJewelryUnlockedNum[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardAngel
          )
        );
        this.#data.inventory.equipJewelryUnlockedNum[3].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardThief
          )
        );
        this.#data.inventory.equipJewelryUnlockedNum[4].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardArcher
          )
        );
        this.#data.inventory.equipJewelryUnlockedNum[5].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardTamer
          )
        );
        break;
    }
  }

  SetRewardBasicStats(value: number) {
    this.#data.stats.SetEffectBasicStats(
      BasicStatsKind.HP,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => value * this.#data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardWarrior
      )
    );
    this.#data.stats.SetEffectBasicStats(
      BasicStatsKind.MP,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => value * this.#data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardWizard
      )
    );
    this.#data.stats.SetEffectBasicStats(
      BasicStatsKind.ATK,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => value * this.#data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardAngel
      )
    );
    this.#data.stats.SetEffectBasicStats(
      BasicStatsKind.MATK,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => value * this.#data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardThief
      )
    );
    this.#data.stats.SetEffectBasicStats(
      BasicStatsKind.DEF,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => value * this.#data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardArcher
      )
    );
    this.#data.stats.SetEffectBasicStats(
      BasicStatsKind.MDEF,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => value * this.#data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardTamer
      )
    );
  }

  SetRewardOcto(value: number[]) {
    this.#data.stats.SetEffectStats(
      Stats.ArmoredFury,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => value[0] * this.#data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardWarrior
      )
    );
    this.#data.stats.SetEffectStats(
      Stats.WardedFury,
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => value[1] * this.#data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardWizard
      )
    );
    this.#data.resource.goldCap.RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => value[2] * this.#data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardAngel
      )
    );
    this.#data.stats.ResourceGain(ResourceKind.Stone).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => value[3] * this.#data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardThief
      )
    );
    this.#data.stats.ResourceGain(ResourceKind.Crystal).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => value[4] * this.#data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardArcher
      )
    );
    this.#data.stats.ResourceGain(ResourceKind.Leaf).RegisterMultiplier(
      new MultiplierInfo(
        MultiplierKind.Challenge,
        MultiplierType.Mul,
        () => value[5] * this.#data.challenge.permanentRewardMultiplier.Value(),
        () => this.isReceivedRewardTamer
      )
    );
  }
}
