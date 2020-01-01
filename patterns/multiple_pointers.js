//Write a function called sumZero which accepts a sorted array of integers.
//The function should first pair where the sum is 0. Return an array that
//includes both values that sum to zero or undefined if a pair does not exist

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

// Implement a function called countUniqueValues, which accepts a sorted
// Array, and counts the unique values in the Array. There can be negative
// numbers in the Array, but it will always be sorted

const countUniqueValues = arr => {
  if ((arr.length = 0)) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j > arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};
