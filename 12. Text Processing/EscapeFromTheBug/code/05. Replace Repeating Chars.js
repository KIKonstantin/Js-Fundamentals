function replaceRepChars(text) {
  let wordNonRep = text.split("");
  let result = "";
  for (let i = 0; i < wordNonRep.length; i++) {
      if(wordNonRep[i] !== wordNonRep[i+1]){
        result += wordNonRep[i];
      }
  }
  console.log(result);
}
replaceRepChars("qqqwerqwecccwd");
