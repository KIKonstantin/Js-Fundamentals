//let fruits = ["Banana", "Orange", "Apple", "Mango"];
//let sortedAlphabetically = fruits.sort();
//console.log(sortedAlphabetically);

let arr = [1, 2, 3, 4];
let arrTwo = [4, 0, 9, 7];
arr.splice(0, 0, ...arrTwo);
console.log(arr);