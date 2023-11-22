import { MultiplierInfo, Multiplier } from "../../Multiplier";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { HeroKind } from "../../type/HeroKind";
import { Enums } from "../../Enums";
import { EquipmentPart } from "../../type/EquipmentPart";
import { ChallengeType } from "../../type/ChallengeType";
import { ChallengeKind } from "../../type/ChallengeKind";

export class CHALLENGE {
  handicapKindList = [];
  area;
  isTryingThisChallenge;
  unlock;
  disableUnlock;
  accomplish;
  type: ChallengeType = ChallengeType.RaidBossBattle;

  kind: ChallengeKind = ChallengeKind.RaidFlorzporb100;
  constructor() {
    console.log();
    // this.isReceivedRewardWarrior;
    // this.unlock = new Unlock();
    // this.disableUnlock = new Unlock();
    // this.accomplish = new AccomplishChallenge(this);
    // this.SetArea();
  }

  Start() {
    this.SetReward();
  }

  //   sdId => 0;

  //   currentHeroKind: HeroKind => globalThis.data.challenge.heroKind;

  //   saveId => (this.currentHeroKind + this.kind * 10);

  //   isClearedCurrentHero => globalThis.data.source.isClearedChallenge[this.saveId];

  IsCleared(heroKind: HeroKind) {
    return globalThis.data.source.isClearedChallenge[heroKind + 10 * this.kind];
  }

  IsClearedOnce() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      if (this.IsCleared(index)) return true;
    }
    return false;
  }

  IsClearedCompleted() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      if (!this.IsCleared(index)) return false;
    }
    return true;
  }

  get isReceivedRewardOnce() {
    return globalThis.data.source.isReceivedRewardsChallenge[this.kind * 10];
  }
  set isReceivedRewardOnce(value) {
    globalThis.data.source.isReceivedRewardsChallenge[this.kind * 10] = value;
  }

  get isReceivedRewardWarrior() {
    // console.log(globalThis.data.source.isReceivedRewardsChallenge[0]);

    return globalThis.data.source.isReceivedRewardsChallenge[1 + this.kind * 10];
  }
  set isReceivedRewardWarrior(value) {
    globalThis.data.source.isReceivedRewardsChallenge[1 + this.kind * 10] = value;
  }

  get isReceivedRewardWizard() {
    return globalThis.data.source.isReceivedRewardsChallenge[2 + this.kind * 10];
  }
  set isReceivedRewardWizard(value) {
    globalThis.data.source.isReceivedRewardsChallenge[2 + this.kind * 10] = value;
  }

  get isReceivedRewardAngel() {
    // console.log(globalThis.data.source.isReceivedRewardsChallenge[3 + this.kind * 10]);

    return globalThis.data.source.isReceivedRewardsChallenge[3 + this.kind * 10];
  }
  set isReceivedRewardAngel(value) {
    globalThis.data.source.isReceivedRewardsChallenge[3 + this.kind * 10] = value;
  }

  get isReceivedRewardThief() {
    return globalThis.data.source.isReceivedRewardsChallenge[4 + this.kind * 10];
  }
  set isReceivedRewardThief(value) {
    globalThis.data.source.isReceivedRewardsChallenge[4 + this.kind * 10] = value;
  }

  get isReceivedRewardArcher() {
    return globalThis.data.source.isReceivedRewardsChallenge[5 + this.kind * 10];
  }
  set isReceivedRewardArcher(value) {
    globalThis.data.source.isReceivedRewardsChallenge[5 + this.kind * 10] = value;
  }

  get isReceivedRewardTamer() {
    return globalThis.data.source.isReceivedRewardsChallenge[6 + this.kind * 10];
  }
  set isReceivedRewardTamer(value) {
    globalThis.data.source.isReceivedRewardsChallenge[6 + this.kind * 10] = value;
  }

  get isReceivedRewardComplete() {
    return globalThis.data.source.isReceivedRewardsChallenge[7 + this.kind * 10];
  }
  set isReceivedRewardComplete(value) {
    globalThis.data.source.isReceivedRewardsChallenge[7 + this.kind * 10] = value;
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
    return globalThis.data.challenge.permanentRewardMultiplier.Value();
  }

  SetReward() {}

  SetRewardEquipmentSlot(part: EquipmentPart) {
    switch (part) {
      case EquipmentPart.Weapon:
        globalThis.data.inventory.equipWeaponUnlockedNum[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWarrior
          )
        );
        globalThis.data.inventory.equipWeaponUnlockedNum[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWizard
          )
        );
        globalThis.data.inventory.equipWeaponUnlockedNum[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardAngel
          )
        );
        globalThis.data.inventory.equipWeaponUnlockedNum[3].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardThief
          )
        );
        globalThis.data.inventory.equipWeaponUnlockedNum[4].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardArcher
          )
        );
        globalThis.data.inventory.equipWeaponUnlockedNum[5].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardTamer
          )
        );
        break;
      case EquipmentPart.Armor:
        globalThis.data.inventory.equipArmorUnlockedNum[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWarrior
          )
        );
        globalThis.data.inventory.equipArmorUnlockedNum[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWizard
          )
        );
        globalThis.data.inventory.equipArmorUnlockedNum[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardAngel
          )
        );
        globalThis.data.inventory.equipArmorUnlockedNum[3].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardThief
          )
        );
        globalThis.data.inventory.equipArmorUnlockedNum[4].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardArcher
          )
        );
        globalThis.data.inventory.equipArmorUnlockedNum[5].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardTamer
          )
        );
        break;
      case EquipmentPart.Jewelry:
        globalThis.data.inventory.equipJewelryUnlockedNum[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWarrior
          )
        );
        globalThis.data.inventory.equipJewelryUnlockedNum[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWizard
          )
        );
        globalThis.data.inventory.equipJewelryUnlockedNum[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardAngel
          )
        );
        globalThis.data.inventory.equipJewelryUnlockedNum[3].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardThief
          )
        );
        globalThis.data.inventory.equipJewelryUnlockedNum[4].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardArcher
          )
        );
        globalThis.data.inventory.equipJewelryUnlockedNum[5].RegisterMultiplier(
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
}
