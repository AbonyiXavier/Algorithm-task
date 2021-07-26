// Ques 1 :
// Your input is an array containing unsorted words. Suggest an efficient solution for implementing hasWord(word)
// which receives a word and returns true if it is in the array and false otherwise.
// You are not allowed to use JS Objects (maps) in your solution but can use Arrays.
// Solution time complexity is more important than its space complexity

// example of unsorted array

// Input : ["abc", "xy", "bcd"]
// Output : // return true for abc, bcd, xy
// Output :  // return false for wee, jack, kick

// or

// Input : ["learn", "code", "every", "day"]
// Output : // return true for code, day, every, learn
// Output :  // return false for father, mother, son

function hasWord(array, word) {
  return array.some((val) => word === val);
}
let array = ["learn", "code", "every", "day"];

console.log(hasWord(array, "code")); // true
console.log(hasWord(array, "xavier")); // false
