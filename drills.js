let countSheep = function (sheep, ) {

  if (sheep === 0) {
    return 
  }

  console.log(` ${sheep} - Another sheep jumped over the fence`)

  countSheep(sheep-1);

}
countSheep(5);