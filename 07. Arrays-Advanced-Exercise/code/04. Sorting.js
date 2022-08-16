function sorting(array) {
  array = array.sort((a, b) => b - a);
  console.log(array);
  let newArr = [];
  while (array.length > 0) {
    let biggestNum = array.shift();
    newArr.push(biggestNum);
    let smallerNum = array.pop();
    newArr.push(smallerNum);
  }
  console.log(newArr.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
