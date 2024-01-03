import { HeroKind } from "../../type/HeroKind";
import { PotionKind } from "../../type/PotionKind";

export class EquipmentPotion {
  slotId: number;
  effectRegister;

  constructor(slotId: number) {
    this.slotId = slotId;
  }

  get id() {
    return globalThis.data.source.potionId[this.slotId];
  }
  get kind(): PotionKind {
    return globalThis.data.source.potionKinds[this.id];
  }

  get stack() {
    return globalThis.data.source.potionStackNums[this.id];
  }

  get level() {
    return globalThis.data.potion.GlobalInfo(this.kind).level;
  }

  get type() {
    return "Not implemented yet";
  }

  get heroKind() {
    if (this.slotId >= 260 && this.slotId < 266) {
      return HeroKind.Warrior;
    } else if (this.slotId >= 266 && this.slotId < 272) {
      return HeroKind.Wizard;
    } else if (this.slotId >= 272 && this.slotId < 278) {
      return HeroKind.Angel;
    } else if (this.slotId >= 278 && this.slotId < 286) {
      return HeroKind.Thief;
    } else if (this.slotId >= 286 && this.slotId < 292) {
      return HeroKind.Archer;
    } else if (this.slotId >= 292 && this.slotId < 298) {
      return HeroKind.Tamer;
    }
  }

  Start() {
    if (this.slotId < 260) return;
    if (this.effectRegister != undefined) this.effectRegister();

    if (globalThis.data.potion.GlobalInfo(this.kind).SetEffect != undefined) {
      // console.log(this.heroKind, this.stack);
      this.effectRegister = globalThis.data.potion.GlobalInfo(this.kind).SetEffect(this.heroKind, () => this.stack);
    }

    // ;
    // console.log();
  }
}
