//@ts-nocheck
export function secondsToDhms(seconds) {
  seconds = parseInt(seconds);
  let d = Math.floor(seconds / (3600 * 24));
  let h = Math.floor((seconds % (3600 * 24)) / 3600);
  let m = Math.floor((seconds % 3600) / 60);
  let s = Math.floor(seconds % 60);

  if (h < 10) h = "0" + h;

  if (m < 10) m = "0" + m;

  if (s < 10) s = "0" + s;

  if (d == 0 && h == 0) return `${m}m${s}s`;
  if (d == 0) return `${h}h${m}m${s}s`;
  return `${d}d ${h}:${m}:${s}`;
}
