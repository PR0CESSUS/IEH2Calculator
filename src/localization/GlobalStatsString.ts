import { GlobalStats } from "@/type/GlobalStats";

export function GlobalStatsString(kind: GlobalStats) {
  switch (kind) {
    case GlobalStats.StoneGain:
      return "Stone Gain";
    case GlobalStats.CrystalGain:
      return "Crystal Gain";
    case GlobalStats.LeafGain:
      return "Leaf Gain";
    case GlobalStats.GoldGain:
      return "Gold Gain";
    default:
      return "Not Implemented";
  }
}
