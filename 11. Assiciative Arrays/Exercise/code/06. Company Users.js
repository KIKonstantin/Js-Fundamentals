function companyUsers(input) {
    // create collection of companies
    let company = {};
    // acsess the input and assign userIDs to the companies 
    for(let line of input){
        let [companyName, userID] = line.split(' -> ');
        //check if it's new company
        // - parse company
        if (company.hasOwnProperty(companyName) === false) {
            company[companyName] = new Set();
        } 
        // -parse userID to company
        company[companyName].add(userID);
    }    
    // - sort object in ascending order
    let companyEntries = Object.entries(company)
    .sort((a,b) => a[0].localeCompare(b[0]));
    // print companyName
    for(let [companyName, userID] of companyEntries){
        console.log(companyName);
        // print user's ID
        for(let user of userID){
            console.log(`-- ${user}`);
        }
    }

}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
console.log('------------')
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
