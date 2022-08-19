function stringSubstract(searchedWord, sentence) {
  let words = sentence.split(" ");

  for (let word of words) {
    if (word.toLowerCase() === searchedWord.toLowerCase()) {
      console.log(searchedWord);
      return;
    }
  }
  console.log(`${searchedWord} is not found!`);
}
stringSubstract("javascript", "JavaScript is the best programming language");
stringSubstract("python", "JavaScript the best programming language");
