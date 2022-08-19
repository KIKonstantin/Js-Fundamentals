let myKey = "fox-trot";
let assocArr = {
    beta: 2,
    [myKey]: 10,
    gamma: 3,
    alpha: 1,
};
//iterate destructed entries:
let entries = Object.entries(assocArr);
entries.sort((a, b) => {
    keyA = a[0];
    keyB = b[0];
});
console.log(entries[0]);
console.log(entries[1]);
console.log(entries[2]);
console.log(entries[3]);