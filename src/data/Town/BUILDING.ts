import { DATA } from "..";
import { Enums } from "../../Enums";
import { Multiplier, MultiplierInfo } from "../Multiplier";
import { BuildingKind } from "../../type/BuildingKind";
import { MonsterSpecies } from "../../type/MonsterSpecies";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { ResourceKind } from "../../type/ResourceKind";
import { Localization } from "../../localization";
import { Research } from "./research";
import { DataTown } from ".";

export class BUILDING {
  data: DATA;
  townCtrl: DataTown;
  kind: BuildingKind;
  rank;
  level: number[];
  levelBonus: Multiplier;
  research: Research[] = [];

  constructor(DATA: DATA, kind: BuildingKind) {
    this.data = DATA;
    this.kind = kind;
    this.level = this.data.source.buildingLevels;
    this.townCtrl = this.data.town;
    this.levelBonus = new Multiplier();
    this.research[0] = new Research(this, ResourceKind.Stone);
    this.research[1] = new Research(this, ResourceKind.Crystal);
    this.research[2] = new Research(this, ResourceKind.Leaf);
    this.SetEffect();
  }

  NameString() {
    return Localization.BuildingString(this.kind);
  }

  Rank() {
    return this.rank.value;
  }

  Level() {
    return this.level[this.kind] + this.levelBonus.Value();
  }

  MaxLevel(rank) {
    return 20 * rank;
  }
  EffectValue() {
    switch (this.kind) {
      case BuildingKind.AdventuringParty:
        return this.Level() * 0.005 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
      case BuildingKind.AlchemistsHut:
        return this.Level() * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
      case BuildingKind.ArcaneResearcher:
        return this.Level() * 0.05 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
      case BuildingKind.Blacksmith:
        return this.Level() * 0.005 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[0].Value();
      case BuildingKind.Cartographer:
        return this.Level() * 0.05 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
      case BuildingKind.MysticArena:
        return this.Level() * 0.025 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
      case BuildingKind.Trapper:
        return this.Level() * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[2].Value();
      case BuildingKind.Temple:
        return this.Level() * 0.01 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
      case BuildingKind.StatueOfHeroes:
        return this.Level() * 0.05 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[0].Value();
      case BuildingKind.SlimeBank:
        return this.Level() * 0.01 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[0].Value();
      default:
        return 0;
    }
  }

  EffectValueString() {
    let value = this.EffectValue();
    if (this.kind == BuildingKind.Blacksmith || this.kind == BuildingKind.AdventuringParty) value++;
    return Localization.BuildingEffectString(this.kind, value);
  }
  SetCost() {}

  SetEffect() {
    switch (this.kind) {
      case BuildingKind.AdventuringParty:
        this.data.expedition.speedMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => this.EffectValue()));
        break;
      case BuildingKind.Blacksmith:
        this.data.equipment.effectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => this.EffectValue()));
        break;
      case BuildingKind.MysticArena:
        for (let index = 0; index < Enums.HeroKind; index++) {
          this.data.stats
            .MonsterDamage(index, MonsterSpecies.ChallengeBoss)
            .RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, () => this.EffectValue()));
        }
        break;
      case BuildingKind.Temple:
        this.data.rebirth.SetPointMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => this.EffectValue()));
        break;

      default:
        break;
    }
  }
}
