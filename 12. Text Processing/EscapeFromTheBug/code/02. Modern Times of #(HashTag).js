function hashtag(text) {
  text = text.split(" ");
  for (let word of text) {
    if (word.startsWith("#") && word.length > 1) {
      let asciiCode = word.charCodeAt(1);
      let isLetter =
        (asciiCode >= 65 && asciiCode <= 90) || // Upper case
        (asciiCode >= 97 && asciiCode <= 122); // Lower case
      if (isLetter) {
          console.log(word.substring(1));
      }
    }
  }
}
hashtag("Nowadays everyone uses # to tag a #special word in #socialMedia");
hashtag(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
