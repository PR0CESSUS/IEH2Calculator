import { useComparePercent } from "./comparePercent";
import { useDifferenceObject } from "./differenceObject";

export function useCompareObject(main, snap) {
  const difference = useDifferenceObject(main, snap);
  const compare = {};

  for (const [key, _] of Object.entries(difference)) {
    if (key == "Base") {
      compare[key] = "";
    } else {
      compare[key] = useComparePercent(main[key], snap[key], true);
    }
  }

  return compare;
}
