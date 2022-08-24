function furnitureShop(input) {
  let regex = />>(?<furniture>\w+)<<(?<price>\d+[\.]*\d*\d*)!(?<quantity>\d+)/
  let expenses = 0;
  console.log(`Bought furniture:`);
  for (let line of input) {
     if(line === 'Purchase'){break;}
     let result = regex.exec(line);
     if(result !== null){
         expenses += +(result.groups.price) * +(result.groups.quantity)
         console.log(result.groups.furniture);
     }
  }
  console.log(`Total money spend: ${expenses.toFixed(2)}`);
}
  furnitureShop([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);
furnitureShop([
  ">>Laptop<<312.2323!3",
  ">>TV<<300.21314!5",
  ">Invalid<<!5",
  ">>TV<<300.21314!20",
  ">>Invalid<!5",
  ">>TV<<30.21314!5",
  ">>Invalid<<!!5",
  "Purchase",
]);
