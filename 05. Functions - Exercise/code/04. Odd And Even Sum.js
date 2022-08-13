function oddAndEvenSum(number) {
  let numberAsText = number.toString();
  function totalOddSum(numAsString) {
    let oddSum = 0;
    for (let index = 0; index < numAsString.length; index++) {
      let curNum = Number(numAsString[index]);
      if(curNum % 2 !== 0){
          oddSum += curNum;
      }
    }
    return oddSum;
  }
  function totalEvenSum(numAsText) {
    let evenSum = 0;
    for (let index = 0; index < numAsText.length; index++) {
      let curNum = Number(numAsText[index]);
      if(curNum % 2 === 0){
        evenSum += curNum;
      }
    }
    return evenSum;
  }
  console.log(`Odd sum = ${totalOddSum(numberAsText)}, Even sum = ${totalEvenSum(numberAsText)}`)
}
oddAndEvenSum(1000453);
