export function useCompareColor(difference: number) {
  return difference > 0 ? "green" : difference < 0 ? "red" : "";
}
