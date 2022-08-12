function dungeonestDark(allRooms) {
  let room = allRooms[0].split("|");
  let health = 100;
  let coins = 0;
  let isntDead = true;

  for (let index = 0; index < room.length; index++) {
    let roomSplit = room[index].split(" ");
    let object = roomSplit[0];
    let number = Number(roomSplit[1]);

    switch (object) {
      case "potion":
        health += number;
        if (health > 100) {
          let excessHP = health - 100;
          health = 100;
          console.log(`You healed for ${number - excessHP} hp.`);
          console.log(`Current health: ${health} hp.`);
        } else {
          console.log(`You healed for ${number} hp.`);
          console.log(`Current health: ${health} hp.`);
        }
        break;
      case "chest":
        coins += number;
        console.log(`You found ${number} coins.`);
        break;
      default:
        health -= number;
        if (health > 0) {
          console.log(`You slayed ${object}.`);
        } else {
          console.log(`You died! Killed by ${object}.`);
          console.log(`Best room: ${index + 1}`);
          isntDead = false;
          break;
        }
    }
    if (!isntDead) {
      break;
    }
  }
  if (isntDead) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
