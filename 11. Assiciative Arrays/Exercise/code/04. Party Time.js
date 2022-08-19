function solve(input) {
    
    // create tow collections
    let vipInvites = new Set();
    let regularInvites = new Set();
    
    // for every line of input, until 'PARTY'
    while(input[0] !== 'PARTY'){
        let guest = input.shift();
        if (Number.isNaN(Number(guest[0]))) {
            // - if invitation is regular, add to regular list
            regularInvites.add(guest);
        }else{
            // - otherwise, add to VIP guest list/collection
            vipInvites.add(guest);
        }
    }
    
    // for every remaining line
    for (let guest of input) {
        // - remove guest from their respective list
        vipInvites.delete(guest);
        regularInvites.delete(guest);
    }

    // print sum of unused invites from both collections
    console.log(vipInvites.size + regularInvites.size);
    // print unused VIP invites
    for(let guest of vipInvites){
        console.log(guest);
    }
    for (let guest of regularInvites) {
        console.log(guest);
    }
    // print unused regular invites
}
solve([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);
console.log('===========');
solve([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
