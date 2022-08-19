function cutAndRev(text) {
  let firstHalf = text
    .split("")
    .slice(0, text.length / 2)
    .reverse()
    .join("");
  console.log(firstHalf);
  let secondHalf = text
    .split("")
    .slice(text.length / 2, text.length)
    .reverse()
    .join("");

  console.log(secondHalf);
}
cutAndRev("tluciffiDsIsihTgnizamAoSsIsihT");
