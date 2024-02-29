import { DATA } from "..";
import { MultiplierInfo } from "../Multiplier";
import { ExpeditionKind } from "../../type/ExpeditionKind";
import { HeroKind } from "../../type/HeroKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { Stats } from "../../type/Stats";
import { Localization } from "../../localization";
import { Expedition } from "./Expedition";
import { MonsterPet } from "../Monster/MonsterPet";
import { MonsterParameter } from "../Monster/MonsterParameter";
import { Util } from "../../Util";
import { MonsterColor } from "../../type/MonsterColor";
import { MonsterSpecies } from "../../type/MonsterSpecies";

export class ExpeditionGlobalInformation {
  private data: DATA;
  kind: ExpeditionKind;

  constructor(DATA: DATA, kind: ExpeditionKind) {
    this.data = DATA;
    this.kind = kind;
  }

  Start() {
    this.SetEffect();
  }

  get level(): number {
    return this.data.source.expeditionLevels[this.kind];
  }
  set level(value: any) {
    this.data.source.expeditionLevels[this.kind] = parseInt(value);
  }

  GetExp(petNum) {
    return petNum * this.ExpGainPerSecPerPet();
  }
  ExpGainPerSecPerPet() {
    return 1.0 * this.data.expedition.expGainMultiplier.Value();
  }

  PetExpGainPerSec() {
    return 5.0 * (1.0 + 0.5 * this.level) * this.data.expedition.petExpGainMultiplier.Value() * this.data.stats.MaxPetEXPGainAmongHeroes();
  }

  SpeedModifierByExpeditionLevel() {
    return Math.pow(1.1, Math.floor(this.level / 10.0));
  }

