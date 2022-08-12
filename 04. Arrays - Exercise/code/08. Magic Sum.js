function magicSum(array, magicNumber) {
  for (let index = 0; index < array.length; index++) {
    let currentEl = array[index];
    for (let jasper = index + 1; jasper < array.length; jasper++) {
        let nextEl = array[jasper];
        let sum = currentEl + nextEl;
      if (sum === magicNumber) {
        console.log(`${currentEl} ${nextEl}`);
      }
    }
  }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);
