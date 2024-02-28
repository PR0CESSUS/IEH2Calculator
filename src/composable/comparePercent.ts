import { Util } from "../Util";

export function useComparePercent(main: number, snap: number, track: boolean = true) {
  if ((snap === 0 || snap == undefined) && track) return "(NEW)";
  if ((main === 0 || main == undefined) && track) return "(MISSING)";
  if (main == 0 || snap == 0 || snap == undefined || main == undefined) return;

  if (snap > main) {
    if (snap / main - 1 < 0.000001) return;
    return `(-${Util.percent(snap / main - 1, 3)})`;
  }

  if (snap < main) {
    if (main / snap - 1 < 0.000001) return;
    return `(+${Util.percent(main / snap - 1, 2)})`;
  }
}
