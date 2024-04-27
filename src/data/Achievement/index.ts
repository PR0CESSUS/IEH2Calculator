import { Util } from "@/Util";
import { MultiplierInfo } from "@/data/Multiplier";
import { Localization } from "@/localization";
import { AchievementKind } from "@type/AchievementKind";
import { AchievementRewardKind } from "@type/AchievementRewardKind";
import { HeroKind } from "@type/HeroKind";
import { MonsterColor } from "@type/MonsterColor";
import { MonsterSpecies } from "@type/MonsterSpecies";
import { MultiplierKind } from "@type/MultiplierKind";
import { MultiplierType } from "@type/MultiplierType";
import { DATA } from "..";
import { GeneralAchievement } from "./GeneralAchievement";

export class DataAchievement {
  data: DATA;
  achievementList: GeneralAchievement[] = [];
  achievementListGeneral: GeneralAchievement[] = [];
  achievementListArea: GeneralAchievement[] = [];
  achievementListCurrency: GeneralAchievement[] = [];
  achievementListGuild: GeneralAchievement[] = [];
  achievementListChallenge: GeneralAchievement[] = [];
  achievementListAlchemy: GeneralAchievement[] = [];
  achievementListEquip: GeneralAchievement[] = [];
  achievementListSkill: GeneralAchievement[] = [];
  achievementListRebirth: GeneralAchievement[] = [];
  achievementListPlaytime: GeneralAchievement[] = [];
  achievementListNumber = [];

  constructor(DATA: DATA) {
    this.data = DATA;
  }

