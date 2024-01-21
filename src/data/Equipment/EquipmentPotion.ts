import { HeroKind } from "../../type/HeroKind";
import { PotionKind } from "../../type/PotionKind";
import { PotionType } from "../../type/PotionType";

export class EquipmentPotion {
  slotId: number;
  effectRegister = [];

  constructor(slotId: number) {
    this.slotId = slotId;
  }

  get id() {
    return globalThis.data.source.potionId[this.slotId];
  }
  get kind(): PotionKind {
    return globalThis.data.source.potionKinds[this.id];
  }

  set kind(value) {
    globalThis.data.source.potionKinds[this.id] = value;
    this.Start();
  }

  get slot() {
    if (this.slotId < 260) return 0;
    return (this.slotId - 260 - this.heroKind * 6) % 6;
  }

  get stack() {
    return globalThis.data.source.potionStackNums[this.id];
  }

  get level() {
    return globalThis.data.potion.GlobalInfo(this.kind).level;
  }

  get type() {
    return globalThis.data.potion.GlobalInfo(this.kind).type;
  }

  get heroKind() {
    if (this.slotId >= 260 && this.slotId < 266) {
      return HeroKind.Warrior;
    } else if (this.slotId >= 266 && this.slotId < 272) {
      return HeroKind.Wizard;
    } else if (this.slotId >= 272 && this.slotId < 278) {
      return HeroKind.Angel;
    } else if (this.slotId >= 278 && this.slotId < 284) {
      return HeroKind.Thief;
    } else if (this.slotId >= 284 && this.slotId < 290) {
      return HeroKind.Archer;
    } else if (this.slotId >= 290 && this.slotId < 296) {
      return HeroKind.Tamer;
    }
  }

  get effectValue() {
    if (globalThis.data.potion.GlobalInfo(this.kind).type == PotionType.Talisman) {
      return globalThis.data.potion.GlobalInfo(this.kind).effectValue * this.stack;
    } else {
      return globalThis.data.potion.GlobalInfo(this.kind).effectValue;
    }
  }

  UnregisterEffects() {
    this.effectRegister.forEach((effect) => {
      effect();
      // console.log(effect);
    });
    this.effectRegister = [];
  }

  Start() {
    this.UnregisterEffects();
    if (this.slotId < 260 || this.kind == 0) return;

    if (globalThis.data.potion.GlobalInfo(this.kind).SetEffect != undefined && !this.isDisabled()) {
      const register = globalThis.data.potion.GlobalInfo(this.kind).SetEffect(this.heroKind, () => this.stack);
      Array.isArray(register) ? this.effectRegister.push(...register) : this.effectRegister.push(register);
    }
  }

  isDisabled() {
    if (this.slotId < 260 || !globalThis.data.source.isActiveBattle[this.heroKind]) return true;
    if (globalThis.data.custom.isSuperDungeon && this.heroKind == globalThis.data.source.currentHero) {
      // console.log("hero", HeroKind[this.heroKind], "slot", slot, "superdungeon", globalThis.data.battles[this.heroKind].superDungeonCtrl.utilitySlotNum.Value() <= slot);
      return globalThis.data.battles[this.heroKind].superDungeonCtrl.utilitySlotNum.Value() <= this.slot;
    } else {
      // console.log("hero", HeroKind[this.heroKind], "slot", slot, " normal", globalThis.data.inventory.equipPotionUnlockedNum[this.heroKind].Value() <= slot);
      return globalThis.data.inventory.equipPotionUnlockedNum[this.heroKind].Value() <= this.slot;
    }
  }
}
