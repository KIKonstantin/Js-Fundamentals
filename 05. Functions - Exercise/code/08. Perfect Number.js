function perfectNumber(number) {
  let divisorsArr = [];
  let sumDivisors = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      divisorsArr.push(i);
    }
  }
  for (let i = 0; i < divisorsArr.length; i++) {
    sumDivisors += divisorsArr[i];
  }
  
  if (number === sumDivisors) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
