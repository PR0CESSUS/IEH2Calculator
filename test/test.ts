function sortForRepeatingSequence(arr) {
  // Count the occurrences of each number
  const counts = {};
  for (const num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }

  // Create an empty result array
  const result = [];

  // Loop through numbers 1, 2, 3 and add them to the result array based on their counts
  for (let num = 1; num <= 3; num++) {
    if (counts[num]) {
      for (let i = 0; i < counts[num]; i++) {
        result.push(num);
      }
    }
  }

  return result;
}

const myArray = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3];
const sortedArray = sortForRepeatingSequence(myArray);

console.log(sortedArray);
