import { SkillPassiveEffect } from "@/data/skill/SkillPassiveEffect";
import { SKILL } from "@/data/skill/SKILL";
import { DATA } from "@/data/";
import { Localization } from "@/localization/";
import { HeroKind } from "@type/HeroKind";
import { Element } from "@type/Element";
import { SkillType } from "@type/SkillType";

export class TuneOfTotalTaming extends SKILL {
  constructor(data: DATA, heroKind: HeroKind, id) {
    super(data, heroKind, id);

    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 10, () => Localization.TamerSkillsString(21)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 20, () => Localization.TamerSkillsString(21)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 30, () => Localization.TamerSkillsString(21)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 40, () => Localization.TamerSkillsString(21)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 50, () => Localization.TamerSkillsString(24)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 60, () => Localization.TamerSkillsString(21) + " ### Skillcast 0.5sec to 0.25sec"));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 70, () => Localization.TamerSkillsString(21)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 80, () => Localization.TamerSkillsString(21)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 90, () => Localization.TamerSkillsString(21)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 100, () => Localization.TamerSkillsString(25)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 125, () => Localization.TamerSkillsString(27, 0.05)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 150, () => Localization.TamerSkillsString(27, 0.05)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 175, () => Localization.TamerSkillsString(28, 0.05)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 200, () => Localization.TamerSkillsString(27, 0.05)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 225, () => Localization.TamerSkillsString(27, 0.05)));
    this.passiveEffectLists.push(SkillPassiveEffect.Register(this, 250, () => Localization.TamerSkillsString(28, 0.05)));
    this.passiveEffectLists.push(
      SkillPassiveEffect.Register(
        this,
        325,
        () => Localization.WarriorSkillsString(10),
        (x) => this.unlockFullCast.RegisterCondition(x)
      )
    );
  }

  get type() {
    return SkillType.Attack;
  }

  get element() {
    return Element.Light;
  }

  TamingChance() {
    return Math.min(1.0, 0.005 + 5e-5 * this.Level());
  }
}
