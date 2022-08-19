function pascalSplitter(text) {
  let sentence = text[0];
  for (let i = 1; i < text.length; i++) {
    if (text[i].toUpperCase() !== text[i]) {
      sentence += text[i];
    } else {
      sentence += ", " + text[i];
    }
  }
  console.log(sentence);
}
pascalSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
