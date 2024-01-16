import { MultiplierInfo } from "../../Multiplier";
import { Enums } from "../../Enums";
import { Debuff } from "../../type/Debuff";
import { ResourceKind } from "../../type/ResourceKind";
import { MultiplierType } from "../../type/MultiplierType";
import { MultiplierKind } from "../../type/MultiplierKind";
import { SkillType } from "../../type/SkillType";
import { HeroKind } from "../../type/HeroKind";
import { Element } from "../../type/Element";
import { SkillPassiveEffect } from "./SkillPassiveEffect";
import { SkillParameter } from "./SkillParameter";
import { BATTLE } from "../Battle/BATTLE";
import { BasicStatsKind } from "../../type/BasicStatsKind";

export class SKILL {
  heroKind: HeroKind;
  id;
  passiveEffectLists: SkillPassiveEffect[] = [];
  throwSpeed = 2000;
  attackLists = Array(Enums.HeroKind);
  //   proficiency: SkillProficiency;

  mp = Array(Enums.HeroKind);
  tempDamage = Array(Enums.HeroKind);

  interval = Array(Enums.HeroKind);

  attackArray = Array(Enums.HeroKind);

  tempElement: Element;

  constructor(heroKind: HeroKind, id) {
    this.heroKind = heroKind;
    this.id = id;
    // if (id >= 0) {
    //   this.rank = new SkillRank(heroKind, id, (() => SkillParameter.maxSkillRank));
    //   this.level = new SkillLevel(heroKind, id, new Func<long>(this.MaxLevel));
    //   if (this.level < 0)
    //     this.level.ChangeValue(0);
    //   this.proficiency = new SkillProficiency(heroKind, id, new Func<long, double>(this.RequiredProficiency), this.level);
  }

  get level() {
    switch (this.heroKind) {
      case HeroKind.Warrior:
        return globalThis.data.source.warriorSkillLevel[this.id];
      case HeroKind.Wizard:
        return globalThis.data.source.wizardSkillLevel[this.id];
      case HeroKind.Angel:
        return globalThis.data.source.angelSkillLevel[this.id];
      case HeroKind.Thief:
        return globalThis.data.source.thiefSkillLevel[this.id];
      case HeroKind.Archer:
        return globalThis.data.source.archerSkillLevel[this.id];
      case HeroKind.Tamer:
        return globalThis.data.source.tamerSkillLevel[this.id];
      default:
        return 0;
    }
  }

  get rank() {
    switch (this.heroKind) {
      case HeroKind.Warrior:
        return globalThis.data.source.warriorSkillRank[this.id];
      case HeroKind.Wizard:
        return globalThis.data.source.wizardSkillRank[this.id];
      case HeroKind.Angel:
        return globalThis.data.source.angelSkillRank[this.id];
      case HeroKind.Thief:
        return globalThis.data.source.thiefSkillRank[this.id];
      case HeroKind.Archer:
        return globalThis.data.source.archerSkillRank[this.id];
      case HeroKind.Tamer:
        return globalThis.data.source.tamerSkillRank[this.id];
      default:
        return 0;
    }
  }
  //     for (let index = 0; index < this.attackLists.length; index++)
  //       this.attackLists[index] = [];

  //   }

  get classSkill() {
    return globalThis.data.skill.classSkills[this.heroKind];
  }

  //   get type() {return SkillType.Attack;}

  get element() {
    return Element.Physical;
  }

  //   get effectCenter() {return SkillEffectCenter.Target;}

  //   get debuff() {return Debuff.Nothing;}

  //   get buff() {return Buff.Nothing;}

  //   get initCost() {return SkillParameter.skillCosts[this.heroKind][this.id][0] * globalThis.data.skill.skillRankCostFactors[this.heroKind].Value();}

  //   get baseCost() {return SkillParameter.skillCosts[this.heroKind][this.id][1];}

  get initDamage() {
    return SkillParameter.skillFactors[this.heroKind][this.id][0];
  }

  get incrementDamage() {
    return SkillParameter.skillFactors[this.heroKind][this.id][1];
  }

