function solve(input) {
  let text = input.shift();
  let line = input.shift();
  while (line !== "Generate") {
    let command = line.split(">>>")[0];
    if (command === "Slice") {
      let startIndex = Number(line.split(">>>")[1]);
      let endIndex = Number(line.split(">>>")[2]);
      let left = text.slice(0, startIndex);
      let right = text.slice(endIndex);
      text = left + right;
      console.log(text);
    } else if (command === "Flip") {
      let caseSens = line.split(">>>")[1];
      let startIndex = Number(line.split(">>>")[2]);
      let endIndex = Number(line.split(">>>")[3]);
      let left = text.slice(0, startIndex);
      let right = text.slice(endIndex);
      let substr = text.substring(startIndex, endIndex);
      if (caseSens === "Upper") {
        substr = substr.toUpperCase();
      } else if (caseSens === "Lower") {
        substr = substr.toLowerCase();
      }
      text = left + substr + right;
      console.log(text);
    } else if (command === "Contains") {
      let substr = line.split(">>>")[1];
      if (text.includes(substr)) {
        console.log(`${text} contains ${substr}`);
      } else {
        console.log(`Substring not found!`);
      }
    }
    line = input.shift();
  }
  console.log(`Your activation key is: ${text}`);
}

solve([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
console.log("----------------");
solve([
  "134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate",
]);
