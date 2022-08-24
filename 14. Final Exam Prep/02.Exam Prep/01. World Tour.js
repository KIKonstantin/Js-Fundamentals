function worldTour(input) {
  let tour = input.shift();
  let line = input.shift();
  while (line !== "Travel") {
    let [command, p1, p2] = line.split(":");
    if (command === "Add Stop") {
        p1 = +p1;
        let left = tour.split("").slice(0, p1).join("");
        let right = tour.split("").slice(p1).join("");
        tour = left + p2 + right;
        console.log(tour);
    } else if (command === "Remove Stop") {
        p1 = +p1;
        p2 = +p2;
        let left = tour.split("").slice(0, p1).join("");
        let right = tour.split("").slice(++p2).join("");
        tour = left + right;
        console.log(tour);
    } else if (command === "Switch") {
        tour = tour.split(p1).join(p2);
        console.log(tour);
    }
    line = input.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${tour}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
