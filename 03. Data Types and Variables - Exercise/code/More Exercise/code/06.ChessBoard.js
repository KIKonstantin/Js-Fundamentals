function chessBoard(n) {
  console.log("<div class=" + `"chessboard"` + ">");
  for (let columns = 1; columns <= n; columns++) {
    console.log("  <div>");
    if (columns % 2 !== 0) {
      for (let rows = 1; rows <= n; rows++) {
        if (rows % 2 !== 0) {
            console.log("    <span class=" + `"black"` + "></span>");
        } else {
          console.log("    <span class=" + `"white"` + "></span>");
        }
      }
    }else{
        for (let rows = 1; rows <= n; rows++) {
            if (rows % 2 !== 0) {
              console.log("    <span class=" + `"white"` + "></span>");
            } else {
              console.log("    <span class=" + `"black"` + "></span>");
            }
          }
    }
    console.log("  </div>")
  }
  console.log("</div>")
}
chessBoard(3)