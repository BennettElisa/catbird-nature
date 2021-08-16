/*
1 Print the number of integers in an array that are above the given
input and the number that are below, e.g. for the array [1, 5, 2, 1, 10]
with input 6, print “above: 1, below: 4”.

*/

// type numsArr, number: array of integers, integer
// rtype string

const aboveAndBelowNum = (numsArr, number) => {
  if (number === undefined) {
    return `Enter a second argument to compare array values against`;
  }

  if (!numsArr.length) return `No values in array to compare`;

  let above = 0;
  let below = 0;

  numsArr.forEach(num => {
    if (num > number) above += 1;
    if (num < number) below += 1;
  });

  return `above: ${above}, below: ${below}`;
};

console.log(aboveAndBelowNum([2, 40, 7, 30])); // `Enter a second argument to compare array values against`
console.log(aboveAndBelowNum([1, 5, 2, 1, 10], 6)); // “above: 1, below: 4”
console.log(aboveAndBelowNum([-1, -5, 0, 3, -10], 8)); // “above: 0, below: 5”
console.log(aboveAndBelowNum([-2, -4, 4, 4, -25], -9)); // “above: 4, below: 1”
console.log(aboveAndBelowNum([], 60)); // “No values in array to compare”

/*

#2 Rotate the characters in a string by a given input and have the overflow
appear at the beginning, e.g. “MyString” rotated by 2 is “ngMyStri”.

*/

// type str, num: string, integer
// rtrype string
const rotateChars = (str, num) => {
  if (str.length == num || str.length < num || num < 1) return str;

  let rotate = str.slice(str.length - num);
  let overflow = str
    .split("")
    .slice(0, str.length - num)
    .join("");

  return rotate + overflow;
};

console.log(rotateChars("MyString", 2)); // ngMyStri
console.log(rotateChars("MyString", 6)); // StringMy
console.log(rotateChars("MyString", 4)); // ringMySt
console.log(rotateChars("MyString", 8)); // MyString
console.log(rotateChars("MyString", 10)); // MyString
console.log(rotateChars("MyString", -2)); // MyString
