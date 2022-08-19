function revWords(word, sentence) {
  let words = word.split(", ");
  for (let word of words) {
    sentence = sentence.replace("*".repeat(word.length), word);
  }
  console.log(sentence);
}
revWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
