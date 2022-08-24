function softUniBarIncome(input) {
  let totalIn = 0;
  for (let line of input) {
    let regex =
      /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|([^.|$%])*(?<price>\d+\.?[0-9]+)\$/g;
    let result = regex.exec(line);
    if (result) {
      let totalPrice =
        Number(result.groups.quantity) * Number(result.groups.price);
      console.log(
        `${result.groups.customer}: ${
          result.groups.product
        } - ${totalPrice.toFixed(2)}`
      );
      totalIn += totalPrice;
    } else if (line === "end of shift") {
      console.log(`Total income: ${totalIn.toFixed(2)}`);
    }
  }
}
softUniBarIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
softUniBarIncome([
  "%InvalidName%<Croissant>|2|10.3$",
  "%Peter%<Gum>1.3$",
  "%Maria%<Cola>|1|2.4",
  "%Valid%<Valid>valid|10|valid20$",
  "end of shift",
]);
