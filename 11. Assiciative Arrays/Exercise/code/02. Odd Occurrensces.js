function solve(input) {
  // convert input to array
  let words = input.split(" ");
  let result = {};

  // for every elemento of input array
  for (let word of words) {
    word = word.toLocaleLowerCase();
    // - count word as lowerCase
    if (result.hasOwnProperty(word)) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }
  // filter only word that occurs odd number of times

  let filtered = Object.entries(result).filter(([word, count]) => {
    if (count % 2 === 1) {
      return true;
    } else {
      return false;
    }
  });
  // print list of words
  console.log(filtered.map(entry => entry[0]).join(' '));
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
solve("Cake IS SWEET is Soft CAKE sweet Food");
