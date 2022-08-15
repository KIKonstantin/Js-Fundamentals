function negativePositive(input) {
  let result = [];
  // ToDO process input

  for (let element of input) {
    element = Number(element);
    if (element < 0) {
      result.unshift(element);
    }else{
        result.push(element);
    }
  }

  for (let element of result) {
      console.log(element);
  }
}
negativePositive(["7", "-2", "8", "9"]);
negativePositive(["3", "-2", "0", "-1"]);
