//@ts-nocheck

export class SDModifier {
  ctrl: SDModifierController;
  sdId;
  modifierValue: SDModifierValue;
  unlock: Unlock;

  // loadoutId {
  //   get => globalThis.data.source.modifierLoadoutId[(10 * this.sdId + GameController.game.currentHero)];
  //   set => globalThis.data.source.modifierLoadoutId[(10 * this.sdId + GameController.game.currentHero)] = value;
  // }

  // isActive {
  //   get => globalThis.data.source.isActiveSdModifiers[(1000 * this.loadoutId + 50 * this.sdId + this.kind)];
  //   set => globalThis.data.source.isActiveSdModifiers[(1000 * this.loadoutId + 50 * this.sdId + this.kind)] = value;
  // }

  get maxValue() {
    return 0;
  }

  get minValue() {
    return 0;
  }

  SDModifier(ctrl: SDModifierController) {
    this.ctrl = ctrl;
    this.sdId = ctrl.sdId;
    this.unlock = new Unlock();
    this.modifierValue = new SDModifierValue(
      this,
      () => this.maxValue,
      () => this.minValue
    );
  }

  Start() {
    return this.SetEffect();
  }

  get type() {
    return SDModifierType.Addition;
  }

  kind = SDModifierKind.MobLv;

  get modifierNum() {
    return 1;
  }

  SetEffect() {}

  Interactable() {
    return this.unlock.IsUnlocked() && !this.ctrl.sd.isTryingThisChallenge;
  }
}