  SetEffect() {
    switch (this.kind) {
      case ExpeditionKind.Brick:
        this.data.town.townLevelEffectMultipliers[0].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Add, () => this.EffectValue()));
        break;
      case ExpeditionKind.Equipment:
        this.data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Mul, () => this.EffectValue()));
        break;
      case ExpeditionKind.Log:
        this.data.town.townLevelEffectMultipliers[1].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Add, () => this.EffectValue()));
        break;
      case ExpeditionKind.PetExp:
        this.data.expedition.petExpGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Mul, () => this.EffectValue()));
        break;
      case ExpeditionKind.PetRank:
        this.data.stats.SetEffectStats(Stats.TamingPointGain, new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Mul, () => this.EffectValue()));
        break;
      case ExpeditionKind.Shard:
        this.data.town.townLevelEffectMultipliers[2].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Add, () => this.EffectValue()));
        break;
      case ExpeditionKind.WalkDistance:
        this.data.expedition.walkedDistanceGainMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Expedition, MultiplierType.Add, () => this.EffectValue()));
        break;
      default:
        break;
    }
  }

  get passiveEffectValueIncrementPerLevel() {
    switch (this.kind) {
      case ExpeditionKind.Brick:
        return 0.01 * this.data.expedition.passiveEffectMultiplier.Value();
      case ExpeditionKind.Equipment:
        return 0.02 * this.data.expedition.passiveEffectMultiplier.Value();
      case ExpeditionKind.Log:
        return 0.01 * this.data.expedition.passiveEffectMultiplier.Value();
      case ExpeditionKind.PetExp:
        return 0.2 * this.data.expedition.passiveEffectMultiplier.Value() * this.data.expedition.fieldTrainingPassiveEffectMultiplier.Value();
      case ExpeditionKind.PetRank:
        return 0.05 * this.data.expedition.passiveEffectMultiplier.Value();
      case ExpeditionKind.Shard:
        return 0.01 * this.data.expedition.passiveEffectMultiplier.Value();
      case ExpeditionKind.WalkDistance:
        return 0.05 * this.data.expedition.passiveEffectMultiplier.Value();

      default:
        return 0;
    }
  }

  EffectValue() {
    return this.passiveEffectValueIncrementPerLevel * this.level;
  }

  RewardAmount(expedition: Expedition, pet: MonsterPet, timeHour: number) {
    switch (this.kind) {
      case ExpeditionKind.Brick:
        return (
          60.0 *
          Math.pow(1.1, this.level) *
          this.data.town.MaxTownMaterialGainMultiplier() *
          (1.0 + 0.5 * pet.rank) *
          Math.max(0.55478474, Math.pow(timeHour, this.data.expedition.rewardModifierPerHour.Value())) *
          expedition.expeditionCtrl.rewardMultiplier.Value()
        );

      case ExpeditionKind.Equipment:
        return (
          1200.0 *
          (1.0 + 0.1 * this.level) *
          (1.0 + 0.05 * pet.rank) *
          Math.max(0.55478474, Math.pow(timeHour, this.data.expedition.rewardModifierPerHour.Value())) *
          expedition.expeditionCtrl.rewardMultiplier.Value()
        );
      case ExpeditionKind.Log:
        return (
          60.0 *
          Math.pow(1.1, this.level) *
          this.data.town.MaxTownMaterialGainMultiplier() *
          (1.0 + 0.5 * pet.rank) *
          Math.max(0.55478474, Math.pow(timeHour, this.data.expedition.rewardModifierPerHour.Value())) *
          expedition.expeditionCtrl.rewardMultiplier.Value()
        );
      case ExpeditionKind.PetExp:
        return (
          18000.0 *
          Math.pow(1.2, this.level) *
          (1.0 + 0.1 * expedition.TotalRank()) *
          Math.max(0.55478474, Math.pow(timeHour, this.data.expedition.rewardModifierPerHour.Value())) *
          this.data.stats.MaxPetEXPGainAmongHeroes() *
          this.data.expedition.petExpGainMultiplier.Value() *
          expedition.expeditionCtrl.rewardMultiplier.Value()
        );
      case ExpeditionKind.PetRank:
        return (
          4.0 *
          pet.MaxTPGAmongHeroes() *
          Math.pow(1.1, this.level) *
          (1.0 + 0.1 * pet.rank) *
          Math.max(0.55478474, Math.pow(timeHour, this.data.expedition.rewardModifierPerHour.Value())) *
          this.data.expedition.rewardMultiplier.Value()
        );

      case ExpeditionKind.Shard:
        return (
          60.0 *
          Math.pow(1.1, this.level) *
          this.data.town.MaxTownMaterialGainMultiplier() *
          (1.0 + 0.5 * pet.rank) *
          Math.max(0.55478474, Math.pow(timeHour, this.data.expedition.rewardModifierPerHour.Value())) *
          expedition.expeditionCtrl.rewardMultiplier.Value()
        );

      case ExpeditionKind.WalkDistance:
        return (
          1800.0 *
          pet.globalInfo.MoveSpeed(0, 0.0, false, HeroKind.Warrior) *
          Math.pow(1.2, this.level) *
          (1.0 + 0.1 * expedition.TotalRank()) *
          Math.max(0.55478474, Math.pow(timeHour, this.data.expedition.rewardModifierPerHour.Value())) *
          expedition.expeditionCtrl.rewardMultiplier.Value()
        );
      default:
        return 0;
    }
  }

  NameString() {
    return Localization.ExpeditionGlobalInformationString(this).name;
  }

  EffectValueString() {
    return Localization.ExpeditionGlobalInformationString(this).passive;
  }
  RewardString(expedition: Expedition, pet: MonsterPet, timeHour: number) {
    switch (this.kind) {
      case ExpeditionKind.Brick:
        return `${Util.tDigit(this.RewardAmount(expedition, pet, timeHour))} ${Localization.TownMaterialNameString(MonsterParameter.townMatBricks[pet.species])}`;
      case ExpeditionKind.Log:
        return `${Util.tDigit(this.RewardAmount(expedition, pet, timeHour))} ${Localization.TownMaterialNameString(MonsterParameter.townMatLogs[pet.species])}`;
      case ExpeditionKind.Shard:
        return `${Util.tDigit(this.RewardAmount(expedition, pet, timeHour))} ${Localization.TownMaterialNameString(MonsterParameter.townMatShards[pet.species])}`;
      case ExpeditionKind.Equipment:
        return `Proficiency Scroll [${Util.secondsToDhms(this.RewardAmount(expedition, pet, timeHour), false)}]`;
      case ExpeditionKind.PetExp:
        return `${Util.tDigit(this.RewardAmount(expedition, pet, timeHour))}  Pet EXP`;
      case ExpeditionKind.PetRank:
        return `${Util.tDigit(this.RewardAmount(expedition, pet, timeHour))} ${MonsterColor[pet.color]} ${MonsterSpecies[pet.species]}'s  Taming Point`;
      case ExpeditionKind.WalkDistance:
        return `${Util.tDigit(this.RewardAmount(expedition, pet, timeHour))}  meters Walked Distance`;

      default:
        return "not implemented";
    }
  }
}
