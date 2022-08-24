function solve(input) {
  let digitsRegEx = /\d/g;
  let emojiRegEx = /((::)|(\*\*))[A-Z][a-z]{2,}\1/g;
  let threshold = input[0]
    .match(digitsRegEx)
    .map(Number)
    .reduce((a, b) => a * b);
  let emojis = input[0].match(emojiRegEx);
  console.log(`Cool threshold: ${threshold}`);
  console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
  let validEms = '';
  for(let i = 0; i < emojis.length; i++) {
    let coolnessStrenght = emojis[i]
      .split("")
      .slice(2, -2)
      .map((char) => char.charCodeAt())
      .reduce((a, b) => a + b);
      if(coolnessStrenght > threshold){
        console.log(emojis[i]);
      }
  }
}
solve([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
