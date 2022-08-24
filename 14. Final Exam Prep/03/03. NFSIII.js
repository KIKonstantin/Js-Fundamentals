function NFSIII(input) {
  // take first line for number of cars
  let n = input.shift();
  let cars = {};
  //   let commands = {
  //     Drive,
  //   };
  // create a loop
  for (let i = 0; i < n; i++) {
    // -- create a collection of cars with their name, mileage and fuel separated with |
    let token = input.shift().split("|");
    let car = token[0];
    let miles = Number(token[1]);
    let fuel = Number(token[2]);
    cars[car] = {
      miles,
      fuel,
    };
  }

  let line = input.shift();
  //  create a second loop until reciving "Stop"
  while (line !== "Stop") {
    // each line contains command : nameOfCar : p1 = distance || fuel ? p2 = fuel
    let token = line.split(" : ");
    let command = token[0];
    let car = token[1];
    let p1 = Number(token[2]);
    let p2 = Number(token[3]);
    if (cars.hasOwnProperty(car)) {
      // - Drive : {car} : {distance} : {fuel}
      if (command === "Drive") {
        // -- check if fuel is enough for distance
        if (p2 <= cars[car].fuel) {
          // ---  increase mileage of car with given distance
          cars[car].miles += p1;
          // --- decrease fuel of car with given fuel
          cars[car].fuel -= p2;
          // --- print {car} driven for {p2} kilometers. {fuel} liters of fuel consumed.
          console.log(
            `${car} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`
          );
          if (cars[car].miles >= 100000) {
            // if mileage of car reaches 100 000 km, remove it from collection
            console.log(`Time to sell the ${car}!`);
            delete cars[car];
          }
        } else {
          // --- print Not enough fuel to make that ride
          console.log(`Not enough fuel to make that ride`);
        }
      } else if (command === "Refuel") {
        // Refuel : {car} : {fuel}"
        // refill tank of car with the given fuel
        // if fuel > 75 take only what is required to fill it up
        let diff = Math.min(75 - cars[car].fuel, p1);
        cars[car].fuel += diff;
        console.log(`${car} refueled with ${diff} liters`);
      } else if (command === "Revert") {
        // Revert : {car} : {kilometers}
        cars[car].miles -= p1;
        // if mileage of car goes < 10 000 km
        if (cars[car].miles < 10000) {
          // set it to 10 000km and don't print anything
          cars[car].miles = 10000;
        } else {
          // else
          // - print "{car} mileage decreased by {amount reverted} kilometers
          console.log(`${car} mileage decreased by ${p1} kilometers`);
        }
      }
    }
    line = input.shift();
  }
  //after reciving "Stop"
  //print all cars in collection in following format
  // for (let carData of Object.entries(cars)) {
  //   let model = carData[0];
  //   let info = carData[1];
  //   // "{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."
  //   console.log(
  //     `${model} -> Mileage: ${info.miles} kms, Fuel in the tank: ${info.fuel} lt.`
  //   );
  // }

  Object.entries(cars).forEach((key) => console.log(`${key[0]} -> Mileage: ${key[1].miles} kms, Fuel in the tank: ${key[1].fuel} lt.`));
}

NFSIII([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
