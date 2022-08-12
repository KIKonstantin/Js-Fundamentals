function test(array){
    let current = array.shift();
    let secondindex = array.shift();
    let thirdindex = array.shift();
    console.log(array.join(" "));
    console.log(current + " " + secondindex + " " + thirdindex);
}
test([51, 47, 32, 66])