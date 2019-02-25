// let countSheep = function(sheep) {
//   if (sheep === 0) {
//     return;
//   }

//   console.log(` ${sheep} - Another sheep jumped over the fence`);

//   countSheep(sheep - 1);
// };
// countSheep(5);
///////////////////////////////////////////////////////////////////////
// const arrDouble = arr => {
//   if (!arr.length) {
//     return [];
//   }

//   return [arr[0] * 2, ...arrDouble(arr.slice(1))];
// };
// console.log(arrDouble([1, 2, 3]));
// const reverseString = function (string) {

//   if (string == "") {
//     return ""
//   }

//   let firstChar = string[0]
//   return reverseString(string.slice(1)) + firstChar

// }

// console.log(reverseString("abcdefg"));

//     *
//   *   *
// *   *   *
// *   *    *    *

// const triangularNumber = num => {
//   if (num === 1) return 1;

//   return num + triangularNumber(num - 1);
// };

// console.log(triangularNumber(4));

const stringSplit = function (string, separator) {

  const index = string.indexOf(separator)

  if (index < 0) {
    return [string]
  } else {
    return [string.slice(0, index), ...stringSplit(string.slice(index + 1), separator)]
  }

}

console.log(stringSplit("Hiigiigi", "g"))
