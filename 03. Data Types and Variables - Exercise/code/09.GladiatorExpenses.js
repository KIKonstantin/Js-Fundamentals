function gladiatorExpenses(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let brokenHelmetCount = 0;
  let brokenSwordCount = 0;
  let brokenShieldCount = 0;
  let armorRepair = 0;
  let justGotBrokenHelmet = false;
  let justGotBrokenSword = false;

  for (let i = 1; i <= lostFightsCount; i++) {
    if (i % 2 == 0) {
      brokenHelmetCount++;
      justGotBrokenHelmet = true;
    }
    if (i % 3 == 0) {
      brokenSwordCount++;
      justGotBrokenSword = true;
    }
    if (justGotBrokenHelmet && justGotBrokenSword) {
      brokenShieldCount++;
      if (brokenShieldCount % 2 == 0) {
        armorRepair++;
      }
    }

    justGotBrokenSword = false;
    justGotBrokenHelmet = false;
  }
  expenses =
    brokenHelmetCount * helmetPrice +
    brokenSwordCount * swordPrice +
    brokenShieldCount * shieldPrice +
    armorRepair * armorPrice;

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