  get initMpGain() {
    return SkillParameter.skillFactors[this.heroKind][this.id][2];
  }

  get incrementMpGain() {
    return SkillParameter.skillFactors[this.heroKind][this.id][3];
  }

  //   get initMpConsume() {return SkillParameter.skillFactors[this.heroKind][this.id][4];}

  //   get incrementMpConsume() {return SkillParameter.skillFactors[this.heroKind][this.id][5];}

  get initInterval() {
    return SkillParameter.skillFactors[this.heroKind][this.id][6];
  }

  //   get profDifficulty() {return SkillParameter.skillFactors[this.heroKind][this.id][7];}

  //   get range() {return SkillParameter.skillFactors[this.heroKind][this.id][8];}

  //   get initEffectRange() {return SkillParameter.skillFactors[this.heroKind][this.id][9];}

  //   get incrementEffectRange() {return SkillParameter.skillFactors[this.heroKind][this.id][10];}

  //   get maxEffectRange() {return SkillParameter.skillFactors[this.heroKind][this.id][11];}

  //   get initDebuffChance() {return SkillParameter.skillFactors[this.heroKind][this.id][12];}

  //   get incrementDebuffChance() {return SkillParameter.skillFactors[this.heroKind][this.id][13];}

  //   get maxDebuffChance() {return SkillParameter.skillFactors[this.heroKind][this.id][14];}

  get initHitCount() {
    return SkillParameter.skillFactors[this.heroKind][this.id][15];
  }

  get incrementHitCount() {
    return SkillParameter.skillFactors[this.heroKind][this.id][16];
  }

  get maxHitCount() {
    return SkillParameter.skillFactors[this.heroKind][this.id][17];
  }

  get isLog() {
    return globalThis.data.skill.isLog[this.heroKind];
  }

  //   IsUnlocked() {
  //     if (this.Rank() > 0)
  //       return true;
  //     foreach (KeyValuePair<int, long> requiredin: Skill this.requiredSkills) {
  //       if (globalThis.data.skill.Skill(this.heroKind, requiredSkill.Key).level.value < requiredSkill.Value)
  //         return false;
  //     }
  //     return true;
  //   }

  //   CanEquip() {return this.Rank() > 0 && this.IsUnlocked();}

  IsEquipped(heroKind: HeroKind) {
    return false;
    // let skillSet: SkillSet = globalThis.data.battles[heroKind].skillSet;
    // if (!skillSet.IsEquipped(this))
    //   return false;
    // return this.heroKind == heroKind ? Array.IndexOf<SKILL>(skillSet.currentSkillSet, this) < skillSet.currentEquippingNum : Array.IndexOf<SKILL>(skillSet.currentGlobalSkillSet, this) < skillSet.currentGlobalEquippingNum;
  }

  // IsActiveBuff(heroKind: HeroKind) {return this.IsEquipped(heroKind) && this.mp[heroKind] > 0.0;}
  IsActiveBuff(heroKind: HeroKind) {
    return true;
  }

  //   Description() {return "";}

  get levelBonus() {
    if (this.isLog) {
      return (
        globalThis.data.skill.skillLevelBonus[this.heroKind].After() +
        globalThis.data.skill.skillLevelBonusFromHolyArch[this.heroKind].Value()
      );
    } else {
      return 0;
    }
  }

  Level() {
    return this.Rank() <= 0 ? 0 : this.level + this.levelBonus;
  }

  Rank() {
    return this.rank;
  }

  //   MaxLevel() {return this.Rank() * 5;}

  IncrementDamagePerLevel() {
    return this.incrementDamage * this.Rank();
  }

  Damage() {
    return this.initDamage + this.IncrementDamagePerLevel() * this.Level();
  }

  Interval() {
    return this.initInterval * Math.max(0.5, 1.0 - 0.0001 * this.Level());
  }

  IncrementMpGainPerLevel() {
    return this.incrementMpGain * this.Rank();
  }

