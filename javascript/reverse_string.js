function reverseString(str) {
  let arr = str.split('');
  let i = 0;
  let x = arr.length - 1;

  while (i < x) {
    let temp = arr[i];
    arr[i] = arr[x]
    arr[x] = temp

    i ++
    x --
    
  }
  return arr.join('')
}
console.log(reverseString("p"))
// if (require.main === module) {
//   // add your own tests in here
//   console.log("Expecting: 'ih'");
//   console.log("=>", reverseString("hi"));

//   console.log("");

//   console.log("Expecting: 'ybabtac'");
//   console.log("=>", reverseString("catbaby"));
// }

// module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
