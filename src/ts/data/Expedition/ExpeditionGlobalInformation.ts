export class ExpeditionGlobalInformation {
  expeditionCtrl;
  kind;

  constructor(expeditionCtrl) {
    this.expeditionCtrl = expeditionCtrl;
  }

  Start() {
    this.SetEffect();
  }

  get level() {
    return globalThis.data.source.expeditionLevels[this.kind];
  }

  // ExpGainPerSecPerPet() => 1.0 * this.expeditionCtrl.expGainMultiplier.Value();

  // PetExpGainPerSec() => 5.0 * (1.0 + 0.5 * this.level.value) * this.expeditionCtrl.petExpGainMultiplier.Value() * globalThis.data.stat.statsCtrl.MaxPetEXPGainAmongHeroes();

  // SpeedModifierByExpeditionLevel() => Math.Pow(1.1, Math.floor((double) this.level.value / 10.0));

  SetEffect() {}

  get passiveEffectValueIncrementPerLevel() {
    return 0.0;
  }

  EffectValue() {
    return this.passiveEffectValueIncrementPerLevel * this.level;
  }
}