  GainMp() {
    const value = this.initMpGain + this.IncrementMpGainPerLevel() * this.Level();
    return this.isLog ? Math.log10(Math.max(1.0, value)) * this.HitCount() * (1.0 / Math.pow(0.1, 0.8)) : value;
  }

  // GainMp(heroKind: HeroKind) {
  //   if (this.GainMp() < 1.0)
  //     return 0.0;
  //   return this.isLog ? Math.log10(Math.max(1.0, this.GainMp())) * this.HitCount() * (1.0 / Math.pow(this.Interval( globalThis.data.battles[heroKind].hero), 0.8)) : this.GainMp();
  // }

  //   ConsumeMp() {return this.type == SkillType.Buff ? 0.0 : this.initMpConsume + this.incrementMpConsume * this.Level();}

  //   ConsumeMp(heroKind: HeroKind) {
  //     if (this.ConsumeMp() < 1.0)
  //       return 0.0;
  //     return this.isLog ? (1.0 + 1.5 * Math.log(Math.max(1.0, this.ConsumeMp()), 1.5)) * (2.0 / this.Interval()) * this.HitCount() * (1.0 + (globalThis.data.skill.ladyEmeldaEffectMultiplier[heroKind].Value() - 1.0) * 4.0) : this.ConsumeMp() * (1.0 + (globalThis.data.skill.ladyEmeldaEffectMultiplier[heroKind].Value() - 1.0) * 4.0);
  //   }

  //   ChanneledMp() {
  //     if (this.type != SkillType.Buff)
  //       return 0.0;
  //     return this.isLog ? 1.0 + 1.5 * Math.log(Math.max(1.0, this.initMpConsume + this.incrementMpConsume * this.Level()), 2.0) * (2.0 / this.Interval()) : this.initMpConsume + this.incrementMpConsume * this.Level();
  //   }

  HitCount() {
    return (
      Math.min(this.maxHitCount, this.initHitCount + this.incrementHitCount * this.level) +
      globalThis.data.skill.extraSkillHitCount[this.heroKind].Value()
    );
  }

  //   HitCountForPetAttack(heroKind: HeroKind) {
  //     if (globalThis.data.stats.heroes[heroKind].summonPetSlot.Value() < 1.0)
  //       return 1;
  //     return this.HitCount() < 1 ? 0 : 1 + ((this.HitCount() - 1) / globalThis.data.stats.heroes[heroKind].summonPetSlot.Value());
  //   }

  //   Range() {return Mathf.Max(80, (this.range * globalThis.data.skill.skillRangeMultiplier[this.heroKind].Value()));}

  //   EffectRange() {return Mathf.Max(50, (Math.min(this.maxEffectRange, this.initEffectRange + this.incrementEffectRange * this.Level()) * globalThis.data.skill.skillEffectRangeMultiplier[this.heroKind].Value()));}

  //   DebuffChance() {return Math.min(this.maxDebuffChance, this.initDebuffChance + this.incrementDebuffChance * this.Level());}

  //   RequiredProficiency(level) {
  //     num = Math.floor(5.0 * (1.0 + this.profDifficulty * 0.75) * (1 + level) * Math.pow(3.0, level / 100.0) / Math.max(0.1, this.initInterval));
  //     if (level >= 250)
  //       num *= Math.pow(10.0, (level - 250.0) / 5.0);
  //     return num;
  //   }

  //   RequiredProficiency() {return this.RequiredProficiency(this.level);}

