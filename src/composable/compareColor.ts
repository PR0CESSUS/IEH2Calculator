export function useCompareColor(difference: number, main: number = 0, snap: number = 0) {
  if (difference == 0) return;
  if (main) {
    // difference = difference < 0 ? -difference : difference;
    const precision = 0.000000001;

    if (snap > main) {
      if (snap / main - 1 < precision) return;
      return `red`;
    }

    if (snap < main) {
      if (main / snap - 1 < precision) return;
      return `green`;
    }
  }
  return difference > 0 ? "green" : difference < 0.0 ? "red" : "";
}
