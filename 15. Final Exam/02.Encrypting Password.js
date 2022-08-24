function encrypting(input) {
    let n = input.shift();
    for (let i = 0; i < n; i++) {
      let pattern =
      /(.+)>(?<digit>\d{3})|(?<smallcaps>[a-z]{3})|(?<bigcaps>[A-Z]{3})|(?<symbol>.{3})<\1/g;
    let words = input[i];
    let valid = pattern.exec(words);
    if(valid){
        console.log(words);
    }
    
  }
}
encrypting([
  "3",
  "##>00|no|NO|!!!?<###",
  "##>123|yes|YES|!!!<##",
  "$$<111|noo|NOPE|<<>$$",
]);
