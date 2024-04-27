import { Expedition } from "./Expedition";

export class ExpeditionPet {
  expedition: Expedition;
  slotId;

  constructor(expedition: Expedition, slotId: number) {
    this.expedition = expedition;
    this.slotId = slotId;
  }

  get id() {
    return this.expedition.id;
  }

  get species() {
    return this.expedition.expeditionCtrl.data.source.expeditionPetSpecies[this.slotId + 5 * this.id];
  }
  get color() {
    return this.expedition.expeditionCtrl.data.source.expeditionPetColors[this.slotId + 5 * this.id];
  }
  get isSet() {
    return this.expedition.expeditionCtrl.data.source.expeditionPetIsSet[this.slotId + 5 * this.id];
  }

  get pet() {
    return this.expedition.expeditionCtrl.data.monster.GlobalInformation(this.species, this.color).pet;
  }
}
