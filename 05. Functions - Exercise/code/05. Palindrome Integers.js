function palindromeIntegers(inputArr) {
  function isPalindrome(number) {
      // 123 => [1, 2, 3]
      // [1, 2, 3] => [3, 2, 1] => 321
      let startNum = number;
      let reversedNum = Number(number.toString().split('').reverse().join(''));
      if(startNum === reversedNum){
          return true;
      }else{ 
          return false;
      }
  }
  for(let index = 0; index < inputArr.length; index++){
      let currNum = inputArr[index];
      console.log(isPalindrome(currNum));
  }
}
palindromeIntegers([123, 323, 421, 121]);
