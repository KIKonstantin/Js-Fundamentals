function processOddNumbers(array) {
  // take elements in odd positions and place them in new array
  // double the elements from the new array
  // reverse the positions in the new array and print them on the console
  console.log(
    array
      .filter((x, i) => i % 2 === 1)
      .map((x) => x * 2)
      .reverse()
      .join(" ")
  );
}
processOddNumbers([10, 15, 20, 25]);
