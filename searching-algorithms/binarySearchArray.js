/*
BINARY SEARCH ARRAY

*** Description

Given a sorted array and a value, determine if the value is in the array using the binary search (divide and conquer) method.

*** Exercises

Write a function that takes a sorted array and a value and returns the index of the value in the array. Return null if the value is not found in the array. What is the time complexity?

Extra credit: Implement the function both iteratively and recursively.

*/

const binarySearch = (arr, target) => {
  if(arr === null) return -1;
  let start = 0;
  let end = arr.length - 1;
  while(start + 1 < end) {
    const mid = start + Math.floor((end - start)/2);
    if(arr[mid] === target) {
      end = mid;
    }
    if(arr[mid] < target) {
      end = mid;
    }
    if(arr[mid] > target) {
      start = mid;
    }
  }

  if(arr[start] === target) {
    return start;
  }

  if(arr[end] === target) {
    return end;
  }

  return -1;
}