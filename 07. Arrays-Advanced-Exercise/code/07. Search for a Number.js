function numberSearch(array, input) {
  let numberToTakeFromArr = input[0];
  let deleteNumbersFromArr = input[1];
  let searchedNumber = input[2];
  
  let myNewArr = array.splice(0, numberToTakeFromArr);
  myNewArr = myNewArr.splice(deleteNumbersFromArr);
  let counter = 0;
  for (let index = 0; index < myNewArr.length; index++) {
      if (myNewArr[index] === searchedNumber) {
          counter++;
      }
  }
  console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}
numberSearch([5, 2, 3, 4, 1, 6], [5, 2, 3]);
