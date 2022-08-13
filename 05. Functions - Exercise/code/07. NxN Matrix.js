function nxnMatrix(num) {
  let arr = [];
  for (let rows = 1; rows <= num; rows++) {
    for (let columns = 1; columns <= num; columns++) {
      arr.push(num);
    }
    console.log(arr.join(" "));
    arr = [];
  }
}
nxnMatrix(7);
