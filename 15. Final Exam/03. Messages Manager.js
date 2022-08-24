function messagesManager(input) {
    let capacity = input.shift();
    let line = input.shift();
    let manager = {};
    while(line !== 'Statistics'){
        let [command, p1, p2, p3] = line.split("=");
        if(command === 'Add'){
            if(!manager.hasOwnProperty(p1)){
                let sum = +p2 + +p3
                manager[p1] = [+p2, +p3, sum];
            }
        }else if(command === 'Message'){
            if(manager.hasOwnProperty(p1) && manager.hasOwnProperty(p2)){
                manager[p1][0]--;
                manager[p1][2]++;
                manager[p2][1]++;
                manager[p2][2]++;
                if(manager[p1][2] >= capacity){                   
                    console.log(`${p1} reached the capacity!`)
                    delete manager[p1];
                }
                if(manager[p2][2] >= capacity){
                    console.log(`${p2} reached the capacity!`)
                    delete manager[p2];
                }
            }
        }else if(command ===  'Empty'){
            if(manager.hasOwnProperty(p1)){
                delete manager[p1];
            }else if(p1 === 'All'){
                for (const key in manager) {
                    delete manager[key];
                  }
            }
        }
        line = input.shift();
    }
    console.log(`Users count: ${Object.keys(manager).length}`);
    let keys = Object.entries(manager);
    for (let index of keys) {
        console.log(`${index[0]} - ${index[1][2]}`);
    }
}
messagesManager([
  "10",
  "Add=Berg=9=0",
  "Add=Kevin=0=0",
  "Message=Berg=Kevin",
  "Add=Mark=5=4",
  "Statistics",
]);
console.log('--------------')
messagesManager([
  "20",
  "Add=Mark=3=9",
  "Add=Berry=5=5",
  "Add=Clark=4=0",
  "Empty=Berry",
  "Add=Blake=9=3",
  "Add=Michael=3=9",
  "Add=Amy=9=9",
  "Message=Blake=Amy",
  "Message=Michael=Amy",
  "Statistics",
]);
console.log('------');
messagesManager(["12",
"Add=Bonnie=3=5",
"Add=Johny=4=4",
"Empty=All",
"Add=Bonnie=3=3",
"Statistics"]);