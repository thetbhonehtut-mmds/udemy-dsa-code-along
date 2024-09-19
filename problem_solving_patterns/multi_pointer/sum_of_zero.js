// QUESTION
// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

function sumOfZero(numArray) {
  numArray.sort((a, b) => a - b);

  let leftPointer = 0;
  let rightPointer = numArray.length - 1;

  while (leftPointer < rightPointer) {
    let smallest = numArray[leftPointer];
    let largest = numArray[rightPointer];
    let sum = smallest + largest

    if (sum == 0) {
      return [smallest, largest];
    }
    else if (sum > 0) {
      rightPointer--;
    }
    else if (sum < 0) {
      leftPointer++;
    }
  }
}

sumOfZero([-3, -2, -1, 0, 1, 2, 3]);
