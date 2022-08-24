function winningTickets(string) {
  let tickets = string.split(", ");
  tickets = tickets.map(x => x.trim());
  let winningSymbols = /[\$\@\$\^]{6,}/g;
  for (let i = 0; i < tickets.length; i++) {
      let isValid = false;
      let half = tickets[i].length / 2;
      if (tickets[i].length === 20) {
          isValid = true;
        }
        if (isValid) {
            let leftSide = tickets[i].slice(0, half);
            let rightSide = tickets[i].slice(half);
            let leftWin = leftSide.match(winningSymbols);
            let rightWin = rightSide.match(winningSymbols);
            if (leftWin === null || rightWin === null) {
                console.log(`ticket "${tickets[i]}" - no match`);
      } else if (leftWin[0].length === rightWin[0].length) {
        if (leftWin[0][0] === rightWin[0][0]) {
          if (leftWin[0].length === 10) {
            console.log(
              `ticket "${tickets[i]}" - ${leftWin[0].length}${leftWin[0][0]} Jackpot!`
            );
          } else {
            console.log(
              `ticket "${tickets[i]}" - ${leftWin[0].length}${leftWin[0][0]}`
            );
          }
        } else {
          console.log(`invalid ticket`);
        }
      }
    } else {
      console.log(`invalid ticket`);
    }
  }
}
winningTickets("Cash$$$$$$Ca$$$$$$sh");
winningTickets("$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey");
winningTickets("validticketnomatch:(");
