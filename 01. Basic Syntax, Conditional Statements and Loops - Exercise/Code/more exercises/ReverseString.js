function ReverseString(word){
    let splitstring = word.split("");
    let revstri = splitstring.reverse();
    let joinArray = revstri.join("");
    console.log(joinArray);
}
ReverseString("Split")