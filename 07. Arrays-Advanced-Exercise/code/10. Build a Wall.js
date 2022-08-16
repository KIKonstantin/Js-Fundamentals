function buildAWall(array) {
  let workerInitial = array.map(Number);
  let sumOfSteps = workerInitial.reduce(((a, b) => a + b));
  console.log(sumOfSteps);
  let sum = 21 + 25 + 28;
  console.log(sum);
}
buildAWall([21, 25, 28])