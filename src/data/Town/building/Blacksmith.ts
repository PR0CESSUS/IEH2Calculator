import { MultiplierInfo } from "@/Data/Multiplier";
import { BUILDING } from "../BUILDING";
import { MultiplierKind } from "@/type/MultiplierKind";
import { MultiplierType } from "@/type/MultiplierType";
import { ResourceKind } from "@/type/ResourceKind";
import { BuildingKind } from "@/type/BuildingKind";
import { DATA } from "@/Data";
import { Enums } from "@/Enums";
import { Stats } from "@/type/Stats";
import { Util } from "@/Util";

export class Blacksmith extends BUILDING {
  constructor(DATA: DATA) {
    super(DATA);
    this.kind = BuildingKind.Blacksmith;
  }

  EffectValue() {
    return this.Level() * 0.005 * this.townCtrl.townLevelEffectMultiplier.Value() * this.townCtrl.townLevelEffectMultipliers[0].Value();
  }

  SetEffect() {
    this.data.equipment.effectMultiplier.RegisterMultiplier(new MultiplierInfo(MultiplierKind.Town, MultiplierType.Add, () => this.EffectValue()));
  }

  SetResearch() {
    this.data.equipment.autoDisassembleAvailableNum.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => Math.min(this.ResearchLevel(ResourceKind.Stone) * 2 * this.ResearchMul(0), 250.0))
    );
    this.data.equipment.disassembleMultiplier.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => Math.min(this.ResearchLevel(ResourceKind.Crystal) * 0.05 * this.ResearchMul(1), 10.0))
    );
    this.data.craft.costReduction.RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Add, () => Math.min(0.9, this.ResearchLevel(ResourceKind.Leaf) * (3.0 / 400.0) * this.ResearchMul(2)))
    );
    for (let index = 0; index < Enums.HeroKind; index++) {
      this.data.stats
        .OptionEffectChance(index, 0)
        .RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () =>
            Math.max((this.ResearchLevel(ResourceKind.Stone) * 2 * this.ResearchMul(ResourceKind.Stone) - 250.0) * 0.004, 0.0)
          )
        );
      this.data.stats
        .OptionEffectChance(index, 1)
        .RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () =>
            Math.max((this.ResearchLevel(ResourceKind.Crystal) * 0.05 * this.ResearchMul(ResourceKind.Crystal) - 10.0) * 0.1, 0.0)
          )
        );
    }
    this.data.stats.SetEffectStats(
      Stats.EquipmentDropChance,
      new MultiplierInfo(MultiplierKind.TownResearch, MultiplierType.Mul, () =>
        Math.max((this.ResearchLevel(ResourceKind.Leaf) * (3.0 / 400.0) * this.ResearchMul(2) - 0.9) * 1.0, 0.0)
      )
    );
  }

  ResearchEffectString(kind: ResourceKind) {
    switch (kind) {
      case ResourceKind.Stone:
        return `Auto-Disassemble EQ Slot ${Util.tDigit(
          Math.min(this.ResearchLevel(ResourceKind.Stone) * 2 * this.ResearchMul(0), 250.0),
          0
        )} (Equipment 1st Enchanted Slot Chance + ${Util.percent(
          Math.max((this.ResearchLevel(ResourceKind.Stone) * 2 * this.ResearchMul(ResourceKind.Stone) - 250.0) * 0.004, 0.0)
        )})`;
      case ResourceKind.Crystal:
        return `Material Gain on Disassembling EQ ${Util.percent(
          Math.min(this.ResearchLevel(ResourceKind.Crystal) * 0.05 * this.ResearchMul(1), 10.0)
        )} (Equipment 2nd Enchanted Slot Chance + ${Util.percent(
          Math.max((this.ResearchLevel(ResourceKind.Crystal) * 0.05 * this.ResearchMul(ResourceKind.Crystal) - 10.0) * 0.1, 0.0)
        )})`;
      case ResourceKind.Leaf:
        return `Reduce the cost of crafting by ${Util.percent(
          Math.min(0.9, this.ResearchLevel(ResourceKind.Leaf) * (3.0 / 400.0) * this.ResearchMul(2))
        )} (Equipment Drop Chance + ${Util.percent(Math.max((this.ResearchLevel(ResourceKind.Leaf) * (3.0 / 400.0) * this.ResearchMul(2) - 0.9) * 1.0, 0.0))})`;
    }
  }

  LevelEffectString() {}
}
