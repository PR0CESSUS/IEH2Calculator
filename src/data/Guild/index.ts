import { Enums } from "@/Enums";
import { DATA } from "..";
import { GuildAbilityKind } from "../../type/GuildAbilityKind";
import { HeroKind } from "../../type/HeroKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { Multiplier, MultiplierInfo } from "../Multiplier";
import { GSA_Artificing } from "./GSA/GSA_Artificing";
import { GSA_Finding } from "./GSA/GSA_Finding";
import { GSA_Haggling } from "./GSA/GSA_Haggling";
import { GSA_Racing } from "./GSA/GSA_Racing";
import { GSA_Ritualizing } from "./GSA/GSA_Ritualizing";
import { GSA_Socializing } from "./GSA/GSA_Socializing";
import { GSA_SuperBanking } from "./GSA/GSA_SuperBanking";
import { GSA_SuperFinancing } from "./GSA/GSA_SuperFinancing";
import { GSA_SuperGathering } from "./GSA/GSA_SuperGathering";
import { GSA_SuperMining } from "./GSA/GSA_SuperMining";
import { GSA_SuperSynthesizing } from "./GSA/GSA_SuperSynthesizing";
import { GSA_SuperTraining } from "./GSA/GSA_SuperTraining";
import { GSA_SuperTrapping } from "./GSA/GSA_SuperTrapping";
import { GuildAbility } from "./GuildAbility";
import { GuildParameter } from "./GuildParameter";
import { GuildSuperAbility } from "./GuildSuperAbility";

export class DataGuild {
  data: DATA;
  guildLevelCap: Multiplier;
  timecountSec;
  activableNum: Multiplier;
  level;
  exp;
  expRequirementReduction: Multiplier;
  members; //= new GuildMember[Enums.HeroKind)];
  abilityPointLeft;
  abilities: GuildAbility[] = Array(Enums.GuildAbilityKind);
  superAbilityList: GuildSuperAbility[] = [];
  grade;
  fame;
  superAbilityPointLeft;
  //   accomplishGuildLevels = new AccomplishGuildLevel[GuildParameter.maxGuildLevelCap + 1];

  constructor(DATA: DATA) {
    this.data = DATA;
    this.expRequirementReduction = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
      () => 0.99,
      () => 0.0
    );
    this.guildLevelCap = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => GuildParameter.maxGuildLevel));
    this.activableNum = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 3.0));

    // this.level = new GuildLevel((Func<long>) (() => this.guildLevelCap.Value()));
    // this.exp = new GuildExp(new Func<long, double>(this.RequiredExp), this.level);
    // for (let index = 0; index < this.members.length; index++)
    //   this.members[index] = new GuildMember(this, index);
    // this.abilityPointLeft = new GuildAbilityPointLeft();
    for (let kind = 0; kind < this.abilities.length; kind++) this.abilities[kind] = new GuildAbility(this, kind);

    this.superAbilityList.push(new GSA_SuperMining(this));
    this.superAbilityList.push(new GSA_SuperSynthesizing(this));
    this.superAbilityList.push(new GSA_SuperGathering(this));
    this.superAbilityList.push(new GSA_SuperTraining(this));
    this.superAbilityList.push(new GSA_SuperTrapping(this));
    this.superAbilityList.push(new GSA_SuperBanking(this));
    this.superAbilityList.push(new GSA_SuperFinancing(this));
    this.superAbilityList.push(new GSA_Finding(this));
    this.superAbilityList.push(new GSA_Racing(this));
    this.superAbilityList.push(new GSA_Socializing(this));
    this.superAbilityList.push(new GSA_Ritualizing(this));
    this.superAbilityList.push(new GSA_Artificing(this));
    this.superAbilityList.push(new GSA_Haggling(this));
    // for (int guildLevel = 0; guildLevel < this.accomplishGuildLevels.length; guildLevel++)
    //   this.accomplishGuildLevels[guildLevel] = new AccomplishGuildLevel(guildLevel);
    // this.grade = new GuildGrade((Func<long>) (() => GuildParameter.maxGuildLevel));
    // this.fame = new GuildFame(new Func<long, double>(this.RequiredFame), this.grade);
    // this.fame.isTrackGain = true;
    // this.superAbilityPointLeft = new GuildSuperAbilityPointLeft();
  }

  Start() {
    for (let index = 0; index < this.abilities.length; index++) this.abilities[index].Start();
    for (let index = 0; index < this.superAbilityList.length; index++) this.superAbilityList[index].Start();

    // this.data.nitro.nitroCap.RegisterMultiplier(
    //   new MultiplierInfo(MultiplierKind.GuildSuperAbility, MultiplierType.Mul, () => 0.05 * this.data.source.guildSuperAbilityLevels[GuildSuperAbilityKind.Racing])
    // );
    // this.data.stats.globalSkillSlotNum.RegisterMultiplier(
    //   new MultiplierInfo(MultiplierKind.Guild, MultiplierType.Add, () => this.data.source.guildAbilityLevels[GuildAbilityKind.GlobalSkillSlot])
    // );
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
