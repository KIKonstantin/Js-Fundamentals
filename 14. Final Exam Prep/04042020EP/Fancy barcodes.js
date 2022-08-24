function solve(input) {
  let n = input.shift();
  let pattern = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;
  let digits = /\d/g;

  for (let i = 0; i < input.length; i++) {
    let isValid = input[i].match(pattern);
    let group = input[i].match(digits);
    if (isValid !== null) {
      if (group !== null) {
        group = group.join("");
        console.log(`Product group: ${group}`);
      } else {
        group = "00";
        console.log(`Product group: ${group}`);
      }
    } else {
      console.log(`Invalid barcode`);
    }
  }
}
solve(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
console.log(`----------`);
solve([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##", //ne e
  "@InvalidIteM@", //ne e
  "@#Invalid_IteM@#", //ne e
  "@#ValiditeM@#",
]);
