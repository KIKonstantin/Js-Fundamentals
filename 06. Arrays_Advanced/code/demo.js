/*let myArr = ["one","two","three","four", "five"];
let sliced = myArr.slice(2);
console.log(myArr); // ->  ['one', 'two', 'three', 'four', 'five']
console.log(sliced);// -> ['three', 'four', 'five']
console.log(myArr.slice(2,4)); // -> ['three', 'four']*/

/*let nums = [5, 10, 15, 20, 25, 30];
let mid = nums.splice(2, 3); //start, delete count
console.log(mid.join('|')); // 15|20|25
console.log(nums.join('|')); // 5|10|30
nums.splice(3,2,"twenty", "twenty-five");
console.log(nums.join('|')); // 5|10|15|twenty|twenty-five*/

let arr = [3, 10, 12, 15, 77, 21, 14];
arr.splice(2, 3, '- -');
console.log(arr.join(" "));

let myArr = ['one','two','three','four'];
let lengths = myArr.map(x => x.length);
console.log(lengths); // [3, 3, 5, 4]


