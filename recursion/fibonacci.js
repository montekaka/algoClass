/*

Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.

Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...

What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/

// const fibonnaci = (num) => {
//   if(num <= 1) return num;
//   return fibonnaci(num - 1) + fibonnaci(num - 2);
// }

const fibonnaci = (num) => {
  const f = [0, 1];
  for(var i = 2; i <= num; i++) {
    f[i] = f[i-1] + f[i-2];
  }
  return f[num];
}

console.log(fibonnaci(1))