function ladybugs(input) {
  let n = input.shift();
  let field = new Array(n).fill(0);
  //parse field
  let ladyBugIndexes = input.shift().split(" ");

  for (let index of ladyBugIndexes) {
    //field[Number(index)] = 1;
    index = Number(index);
    if (index >= 0 && index < n) {
      field[index] = 1;
    }
  }

  for (let command of input) {
    let tokens = command.split(" ");
    let startingIndex = Number(tokens[0]);
    if (field[startingIndex] == 1) {
      let currentIndex = startingIndex;
      let direction = Number(tokens[1]);
      let offset = Number(tokens[2]);
      if (direction === "left") {
        offset *= -1;
      }
    

    //repeat fly operation until:
    // - found empty cell OR
    // - end of field

    while (currentIndex >= 0 || currentIndex < n || field[currentIndex] === 1) {
      currentIndex += offset;
    }
    field[startingIndex] = 0;
    if (currentIndex >= 0 && currentIndex < n) {
      field[currentIndex] = 1;
    }
  }
}
  //print result
  console.log(field.join(" "));
}

ladybugs([3, "0 1", "0 right 1", "2 right 1"]);
console.log("-----------------------");
console.log("-----------------------");
ladybugs([3, "0 1 2", "0 right 1", "1 right 1", "2 right 1"]);
console.log("-----------------------");
console.log("-----------------------");
ladybugs([5, "3", "3 left 2", "1 left -2"]);
console.log("-----------------------");
console.log("-----------------------");

// 0 1 0
// 0 1 1
// 0 1 0
