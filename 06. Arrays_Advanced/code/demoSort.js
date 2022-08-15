let nums = [20, 40, 10, 30, 100, 5];
nums.sort((a, b) => a - b);
console.log(nums.join(' ')); // ['5' '10' '20' '30' '40' '100']

let words = ['nest','Eggs', 'bite', 'Grip','jAw'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);// ['bite', 'Eggs', 'Grip', 'jAw', 'nest']