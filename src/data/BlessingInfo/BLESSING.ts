import { BlessingKind } from "../../type/BlessingKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { MultiplierInfo } from "../Multiplier";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { DATA } from "..";
import { Stats } from "../../type/Stats";
import { HeroKind } from "../../type/HeroKind";

export class BLESSING {
  data: DATA;
  heroKind: HeroKind;
  kind: BlessingKind;

  constructor(DATA: DATA, heroKind: HeroKind, kind: BlessingKind) {
    this.data = DATA;
    this.heroKind = heroKind;
    this.kind = kind;
  }

  get effectValue() {
    switch (this.kind) {
      case BlessingKind.Atk:
      case BlessingKind.Hp:
      case BlessingKind.MAtk:
      case BlessingKind.ExpGain:
      case BlessingKind.EquipProficiency:
      case BlessingKind.SkillProficiency:
        return 0.5 * this.data.blessingInfo.effectMultipliers[this.heroKind].Value();
      case BlessingKind.MoveSpeed:
        return Math.min(1, 0.25 * this.data.blessingInfo.effectMultipliers[this.heroKind].Value());
      default:
        break;
    }
  }
  Start() {
    this.SetEffect();
  }

  SetEffect() {
    switch (this.kind) {
      case BlessingKind.Atk:
        this.data.stats.BasicStats(this.heroKind, BasicStatsKind.ATK).RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Blessing,
            MultiplierType.Mul,
            () => this.effectValue,
            () => this.data.source.isBlessing
          )
        );
        break;
      case BlessingKind.EquipProficiency:
        this.data.stats.HeroStats(this.heroKind, Stats.EquipmentProficiencyGain).RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Blessing,
            MultiplierType.Mul,
            () => this.effectValue,
            () => this.data.source.isBlessing
          )
        );
        break;
      case BlessingKind.ExpGain:
        this.data.stats.HeroStats(this.heroKind, Stats.ExpGain).RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Blessing,
            MultiplierType.Mul,
            () => this.effectValue,
            () => this.data.source.isBlessing
          )
        );
        break;
      case BlessingKind.EquipProficiency:
        this.data.stats.GoldGain().RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Blessing,
            MultiplierType.Mul,
            () => this.effectValue,
            () => this.data.source.isBlessing
          )
        );
        break;
      case BlessingKind.Hp:
        this.data.stats.BasicStats(this.heroKind, BasicStatsKind.HP).RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Blessing,
            MultiplierType.Mul,
            () => this.effectValue,
            () => this.data.source.isBlessing
          )
        );
        break;
      case BlessingKind.MAtk:
        this.data.stats.BasicStats(this.heroKind, BasicStatsKind.MATK).RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Blessing,
            MultiplierType.Mul,
            () => this.effectValue,
            () => this.data.source.isBlessing
          )
        );
        break;
      case BlessingKind.MoveSpeed:
        this.data.stats.HeroStats(this.heroKind, Stats.MoveSpeed).RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Blessing,
            MultiplierType.Mul,
            () => this.effectValue,
            () => this.data.source.isBlessing
          )
        );
        break;
      case BlessingKind.SkillProficiency:
        this.data.stats.HeroStats(this.heroKind, Stats.SkillProficiencyGain).RegisterMultiplier(
          new MultiplierInfo(
            MultiplierKind.Blessing,
            MultiplierType.Mul,
            () => this.effectValue,
            () => this.data.source.isBlessing
          )
        );
        break;
      default:
        break;
    }
  }
}
