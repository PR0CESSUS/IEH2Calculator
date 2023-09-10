import { potionKind } from "./type/PotionKind";

export class DataTalisman {
  Nothing;
  MasonsTrowel;
  #passiveEffectValue = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    0.0001,
    0.01,
    0.001,
    0.001,
    0.0001,
    0.001,
    0.025,
    null,
    null,
    null,
    null,
    0.01,
    0.01,
    0.01,
    1.0,
    0.1,
    0.1,
    0.1,
    0.1,
    0.5,
    0.025,
    0.025,
    0.025,
    0.1,
    null,
    0.0001,
    0.0001,
    0.0001,
    0.0001,
    0.0001,
    0.0001,
    0.0001,
    0.0001,
    0.0005,
    0.01,
    null,
    null,
    null,
  ];
  #passiveEffectMaxValue = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    0.99,
    null,
    2.0,
    5.0,
    1.0,
    1.0,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    0.9999,
    0.9999,
    0.9999,
    0.9999,
    0.9999,
    0.9999,
    null,
    null,
    1.0,
    null,
    null,
    null,
    null,
  ];
  constructor(data) {
    this.initialization(data);
  }
  initialization(data) {
    // data.pet.isInitialized = false;
    // console.log("data.isInitialized:", data.isInitialized);
    // console.log("data.upgrade.isInitialized:", data?.upgrade?.isInitialized);
    if (data.isInitialized) {
      for (const [key, value] of Object.entries(data.localStorage.talisman)) {
        this[key] = value;
      }
    } else if (data.source.isInitialized) {
      let disassembled = data.source.potionDisassembledNums;
      for (let index = 32; index < potionKind.length; index++) {
        const element = potionKind[index];
        let passiveEffectValue = 0;
        if (this.#passiveEffectMaxValue[index]) {
          passiveEffectValue = Math.min(this.#passiveEffectMaxValue[index], disassembled[index] * this.#passiveEffectValue[index]);
        } else {
          passiveEffectValue = 1 + disassembled[index] * this.#passiveEffectValue[index];
        }
        this[element] = {
          disassembled: disassembled[index],
          passiveEffectValue: passiveEffectValue,
        };
      }

      // cleaning up consumed data
      delete data.source.potionDisassembledNums;
    }
  }
}