  Damage2(isDisplay = true) {
    let myself = {
      heroKind: this.heroKind,
      matk: globalThis.data.stats.heroes[this.heroKind].basicStats[BasicStatsKind.MDEF].After(),
      atk: globalThis.data.stats.heroes[this.heroKind].basicStats[BasicStatsKind.DEF].After(),
    };
    this.tempDamage[myself.heroKind] = !this.isLog
      ? this.element != Element.Physical
        ? this.Damage() * myself.matk
        : this.Damage() * myself.atk
      : this.element != Element.Physical
      ? Math.log10(Math.max(1.0, this.Damage())) + myself.matk
      : Math.log10(Math.max(1.0, this.Damage())) + myself.atk;
    this.tempDamage[myself.heroKind] *= globalThis.data.skill.ladyEmeldaEffectMultiplier[myself.heroKind].Value();
    // console.log(globalThis.data.stats.ElementDamage(myself.heroKind, this.element).Value());

    if (isDisplay) return this.tempDamage[myself.heroKind] * globalThis.data.stats.ElementDamage(myself.heroKind, this.element).After();
    // this.tempDamage[myself.heroKind] *= this.skillAbuseMpPercents[myself.heroKind];
    return this.tempDamage[myself.heroKind];
  }

  //   IncrementDamagePerLevel(myself: BATTLE, isDisplay = false) {
  //     num1 = this.IncrementDamagePerLevel();
  //     num2 = this.element != Element.Physical ? num1 * myself.matk : num1 * myself.atk;
  //     if (isDisplay)
  //       num2 *= globalThis.data.stats.ElementDamage(myself.heroKind, this.element).Value();
  //     return num2;
  //   }

  //   HealPoint() {return this.Damage();}

  //   IncrementHealPointPerLevel() {return this.incrementDamage * this.Rank();}

  BuffPercent() {
    return this.initDamage + this.IncrementBuffPercentPerLevel() * this.Level();
  }

  IncrementBuffPercentPerLevel() {
    return this.incrementDamage * this.Rank();
  }

  //   EffectValue() {return this.Damage();}

  //   IncrementEffectValuePerLevel() {return this.IncrementDamagePerLevel();}

  //   IsCrit(myself: BATTLE) {return this.element != Element.Physical ? UsefulMethod.WithinRandom(myself.magCrit) : UsefulMethod.WithinRandom(myself.phyCrit);}

  //   CalculateInterval(myself: BATTLE) {
  //     this.interval[myself.heroKind] = Math.max(0.1, this.Interval() * this.IntervalModifier(myself));
  //     this.lastCalcTimeInterval[myself.heroKind] = Main.main.allTime;
  //   }

  //   Interval(myself: BATTLE) {
  //     if (this.interval[myself.heroKind] != 0.0 && this.lastCalcTimeInterval[myself.heroKind] + Main.main.calculateSpanTimeSec + this.randomCalcSpanTime[myself.heroKind] > Main.main.allTime)
  //       return this.interval[myself.heroKind];
  //     this.CalculateInterval(myself);
  //     return this.interval[myself.heroKind];
  //   }

  //   IntervalModifier(myself: BATTLE) {
  //     let num = myself.spd;
  //     if (num > 10000000.0)
  //       num = 1000.0 + Math.pow(9000.0, 0.9) + Math.pow(90000.0, 0.8) + Math.pow(900000.0, 0.7) + Math.pow(9000000.0, 0.65) + Math.pow(num - 10000000.0, 0.6);
  //     else if (num > 1000000.0)
  //       num = 1000.0 + Math.pow(9000.0, 0.9) + Math.pow(90000.0, 0.8) + Math.pow(900000.0, 0.7) + Math.pow(num - 1000000.0, 0.65);
  //     else if (num > 100000.0)
  //       num = 1000.0 + Math.pow(9000.0, 0.9) + Math.pow(90000.0, 0.8) + Math.pow(num - 100000.0, 0.7);
  //     else if (num > 10000.0)
  //       num = 1000.0 + Math.pow(9000.0, 0.9) + Math.pow(num - 10000.0, 0.8);
  //     else if (num > 1000.0)
  //       num = 1000.0 + Math.pow(num - 1000.0, 0.9);
  //     return Math.max(0.1, 1.0 / Math.log(1.4 + Math.max(0.0, num / 5.0) / 5000.0, 1.4) * Math.max(0.5, 1.0 - globalThis.data.skill.skillCooltimeReduction[myself.heroKind].Value()) / globalThis.data.skill.skillCastSpeedModifier[myself.heroKind].Value());
  //   }

