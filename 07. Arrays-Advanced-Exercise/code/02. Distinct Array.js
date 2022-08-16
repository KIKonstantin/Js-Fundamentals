function distinctArray(nums) {
  for (let index = 0; index < nums.length; index++) {
    let currNumber = nums[index];
    for (let i = index + 1; i < nums.length; i++) {
      let nextElement = nums[i];
      if (currNumber === nextElement) {
        nums.splice(i, 1);
        i--;
      }
    }
  }
  console.log(nums.join(" "));
}

function secondSolution(array) {
    let myArr = [];
    for (let number of array) {
        if (!myArr.includes(number)) {
            myArr.push(number);
        }
    }
    console.log(myArr.join(' '));
}


//distinctArray([1, 2, 3, 4]);
//distinctArray([7, 8, 9, 7, 2, 3, 2, 4, 1, 2]);
//distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);

secondSolution([1, 2, 3, 4]);
secondSolution([7, 8, 9, 7, 2, 3, 2, 4, 1, 2]);
secondSolution([20, 8, 12, 13, 4, 4, 8, 5]);