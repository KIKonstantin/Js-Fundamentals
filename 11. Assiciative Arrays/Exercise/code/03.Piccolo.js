function solve(input) {
  // create storage collection
  let parking = new Set();

  // for every line of input
  for (let line of input) {
    // - parse line
    let [command, number] = line.split(", ");
    if (command === "IN") {
      // - if command is IN, car enters parking (store in collection)
      parking.add(number);
    } else {
      // - else, car exits parking (remove from collection)
      parking.delete(number);
    }
  }
  if (parking.size === 0) {
    console.log(`Parking Lot Is Empty`);
  } else {
    // convert collection to array
    // sort by name
    let result = Array.from(parking).sort();
    // print result
    for (let car of result) {
      console.log(car);
    }
  }
}
solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
