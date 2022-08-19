function phonebook(input) {
    let result = {};
    
    // for every line in input
    for (let line of input) {
        // - parse line
        let tokens = line.split(';');
        let name = tokens[0];
        let phone = tokens[1];
        // - store data
        result[name] = phone;
    }

    // print result
    for (let name in result) {
        console.log(`${name} -> ${result[name]}`);
    }
}
phonebook([
  "Tim Burton; 0834212554",
  "Peter Buckstone; 0877547887",
  "Bill Gates; 0896543112",
  "Tim Ferris; 0876566344",
]);
//phonebook(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);
