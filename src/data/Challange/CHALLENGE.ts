import { DATA } from "..";
import { Enums } from "../../Enums";
import { Localization } from "../../localization";
import { ChallengeKind } from "../../type/ChallengeKind";
import { ChallengeType } from "../../type/ChallengeType";
import { EquipmentPart } from "../../type/EquipmentPart";
import { HeroKind } from "../../type/HeroKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierInfo } from "../Multiplier";

export class CHALLENGE {
  data: DATA;
  type: ChallengeType = ChallengeType.RaidBossBattle;

  constructor(DATA: DATA) {
    this.data = DATA;
  }

  get kind() {
    return ChallengeKind.HCArachnetta150;
  }

  get statRewardMultiplier() {
    return this.data.challenge.sdStatRewardMultiplier.Value();
  }
  Start() {
    this.SetReward();
  }

  NameString() {
    const kindName = ChallengeKind[this.kind];

    switch (this.kind) {
      case ChallengeKind.SDSlime:
        return Localization.SDName(0);
      case ChallengeKind.SDSpider:
        return Localization.SDName(1);
      case ChallengeKind.SDBatTreant:
        return Localization.SDName(2);
      case ChallengeKind.SDFairyFlametiger:
        return Localization.SDName(3);
      case ChallengeKind.SDSlimeMslime:
        return Localization.SDName(4);
      default:
        return kindName;
    }
  }
  ClassExclusiveRewardStringEquipmentSlot(part: EquipmentPart) {
    let array = [];
    for (let index = 0; index < Enums.HeroKind; index++) array.push(`${HeroKind[index]}'s Equipment ${EquipmentPart[part]} Slot + 1`);
    return array;
  }
  EffectValueString(hero: HeroKind) {}

  //   sdId => 0;

  //   currentHeroKind: HeroKind => this.#data.challenge.heroKind;
  ClassExclusiveRewardString() {
    return [];
  }
  //   saveId => (this.currentHeroKind + this.kind * 10);

  //   isClearedCurrentHero => this.#data.source.isClearedChallenge[this.saveId];

  IsCleared(heroKind: HeroKind) {
    return this.data.source.isClearedChallenge[heroKind + 10 * this.kind];
  }

  IsClearedOnce() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      if (this.IsCleared(index)) return true;
    }
    return false;
  }
  //////////////////////

  ////////////////////////////
  IsClearedCompleted() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      if (!this.IsCleared(index)) return false;
    }
    return true;
  }

  get isReceivedRewardOnce() {
    return (this.data.source.isReceivedRewardsChallenge[this.kind * 10] ??= false);
  }
  set isReceivedRewardOnce(value) {
    this.data.source.isReceivedRewardsChallenge[this.kind * 10] = value;
  }

  get isReceivedRewardWarrior() {
    return (this.data.source.isReceivedRewardsChallenge[1 + this.kind * 10] ??= false);
  }
  set isReceivedRewardWarrior(value) {
    this.data.source.isReceivedRewardsChallenge[1 + this.kind * 10] = value;
  }

  get isReceivedRewardWizard() {
    return (this.data.source.isReceivedRewardsChallenge[2 + this.kind * 10] ??= false);
  }
  set isReceivedRewardWizard(value) {
    this.data.source.isReceivedRewardsChallenge[2 + this.kind * 10] = value;
  }

  get isReceivedRewardAngel() {
    return (this.data.source.isReceivedRewardsChallenge[3 + this.kind * 10] ??= false);
  }
  set isReceivedRewardAngel(value) {
    this.data.source.isReceivedRewardsChallenge[3 + this.kind * 10] = value;
  }

  get isReceivedRewardThief() {
    return (this.data.source.isReceivedRewardsChallenge[4 + this.kind * 10] ??= false);
  }
  set isReceivedRewardThief(value) {
    this.data.source.isReceivedRewardsChallenge[4 + this.kind * 10] = value;
  }

  get isReceivedRewardArcher() {
    return (this.data.source.isReceivedRewardsChallenge[5 + this.kind * 10] ??= false);
  }
  set isReceivedRewardArcher(value) {
    this.data.source.isReceivedRewardsChallenge[5 + this.kind * 10] = value;
  }

  get isReceivedRewardTamer() {
    return (this.data.source.isReceivedRewardsChallenge[6 + this.kind * 10] ??= false);
  }
  set isReceivedRewardTamer(value) {
    this.data.source.isReceivedRewardsChallenge[6 + this.kind * 10] = value;
  }

  get isReceivedRewardComplete() {
    return (this.data.source.isReceivedRewardsChallenge[7 + this.kind * 10] ??= false);
  }
  set isReceivedRewardComplete(value) {
    this.data.source.isReceivedRewardsChallenge[7 + this.kind * 10] = value;
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

  SetReceivedRewardClass(heroKind: HeroKind, value: boolean) {
    switch (heroKind) {
      case HeroKind.Warrior:
        this.isReceivedRewardWarrior = value;
        break;
      case HeroKind.Wizard:
        this.isReceivedRewardWizard = value;
        break;
      case HeroKind.Angel:
        this.isReceivedRewardAngel = value;
        break;
      case HeroKind.Thief:
        this.isReceivedRewardThief = value;
        break;
      case HeroKind.Archer:
        this.isReceivedRewardArcher = value;
        break;
      case HeroKind.Tamer:
        this.isReceivedRewardTamer = value;
        break;
      default:
        break;
    }
  }

  get rewardMultiplier() {
    return this.data.challenge.permanentRewardMultiplier.Value();
  }

  SetReward() {}

  SetRewardEquipmentSlot(part: EquipmentPart) {
    switch (part) {
      case EquipmentPart.Weapon:
        this.data.inventory.equipWeaponUnlockedNum[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWarrior
          )
        );
        this.data.inventory.equipWeaponUnlockedNum[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWizard
          )
        );
        this.data.inventory.equipWeaponUnlockedNum[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardAngel
          )
        );
        this.data.inventory.equipWeaponUnlockedNum[3].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardThief
          )
        );
        this.data.inventory.equipWeaponUnlockedNum[4].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardArcher
          )
        );
        this.data.inventory.equipWeaponUnlockedNum[5].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardTamer
          )
        );
        break;
      case EquipmentPart.Armor:
        this.data.inventory.equipArmorUnlockedNum[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWarrior
          )
        );
        this.data.inventory.equipArmorUnlockedNum[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWizard
          )
        );
        this.data.inventory.equipArmorUnlockedNum[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardAngel
          )
        );
        this.data.inventory.equipArmorUnlockedNum[3].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardThief
          )
        );
        this.data.inventory.equipArmorUnlockedNum[4].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardArcher
          )
        );
        this.data.inventory.equipArmorUnlockedNum[5].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardTamer
          )
        );
        break;
      case EquipmentPart.Jewelry:
        this.data.inventory.equipJewelryUnlockedNum[0].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWarrior
          )
        );
        this.data.inventory.equipJewelryUnlockedNum[1].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardWizard
          )
        );
        this.data.inventory.equipJewelryUnlockedNum[2].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardAngel
          )
        );
        this.data.inventory.equipJewelryUnlockedNum[3].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardThief
          )
        );
        this.data.inventory.equipJewelryUnlockedNum[4].RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Challenge,
            MultiplierType.Add,
            () => 1.0,
            () => this.isReceivedRewardArcher
          )
        );
        this.data.inventory.equipJewelryUnlockedNum[5].RegisterMultiplier(
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
