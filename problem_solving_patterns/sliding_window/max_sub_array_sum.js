function maxSubArraySum(arr, count) {
    let biggestSum = 0;
  
    //loop through arr
    for (let i = 0; i < arr.length; i++) {
      let currentSum = 0;
      //loop subsets amount of time
      for (let j = 0; j < count; j++) {
        currentSum += arr[j+i];
          console.log(arr[j+i],currentSum)
      }
        console.log('subset sum',currentSum,'currentBiggestSum',biggestSum)
      if (currentSum > biggestSum) {
        biggestSum = currentSum;
      }
    }
  console.log('_____________________')
    return biggestSum;
  }
  
  console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
  console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
  console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
  console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
  console.log(maxSubArraySum([], 4)); // null