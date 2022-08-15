function firstAndLastKnumbers(arr) {
    let k = arr.shift();

    let firstK = arr.slice(0, k);
    let lastK = arr.slice(-k);
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
firstAndLastKnumbers([2, 7, 8, 9]);
firstAndLastKnumbers([3, 6, 7, 8, 9]);