  //   ThrowSpeedModifier(myself: BATTLE) {return this.IntervalModifier(myself) <= 0.0 ? 1 : Math.min(5, Math.max(1, 0.5 / this.Interval(myself)));}

  //   Dps(myself: BATTLE, isDisplay = false) {return this.Damage(myself, isDisplay) / this.Interval(myself);}

  //   TotalDps(myself: BATTLE, isDisplay = false) {return this.Dps(myself, isDisplay) * this.HitCount();}

  //   Vector2 EffectInitPosition(
  //     effectCenter: SkillEffectCenter,
  //     myself: BATTLE,
  //     Func<BATTLE> target)
  //   {
  //     switch (effectCenter) {
  //       case SkillEffectCenter.Target:
  //         return target().move.position;
  //       case SkillEffectCenter.Myself:
  //         return myself.move.position;
  //       case SkillEffectCenter.Field:
  //         return Vector2.zero;
  //       default:
  //         return Vector2.zero;
  //     }
  //   }

  //   Debuff LotteryDebuff() => this.DebuffChance() <= 0.0 || UnityEngine.Random.Range(0, 10000) >= this.DebuffChance() * 10000.0 ? Debuff.Nothing : this.debuff;

  //   SetTrigger(
  //     battleCtrl: BATTLE_CONTROLLER,
  //     myself: BATTLE,
  //     Func<BATTLE> target,
  //     List<BATTLE> targetList)
  //   {
  //     if (this.type == SkillType.Attack)
  //       this.SetAttack(battleCtrl, myself, target, targetList);
  //     if (battleCtrl.isSimulated) {
  //       this.simulatedAttackArray = this.simulatedAttackList.ToArray();
  //     }
  //     else {
  //       this.SetBuff(battleCtrl.heroKind);
  //       if (this.type == SkillType.Buff)
  //         globalThis.data.stats.heroes[battleCtrl.heroKind].channeledMp.RegisterMultiplier(new MultiplierInfo(MultiplierKind.ChanneledSkill, MultiplierType.Add, (() => this.ChanneledMp()), (() => this.IsEquipped(battleCtrl.heroKind))));
  //       for (let index = 0; index < Enums.HeroKind; index++)
  //         this.attackArray[index] = this.attackLists[index].ToArray();
  //     }
  //   }

  //   List<> AttackList(battleCtrl: BATTLE_CONTROLLER) => battleCtrl.isSimulated ? this.simulatedAttackList : this.attackLists[battleCtrl.heroKind];

  //   [] AttackArray(battleCtrl: BATTLE_CONTROLLER) => battleCtrl.isSimulated ? this.simulatedAttackArray : this.attackArray[battleCtrl.heroKind];

  //   SetAttack(
  //     battleCtrl: BATTLE_CONTROLLER,
  //     myself: BATTLE,
  //     Func<BATTLE> target,
  //     List<BATTLE> targetList)
  //   {
  //     this.AttackList(battleCtrl).push(new (battleCtrl, targetList, (Func<BATTLE, Vector2>) (x => this.EffectInitPosition(this.effectCenter, x, target)), (Func<BATTLE, double>) (x => this.Damage(x)), (() => this.IsCrit(myself)), new Func<float>(this.EffectRange), new Func<int>(this.HitCount), (Func<Element>) (() => this.element), (Func<Debuff>) (() => this.LotteryDebuff())));
  //   }

  //   SetBuff(heroKind: HeroKind) {
  //   }

