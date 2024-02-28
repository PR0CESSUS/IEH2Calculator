import { DATA } from "..";
import { HeroKind } from "../../type/HeroKind";
import { PotionKind } from "../../type/PotionKind";
import { PotionType } from "../../type/PotionType";

export class EquipmentPotion {
  data: DATA;
  slotId: number;
  effectRegister = [];

  constructor(DATA: DATA, slotId: number) {
    this.data = DATA;
    this.slotId = slotId;
  }

  get id() {
    return this.data.source.potionId[this.slotId];
  }
  get kind(): PotionKind {
    return this.data.source.potionKinds[this.id];
  }

  set kind(value) {
    this.data.source.potionKinds[this.id] = value;
    this.Start();
  }

  get slot() {
    if (this.slotId < 260) return 0;
    return (this.slotId - 260 - this.heroKind * 6) % 6;
  }

  get stack() {
    return this.data.source.potionStackNums[this.id];
  }
  set stack(value) {
    this.data.source.potionStackNums[this.id] = Math.min(30, value);
  }

  get level() {
    return this.data.potion.GlobalInfo(this.kind).level;
  }

  get type() {
    return this.data.potion.GlobalInfo(this.kind).type;
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
    if (this.data.potion.GlobalInfo(this.kind).type == PotionType.Talisman) {
      return this.data.potion.GlobalInfo(this.kind).effectValue * this.stack;
    } else {
      return this.data.potion.GlobalInfo(this.kind).effectValue;
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

    if (this.data.potion.GlobalInfo(this.kind).SetEffect != undefined && !this.isDisabled()) {
      const register = this.data.potion.GlobalInfo(this.kind).SetEffect(this.heroKind, () => this.stack);
      Array.isArray(register) ? this.effectRegister.push(...register) : this.effectRegister.push(register);
    }
  }

  isDisabled() {
    if (this.slotId < 260 || !this.data.source.isActiveBattle[this.heroKind]) return true;
    if (this.data.source.isSuperDungeon && this.heroKind == this.data.source.currentHero) {
      // console.log("hero", HeroKind[this.heroKind], "slot", slot, "superdungeon", this.data.battles[this.heroKind].superDungeonCtrl.utilitySlotNum.Value() <= slot);
      return this.data.battles[this.heroKind].superDungeonCtrl.utilitySlotNum.Value() <= this.slot;
    } else {
      // console.log("hero", HeroKind[this.heroKind], "slot", slot, " normal", this.data.inventory.equipPotionUnlockedNum[this.heroKind].Value() <= slot);
      return this.data.inventory.equipPotionUnlockedNum[this.heroKind].Value() <= this.slot;
    }
  }
}
