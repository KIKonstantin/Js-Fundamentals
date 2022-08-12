function sumDigits(input){
    let sum = 0;
    let numberAsString = input.toString();
    for(const char of numberAsString){
        sum+= Number(char);
    }
    console.log(sum);
}
sumDigits(23456789)