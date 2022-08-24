function mirrorWords(input) {
  // paste pattern into a variable
  let pattern =
    /([@|#])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
  let words = pattern.exec(input);
  let noMirror = true;
  let count = 0;
  let result = "";
  // create a loop to exec the regExp
  while (words !== null) {
    let rev = words.groups.secondWord.split("").reverse().join("");
    count++;
    // check if second word is the same by reversing it
    if (words.groups.firstWord === rev) {
      noMirror = false;
      // `{wordOne} <=> {wordtwo}, {wordOne} <=> {wordtwo}, … {wordOne} <=> {wordtwo}`
      result +=
        words.groups.firstWord + " <=> " + words.groups.secondWord + ", ";
    }
    words = pattern.exec(input);
  }
  // print all matches like this `The mirror words are:`
  if (count === 0) {
    console.log(`No word pairs found!`);
  } else {
    console.log(`${count} word pairs found!`);
  }
  if (noMirror) {
    console.log("No mirror words!");
  } else {
    console.log(`The mirror words are:`);
    console.log(result.slice(0, -2));
  }
}

mirrorWords([
  "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
mirrorWords(["#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@"]);
