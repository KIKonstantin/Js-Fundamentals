function secretChat(input) {
  let text = input.shift();
  let commands = {
    InsertSpace,
    Reverse,
    ChangeAll,
  };

  while (input[0] !== "Reveal") {
    let [name, p1, p2] = input.shift().split(":|:");
    let command = commands[name];
    text = command(text, p1, p2);
  }
  console.log(`You have a new text message: ${text}`);
  function InsertSpace(text, index) {
    index = +index;
    let left = text.slice(0, index);
    let right = text.slice(index);
    let result = left + " " + right;
    console.log(result);
    return result;
  }

  function Reverse(text, substr) {
    let index = text.indexOf(substr);
    if (index !== -1) {
      let reversed = substr.split("").reverse().join("");
      let left = text.slice(0, index);
      let right = text.slice(index + substr.length);
      let result = left + right + reversed;
      console.log(result);
      return result;
    } else {
      console.log("error");
      return text;
    }
  }
  function ChangeAll(text, substr, replacement) {
    let result = text.split(substr).join(replacement);
    console.log(result);
    return result;
  }
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
console.log("=======");
secretChat([
  "Hiware?uiy",
  "ChangeAll:|:i:|:o",
  "Reverse:|:?uoy",
  "Reverse:|:jd",
  "InsertSpace:|:3",
  "InsertSpace:|:7",
  "Reveal",
]);
