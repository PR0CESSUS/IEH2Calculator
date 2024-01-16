export class WorldAscensionMilestone {
  wa;
  currentLevel;
  kind;
  calculatedCurrentValue;
  currentValue;
  maxLevelReached;

  constructor() {
    this.maxLevelReached = globalThis.data.source.ascensionMilestoneLevelReached;
  }

  Start() {
    this.SetEffect();
  }

  PassiveEffectValue(level) {
    return 0;
  }

  SetEffect() {}

  get currentPassiveEffectValue() {
    return this.PassiveEffectValue(this.maxLevelReached[this.kind]);
  }

  CurrentLevel() {
    return this.currentLevel;
  }
}
