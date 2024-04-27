import { MultiplierInfo } from "@/data/Multiplier";
import { Util } from "@/Util";
import { AchievementKind } from "@type/AchievementKind";
import { AchievementRewardKind } from "@type/AchievementRewardKind";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { BasicStatsKind } from "@type/BasicStatsKind";
import { Stats } from "@type/Stats";
import { DATA } from "..";

export class GeneralAchievement {
  data: DATA;
  kind: AchievementKind;
  rewardKind: AchievementRewardKind;
  rewardAmount;
  name;
  condition;
  value: Function;
  targetValue;
  isExponential;

  constructor(DATA: DATA, kind: AchievementKind, rewardKind: AchievementRewardKind, rewardAmount, name, condition, isExponential = false) {
    this.data = DATA;
    this.kind = kind;
    this.name = name;
    this.condition = condition;
    this.rewardKind = rewardKind;
    this.rewardAmount = rewardAmount;
    this.isExponential = isExponential;
  }

  static Generic(DATA: DATA, kind: AchievementKind, rewardKind: AchievementRewardKind, rewardAmount, name, value: Function, targetValue, isExponential = false) {
    return new GeneralAchievement(DATA, kind, rewardKind, rewardAmount, name, () => value() >= targetValue, isExponential);
  }

  get isCleared() {
    return (this.data.source.isGotAchievements[this.kind] ??= false);
  }
  set isCleared(value) {
    this.data.source.isGotAchievements[this.kind] = value;
  }

  get isGotReward() {
    return (this.data.source.isGotAchievementRewards[this.kind] ??= false);
  }
  set isGotReward(value) {
    this.data.source.isGotAchievementRewards[this.kind] = value;
  }

  get playtime() {
    return this.data.source.achievementPlaytimes[this.kind];
  }
  set playtime(value) {
    this.data.source.achievementPlaytimes[this.kind] = value;
  }

