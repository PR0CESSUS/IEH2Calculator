import { MultiplierInfo } from "@/Data/Multiplier";
import { BUILDING } from "../BUILDING";
import { MultiplierKind } from "@/type/MultiplierKind";
import { MultiplierType } from "@/type/MultiplierType";
import { ResourceKind } from "@/type/ResourceKind";
import { BuildingKind } from "@/type/BuildingKind";
import { DATA } from "@/Data";
import { Enums } from "@/Enums";
import { MonsterSpecies } from "@/type/MonsterSpecies";
import { Util } from "@/Util";
import { Stats } from "@/type/Stats";

export class MysticArena extends BUILDING {
  constructor(DATA: DATA) {
    super(DATA);
    this.kind = BuildingKind.MysticArena;
  }

  EffectValue() {
    return this.Level() * 0.025 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[1].Value();
  }

  SetEffect() {
    for (let index = 0; index < Enums.HeroKind; index++) {
      this.data.stats.MonsterDamage(index, MonsterSpecies.ChallengeBoss).RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Mul, () => this.EffectValue()));
    }
  }

  SetResearch() {
    this.data.inventory.equipInventoryUnlockedNum.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => Math.min(100.0, this.ResearchLevel(ResourceKind.Stone) * this.ResearchMul(0)))
    );
    this.data.challenge.permanentRewardMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Crystal) * 0.025 * this.ResearchMul(1))
    );
    this.data.alchemy.alchemyPointGainMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => this.ResearchLevel(ResourceKind.Leaf) * 0.025 * this.ResearchMul(2))
    );
    this.data.stats.SetEffectStats(
      Stats.EquipmentProficiencyGain,
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () => Math.max((this.ResearchLevel(ResourceKind.Stone) * this.ResearchMul(0) - 100.0) * 0.01, 0.0))
    );
  }

  ResearchEffectString(kind: ResourceKind) {
    switch (kind) {
      case ResourceKind.Stone:
        return `Equipment Inventory Slot + ${Util.tDigit(Math.min(100.0, this.ResearchLevel(ResourceKind.Stone) * this.ResearchMul(0)), 0)}`;
      case ResourceKind.Crystal:
        return `Multiply Handicapped Challenge's Passive Stats Reward by ${Util.percent(
          this.ResearchLevel(ResourceKind.Crystal) * 0.025 * this.ResearchMul(1) + 1
        )} (Equipment Proficiency Gain + ${Util.percent(Math.max((this.ResearchLevel(ResourceKind.Stone) * this.ResearchMul(0) - 100.0) * 0.01, 0.0))})`;
      case ResourceKind.Leaf:
        return `Alchemy Point Gain + ${Util.percent(this.ResearchLevel(ResourceKind.Leaf) * 0.025 * this.ResearchMul(2))}`;
    }
  }

  LevelEffectString() {}
}
