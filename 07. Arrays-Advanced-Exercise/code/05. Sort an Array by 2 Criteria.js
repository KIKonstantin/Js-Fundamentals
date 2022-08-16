function sortArrByTwoCriteria(array) {
  array = array.sort((a, b) => a.length - b.length); //beta, alpha, gamma
  let arr = [];
  let myArr = [];
  for (let i = 0; i < array.length; i++) {
    let curr = array[i];
    let next = array[i + 1];
    if (next !== undefined) {
      if (curr.length === next.length) {
        myArr.push(curr);
      } else {
        myArr.push(curr);
        myArr.sort((a, b) => a.localeCompare(b));
        arr.push(...myArr);
        myArr = [];
      }
    } else {
      myArr.push(curr);
      myArr.sort((a, b) => a.localeCompare(b));
      arr.push(...myArr);
      break;
    }
  }
  console.log(arr.join("\n"));
}
//sortArrByTwoCriteria(["alpha", "beta", "gamma"]);
//sortArrByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortArrByTwoCriteria(["Deny", "omen", "test", "Default"]);
