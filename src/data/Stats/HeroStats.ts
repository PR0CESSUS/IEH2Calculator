import { DATA } from "..";
import { Enums } from "../../Enums";
import { Multiplier, MultiplierInfo } from "../Multiplier";
import { Parameter } from "../Parameter";
import { AbilityKind } from "../../type/AbilityKind";
import { BasicStatsKind } from "../../type/BasicStatsKind";
import { HeroKind } from "../../type/HeroKind";
import { MultiplierKind } from "../../type/MultiplierKind";
import { MultiplierType } from "../../type/MultiplierType";
import { NumberType } from "../../type/NumberType";
import { HeroAbility } from "./HeroAbility";
import { Util } from "@/Util";
import { Localization } from "@/localization";
import { Element } from "@/type/Element";

export class HeroStats {
  data: DATA;
  basicStats: Multiplier[] = Array(Enums.BasicStatsKind);
  basicStatsPerLevel: Multiplier[] = Array(Enums.BasicStatsKind);
  stats: Multiplier[] = Array(Enums.Stats);
  optionEffectChance: Multiplier[] = Array(3);
  hpRegenerate: Multiplier;
  mpRegenerate: Multiplier;
  skillSlotNum: Multiplier;
  levelForEquipment: Multiplier;
  monsterDamages: Multiplier[] = Array(Enums.MonsterSpecies);
  elementDamages: Multiplier[] = Array(Enums.Element);
  elementAbsoptions: Multiplier[] = Array(Enums.Element);
  elementInvalids: Multiplier[] = Array(Enums.Element);
  guardianKorInvalidDamageHpPercent: Multiplier = new Multiplier();
  monsterDistinguishMaxLevel: Multiplier;
  monsterCaptureMaxLevelIncrement: Multiplier;
  guildExpGain: Multiplier;
  movedDistance;
  movedDistanceReset;
  materialLootGain: Multiplier;
  elementSlayerDamages: Multiplier[] = Array(Enums.Element);
  debuffChances: Multiplier[] = Array(Enums.Debuff);
  channeledMp: Multiplier;
  summonPetSlot: Multiplier;
  loyaltyPoingGain: Multiplier;
  petExpGainPerDefeat: Multiplier;
  summonPetATKMATKMultiplier: Multiplier;
  summonPetSPDMoveSpeedMultiplier: Multiplier;
  extraAfterDamage: Multiplier;
  heroKind: HeroKind;
  level;
  exp;
  abilities = Array(Enums.AbilityKind);
  abilityPointLeft;

  constructor(DATA: DATA, heroKind: HeroKind) {
    this.data = DATA;
    this.heroKind = heroKind;
    this.level = this.data.source.heroLevel[this.heroKind];
    // console.log(this.level, this.data.source.heroLevel);

    this.abilityPointLeft = this.AbilityPointLeft(this.heroKind);
    // console.log(this.stats);
    for (let index = 0; index < this.abilities.length; index++) this.abilities[index] = new HeroAbility(this.data, this.heroKind, index);
    this.SetStats();
  }

  AbilityPointLeft(heroKind) {
    // console.log(this.data);

    return this.data.source.abilityPoints[heroKind];
  }
  Start() {
    this.data.skill.skillCastSpeedModifier[this.heroKind].RegisterMultiplier(new MultiplierInfo(MultiplierKind.SPD, MultiplierType.Mul, () => this.SkillCastSpeedFromSPD()));
  }
  SkillCastSpeedFromSPD() {
    let num = this.basicStats[6].Value();
    if (num > 10000000.0) num = 1000.0 + Math.pow(9000.0, 0.9) + Math.pow(90000.0, 0.8) + Math.pow(900000.0, 0.7) + Math.pow(9000000.0, 0.65) + Math.pow(num - 10000000.0, 0.6);
    else if (num > 1000000.0) num = 1000.0 + Math.pow(9000.0, 0.9) + Math.pow(90000.0, 0.8) + Math.pow(900000.0, 0.7) + Math.pow(num - 1000000.0, 0.65);
    else if (num > 100000.0) num = 1000.0 + Math.pow(9000.0, 0.9) + Math.pow(90000.0, 0.8) + Math.pow(num - 100000.0, 0.7);
    else if (num > 10000.0) num = 1000.0 + Math.pow(9000.0, 0.9) + Math.pow(num - 10000.0, 0.8);
    else if (num > 1000.0) num = 1000.0 + Math.pow(num - 1000.0, 0.9);
    return Util.getBaseLog(1.4 + Math.max(0.0, num / 5.0) / 5000.0, 1.4) - 1.0;
  }
  Ability(kind: AbilityKind) {
    return this.abilities[kind];
  }

