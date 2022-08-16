function solve(input) {
  let terms = [];
  let dictionary = {};
  for (let element of input) {
    let term = element.split(":")[0].slice(2, -1); 
    let definition = element.split(":")[1].slice(1, -2);
    dictionary[term] = definition;
    terms.push(term);
  }
  let keys = Object.keys(dictionary);
  keys.sort();
  for(let i = 0; i < keys.length; i++){
      let k = keys[i];
      console.log(`Term: ${k} => Definition: ${dictionary[k]}`);
  }
}
solve([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
