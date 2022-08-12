function biggestOfThreeNumbers(a, b, c) {
  let biggest = 0;
  if (a > b && a > c) {
    biggest = a;
  } else if (b > a && b > c) {
    biggest = b;
  } else if (c > a && c > b) {
    biggest = c;
  } else {
    biggest = a;
  }
  console.log(biggest);
}
biggestOfThreeNumbers(-2, 7, 3);
biggestOfThreeNumbers(130, 5, 99);
biggestOfThreeNumbers(43, 43.2, 43.1);
biggestOfThreeNumbers(2, 2, 2);
