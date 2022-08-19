function minerTask(input) {
  let mine = {};
  for (let i = 0; i < input.length; i += 2) {
    let currInput = input[i];
    if (!mine.hasOwnProperty(currInput)) {
      mine[currInput] = +input[i + 1];
    } else {
      mine[currInput] += +input[i + 1];
    }
  }
  for (let key in mine) {
    console.log(`${key} -> ${mine[key]}`);
  }
}
//minerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
console.log('--------');
minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
