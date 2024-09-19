//QUESTION
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
//  There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  if (arr.length == 0) {
    return 0;
  }
  arr.sort((a, b) => a - b);

  let uniqueCount = 0;
  let currentUniqueItem = arr[0];

  for (let element of arr) {
    if (element != currentUniqueItem) {
      uniqueCount++;
      currentUniqueItem = element;
    }
  }

  return uniqueCount;
}
