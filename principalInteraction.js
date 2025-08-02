"use strict"; // 5/5



function getMaxSubSum(arr) {
  let currentSum = 0;
  let maximalSum = 0;
  for (let number of arr) {
    currentSum += number;
    if (currentSum > maximalSum) maximalSum = currentSum;
    //alert(`this is the currentSum: ${currentSum}`);
    //Math.max() take in consideration
  }
  return maximalSum;
}

// alert(getMaxSubSum([-1, 2, 3, -9])); //5 PASSED
// alert(getMaxSubSum([2, -1, 2, 3, -9])); //6 PASSED
alert(getMaxSubSum([-1, 2, 3, -9, 11])); //11 PASSED
// alert(getMaxSubSum([100, -9, 2, -3, 5])); //100 PASSED
// alert(getMaxSubSum([1, 2, 3])); //6 PASSED
alert(getMaxSubSum([-1, -2, -3])); //0 PASSED
