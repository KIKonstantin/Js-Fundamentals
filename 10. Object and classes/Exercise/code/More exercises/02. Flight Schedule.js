//input array of arrays
// index 0 is a specific sector in the airport
// index 1 - newly changed statuses at some of the flights
// index 2 - string of the flight status
// if the status is not changed in the second array, then change the status from the first array to "Ready to fly"
// - otherwise print only flights that have changed their status
// print last change statuses of the flights

// first step is to convert the input
// create a collection to save Flights and their Destinations
// - create a loop to go through the first array and save info to the collection

// second step is to check if Fligths have changes in their statuses
// third step is to print result



function flightSchedule(array) {
    let allFlights = array[0];
    let changedStatuses = array[1];
    let flightStatus = array[2];
        
    let flights = {};
    for (let flight of allFlights) {
        let [flightNum, destination, rest] = flight.split(' ');
        let fullDest = '';
        if(rest !== undefined){
            fullDest = destination + " " + rest;
            flights[flightNum] = {
                Destination: fullDest, Status: 'Ready to fly'
            }

        }else{
            flights[flightNum] = {
                Destination: destination, Status: 'Ready to fly'
            }

        }
    }
    for (let changed of changedStatuses){
        let [flightNum, status] = changed.split(' ');

        if (flights.hasOwnProperty(flightNum)) {
            flights[flightNum].Status = status;
        }
    }

    for(let fly in flights){
        if(flights[fly].Status === String(flightStatus)){
            console.log(flights[fly]);
        }
    }
}




flightSchedule([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
