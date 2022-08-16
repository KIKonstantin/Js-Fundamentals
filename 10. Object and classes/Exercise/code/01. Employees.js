function employees(employeeName) {
    let employee = {};
    for (let token of employeeName) {
        employee.name = token;
        employee.personalNumber = token.length;
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
console.log('-----------');
employees(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
