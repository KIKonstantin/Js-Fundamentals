function solve(input){
    let pattern = /([=|\/])[A-Z][A-Za-z]{2,}\1/g;
    let destinations = input.match(pattern);
    let places = [];
    let travelPoints = 0;
    if(destinations !== null){
        for(let i = 0; i < destinations.length; i++){
            let place  = destinations[i].slice(1,-1);
            places.push(place);
            travelPoints += place.length;
        }
    }
    console.log(`Destinations: ${places.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
solve("ThisIs some InvalidInput");