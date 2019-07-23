/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/

const insertionSort = (arr) => {
  for(var i = 1; i < arr.length; i++) {
    let j = 0;
    let running = true;
    while(j < i && running) {
      if(arr[i] <= arr[j]) {        
        running = false;
        shift(arr, j, i);
      }
      j+=1;
    }    
  }
} // O(N^2)

const shift = (arr, start, end) => {
  const val = arr[end];
  let i = end;
  while(i >= start) {
    arr[i] = arr[i-1];
    i-=1;
  }
  arr[start] = val;  
}


const arr = [23, 5, 3, 100, 2, 89];
insertionSort(arr);
console.log(arr)