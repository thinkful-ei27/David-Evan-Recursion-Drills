// let countSheep = function(sheep) {
//   if (sheep === 0) {
//     return;
//   }

//   console.log(` ${sheep} - Another sheep jumped over the fence`);

//   countSheep(sheep - 1);
// };
// countSheep(5);

const arrDouble = arr => {
  if (!arr.length) {
    return [];
  }

  return [arr[0] * 2, ...arrDouble(arr.slice(1))];
};
console.log(arrDouble([1, 2, 3]));
