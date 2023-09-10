export const heroKind = ["Warrior", "Wizard", "Angel", "Thief", "Archer", "Tamer"] as const;

export type HeroKind = (typeof heroKind)[number];
