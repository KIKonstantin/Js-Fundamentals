function bombSpecialNumber(array, bomb) {
  let bombNumber = bomb[0];
  let bombRadious = bomb[1];

  let indexOfBomb = array.indexOf(bombNumber);

  while (indexOfBomb !== -1) {
    let startExplosionIndex = Math.max(0, indexOfBomb - bombRadious);
    let explosionLength = bombRadious * 2 + 1;
    array.splice(startExplosionIndex, explosionLength);
    indexOfBomb = array.indexOf(bombNumber);
  }
  let sumOfSurvaviors = array.reduce((a, b) => a + b, 0);
  console.log(sumOfSurvaviors);
}
bombSpecialNumber([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
