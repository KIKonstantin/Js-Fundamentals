function loadingBar(power) {
  if (power >= 0 && power <= 99) {
    let number = power / 10;
    let charProcent = "%";
    let dot = ".";
    let array = [];
    for (let i = 1; i <= 10; i++) {
      if (i <= number) {
        array.push(charProcent);
      } else {
        array.push(dot);
      }
    }
      console.log(`${power}% [${array.join("")}]`);
      console.log(`Still loading...`);
  } else if (power === 100) {
    console.log("100% Complete!");
  }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);
