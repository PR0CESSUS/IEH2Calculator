export class ExpeditionGlobalInformation {
  expeditionCtrl;
  kind;

  constructor(expeditionCtrl) {
    this.expeditionCtrl = expeditionCtrl;
  }

  Start() {
    this.SetEffect();
  }

  get level(): number {
    // if (this.kind == 0) console.log(globalThis.data.source.expeditionLevels[this.kind]);

    return globalThis.data.source.expeditionLevels[this.kind];
  }
  set level(value: any) {
    // console.log("set level expedition", this.kind, value);

    globalThis.data.source.expeditionLevels[this.kind] = parseInt(value);
  }
  // ExpGainPerSecPerPet() => 1.0 * this.expeditionCtrl.expGainMultiplier.Value();

  // PetExpGainPerSec() => 5.0 * (1.0 + 0.5 * this.level.value) * this.expeditionCtrl.petExpGainMultiplier.Value() * globalThis.data.stat.statsCtrl.MaxPetEXPGainAmongHeroes();

  // SpeedModifierByExpeditionLevel() => Math.Pow(1.1, Math.floor( this.level.value / 10.0));
  RequiredExp(level) {
    let num = 86400.0 * (1 + level + 0.25 * Math.pow(Math.max(0, level - 3), 2.0));
    if (level >= 200) num *= Math.pow(2.0, (level - 200.0) / 50.0);
    if (level >= 300) num *= Math.pow(2.0, (level - 300.0) / 50.0);
    if (level >= 400) num *= Math.pow(2.0, (level - 400.0) / 50.0);
    if (level >= 500) num *= Math.pow(2.0, (level - 500.0) / 50.0);
    return num;
  }
  SetEffect() {}

  get passiveEffectValueIncrementPerLevel() {
    return 0.0;
  }

  EffectValue() {
    return this.passiveEffectValueIncrementPerLevel * this.level;
  }

  RewardAmount(expedition, pet, timeHour) {}
}
