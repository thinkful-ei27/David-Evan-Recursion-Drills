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

// const stringSplit = function (string, separator) {

//   const index = string.indexOf(separator)

//   if (index < 0) {
//     return [string]
//   } else {
//     return [string.slice(0, index), ...stringSplit(string.slice(index + 1), separator)]
//   }

// }

// console.log(stringSplit("Hiigiigi", "g"))

//factorial(5) -> 5 * 4 * 3 * 2 * 1

// const factorial = num => {
//   if (num === 1) return 1;

//   return num * factorial(num - 1);
// };

// console.log(factorial(5));

// const fibonacci = function(fibIndex) {

//   if (fibIndex < 3) {
//     return 1
//   }
//   return fibonacci(fibIndex - 1) + fibonacci(fibIndex - 2)

// }

// console.log(fibonacci(13))

const anagram = str => {
  const results = [];
  if (str.length === 1) {
    return str;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainder = str.replace(char, '');
    const result = anagram(remainder);
    for (let j = 0; j < result.length; j++) {
      results.push(char + result[j]);
    }
  }
  return results;
};

console.log(anagram('east', 'east'));
//east
//

const animalHierarchy = [
  { id: 'Animals', parent: null },
  { id: 'Mammals', parent: 'Animals' },
  { id: 'Dogs', parent: 'Mammals' },
  { id: 'Cats', parent: 'Mammals' },
  { id: 'Golden Retriever', parent: 'Dogs' },
  { id: 'Husky', parent: 'Dogs' },
  { id: 'Bengal', parent: 'Cats' }
];

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy
    .filter(item => item.parent === parent)
    .forEach(item => (node[item.id] = traverse(animalHierarchy, item.id)));
  return node;
}
console.log(traverse(animalHierarchy, null));
