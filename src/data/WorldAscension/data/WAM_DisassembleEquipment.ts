import { MultiplierInfo } from "@/data/Multiplier";
import { WorldAscensionMilestone } from "@/data/WorldAscension/WorldAscensionMilestone";
import { WorldAscension } from "@/data/WorldAscension/WorldAscension";
import { MultiplierType } from "@type/MultiplierType";
import { MultiplierKind } from "@type/MultiplierKind";
import { Stats } from "@type/Stats";
import { WorldAscensionMiletoneKind } from "@type/WorldAscensionMiletoneKind";

export class WAM_DisassembleEquipment extends WorldAscensionMilestone {
  constructor(wa: WorldAscension) {
    super(wa);
  }

  get kind() {
    return WorldAscensionMiletoneKind.DisassembleEquipment;
  }

  get currentValue() {
    return 0;
  }

  //   TotalTownMatGainFromDissasemble() {
  //     let num = 0.0;
  //     for (let index = 0; index < this.data.sourceR.townMatGainFromdisassemble.length; index++)
  //       num += this.data.sourceR.townMatGainFromdisassemble[index];
  //     return num;
  //   }

  GoalValue(level) {
    return 50000.0 * Math.pow(3.0, level - 1);
  }

  PassiveEffectValue(level) {
    return 0.2 * level * Math.pow(2.0, (level - 1.0) / 9.0);
  }

  SetEffect() {
    return this.data.stats.SetEffectStats(Stats.EquipmentProficiencyGain, new MultiplierInfo(MultiplierKind.Ascension, MultiplierType.Mul, () => this.currentPassiveEffectValue));
  }
}
