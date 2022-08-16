function gladiatorsInventory(petersInventory) {
  let items = petersInventory.shift().split(" ");
  for (let commands of petersInventory) {
    let commandSplit = commands.split(" ");
    let command = commandSplit[0];
    let item = commandSplit[1];
    if (command === "Buy") {
      if (!items.includes(item)) {
        items.push(item);
      }
    } else if (command === "Trash") {
      if (items.includes(item)) {
        let indexOfItem = items.indexOf(item);
        items.splice(indexOfItem, 1);
      }
    } else if (command === "Repair") {
      if (items.includes(item)) {
        let indexOfItem = items.indexOf(item);
        items.splice(indexOfItem, 1);
        items.push(item);
      }
    } else if (command === "Upgrade") {
      let equipmentForUpgrade = item.split("-");
      let equipment = equipmentForUpgrade[0];
      let upgrade = equipmentForUpgrade[1];
      if (items.includes(equipment)) {
        let indexOfItem = items.indexOf(equipment);
        items.splice(indexOfItem + 1, 0, `${equipment}:${upgrade}`);
      }
    }
  }
  console.log(items.join(" "));
}
gladiatorsInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
console.log("\n-----------\n");
gladiatorsInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
