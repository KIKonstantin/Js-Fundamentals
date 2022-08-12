function addAndSubstract(arr) {
  let myarr = arr;
  let sumOfOriginalArr = 0;
  let sumOfModdArr = 0;

  for (let i = 0; i < myarr.length; i++) {
    sumOfOriginalArr += myarr[i];
    if (myarr[i] % 2 === 0) {
      myarr[i] += i;
    } else {
      myarr[i] -= i;
    }
    sumOfModdArr += myarr[i];
  }
  console.log(myarr);
  console.log(sumOfOriginalArr);
  console.log(sumOfModdArr);
}
addAndSubstract([5, 15, 23, 56, 35]);
addAndSubstract([-5, 11, 3, 0, 2]);