  SetAchievement() {
    // this.achievementListGeneral.push(GeneralAchievement.Generic(this.data,AchievementKind.ClearTutorial, AchievementRewardKind.EpicCoin, 5000.0, (() => Localization.AchievementString(0)), (() => this.data.quest.Quest(QuestKindGlobal.AreaPrestige).isCleared)));
    // this.achievementListGeneral.push(GeneralAchievement.Generic(this.data,AchievementKind.UnlockWizard, AchievementRewardKind.Nitro, 1000.0, (() => Localization.AchievementString(1)), (() => this.data.guild.Member(HeroKind.Wizard).IsUnlocked())));
    // this.achievementListGeneral.push(GeneralAchievement.Generic(this.data,AchievementKind.UnlockAngel, AchievementRewardKind.Nitro, 2000.0, (() => Localization.AchievementString(2)), (() => this.data.guild.Member(HeroKind.Angel).IsUnlocked())));
    // this.achievementListGeneral.push(GeneralAchievement.Generic(this.data,AchievementKind.UnlockThief, AchievementRewardKind.Nitro, 3000.0, (() => Localization.AchievementString(3)), (() => this.data.guild.Member(HeroKind.Thief).IsUnlocked())));
    // this.achievementListGeneral.push(GeneralAchievement.Generic(this.data,AchievementKind.UnlockArcher, AchievementRewardKind.Nitro, 4000.0, (() => Localization.AchievementString(4)), (() => this.data.guild.Member(HeroKind.Archer).IsUnlocked())));
    // this.achievementListGeneral.push(GeneralAchievement.Generic(this.data,AchievementKind.UnlockTamer, AchievementRewardKind.Nitro, 5000.0, (() => Localization.AchievementString(5)), (() => this.data.guild.Member(HeroKind.Tamer).IsUnlocked())));

    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Nitro1e3,
        AchievementRewardKind.GoldCap,
        0.01,
        () => Localization.AchievementString(6, 1000.0),
        () => this.data.source.nitroConsumed,
        1000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Nitro1e4,
        AchievementRewardKind.GoldCap,
        0.02,
        () => Localization.AchievementString(6, 10000.0),
        () => this.data.source.nitroConsumed,
        10000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Nitro1e5,
        AchievementRewardKind.GoldCap,
        0.03,
        () => Localization.AchievementString(6, 100000.0),
        () => this.data.source.nitroConsumed,
        100000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Nitro1e6,
        AchievementRewardKind.GoldCap,
        0.04,
        () => Localization.AchievementString(6, 1000000.0),
        () => this.data.source.nitroConsumed,
        1000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Nitro1e7,
        AchievementRewardKind.GoldCap,
        0.05,
        () => Localization.AchievementString(6, 10000000.0),
        () => this.data.source.nitroConsumed,
        10000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Nitro1e8,
        AchievementRewardKind.GoldCap,
        0.06,
        () => Localization.AchievementString(6, 100000000.0),
        () => this.data.source.nitroConsumed,
        100000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Nitro1e9,
        AchievementRewardKind.GoldCap,
        0.07,
        () => Localization.AchievementString(6, 1000000000.0),
        () => this.data.source.nitroConsumed,
        1000000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Nitro1e10,
        AchievementRewardKind.GoldCap,
        0.08,
        () => Localization.AchievementString(6, 10000000000.0),
        () => this.data.source.nitroConsumed,
        10000000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Nitro1e11,
        AchievementRewardKind.GoldCap,
        0.09,
        () => Localization.AchievementString(6, 100000000000.0),
        () => this.data.source.nitroConsumed,
        100000000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Nitro1e12,
        AchievementRewardKind.GoldCap,
        0.1,
        () => Localization.AchievementString(6, 1000000000000.0),
        () => this.data.source.nitroConsumed,
        1000000000000.0
      )
    );

    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Capture1e2,
        AchievementRewardKind.TamingPoint,
        0.02,
        () => Localization.AchievementString(7, 100.0),
        () => this.data.monster.CapturedNum(),
        100.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Capture1e3,
        AchievementRewardKind.TamingPoint,
        0.04,
        () => Localization.AchievementString(7, 1000.0),
        () => this.data.monster.CapturedNum(),
        1000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Capture1e4,
        AchievementRewardKind.TamingPoint,
        0.06,
        () => Localization.AchievementString(7, 10000.0),
        () => this.data.monster.CapturedNum(),
        10000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Capture1e5,
        AchievementRewardKind.TamingPoint,
        0.08,
        () => Localization.AchievementString(7, 100000.0),
        () => this.data.monster.CapturedNum(),
        100000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Capture1e6,
        AchievementRewardKind.TamingPoint,
        0.1,
        () => Localization.AchievementString(7, 1000000.0),
        () => this.data.monster.CapturedNum(),
        1000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Capture1e7,
        AchievementRewardKind.TamingPoint,
        0.12,
        () => Localization.AchievementString(7, 10000000.0),
        () => this.data.monster.CapturedNum(),
        10000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Capture1e8,
        AchievementRewardKind.TamingPoint,
        0.14,
        () => Localization.AchievementString(7, 100000000.0),
        () => this.data.monster.CapturedNum(),
        100000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Capture1e9,
        AchievementRewardKind.TamingPoint,
        0.16,
        () => Localization.AchievementString(7, 1000000000.0),
        () => this.data.monster.CapturedNum(),
        1000000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Capture1e10,
        AchievementRewardKind.TamingPoint,
        0.18,
        () => Localization.AchievementString(7, 10000000000.0),
        () => this.data.monster.CapturedNum(),
        10000000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Capture1e11,
        AchievementRewardKind.TamingPoint,
        0.2,
        () => Localization.AchievementString(7, 100000000000.0),
        () => this.data.monster.CapturedNum(),
        100000000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Capture1e12,
        AchievementRewardKind.TamingPoint,
        0.22,
        () => Localization.AchievementString(7, 1000000000000.0),
        () => this.data.monster.CapturedNum(),
        1000000000000.0
      )
    );

    // this.achievementListGeneral.push(
    //   GeneralAchievement.Generic(
    //     this.data,
    //     AchievementKind.Chest1,
    //     AchievementRewardKind.EpicCoin,
    //     500.0,
    //     () => Localization.AchievementString(8, 1.0),
    //     () => this.data.source.openedChestNum,
    //     1.0
    //   )
    // );
    // this.achievementListGeneral.push(
    //   GeneralAchievement.Generic(
    //     this.data,
    //     AchievementKind.Chest10,
    //     AchievementRewardKind.EpicCoin,
    //     1000.0,
    //     () => Localization.AchievementString(8, 10.0),
    //     () => this.data.source.openedChestNum,
    //     10.0
    //   )
    // );
    // this.achievementListGeneral.push(
    //   GeneralAchievement.Generic(
    //     this.data,
    //     AchievementKind.Chest1e2,
    //     AchievementRewardKind.EpicCoin,
    //     1500.0,
    //     () => Localization.AchievementString(8, 100.0),
    //     () => this.data.source.openedChestNum,
    //     100.0
    //   )
    // );
    // this.achievementListGeneral.push(
    //   GeneralAchievement.Generic(
    //     this.data,
    //     AchievementKind.Chest1e3,
    //     AchievementRewardKind.EpicCoin,
    //     2000.0,
    //     () => Localization.AchievementString(8, 1000.0),
    //     () => this.data.source.openedChestNum,
    //     1000.0
    //   )
    // );
    // this.achievementListGeneral.push(
    //   GeneralAchievement.Generic(
    //     this.data,
    //     AchievementKind.Chest1e4,
    //     AchievementRewardKind.EpicCoin,
    //     2500.0,
    //     () => Localization.AchievementString(8, 10000.0),
    //     () => this.data.source.openedChestNum,
    //     10000.0
    //   )
    // );
    // this.achievementListGeneral.push(
    //   GeneralAchievement.Generic(
    //     this.data,
    //     AchievementKind.Chest1e5,
    //     AchievementRewardKind.EpicCoin,
    //     5000.0,
    //     () => Localization.AchievementString(8, 100000.0),
    //     () => this.data.source.openedChestNum,
    //     100000.0
    //   )
    // );
    // this.achievementListGeneral.push(
    //   GeneralAchievement.Generic(
    //     this.data,
    //     AchievementKind.Chest1e6,
    //     AchievementRewardKind.EpicCoin,
    //     10000.0,
    //     () => Localization.AchievementString(8, 1000000.0),
    //     () => this.data.source.openedChestNum,
    //     1000000.0
    //   )
    // );
    // this.achievementListGeneral.push(
    //   GeneralAchievement.Generic(
    //     this.data,
    //     AchievementKind.Chest1e7,
    //     AchievementRewardKind.EpicCoin,
    //     15000.0,
    //     () => Localization.AchievementString(8, 10000000.0),
    //     () => this.data.source.openedChestNum,
    //     10000000.0
    //   )
    // );
    // this.achievementListGeneral.push(
    //   GeneralAchievement.Generic(
    //     this.data,
    //     AchievementKind.Chest1e8,
    //     AchievementRewardKind.EpicCoin,
    //     20000.0,
    //     () => Localization.AchievementString(8, 100000000.0),
    //     () => this.data.source.openedChestNum,
    //     100000000.0
    //   )
    // );
    // this.achievementListGeneral.push(
    //   GeneralAchievement.Generic(
    //     this.data,
    //     AchievementKind.Chest1e9,
    //     AchievementRewardKind.EpicCoin,
    //     25000.0,
    //     () => Localization.AchievementString(8, 1000000000.0),
    //     () => this.data.source.openedChestNum,
    //     1000000000.0
    //   )
    // );
    // this.achievementListGeneral.push(
    //   GeneralAchievement.Generic(
    //     this.data,
    //     AchievementKind.Chest1e10,
    //     AchievementRewardKind.EpicCoin,
    //     30000.0,
    //     () => Localization.AchievementString(8, 10000000000.0),
    //     () => this.data.source.openedChestNum,
    //     10000000000.0
    //   )
    // );

    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Mimic1,
        AchievementRewardKind.ExpGain,
        0.01,
        () => Localization.AchievementString(9, 1.0),
        () => this.data.monster.GlobalInformation(MonsterSpecies.Mimic, MonsterColor.Normal).DefeatedNum(),
        1.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Mimic1e1,
        AchievementRewardKind.ExpGain,
        0.02,
        () => Localization.AchievementString(9, 10.0),
        () => this.data.monster.GlobalInformation(MonsterSpecies.Mimic, MonsterColor.Normal).DefeatedNum(),
        10.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Mimic1e2,
        AchievementRewardKind.ExpGain,
        0.04,
        () => Localization.AchievementString(9, 100.0),
        () => this.data.monster.GlobalInformation(MonsterSpecies.Mimic, MonsterColor.Normal).DefeatedNum(),
        100.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Mimic1e3,
        AchievementRewardKind.ExpGain,
        0.08,
        () => Localization.AchievementString(9, 1000.0),
        () => this.data.monster.GlobalInformation(MonsterSpecies.Mimic, MonsterColor.Normal).DefeatedNum(),
        1000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Mimic1e4,
        AchievementRewardKind.ExpGain,
        0.16,
        () => Localization.AchievementString(9, 10000.0),
        () => this.data.monster.GlobalInformation(MonsterSpecies.Mimic, MonsterColor.Normal).DefeatedNum(),
        10000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Mimic1e5,
        AchievementRewardKind.ExpGain,
        0.32,
        () => Localization.AchievementString(9, 100000.0),
        () => this.data.monster.GlobalInformation(MonsterSpecies.Mimic, MonsterColor.Normal).DefeatedNum(),
        100000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Mimic1e6,
        AchievementRewardKind.ExpGain,
        0.64,
        () => Localization.AchievementString(9, 1000000.0),
        () => this.data.monster.GlobalInformation(MonsterSpecies.Mimic, MonsterColor.Normal).DefeatedNum(),
        1000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Mimic1e7,
        AchievementRewardKind.ExpGain,
        1.28,
        () => Localization.AchievementString(9, 10000000.0),
        () => this.data.monster.GlobalInformation(MonsterSpecies.Mimic, MonsterColor.Normal).DefeatedNum(),
        10000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Mimic1e8,
        AchievementRewardKind.ExpGain,
        2.56,
        () => Localization.AchievementString(9, 100000000.0),
        () => this.data.monster.GlobalInformation(MonsterSpecies.Mimic, MonsterColor.Normal).DefeatedNum(),
        100000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Mimic1e9,
        AchievementRewardKind.ExpGain,
        5.12,
        () => Localization.AchievementString(9, 1000000000.0),
        () => this.data.monster.GlobalInformation(MonsterSpecies.Mimic, MonsterColor.Normal).DefeatedNum(),
        1000000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Mimic1e10,
        AchievementRewardKind.ExpGain,
        10.24,
        () => Localization.AchievementString(9, 10000000000.0),
        () => this.data.monster.GlobalInformation(MonsterSpecies.Mimic, MonsterColor.Normal).DefeatedNum(),
        10000000000.0
      )
    );

    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Swarm1,
        AchievementRewardKind.ResourceGain,
        1.0,
        () => Localization.AchievementString(10, 1.0),
        () => this.data.source.swarmClearedNum,
        1.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Swarm1e1,
        AchievementRewardKind.ResourceGain,
        2.0,
        () => Localization.AchievementString(10, 10.0),
        () => this.data.source.swarmClearedNum,
        10.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Swarm5e1,
        AchievementRewardKind.ResourceGain,
        3.0,
        () => Localization.AchievementString(10, 50.0),
        () => this.data.source.swarmClearedNum,
        50.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Swarm1e2,
        AchievementRewardKind.ResourceGain,
        4.0,
        () => Localization.AchievementString(10, 100.0),
        () => this.data.source.swarmClearedNum,
        100.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Swarm5e2,
        AchievementRewardKind.ResourceGain,
        5.0,
        () => Localization.AchievementString(10, 500.0),
        () => this.data.source.swarmClearedNum,
        500.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Swarm1e3,
        AchievementRewardKind.ResourceGain,
        6.0,
        () => Localization.AchievementString(10, 1000.0),
        () => this.data.source.swarmClearedNum,
        1000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Swarm5e3,
        AchievementRewardKind.ResourceGain,
        7.0,
        () => Localization.AchievementString(10, 5000.0),
        () => this.data.source.swarmClearedNum,
        5000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Swarm1e4,
        AchievementRewardKind.ResourceGain,
        8.0,
        () => Localization.AchievementString(10, 10000.0),
        () => this.data.source.swarmClearedNum,
        10000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Swarm1e5,
        AchievementRewardKind.ResourceGain,
        9.0,
        () => Localization.AchievementString(10, 100000.0),
        () => this.data.source.swarmClearedNum,
        100000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Swarm1e6,
        AchievementRewardKind.ResourceGain,
        10.0,
        () => Localization.AchievementString(10, 1000000.0),
        () => this.data.source.swarmClearedNum,
        1000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Swarm1e7,
        AchievementRewardKind.ResourceGain,
        20.0,
        () => Localization.AchievementString(10, 10000000.0),
        () => this.data.source.swarmClearedNum,
        10000000.0
      )
    );

    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Walk40075km,
        AchievementRewardKind.SPD,
        0.01,
        () => Localization.AchievementString(11, 0, "40,075,000"),
        () => this.data.stats.TotalMovedDistance() / 100.0,
        40075000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Walk40075km2,
        AchievementRewardKind.SPD,
        0.02,
        () => Localization.AchievementString(12, 0, "80,150,000"),
        () => this.data.stats.TotalMovedDistance() / 100.0,
        80150000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Walk40075km3,
        AchievementRewardKind.SPD,
        0.03,
        () => Localization.AchievementString(13, 0, "120,225,000"),
        () => this.data.stats.TotalMovedDistance() / 100.0,
        120225000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Walk40075km5,
        AchievementRewardKind.SPD,
        0.04,
        () => Localization.AchievementString(14, 0, "200,375,000"),
        () => this.data.stats.TotalMovedDistance() / 100.0,
        200375000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Walk384400km,
        AchievementRewardKind.SPD,
        0.05,
        () => Localization.AchievementString(15, 0, "384,400,000"),
        () => this.data.stats.TotalMovedDistance() / 100.0,
        384400000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Walk384400km2,
        AchievementRewardKind.SPD,
        0.07,
        () => Localization.AchievementString(16, 0, "786,800,000"),
        () => this.data.stats.TotalMovedDistance() / 100.0,
        768800000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Walk149600000km,
        AchievementRewardKind.SPD,
        0.1,
        () => Localization.AchievementString(17, 0, "149,600,000,000"),
        () => this.data.stats.TotalMovedDistance() / 100.0,
        149600000000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.WalkToSirius,
        AchievementRewardKind.SPD,
        0.15,
        () => Localization.AchievementString(42),
        () => this.data.stats.TotalMovedDistance() / 100.0,
        8.13622820641949e16
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.WalkToEdgeOfUniverse,
        AchievementRewardKind.SPD,
        0.2,
        () => Localization.AchievementString(43),
        () => this.data.stats.TotalMovedDistance() / 100.0,
        1.3055808052161504e26
      )
    );

    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.EpicCoin1e3,
        AchievementRewardKind.GoldCap,
        0.2,
        () => Localization.AchievementString(18, 1000.0),
        () => this.data.source.epicCoinConsumed,
        1000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.EpicCoin1e4,
        AchievementRewardKind.GoldCap,
        0.4,
        () => Localization.AchievementString(18, 10000.0),
        () => this.data.source.epicCoinConsumed,
        10000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.EpicCoin1e5,
        AchievementRewardKind.GoldCap,
        0.6,
        () => Localization.AchievementString(18, 100000.0),
        () => this.data.source.epicCoinConsumed,
        100000.0
      )
    );
    this.achievementListGeneral.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.EpicCoin1e6,
        AchievementRewardKind.GoldCap,
        0.8,
        () => Localization.AchievementString(18, 1000000.0),
        () => this.data.source.epicCoinConsumed,
        1000000.0
      )
    );

    // this.achievementListArea.push(new GeneralAchievement(this.data,AchievementKind.UnlockMagicslime, AchievementRewardKind.EpicCoin, 500.0, (() => Localization.AchievementString(19, 0, Localization.AreaName(AreaKind.MagicSlimeCity))), (() => this.data.area.IsUnlocked(AreaKind.MagicSlimeCity))));
    // this.achievementListArea.push(new GeneralAchievement(this.data,AchievementKind.UnlockSpider, AchievementRewardKind.EpicCoin, 1000.0, (() => Localization.AchievementString(19, 0, Localization.AreaName(AreaKind.SpiderMaze))), (() => this.data.area.IsUnlocked(AreaKind.SpiderMaze))));
    // this.achievementListArea.push(new GeneralAchievement(this.data,AchievementKind.UnlockBat, AchievementRewardKind.EpicCoin, 1500.0, (() => Localization.AchievementString(19, 0, Localization.AreaName(AreaKind.BatCave))), (() => this.data.area.IsUnlocked(AreaKind.BatCave))));
    // this.achievementListArea.push(new GeneralAchievement(this.data,AchievementKind.UnlockFairy, AchievementRewardKind.EpicCoin, 2000.0, (() => Localization.AchievementString(19, 0, Localization.AreaName(AreaKind.FairyGarden))), (() => this.data.area.IsUnlocked(AreaKind.FairyGarden))));
    // this.achievementListArea.push(new GeneralAchievement(this.data,AchievementKind.UnlockFox, AchievementRewardKind.EpicCoin, 2500.0, (() => Localization.AchievementString(19, 0, Localization.AreaName(AreaKind.FoxShrine))), (() => this.data.area.IsUnlocked(AreaKind.FoxShrine))));
    // this.achievementListArea.push(new GeneralAchievement(this.data,AchievementKind.UnlockDevilfish, AchievementRewardKind.EpicCoin, 3000.0, (() => Localization.AchievementString(19, 0, Localization.AreaName(AreaKind.DevilFishLake))), (() => this.data.area.IsUnlocked(AreaKind.DevilFishLake))));
    // this.achievementListArea.push(new GeneralAchievement(this.data,AchievementKind.UnlockTreant, AchievementRewardKind.EpicCoin, 3500.0, (() => Localization.AchievementString(19, 0, Localization.AreaName(AreaKind.TreantDarkForest))), (() => this.data.area.IsUnlocked(AreaKind.TreantDarkForest))));
    // this.achievementListArea.push(new GeneralAchievement(this.data,AchievementKind.UnlockFlametiger, AchievementRewardKind.EpicCoin, 4000.0, (() => Localization.AchievementString(19, 0, Localization.AreaName(AreaKind.FlameTigerVolcano))), (() => this.data.area.IsUnlocked(AreaKind.FlameTigerVolcano))));
    // this.achievementListArea.push(new GeneralAchievement(this.data,AchievementKind.UnlockUnicorn, AchievementRewardKind.EpicCoin, 4500.0, (() => Localization.AchievementString(19, 0, Localization.AreaName(AreaKind.UnicornIsland))), (() => this.data.area.IsUnlocked(AreaKind.UnicornIsland))));

    // this.achievementListArea.push(GeneralAchievement.Generic(this.data,AchievementKind.EquipUniqueSlime, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(20, 0, Localization.MonsterSpeciesName(MonsterSpecies.Slime))), (() => this.data.equipment.UniqueSetIsGotNum(EquipmentSetKind.Slime)), 8.0));
    // this.achievementListArea.push(GeneralAchievement.Generic(this.data,AchievementKind.EquipUniqueMagicslime, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(20, 0, Localization.MonsterSpeciesName(MonsterSpecies.MagicSlime))), (() => this.data.equipment.UniqueSetIsGotNum(EquipmentSetKind.Magicslime)), 8.0));
    // this.achievementListArea.push(GeneralAchievement.Generic(this.data,AchievementKind.EquipUniqueSpider, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(20, 0, Localization.MonsterSpeciesName(MonsterSpecies.Spider))), (() => this.data.equipment.UniqueSetIsGotNum(EquipmentSetKind.Spider)), 8.0));
    // this.achievementListArea.push(GeneralAchievement.Generic(this.data,AchievementKind.EquipUniqueBat, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(20, 0, Localization.MonsterSpeciesName(MonsterSpecies.Bat))), (() => this.data.equipment.UniqueSetIsGotNum(EquipmentSetKind.Bat)), 8.0));
    // this.achievementListArea.push(GeneralAchievement.Generic(this.data,AchievementKind.EquipUniqueFairy, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(20, 0, Localization.MonsterSpeciesName(MonsterSpecies.Fairy))), (() => this.data.equipment.UniqueSetIsGotNum(EquipmentSetKind.Fairy)), 8.0));
    // this.achievementListArea.push(GeneralAchievement.Generic(this.data,AchievementKind.EquipUniqueFox, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(20, 0, Localization.MonsterSpeciesName(MonsterSpecies.Fox))), (() => this.data.equipment.UniqueSetIsGotNum(EquipmentSetKind.Fox)), 8.0));
    // this.achievementListArea.push(GeneralAchievement.Generic(this.data,AchievementKind.EquipUniqueDevilfish, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(20, 0, Localization.MonsterSpeciesName(MonsterSpecies.DevilFish))), (() => this.data.equipment.UniqueSetIsGotNum(EquipmentSetKind.Devilfish)), 8.0));
    // this.achievementListArea.push(GeneralAchievement.Generic(this.data,AchievementKind.EquipUniqueTreant, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(20, 0, Localization.MonsterSpeciesName(MonsterSpecies.Treant))), (() => this.data.equipment.UniqueSetIsGotNum(EquipmentSetKind.Treant)), 8.0));
    // this.achievementListArea.push(GeneralAchievement.Generic(this.data,AchievementKind.EquipUniqueFlametiger, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(20, 0, Localization.MonsterSpeciesName(MonsterSpecies.FlameTiger))), (() => this.data.equipment.UniqueSetIsGotNum(EquipmentSetKind.Flametiger)), 8.0));
    // this.achievementListArea.push(GeneralAchievement.Generic(this.data,AchievementKind.EquipUniqueUnicorn, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(20, 0, Localization.MonsterSpeciesName(MonsterSpecies.Unicorn))), (() => this.data.equipment.UniqueSetIsGotNum(EquipmentSetKind.Unicorn)), 8.0));

    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e6,
        AchievementRewardKind.GoldCap,
        0.01,
        () => Localization.AchievementString(21, 0, Util.tDigit(1000000.0)),
        () => this.data.source.totalGold,
        1000000.0,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e9,
        AchievementRewardKind.GoldCap,
        0.015,
        () => Localization.AchievementString(21, 0, Util.tDigit(1000000000.0)),
        () => this.data.source.totalGold,
        1000000000.0,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e10,
        AchievementRewardKind.GoldCap,
        0.02,
        () => Localization.AchievementString(21, 0, Util.tDigit(10000000000.0)),
        () => this.data.source.totalGold,
        10000000000.0,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e11,
        AchievementRewardKind.GoldCap,
        0.025,
        () => Localization.AchievementString(21, 0, Util.tDigit(100000000000.0)),
        () => this.data.source.totalGold,
        100000000000.0,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e12,
        AchievementRewardKind.GoldCap,
        0.03,
        () => Localization.AchievementString(21, 0, Util.tDigit(1000000000000.0)),
        () => this.data.source.totalGold,
        1000000000000.0,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e13,
        AchievementRewardKind.GoldCap,
        0.035,
        () => Localization.AchievementString(21, 0, Util.tDigit(10000000000000.0)),
        () => this.data.source.totalGold,
        10000000000000.0,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e14,
        AchievementRewardKind.GoldCap,
        0.04,
        () => Localization.AchievementString(21, 0, Util.tDigit(100000000000000.0)),
        () => this.data.source.totalGold,
        100000000000000.0,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e15,
        AchievementRewardKind.GoldCap,
        0.045,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e15)),
        () => this.data.source.totalGold,
        1e15,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e16,
        AchievementRewardKind.GoldCap,
        0.05,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e16)),
        () => this.data.source.totalGold,
        1e16,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e17,
        AchievementRewardKind.GoldCap,
        0.055,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e17)),
        () => this.data.source.totalGold,
        1e17,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e18,
        AchievementRewardKind.GoldCap,
        0.06,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e18)),
        () => this.data.source.totalGold,
        1e18,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e19,
        AchievementRewardKind.GoldCap,
        0.065,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e19)),
        () => this.data.source.totalGold,
        1e19,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e20,
        AchievementRewardKind.GoldCap,
        0.07,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e20)),
        () => this.data.source.totalGold,
        1e20,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e22,
        AchievementRewardKind.GoldCap,
        0.075,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e22)),
        () => this.data.source.totalGold,
        1e22,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e24,
        AchievementRewardKind.GoldCap,
        0.08,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e24)),
        () => this.data.source.totalGold,
        1e24,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e26,
        AchievementRewardKind.GoldCap,
        0.085,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e26)),
        () => this.data.source.totalGold,
        1e26,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e28,
        AchievementRewardKind.GoldCap,
        0.09,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e28)),
        () => this.data.source.totalGold,
        1e28,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e30,
        AchievementRewardKind.GoldCap,
        0.095,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e30)),
        () => this.data.source.totalGold,
        1e30,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e33,
        AchievementRewardKind.GoldCap,
        0.1,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e33)),
        () => this.data.source.totalGold,
        1e33,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e36,
        AchievementRewardKind.GoldCap,
        0.105,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e36)),
        () => this.data.source.totalGold,
        1e36,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e39,
        AchievementRewardKind.GoldCap,
        0.11,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e39)),
        () => this.data.source.totalGold,
        1e39,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e42,
        AchievementRewardKind.GoldCap,
        0.115,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e42)),
        () => this.data.source.totalGold,
        1e42,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e45,
        AchievementRewardKind.GoldCap,
        0.12,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e45)),
        () => this.data.source.totalGold,
        1e45,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e48,
        AchievementRewardKind.GoldCap,
        0.125,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e48)),
        () => this.data.source.totalGold,
        1e48,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e51,
        AchievementRewardKind.GoldCap,
        0.13,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e51)),
        () => this.data.source.totalGold,
        1e51,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e54,
        AchievementRewardKind.GoldCap,
        0.135,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e54)),
        () => this.data.source.totalGold,
        1e54,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Gold1e57,
        AchievementRewardKind.GoldCap,
        0.14,
        () => Localization.AchievementString(21, 0, Util.tDigit(1e57)),
        () => this.data.source.totalGold,
        1e57,
        true
      )
    );

    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e10,
        AchievementRewardKind.ResourceGain,
        1.0,
        () => Localization.AchievementString(22, 0, "1e10"),
        () => this.data.source.totalStone,
        10000000000.0,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e20,
        AchievementRewardKind.ResourceGain,
        2.0,
        () => Localization.AchievementString(22, 0, "1e20"),
        () => this.data.source.totalStone,
        1e20,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e30,
        AchievementRewardKind.ResourceGain,
        3.0,
        () => Localization.AchievementString(22, 0, "1e30"),
        () => this.data.source.totalStone,
        1e30,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e40,
        AchievementRewardKind.ResourceGain,
        4.0,
        () => Localization.AchievementString(22, 0, "1e40"),
        () => this.data.source.totalStone,
        1e40,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e50,
        AchievementRewardKind.ResourceGain,
        5.0,
        () => Localization.AchievementString(22, 0, "1e50"),
        () => this.data.source.totalStone,
        1e50,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e60,
        AchievementRewardKind.ResourceGain,
        6.0,
        () => Localization.AchievementString(22, 0, "1e60"),
        () => this.data.source.totalStone,
        1e60,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e70,
        AchievementRewardKind.ResourceGain,
        7.0,
        () => Localization.AchievementString(22, 0, "1e70"),
        () => this.data.source.totalStone,
        1e70,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e80,
        AchievementRewardKind.ResourceGain,
        8.0,
        () => Localization.AchievementString(22, 0, "1e80"),
        () => this.data.source.totalStone,
        1e80,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e90,
        AchievementRewardKind.ResourceGain,
        9.0,
        () => Localization.AchievementString(22, 0, "1e90"),
        () => this.data.source.totalStone,
        1e90,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e100,
        AchievementRewardKind.ResourceGain,
        10.0,
        () => Localization.AchievementString(22, 0, "1e100"),
        () => this.data.source.totalStone,
        1e100,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e110,
        AchievementRewardKind.ResourceGain,
        11.0,
        () => Localization.AchievementString(22, 0, "1e110"),
        () => this.data.source.totalStone,
        1e110,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e120,
        AchievementRewardKind.ResourceGain,
        12.0,
        () => Localization.AchievementString(22, 0, "1e120"),
        () => this.data.source.totalStone,
        1e120,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e130,
        AchievementRewardKind.ResourceGain,
        13.0,
        () => Localization.AchievementString(22, 0, "1e130"),
        () => this.data.source.totalStone,
        1e130,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e140,
        AchievementRewardKind.ResourceGain,
        14.0,
        () => Localization.AchievementString(22, 0, "1e140"),
        () => this.data.source.totalStone,
        1e140,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e150,
        AchievementRewardKind.ResourceGain,
        15.0,
        () => Localization.AchievementString(22, 0, "1e150"),
        () => this.data.source.totalStone,
        1e150,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e160,
        AchievementRewardKind.ResourceGain,
        16.0,
        () => Localization.AchievementString(22, 0, "1e160"),
        () => this.data.source.totalStone,
        1e160,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e170,
        AchievementRewardKind.ResourceGain,
        17.0,
        () => Localization.AchievementString(22, 0, "1e170"),
        () => this.data.source.totalStone,
        1e170,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e180,
        AchievementRewardKind.ResourceGain,
        18.0,
        () => Localization.AchievementString(22, 0, "1e180"),
        () => this.data.source.totalStone,
        1e180,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e190,
        AchievementRewardKind.ResourceGain,
        19.0,
        () => Localization.AchievementString(22, 0, "1e190"),
        () => this.data.source.totalStone,
        1e190,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e200,
        AchievementRewardKind.ResourceGain,
        20.0,
        () => Localization.AchievementString(22, 0, "1e200"),
        () => this.data.source.totalStone,
        1e200,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e210,
        AchievementRewardKind.ResourceGain,
        21.0,
        () => Localization.AchievementString(22, 0, "1e210"),
        () => this.data.source.totalStone,
        1e210,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e220,
        AchievementRewardKind.ResourceGain,
        22.0,
        () => Localization.AchievementString(22, 0, "1e220"),
        () => this.data.source.totalStone,
        1e220,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e230,
        AchievementRewardKind.ResourceGain,
        23.0,
        () => Localization.AchievementString(22, 0, "1e230"),
        () => this.data.source.totalStone,
        1e230,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e240,
        AchievementRewardKind.ResourceGain,
        24.0,
        () => Localization.AchievementString(22, 0, "1e240"),
        () => this.data.source.totalStone,
        1e240,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Stone1e250,
        AchievementRewardKind.ResourceGain,
        25.0,
        () => Localization.AchievementString(22, 0, "1e250"),
        () => this.data.source.totalStone,
        1e250,
        true
      )
    );

    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e10,
        AchievementRewardKind.ResourceGain,
        1.0,
        () => Localization.AchievementString(23, 0, "1e10"),
        () => this.data.source.totalCrystal,
        10000000000.0,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e20,
        AchievementRewardKind.ResourceGain,
        2.0,
        () => Localization.AchievementString(23, 0, "1e20"),
        () => this.data.source.totalCrystal,
        1e20,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e30,
        AchievementRewardKind.ResourceGain,
        3.0,
        () => Localization.AchievementString(23, 0, "1e30"),
        () => this.data.source.totalCrystal,
        1e30,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e40,
        AchievementRewardKind.ResourceGain,
        4.0,
        () => Localization.AchievementString(23, 0, "1e40"),
        () => this.data.source.totalCrystal,
        1e40,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e50,
        AchievementRewardKind.ResourceGain,
        5.0,
        () => Localization.AchievementString(23, 0, "1e50"),
        () => this.data.source.totalCrystal,
        1e50,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e60,
        AchievementRewardKind.ResourceGain,
        6.0,
        () => Localization.AchievementString(23, 0, "1e60"),
        () => this.data.source.totalCrystal,
        1e60,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e70,
        AchievementRewardKind.ResourceGain,
        7.0,
        () => Localization.AchievementString(23, 0, "1e70"),
        () => this.data.source.totalCrystal,
        1e70,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e80,
        AchievementRewardKind.ResourceGain,
        8.0,
        () => Localization.AchievementString(23, 0, "1e80"),
        () => this.data.source.totalCrystal,
        1e80,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e90,
        AchievementRewardKind.ResourceGain,
        9.0,
        () => Localization.AchievementString(23, 0, "1e90"),
        () => this.data.source.totalCrystal,
        1e90,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e100,
        AchievementRewardKind.ResourceGain,
        10.0,
        () => Localization.AchievementString(23, 0, "1e100"),
        () => this.data.source.totalCrystal,
        1e100,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e110,
        AchievementRewardKind.ResourceGain,
        11.0,
        () => Localization.AchievementString(23, 0, "1e110"),
        () => this.data.source.totalCrystal,
        1e110,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e120,
        AchievementRewardKind.ResourceGain,
        12.0,
        () => Localization.AchievementString(23, 0, "1e120"),
        () => this.data.source.totalCrystal,
        1e120,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e130,
        AchievementRewardKind.ResourceGain,
        13.0,
        () => Localization.AchievementString(23, 0, "1e130"),
        () => this.data.source.totalCrystal,
        1e130,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e140,
        AchievementRewardKind.ResourceGain,
        14.0,
        () => Localization.AchievementString(23, 0, "1e140"),
        () => this.data.source.totalCrystal,
        1e140,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e150,
        AchievementRewardKind.ResourceGain,
        15.0,
        () => Localization.AchievementString(23, 0, "1e150"),
        () => this.data.source.totalCrystal,
        1e150,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e160,
        AchievementRewardKind.ResourceGain,
        16.0,
        () => Localization.AchievementString(23, 0, "1e160"),
        () => this.data.source.totalCrystal,
        1e160,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e170,
        AchievementRewardKind.ResourceGain,
        17.0,
        () => Localization.AchievementString(23, 0, "1e170"),
        () => this.data.source.totalCrystal,
        1e170,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e180,
        AchievementRewardKind.ResourceGain,
        18.0,
        () => Localization.AchievementString(23, 0, "1e180"),
        () => this.data.source.totalCrystal,
        1e180,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e190,
        AchievementRewardKind.ResourceGain,
        19.0,
        () => Localization.AchievementString(23, 0, "1e190"),
        () => this.data.source.totalCrystal,
        1e190,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e200,
        AchievementRewardKind.ResourceGain,
        20.0,
        () => Localization.AchievementString(23, 0, "1e200"),
        () => this.data.source.totalCrystal,
        1e200,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e210,
        AchievementRewardKind.ResourceGain,
        21.0,
        () => Localization.AchievementString(23, 0, "1e210"),
        () => this.data.source.totalCrystal,
        1e210,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e220,
        AchievementRewardKind.ResourceGain,
        22.0,
        () => Localization.AchievementString(23, 0, "1e220"),
        () => this.data.source.totalCrystal,
        1e220,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e230,
        AchievementRewardKind.ResourceGain,
        23.0,
        () => Localization.AchievementString(23, 0, "1e230"),
        () => this.data.source.totalCrystal,
        1e230,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e240,
        AchievementRewardKind.ResourceGain,
        24.0,
        () => Localization.AchievementString(23, 0, "1e240"),
        () => this.data.source.totalCrystal,
        1e240,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Crystal1e250,
        AchievementRewardKind.ResourceGain,
        25.0,
        () => Localization.AchievementString(23, 0, "1e250"),
        () => this.data.source.totalCrystal,
        1e250,
        true
      )
    );

    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e10,
        AchievementRewardKind.ResourceGain,
        1.0,
        () => Localization.AchievementString(24, 0, "1e10"),
        () => this.data.source.totalLeaf,
        10000000000.0,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e20,
        AchievementRewardKind.ResourceGain,
        2.0,
        () => Localization.AchievementString(24, 0, "1e20"),
        () => this.data.source.totalLeaf,
        1e20,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e30,
        AchievementRewardKind.ResourceGain,
        3.0,
        () => Localization.AchievementString(24, 0, "1e30"),
        () => this.data.source.totalLeaf,
        1e30,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e40,
        AchievementRewardKind.ResourceGain,
        4.0,
        () => Localization.AchievementString(24, 0, "1e40"),
        () => this.data.source.totalLeaf,
        1e40,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e50,
        AchievementRewardKind.ResourceGain,
        5.0,
        () => Localization.AchievementString(24, 0, "1e50"),
        () => this.data.source.totalLeaf,
        1e50,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e60,
        AchievementRewardKind.ResourceGain,
        6.0,
        () => Localization.AchievementString(24, 0, "1e60"),
        () => this.data.source.totalLeaf,
        1e60,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e70,
        AchievementRewardKind.ResourceGain,
        7.0,
        () => Localization.AchievementString(24, 0, "1e70"),
        () => this.data.source.totalLeaf,
        1e70,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e80,
        AchievementRewardKind.ResourceGain,
        8.0,
        () => Localization.AchievementString(24, 0, "1e80"),
        () => this.data.source.totalLeaf,
        1e80,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e90,
        AchievementRewardKind.ResourceGain,
        9.0,
        () => Localization.AchievementString(24, 0, "1e90"),
        () => this.data.source.totalLeaf,
        1e90,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e100,
        AchievementRewardKind.ResourceGain,
        10.0,
        () => Localization.AchievementString(24, 0, "1e100"),
        () => this.data.source.totalLeaf,
        1e100,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e110,
        AchievementRewardKind.ResourceGain,
        11.0,
        () => Localization.AchievementString(24, 0, "1e110"),
        () => this.data.source.totalLeaf,
        1e110,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e120,
        AchievementRewardKind.ResourceGain,
        12.0,
        () => Localization.AchievementString(24, 0, "1e120"),
        () => this.data.source.totalLeaf,
        1e120,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e130,
        AchievementRewardKind.ResourceGain,
        13.0,
        () => Localization.AchievementString(24, 0, "1e130"),
        () => this.data.source.totalLeaf,
        1e130,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e140,
        AchievementRewardKind.ResourceGain,
        14.0,
        () => Localization.AchievementString(24, 0, "1e140"),
        () => this.data.source.totalLeaf,
        1e140,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e150,
        AchievementRewardKind.ResourceGain,
        15.0,
        () => Localization.AchievementString(24, 0, "1e150"),
        () => this.data.source.totalLeaf,
        1e150,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e160,
        AchievementRewardKind.ResourceGain,
        16.0,
        () => Localization.AchievementString(24, 0, "1e160"),
        () => this.data.source.totalLeaf,
        1e160,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e170,
        AchievementRewardKind.ResourceGain,
        17.0,
        () => Localization.AchievementString(24, 0, "1e170"),
        () => this.data.source.totalLeaf,
        1e170,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e180,
        AchievementRewardKind.ResourceGain,
        18.0,
        () => Localization.AchievementString(24, 0, "1e180"),
        () => this.data.source.totalLeaf,
        1e180,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e190,
        AchievementRewardKind.ResourceGain,
        19.0,
        () => Localization.AchievementString(24, 0, "1e190"),
        () => this.data.source.totalLeaf,
        1e190,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e200,
        AchievementRewardKind.ResourceGain,
        20.0,
        () => Localization.AchievementString(24, 0, "1e200"),
        () => this.data.source.totalLeaf,
        1e200,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e210,
        AchievementRewardKind.ResourceGain,
        21.0,
        () => Localization.AchievementString(24, 0, "1e210"),
        () => this.data.source.totalLeaf,
        1e210,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e220,
        AchievementRewardKind.ResourceGain,
        22.0,
        () => Localization.AchievementString(24, 0, "1e220"),
        () => this.data.source.totalLeaf,
        1e220,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e230,
        AchievementRewardKind.ResourceGain,
        23.0,
        () => Localization.AchievementString(24, 0, "1e230"),
        () => this.data.source.totalLeaf,
        1e230,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e240,
        AchievementRewardKind.ResourceGain,
        24.0,
        () => Localization.AchievementString(24, 0, "1e240"),
        () => this.data.source.totalLeaf,
        1e240,
        true
      )
    );
    this.achievementListCurrency.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Leaf1e250,
        AchievementRewardKind.ResourceGain,
        25.0,
        () => Localization.AchievementString(24, 0, "1e250"),
        () => this.data.source.totalLeaf,
        1e250,
        true
      )
    );

    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv20, AchievementRewardKind.PortalOrb, 25.0, (() => Localization.AchievementString(25, 20.0)), (() => this.data.guild.MaxLevelReached()), 20.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv40, AchievementRewardKind.PortalOrb, 50.0, (() => Localization.AchievementString(25, 40.0)), (() => this.data.guild.MaxLevelReached()), 40.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv60, AchievementRewardKind.PortalOrb, 100.0, (() => Localization.AchievementString(25, 60.0)), (() => this.data.guild.MaxLevelReached()), 60.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv80, AchievementRewardKind.PortalOrb, 200.0, (() => Localization.AchievementString(25, 80.0)), (() => this.data.guild.MaxLevelReached()), 80.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv100, AchievementRewardKind.PortalOrb, 400.0, (() => Localization.AchievementString(25, 100.0)), (() => this.data.guild.MaxLevelReached()), 100.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv120, AchievementRewardKind.PortalOrb, 600.0, (() => Localization.AchievementString(25, 120.0)), (() => this.data.guild.MaxLevelReached()), 120.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv140, AchievementRewardKind.PortalOrb, 800.0, (() => Localization.AchievementString(25, 140.0)), (() => this.data.guild.MaxLevelReached()), 140.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv160, AchievementRewardKind.PortalOrb, 1000.0, (() => Localization.AchievementString(25, 160.0)), (() => this.data.guild.MaxLevelReached()), 160.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv180, AchievementRewardKind.PortalOrb, 2000.0, (() => Localization.AchievementString(25, 180.0)), (() => this.data.guild.MaxLevelReached()), 180.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv200, AchievementRewardKind.PortalOrb, 4000.0, (() => Localization.AchievementString(25, 200.0)), (() => this.data.guild.MaxLevelReached()), 200.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv220, AchievementRewardKind.PortalOrb, 8000.0, (() => Localization.AchievementString(25, 220.0)), (() => this.data.guild.MaxLevelReached()), 220.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv240, AchievementRewardKind.PortalOrb, 10000.0, (() => Localization.AchievementString(25, 240.0)), (() => this.data.guild.MaxLevelReached()), 240.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv260, AchievementRewardKind.PortalOrb, 20000.0, (() => Localization.AchievementString(25, 260.0)), (() => this.data.guild.MaxLevelReached()), 260.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv280, AchievementRewardKind.PortalOrb, 40000.0, (() => Localization.AchievementString(25, 280.0)), (() => this.data.guild.MaxLevelReached()), 280.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv300, AchievementRewardKind.PortalOrb, 80000.0, (() => Localization.AchievementString(25, 300.0)), (() => this.data.guild.MaxLevelReached()), 300.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv320, AchievementRewardKind.PortalOrb, 16000.0, (() => Localization.AchievementString(25, 320.0)), (() => this.data.guild.MaxLevelReached()), 320.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv340, AchievementRewardKind.PortalOrb, 32000.0, (() => Localization.AchievementString(25, 340.0)), (() => this.data.guild.MaxLevelReached()), 340.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv360, AchievementRewardKind.PortalOrb, 64000.0, (() => Localization.AchievementString(25, 360.0)), (() => this.data.guild.MaxLevelReached()), 360.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv380, AchievementRewardKind.PortalOrb, 128000.0, (() => Localization.AchievementString(25, 380.0)), (() => this.data.guild.MaxLevelReached()), 380.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv400, AchievementRewardKind.PortalOrb, 256000.0, (() => Localization.AchievementString(25, 400.0)), (() => this.data.guild.MaxLevelReached()), 400.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv420, AchievementRewardKind.PortalOrb, 512000.0, (() => Localization.AchievementString(25, 420.0)), (() => this.data.guild.MaxLevelReached()), 420.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv440, AchievementRewardKind.PortalOrb, 1024000.0, (() => Localization.AchievementString(25, 440.0)), (() => this.data.guild.MaxLevelReached()), 440.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv460, AchievementRewardKind.PortalOrb, 2048000.0, (() => Localization.AchievementString(25, 460.0)), (() => this.data.guild.MaxLevelReached()), 460.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv480, AchievementRewardKind.PortalOrb, 4096000.0, (() => Localization.AchievementString(25, 480.0)), (() => this.data.guild.MaxLevelReached()), 480.0));
    // this.achievementListGuild.push(GeneralAchievement.Generic(this.data,AchievementKind.GLv500, AchievementRewardKind.PortalOrb, 8192000.0, (() => Localization.AchievementString(25, 500.0)), (() => this.data.guild.MaxLevelReached()), 500.0));

    // this.achievementListChallenge.push(GeneralAchievement.Generic(this.data,AchievementKind.Florzporb, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(26, 0, this.data.monster.GlobalInformationChallengeBoss(ChallengeMonsterKind.Florzporb).ShortName())), (() => this.data.challenge.Challenge(ChallengeKind.RaidFlorzporb100).IsClearedOnce())));
    // this.achievementListChallenge.push(GeneralAchievement.Generic(this.data,AchievementKind.Arachnetta, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(26, 0, this.data.monster.GlobalInformationChallengeBoss(ChallengeMonsterKind.Arachnetta).ShortName())), (() => this.data.challenge.Challenge(ChallengeKind.RaidArachnetta150).IsClearedOnce())));
    // this.achievementListChallenge.push(GeneralAchievement.Generic(this.data,AchievementKind.GurdianKor, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(26, 0, this.data.monster.GlobalInformationChallengeBoss(ChallengeMonsterKind.GuardianKor).ShortName())), (() => this.data.challenge.Challenge(ChallengeKind.RaidGuardianKor200).IsClearedOnce())));
    // this.achievementListChallenge.push(GeneralAchievement.Generic(this.data,AchievementKind.Nostro, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(26, 0, this.data.monster.GlobalInformationChallengeBoss(ChallengeMonsterKind.Nostro).ShortName())), (() => this.data.challenge.Challenge(ChallengeKind.RaidNostro250).IsClearedOnce())));
    // this.achievementListChallenge.push(GeneralAchievement.Generic(this.data,AchievementKind.LadyEmelda, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(26, 0, this.data.monster.GlobalInformationChallengeBoss(ChallengeMonsterKind.LadyEmelda).ShortName())), (() => this.data.challenge.Challenge(ChallengeKind.RaidLadyEmelda300).IsClearedOnce())));
    // this.achievementListChallenge.push(GeneralAchievement.Generic(this.data,AchievementKind.NariSune, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(26, 0, this.data.monster.GlobalInformationChallengeBoss(ChallengeMonsterKind.NariSune).ShortName())), (() => this.data.challenge.Challenge(ChallengeKind.RaidNariSune350).IsClearedOnce())));
    // this.achievementListChallenge.push(GeneralAchievement.Generic(this.data,AchievementKind.Octobaddie, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(26, 0, this.data.monster.GlobalInformationChallengeBoss(ChallengeMonsterKind.Octobaddie).ShortName())), (() => this.data.challenge.Challenge(ChallengeKind.RaidOctobaddie400).IsClearedOnce())));
    // this.achievementListChallenge.push(GeneralAchievement.Generic(this.data,AchievementKind.Bananoon, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(26, 0, this.data.monster.GlobalInformationChallengeBoss(ChallengeMonsterKind.Bananoon).ShortName())), (() => false)));
    // this.achievementListChallenge.push(GeneralAchievement.Generic(this.data,AchievementKind.Glorbliorbus, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(26, 0, this.data.monster.GlobalInformationChallengeBoss(ChallengeMonsterKind.Glorbliorbus).ShortName())), (() => false)));
    // this.achievementListChallenge.push(GeneralAchievement.Generic(this.data,AchievementKind.Gankyu, AchievementRewardKind.EQInventorySlot, 1.0, (() => Localization.AchievementString(26, 0, this.data.monster.GlobalInformationChallengeBoss(ChallengeMonsterKind.DistortionSlime).ShortName())), (() => false)));

    this.achievementListAlchemy.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.PotionLv50,
        AchievementRewardKind.Essence,
        0.01,
        () => Localization.AchievementString(27, 50.0),
        () => this.data.potion.TotalPotionLevel(),
        50.0
      )
    );
    this.achievementListAlchemy.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.PotionLv250,
        AchievementRewardKind.Essence,
        0.02,
        () => Localization.AchievementString(27, 250.0),
        () => this.data.potion.TotalPotionLevel(),
        250.0
      )
    );
    this.achievementListAlchemy.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.PotionLv600,
        AchievementRewardKind.Essence,
        0.03,
        () => Localization.AchievementString(27, 600.0),
        () => this.data.potion.TotalPotionLevel(),
        600.0
      )
    );
    this.achievementListAlchemy.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.PotionLv1250,
        AchievementRewardKind.Essence,
        0.04,
        () => Localization.AchievementString(27, 1250.0),
        () => this.data.potion.TotalPotionLevel(),
        1250.0
      )
    );
    this.achievementListAlchemy.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.PotionLv2500,
        AchievementRewardKind.Essence,
        0.05,
        () => Localization.AchievementString(27, 2500.0),
        () => this.data.potion.TotalPotionLevel(),
        2500.0
      )
    );
    this.achievementListAlchemy.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.PotionLv3000,
        AchievementRewardKind.Essence,
        0.06,
        () => Localization.AchievementString(27, 3000.0),
        () => this.data.potion.TotalPotionLevel(),
        3000.0
      )
    );

    // this.achievementListAlchemy.push(GeneralAchievement.Generic(this.data,AchievementKind.AlchemyPoint1e5, AchievementRewardKind.UtilityInventorySlot, 1.0, (() => Localization.AchievementString(28, 0, "100K")), (() => this.data.source.totalAlchemyPointGained), 100000.0));
    // this.achievementListAlchemy.push(GeneralAchievement.Generic(this.data,AchievementKind.AlchemyPoint1e6, AchievementRewardKind.UtilityInventorySlot, 1.0, (() => Localization.AchievementString(28, 0, "1M")), (() => this.data.source.totalAlchemyPointGained), 1000000.0));
    // this.achievementListAlchemy.push(GeneralAchievement.Generic(this.data,AchievementKind.AlchemyPoint1e7, AchievementRewardKind.UtilityInventorySlot, 1.0, (() => Localization.AchievementString(28, 0, "10M")), (() => this.data.source.totalAlchemyPointGained), 10000000.0));
    // this.achievementListAlchemy.push(GeneralAchievement.Generic(this.data,AchievementKind.AlchemyPoint1e8, AchievementRewardKind.UtilityInventorySlot, 1.0, (() => Localization.AchievementString(28, 0, "100M")), (() => this.data.source.totalAlchemyPointGained), 100000000.0));
    // this.achievementListAlchemy.push(GeneralAchievement.Generic(this.data,AchievementKind.AlchemyPoint1e9, AchievementRewardKind.UtilityInventorySlot, 1.0, (() => Localization.AchievementString(28, 0, "1B")), (() => this.data.source.totalAlchemyPointGained), 1000000000.0));
    // this.achievementListAlchemy.push(GeneralAchievement.Generic(this.data,AchievementKind.AlchemyPoint1e10, AchievementRewardKind.UtilityInventorySlot, 1.0, (() => Localization.AchievementString(28, 0, "10B")), (() => this.data.source.totalAlchemyPointGained), 10000000000.0));
    this.achievementListAlchemy.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.AlchemyPoint1e11,
        AchievementRewardKind.GoldCap,
        0.05,
        () => Localization.AchievementString(28, 0, "100B"),
        () => this.data.source.totalAlchemyPointGained,
        100000000000.0
      )
    );
    this.achievementListAlchemy.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.AlchemyPoint1e12,
        AchievementRewardKind.GoldCap,
        0.1,
        () => Localization.AchievementString(28, 0, "1e12"),
        () => this.data.source.totalAlchemyPointGained,
        1000000000000.0
      )
    );
    this.achievementListAlchemy.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.AlchemyPoint1e13,
        AchievementRewardKind.GoldCap,
        0.15,
        () => Localization.AchievementString(28, 0, "1e13"),
        () => this.data.source.totalAlchemyPointGained,
        10000000000000.0
      )
    );
    this.achievementListAlchemy.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.AlchemyPoint1e14,
        AchievementRewardKind.GoldCap,
        0.2,
        () => Localization.AchievementString(28, 0, "1e14"),
        () => this.data.source.totalAlchemyPointGained,
        100000000000000.0
      )
    );
    this.achievementListAlchemy.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.AlchemyPoint1e15,
        AchievementRewardKind.GoldCap,
        0.25,
        () => Localization.AchievementString(28, 0, "1e15"),
        () => this.data.source.totalAlchemyPointGained,
        1e15
      )
    );
    this.achievementListAlchemy.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.AlchemyPoint1e16,
        AchievementRewardKind.GoldCap,
        0.3,
        () => Localization.AchievementString(28, 0, "1e16"),
        () => this.data.source.totalAlchemyPointGained,
        1e16
      )
    );
    this.achievementListAlchemy.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.AlchemyPoint1e17,
        AchievementRewardKind.GoldCap,
        0.35,
        () => Localization.AchievementString(28, 0, "1e17"),
        () => this.data.source.totalAlchemyPointGained,
        1e17
      )
    );

    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.EquipGain1e3,
        AchievementRewardKind.EquipmentDrop,
        0.01,
        () => Localization.AchievementString(29, 1000.0),
        () => this.data.source.totalEquipmentGained,
        1000.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.EquipGain1e4,
        AchievementRewardKind.EquipmentDrop,
        0.02,
        () => Localization.AchievementString(29, 10000.0),
        () => this.data.source.totalEquipmentGained,
        10000.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.EquipGain1e5,
        AchievementRewardKind.EquipmentDrop,
        0.03,
        () => Localization.AchievementString(29, 100000.0),
        () => this.data.source.totalEquipmentGained,
        100000.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.EquipGain1e6,
        AchievementRewardKind.EquipmentDrop,
        0.04,
        () => Localization.AchievementString(29, 1000000.0),
        () => this.data.source.totalEquipmentGained,
        1000000.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.EquipGain1e7,
        AchievementRewardKind.EquipmentDrop,
        0.05,
        () => Localization.AchievementString(29, 10000000.0),
        () => this.data.source.totalEquipmentGained,
        10000000.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.EquipGain1e8,
        AchievementRewardKind.EquipmentDrop,
        0.06,
        () => Localization.AchievementString(29, 100000000.0),
        () => this.data.source.totalEquipmentGained,
        100000000.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.EquipGain1e9,
        AchievementRewardKind.EquipmentDrop,
        0.07,
        () => Localization.AchievementString(29, 1000000000.0),
        () => this.data.source.totalEquipmentGained,
        1000000000.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.EquipGain1e10,
        AchievementRewardKind.EquipmentDrop,
        0.08,
        () => Localization.AchievementString(29, 10000000000.0),
        () => this.data.source.totalEquipmentGained,
        10000000000.0
      )
    );

    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Weapon8Warrior, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(30, 8.0, HeroKind[HeroKind.Warrior])), (() => this.data.inventory.equipWeaponUnlockedNum[0].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Weapon8Wizard, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(30, 8.0, HeroKind[HeroKind.Wizard])), (() => this.data.inventory.equipWeaponUnlockedNum[1].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Weapon8Angel, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(30, 8.0, HeroKind[HeroKind.Angel])), (() => this.data.inventory.equipWeaponUnlockedNum[2].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Weapon8Thief, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(30, 8.0, HeroKind[HeroKind.Thief])), (() => this.data.inventory.equipWeaponUnlockedNum[3].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Weapon8Archer, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(30, 8.0, HeroKind[HeroKind.Archer])), (() => this.data.inventory.equipWeaponUnlockedNum[4].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Weapon8Tamer, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(30, 8.0, HeroKind[HeroKind.Tamer])), (() => this.data.inventory.equipWeaponUnlockedNum[5].Value()), 8.0));
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Weapon16Warrior,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(30, 16.0, HeroKind[HeroKind.Warrior]),
        () => this.data.inventory.equipWeaponUnlockedNum[0].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Weapon16Wizard,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(30, 16.0, HeroKind[HeroKind.Wizard]),
        () => this.data.inventory.equipWeaponUnlockedNum[1].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Weapon16Angel,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(30, 16.0, HeroKind[HeroKind.Angel]),
        () => this.data.inventory.equipWeaponUnlockedNum[2].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Weapon16Thief,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(30, 16.0, HeroKind[HeroKind.Thief]),
        () => this.data.inventory.equipWeaponUnlockedNum[3].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Weapon16Archer,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(30, 16.0, HeroKind[HeroKind.Archer]),
        () => this.data.inventory.equipWeaponUnlockedNum[4].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Weapon16Tamer,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(30, 16.0, HeroKind[HeroKind.Tamer]),
        () => this.data.inventory.equipWeaponUnlockedNum[5].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Weapon24Warrior,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(30, 24.0, HeroKind[HeroKind.Warrior]),
        () => this.data.inventory.equipWeaponUnlockedNum[0].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Weapon24Wizard,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(30, 24.0, HeroKind[HeroKind.Wizard]),
        () => this.data.inventory.equipWeaponUnlockedNum[1].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Weapon24Angel,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(30, 24.0, HeroKind[HeroKind.Angel]),
        () => this.data.inventory.equipWeaponUnlockedNum[2].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Weapon24Thief,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(30, 24.0, HeroKind[HeroKind.Thief]),
        () => this.data.inventory.equipWeaponUnlockedNum[3].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Weapon24Archer,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(30, 24.0, HeroKind[HeroKind.Archer]),
        () => this.data.inventory.equipWeaponUnlockedNum[4].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Weapon24Tamer,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(30, 24.0, HeroKind[HeroKind.Tamer]),
        () => this.data.inventory.equipWeaponUnlockedNum[5].Value(),
        24.0
      )
    );

    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Armor8Warrior, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(31, 8.0, HeroKind[HeroKind.Warrior])), (() => this.data.inventory.equipArmorUnlockedNum[0].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Armor8Wizard, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(31, 8.0, HeroKind[HeroKind.Wizard])), (() => this.data.inventory.equipArmorUnlockedNum[1].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Armor8Angel, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(31, 8.0, HeroKind[HeroKind.Angel])), (() => this.data.inventory.equipArmorUnlockedNum[2].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Armor8Thief, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(31, 8.0, HeroKind[HeroKind.Thief])), (() => this.data.inventory.equipArmorUnlockedNum[3].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Armor8Archer, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(31, 8.0, HeroKind[HeroKind.Archer])), (() => this.data.inventory.equipArmorUnlockedNum[4].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Armor8Tamer, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(31, 8.0, HeroKind[HeroKind.Tamer])), (() => this.data.inventory.equipArmorUnlockedNum[5].Value()), 8.0));
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Armor16Warrior,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(31, 16.0, HeroKind[HeroKind.Warrior]),
        () => this.data.inventory.equipArmorUnlockedNum[0].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Armor16Wizard,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(31, 16.0, HeroKind[HeroKind.Wizard]),
        () => this.data.inventory.equipArmorUnlockedNum[1].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Armor16Angel,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(31, 16.0, HeroKind[HeroKind.Angel]),
        () => this.data.inventory.equipArmorUnlockedNum[2].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Armor16Thief,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(31, 16.0, HeroKind[HeroKind.Thief]),
        () => this.data.inventory.equipArmorUnlockedNum[3].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Armor16Archer,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(31, 16.0, HeroKind[HeroKind.Archer]),
        () => this.data.inventory.equipArmorUnlockedNum[4].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Armor16Tamer,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(31, 16.0, HeroKind[HeroKind.Tamer]),
        () => this.data.inventory.equipArmorUnlockedNum[5].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Armor24Warrior,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(31, 24.0, HeroKind[HeroKind.Warrior]),
        () => this.data.inventory.equipArmorUnlockedNum[0].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Armor24Wizard,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(31, 24.0, HeroKind[HeroKind.Wizard]),
        () => this.data.inventory.equipArmorUnlockedNum[1].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Armor24Angel,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(31, 24.0, HeroKind[HeroKind.Angel]),
        () => this.data.inventory.equipArmorUnlockedNum[2].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Armor24Thief,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(31, 24.0, HeroKind[HeroKind.Thief]),
        () => this.data.inventory.equipArmorUnlockedNum[3].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Armor24Archer,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(31, 24.0, HeroKind[HeroKind.Archer]),
        () => this.data.inventory.equipArmorUnlockedNum[4].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Armor24Tamer,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(31, 24.0, HeroKind[HeroKind.Tamer]),
        () => this.data.inventory.equipArmorUnlockedNum[5].Value(),
        24.0
      )
    );

    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Jewelry8Warrior, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(32, 8.0, HeroKind[HeroKind.Warrior])), (() => this.data.inventory.equipJewelryUnlockedNum[0].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Jewelry8Wizard, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(32, 8.0, HeroKind[HeroKind.Wizard])), (() => this.data.inventory.equipJewelryUnlockedNum[1].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Jewelry8Angel, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(32, 8.0, HeroKind[HeroKind.Angel])), (() => this.data.inventory.equipJewelryUnlockedNum[2].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Jewelry8Thief, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(32, 8.0, HeroKind[HeroKind.Thief])), (() => this.data.inventory.equipJewelryUnlockedNum[3].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Jewelry8Archer, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(32, 8.0, HeroKind[HeroKind.Archer])), (() => this.data.inventory.equipJewelryUnlockedNum[4].Value()), 8.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Jewelry8Tamer, AchievementRewardKind.EQInventorySlot, 3.0, (() => Localization.AchievementString(32, 8.0, HeroKind[HeroKind.Tamer])), (() => this.data.inventory.equipJewelryUnlockedNum[5].Value()), 8.0));
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Jewelry16Warrior,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(32, 16.0, HeroKind[HeroKind.Warrior]),
        () => this.data.inventory.equipJewelryUnlockedNum[0].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Jewelry16Wizard,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(32, 16.0, HeroKind[HeroKind.Wizard]),
        () => this.data.inventory.equipJewelryUnlockedNum[1].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Jewelry16Angel,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(32, 16.0, HeroKind[HeroKind.Angel]),
        () => this.data.inventory.equipJewelryUnlockedNum[2].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Jewelry16Thief,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(32, 16.0, HeroKind[HeroKind.Thief]),
        () => this.data.inventory.equipJewelryUnlockedNum[3].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Jewelry16Archer,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(32, 16.0, HeroKind[HeroKind.Archer]),
        () => this.data.inventory.equipJewelryUnlockedNum[4].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Jewelry16Tamer,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(32, 16.0, HeroKind[HeroKind.Tamer]),
        () => this.data.inventory.equipJewelryUnlockedNum[5].Value(),
        16.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Jewelry24Warrior,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(32, 24.0, HeroKind[HeroKind.Warrior]),
        () => this.data.inventory.equipJewelryUnlockedNum[0].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Jewelry24Wizard,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(32, 24.0, HeroKind[HeroKind.Wizard]),
        () => this.data.inventory.equipJewelryUnlockedNum[1].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Jewelry24Angel,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(32, 24.0, HeroKind[HeroKind.Angel]),
        () => this.data.inventory.equipJewelryUnlockedNum[2].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Jewelry24Thief,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(32, 24.0, HeroKind[HeroKind.Thief]),
        () => this.data.inventory.equipJewelryUnlockedNum[3].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Jewelry24Archer,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(32, 24.0, HeroKind[HeroKind.Archer]),
        () => this.data.inventory.equipJewelryUnlockedNum[4].Value(),
        24.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Jewelry24Tamer,
        AchievementRewardKind.ArtifactProficiency,
        0.1,
        () => Localization.AchievementString(32, 24.0, HeroKind[HeroKind.Tamer]),
        () => this.data.inventory.equipJewelryUnlockedNum[5].Value(),
        24.0
      )
    );

    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Utility2Warrior, AchievementRewardKind.UtilityInventorySlot, 1.0, (() => Localization.AchievementString(33, 2.0, HeroKind[HeroKind.Warrior])), (() => this.data.inventory.equipPotionUnlockedNum[0].Value()), 2.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Utility2Wizard, AchievementRewardKind.UtilityInventorySlot, 1.0, (() => Localization.AchievementString(33, 2.0, HeroKind[HeroKind.Wizard])), (() => this.data.inventory.equipPotionUnlockedNum[1].Value()), 2.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Utility2Angel, AchievementRewardKind.UtilityInventorySlot, 1.0, (() => Localization.AchievementString(33, 2.0, HeroKind[HeroKind.Angel])), (() => this.data.inventory.equipPotionUnlockedNum[2].Value()), 2.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Utility2Thief, AchievementRewardKind.UtilityInventorySlot, 1.0, (() => Localization.AchievementString(33, 2.0, HeroKind[HeroKind.Thief])), (() => this.data.inventory.equipPotionUnlockedNum[3].Value()), 2.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Utility2Archer, AchievementRewardKind.UtilityInventorySlot, 1.0, (() => Localization.AchievementString(33, 2.0, HeroKind[HeroKind.Archer])), (() => this.data.inventory.equipPotionUnlockedNum[4].Value()), 2.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Utility2Tamer, AchievementRewardKind.UtilityInventorySlot, 1.0, (() => Localization.AchievementString(33, 2.0, HeroKind[HeroKind.Tamer])), (() => this.data.inventory.equipPotionUnlockedNum[5].Value()), 2.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Utility4Warrior, AchievementRewardKind.UtilityInventorySlot, 2.0, (() => Localization.AchievementString(33, 4.0, HeroKind[HeroKind.Warrior])), (() => this.data.inventory.equipPotionUnlockedNum[0].Value()), 4.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Utility4Wizard, AchievementRewardKind.UtilityInventorySlot, 2.0, (() => Localization.AchievementString(33, 4.0, HeroKind[HeroKind.Wizard])), (() => this.data.inventory.equipPotionUnlockedNum[1].Value()), 4.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Utility4Angel, AchievementRewardKind.UtilityInventorySlot, 2.0, (() => Localization.AchievementString(33, 4.0, HeroKind[HeroKind.Angel])), (() => this.data.inventory.equipPotionUnlockedNum[2].Value()), 4.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Utility4Thief, AchievementRewardKind.UtilityInventorySlot, 2.0, (() => Localization.AchievementString(33, 4.0, HeroKind[HeroKind.Thief])), (() => this.data.inventory.equipPotionUnlockedNum[3].Value()), 4.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Utility4Archer, AchievementRewardKind.UtilityInventorySlot, 2.0, (() => Localization.AchievementString(33, 4.0, HeroKind[HeroKind.Archer])), (() => this.data.inventory.equipPotionUnlockedNum[4].Value()), 4.0));
    // this.achievementListEquip.push(GeneralAchievement.Generic(this.data,AchievementKind.Utility4Tamer, AchievementRewardKind.UtilityInventorySlot, 2.0, (() => Localization.AchievementString(33, 4.0, HeroKind[HeroKind.Tamer])), (() => this.data.inventory.equipPotionUnlockedNum[5].Value()), 4.0));
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Utility6Warrior,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(33, 6.0, HeroKind[HeroKind.Warrior]),
        () => this.data.inventory.equipPotionUnlockedNum[0].Value(),
        6.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Utility6Wizard,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(33, 6.0, HeroKind[HeroKind.Wizard]),
        () => this.data.inventory.equipPotionUnlockedNum[1].Value(),
        6.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Utility6Angel,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(33, 6.0, HeroKind[HeroKind.Angel]),
        () => this.data.inventory.equipPotionUnlockedNum[2].Value(),
        6.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Utility6Thief,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(33, 6.0, HeroKind[HeroKind.Thief]),
        () => this.data.inventory.equipPotionUnlockedNum[3].Value(),
        6.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Utility6Archer,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(33, 6.0, HeroKind[HeroKind.Archer]),
        () => this.data.inventory.equipPotionUnlockedNum[4].Value(),
        6.0
      )
    );
    this.achievementListEquip.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Utility6Tamer,
        AchievementRewardKind.EquipmentProficiency,
        0.1,
        () => Localization.AchievementString(33, 6.0, HeroKind[HeroKind.Tamer]),
        () => this.data.inventory.equipPotionUnlockedNum[5].Value(),
        6.0
      )
    );

    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.ClassSkill8Warrior,
        AchievementRewardKind.SkillProficiency,
        0.2,
        () => Localization.AchievementString(34, 8.0, HeroKind[HeroKind.Warrior]),
        () => this.data.stats.SkillSlotNum(HeroKind.Warrior).Value(),
        8.0
      )
    );
    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.ClassSkill8Wizard,
        AchievementRewardKind.SkillProficiency,
        0.2,
        () => Localization.AchievementString(34, 8.0, HeroKind[HeroKind.Wizard]),
        () => this.data.stats.SkillSlotNum(HeroKind.Wizard).Value(),
        8.0
      )
    );
    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.ClassSkill8Angel,
        AchievementRewardKind.SkillProficiency,
        0.2,
        () => Localization.AchievementString(34, 8.0, HeroKind[HeroKind.Angel]),
        () => this.data.stats.SkillSlotNum(HeroKind.Angel).Value(),
        8.0
      )
    );
    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.ClassSkill8Thief,
        AchievementRewardKind.SkillProficiency,
        0.2,
        () => Localization.AchievementString(34, 8.0, HeroKind[HeroKind.Thief]),
        () => this.data.stats.SkillSlotNum(HeroKind.Thief).Value(),
        8.0
      )
    );
    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.ClassSkill8Archer,
        AchievementRewardKind.SkillProficiency,
        0.2,
        () => Localization.AchievementString(34, 8.0, HeroKind[HeroKind.Archer]),
        () => this.data.stats.SkillSlotNum(HeroKind.Archer).Value(),
        8.0
      )
    );
    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.ClassSkill8Tamer,
        AchievementRewardKind.SkillProficiency,
        0.2,
        () => Localization.AchievementString(34, 8.0, HeroKind[HeroKind.Tamer]),
        () => this.data.stats.SkillSlotNum(HeroKind.Tamer).Value(),
        8.0
      )
    );
    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.GlobalSkill8,
        AchievementRewardKind.SkillProficiency,
        0.5,
        () => Localization.AchievementString(35),
        () => this.data.stats.globalSkillSlotNum.Value(),
        8.0
      )
    );

    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Skill1e4,
        AchievementRewardKind.SkillProficiency,
        0.05,
        () => Localization.AchievementString(44, 10000.0),
        () => this.data.skill.TotalTriggeredNum(),
        10000.0
      )
    );
    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Skill1e5,
        AchievementRewardKind.SkillProficiency,
        0.1,
        () => Localization.AchievementString(44, 100000.0),
        () => this.data.skill.TotalTriggeredNum(),
        100000.0
      )
    );
    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Skill1e6,
        AchievementRewardKind.SkillProficiency,
        0.15,
        () => Localization.AchievementString(44, 1000000.0),
        () => this.data.skill.TotalTriggeredNum(),
        1000000.0
      )
    );
    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Skill1e7,
        AchievementRewardKind.SkillProficiency,
        0.2,
        () => Localization.AchievementString(44, 10000000.0),
        () => this.data.skill.TotalTriggeredNum(),
        10000000.0
      )
    );
    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Skill1e8,
        AchievementRewardKind.SkillProficiency,
        0.25,
        () => Localization.AchievementString(44, 100000000.0),
        () => this.data.skill.TotalTriggeredNum(),
        100000000.0
      )
    );
    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Skill1e9,
        AchievementRewardKind.SkillProficiency,
        0.3,
        () => Localization.AchievementString(44, 1000000000.0),
        () => this.data.skill.TotalTriggeredNum(),
        1000000000.0
      )
    );
    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Skill1e10,
        AchievementRewardKind.SkillProficiency,
        0.35,
        () => Localization.AchievementString(44, 10000000000.0),
        () => this.data.skill.TotalTriggeredNum(),
        10000000000.0
      )
    );
    this.achievementListSkill.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Skill1e11,
        AchievementRewardKind.SkillProficiency,
        0.4,
        () => Localization.AchievementString(44, 100000000000.0),
        () => this.data.skill.TotalTriggeredNum(),
        100000000000.0
      )
    );

    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth1Warrior, AchievementRewardKind.PortalOrb, 3.0, (() => Localization.AchievementString(36, 1.0, HeroKind[HeroKind.Warrior])), (() => this.data.rebirth.Rebirth(HeroKind.Warrior, 0).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth1Wizard, AchievementRewardKind.PortalOrb, 3.0, (() => Localization.AchievementString(36, 1.0, HeroKind[HeroKind.Wizard])), (() => this.data.rebirth.Rebirth(HeroKind.Wizard, 0).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth1Angel, AchievementRewardKind.PortalOrb, 3.0, (() => Localization.AchievementString(36, 1.0, HeroKind[HeroKind.Angel])), (() => this.data.rebirth.Rebirth(HeroKind.Angel, 0).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth1Thief, AchievementRewardKind.PortalOrb, 3.0, (() => Localization.AchievementString(36, 1.0, HeroKind[HeroKind.Thief])), (() => this.data.rebirth.Rebirth(HeroKind.Thief, 0).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth1Archer, AchievementRewardKind.PortalOrb, 3.0, (() => Localization.AchievementString(36, 1.0, HeroKind[HeroKind.Archer])), (() => this.data.rebirth.Rebirth(HeroKind.Archer, 0).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth1Tamer, AchievementRewardKind.PortalOrb, 3.0, (() => Localization.AchievementString(36, 1.0, HeroKind[HeroKind.Tamer])), (() => this.data.rebirth.Rebirth(HeroKind.Tamer, 0).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth2Warrior, AchievementRewardKind.PortalOrb, 10.0, (() => Localization.AchievementString(36, 2.0, HeroKind[HeroKind.Warrior])), (() => this.data.rebirth.Rebirth(HeroKind.Warrior, 1).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth2Wizard, AchievementRewardKind.PortalOrb, 10.0, (() => Localization.AchievementString(36, 2.0, HeroKind[HeroKind.Wizard])), (() => this.data.rebirth.Rebirth(HeroKind.Wizard, 1).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth2Angel, AchievementRewardKind.PortalOrb, 10.0, (() => Localization.AchievementString(36, 2.0, HeroKind[HeroKind.Angel])), (() => this.data.rebirth.Rebirth(HeroKind.Angel, 1).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth2Thief, AchievementRewardKind.PortalOrb, 10.0, (() => Localization.AchievementString(36, 2.0, HeroKind[HeroKind.Thief])), (() => this.data.rebirth.Rebirth(HeroKind.Thief, 1).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth2Archer, AchievementRewardKind.PortalOrb, 10.0, (() => Localization.AchievementString(36, 2.0, HeroKind[HeroKind.Archer])), (() => this.data.rebirth.Rebirth(HeroKind.Archer, 1).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth2Tamer, AchievementRewardKind.PortalOrb, 10.0, (() => Localization.AchievementString(36, 2.0, HeroKind[HeroKind.Tamer])), (() => this.data.rebirth.Rebirth(HeroKind.Tamer, 1).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth3Warrior, AchievementRewardKind.PortalOrb, 100.0, (() => Localization.AchievementString(36, 3.0, HeroKind[HeroKind.Warrior])), (() => this.data.rebirth.Rebirth(HeroKind.Warrior, 2).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth3Wizard, AchievementRewardKind.PortalOrb, 100.0, (() => Localization.AchievementString(36, 3.0, HeroKind[HeroKind.Wizard])), (() => this.data.rebirth.Rebirth(HeroKind.Wizard, 2).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth3Angel, AchievementRewardKind.PortalOrb, 100.0, (() => Localization.AchievementString(36, 3.0, HeroKind[HeroKind.Angel])), (() => this.data.rebirth.Rebirth(HeroKind.Angel, 2).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth3Thief, AchievementRewardKind.PortalOrb, 100.0, (() => Localization.AchievementString(36, 3.0, HeroKind[HeroKind.Thief])), (() => this.data.rebirth.Rebirth(HeroKind.Thief, 2).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth3Archer, AchievementRewardKind.PortalOrb, 100.0, (() => Localization.AchievementString(36, 3.0, HeroKind[HeroKind.Archer])), (() => this.data.rebirth.Rebirth(HeroKind.Archer, 2).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth3Tamer, AchievementRewardKind.PortalOrb, 100.0, (() => Localization.AchievementString(36, 3.0, HeroKind[HeroKind.Tamer])), (() => this.data.rebirth.Rebirth(HeroKind.Tamer, 2).totalRebirthNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth4Warrior, AchievementRewardKind.PortalOrb, 10000.0, (() => Localization.AchievementString(36, 4.0, HeroKind[HeroKind.Warrior])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth4Wizard, AchievementRewardKind.PortalOrb, 10000.0, (() => Localization.AchievementString(36, 4.0, HeroKind[HeroKind.Wizard])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth4Angel, AchievementRewardKind.PortalOrb, 10000.0, (() => Localization.AchievementString(36, 4.0, HeroKind[HeroKind.Angel])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth4Thief, AchievementRewardKind.PortalOrb, 10000.0, (() => Localization.AchievementString(36, 4.0, HeroKind[HeroKind.Thief])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth4Archer, AchievementRewardKind.PortalOrb, 10000.0, (() => Localization.AchievementString(36, 4.0, HeroKind[HeroKind.Archer])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth4Tamer, AchievementRewardKind.PortalOrb, 10000.0, (() => Localization.AchievementString(36, 4.0, HeroKind[HeroKind.Tamer])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth5Warrior, AchievementRewardKind.PortalOrb, 1000000.0, (() => Localization.AchievementString(36, 5.0, HeroKind[HeroKind.Warrior])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth5Wizard, AchievementRewardKind.PortalOrb, 1000000.0, (() => Localization.AchievementString(36, 5.0, HeroKind[HeroKind.Wizard])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth5Angel, AchievementRewardKind.PortalOrb, 1000000.0, (() => Localization.AchievementString(36, 5.0, HeroKind[HeroKind.Angel])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth5Thief, AchievementRewardKind.PortalOrb, 1000000.0, (() => Localization.AchievementString(36, 5.0, HeroKind[HeroKind.Thief])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth5Archer, AchievementRewardKind.PortalOrb, 1000000.0, (() => Localization.AchievementString(36, 5.0, HeroKind[HeroKind.Archer])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth5Tamer, AchievementRewardKind.PortalOrb, 1000000.0, (() => Localization.AchievementString(36, 5.0, HeroKind[HeroKind.Tamer])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth6Warrior, AchievementRewardKind.PortalOrb, 100000000.0, (() => Localization.AchievementString(36, 6.0, HeroKind[HeroKind.Warrior])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth6Wizard, AchievementRewardKind.PortalOrb, 100000000.0, (() => Localization.AchievementString(36, 6.0, HeroKind[HeroKind.Wizard])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth6Angel, AchievementRewardKind.PortalOrb, 100000000.0, (() => Localization.AchievementString(36, 6.0, HeroKind[HeroKind.Angel])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth6Thief, AchievementRewardKind.PortalOrb, 100000000.0, (() => Localization.AchievementString(36, 6.0, HeroKind[HeroKind.Thief])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth6Archer, AchievementRewardKind.PortalOrb, 100000000.0, (() => Localization.AchievementString(36, 6.0, HeroKind[HeroKind.Archer])), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Rebirth6Tamer, AchievementRewardKind.PortalOrb, 100000000.0, (() => Localization.AchievementString(36, 6.0, HeroKind[HeroKind.Tamer])), (() => false)));

    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Ascension1, AchievementRewardKind.Nitro, 5000.0, (() => Localization.AchievementString(37, 1.0)), (() => this.data.ascension.worldAscensions[0].performedNum), 1.0));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Ascension2, AchievementRewardKind.Nitro, 100000.0, (() => Localization.AchievementString(37, 2.0)), (() => false)));
    // this.achievementListRebirth.push(GeneralAchievement.Generic(this.data,AchievementKind.Ascension3, AchievementRewardKind.Nitro, 1500000.0, (() => Localization.AchievementString(37, 3.0)), (() => false)));

    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime1day,
        AchievementRewardKind.ExpGain,
        0.01,
        () => Localization.AchievementString(38, 1.0),
        () => this.data.source.allTime,
        86400.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime2day,
        AchievementRewardKind.ExpGain,
        0.02,
        () => Localization.AchievementString(38, 2.0),
        () => this.data.source.allTime,
        172800.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime3day,
        AchievementRewardKind.ExpGain,
        0.03,
        () => Localization.AchievementString(38, 3.0),
        () => this.data.source.allTime,
        259200.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime4day,
        AchievementRewardKind.ExpGain,
        0.04,
        () => Localization.AchievementString(38, 4.0),
        () => this.data.source.allTime,
        345600.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime5day,
        AchievementRewardKind.ExpGain,
        0.05,
        () => Localization.AchievementString(38, 5.0),
        () => this.data.source.allTime,
        432000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime1week,
        AchievementRewardKind.ExpGain,
        0.06,
        () => Localization.AchievementString(39, 1.0),
        () => this.data.source.allTime,
        604800.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime2week,
        AchievementRewardKind.ExpGain,
        0.07,
        () => Localization.AchievementString(39, 2.0),
        () => this.data.source.allTime,
        1209600.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime3week,
        AchievementRewardKind.ExpGain,
        0.08,
        () => Localization.AchievementString(39, 3.0),
        () => this.data.source.allTime,
        1814400.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime1month,
        AchievementRewardKind.ExpGain,
        0.1,
        () => Localization.AchievementString(40, 1.0),
        () => this.data.source.allTime,
        2592000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime2month,
        AchievementRewardKind.ExpGain,
        0.15,
        () => Localization.AchievementString(40, 2.0),
        () => this.data.source.allTime,
        5184000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime3month,
        AchievementRewardKind.ExpGain,
        0.2,
        () => Localization.AchievementString(40, 3.0),
        () => this.data.source.allTime,
        7776000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime4month,
        AchievementRewardKind.ExpGain,
        0.25,
        () => Localization.AchievementString(40, 4.0),
        () => this.data.source.allTime,
        10368000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime5month,
        AchievementRewardKind.ExpGain,
        0.3,
        () => Localization.AchievementString(40, 5.0),
        () => this.data.source.allTime,
        12960000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime6month,
        AchievementRewardKind.ExpGain,
        0.35,
        () => Localization.AchievementString(40, 6.0),
        () => this.data.source.allTime,
        15552000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime7month,
        AchievementRewardKind.ExpGain,
        0.4,
        () => Localization.AchievementString(40, 7.0),
        () => this.data.source.allTime,
        18144000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime8month,
        AchievementRewardKind.ExpGain,
        0.45,
        () => Localization.AchievementString(40, 8.0),
        () => this.data.source.allTime,
        20736000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime9month,
        AchievementRewardKind.ExpGain,
        0.5,
        () => Localization.AchievementString(40, 9.0),
        () => this.data.source.allTime,
        23328000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime10month,
        AchievementRewardKind.ExpGain,
        0.55,
        () => Localization.AchievementString(40, 10.0),
        () => this.data.source.allTime,
        25920000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime11month,
        AchievementRewardKind.ExpGain,
        0.6,
        () => Localization.AchievementString(40, 11.0),
        () => this.data.source.allTime,
        28512000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime1year,
        AchievementRewardKind.ExpGain,
        1.0,
        () => Localization.AchievementString(41, 1.0),
        () => this.data.source.allTime,
        31536000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime2year,
        AchievementRewardKind.ExpGain,
        1.5,
        () => Localization.AchievementString(41, 2.0),
        () => this.data.source.allTime,
        63072000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime3year,
        AchievementRewardKind.ExpGain,
        2.0,
        () => Localization.AchievementString(41, 3.0),
        () => this.data.source.allTime,
        94608000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime4year,
        AchievementRewardKind.ExpGain,
        2.5,
        () => Localization.AchievementString(41, 4.0),
        () => this.data.source.allTime,
        126144000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime5year,
        AchievementRewardKind.ExpGain,
        3.0,
        () => Localization.AchievementString(41, 5.0),
        () => this.data.source.allTime,
        157680000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime10year,
        AchievementRewardKind.ExpGain,
        5.0,
        () => Localization.AchievementString(41, 10.0),
        () => this.data.source.allTime,
        315360000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime15year,
        AchievementRewardKind.ExpGain,
        7.5,
        () => Localization.AchievementString(41, 15.0),
        () => this.data.source.allTime,
        473040000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime20year,
        AchievementRewardKind.ExpGain,
        10.0,
        () => Localization.AchievementString(41, 20.0),
        () => this.data.source.allTime,
        630720000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime25year,
        AchievementRewardKind.ExpGain,
        12.5,
        () => Localization.AchievementString(41, 25.0),
        () => this.data.source.allTime,
        788400000.0
      )
    );
    this.achievementListPlaytime.push(
      GeneralAchievement.Generic(
        this.data,
        AchievementKind.Playtime30year,
        AchievementRewardKind.ExpGain,
        15.0,
        () => Localization.AchievementString(41, 30.0),
        () => this.data.source.allTime,
        946080000.0
      )
    );

    this.achievementList = [
      ...this.achievementListAlchemy,
      ...this.achievementListArea,
      ...this.achievementListChallenge,
      ...this.achievementListCurrency,
      ...this.achievementListEquip,
      ...this.achievementListGeneral,
      ...this.achievementListGuild,
      ...this.achievementListNumber,
      ...this.achievementListPlaytime,
      ...this.achievementListRebirth,
      ...this.achievementListSkill,
    ];
  }

  Start() {
    this.SetAchievement();
    for (let index = 0; index < this.achievementList.length; index++) this.achievementList[index].Start();
    this.data.stats.GoldGain().RegisterMultiplier(new MultiplierInfo(MultiplierKind.Achievement, MultiplierType.Mul, () => this.GoldGainBonus()));
  }

  GoldGainBonus() {
    return this.TotalClearNum() * 0.01;
  }

  Achievement(kind: AchievementKind) {
    for (let index = 0; index < this.achievementList.length; index++) {
      if (this.achievementList[index].kind == kind) return this.achievementList[index];
    }
    return this.achievementList[0];
  }

  IsAchievedAnyHeroRebirth(tier) {
    switch (tier) {
      case 0:
        return (
          this.Achievement(AchievementKind.Rebirth1Warrior).isCleared ||
          this.Achievement(AchievementKind.Rebirth1Wizard).isCleared ||
          this.Achievement(AchievementKind.Rebirth1Angel).isCleared ||
          this.Achievement(AchievementKind.Rebirth1Thief).isCleared ||
          this.Achievement(AchievementKind.Rebirth1Archer).isCleared ||
          this.Achievement(AchievementKind.Rebirth1Tamer).isCleared
        );
      case 1:
        return (
          this.Achievement(AchievementKind.Rebirth2Warrior).isCleared ||
          this.Achievement(AchievementKind.Rebirth2Wizard).isCleared ||
          this.Achievement(AchievementKind.Rebirth2Angel).isCleared ||
          this.Achievement(AchievementKind.Rebirth2Thief).isCleared ||
          this.Achievement(AchievementKind.Rebirth2Archer).isCleared ||
          this.Achievement(AchievementKind.Rebirth2Tamer).isCleared
        );
      case 2:
        return (
          this.Achievement(AchievementKind.Rebirth3Warrior).isCleared ||
          this.Achievement(AchievementKind.Rebirth3Wizard).isCleared ||
          this.Achievement(AchievementKind.Rebirth3Angel).isCleared ||
          this.Achievement(AchievementKind.Rebirth3Thief).isCleared ||
          this.Achievement(AchievementKind.Rebirth3Archer).isCleared ||
          this.Achievement(AchievementKind.Rebirth3Tamer).isCleared
        );
      case 3:
        return (
          this.Achievement(AchievementKind.Rebirth4Warrior).isCleared ||
          this.Achievement(AchievementKind.Rebirth4Wizard).isCleared ||
          this.Achievement(AchievementKind.Rebirth4Angel).isCleared ||
          this.Achievement(AchievementKind.Rebirth4Thief).isCleared ||
          this.Achievement(AchievementKind.Rebirth4Archer).isCleared ||
          this.Achievement(AchievementKind.Rebirth4Tamer).isCleared
        );
      case 4:
        return (
          this.Achievement(AchievementKind.Rebirth5Warrior).isCleared ||
          this.Achievement(AchievementKind.Rebirth5Wizard).isCleared ||
          this.Achievement(AchievementKind.Rebirth5Angel).isCleared ||
          this.Achievement(AchievementKind.Rebirth5Thief).isCleared ||
          this.Achievement(AchievementKind.Rebirth5Archer).isCleared ||
          this.Achievement(AchievementKind.Rebirth5Tamer).isCleared
        );
      case 5:
        return (
          this.Achievement(AchievementKind.Rebirth6Warrior).isCleared ||
          this.Achievement(AchievementKind.Rebirth6Wizard).isCleared ||
          this.Achievement(AchievementKind.Rebirth6Angel).isCleared ||
          this.Achievement(AchievementKind.Rebirth6Thief).isCleared ||
          this.Achievement(AchievementKind.Rebirth6Archer).isCleared ||
          this.Achievement(AchievementKind.Rebirth6Tamer).isCleared
        );
      default:
        return false;
    }
  }

  TotalClearNum() {
    let num = 0;
    for (let index = 0; index < this.achievementList.length; index++) {
      if (this.achievementList[index].isCleared) num++;
    }
    return num;
  }

  CheckAchieve() {
    for (let index = 0; index < this.achievementList.length; index++) this.achievementList[index].CheckAchieve();
  }

  CanClaimReward() {
    for (let index = 0; index < this.achievementList.length; index++) {
      if (this.achievementList[index].CanClaimRewad()) return true;
    }
    return false;
  }

  ClaimReward() {
    for (let index = 0; index < this.achievementList.length; index++) this.achievementList[index].ClaimReward();
  }
}
