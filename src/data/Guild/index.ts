import { GuildAbilityKind } from "../../type/GuildAbilityKind";
import { HeroKind } from "../../type/HeroKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { Multiplier, MultiplierInfo } from "../Multiplier";
import { GuildParameter } from "./GuildParameter";

export class DataGuild {
  guildLevelCap: Multiplier;
  timecountSec;
  activableNum: Multiplier;
  level;
  exp;
  expRequirementReduction: Multiplier;
  members; //= new GuildMember[Enums.HeroKind)];
  abilityPointLeft;
  abilities; //= new GuildAbility[Enums.GuildAbilityKind)];
  superAbilityList = [];
  grade;
  fame;
  superAbilityPointLeft;
  //   accomplishGuildLevels = new AccomplishGuildLevel[GuildParameter.maxGuildLevelCap + 1];

  constructor() {
    this.expRequirementReduction = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
      () => 0.99,
      () => 0.0
    );
    this.guildLevelCap = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => GuildParameter.maxGuildLevel));
    this.activableNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 3.0));

    //TODO super guild ability
    // this.level = new GuildLevel((Func<long>) (() => this.guildLevelCap.Value()));
    // this.exp = new GuildExp(new Func<long, double>(this.RequiredExp), this.level);
    // for (let index = 0; index < this.members.length; index++)
    //   this.members[index] = new GuildMember(this, index);
    // this.abilityPointLeft = new GuildAbilityPointLeft();
    // for (let kind = 0; kind < this.abilities.length; kind++)
    //   this.abilities[kind] = new GuildAbility(this, (GuildAbilityKind) kind, this.abilityPointLeft);
    // this.superAbilityList.Add((GuildSuperAbility) new GSA_SuperMining(this));
    // this.superAbilityList.Add((GuildSuperAbility) new GSA_SuperSynthesizing(this));
    // this.superAbilityList.Add((GuildSuperAbility) new GSA_SuperGathering(this));
    // this.superAbilityList.Add((GuildSuperAbility) new GSA_SuperTraining(this));
    // this.superAbilityList.Add((GuildSuperAbility) new GSA_SuperTrapping(this));
    // this.superAbilityList.Add((GuildSuperAbility) new GSA_SuperBanking(this));
    // this.superAbilityList.Add((GuildSuperAbility) new GSA_SuperFinancing(this));
    // this.superAbilityList.Add((GuildSuperAbility) new GSA_Finding(this));
    // this.superAbilityList.Add((GuildSuperAbility) new GSA_Racing(this));
    // this.superAbilityList.Add((GuildSuperAbility) new GSA_Socializing(this));
    // this.superAbilityList.Add((GuildSuperAbility) new GSA_Haggling(this));
    // this.superAbilityList.Add((GuildSuperAbility) new GSA_Ritualizing(this));
    // this.superAbilityList.Add((GuildSuperAbility) new GSA_Artificing(this));
    // for (int guildLevel = 0; guildLevel < this.accomplishGuildLevels.length; guildLevel++)
    //   this.accomplishGuildLevels[guildLevel] = new AccomplishGuildLevel(guildLevel);
    // this.grade = new GuildGrade((Func<long>) (() => GuildParameter.maxGuildLevel));
    // this.fame = new GuildFame(new Func<long, double>(this.RequiredFame), this.grade);
    // this.fame.isTrackGain = true;
    // this.superAbilityPointLeft = new GuildSuperAbilityPointLeft();
  }

  Start() {
    // for (let index = 0; index < this.abilities.length; index++)
    //   this.abilities[index].Start();
    // for (let index = 0; index < this.superAbilityList.Count; index++)
    //   this.superAbilityList[index].Start();
  }

  Member(kind: HeroKind) {
    return this.members[kind];
  }

  Ability(kind: GuildAbilityKind) {
    this.abilities[kind];
  }

  Level() {
    return this.level;
  }

  MaxLevelReached() {
    return globalThis.data;
  }

  RequiredExp(level = 0) {
    if (level == 0) return this.RequiredExp(this.Level());
    return GuildParameter.RequiredExp(level) * (1.0 - this.expRequirementReduction.Value());
  }

  RequiredFame(grade = 0) {
    if (grade == 0) return this.RequiredFame(this.grade);
    return GuildParameter.RequiredExp(grade);
  }
}