  Start() {
    switch (this.rewardKind) {
      case AchievementRewardKind.GoldCap:
        this.data.resource.goldCap.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Achievement,
            MultiplierType.Mul,
            () => this.rewardAmount,
            () => this.isGotReward
          )
        );
        break;
      case AchievementRewardKind.ResourceGain:
        this.data.stats.SetEffectResourceGain(
          new MultiplierInfo(
            MultiplierKind.Achievement,
            MultiplierType.Mul,
            () => this.rewardAmount,
            () => this.isGotReward
          )
        );
        break;
      case AchievementRewardKind.ExpGain:
        this.data.stats.SetEffectStats(
          Stats.ExpGain,
          new MultiplierInfo(
            MultiplierKind.Achievement,
            MultiplierType.Mul,
            () => this.rewardAmount,
            () => this.isGotReward
          )
        );
        break;
      case AchievementRewardKind.EQInventorySlot:
        this.data.inventory.equipInventoryUnlockedNum.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Achievement,
            MultiplierType.Add,
            () => this.rewardAmount,
            () => this.isGotReward
          )
        );
        break;
      case AchievementRewardKind.UtilityInventorySlot:
        this.data.inventory.potionUnlockedNum.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Achievement,
            MultiplierType.Add,
            () => this.rewardAmount,
            () => this.isGotReward
          )
        );
        break;
      case AchievementRewardKind.TamingPoint:
        this.data.stats.SetEffectStats(
          Stats.TamingPointGain,
          new MultiplierInfo(
            MultiplierKind.Achievement,
            MultiplierType.Mul,
            () => this.rewardAmount,
            () => this.isGotReward
          )
        );
        break;
      case AchievementRewardKind.EquipmentDrop:
        this.data.stats.SetEffectStats(
          Stats.EquipmentDropChance,
          new MultiplierInfo(
            MultiplierKind.Achievement,
            MultiplierType.Mul,
            () => this.rewardAmount,
            () => this.isGotReward
          )
        );
        break;
      case AchievementRewardKind.EquipmentProficiency:
        this.data.stats.SetEffectStats(
          Stats.EquipmentProficiencyGain,
          new MultiplierInfo(
            MultiplierKind.Achievement,
            MultiplierType.Mul,
            () => this.rewardAmount,
            () => this.isGotReward
          )
        );
        break;
      case AchievementRewardKind.ArtifactProficiency:
        this.data.stats.SetEffectStats(
          Stats.ArtifactProficiencyGain,
          new MultiplierInfo(
            MultiplierKind.Achievement,
            MultiplierType.Mul,
            () => this.rewardAmount,
            () => this.isGotReward
          )
        );
        break;
      case AchievementRewardKind.SkillProficiency:
        this.data.stats.SetEffectStats(
          Stats.SkillProficiencyGain,
          new MultiplierInfo(
            MultiplierKind.Achievement,
            MultiplierType.Mul,
            () => this.rewardAmount,
            () => this.isGotReward
          )
        );
        break;
      case AchievementRewardKind.SPD:
        this.data.stats.SetEffectBasicStats(
          BasicStatsKind.SPD,
          new MultiplierInfo(
            MultiplierKind.Achievement,
            MultiplierType.Mul,
            () => this.rewardAmount,
            () => this.isGotReward
          )
        );
        break;
      case AchievementRewardKind.Essence:
        this.data.alchemy.catalyst.essenceProductionMultiplier.RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Achievement,
            MultiplierType.Mul,
            () => this.rewardAmount,
            () => this.isGotReward
          )
        );
        break;
    }
  }

  Achieve() {
    this.isCleared = true;
    this.playtime = this.data.source.allTime;
  }

  CheckAchieve() {
    if (this.isCleared || !this.condition()) return;
    this.Achieve();
  }

  CanClaimRewad() {
    return this.isCleared && !this.isGotReward;
  }

  ClaimReward() {
    if (!this.CanClaimRewad()) return;
    this.isGotReward = true;
    switch (this.rewardKind) {
      case AchievementRewardKind.EpicCoin:
        // this.data.epicStore.epicCoin.Increase(this.rewardAmount, false);
        break;
      case AchievementRewardKind.PortalOrb:
        // this.data.area.portalOrb.Increase(this.rewardAmount);
        break;
      case AchievementRewardKind.Nitro:
        // this.data.nitro.nitro.IncreaseWithoutLimit(this.rewardAmount);
        break;
    }
  }

  NameString() {
    return this.name();
  }

  RewardString() {
    switch (this.rewardKind) {
      //   case AchievementRewardKind.EpicCoin:
      //     // stringBuilder.Append('<sprite="EpicCoin" index=0> ').Append(this.rewardAmount.ToString()).Append(" ").Append(Localized.localized.Basic(BasicWord.EpicCoin));
      //     break;
      //   case AchievementRewardKind.PortalOrb:
      //     // stringBuilder.Append(Util.tDigit(this.rewardAmount)).Append(" ").Append(Localized.localized.Basic(BasicWord.PortalOrb));
      //     break;
      //   case AchievementRewardKind.Nitro:
      //     // stringBuilder.Append(Util.tDigit(this.rewardAmount)).Append(" ").Append(Localized.localized.Basic(BasicWord.Nitro));
      //     break;
      case AchievementRewardKind.GoldCap:
        return `Gold Cap + ${Util.percent(this.rewardAmount)}`;
      case AchievementRewardKind.ResourceGain:
        return `Resource Gain + ${Util.percent(this.rewardAmount)}`;
      case AchievementRewardKind.ExpGain:
        return `Exp Gain + ${Util.percent(this.rewardAmount)}`;

      //   case AchievementRewardKind.EQInventorySlot:
      //     stringBuilder.Append(Localized.localized.Basic(BasicWord.EquipmentInventorySlot)).Append(" + ").Append(Util.tDigit(this.rewardAmount));
      //     break;
      //   case AchievementRewardKind.UtilityInventorySlot:
      //     stringBuilder.Append(Localized.localized.Basic(BasicWord.UtilityInventorySlot)).Append(" + ").Append(Util.tDigit(this.rewardAmount));
      //     break;
      case AchievementRewardKind.TamingPoint:
        return `Taming Point Gain + ${Util.percent(this.rewardAmount)}`;
      case AchievementRewardKind.EquipmentDrop:
        return `Equipment Drop Chance + ${Util.percent(this.rewardAmount)}`;

      case AchievementRewardKind.EquipmentProficiency:
        return `Equipment Proficiency Gain + ${Util.percent(this.rewardAmount)}`;

      case AchievementRewardKind.ArtifactProficiency:
        return `Artifact Proficiency Gain + ${Util.percent(this.rewardAmount)}`;

      case AchievementRewardKind.SkillProficiency:
        return `Skill Proficiency Gain + ${Util.percent(this.rewardAmount)}`;

      case AchievementRewardKind.SPD:
        return `SPD + ${Util.percent(this.rewardAmount)}`;

      case AchievementRewardKind.Essence:
        return `Essence Conversion Rate + ${Util.percent(this.rewardAmount)}`;

      default:
        return "Not Implemented";
    }
  }
}
