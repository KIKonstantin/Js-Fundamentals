function sortAddressbook(input) {
  let result = {};
  //for every line
  for (let line of input) {
    // parse
    let [name, address] = line.split(":");
    // -store
    result[name] = address;
  }
  // /!\ sort result
  //let sorted = Object.entries(result);
  //sorted.sort((a, b) => a[0].localeCompare(b[0]));

  let sortedKeys = Object.keys(result);
  sortedKeys.sort((a, b) => a.localeCompare(b));
  let entries = Object.entries(result);
  console.log(entries);
  // print result
  /*for (let [name, address] of sorted) {
    console.log(name, "->", address);
  }*/
  for (let name of sortedKeys) {
      console.log(name,'->', result[name]);
  }

}
sortAddressbook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
console.log(`\n -----------\n`);
sortAddressbook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
