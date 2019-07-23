/*
MERGE SORT

*** Description

Merge sort employs a divide and conquer strategy - merge two sorted subarrays into one sorted array.

Recursive top-down approach:
Recursively break down array into two subarrays and sort them recursively. Subarrays are broken down until they have only 1 element (implying they are sorted).

Iterative bottom-up approach:
Split array into sublists of size 1, merge adjacent sublists into sorted lists, repeat until no more sublists.

*** Exercises

- Implement recursive merge sort (you might want to write a helper function to handle the merge step)
- Implement iterative merge sort
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

Optimization:
- Refactor your iterative solution to be a natural merge sort. This means that the initial subarrays are naturally occurring sorted sequences. How does this impact time complexity and adaptivity?
ex:
input array: [ 1 2 4 5 9 ]
subarrays for regular merge sort: [ [1], [2], [4], [5], [9] ]
subarrays for natural merge sort: [ [1,2], [4,5], [9] ]

*/
const mergeSort = (arr) => {
  if(arr.length <= 1) return arr;
  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  const result = [];
  let k = left.length + right.length - 1;
  let i = left.length - 1;
  let j = right.length - 1;  
  
  while(i >= 0 && j >= 0) {
    if(left[i] > right[j]) {
      result[k] = left[i];
      i-=1;
    } else {
      result[k] = right[j];
      j-=1;
    }
    k-=1;
  }

  while(i >= 0) {
    result[k] = left[i];
    i-=1;
    k-=1;
  }

  while(j >= 0) {
    result[k] = right[j];
    j-=1;
    k-=1;
  }

  return result;
}

const arr = [23, 5, 3, 100, 2, 89];
mergeSort(arr);
console.log(mergeSort(arr))