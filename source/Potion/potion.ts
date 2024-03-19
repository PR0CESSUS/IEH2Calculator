export const DataPotion = {
AngelsBadge: {
      kindNumeric: 59,
      effect: (level) => 0.01 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
ArachnettaDoll: {
      kindNumeric: 44,
      effect: (level) => 0.01 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
ArchersBadge: {
      kindNumeric: 61,
      effect: (level) => 0.01 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
AscendedFromIEH1: {
      kindNumeric: 56,
      effect: (level) => 0.1 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
BasicElixirOfBrains: {
      kindNumeric: 8,
      effect: (level) => 0.2 + 0.02 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
BasicElixirOfBrawn: {
      kindNumeric: 7,
      effect: (level) => 0.2 + 0.02 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
BasicElixirOfConcentration: {
      kindNumeric: 10,
      effect: (level) => (20 + 10 * level),
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
BasicElixirOfFortitude: {
      kindNumeric: 9,
      effect: (level) => (50 + 25 * level),
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
BasicElixirOfUnderstanding: {
      kindNumeric: 11,
      effect: (level) => 0.1 + 0.005 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
BatBadge: {
      kindNumeric: 49,
      effect: (level) => 0.001 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
BerserkersStone: {
      kindNumeric: 37,
      effect: (level) => 0.2 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
BlazingAuraDraught: {
      kindNumeric: 21,
      effect: (level) => 0.25 + level * 0.005,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
BurningDefensePotion: {
      kindNumeric: 20,
      effect: (level) => 0.2 + level * 0.01,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
CertificateOfCompetence: {
      kindNumeric: 33,
      effect: (level) => 0.005 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
ChilledHealthPotion: {
      kindNumeric: 12,
      effect: (level) => (1.5 + 0.05 * level) * GameController.game.potionCtrl.GlobalInfo(PotionKind.MinorHealthPotion).effectValue,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
ChilledRegenerationPoultice: {
      kindNumeric: 13,
      effect: (level) => (1.5 + 0.05 * level) * GameController.game.potionCtrl.GlobalInfo(PotionKind.MinorRegenerationPoultice).effectValue,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
CoolHeadOintment: {
      kindNumeric: 18,
      effect: (level) => 0.2 + level * 0.02,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
DarkRope: {
      kindNumeric: 31,
      effect: (level) => 0.2,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
DevilfishBadge: {
      kindNumeric: 52,
      effect: (level) => 0.0005 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
ElectricDefensePotion: {
      kindNumeric: 23,
      effect: (level) => 0.2 + level * 0.01,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
EnchantedAlembic: {
      kindNumeric: 35,
      effect: (level) => 0.001 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
FairyBadge: {
      kindNumeric: 50,
      effect: (level) => 0.001 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
FierySlayersOil: {
      kindNumeric: 22,
      effect: (level) => 0.1 + level * 0.01,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
FireRope: {
      kindNumeric: 29,
      effect: (level) => 0.2,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
FlametigerBadge: {
      kindNumeric: 54,
      effect: (level) => 0.005 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
FlorzporbDoll: {
      kindNumeric: 43,
      effect: (level) => 0.1 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
FoxBadge: {
      kindNumeric: 51,
      effect: (level) => 0.001 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
FrostyDefensePotion: {
      kindNumeric: 14,
      effect: (level) => 0.2 + level * 0.01,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
FrostySlayersOil: {
      kindNumeric: 19,
      effect: (level) => 0.1 + level * 0.01,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
GuardianKorDoll: {
      kindNumeric: 45,
      effect: (level) => 0.001 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
GuildMembersEmblem: {
      kindNumeric: 32,
      effect: (level) => 0.05 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
IceRope: {
      kindNumeric: 27,
      effect: (level) => 0.2,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
IcyAuraDraught: {
      kindNumeric: 15,
      effect: (level) => 0.25 + level * 0.005,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
LadyEmeldaDoll: {
      kindNumeric: 64,
      effect: (level) => 0.025 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
LightRope: {
      kindNumeric: 30,
      effect: (level) => 0.2,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
MagicslimeBadge: {
      kindNumeric: 47,
      effect: (level) => 0.001 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
MasonsTrowel: {
      kindNumeric: 34,
      effect: (level) => 0.1 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
MaterialMultiplierMist: {
      kindNumeric: 6,
      effect: (level) => 1.0 + 0.1 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
MinorHealthPotion: {
      kindNumeric: 1,
      effect: (level) => (15 + 5 * level),
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
MinorManaRegenerationPoultice: {
      kindNumeric: 5,
      effect: (level) => (5 + level),
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
MinorRegenerationPoultice: {
      kindNumeric: 2,
      effect: (level) => 1.0 + 0.2 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
MinorResourcePoultice: {
      kindNumeric: 3,
      effect: (level) => 0.25 + 0.05 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
NariSuneDoll: {
      kindNumeric: 65,
      effect: (level) => 0.005 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
NostroDoll: {
      kindNumeric: 63,
      effect: (level) => 0.01 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
OctobaddieDoll: {
      kindNumeric: 66,
      effect: (level) => 1.0 / 400.0 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
ShockingSlayersOil: {
      kindNumeric: 25,
      effect: (level) => 0.1 + level * 0.01,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
SlickerShoeSolution: {
      kindNumeric: 17,
      effect: (level) => (1.25 + 0.005 * level) * GameController.game.potionCtrl.GlobalInfo(PotionKind.SlickShoeSolution).effectValue,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
SlickShoeSolution: {
      kindNumeric: 4,
      effect: (level) => 0.1 + 0.001 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
SlightlyStickSalve: {
      kindNumeric: undefined,
      effect: (level) => 0.25 + level * 0.01,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
SlimeBadge: {
      kindNumeric: 46,
      effect: (level) => 0.001 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
SpiderBadge: {
      kindNumeric: 48,
      effect: (level) => 0.001 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
TamersBadge: {
      kindNumeric: 62,
      effect: (level) => 0.05 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
ThiefsBadge: {
      kindNumeric: 60,
      effect: (level) => 0.001 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
ThrowingNet: {
      kindNumeric: 26,
      effect: (level) => 0.2,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
ThunderRope: {
      kindNumeric: 28,
      effect: (level) => 0.2,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
TrackersMap: {
      kindNumeric: 36,
      effect: (level) => 0.5 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
TrappersTag: {
      kindNumeric: 38,
      effect: (level) => 0.005 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
TreantBadge: {
      kindNumeric: 53,
      effect: (level) => 0.005 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
UnicornBadge: {
      kindNumeric: 55,
      effect: (level) => 0.001 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
WarriorsBadge: {
      kindNumeric: 57,
      effect: (level) => 0.01 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
WhirlingAuraDraught: {
      kindNumeric: 24,
      effect: (level) => 0.25 + level * 0.005,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
WizardsBadge: {
      kindNumeric: 58,
      effect: (level) => 0.01 * level,
      get level() {
        return data.source.potionLevels[this.kindNumeric]
      },
    },
}