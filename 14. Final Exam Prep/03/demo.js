let car = {
  Audi: [15, 65000, "front, back, hood"],
  BMW: [15, 65000, "front, back, hood"],
  Dacia: [15, 65000, "front, back, hood"],
};
let model = "Audi";
car[model].fuel += 50;
car["Dacia"].mile -= 150000;

let takeAllOut = Object.entries(car);
for (let key of takeAllOut) {
  console.log(`Car model: ${key[0]}, fuel: ${key[0]}, Distance: ${key[1]}, Parts: ${key[2]}`);
}

// for (let key of Object.entries(car)) {
//     let car = key[0];
//     let info = key[1];
//     console.log(car);
//     console.log(info.fuel);
//     console.log(info.mile);
// }
