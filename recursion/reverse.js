/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/


// const reverse = (str) => {
//   let start = 0;
//   let end = str.length - 1;
//   let result = []
//   while(start < end) {
//     const temp = str[start];
//     result[start] = str[end];
//     result[end] = temp;    
//     start += 1;
//     end -=1;
//   }
//   return result.join('');
// }

const reverse = (str) => {
  if(str.length === 0) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('abcdefg'));