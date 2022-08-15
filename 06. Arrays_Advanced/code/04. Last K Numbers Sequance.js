function kSequence(n, k) {
  //create result array containing 1
  let result = [1];
  // repeat n - 1 times
  for (let i = 0; i < n - 1; i++) {
    // - take last k elements from result array
    let lastK = result.slice(-k);
    // - sum elements
    let sum = 0;
    for (let element of lastK) {
      sum += element;
    }
    // - add sum to array
    result.push(sum);
  }
  // print result
  console.log(result.join(' '));
}
kSequence(6.3);
kSequence(8, 2);
kSequence(9, 5);
