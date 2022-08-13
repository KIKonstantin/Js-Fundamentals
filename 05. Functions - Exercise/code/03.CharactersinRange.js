function charachtersInRange(char1, char2) {
  let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
  let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
  let charsInRangeArray = [];

  for (let i = startChar + 1; i < endChar; i++) {
    charsInRangeArray.push(String.fromCharCode(i));
  }

  console.log(charsInRangeArray.join(" "));
}

charachtersInRange("a", "d");
