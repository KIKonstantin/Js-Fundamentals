function meetings(input) {
  // crate collection
  let result = {};
  // for every entry of input
  for (let line of input) {
    // --parse
    let [day, name] = line.split(" ");
    // -- store only if day is available
    if (result.hasOwnProperty(day)){
        console.log(`Conflict on ${day}!`);
    }else{
    result[day] = name;
    console.log(`Scheduled for ${day}`);
  }
}
  // print result
  for (let day in result) {
    console.log(day, "->", result[day]);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
console.log('-------------');
meetings([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