  //   Trigger(battle: BATTLE, mp: NUMBER, isPetUse = false, profGainPercent = 1.0) {
  //     this.skillAbuseMpPercents[battle.heroKind] = isPetUse || this.ConsumeMp(battle.heroKind) <= 0.0 ? 1.0 : Math.min(1.0, Math.max(0.1, battle.currentMp.value / this.ConsumeMp(battle.heroKind)));
  //     this.isSimulated = battle.battleCtrl.isSimulated;
  //     switch (this.type) {
  //       case SkillType.Attack:
  //         this.Attack(battle);
  //         this.isUI = !this.isSimulated && GameController.game.IsUI(battle.battleCtrl.heroKind);
  //         if (this.isUI) {
  //           this.ShowEffectUI(battle.battleCtrl.heroKind);
  //           break;
  //         }
  //         break;
  //       case SkillType.Buff:
  //         this.DoBuff(battle);
  //         break;
  //       case SkillType.Heal:
  //         this.DoHeal(battle);
  //         break;
  //       case SkillType.Order:
  //         this.DoOrder(battle, this.isUI);
  //         break;
  //     }
  //     this.AttackWithTime(battle, this.isUI);
  //     if (!isPetUse)
  //       this.ResetCooltime(battle, this.isSimulated);
  //     if (!isPetUse)
  //       mp.Decrease(this.ConsumeMp(battle.heroKind));
  //     if (this.isSimulated)
  //       return;
  //     this.triggeredNum.Increase(this.skillAbuseMpPercents[battle.heroKind]);
  //     this.tempElement = this.element;
  //     if (battle.battleCtrl.CurrentSlayerElement() != Element.Physical)
  //       this.tempElement = battle.battleCtrl.CurrentSlayerElement();
  //     if (this.type == SkillType.Attack)
  //       globalThis.data.stats.ElementSkillTriggeredNum(battle.heroKind, this.tempElement).Increase(1.0);
  //     this.GetProficiency(this.skillAbuseMpPercents[battle.heroKind] * profGainPercent, battle.heroKind);
  //   }

  //   Attack(battle: BATTLE) {return this.AttackArray(battle.battleCtrl)[0].NormalAttack(battle);}

  //   async AttackWithTime(battle: BATTLE, isUI) {
  //   }

  //   DoBuff(battle: BATTLE) {
  //   }

  //   DoHeal(battle: BATTLE) {return battle.Heal(this.HealPoint());}

  //   DoOrder(battle: BATTLE, isUI) {
  //   }

  //   SetSkillEffectUIAction(Action<, Sprite> effectUIAction) {return this.effectUIAction = effectUIAction;}

  //   SetSkillAnimationEffectUIAction(
  //     Action<, AnimationEffectKind> animationEffectUIAction)
  //   {
  //     this.animationEffectUIAction = animationEffectUIAction;
  //   }

  //   SetSkillParticleEffectUIAction(
  //     Action<, ParticleEffectKind> particleEffectUIAction)
  //   {
  //     this.particleEffectUIAction = particleEffectUIAction;
  //   }

  //   ShowEffectUI(heroKind: HeroKind) {
  //     if (this.effectUIAction == null)
  //       return;
  //     this.effectUIAction(this.attackLists[heroKind][0], SpriteSourceUI.sprite.skillEffects[this.heroKind][this.id]);
  //   }

  //   GetProficiency(gain, heroKind: HeroKind) {return this.proficiency.Increase(gain, heroKind);}

  //   ProficiencyPercent() {return (this.proficiency.value / this.RequiredProficiency());}

  //   CountCooltime(battle: BATTLE, deltaTime, isSimulated) {
  //     if (isSimulated)
  //       this.currentCooltimeSimulated[battle.heroKind].Increase(deltaTime);
  //     else
  //       this.currentCooltime[battle.heroKind].Increase(deltaTime);
  //   }

  //   IsFilledCoolttime(battle: BATTLE, isSimulated) {return isSimulated ? this.currentCooltimeSimulated[battle.heroKind].value >= this.Interval(battle) : this.currentCooltime[battle.heroKind].value >= this.Interval(battle);}

  //   CooltimePercent(battleCtrl: BattleController) {return (this.currentCooltime[battleCtrl.heroKind].value / this.Interval((BATTLE) battleCtrl.hero));}

  //   ResetCooltime(battle: BATTLE, isSimulated) {
  //     if (isSimulated)
  //       this.currentCooltimeSimulated[battle.heroKind].ChangeValue(0.0);
  //     else
  //       this.currentCooltime[battle.heroKind].ChangeValue(0.0);
  //   }
}
