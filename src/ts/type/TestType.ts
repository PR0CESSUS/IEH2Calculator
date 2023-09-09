export const monsterSpecies = [
  "Slime",
  "MagicSlime",
  "Spider",
  "Bat",
  "Fairy",
  "Fox",
  "DevilFish",
  "Treant",
  "FlameTiger",
  "Unicorn",
  "Mimic",
  "ChallengeBoss",
] as const;

export type MonsterKind = {
  [keys in (typeof monsterSpecies)[number]]?: any;
};

export interface ITest {
  age: number;
  name: string;
}
export type DataInitialization = {
  isInitialized: boolean;
};
type TestType = {
  red: string;
  blue: string;
};
