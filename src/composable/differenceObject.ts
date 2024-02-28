export function useDifferenceObject(object1, object2) {
  const diff = {};
  for (const [key, value] of Object.entries(object1)) {
    // console.log(key, value);
    diff[key] = value;
  }

  for (const [key, value] of Object.entries(object2)) {
    // console.log(key, value);
    if (diff[key] != undefined) {
      diff[key] -= value as number;
    } else {
      diff[key] = -value;
    }
  }
  return diff;
}
