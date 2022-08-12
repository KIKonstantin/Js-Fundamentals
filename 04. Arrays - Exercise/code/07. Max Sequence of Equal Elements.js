function maxSequenceofEqualEl(arr) {
  let newArray = [];
  let currentArray = [];
  for (let i = 0; i < arr.length; i++) {
    currentArray = [];
    for (let j = i; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        currentArray.push(arr[j]);
      } else {
        break;
      }
    }
    if (currentArray.length > newArray.length) {
      newArray = currentArray;
    }
  }
  console.log(newArray.join(" "));
}
maxSequenceofEqualEl([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceofEqualEl([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceofEqualEl([4, 4, 4, 4]);
maxSequenceofEqualEl([0, 1, 1, 5, 2, 2, 6, 3, 3]);
