import { DataBattle } from ".";
import { Debuff } from "../../type/Debuff";
import { Element } from "../../type/Element";
import { MonsterColor } from "../../type/MonsterColor";
import { TitleKind } from "../../type/TitleKind";
import { DATA } from "../index";
import { BATTLE } from "./BATTLE";

export class MONSTER_BATTLE extends BATTLE {
  difficulty = 0;

  constructor(DATA: DATA, battleCtrl: DataBattle) {
    super(DATA, battleCtrl);
  }
  get isPet() {
    return false;
  }

  get globalInformation() {
    return this.battleCtrl.data.monster.GlobalInformation(this.species, this.color);
  }

  get attackElement() {
    return this.globalInformation.AttackElement();
  }

  get hp() {
    return this.globalInformation.Hp(this.level, this.difficulty);
  }

  get mp() {
    return this.globalInformation.Mp(this.level, this.difficulty);
  }

  get atk() {
    return this.DebuffFactor(Debuff.AtkDown) * this.globalInformation.Atk(this.level, this.difficulty);
  }

  get matk() {
    return this.DebuffFactor(Debuff.MatkDown) * this.globalInformation.MAtk(this.level, this.difficulty);
  }

  get def() {
    return this.DebuffFactor(Debuff.DefDown) * this.globalInformation.Def(this.level, this.difficulty);
  }

  get mdef() {
    return this.DebuffFactor(Debuff.MdefDown) * this.globalInformation.MDef(this.level, this.difficulty);
  }

  get spd() {
    return this.DebuffFactor(Debuff.SpdDown) * this.DebuffFactor(Debuff.Stop) * this.globalInformation.Spd();
  }

  get fire() {
    return this.globalInformation.Fire(); // + this.DebuffFactor(Debuff.FireResDown);
  }

  get ice() {
    return this.globalInformation.Ice(); //+ this.DebuffFactor(Debuff.IceResDown);
  }

  get thunder() {
    return this.globalInformation.Thunder(); //+ this.DebuffFactor(Debuff.ThunderResDown);
  }

  get light() {
    return this.globalInformation.Light(); // + this.DebuffFactor(Debuff.LightResDown);
  }

  get dark() {
    return this.globalInformation.Dark(); // + this.DebuffFactor(Debuff.DarkResDown);
  }

  get phyCrit() {
    return this.globalInformation.PhyCrit(this.level);
  }

  get magCrit() {
    return this.globalInformation.MagCrit(this.level);
  }

  get critDamage() {
    return this.globalInformation.CriticalDamage();
  }

  get debuffResistance() {
    return this.globalInformation.DebuffResistance();
  }

  get damageFactor() {
    this.battleCtrl.data.stats.MonsterDamage(this.battleCtrl.heroKind, this.species).isLog = this.battleCtrl.data.source.isSuperDungeon;
    return this.battleCtrl.data.stats.MonsterDamage(this.battleCtrl.heroKind, this.species).Value();
  }

  DamageFactorElement(element: Element) {
    this.battleCtrl.data.stats.ElementDamage(this.battleCtrl.heroKind, element).isLog = this.battleCtrl.data.source.isSuperDungeon;
    return this.battleCtrl.data.stats.ElementDamage(this.battleCtrl.heroKind, element).Value();
  }

  get exp() {
    return this.globalInformation.Exp(this.level, this.difficulty);
  }

  //   get gold() {return this.globalInformation.Gold(this.level, this.difficulty) * (1 + Convert.ToInt16(this.isMutant));}

  get resource() {
    return 1.0;
  }

  //   get attackIntervalSec() {return this.globalInformation.AttackIntervalSec(this.level, this.difficulty, this.isPet, this.battleCtrl.heroKind);}

  //   get debuff() {return this.globalInformation.Debuff();}

  //   get debuffChance() {return this.globalInformation.DebuffChance(this.level, this.difficulty, this.isPet, this.battleCtrl.heroKind);}

  //   Debuff LotteryDebuff() => UsefulMethod.WithinRandom(this.debuffChance) ? this.debuff : Debuff.Nothing;

  CalculatedExp(level) {
    let exp = this.exp;
    let num1 = this.level - level;
    let num2 =
      num1 >= -60
        ? num1 >= -40
          ? num1 >= -20
            ? num1 > 20
              ? num1 > 40
                ? num1 > 60
                  ? num1 > 80
                    ? num1 > 100
                      ? num1 > 150
                        ? num1 > 200
                          ? num1 > 300
                            ? exp * 0.01
                            : exp * 0.1
                          : exp * 0.25
                        : exp * 0.5
                      : exp * 0.75
                    : exp * 1.0
                  : exp * 1.15
                : exp * 1.3
              : exp * 1.5
            : exp * 1.3
          : exp * 1.15
        : exp * 1.0;
    if (this.color == MonsterColor.Metal) num2 *= 1.0 + this.battleCtrl.data.quest.TitleEffectValue(this.battleCtrl.heroKind, TitleKind.MetalHunter).sub;
    return num2;
  }

  get gainFactor() {
    return this.battleCtrl.data.guild.Member(this.battleCtrl.heroKind).gainRate;
  }

  //   Attack(damageMultiplier = 1.0, hitCount = 0) {return this.attack[0].NormalAttack((BATTLE) this, damageMultiplier: damageMultiplier, hitCount: hitCount);}

  //   CanAttack() {return RANGE.IsWithinRange((RANGE) this, this.Target(), this.range) && this.isMpCharged;}

  //   get isMpCharged() {return this.currentMp.value >= this.mp;}

  Damage() {
    return this.globalInformation.Damage(this.level, this.difficulty);
  }

  //   IsCrit() {return this.attackElement == Element.Physical ? this.phyCrit > 0.0 && UsefulMethod.WithinRandom(this.phyCrit) : this.magCrit > 0.0 && UsefulMethod.WithinRandom(this.magCrit);}

  //   AttackSpeed() {return this.mp / this.attackIntervalSec;}
}