  AbilityStats(kind: BasicStatsKind) {
    let num = Parameter.stats[this.heroKind][kind];
    switch (kind) {
      case BasicStatsKind.HP:
        num *= this.Ability(AbilityKind.Vitality).Point();
        break;
      case BasicStatsKind.MP:
        num *= (this.Ability(AbilityKind.Agility).Point() + this.Ability(AbilityKind.Intelligence).Point()) / 2.0;
        break;
      case BasicStatsKind.ATK:
        num *= this.Ability(AbilityKind.Strength).Point();
        break;
      case BasicStatsKind.MATK:
        num *= this.Ability(AbilityKind.Intelligence).Point();
        break;
      case BasicStatsKind.DEF:
        num *= (this.Ability(AbilityKind.Vitality).Point() + this.Ability(AbilityKind.Strength).Point()) / 2.0;
        break;
      case BasicStatsKind.MDEF:
        num *= (this.Ability(AbilityKind.Vitality).Point() + this.Ability(AbilityKind.Intelligence).Point()) / 2.0;
        break;
      case BasicStatsKind.SPD:
        num *= this.Ability(AbilityKind.Agility).Point();
        break;
    }
    return num;
  }

  Level() {
    return this.level;
  }

  SetStats() {
    for (let index = 0; index < this.basicStats.length; index++) {
      this.basicStats[index] = new Multiplier(
        new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
          return Parameter.baseStats[this.heroKind][index];
        })
      );
      this.basicStats[index].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Ability, MultiplierType.Add, () => {
          return this.AbilityStats(index);
        })
      );
      this.basicStats[index].numberType = NumberType.Normal;
      this.basicStats[index].name = BasicStatsKind[index];

      this.basicStatsPerLevel[index] = new Multiplier();
      this.basicStats[index].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Rebirth, MultiplierType.Add, () => {
          return this.basicStatsPerLevel[index].Value() * this.Level();
        })
      );
    }
    for (let index = 0; index < this.stats.length; index++) {
      this.stats[index] = new Multiplier();
      this.stats[index].name = Localization.Stat(index);
    }

    this.stats[0].maxValue = () => {
      return 0.9;
    };
    this.stats[1].maxValue = () => {
      return 0.9;
    };

    this.stats[2].maxValue = () => {
      return 0.9;
    };

    this.stats[3].maxValue = () => {
      return 0.9;
    };

    this.stats[4].maxValue = () => {
      return 0.9;
    };
    this.stats[0].minValue = () => {
      return -1e100;
    };
    this.stats[1].minValue = () => {
      return -1e100;
    };
    this.stats[2].minValue = () => {
      return -1e100;
    };
    this.stats[3].minValue = () => {
      return -1e100;
    };
    this.stats[4].minValue = () => {
      return -1e100;
    };
    this.stats[6].RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
        return Parameter.baseStats[this.heroKind][7];
      })
    );
    this.stats[6].RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.Ability, MultiplierType.Add, () => {
        return Parameter.stats[this.heroKind][7] * this.abilities[4].Point();
      })
    );
    this.stats[7].RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
        return Parameter.baseStats[this.heroKind][8];
      })
    );
    this.stats[7].RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.Ability, MultiplierType.Add, () => {
        return Parameter.stats[this.heroKind][8] * this.abilities[4].Point();
      })
    );
    this.stats[8].modifiers[0] = new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
      return Parameter.baseStats[this.heroKind][9];
    });
    this.stats[9].maxValue = () => {
      return 1.0;
    };
    this.stats[9].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => Parameter.baseStats[this.heroKind][10]));
    this.stats[9].RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.Ability, MultiplierType.Add, () => Parameter.stats[this.heroKind][10] * Math.pow(this.abilities[4].Point(), 2.0 / 3.0))
    );
    this.stats[10].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => Parameter.baseStats[this.heroKind][11]));
    this.stats[10].RegisterMultiplier(
      new MultiplierInfo(MultiplierKind.Ability, MultiplierType.Add, () => Parameter.stats[this.heroKind][11] * Math.pow(this.abilities[3].Point(), 2.0 / 3.0))
    );
    this.stats[10].minValue = () => 50.0;
    this.stats[10].numberType = NumberType.Meter;
    this.stats[11].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.stats[12].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.stats[13].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.stats[14].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    this.stats[17].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.025));
    this.stats[18].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.025));
    this.stats[19].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 2.0));
    this.stats[21].RegisterMultiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
    for (let index = 0; index < this.optionEffectChance.length; index++) {
      this.optionEffectChance[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0.01 * Math.pow(0.1, index)));
      this.optionEffectChance[index].maxValue = () => 1.0;
      this.optionEffectChance[index].RegisterMultiplier(
        new MultiplierInfo(MultiplierKind.Ability, MultiplierType.Add, () => 0.0002 * Math.pow(0.1, index) * this.abilities[AbilityKind.Luck].Point())
      );
    }
    this.optionEffectChance[0].name = "Equipment 1st Enchantment Slot Chance";
    this.optionEffectChance[1].name = "Equipment 2nd Enchantment Slot Chance";
    this.optionEffectChance[2].name = "Equipment 3rd Enchantment Slot Chance";
    this.hpRegenerate = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 0),
      () => this.basicStats[0].Value(),
      () => 0.0
    );

    this.mpRegenerate = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
        return 0;
      }),
      () => this.basicStats[1].Value(),
      () => {
        return 0.0;
      }
    );
    this.hpRegenerate.name = "HP Regeneration";
    this.mpRegenerate.name = "MP Regeneration";
    this.hpRegenerate.numberType = NumberType.Normal;
    this.mpRegenerate.numberType = NumberType.Normal;
    this.skillSlotNum = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
        return 1.0;
      })
    );

    this.levelForEquipment = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
        return this.Level();
      })
    );
    for (let index = 0; index < this.monsterDamages.length; index++) {
      this.monsterDamages[index] = new Multiplier(new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => 1.0));
      this.monsterDamages[index].name = `Damage to ${Localization.MonsterSpeciesName(index)}`;
    }
    for (let index = 0; index < this.elementDamages.length; index++) {
      this.elementDamages[index] = new Multiplier(
        new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
          return 1.0;
        })
      );
      this.elementDamages[index].name = `${Element[index]} Damage`;

      if (index == 0)
        this.elementDamages[index].RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.ArmoredFury, MultiplierType.Mul, () => {
            return this.stats[15].Value() * Math.log2(Math.max(1.0, this.basicStats[4].Value()));
          })
        );
      else
        this.elementDamages[index].RegisterMultiplier(
          new MultiplierInfo(MultiplierKind.WardedFury, MultiplierType.Mul, () => {
            return this.stats[16].Value() * Math.log2(Math.max(1.0, this.basicStats[5].Value()));
          })
        );
    }
    for (let index = 0; index < this.elementAbsoptions.length; index++) {
      this.elementAbsoptions[index] = new Multiplier(
        new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
          return 0;
        }),
        () => 0.9,
        () => {
          return 0.0;
        }
      );
      this.elementAbsoptions[index].name = `${Element[index]} Absorption`;
    }
    for (let index = 0; index < this.elementInvalids.length; index++) {
      this.elementInvalids[index] = new Multiplier(
        new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
          return 0.0;
        })
      );
      this.elementInvalids[index].name = `${Element[index]} Nullify Chance`;
    }
    this.guardianKorInvalidDamageHpPercent = new Multiplier();
    this.monsterDistinguishMaxLevel = new Multiplier();
    this.monsterCaptureMaxLevelIncrement = new Multiplier();
    this.materialLootGain = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
        return 1.0;
      })
    );
    this.guildExpGain = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
        return 1.0;
      })
    );
    this.guildExpGain.name = "Guild EXP Gain";
    for (let index = 0; index < this.debuffChances.length; index++) this.debuffChances[index] = new Multiplier();
    for (let index = 0; index < this.elementSlayerDamages.length; index++) this.elementSlayerDamages[index] = new Multiplier();
    this.channeledMp = new Multiplier();
    this.loyaltyPoingGain = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
        return 1.0;
      })
    );
    this.loyaltyPoingGain.name = "Loyalty Point Gain";
    this.petExpGainPerDefeat = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
        return 1.0;
      })
    );
    this.petExpGainPerDefeat.name = "Pet EXP Gain";
    this.summonPetATKMATKMultiplier = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
        return 1.0;
      })
    );
    this.summonPetSPDMoveSpeedMultiplier = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
        return 1.0;
      })
    );

    this.extraAfterDamage = new Multiplier(
      new MultiplierInfo(MultiplierKind.Base, MultiplierType.Add, () => {
        return 0.0;
      }),
      () => 100000.0,
      () => {
        return 0.0;
      }
    );
    this.extraAfterDamage.name = "Extra After Damage";
  }
}
